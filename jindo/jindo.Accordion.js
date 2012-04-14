/**
 * @fileOverview 메뉴의 펼침/닫힘을 이용한 네비게이션을 구현한 아코디언 컴포넌트
 * @author senxation
 * @version 1.0.4
 */
jindo.Accordion = jindo.$Class({
	/** @lends jindo.Accordion.prototype */
	/**
	 * Accordian 컴포넌트를 생성한다.
	 * @constructs
	 * @class 메뉴의 펼침/닫힘을 이용한 네비게이션을 구현한 아코디언 컴포넌트
	 * @param {String | HTMLElement} el Accordian 컴포넌트를 적용할 레이어의 id 혹은 레이어 자체
	 * @param {HashTable} htOption 초기화 옵션 설정을 위한 객체.
	 * @extends jindo.UIComponent
	 * @requires jindo.Timer
	 * @requires jindo.Transition
	 */
	$init : function(el, htOption) {
		/**
		 * Accordian 컴포너트가 적용될 레이어
		 * @type {HTMLElement}
		 */
		this._el = jindo.$(el);
		this._wel = jindo.$Element(this._el);
		this.option({
			sClassPrefix : "accordion-",
			sDirection : "vertical",
			sExpandEvent : "click",
			nDefaultIndex : null,
			bToggle : false,
			nDuration : 300,
			nFPS : 30,
			fExpandEffect : jindo.Effect.cubicEaseOut, // (Function) 펼쳐질때 Transition 효과의 종류
			fContractEffect : jindo.Effect.cubicEaseIn, // (Function) 닫혀질때 Transition 효과의 종류
			nExpandDelay : 0,
			nContractDelay : 0,
			bActivateOnload : true
		});
		this.option(htOption || {});

		this._nExpanded = null;
		this._oTimer = new jindo.Timer();
		this._oTransition = new jindo.Transition({ bCorrection : true }).fps(this.option("nFPS"));
		this._wfOnMouseOver = jindo.$Fn(this._onMouseOver, this);
		this._wfOnMouseOut = jindo.$Fn(this._onMouseOut, this);
		this._wfOnExpandEvent = jindo.$Fn(this._onExpandEvent, this);
		if (this.option("bActivateOnload")) {
			this.activate();
		}
	},

	getBaseElement : function() {
		return this._el;
	},

	_onActivate : function() {
		jindo.$Element.prototype.preventTapHighlight && this._wel.preventTapHighlight(true);
		this._wfOnExpandEvent.attach(this._el, this.option("sExpandEvent"));
		this._wfOnMouseOver.attach(this._el, "mouseover");
		this._wfOnMouseOut.attach(this._el, "mouseout");
		var n = this.option("nDefaultIndex");
		if (typeof n == "number") {
			this.expand(n);
		}
	},

	_onDeactivate : function() {
		jindo.$Element.prototype.preventTapHighlight && this._wel.preventTapHighlight(false);
		this._wfOnExpandEvent.detach(this._el, this.option("sExpandEvent"));
		this._wfOnMouseOver.detach(this._el, "mouseover");
		this._wfOnMouseOut.detach(this._el, "mouseout");
	},

	_getBlock : function(el) {
		var sClassPrefix = this.option("sClassPrefix");
		return (jindo.$Element(el).hasClass(sClassPrefix + "block")) ? el : jindo.$$.getSingle("! ." + sClassPrefix + "block", el);
	},

	_onMouseOver : function(we) {
		var el = we.element,
			elBlock = this._getBlock(el),
			nIndex = (elBlock) ? jindo.$A(this.getAllBlocks()).indexOf(elBlock) : null;

		if (typeof nIndex == "number") {
			var elHandler = this.getHandler(nIndex);
			if (elHandler === elBlock || el === elHandler || jindo.$Element(el).isChildOf(elHandler)) {
				this.fireEvent(we.type, {
					nIndex: nIndex,
					elBlock : elBlock,
					elHandler : elHandler,
					weEvent : we
				});
			}
		}
	},

	_onExpandEvent : function(we) {
		var el = we.element,
			elBlock = this._getBlock(el),
			nIndex = (elBlock) ? jindo.$A(this.getAllBlocks()).indexOf(elBlock) : null;

		if (typeof nIndex == "number") {
			var elHandler = this.getHandler(nIndex);
			if (elHandler === elBlock || el === elHandler || jindo.$Element(el).isChildOf(elHandler)) {
				if (this.option("bToggle") && this.getExpanded() === nIndex ) {
					this.contractAll();
				} else {
					this.expand(nIndex);
				}
			}
		}
	},

	_onMouseOut : function(we) {
		var el = we.element,
			elBlock = this._getBlock(el),
			nIndex = (elBlock) ? jindo.$Element(elBlock).parent().indexOf(elBlock) : null;

		if (elBlock && typeof nIndex == "number") {
			this.fireEvent(we.type, {
				nIndex: nIndex,
				elBlock : elBlock,
				elHandler : this.getHandler(nIndex),
				weEvent : we
			});
		}
	},

	_getHeadSize : function(n) {
		var el = this.getHead(n);
		el.style.zoom = 1; //ie rendering bug
		return { width : jindo.$Element(el).width(), height : jindo.$Element(el).height() };
	},

	_getBodySize : function(n) {
		var el = this.getBody(n);
		el.style.zoom = 1; //ie rendering bug
		return { width : jindo.$Element(el).width(), height : jindo.$Element(el).height() };
	},

	/**
	 * Transition 컴포넌트의 인스턴스를 리턴한다.
	 * @return {jindo.Transition}
	 */
	getTransition : function() {
		return this._oTransition;
	},

	/**
	 * n번째 블럭을 확장한다.
	 * @param {Number} n
	 * @return {this}
	 */
	expand : function(n) {
		var aBlock = this.getAllBlocks(),
			self = this;
		n = Math.max(0, Math.min(aBlock.length, n));
		if (this.getExpanded() === n) {
			return this;
		}

		var ht = {
			nIndex : n,
			elBlock : aBlock[n],
			elHandler : this.getHandler(n)
		};
		if (this.fireEvent("beforeExpand", ht)) {
			var fEffect = self.option("fExpandEffect"),
				aArgs = [this.option("nDuration")];

			jindo.$A(aBlock).forEach(function(o,i,a){
				var aHeadSize = self._getHeadSize(i),
					aBodySize = self._getBodySize(i);

				switch (self.option("sDirection")) {
					case "vertical" :
						if (i == n) {
							aArgs.push(a[i], { '@height' : fEffect(aBodySize.height + aHeadSize.height + "px") });
						} else {
							aArgs.push(a[i], { '@height' : fEffect(aHeadSize.height + "px") });
						}
						break;
					case "horizontal" :
						if (i == n) {
							aArgs.push(a[i], { '@width': fEffect(aBodySize.width + aHeadSize.width + "px")});
						} else {
							aArgs.push(a[i], { '@width': fEffect(aHeadSize.width + "px")});
						}
						break;
				}
			});
			this._oTimer.abort();
			this._oTimer.start(function(){
				self._setExpanded(n);
				self._oTransition.abort().queue.apply(self._oTransition, aArgs).start(function(){
					self.fireEvent("expand", ht);
				});
			}, this.option("nExpandDelay"));
		}
		return this;
	},

	/**
	 * 모든 블럭을 확장한다.
	 * @deprecated expand()
	 */
	expandAll : function() {
		return this;
	},

	/**
	 * 모든 블럭을 축소한다.
	 * @return {this}
	 */
	contractAll : function() {
		var self = this,
			fEffect = self.option("fContractEffect"),
			aArgs = [this.option("nDuration")];

		jindo.$A(this.getAllBlocks()).forEach(function(o,i,a){
			var aHeadSize = self._getHeadSize(i);
			switch (self.option("sDirection")) {
				case "vertical" :
					aArgs.push(a[i], { '@height' : fEffect(aHeadSize.height + "px") });
					break;
				case "horizontal" :
					aArgs.push(a[i], { '@width': fEffect(aHeadSize.width + "px")});
					break;
			}
		});

		if (this.fireEvent("beforeContract")) {
			this._oTimer.start(function(){
				self._setExpanded(null);
				self._oTransition.abort().queue.apply(self._oTransition, aArgs).start(function(){
					self.fireEvent("contract");
				});
			}, this.option("nContractDelay"));
		}
		return this;
	},

	_setExpanded : function(n) {
		this._nExpanded = n;
	},

	/**
	 * 몇 번째 블럭이 확장되었는지 가져온다.
	 * @return {Number} 전체확장일 경우 "all", 전체 축소일경우 null
	 */
	getExpanded : function() {
		return this._nExpanded;
	},

	/**
	 * Block을 가져온다.
	 * @param {Number} n
	 * @return {HTMLElement}
	 */
	getBlock : function(n) {
		return this.getAllBlocks()[n];
	},

	/**
	 * 모든 Block을 가져온다.
	 * @return {Array}
	 */
	getAllBlocks : function() {
		return jindo.$$("." + this.option("sClassPrefix") + "block", this._el);
	},

	/**
	 * Block의 Head를 가져온다.
	 * Head는 Block이 축소되었을때도 항상 노출되는 제목 부분이다.
	 * @param {Number} n
	 * @return {HTMLElement}
	 */
	getHead : function(n) {
		return jindo.$$.getSingle("dt", this.getBlock(n));
	},

	/**
	 * Block의 Body를 가져온다.
	 * Body는 Block이 확장되었을때만 노출되는 내용 부분이다.
	 * @param {Number} n
	 * @return {HTMLElement}
	 */
	getBody : function(n) {
		return jindo.$$.getSingle("dd", this.getBlock(n));
	},

	/**
	 * 이벤트를 처리할 핸들러 엘리먼트를 가져온다.
	 * 해당 block의 head내에 클래스명 "handler" 를 가진 엘리먼트를 리턴하고
	 * 없을 경우 해당 head를 리턴한다.
	 * @param {Number} n
	 * @return {HTMLElement}
	 */
	getHandler : function(n) {
		var elHead = this.getHead(n);
		return jindo.$$.getSingle("." + this.option("sClassPrefix") + "handler", elHead) || elHead;
	}
}).extend(jindo.UIComponent);