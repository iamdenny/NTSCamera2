/**
 * @fileOverview UI 컴포넌트를 구현하기 위한 코어 클래스
 * @version 1.0.4
 */
jindo.UIComponent = jindo.$Class({
	/** @lends jindo.UIComponent.prototype */
		
	/**
	 * jindo.UIComponent를 초기화한다.
	 * @constructs
	 * @class UI Component에 상속되어 사용되는 Jindo Component의 Core
	 * @extends jindo.Component
	 */
	$init : function() {
		this._bIsActivating = false; //컴포넌트의 활성화 여부
	},

	/**
	 * 컴포넌트의 활성여부를 가져온다.
	 * @return {Boolean}
	 */
	isActivating : function() {
		return this._bIsActivating;
	},

	/**
	 * 컴포넌트를 활성화한다.
	 * _onActivate 메소드를 수행하므로 반드시 상속받는 클래스에 _onActivate 메소드가 정의되어야한다.
	 * @return {this}
	 */
	activate : function() {
		if (this.isActivating()) {
			return this;
		}
		this._bIsActivating = true;
		
		if (arguments.length > 0) {
			this._onActivate.apply(this, arguments);
		} else {
			this._onActivate();
		}
				
		return this;
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 * _onDeactivate 메소드를 수행하므로 반드시 상속받는 클래스에 _onDeactivate 메소드가 정의되어야한다.
	 * @return {this}
	 */
	deactivate : function() {
		if (!this.isActivating()) {
			return this;
		}
		this._bIsActivating = false;
		
		if (arguments.length > 0) {
			this._onDeactivate.apply(this, arguments);
		} else {
			this._onDeactivate();
		}
		
		return this;
	}
}).extend(jindo.Component);	
