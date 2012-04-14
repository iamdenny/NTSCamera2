/**
 * @fileOverview HTML Element를 Drag할 수 있게 해주는 컴포넌트
 * @author hooriza, modified by senxation
 * @version 1.0.4
 */

jindo.DragArea = jindo.$Class({
	/** @lends jindo.DragArea.prototype */
	
	/**
	 * DragArea 컴포넌트를 생성한다.
	 * DragArea 컴포넌트는 상위 기준 엘리먼트의 자식들 중 특정 클래스명을 가진 모든 엘리먼트를 Drag 가능하게 하는 기능을 한다.
	 * @constructs
	 * @class HTML Element를 Drag할 수 있게 해주는 컴포넌트
	 * @extends jindo.UIComponent
	 * @param {HTMLElement} el Drag될 엘리먼트들의 상위 기준 엘리먼트. 컴포넌트가 적용되는 영역(Area)이 된다.
	 * @param {HashTable} htOption 옵션 객체
	 * @example
var oDragArea = new jindo.DragArea(document, {
	"sClassName" : 'dragable', // (String) 상위 기준 엘리먼트의 자식 중 해당 클래스명을 가진 모든 엘리먼트는 Drag 가능하게 된다. 
	"bFlowOut" : true, // (Boolean) 드래그될 엘리먼트가 상위 기준 엘리먼트의 영역을 벗어날 수 있는지의 여부. 상위 엘리먼트의 크기가 드래그되는 객체보다 크거나 같아야지만 동작하도록 수정. 작은 경우 document사이즈로 제한한다.
	"bSetCapture" : true, //ie에서 setCapture 사용여부
	"nThreshold" : 0 // (Number) 드래그가 시작되기 위한 최소 역치값(px) 
}).attach({
	handleDown : function(oCustomEvent) {
		//드래그될 handle 에 마우스가 클릭되었을 때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트 (mousedown된 엘리먼트)
		//	elDrag : (HTMLElement) 실제로 드래그 될 엘리먼트 (핸들을 드래그하여 레이어 전체를 드래그되도록 하고 싶으면 이 값을 설정한다. 아래 예제코드 참고)
		//	weEvent : (jindo.$Event) mousedown시 발생되는 jindo.$Event 객체
		//};
		//oCustomEvent.stop(); 이 수행되면 dragStart 이벤트가 발생하지 않고 중단된다.
	},
	dragStart : function(oCustomEvent) {
		//드래그가 시작될 때 발생 (마우스 클릭 후 첫 움직일 때 한 번)
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elArea : (HTMLElement) 기준 엘리먼트
		//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트 (mousedown된 엘리먼트)
		//	elDrag : (HTMLElement) 실제로 드래그 될 엘리먼트 (핸들을 드래그하여 레이어 전체를 드래그되도록 하고 싶으면 이 값을 설정한다. 아래 예제코드 참고)
		//	htDiff : (HashTable) handledown된 좌표와 dragstart된 좌표의 차이 htDiff.nPageX, htDiff.nPageY
		//	weEvent : (jindo.$Event) 마우스 이동 중 (mousemove) 발생되는 jindo.$Event 객체
		//};
		//oCustomEvent.stop(); 이 수행되면 뒤따르는 beforedrag 이벤트가 발생하지 않고 중단된다.
	},
	beforeDrag : function(oCustomEvent) {
		//드래그가 시작되고 엘리먼트가 이동되기 직전에 발생 (이동중 beforedrag, drag 순으로 연속적으로 발생)
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elArea : (HTMLElement) 기준 엘리먼트
		//	elFlowOut : (HTMLElement) bFlowOut 옵션이 적용될 상위 기준 엘리먼트 (변경가능)
		//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트 (mousedown된 엘리먼트)
		//	elDrag : (HTMLElement) 실제로 드래그 될 엘리먼트
		//	weEvent : (jindo.$Event) 마우스 이동 중 (mousemove) 발생되는 jindo.$Event 객체
		//	nX : (Number) 드래그 될 x좌표. 이 좌표로 엘리먼트가 이동 된다.
		//	nY : (Number) 드래그 될 y좌표. 이 좌표로 엘리먼트가 이동 된다.
		//	nGapX : (Number) 드래그가 시작된 x좌표와의 차이
		//	nGapY : (Number) 드래그가 시작된 y좌표와의 차이
		//};
		//oCustomEvent.stop(); 이 수행되면 뒤따르는 drag 이벤트가 발생하지 않고 중단된다.
		//oCustomEvent.nX = null; // 가로로는 안 움직이게
		//oCustomEvent.nX = Math.round(oCustomEvent.nX / 20) * 20;
		//oCustomEvent.nY = Math.round(oCustomEvent.nY / 20) * 20;
		//if (oCustomEvent.nX < 0) oCustomEvent.nX = 0;
		//if (oCustomEvent.nY < 0) oCustomEvent.nY = 0;
	},
	drag : function(oCustomEvent) {
		//드래그 엘리먼트가 이동하는 중에 발생 (이동중 beforedrag, drag 순으로 연속적으로 발생)
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elArea : (HTMLElement) 기준 엘리먼트
		//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트 (mousedown된 엘리먼트)
		//	elDrag : (HTMLElement) 실제로 드래그 될 엘리먼트
		//	weEvent : (jindo.$Event) 마우스 이동 중 (mousemove) 발생되는 jindo.$Event 객체
		//	nX : (Number) 드래그 된 x좌표. 이 좌표로 엘리먼트가 이동 된다.
		//	nY : (Number) 드래그 된 y좌표. 이 좌표로 엘리먼트가 이동 된다.
		//	nGapX : (Number) 드래그가 시작된 x좌표와의 차이
		//	nGapY : (Number) 드래그가 시작된 y좌표와의 차이
		//};
	},
	dragEnd : function(oCustomEvent) {
		//드래그(엘리먼트 이동)가 완료된 후에 발생 (mouseup시 1회 발생. 뒤이어 handleup 발생)
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elArea : (HTMLElement) 기준 엘리먼트
		//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트 (mousedown된 엘리먼트)
		//	elDrag : (HTMLElement) 실제로 드래그 된 엘리먼트
		//	bInterupted : (Boolean) 드래그중 stopDragging() 호출로 강제적으로 드래그가 종료되었는지의 여부
		//	nX : (Number) 드래그 된 x좌표.
		//	nY : (Number) 드래그 된 y좌표.
		//}
	},
	handleUp : function(oCustomEvent) {
		//드래그된 handle에 마우스 클릭이 해제됬을 때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 된 핸들 엘리먼트 (mousedown된 엘리먼트)
		//	elDrag : (HTMLElement) 실제로 드래그 된 엘리먼트
		//	weEvent : (jindo.$Event) mouseup시 발생되는 jindo.$Event 객체 
		//};
	}
});
	 */
	$init : function(el, htOption) {
		this.option({
			sClassName : 'draggable',
			bFlowOut : true,
			bSetCapture : true, //ie에서 bSetCapture 사용여부
			nThreshold : 0
		});
		
		this.option(htOption || {});
		
		this._el = el;
		
		this._bIE = jindo.$Agent().navigator().ie;
		
		this._htDragInfo = {
			"bIsDragging" : false,
			"bPrepared" : false, //mousedown이 되었을때 true, 이동중엔 false
			"bHandleDown" : false,
			"bForceDrag" : false
		};

		this._wfOnMouseDown = jindo.$Fn(this._onMouseDown, this);
		this._wfOnMouseMove = jindo.$Fn(this._onMouseMove, this);
		this._wfOnMouseUp = jindo.$Fn(this._onMouseUp, this);
		
		this._wfOnDragStart = jindo.$Fn(this._onDragStart, this);
		this._wfOnSelectStart = jindo.$Fn(this._onSelectStart, this);
		
		this.activate();
	},
	
	_findDraggableElement : function(el) {
		if (el.nodeType === 1 && jindo.$$.test(el, "input[type=text], textarea, select")){
			return null;
		} 
		
		var self = this;
		var sClass = '.' + this.option('sClassName');
		
		var isChildOfDragArea = function(el) {
			if (el === null) {
				return false;
			}
			if (self._el === document || self._el === el) {
				return true;
			} 
			return jindo.$Element(self._el).isParentOf(el);
		};
		
		var elReturn = jindo.$$.test(el, sClass) ? el : jindo.$$.getSingle('! ' + sClass, el);
		if (!isChildOfDragArea(elReturn)) {
			elReturn = null;
		}
		return elReturn;
	},
	
	/**
	 * 레이어가 현재 드래그 되고 있는지 여부를 가져온다
	 * @return {Boolean} 레이어가 현재 드래그 되고 있는지 여부
	 */
	isDragging : function() {
		var htDragInfo = this._htDragInfo; 
		return htDragInfo.bIsDragging && !htDragInfo.bPrepared;
	},
	
	/**
	 * 드래그를 강제 종료시킨다.
	 * @return this;
	 */
	stopDragging : function() {
		this._stopDragging(true);
		return this;
	},
	
	_stopDragging : function(bInterupted) {
		this._wfOnMouseMove.detach(document, 'mousemove');
		this._wfOnMouseUp.detach(document, 'mouseup');
		
		if (this.isDragging()) {
			var htDragInfo = this._htDragInfo,
				welDrag = jindo.$Element(htDragInfo.elDrag);
			
			htDragInfo.bIsDragging = false;
			htDragInfo.bForceDrag = false;
			htDragInfo.bPrepared = false;
			
			if(this._bIE && this._elSetCapture) {
				this._elSetCapture.releaseCapture();
				this._elSetCapture = null;
			}
			
			this.fireEvent('dragEnd', {
				"elArea" : this._el,
				"elHandle" : htDragInfo.elHandle,
				"elDrag" : htDragInfo.elDrag,
				"nX" : parseInt(welDrag.css("left"), 10) || 0,
				"nY" : parseInt(welDrag.css("top"), 10) || 0,
				"bInterupted" : bInterupted
			});
		}
	},
	
	/**
	 * DragArea 동작을 위한 mousedown, dragstart, selectstart 이벤트를 attach 한다. 
	 */
	_onActivate : function() {
		this._wfOnMouseDown.attach(this._el, 'mousedown');
		this._wfOnDragStart.attach(this._el, 'dragstart'); // for IE
		this._wfOnSelectStart.attach(this._el, 'selectstart'); // for IE	
	},
	
	/**
	 * DragArea 동작을 위한 mousedown, dragstart, selectstart 이벤트를 detach 한다. 
	 */
	_onDeactivate : function() {
		this._wfOnMouseDown.detach(this._el, 'mousedown');
		this._wfOnDragStart.detach(this._el, 'dragstart'); // for IE
		this._wfOnSelectStart.detach(this._el, 'selectstart'); // for IE
	},
	
	/**
	 * 이벤트를 attach한다.
	 * @deprecated activate
	 */
	attachEvent : function() {
		this.activate();
	},
	
	/**
	 * 이벤트를 detach한다.
	 * @deprecated deactivate
	 */
	detachEvent : function() {
		this.deactivate();
	},
	
	/**
	 * 이벤트의 attach 여부를 가져온다.
	 * @deprecated isActivating
	 */
	isEventAttached : function() {
		return this.isActivating();
	},
	
	/**
	 * 마우스다운이벤트와 관계없이 지정된 엘리먼트를 드래그 시작한다.
	 * @param {HTMLElement} el 드래그할 엘리먼트
	 * @return {Boolean} 드래그시작여부
	 */
	startDragging : function(el) {
		var elDrag = this._findDraggableElement(el);
		if (elDrag) {
			this._htDragInfo.bForceDrag = true;
			this._htDragInfo.bPrepared = true;
			this._htDragInfo.elHandle = elDrag;
			this._htDragInfo.elDrag = elDrag;
			
			this._wfOnMouseMove.attach(document, 'mousemove');
			this._wfOnMouseUp.attach(document, 'mouseup');
			return true;
		}
		return false;
	},
	
	_onMouseDown : function(we) {
		
		var mouse = we.mouse(true);
		
		/* IE에서 네이버 툴바의 마우스제스처 기능 사용시 우클릭하면 e.mouse().right가 false로 들어오므로 left값으로만 처리하도록 수정 */
		if (!mouse.left || mouse.right || mouse.scrollbar) {
			this._stopDragging(true);
			return;
		}
		
		// 드래그 할 객체 찾기
		var el = this._findDraggableElement(we.element);
		if (el) {
			var oPos = we.pos(),
				htDragInfo = this._htDragInfo;
			
			htDragInfo.bHandleDown = true;
			htDragInfo.bPrepared = true;
			htDragInfo.nButton = we._event.button;
			htDragInfo.elHandle = el;
			htDragInfo.elDrag = el;
			htDragInfo.nPageX = oPos.pageX;
			htDragInfo.nPageY = oPos.pageY;
			if (this.fireEvent('handleDown', { 
				elHandle : el, 
				elDrag : el, 
				weEvent : we 
			})) {
				this._wfOnMouseMove.attach(document, 'mousemove');
			} 
			this._wfOnMouseUp.attach(document, 'mouseup');
			
			we.stop(jindo.$Event.CANCEL_DEFAULT);			
		}
	},
	
	_onMouseMove : function(we) {
		var htDragInfo = this._htDragInfo,
			htParam, htRect,
			oPos = we.pos(), 
			htGap = {
				"nX" : oPos.pageX - htDragInfo.nPageX,
				"nY" : oPos.pageY - htDragInfo.nPageY
			};

		if (htDragInfo.bPrepared) {
			var nThreshold = this.option('nThreshold'),
				htDiff = {};
			
			if (!htDragInfo.bForceDrag && nThreshold) {
				htDiff.nPageX = oPos.pageX - htDragInfo.nPageX;
				htDiff.nPageY = oPos.pageY - htDragInfo.nPageY;
				var nDistance = Math.sqrt(htDiff.nPageX * htDiff.nPageX + htDiff.nPageY * htDiff.nPageY);
				if (nThreshold > nDistance){
					return;
				} 
			}

			if (this._bIE && this.option("bSetCapture")) {
				this._elSetCapture = (this._el === document) ? document.body : this._findDraggableElement(we.element);
				if (this._elSetCapture) {
					this._elSetCapture.setCapture(false);
				}
			}
			 
			htParam = {
				elArea : this._el,
				elHandle : htDragInfo.elHandle,
				elDrag : htDragInfo.elDrag,
				htDiff : htDiff, //nThreshold가 있는경우 htDiff필요
				weEvent : we //jindo.$Event
			};
			
				
			htDragInfo.bIsDragging = true;
			htDragInfo.bPrepared = false;
			if (this.fireEvent('dragStart', htParam)) {
				var welDrag = jindo.$Element(htParam.elDrag),
					htOffset = welDrag.offset();
				
				htDragInfo.elHandle = htParam.elHandle;
				htDragInfo.elDrag = htParam.elDrag;
				htDragInfo.nX = parseInt(welDrag.css('left'), 10) || 0;
				htDragInfo.nY = parseInt(welDrag.css('top'), 10) || 0;
				htDragInfo.nClientX = htOffset.left + welDrag.width() / 2;
				htDragInfo.nClientY = htOffset.top + welDrag.height() / 2;
			} else {
				htDragInfo.bPrepared = true;
				return;
			}
		} 
				
		if (htDragInfo.bForceDrag) {
			htGap.nX = oPos.clientX - htDragInfo.nClientX;
			htGap.nY = oPos.clientY - htDragInfo.nClientY;
		}
		
		htParam = {
			"elArea" : this._el,
			"elFlowOut" : htDragInfo.elDrag.parentNode, 
			"elHandle" : htDragInfo.elHandle,
			"elDrag" : htDragInfo.elDrag,
			"weEvent" : we, 		 //jindo.$Event
			"nX" : htDragInfo.nX + htGap.nX,
			"nY" : htDragInfo.nY + htGap.nY,
			"nGapX" : htGap.nX,
			"nGapY" : htGap.nY
		};
		
		if (this.fireEvent('beforeDrag', htParam)) {
			var elDrag = htDragInfo.elDrag;
			if (this.option('bFlowOut') === false) {
				var elParent = htParam.elFlowOut,
					aSize = [ elDrag.offsetWidth, elDrag.offsetHeight ],
					nScrollLeft = 0, nScrollTop = 0;
					
				if (elParent == document.body) {
					elParent = null;
				}
				
				if (elParent && aSize[0] <= elParent.scrollWidth && aSize[1] <= elParent.scrollHeight) {
					htRect = { 
						nWidth : elParent.clientWidth, 
						nHeight : elParent.clientHeight
					};	
					nScrollLeft = elParent.scrollLeft;
					nScrollTop = elParent.scrollTop;
				} else {
					var	htClientSize = jindo.$Document().clientSize();
						
					htRect = {
						nWidth : htClientSize.width, 
						nHeight : htClientSize.height
					};
				}
	
				if (htParam.nX !== null) {
					htParam.nX = Math.max(htParam.nX, nScrollLeft);
					htParam.nX = Math.min(htParam.nX, htRect.nWidth - aSize[0] + nScrollLeft);
				}
				
				if (htParam.nY !== null) {
					htParam.nY = Math.max(htParam.nY, nScrollTop);
					htParam.nY = Math.min(htParam.nY, htRect.nHeight - aSize[1] + nScrollTop);
				}
			}
			if (htParam.nX !== null) {
				elDrag.style.left = htParam.nX + 'px';
			}
			if (htParam.nY !== null) {
				elDrag.style.top = htParam.nY + 'px';
			}

			this.fireEvent('drag', htParam);
		}else{
			htDragInfo.bIsDragging = false;
		}
	},
	
	_onMouseUp : function(we) {
		this._stopDragging(false);
		
		var htDragInfo = this._htDragInfo;
		htDragInfo.bHandleDown = false;
		
		this.fireEvent("handleUp", {
			weEvent : we,
			elHandle : htDragInfo.elHandle,
			elDrag : htDragInfo.elDrag 
		});
	},
	
	_onDragStart : function(we) {
		if (this._findDraggableElement(we.element)) { 
			we.stop(jindo.$Event.CANCEL_DEFAULT); 
		}
	},
	
	_onSelectStart : function(we) {
		if (this.isDragging() || this._findDraggableElement(we.element)) {
			we.stop(jindo.$Event.CANCEL_DEFAULT);	
		}
	}
	
}).extend(jindo.UIComponent);