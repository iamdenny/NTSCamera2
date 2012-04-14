/**
 * @fileOverview 특정 엘리먼트 및 엘리먼트 그룹에서 발생한 이벤트에 따라 레이어를 보여주고 숨겨주는 역할을 하는 컴포넌트
 * @version 1.0.4
 */
jindo.LayerManager = jindo.$Class({
	/** @lends jindo.LayerManager.prototype */
	
	_bIsActivating  : false,
	_bIsHiding : false, //hide() 메소드가 Timer로 수행되고 있는지의 여부
	_bIsShowing : false,
	_aLink : null,
	
	/**
	 * LayerManager 컴포넌트를 초기화한다.
	 * @constructs
	 * @class 특정 엘리먼트와 지정한 엘리먼트 그룹에서 발생한 이벤트에 따라 레이어를 보여주고 숨겨주는 컴포넌트
	 * @param {HTMLElement | String} el 숨기고자하는 레이어 엘리먼트 (혹은 id)
	 * @param {HashTable} htOption 추가 옵션 (생략가능)
	 * @extends jindo.UIComponent
	 * @requires jindo.Timer
	 */
	$init: function(el, htOption){
		this.option({
			sCheckEvent: "click",
			nCheckDelay: 100,
			nShowDelay: 0,
			nHideDelay: 100
		});
		
		this.option(htOption || {});
		this.setLayer(el);
		
		this._aLink = [];
		this._oShowTimer = new jindo.Timer();
		this._oHideTimer = new jindo.Timer();
		this._oEventTimer = new jindo.Timer();
		this._wfOnEvent = jindo.$Fn(this._onEvent, this);
		this.getVisible();
		this.activate();
	},
	
	/**
	 * 컴포넌트를 활성화한다.
	 */
	_onActivate : function() {
		this._wfOnEvent.attach(document, this.option("sCheckEvent"));
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 */
	_onDeactivate : function() {
		this._wfOnEvent.detach(document, this.option("sCheckEvent"));
	},
	
	/**
	 * Layer가 보여지고 있는지 여부를 가져온다.
	 * @return {Boolean}
	 */
	getVisible: function(){
		return this._wel.visible();
	},
	
	_check: function(el){
		var wel = jindo.$Element(el);
		for (var i = 0, elLink, welLink; (elLink = this._aLink[i]); i++) {
			welLink = jindo.$Element(elLink);
			if (welLink) {
				elLink = welLink.$value();
				if (elLink && (el == elLink || wel.isChildOf(elLink))) {
					return true;
				} 
			}
		}
		return false;
	},
	
	_find: function(el){
		for (var i = 0, elLink; (elLink = this._aLink[i]); i++) {
			if (elLink == el) {
				return i;
			} 
		}
		return -1;
	},
	
	/**
	 * 보여주고 숨겨줄 레이어 객체를 가져온다.
	 * @return {HTMLElement} 
	 */
	getLayer : function() {
		return this._el;
	},
	
	/**
	 * 보여주고 숨겨줄 레이어 객체를 설정한다.
	 * @return {this} 
	 */
	setLayer : function(el) {
		this._el = jindo.$(el);
		this._wel = jindo.$Element(el);
		return this;
	},
	
	/**
	 * link된 엘리먼트 배열을 가져온다.
	 * @return {Array}
	 */
	getLinks : function() {
		return this._aLink;
	},
	
	/**
	 * link할 엘리먼트 배열을 설정한다.
	 * @param {Array}
	 * @return {this} 인스턴스 자신
	 */
	setLinks : function(a) {
		this._aLink = jindo.$A(a).unique().$value();
		return this;
	},
	
	/**
	 * 생성자의 옵션으로 지정한 이벤트가 발생해도 레이어를 닫지 않게 할 엘리먼트를 지정한다
	 * @param {vElement} vElement 이벤트를 무시할 엘리먼트 또는 엘리먼트의 ID (인자를 여러개 주어서 다수 지정 가능)
	 * @return {this} 인스턴스 자신
	 * @example
	 *	o.link(jindo.$("one"), "two", oEl);
	 */
	link: function(vElement){
		if (arguments.length > 1) {
			for (var i = 0, len = arguments.length; i < len; i++) {
				this.link(arguments[i]);
			}
			return this;
		}
		
		if (this._find(vElement) != -1) {
			return this;
		} 
		
		this._aLink.push(vElement);
		return this;
	},
	
	/**
	 * 생성자의 옵션으로 지정한 이벤트가 발생해도 레이어를 닫지 않게 할 엘리먼트 지정한 것을 제거한다
	 * @param {vElement} vElement 이벤트가 무시된 엘리먼트 또는 엘리먼트의 ID (인자를 여러개 주어서 다수 지정 가능)
	 * @return {this} 인스턴스 자신
	 * @example
	 *	o.unlink(jindo.$("one"), "two", oEl);
	 */
	unlink: function(vElement){
		if (arguments.length > 1) {
			for (var i = 0, len = arguments.length; i < len; i++) {
				this.unlink(arguments[i]);
			}
			return this;
		}
		
		var nIndex = this._find(vElement);
		if (nIndex > -1) {
			this._aLink.splice(nIndex, 1);
		}
		
		return this;
	},
	
	_fireEventBeforeShow : function() {
		return this.fireEvent("beforeShow", {
			elLayer : this.getLayer(),
			aLinkedElement : this.getLinks()
		});
	},
	
	_fireEventShow : function() {
		this._bIsShowing = false;
		this.fireEvent("show", {
			elLayer : this.getLayer(),
			aLinkedElement : this.getLinks()
		});
	},
	
	_fireEventBeforeHide : function() {
		
		var bRet = this.fireEvent("beforeHide", {
			elLayer : this.getLayer(),
			aLinkedElement : this.getLinks()
		});
		
		if (!bRet) { this._bIsHiding = false; }
		return bRet;
	},
	
	_fireEventHide : function() {
		this._bIsHiding = false;
		this.fireEvent("hide", {
			elLayer : this.getLayer(),
			aLinkedElement : this.getLinks()
		});
	},
	
	_show: function(fShow, nDelay){
		this._oEventTimer.abort();
		this._bIsShowing = true;
		this._bIsHiding = false;
		if (nDelay > 0) {
			this._oShowTimer.start(fShow, nDelay);
		} else {
			this._oHideTimer.abort();
			fShow();
		}
	},
	
	_hide: function(fHide, nDelay){
		this._bIsShowing = false;
		this._bIsHiding = true;
		if (nDelay > 0) {
			this._oHideTimer.start(fHide, nDelay);
		} else {
			this._oShowTimer.abort();
			fHide();
		}
	},
	
	/**
	 * 레이어를 보여준다.
	 * @param {Number} nDelay 레이어를 보여줄 때의 지연시간을 지정 (생략시 옵션으로 지정한 nShowDelay 값을 따른다)
	 * @return {this}
	 */
	show : function(nDelay) {
		if (typeof nDelay == "undefined") {
			nDelay = this.option("nShowDelay");
		}
		var self = this;
		this._show(function(){
			if (!self.getVisible()) {
				if (self._fireEventBeforeShow()) {
					self._wel.show();
					self._fireEventShow();
				}
			}
		}, nDelay);
		
		return this;
	},
	
	/**
	 * 레이어를 숨긴다.
	 * @param {Number} nDelay nDelay 레이어를 숨길 때의 지연시간을 지정 (생략시 옵션으로 지정한 nHideDelay 값을 따른다)
	 * @return {this}
	 */
	hide : function(nDelay) {
		if (typeof nDelay == "undefined") {
			nDelay = this.option("nHideDelay");
		}
		var self = this;
		this._hide(function(){
			if (self.getVisible()) {
				if (self._fireEventBeforeHide()) {
					self._wel.hide();
					self._fireEventHide();
				}
			}
		}, nDelay);
		return this;
	},
	
	/**
	 * 레이어를 보여주거나 숨기도록 요청한다
	 * @param {Number} nDelay 레이어를 보여주거나 숨길 때의 지연시간을 지정 (생략시 옵션으로 지정한 showDelay/hideDelay 값을 따른다)
	 * @return {this} 인스턴스 자신
	 */
	toggle: function(nDelay){
		if (!this.getVisible() || this._bIsHiding) {
			this.show(nDelay || this.option("nShowDelay"));
		} else {
			this.hide(nDelay || this.option("nHideDelay"));
		}
		return this;
	},
	
	_onEvent : function(we){
		var el = we.element,
			self = this;
		
		this._oEventTimer.start(function() {
			if (!self._bIsHiding && self.getVisible()) {
				if (self._check(el)) { // hide()수행중이 아니고 links 객체들 안에서 발생한거면 무시
					if (!self._bIsShowing) {
						self.fireEvent("ignore", {
							sCheckEvent : self.option("sCheckEvent")
						});
						self._oHideTimer.abort();
						self._bIsHiding = false;
					}
				} else { //이벤트에 의해 hide()
					//mousedown시 disabled된 input일 경우 el이 제대로 리턴되지 않는 IE버그 수정
					if (typeof el.tagName != "undefined") {
						self.hide();
					}
				}
			}
		}, this.option("nCheckDelay"));	//link된 레이어 내를 클릭해서 레이어를 닫으려하는 경우 처리
	}
}).extend(jindo.UIComponent);