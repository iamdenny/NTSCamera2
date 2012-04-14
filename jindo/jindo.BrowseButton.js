/**
 * @fileOverview FileSelect (input[type=file])의 찾아보기(browse) 버튼의 디자인을 대체 적용하는 컴포넌트
 * @author hooriza, modified by senxation
 * @version 1.0.4
 */
jindo.BrowseButton = jindo.$Class({
	/** @lends jindo.BrowseButton.prototype */						
	/**
	 * BrowseButton 컴포넌트를 생성한다.
	 * BrowseButton은 FileSelect (input[type=file])의 찾아보기(browse) 버튼을 대체 적용한다.
	 * 적용된 FileSelect는 구현상 임시의 플로트 레이어로 이동된다.  
	 * @constructs
	 * @class FileSelect (input[type=file])의 찾아보기(browse) 버튼의 디자인을 대체 적용하는 컴포넌트
	 * @extends jindo.Component
	 * @param {HTMLElement} el 기준 엘리먼트
	 * @param {HashTable} htOption 옵션 객체
	 * @example
new jindo.BrowseButton(jindo.$('file'), jindo.$('button'), { 
	sClassPrefix : 'button-' 
	//컴포넌트가 적용되면 대체 버튼 엘리먼트에 클래스명 sClassPrefix+"applied" 가 추가됨
	//대체 버튼 엘리먼트에 마우스 오버시 sClassPrefix+"over" 가 추가됨
}).attach({
	'over' : function() {
		//찾아보기 버튼에 커서가 over 되었을 때 발생 
	},
	'out' : function() {
		//찾아보기 버튼에서 커서가 out 되었을 때 발생
	},
	'sourceChange' : function() {
		//선택된 파일의 값이 바뀌었을때 발생
		jindo.$("input").value = this.getFileSelect().value;
	}
});
	 */
	$init : function(el, htOption) {
		this.option({
			sClassPrefix : 'browse-'
		});
		
		this.option(htOption || {});
		
		this._el = jindo.$(el);
		this._assignHTMLElement();		
		this._attachEvents();
	},
	
	_assignHTMLElement : function() {
		var sClassPrefix = this.option('sClassPrefix');
		
		this._elBox = jindo.$$.getSingle("." + sClassPrefix + "box", this._el);
		this._elFileSelect = jindo.$$.getSingle("." + sClassPrefix + "file-input", this._el);
		this._elBrowseButton = jindo.$$.getSingle("." + sClassPrefix + "button", this._el);

		this._elFileSelect.style.cssText = "top:-.5em !important; height:500px !important;";
		jindo.$Element(this._elBrowseButton).addClass(sClassPrefix + 'applied');
	},
	
	_adjustFileSelectPos : function(nX) {
		this.getFileSelect().style.right = jindo.$Element(this.getBox()).offset().left + jindo.$Element(this.getBox()).width() - nX - 20 + 'px';
	},
	
	_attachEvents : function() {
		var elBrowseButton = this.getBrowseButton(),
			welBrowseButton = jindo.$Element(elBrowseButton),
			elBox = this.getBox(),
			elFileSelect = this.getFileSelect(),
			wfHoverOnBrowseButton = jindo.$Fn(function(we) {
				welBrowseButton.addClass(this.option('sClassPrefix') + 'over');
				this.fireEvent('over');			
				this._adjustFileSelectPos(we.pos().pageX);
			}, this),
			wfRestore = jindo.$Fn(function(we) {
				welBrowseButton.removeClass(this.option('sClassPrefix') + 'over');
				elFileSelect.style.right = "0px";
				this.fireEvent('out');
			}, this),
			wfMouseMoveOnFloat = jindo.$Fn(function(we) {
				this._adjustFileSelectPos(we.pos().pageX);
			}, this);
		
		jindo.$Fn(function(we) {
			this.fireEvent('sourceChange');
		}, this).attach(this.getFileSelect(), 'change');

		wfHoverOnBrowseButton.attach(elBox, 'mouseover');
		wfMouseMoveOnFloat.attach(elBox, 'mousemove');
		wfRestore.attach(elBox, 'mouseout');
	},
	
	/**
	 * File Input을 감싸고 있는 Box 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getBox : function() {
		return this._elBox;
	},
	
	/**
	 * 적용된 File Input (input[type=file])을 가져온다.
	 * @return {HTMLElement}
	 */
	getFileSelect : function() {
		return this._elFileSelect;
	},
	
	/**
	 * 대체될 찾아보기 버튼을 가져온다.
	 * @return {HTMLElement} 
	 */
	getBrowseButton : function() {
		return this._elBrowseButton;
	}
}).extend(jindo.Component);
