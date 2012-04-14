/**
 * @fileOverview Text Input의 숫자값을 증감 버튼을 클릭(Click)이나 마우스 휠(Wheel) 동작으로 증감 시킬 수 있는 컴포넌트
 * @version 1.0.4
 */
jindo.NumericStepper = jindo.$Class({
	/** @lends jindo.NumericStepper.prototype */
		
	_bIsOnFocus : false, // Input Box에 focus 여부
	/**
	 * NumericStepper 컴포넌트를 초기화한다.
	 * @constructs
	 * @class Text Input의 숫자값을 +/- 버튼 클릭이나 마우스 휠동작으로 증감시킬 수 있는 컴포넌트
	 * @param {HTMLElement} el 베이스(기준) 엘리먼트
	 * @param {HashTable} htOption 옵션 객체
	 * @extends jindo.UIComponent
	 */
	$init : function(el, htOption) {
		this._el = jindo.$(el); //Base 엘리먼트 설정
		
		this.option({
			sClassPrefix : 'ns-', 	// (String) Class Prefix
			bActivateOnload : true, // (Boolean) 로드시 컴포넌트 활성화여부
			bUseMouseWheel : false,	// (Boolean) 마우스 휠 사용 여부
			nStep : 1,				// (Number) 가감(+/-)이  일어나는 단위
			nDecimalPoint : 0,		// (Number) 소수점 몇째자리까지 표현할 것인지 지정
			nMin : -Infinity,		// (Number) 최소값	
			nMax : Infinity,		// (Number) 최대값
			nDefaultValue : 0, 		// (Number) Text Input에 디폴트로 지정될 값
			bInputReadOnly : true	// (Boolean) Text Input에 직접입력 불가능하도록 지정
		});
		this.option(htOption || {});
		
		this._assignHTMLElements(); //컴포넌트에서 사용되는 HTMLElement들을 선언하는 메소드
		this._wfPlusClick = jindo.$Fn(this._onPlusClick, this);
		this._wfMinusClick = jindo.$Fn(this._onMinusClick, this);
		this._wfWheel = jindo.$Fn(this._onWheel, this);
		this._wfFocus = jindo.$Fn(this._onFocus, this);
		this._wfBlur = jindo.$Fn(this._onBlur, this);
		
		if(this.option("bActivateOnload")) {
			this.activate();	
		}
	},

	/**
	 * 컴포넌트에서 사용되는 HTMLElement들을 선언하는 메소드
	 * @ignore
	 */
	_assignHTMLElements : function() {
		var sPrefix = this.option("sClassPrefix");
		this._elInput = jindo.$$.getSingle("." + sPrefix + "input",this._el);
		this._elPlusButton = jindo.$$.getSingle("." + sPrefix + "plus",this._el);
		this._elMinusButton = jindo.$$.getSingle("." + sPrefix + "minus",this._el);
	},
	
	/**
	 * 입력창의 값을 디폴트 값으로 리셋 시킨다.
	 */
	reset : function() {
		this._elInput.value = this.option("nDefaultValue").toFixed(this.option("nDecimalPoint"));
	},
	
	/**
	 * 지정된 숫자 값을 가져온다.
	 * @return {Number} 
	 */
	getValue : function() {
		return parseFloat(this._elInput.value);
	},
	
	/**
	 * 숫자 값을 설정한다.
	 */
	setValue : function(n) {
		if (isNaN(n)) {
			this._elInput.value = this.option("nDefaultValue");
			return;
		}
		
		n = n.toFixed(this.option("nDecimalPoint"));
		var nMin = this.option("nMin"),
			nMax = this.option("nMax"),
			htParam = {
				"nValue" : n,
				"nMin" : nMin, 
				"nMax" : nMax
			};
		
		if (n > nMax || n < nMin){
			this.fireEvent("overLimit", htParam);
			this._elInput.value = Math.max(nMin, Math.min(nMax, n));
			return;
		}
		
		if(!this.fireEvent("beforeChange", htParam)){
			return;
		}
		
		this._elInput.value = htParam.nValue;
		
		this.fireEvent("change", htParam);
	},
	
	/**
	 * 컴포넌트의 베이스 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getBaseElement : function() {
		return this._el;
	},
	
	/**
	 * 컴포넌트의 Input 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getInputElement : function() {
		return this._elInput;
	},
	
	/**
	 * 컴포넌트의 Plus 버튼 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getPlusElement : function() {
		return this._elPlusButton;
	},
	
	/**
	 * 컴포넌트의 Minus 버튼 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getMinusElement : function() {
		return this._elMinusButton;
	},
	
	/**
	 * Text Input의 focus여부를 가져온다.
	 * @return {Boolean}
	 */
	isFocused : function() {
		return this._bIsOnFocus;
	},
	
	_onActivate : function() {
		var elInput = this.getInputElement();
		this._wfPlusClick.attach(this.getPlusElement(), "click");
		this._wfMinusClick.attach(this.getMinusElement(), "click");
		this._wfFocus.attach(elInput, "focus");
		this._wfBlur.attach(elInput, "blur");
		
		if (this.option("bUseMouseWheel")) {
			this._wfWheel.attach(elInput, "mousewheel");
		}
		
		this._elInput.readOnly = this.option("bInputReadOnly");
		this.reset();
	},
	
	_onDeactivate : function() {
		var elInput = this.getInputElement();
		this._wfPlusClick.detach(this.getPlusElement(), "click");
		this._wfMinusClick.detach(this.getMinusElement(), "click");
		this._wfFocus.detach(elInput, "focus");
		this._wfBlur.detach(elInput, "blur");
		this._wfWheel.detach(elInput, "mousewheel");	
	},

	_onMinusClick : function(we) {
		this.setValue(this.getValue() - this.option("nStep"));
	},
	
	_onPlusClick : function(we) {
		this.setValue(this.getValue() + this.option("nStep"));
	},
	
	_onWheel : function(we) {
		if(this.isFocused()){
			we.stop(jindo.$Event.CANCEL_DEFAULT);
			if( we.mouse().delta > 0) {
				this._onPlusClick();
			} else {
				this._onMinusClick();
			}
		}
	},
	
	_onFocus : function(we) {
		this._bIsOnFocus = true;
	},
	
	_onBlur : function(we) {
		this._bIsOnFocus = false;
		this.setValue(this.getValue());
		this._elInput.readOnly = this.option("bInputReadOnly");
	}
}).extend(jindo.UIComponent);	