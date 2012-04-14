/**
 * @fileOverview 영역내의 값을 마우스 클릭 또는 드래그로 선택하는 슬라이더 컴포넌트
 * @author hooriza, modified by senxation
 * @version 1.0.4
 */

jindo.Slider = jindo.$Class({
	/** @lends jindo.Slider.prototype */				
	_elTrack : null,
	_aThumbs : null,
	_aPoses : null,
	_htSwap : null,
	
	/**
	 * Slider 컴포넌트를 생성한다.
	 * @constructs
	 * @class 영역내의 값을 마우스 클릭 또는 드래그로 선택하는 슬라이더 컴포넌트
	 * @param {String | HTMLElement} el Thumb이 움직이는 바탕이 되는 Track Element (id 혹은 엘리먼트 자체)
	 * @param {Object} oOptions 옵션 객체
	 * @extends jindo.UIComponent
	 * @requires jindo.DragArea
	 * @example
var alpha = new jindo.Slider(jindo.$('alpha'), {
	 sClassPrefix : 'slider-',
	 bVertical : false, //슬라이더 세로 여부
	 bJump : true, //트랙에 클릭하여 이동가능한지 여부
	 bDragOnTrack : true, //트랙에 마우스다운이후 드래그가능한지 여부
	 nMinValue : 0, 
	 nMaxValue : 1,
	 fAdjustValue : null,(Function) 값을 조절하기 위한 함수
	 bActivateOnload : true //(Boolean) 컴포넌트 로드시 activate 여부
}).attach({
	beforeChange : function(oCustomEvent) {
		//Thumb이 움직이기 전에 발생
		//oCustomEvent.stop()을 실행하면 change 이벤트가 발생하지 않고 중단된다.
	},
	change : function(oCustomEvent) {
		//Thumb을 Drop한 이후 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	nIndex : (Number)
		//	nPos : (Number)
		//	nValue : (Number)
		//}
	}
});
	 */
	
	$init : function(el, oOptions) {
		this.option({
			sClassPrefix : 'slider-',
			bVertical : false,
			bJump : true,
			bDragOnTrack : true,
			fAdjustValue : null,
			nMinValue : 0,
			nMaxValue : 1,
			bActivateOnload : true
		});
		this.option(oOptions || {});
		
		if (!this.option('bVertical')) {
			this._htSwap = {
				y : 'nY',
				x : 'nX',
				clientX : 'clientX',
				pageX : 'pageX',
				offsetWidth : 'offsetWidth',
				left : 'left'
			};
		} else {
			this._htSwap = {
				y : 'nX',
				x : 'nY',
				clientX : 'clientY',
				pageX : 'pageY',
				offsetWidth : 'offsetHeight',
				left : 'top'
			};
		}
		
		// Thumbs 들과 각각의 값을 저장할 공간 만들기
		this._elTrack = jindo.$(el);
		this._aThumbs = jindo.$$('.' + this.option('sClassPrefix') + 'thumb', this._elTrack);
		this._sRand = 'S' + parseInt(Math.random() * 100000000, 10);
		jindo.$ElementList(this._aThumbs).addClass(this._sRand);

		this._aPoses = this.positions();
		this._onTrackMouseDownFn = jindo.$Fn(this._onTrackMouseDown, this);
		this._initDragArea();
		
		if (this.option("bActivateOnload")){
			this.activate();		
		}
	},
	
	/**
	 * Track 엘리먼트를 구한다.
	 * @return {HTMLElement} 
	 */
	getTrack : function() {
		return this._elTrack;
	},
	
	/**
	 * n번째 Thumb 엘리먼트를 구한다.
	 * @param {Number} nIndex
	 * @return {HTMLElement} 
	 */
	getThumb : function(nIndex) {
		return this._aThumbs[nIndex];
	},
	
	_initDragArea : function() {
		var self = this;
		var htSwap = this._htSwap;
		
		// 컴퍼넌트 내부에서 사용하는 다른 컴퍼넌트 초기화
		this._oDragArea = new jindo.DragArea(this._elTrack, { 
			sClassName : this._sRand, 
			bFlowOut : false 
		}).attach({
			beforeDrag : function(oCustomEvent) {
				var nIndex = self._getThumbIndex(oCustomEvent.elHandle);
				var htParam = { 
					nIndex : nIndex,
					nPos : oCustomEvent[htSwap.x],
					bJump : false
				};
				if (!self.fireEvent('beforeChange', htParam)) {
					oCustomEvent.stop();
					return false;
				}
				oCustomEvent[htSwap.x] = self._getAdjustedPos(nIndex, htParam.nPos);
				oCustomEvent[htSwap.y] = null;
			},
			drag : function(oCustomEvent) {
				var nIndex = self._getThumbIndex(oCustomEvent.elHandle);
				var nPos = oCustomEvent[htSwap.x];
				if (nPos != self._aPoses[nIndex]) {
					self._aPoses[nIndex] = nPos;
					self._fireChangeEvent(nIndex);
				}
			}
		});
	},
	
	/**
	 * 적용된 DragArea 객체를 가져온다.
	 * @return {jindo.DragArea}
	 */
	getDragArea : function() {
		return this._oDragArea; 
	},
	
	_fireChangeEvent : function(nIndex) {
		var nPos = this._getPosition(nIndex);
		this.fireEvent('change', {
			nIndex : nIndex,
			nPos : nPos,
			nValue : this._getValue(nIndex, nPos)
		});
	},

	/**
	 * 컴포넌트를 활성화시킨다.
	 */
	_onActivate : function() {
		this.getDragArea().activate();
		jindo.$Element.prototype.preventTapHighlight && jindo.$Element(this._elTrack).preventTapHighlight(true);
		this._onTrackMouseDownFn.attach(this._elTrack, 'mousedown');
	},
	
	/**
	 * 컴포넌트를 비활성화시킨다.
	 */
	_onDeactivate : function() {
		this.getDragArea().deactivate();
		jindo.$Element.prototype.preventTapHighlight && jindo.$Element(this._elTrack).preventTapHighlight(false);
		this._onTrackMouseDownFn.detach(this._elTrack, 'mousedown');
	},
	
	_onTrackMouseDown : function(we) {
		if (!this.option('bJump')) {
			return;
		}
		
		we.stop(jindo.$Event.CANCEL_DEFAULT);
		var nIndex = 0;
		var htSwap = this._htSwap;
		var el = we.element;
		var sClass = '.' + this.option('sClassPrefix') + 'thumb';
		var bThumb = jindo.$$.test(el, sClass) || jindo.$$.getSingle('! ' + sClass, el);
		if (bThumb) {
			return;
		}
		
		var nPos = we.pos()[htSwap.pageX]; // 클릭한 위치
		nPos -= jindo.$Element(this._elTrack).offset()[htSwap.left];
		
		var nMaxDistance = 9999999;
		
		// 가장 가까운 Thumb 찾기
		for (var i = 0, oThumb; (oThumb = this._aThumbs[i]); i++) {
			var nThumbPos = parseInt(jindo.$Element(oThumb).css(htSwap.left), 10) || 0;
			nThumbPos += parseInt(oThumb[htSwap.offsetWidth] / 2, 10);
			
			var nDistance  = Math.abs(nPos - nThumbPos);
			
			if (nDistance < nMaxDistance) {
				nMaxDistance = nDistance;
				nIndex = i;
			}
		}

		nPos -= parseInt(this._aThumbs[nIndex][htSwap.offsetWidth] / 2, 10);
		this.positions(nIndex, nPos);
		
		if (this.option("bDragOnTrack")) {
			this.getDragArea().startDragging(this._aThumbs[nIndex]);
		}
	},
	
	_getTrackInfo : function(nIndex) {
		var htSwap = this._htSwap;
		var oThumb = this._aThumbs[nIndex];
		var nThumbSize = oThumb[htSwap.offsetWidth];
		var nTrackSize = this._elTrack[htSwap.offsetWidth];
		var nMaxPos = nTrackSize - nThumbSize;
		var nMax = this.option('nMaxValue');
		var nMin = this.option('nMinValue');
		
		return {
			maxPos : nMaxPos,
			max : nMax,
			min : nMin
		};
	},
	
	/**
	 * 옵션의 fAdjustValue가 적용된 value를 구한다.
	 * @param {Object} nIndex
	 * @param {Object} nPos
	 * @ignore
	 */
	_getValue : function(nIndex, nPos) {
		if (typeof nPos == 'undefined') {
			nPos = this._getPosition(nIndex);
		}

		var oInfo = this._getTrackInfo(nIndex);
		var nValue = Math.min(Math.max(nPos * (oInfo.max - oInfo.min) / oInfo.maxPos + oInfo.min, oInfo.min), oInfo.max);

		var fAdjust = this.option('fAdjustValue');
		if (fAdjust) {
			nValue = fAdjust.call(this, nValue);
		}
		
		return nValue;
	},
	
	/**
	 * 옵션의 fAdjustValue가 적용된 포지션을 구한다.
	 * @param {Object} nIndex
	 * @param {Object} nPos
	 * @ignore
	 */
	_getAdjustedPos : function(nIndex, nPos) {
		var nAdjustedPos = nPos;
		var oInfo = this._getTrackInfo(nIndex);
		
		var fAdjust = this.option('fAdjustValue');
		if (fAdjust) {
			var nValue = Math.min(Math.max(nAdjustedPos * (oInfo.max - oInfo.min) / oInfo.maxPos + oInfo.min, oInfo.min), oInfo.max);
			var nAfterValue = fAdjust.call(this, nValue);
			
			if (nValue != nAfterValue) {
				nAdjustedPos = oInfo.maxPos * (nAfterValue - oInfo.min) / (oInfo.max - oInfo.min);
			}
		}
		
		nAdjustedPos = Math.max(nAdjustedPos, 0);
		nAdjustedPos = Math.min(nAdjustedPos, oInfo.maxPos);
		
		return nAdjustedPos;		
	},
	
	_getThumbIndex : function(oThumb) {
		for (var i = 0, len = this._aThumbs.length; i < len; i++) {
			if (this._aThumbs[i] == oThumb) {
				return i;
			}
		}
			
		return -1;
	},
	
	_getPosition : function(nIndex) {
		var sPos = jindo.$Element(this._aThumbs[nIndex]).css(this._htSwap.left);
		return (sPos == "auto") ? 0 : parseInt(sPos, 10);
	},
	
	_setPosition : function(nIndex, nPos) {
		this._aPoses[nIndex] = nPos;
		jindo.$Element(this._aThumbs[nIndex]).css(this._htSwap.left, nPos + 'px');
	},
	
	/**
	 * pixel단위로 Thumb의 위치값을 가져오거나 설정한다.
	 * @param {Number} nIndex 위치값을 가져올 Thumb의 index (생략시 모든 Thumb의 위치값 배열을 리턴)
	 * @param {Number} nPos 설정할 위치값(pixel단위)
	 * @param {Boolean} bFireEvent 커스텀이벤트를 발생할지의 여부
	 * @return {Number | Array | this} 설정시에는 객체 자체를 리턴
	 * @example 
	 * oSlider.positions(0);
	 * oSlider.positions();
	 * oSlider.positions(0, 100);
	 */
	positions : function(nIndex, nPos, bFireEvent) {
		if (typeof bFireEvent == "undefined") {
			bFireEvent = true;	
		}

		switch (arguments.length) {
			case 0:
				var aPoses = [];
				jindo.$A(this._aThumbs).forEach(function(el, i){
					aPoses[i] = this._getPosition(i);
				}, this);
				return aPoses;
	
			case 1:
				return this._getPosition(nIndex);
				
			default:
				if (bFireEvent) {
					var htParam = { 
						nIndex : nIndex,
						nPos : nPos,
						bJump : true
					};
					if (this.fireEvent('beforeChange', htParam)) {
						var nAfterPos = this._getAdjustedPos(nIndex, htParam.nPos);
						var bChanged = (nAfterPos != this._aPoses[nIndex]);
	
						this._setPosition(nIndex, nAfterPos);
						if (bChanged) {
							this._fireChangeEvent(nIndex);
						}
					}
				    return this;	
				}
			
				this._setPosition(nIndex, this._getAdjustedPos(nIndex, nPos));
			    return this;
		} 
	},
	
	/**
	 * 옵션으로 설정한 nMinValue, nMaxValue에 대한 상대값으로 해당 Thumb의 위치값을 가져오거나 설정한다.
	 * @param {Number} nIndex Value를 가져올 Thumb의 index (생략시 모든 Thumb의 위치값 배열을 리턴)
	 * @param {Number} nValue 설정할 위치값
	 * @param {Boolean} bFireEvent 커스텀이벤트를 발생할지의 여부
	 * @return {Number | Array | this} 설정시에는 객체 자체를 리턴
	 * @example 
	 * oSlider.values(0);
	 * oSlider.values();
	 * oSlider.values(0, 0.5);
	 */
	values : function(nIndex, nValue, bFireEvent) {
		if (typeof bFireEvent == "undefined") {
			bFireEvent = true;	
		}
		
		switch (arguments.length) {
			case 0:
				var aValues = [];
				for (var i = 0, len = this._aThumbs.length; i < len; i++) {
					aValues[i] = this._getValue(i);
				}
				return aValues;
				
			case 1:
				return this._getValue(nIndex, this.positions(nIndex)); //수정
	
			default:
				var oInfo = this._getTrackInfo(nIndex);
				this.positions(nIndex, ((nValue - oInfo.min) * oInfo.maxPos / (oInfo.max - oInfo.min)) || 0, bFireEvent);
				return this;
		}
	}
}).extend(jindo.UIComponent);