/**
 * @fileOverview Text Input의 값을 특정한 형식으로 변환하는 컴포넌트
 * @author hooriza, modified by senxation
 * @version 1.0.4
 */
jindo.Formatter = jindo.$Class({
	/** @lends jindo.Formatter.prototype */
	
	_aMarks : [ '\u0000', '\uFFFF' ],
	
	_sPrevValue : null,
	_oTextRange : null,
	_bFakeFocus : false,
	
	/**
	 * Formatter 컴포넌트를 생성한다.
	 * Formatter 컴포넌트는 입력 컨트롤 (input[type=text], textarea)의 값을 특정한 형식으로 변환한다.
	 * @constructs
	 * @class Text Input의 값을 특정한 형식으로 변환하는 컴포넌트
	 * @extends jindo.UIComponent
	 * @requires jindo.TextRange
	 * @requires jindo.WatchInput
	 * @param {HTMLElement} el
	 * @param {HashTable} htOption 옵션 객체
	 * @example 
var oFormatter = new jindo.Formatter(jindo.$('foo'), {
	bPaintOnload : true, //로드시에 paint() 수행여부
	bActivateOnload : true, //로드시에 activate() 수행여부
	WatchInput : { //WatchInput에 적용될 옵션
		nInterval : 100, //Check할 간격 (Except IE)
		bPermanent : true, //focus/blur와 상관없이 항상 동작하도록 설정
		bActivateOnload : false //로드시에 activate() 수행여부. 시작 시점은 직접 지정
	} 
}).attach({
	focus : function(oCustomEvent) {
		//입력 컨트롤에 focus되었을 때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elInput : (HTMLElement) 입력 컨트롤 엘리먼트
		//}
	},
	beforeChange : function(oCustomEvent) {
		//입력된 값이 정해진 형식으로 변경되기 전에 발생 
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elInput : (HTMLElement) 입력 컨트롤 엘리먼트
		//	sText : (String) 입력 컨트롤의 값
		//	sStartMark : (String) 캐럿의 시작위치를 계산하기 위한 임시 문자  
		//	sEndMark : (String) 캐럿의 마지막위치를 계산하기 위한 임시 문자
		//} 
	},
	change : function(oCustomEvent) {
		//입력된 값이 정해진 형식으로 변경된 후 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elInput : (HTMLElement) 입력 컨트롤 엘리먼트
		//}
	},
	blur : function(oCustomEvent) {
		//입력 컨트롤이 blur되었을 때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elInput : (HTMLElement) 입력 컨트롤 엘리먼트
		//}
	}
});
	 */
	$init : function(el, htOption) {
		this._el = jindo.$(el);
		this.option({
			bPaintOnload : true, //로드시에 paint() 수행여부
			bActivateOnload : true, //로드시에 activate() 수행여부
			WatchInput : { //WatchInput에 적용될 옵션
				nInterval : 100, //Check할 간격 (Except IE)
				bPermanent : true, //focus/blur와 상관없이 항상 동작하도록 설정
				bActivateOnload : false //로드시에 activate() 수행여부. 시작 시점은 직접 지정
			} 
		});
		this.option(htOption || {});
		
		var self = this;
		this._wfRealBlur = jindo.$Fn(this._realBlur, this);
		this._wfRealFocus = jindo.$Fn(this._realFocus, this);
		this._oTextRange = new jindo.TextRange(el);
		this._oWatchInput = new jindo.WatchInput(el, this.option("WatchInput")).attach({
			change : function(oCustomEvent) {
				//change이벤트 발생후에는 항상 setCompareValue가 실행되므로 setTimeout으로 우회
				setTimeout(function() { 
					self.paint(); 
				}, 1);
			}
		});
		
		if (this.option("bPaintOnload")) {
			setTimeout(function() { 
				self.paint(); 
			}, 1);
		}
		if (this.option("bActivateOnload")) {
			this.activate();		
		}
	},
	
	/**
	 * 사용된 jindo.WatchInput 컴포넌트의 인스턴스를 리턴한다.
	 * return {jindo.WatchInput}
	 */
	getWatchInput : function() {
		return this._oWatchInput;
	},
	
	_splice : function(sStr, nIndex, nHowMany, sInsert) {
		return sStr.slice(0, nIndex) + sInsert + sStr.slice(nIndex + nHowMany);
	},
	
	/**
	 * Text Input의 값을 설정한다.
	 * 값이 설정된 후 paint()가 수행되며 정해진 형식으로 변환된다.
	 * @param {String} s
	 * @return {this}
	 */
	setValue : function(s) {
		this._el.value = s;
		this.paint();
		return this;
	},
	
	/**
	 * Formatter 컴포넌트를 수행한다.
	 * Text Input에 입력이 있는 경우 beforeChange 이벤트 발생. 값이 바뀌었을때 change 이벤트가 발생한다.
	 * @return {this} 
	 */
	paint : function() {
		var el = this._el,
			oTextRange = this._oTextRange,
			aMark = this._aMarks,
			sText = el.value.toString(),
			bFocus = oTextRange.hasFocus(),
			aSel,
			htParam;
		
		if (bFocus) {
			aSel = [ -1, -1 ];
			try { 
				aSel = oTextRange.getSelection();
			} catch(e) { }
			
			sText = this._splice(this._splice(sText, aSel[1], 0, aMark[1]), aSel[0], 0, aMark[0]);
		}
		
		htParam = { 
			elInput : el, 
			sText : sText, 
			sStartMark : aMark[0], 
			sEndMark : aMark[1] 
		};
		
		if (this.fireEvent('beforeChange', htParam)) {
			var sOutput = htParam.sText;
			
			if (bFocus) {
				var nPos = sOutput.indexOf(aMark[0]);
				if (nPos > -1) {
					sOutput = this._splice(sOutput, nPos, 1, '');
				}
				
				aSel = [nPos];
				aSel[1] = sOutput.indexOf(aMark[1]);
				if (aSel[1] > -1) {
					sOutput = this._splice(sOutput, aSel[1], 1, '');
				}

				var self = this;				
				setTimeout(function(){
					self._bFakeFocus = true;
					el.blur(); //opera 10.10의 경우 blur() focus()를 수행해도 focus 먼저 발생하기때문에 순서대로 수행되도록 수정
				}, 1);
				
				setTimeout(function(){
					self._oWatchInput.setInputValue(sOutput);
					el.focus();
					try {
						oTextRange.setSelection(aSel[0], aSel[1]);
					} catch(e) {}
					self.fireEvent('change', {
						elInput: el
					});
				}, 2);
				
				setTimeout(function(){					
					self._bFakeFocus = false;
				}, 20);
			} else {
				this._oWatchInput.setInputValue(sOutput);
				this.fireEvent('change', {
					elInput: el
				});
			}
		}
		
		return this;
	},
	
	_realBlur : function() {
		if (!this._bFakeFocus) {
			this.getWatchInput().stop();
			this.fireEvent("blur", {
				elInput : this._el
			});
		}
	},
	
	_realFocus : function() {
		if (!this._bFakeFocus) {
			this.getWatchInput().start(true);
			this.fireEvent("focus", {
				elInput : this._el
			});
		}
	},
	
	_onActivate : function() {
		this._wfRealBlur.attach(this._el, "blur");
		this._wfRealFocus.attach(this._el, "focus");
	},
	
	_onDeactivate : function() {
		this._wfRealBlur.detach(this._el, "blur");
		this._wfRealFocus.detach(this._el, "focus");
	}
}).extend(jindo.UIComponent);