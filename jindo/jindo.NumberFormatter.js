/**
 * @fileOverview Text Input에 입력중인 값을 세자리마다 콤마(,)가 찍힌 숫자형식으로 변환하는 컴포넌트
 * @author hooriza, modified by senxation
 * @version 1.0.4
 */
jindo.NumberFormatter = jindo.$Class({
	/** @lends jindo.NumberFormatter.prototype */
	/**
	 * NumberFormatter 컴포넌트를 생성한다.
	 * NumberFormatter 컴포넌트는 Text Input에 입력중인 값을 세자리마다 콤마(,)가 찍힌 숫자형식으로 변환한다.
	 * @constructs
	 * @class Text Input에 입력중인 값을 세자리마다 콤마(,)가 찍힌 숫자형식으로 변환하는 컴포넌트
	 * @extends jindo.Formatter
	 * @param {HTMLElement} el
	 * @param {Object} htOption 옵션 객체
	 * @requires jindo.TextRange
	 * @requires jindo.Timer
	 * @example 
var oNumberFormatter = new jindo.NumberFormatter(jindo.$('foo'), { 
	nDecimalPoint : 2, //(Number) 소수점 몇째자리까지 표시할 것인지
}).attach({
	beforeChange : function(oCustomEvent) { 
		//전달되는 이벤트 객체 e = {
		//	elInput : (HTMLElement) Text Input 엘리먼트
		//	sText : (String) Text Input 의 값
		//	sStartMark : (String)
		//	sEndMark : (String)
		//} 
	},
	change : function(oCustomEvent) {
		//전달되는 이벤트 객체 e = {
		//	elInput : (HTMLElement) Text Input 엘리먼트
		//}
	}
});
	 */	
	$init : function(el, htOption) {
		this.option({
			nDecimalPoint : 0 //(Number) 소수점 몇째자리까지 표시할 것인지
		});
		this.option(htOption || {});
	
		this.attach('beforeChange', function(oCustomEvent) {
			var sText = oCustomEvent.sText;
			var sOutput = '';
			var nDecimalPoint = this.option("nDecimalPoint");
			
			if (nDecimalPoint === 0) {
				// 숫자랑 마크빼고 전부 삭제
				sText = sText.replace(new RegExp('[^0-9' + oCustomEvent.sStartMark + oCustomEvent.sEndMark + ']', 'g'), '');
				// 맨 앞에 있는 숫자 0 없애기			
				sText = sText.replace(/^0+/, '');
				sText = sText.replace(new RegExp('^0*' + oCustomEvent.sStartMark + '0*' + oCustomEvent.sEndMark + '0*'), oCustomEvent.startMark + oCustomEvent.endMark);	
			} else {
				// 숫자랑 . 마크빼고 전부 삭제
				sText = sText.replace(new RegExp('[^0-9\.' + oCustomEvent.sStartMark + oCustomEvent.sEndMark + ']', 'g'), '');
				sText = sText.replace(/\.{2,}/g, ".");
				// 맨 앞에 있는 . 없애기			
				sText = sText.replace(/^\.+/, '');
				// 소수점 2개가 없도록
				sText = sText.replace(/(\.[^.]*?)(\.)/g, function(){
					return arguments[1];
				});
				// 맨 앞에 있는 숫자 0 없애기			
				sText = sText.replace(/^0+/, '');
				sText = sText.replace(new RegExp('^0*' + oCustomEvent.sStartMark + '0*' + oCustomEvent.sEndMark + '0*'), oCustomEvent.startMark + oCustomEvent.endMark);
				sText = sText.replace(new RegExp("^0([^\."+ oCustomEvent.sStartMark + oCustomEvent.sEndMark +"]+?)", "g"), function(){
					return arguments[1];
				});
			}

			sOutput = this._convertCurrency(sText);
			if (nDecimalPoint > 0) {
				sOutput = this._limitDecimalPoint(sOutput, nDecimalPoint);
			}
			
			oCustomEvent.sText = sOutput;
		});
	},
	
	/**
	 * Text Input의 설정된 값을 가져온다.
	 * @return {String}
	 * @example
"12,345,678.12"
oNumberFormatter.getValue(); -> "12345678.12"
	 */
	getValue : function() {
		return this._el.value.replace(new RegExp("[,"+ this._aMarks[0] + this._aMarks[1] + "]+?", "g"), "");
	},

	_convertCurrency : function(sText) {
		var nDot = 0,
			sReturn = "",
			nDotPosition = sText.indexOf("."),
			nLastPosition = sText.length;
			
		if (nDotPosition > -1) {
			nLastPosition = nDotPosition - 1;
		}
		
		//세자리마다 ,찍어 통화형식으로 만들기
		for (var i = sText.length; i >= 0; i--) {
			var sChar = sText.charAt(i);
			if (i > nLastPosition) {
				sReturn = sChar + sReturn;
				continue;
			}
			if (/[0-9]/.test(sChar)) {
				if (nDot >= 3) {
					sReturn = ',' + sReturn;
					nDot = 0;
				}
				nDot++;
				sReturn = sChar + sReturn;
			} else if (sChar == this._aMarks[0] || sChar == this._aMarks[1]) {
				sReturn = sChar + sReturn;
			}
		}
		
		return sReturn;
	},
	
	_limitDecimalPoint : function(sText, nDecimalPoint) {
		var sReturn = "",
			nDotPosition = sText.indexOf("."),
			nLastPosition = sText.length;
			
		if (nDotPosition > -1) {
			nLastPosition = nDotPosition - 1;
		}
		
		//소수점 이하 자리수 제한
		nDotPosition = sText.indexOf(".");
		if (nDotPosition > -1 && nDecimalPoint > 0) {
			var nDecimalCount = 0;
			for (var i = 0; i < sText.length; i++) {
				var sChar = sText.charAt(i),
					bIsNumber = /[0-9]/.test(sChar);
				
				if (bIsNumber) {
					if (nDecimalCount == nDecimalPoint) {
						continue;
					}
					if (i > nDotPosition) {
						nDecimalCount++;
					}
				}
				sReturn += sChar;
			}	
		} else {
			sReturn = sText;
		}
		
		return sReturn;
	}
}).extend(jindo.Formatter);