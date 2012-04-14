/**
 * @fileOverview Text Input에 입력값이 없을 경우 "입력해주세요"와 같이 기본 안내 문구를 등록한다
 * @author senxation
 * @version 1.0.4
 */

jindo.DefaultTextValue = jindo.$Class({
	/** @lends jindo.DefaultTextValue.prototype */
		
	/**
	 * 컴포넌트를 생성한다.
	 * input[type=text] 나 textarea에 적용될 수 있다.
	 * @constructs
	 * @class Text Input에 기본 안내 문구를 설정하는 컴포넌트
	 * @param {HTMLElement} el 베이스(기준) 엘리먼트
	 * @param {HashTable} htOption 옵션 객체
	 * @extends jindo.UIComponent
	 */
	$init : function(el, htOption) {
		this.option({
			sValue : "", //입력창에 기본으로 보여줄 값
			bActivateOnload : true //로드시 컴포넌트 활성화여부
		});
		this.option(htOption || {});
		
		//Base 엘리먼트 설정
		this._elBaseTarget = jindo.$(el);
		this._wfOnFocusAndBlur = jindo.$Fn(this._onFocusAndBlur, this);

		//활성화
		if(this.option("bActivateOnload")) {
			this.activate(); //컴포넌트를 활성화한다.	
		}
	},

	/**
	 * 컴포넌트의 베이스 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getBaseElement : function() {
		return this._elBaseTarget;
	},
	
	/**
	 * input의 value를 디폴트 값으로 설정한다.
	 * @return {this}
	 */
	setDefault : function() {
		this.getBaseElement().value = this.option("sValue");
		return this;
	},
	
	/**
	 * 입력창에 기본으로 보여줄 값을 설정한다.
	 * @param {String} sValue
	 * @return {this}
	 */
	setDefaultValue : function(sValue) {
		var sOldValue = this.option("sValue");
		this.option("sValue", sValue);
		if (this.getBaseElement().value == sOldValue) {
			this.setDefault();
		}
		return this;
	},
	
	/**
	 * 입력창에 기본으로 보여줄 값을 가져온다.
	 */
	getDefaultValue : function() {
		return this.option("sValue");
	},
	
	/**
	 * 입력창의 값을 확인하여 디폴트 값이면 빈값으로, 빈값이면 디폴트 값으로 변경한다. (deprecated)
	 * @deprecated
	 * @return {this}
	 */
	paint : function() {
		return this;
	},
	
	_onActivate : function() {
		//초기화시 Input의 값이 없을 경우에만 Default Text로 변경
		var elInput = this.getBaseElement();
		if (elInput.value == "") {
			this.setDefault();
		}
		this._wfOnFocusAndBlur.attach(elInput, "focus").attach(elInput, "blur");
	},
	
	_onDeactivate : function() {
		var elInput = this.getBaseElement();
		this._wfOnFocusAndBlur.detach(elInput, "focus").detach(elInput, "blur");
	},
	
	_onFocusAndBlur : function(we) {
		var el = this._elBaseTarget;
		var sValue = el.value;
		switch (we.type) {
			case "focus":
				if (sValue.replace(/\r\n/g, "\n") == this.getDefaultValue()) {
					el.value = "";
					el.select(); //IE에서 커서가 사라지는 문제가 있어 추가
				} 
			break;
			case "blur":
				if (jindo.$S(sValue).trim().$value() == "") {
					this.setDefault();
				} 
			break;
		}
	}
}).extend(jindo.UIComponent);	