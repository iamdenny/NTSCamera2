/**
 * @fileOverview 체크박스나 라디오버튼의 디자인을 대체하기 위한 HTML Component 
 * @author hooriza, modified by senxation
 * @version 1.0.4
 */

jindo.CheckBox = jindo.$Class({
	/** @lends jindo.CheckBox.prototype */
	sTagName : 'input[type=checkbox]', //'input[type=radio]'
	
	/**
	 * CheckBox 컴포넌트를 생성한다.
	 * @constructs
	 * @class 체크박스나 라디오버튼의 디자인을 대체하기 위한 HTML Component 
	 * @extends jindo.HTMLComponent
	 * @param {String | HTMLElement} el input[type=checkbox] 또는 input[type=radio]를 감싸고 있는 엘리먼트 혹은 그 id
	 * @param {HashTable} htOption 옵션 객체
	 * @example
<span id="ajax_checkbox">
	<span class="ajax_checkbox_mark"></span><input type="checkbox" name="c" id="c1" />
</span> 
<label for="c1">첫번째</label>

<script type="text/javascript" language="javascript">
	var oCheckBox = jindo.CheckBox(jindo.$('ajax_checkbox'), { sClassPrefix : 'checkbox-' }).attach({
		beforeChange : function(oCustomEvent) {
			//전달되는 이벤트객체 oCustomEvent = {
			//	bChecked : (Boolean) 체크 여부
			//}
			//oCustomEvent.stop(); 수행시 체크/해제 되지 않음
		},
		change : function(oCustomEvent) {
			//전달되는 이벤트객체 oCustomEvent = {
			//	bChecked : (Boolean) 체크 여부
			//}
		}
	});
</script>
	 * @remark input[type=checkbox], input[type=radio]에 이벤트를 직접 바인딩해서 사용할 경우 제대로 동작하지 않음
	 */
	
	$init : function(el, htOption) {
		this.option({
			sClassPrefix : 'checkbox-'
		});
		
		this.option(htOption || {});

		this._elWrapper = jindo.$(el);
		this._welWrapper = jindo.$Element(el);
		this._assignHTMLElements();
		
		this.wfOnClickInput = jindo.$Fn(this._onClickInput, this);
		this.wfOnClickWrapper = jindo.$Fn(this._onClickWrapper, this);
		this.wfOnFocusInput = jindo.$Fn(this._onFocusInput, this);
		this.wfOnBlurInput = jindo.$Fn(this._onBlurInput, this);
		
		this.activate();
		this.paint();
	},
	
	_assignHTMLElements : function() {
		var elWrapper = this._elWrapper;
		/**
		 * 해당 input[type=checkbox] 엘리먼트
		 * @ignore
		 */
		this._elInput = jindo.$$.getSingle('input', elWrapper);
		/**
		 * 해당 input[type=checkbox] 엘리먼트를 대체할 엘리먼트
		 * @ignore
		 */
		if (this._elInput.type == "radio") {
			this.sTagName = "input[type=radio]";
			this.option("sClassPrefix", "radio-");
		}
		var sPrefix = this.option('sClassPrefix');
		this._elSubstitute = jindo.$$.getSingle("." + sPrefix + "mark", elWrapper);
		this._welSubstitute = jindo.$Element(this._elSubstitute);
	},
	
	/**
	 * Input 엘리먼트를 구한다.
	 * @return {HTMLElement}
	 */
	getInput : function() {
		return this._elInput;
	},
	
	/**
	 * Check 여부를 가져온다.
	 * @return {Boolean}
	 */
	getChecked : function() {
		return this.getInput().checked;
	},
	
	/**
	 * Check 여부를 설정한다.
	 * @param {Boolean}
	 * @return {this}
	 */
	setChecked : function(b, bFireEvent) {
		if (typeof bFireEvent == "undefined") {
			bFireEvent = true;
		}
		
		var elInput = this.getInput(),
			bValue = elInput.checked;
		
		if (bValue != b) {
			elInput.checked = b;
			
			switch (elInput.type) {
				case "checkbox" :
					this.paint();
				break;
				case "radio" :
					var self = this;
					//name이 같은 input만 다시 그림
					jindo.$A(this.constructor.getInstance()).forEach(function(oRadioButton){
						if (oRadioButton.getInput().name == elInput.name) {
							oRadioButton.paint();
						} 
					});
				break;
			}
			
			if (bFireEvent) {
				this._fireChangeEvent(b);
			}
		}
		
		return this;
	},
	
	_fireChangeEvent : function(b) {
		this.fireEvent("change", {
			bChecked : b
		});
	},
	
	/**
	 * CheckBox를 enable 시킨다.
	 * @return {this}
	 */
	enable : function() {
		this.getInput().disabled = false;
		this.paint();
		return this;
	},
	
	/**
	 * CheckBox를 disable 시킨다.
	 * @return {this}
	 */
	disable : function() {
		this.getInput().disabled = true;
		this.paint();
		return this;
	},
	
	_onClickInput : function(we) {
		we.stop(jindo.$Event.CANCEL_DEFAULT);
		
		var self = this;
		setTimeout(function(){ //Scope 안에서 input[type=checkbox]의 checked가 이상함!
			self._welWrapper.fireEvent("click");	
		}, 1);
	},
	
	_onClickWrapper : function(we) {
		var elInput = this._elInput;
		if (elInput.disabled || we.element === elInput) { /* Diabled거나 Label을 클릭했거나 키보드 스페이스로 직접 선택했을 때 */
			return;
		}
		elInput.focus();

		if (this.fireEvent("beforeChange", { bChecked : elInput.checked })) {
			this.setChecked(((elInput.type == "radio") ? true : !elInput.checked));
		}
	},
	
	_onFocusInput : function(we) {
		this._welWrapper.addClass(this.option('sClassPrefix') + 'focused'); 
	},
	
	_onBlurInput : function(we) {
		this._welWrapper.removeClass(this.option('sClassPrefix') + 'focused');
	},
	
	/**
	 * 컴포넌트를 활성화한다.
	 */
	_onActivate : function() {
		this._welWrapper.addClass(this.option('sClassPrefix') + 'applied');
		
		this.wfOnClickInput.attach(this._elInput, 'click');
		this.wfOnClickWrapper.attach(this._elWrapper, 'click');
		this.wfOnFocusInput.attach(this._elInput, 'focus');
		this.wfOnBlurInput.attach(this._elInput, 'blur');
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 */
	_onDeactivate : function() {
		this._welWrapper.removeClass(this.option('sClassPrefix') + 'applied');
		
		this.wfOnClickInput.detach(this._elInput, 'click');
		this.wfOnClickWrapper.detach(this._elWrapper, 'click');
		this.wfOnFocusInput.detach(this._elInput, 'focus');
		this.wfOnBlurInput.detach(this._elInput, 'blur');
	},
	
	/**
	 * 컴포넌트를 새로 그려준다. (HTMLComponent 공통메소드)
	 */
	_onPaint : function() {
		var sPrefix = this.option('sClassPrefix');
		
		if (this._elInput.disabled){
			this._welWrapper.addClass(sPrefix + 'disabled');	
		} else {
			this._welWrapper.removeClass(sPrefix + 'disabled');
		}
		
		if (this._elInput.checked){
			this._welSubstitute.addClass(sPrefix + 'checked');	
		} else {
			this._welSubstitute.removeClass(sPrefix + 'checked');
		}
	}
	
}).extend(jindo.HTMLComponent);