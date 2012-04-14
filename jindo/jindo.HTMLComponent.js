/**
 * @fileOverview HTML 컴포넌트를 구현하기 위한 코어 클래스
 * @version 1.0.4
 */
jindo.HTMLComponent = jindo.$Class({
	/** @lends jindo.HTMLComponent.prototype */
	sTagName : "",
	
	/**
	 * jindo.HTMLComponent를 초기화한다.
	 * @constructs
	 * @class HTML 컴포넌트에 상속되어 사용되는 jindo.UIComponent.js
	 * @extends jindo.UIComponent
	 */
	$init : function() {
	},
	
	/**
	 * 컴포넌트를 새로 그려준다.
	 * 상속받는 클래스는 반드시 _onPaint() 메소드가 정의되어야 한다.
	 * @return {this}
	 */
	paint : function() {
		this._onPaint();
		return this;
	}
}).extend(jindo.UIComponent);

/**
 * 다수의 컴포넌트의 paint 메소드를 일괄 수행하는 Static Method
 */
jindo.HTMLComponent.paint = function() {
	var aInstance = this.getInstance();
	for (var i = 0, oInstance; (oInstance = aInstance[i]); i++) {
		oInstance.paint();
	}
};