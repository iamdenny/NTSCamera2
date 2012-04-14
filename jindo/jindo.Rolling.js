/**
 * @fileOverview 리스트의 아이템들을 부드러운 움직임으로 이동시켜 볼 수 있도록하는 컴포넌트 
 * @author hooriza, modified by senxation
 * @version 1.0.4
 */

jindo.Rolling = jindo.$Class({
	/** @lends jindo.Rolling.prototype */
	
	_oTransition : null,

	/**
	 * Rolling 컴포넌트를 생성한다.
	 * @constructs
	 * @class 리스트의 아이템들을 부드러운 움직임으로 이동시켜 볼 수 있도록하는 컴포넌트
	 * @extends jindo.Component
	 * @requires jindo.Effect
	 * @requires jindo.Transition
	 * @param {String | HTMLElement} el 리스트를 감싸고 있는 엘리먼트의 id 혹은 엘리먼트 자체  
	 * @param {HashTable} htOption 옵션객체
	 * @example
<xmp>
<div id="horz_wrap">
	<ul>
		<li>첫번째</li>
		<li>두번째</li>
		<li>세번째</li>
		<li>네번째</li>
		<li>다섯번째</li>
		<li>여섯번째</li>
		<li>일곱번째</li>
		<li>여덟번째</li>
		<li>아홉번째</li>
		<li>마지막</li>
	</ul>
</div>
<script>
	new jindo.Rolling(jindo.$('horz_wrap'), {
		nFPS : 50, // (Number) 초당 롤링 이동을 표현할 프레임수
		nDuration : 400, // (ms) jindo.Effect, jindo.Transtition 참고
		sDirection : 'horizontal', // || 'vertical'
		fEffect : jindo.Effect.linear, //jindo.Effect 참고
	}).attach({
		beforeMove : function(oCustomEvent) {
			//oCustomEvent.element 어느 엘리먼트의 scrollLeft 가 바뀌는지
			//oCustomEvent.nIndex 몇번째 항목으로 이동하는지
			//oCustomEvent.nScroll 이동할 포지션
			//oCustomEvent.stop()시 이동하지 않음
		},
		afterMove : function(oCustomEvent) {
			//oCustomEvent.nIndex 몇번째 항목으로 이동하였는지
		}
	});
</script>
</xmp>
	 */
	$init : function(el, htOption) {
		this._el = jindo.$(el);
		this._elList = jindo.$$.test(this._el, 'ul, ol') ? this._el : jindo.$$.getSingle('> ul, > ol', el);
		
		this.option({
			nFPS : 50,
			nDuration : 800,
			sDirection : "horizontal",
			fEffect : jindo.Effect.linear
		});
		
		this.option(htOption || {});
		
		this._oKeys = this.option('sDirection') == 'horizontal' ? {
			offsetWidth : 'offsetWidth',
			marginLeft : 'marginLeft',
			marginRight : 'marginRight',
			clientWidth : 'clientWidth',
			scrollLeft : 'scrollLeft'
		} : {
			offsetWidth : 'offsetHeight',
			marginLeft : 'marginTop',
			marginRight : 'marginBottom',
			clientWidth : 'clientHeight',
			scrollLeft : 'scrollTop'
		};

		this._initTransition();
	},
	
	_initTransition: function(){
		var self = this;
		this._oTransition = new jindo.Transition().fps(this.option("nFPS")).attach({
			end : function(oCustomEvent) {
				self.fireEvent("afterMove", { nIndex : self.getIndex() });
			}
		});
	},
	
	/**
	 * jindo.Transition 컴포넌트의 인스턴스를 가져온다.
	 * @return {jindo.Transition}
	 */
	getTransition : function() {
		return this._oTransition;
	},
	
	/**
	 * 리스트 엘리먼트를 구한다
	 * @return {HTMLElement} 리스트 엘리먼트 ul 또는 ol
	 */
	getList : function() {
		return this._elList;
	},
	
	/**
	 * 리스트의 아이템(LI, 즉 자식 엘리먼트)들을 구한다.
	 * @return {Array} LI 엘리먼트들의 배열
	 */
	getItems : function() {
		return jindo.$$('> li', this._elList);
	},
	
	_offsetSize : function(el) {
		var eEl = jindo.$Element(el),
			oKeys = this._oKeys,
			nMarginLeft = parseInt(eEl.css(oKeys.marginLeft), 10) || 0,
			nMarginRight = parseInt(eEl.css(oKeys.marginRight), 10) || 0;
		return el[oKeys.offsetWidth] + nMarginLeft + nMarginRight;
	},
	
	/**
	 * 현재 표시되고있는 LI의 인덱스를 구한다.
	 * @return {Number} 현재 표시되고있는 LI의 인덱스
	 */
	getIndex : function() {
		if (this.isMoving()) {
			return this._nMoveTo;
		}
		
		var el = this._el,
			oKeys = this._oKeys,
			nScroll = el[oKeys.scrollLeft],
			aItems = this.getItems(),
			nSize = 0,
			n = 0,
			nMinDistance = 99999999;

		for (var i = 0; i < aItems.length; i++) {
			var nDistance = Math.abs(nScroll - nSize);
			
			if (nDistance < nMinDistance) {
				nMinDistance = nDistance;
				n = i;
			}
			
			nSize += this._offsetSize(aItems[i]);
		}
		
		return n;
	},
	
	_getPosition : function (n) {
		var el = this._el,
			oKeys = this._oKeys,
			aItems = this.getItems(),
			nPos = 0, nSize = this._getSize();
		
		for (var i = 0; i < n; i++) {
			nPos += this._offsetSize(aItems[i]);
		}
		
		if (nPos + el[oKeys.clientWidth] > nSize) {
			nPos = nSize - el[oKeys.clientWidth];
		}
		
		return nPos;
	},
	
	_getSize : function() {
		var aItems = this.getItems(),
			nSize = 0;
			
		for (var i = 0; i < aItems.length; i++) {
			nSize += this._offsetSize(aItems[i]);
		}
		
		return (this._nSize = nSize);
	},
	
	_move : function(n) {
		var el = this._el,
			oKeys = this._oKeys,
			aItems = this.getItems(),
			nPos = this._getPosition(n),
			nSize = this._getSize();

		var htParam = {
			element : el, // 어느 엘리먼트의 scrollLeft 가 바뀌는지
			nIndex : n, // 몇번째 항목으로 이동하는지
			nScroll : nPos
		};

		if (this.fireEvent('beforeMove', htParam) && el[oKeys.scrollLeft] != htParam.nScroll) {
			 
			var htDest = {};
			htDest[oKeys.scrollLeft] = this.option('fEffect')(htParam.nScroll);
			this._nMoveTo = n;
			
			this.getTransition().abort().start(this.option('nDuration'), htParam.element, htDest);
			return true;
		}
		return false;
	},
	
	/**
	 * n번째 아이템으로 이동한다.
	 * @param {Number} n
	 * @return {Boolean} 실제로 이동했는지 여부 
	 */
	moveTo : function(n) {
		n = Math.min(n, this.getItems().length - 1);
		n = Math.max(n, 0);
		return this._move(n);
	},

	/**
	 * 뒤에서부터 n번째 아이템으로 이동한다.
	 * @param {Number} n
	 * @return {Boolean} 실제로 이동했는지 여부
	 */
	moveLastTo : function(n) {
		return this.moveTo(this.getItems().length - 1 - n);
	},

	/**
	 * 현재 위치와 n만큼 떨어진 아이템으로 이동한다.
	 * @param {Number} n
	 * @return {Boolean} 실제로 이동했는지 여부
	 */
	moveBy : function(n) {
		return this.moveTo(this.getIndex() + n);
	},
	
	/**
	 * 롤링이 진행중인지 여부를 가져온다.
	 * @return {Boolean}
	 */
	isMoving : function() {
		return this._oTransition.isPlaying();
	},
	
	/**
	 * 리스트의 아이템들이 가려있는지 여부를 가져온다.
	 * @return {Boolean} 리스트의 아이템들이 가려있는지 여부
	 */
	isOverflowed : function() {
		return this._getSize() > this._el[this._oKeys.clientWidth];
	},
	
	/**
	 * 한번에 보여지는 아이템의 개수를 가져온다.
	 * @return {Number}
	 */
	getDisplayedItemCount : function() {
		var nDisplayed = 0,
			aItems = this.getItems(),
			nPos = 0;
		
		for (var i = 0; i < aItems.length; i++) {
			nPos += this._offsetSize(aItems[i]);
			if (nPos <= this._el[this._oKeys.clientWidth]) {
				nDisplayed++; 
			} else {
				break;
			}
		}
		
		return nDisplayed;
	}

}).extend(jindo.Component);