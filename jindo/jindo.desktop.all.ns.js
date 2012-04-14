/* Jindo Custom 2.0.0 desktop with [aa1,aa2,aa3,aa4,aa5,ab1,ad1,ad2,ad3,ad4,ad5,ae1,ae2,ae3,ae4,ae5,ae6,ae7,ae8,ae9,ae10,ae11,ae12,ae13,ae14,ae15,ae16,ae17,ae18,ae19,ae20,af1,af2,af3,af4,af5,af6,ag1,ag2,ag3,ag4,ag5,ag6,ag7,ag8,ag9,ag10,ag11,ag12,ag13,ag14,ag15,ag16,ag17,ag18,ag19,ag20,ah1,ah2,ah3,ah4,ah5,ah6,ah7,ah8,ah9,ah10,ai1,ai2,ai3,ai4,ai5,ai6,ai7,ai8,ai9,ai10,ai11,ai12,ai13,ai14,ai15,ai16,ai17,ai18,ai19,ai20,ai21,ai22,ai23,ai24,ai25,ai26,ai27,ai28,ai29,ai30,aj1,aj2,aj3,aj4,aj5,aj6,aj7,aj8,aj9,aj10,aj11,aj12,aj13,aj14,aj15,aj16,aj17,aj18,aj19,aj20,aj21,aj22,aj23,aj24,aj25,aj26,aj27,aj28,aj29,aj30,aj31,aj32,aj33,aj34,aj35,aj36,aj37,aj38,aj39,aj40,aj41,aj42,ak1,ak2,ak3,ak4,ak5,ak6,ak7,ak8,ak9,ak10,ak11,ak12,ak13,ak14,ak15,ak16,ak17,ak18,ak19,ak20,ak21,ak22,ak23,ak24,al1,al2,al3,al4,al5,al6,al7,al8,am1,am2,am3,am4,am5,am6,am7,am8,am9,an1,an2,an3,an4,an5,an6,an7,ao1,ao2,ao3,ao4,ao5,ao6,ao7,ao8,ao9,ao10,ao11,ao12,ao13,ap1,ap2,ap3,ap4,ap5,ap6,ap7,ap8,aq1,aq2,aq3,aq4,aq5,aq6,aq7,aq8,aq9,aq10,ar1,as1,as2,as3,as4,as5,at1,at2,at3,at4,at5,at6,at7,at8,at9,at10,at11,at12,at13,at14,at15,at16,au1,au2,au3,au4,au5,av1,av2] */
//-!namespace.default start!-//
/**

 * @fileOverview	$() 함수, $Jindo() 객체, $Class() 객체를 정의한 파일.          
  
 */
if (typeof window != 'undefined' && window.nhn === undefined) {
	window.nhn = {};
}

if (typeof window != 'undefined') {
	if (window.jindo === undefined) {
		window.jindo = {};
	}
} else {
	if (!jindo) {
		jindo = {};
	}
}
/**
 
 *	@description agent의 dependency를 없애기 위해 별로도 설정.
 *	@ignore
  
 **/
var _j_ag = navigator.userAgent;
var _JINDO_IS_IE = _j_ag.indexOf("MSIE") > -1;
var _JINDO_IS_FF = _j_ag.indexOf("Firefox") > -1;
var _JINDO_IS_OP = _j_ag.indexOf("Opera") > -1;
var _JINDO_IS_SP = _j_ag.indexOf("Safari") > -1;
var _JINDO_IS_SF = _j_ag.indexOf("Apple") > -1;
var _JINDO_IS_CH = _j_ag.indexOf("Chrome") > -1;
var _JINDO_IS_WK = _j_ag.indexOf("WebKit") > -1;
var _JINDO_IS_MO = /(iPad|Mobile|Android|Nokia|webOS|BlackBerry|Opera Mini)/.test(_j_ag);

//-!jindo.$Jindo.default start!-//
/**

 * @class $Jindo 객체는 프레임워크에 대한 정보와 유틸리티 함수를 제공한다.
 * @constructor
 * @description $Jindo() 객체를 생성한다. $Jindo 객체는 프레임웍에 대한 정보와 유틸리티 함수를 제공한다. 다음은 Jindo 프레임워크 정보를 담고 있는 객체의 속성을 설명한 표이다.<br>
<table>
	<caption>Jindo 프레임워크 정보 객체 속성</caption>
	<thead>
		<tr>
			<th scope="col">이름</th>
			<th scope="col">타입</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>version</td>
			<td>Number</td>
			<td>Jindo 프레임워크의 버전을 저장한다.</td>
		</tr>
 </table>
  
 */
jindo.$Jindo = function() {
	//-@@$Jindo.default-@@//
	var cl=arguments.callee;
	var cc=cl._cached;
	
	if (cc) return cc;
	if (!(this instanceof cl)) return new cl();
	if (!cc) cl._cached = this;
	
	this.version = "2.0.0";
};
/**

 * @description 호환 모드를 설정하거 반환하는 함수.
 * @ignore
 * @name $Jindo#compatible
 * @param {Boolean} bType
 * @return {Boolean} [true|false]
  
 */
jindo.$Jindo.compatible = function(){
	return false;
};

var _objToString = Object.prototype.toString;
var _slice = Array.prototype.slice;

jindo.$Error = function(sMessage,sMethod){
	this.message = "\tmethod : "+sMethod+"\n\tmessage : "+sMessage;
	this.type = "Jindo Custom Error";
	this.toString = function(){
		return this.message+"\n\t"+this.type;
	}
};

jindo.$Except = {
	ONLY_NUMBER_TYPE:"숫자만 사용할 수 있습니다.",
	NOT_SUPPORT_$H:"$H가 지원하지 않습니다.",
	CANNOT_USE_OPTION:"해당 옵션은 사용할 수 없습니다.",
	PARSE_ERROR:"파싱중 에러가 발생했습니다.",
	NOT_FOUND_ARGUMENT:"파라메터가 없습니다.",
	CSSQUERY_IS_ONLY_STRING:"cssquery는 오직 문자여야 합니다.",
	NOT_STANDARD_QUERY:"css셀렉터가 정상적이지 않습니다.",
	INVALID_DATE:"날짜 포멧이 아닙니다.",
	REQUIRE_AJAX:"가 없습니다.",
	NOT_FOUND_ELEMENT:"엘리먼트가 없습니다.",
	HAS_FUNCTION_FOR_GROUP:"그룹으로 지우지 않는 경우 detach할 함수가 있어야 합니다.",
	NONE_ELEMENT:"에 해당하는 엘리먼트가 없습니다.",
	NOT_SUPPORT_SELECTOR:"는 지원하지 않는 selector입니다.",
	NOT_SUPPORT_METHOD:"desktop에서 지원하지 않는 메서드 입니다.",
	JSON_MUST_HAVE_ARRAY_HASH:"get메서드는 json타입이 hash나 array타입만 가능합니다.",
	MUST_APPEND_DOM : "document에 붙지 않은 엘리먼트를 기준 엘리먼트로 사용할 수 없습니다."
};

/**
 * @ignore
 */
function _toArray(aArray){
	return _slice.apply(aArray);
}

try{
	_slice.apply(document.documentElement.childNodes);
}catch(e){
	_toArray = function(aArray){
		var returnArray = [];
		var leng = aArray.length;
		for ( var i = 0; i < leng; i++ ) {
			returnArray.push( aArray[i] );
		}
		return returnArray;
	}
}
/**

 * @description 파라메터가 Function인지 확인하는 함수.
 * @static
 * @function
 * @name $Jindo#isFunction
 * @since 2.0.0
 * @param {Variant} oObj
 * @return {Boolean} [true|false]
  
 */

/**

 * @description 파라메터가 Array인지 확인하는 함수.
 * @static
 * @function
 * @name $Jindo#isArray
 * @since 2.0.0
 * @param {Variant} oObj
 * @return {Boolean} [true|false]
  
 */

/**

 * @description 파라메터가 String인지 확인하는 함수.
 * @static
 * @function
 * @name $Jindo#isString
 * @since 2.0.0
 * @param {Variant} oObj
 * @return {Boolean} [true|false]
  
 */

/**

 * @description 파라메터가 Numeric인지 확인하는 함수.
 * @static
 * @function
 * @name $Jindo#isNumeric
 * @since 2.0.0
 * @param {Variant} oObj
 * @return {Boolean} [true|false]
  
 */
jindo.$Jindo.isNumeric = function(nNum){
	return !isNaN(parseFloat(nNum)) && isFinite( nNum );
};
/**

 * @description 파라메터가 Boolean인지 확인하는 함수.
 * @static
 * @function
 * @name $Jindo#isBoolean
 * @since 2.0.0
 * @param {Variant} oObj
 * @return {Boolean} [true|false]
  
 */
/**

 * @description 파라메터가 Date인지 확인하는 함수.
 * @static
 * @function
 * @name $Jindo#isDate
 * @since 2.0.0
 * @param {Variant} oObj
 * @return {Boolean} [true|false]
  
 */
/**

 * @description 파라메터가 Regexp인지 확인하는 함수.
 * @static
 * @function
 * @name $Jindo#isRegexp
 * @since 2.0.0
 * @param {Variant} oObj
 * @return {Boolean} [true|false]
  
 */
/**

 * @description 파라메터가 Element인지 확인하는 함수.
 * @static
 * @function
 * @name $Jindo#isElement
 * @since 2.0.0
 * @param {Variant} oObj
 * @return {Boolean} [true|false]
  
 */
/**

 * @description 파라메터가 Document인지 확인하는 함수.
 * @static
 * @function
 * @name $Jindo#isDocument
 * @since 2.0.0
 * @param {Variant} oObj
 * @return {Boolean} [true|false]
  
 */
(function(){
	var oType = {"Element" : 1,"Document" : 9};
	for(var i in oType){
		jindo.$Jindo["is"+i] = (function(sType,nNodeNumber){
			return function(oObj){
				if(new RegExp(sType).test(_objToString.call(oObj))){
					return true;
				}else if(_objToString.call(oObj) == "[object Object]"&&oObj !== null&&oObj !== undefined&&oObj.nodeType==nNodeNumber){
					return true;
				}
				return false;
			}
		})(i,oType[i])
	}
	var _$type = ["Function","Array","String","Boolean","Date","RegExp"]; 
	for(var i = 0, l = _$type.length; i < l ;i++){
		jindo.$Jindo["is"+_$type[i]] = (function(type){
			return function(oObj){
				return _objToString.call(oObj) == "[object "+type+"]";
			}
		})(_$type[i]);
	}
})();

/**

 * @description 파라메터가 Node인지 확인하는 함수.
 * @static
 * @function
 * @since 2.0.0
 * @param {Variant} oObj
 * @return {Boolean} [true|false]
  
 */
jindo.$Jindo.isNode = function(eEle){
	try{
		return !!(eEle&&eEle.nodeType);
	}catch(e){
		return false;
	}
};

/**

 * @description 파라메터가 Hash인지 확인하는 함수.
 * @static
 * @function
 * @name $Jindo#isHash
 * @since 2.0.0
 * @param {Variant} oObj
 * @return {Boolean} [true|false]
  
 */
jindo.$Jindo.isHash = function(oObj){
	return _objToString.call(oObj) == "[object Object]"&&oObj !== null&&oObj !== undefined&&!!!oObj.nodeType&&!jindo.$Jindo.isWindow(oObj);
};

/**

 * @description 파라메터가 Null인지 확인하는 함수.
 * @function
 * @name $Jindo#isNull
 * @since 2.0.0
 * @param {Variant} oObj
 * @return {Boolean} [true|false]
  
 */
jindo.$Jindo.isNull = function(oObj){
	return oObj === null;
};
/**

 * @description 파라메터가 Undefined인지 확인하는 함수.
 * @static
 * @function
 * @name $Jindo#isUndefined
 * @since 2.0.0
 * @param {Variant} oObj
 * @return {Boolean} [true|false]
  
 */
jindo.$Jindo.isUndefined = function(oObj){
	return oObj === undefined;
};

/**

 * @description 파라메터가 Window인지 확인하는 함수.
 * @static
 * @function
 * @since 2.0.0
 * @param {Variant} oObj
 * @return {Boolean} [true|false]
  
 */
jindo.$Jindo.isWindow = function(oObj){
	return oObj == window || oObj == window.top;
};
/**
 * @ignore
 */
jindo.$Jindo.Break = function(){
	if (!(this instanceof arguments.callee)) throw new arguments.callee;
};
/**
 * @ignore
 */
jindo.$Jindo.Continue = function(){
	if (!(this instanceof arguments.callee)) throw new arguments.callee;
};

/**

 * @description 함수 파라미터가 원하는 규칙에 맞는지 검사한다.
 * @param {Array} aArgs 파라미터 목록
 * @param {Hash} oRules 규칙 목록
 * @param {String} sFuncName 에러메시지를 보여줄때 사용할 함수명
 * @return {Object}
 * @ignore
  
 */
jindo.$Jindo._F = function(sKeyType) {
	return sKeyType;
};

jindo.$Jindo._warn = function(nCurrentLength, nMaxLength, sMessage) {
	if(nCurrentLength > nMaxLength) window.console && ( (console.warn && console.warn('추가적인 파라메터가 있습니다. : '+sMessage), true) || (console.log && console.log('추가적인 파라메터가 있습니다. : '+sMessage), true) );
};

jindo.$Jindo.checkVarType = function(aArgs, oRules, sFuncName) {
	
	var sFuncName = sFuncName || aArgs.callee.name || 'anonymous';
	
	var $Jindo = jindo.$Jindo;
	var bCompat = $Jindo.compatible();
	
	var fpChecker = aArgs.callee['_checkVarType_' + bCompat];
	if (fpChecker) { return fpChecker(aArgs, oRules, sFuncName); }
	
	var aPrependCode = [];
	aPrependCode.push('var nArgsLen = aArgs.length;');
	aPrependCode.push('var $Jindo = jindo.$Jindo;');
	
	if (bCompat) {
		aPrependCode.push('var nMatchScore;');
		aPrependCode.push('var nMaxMatchScore = -1;');
		aPrependCode.push('var oFinalRet = null;');
	}
	
	var aBodyCode = [];
	var nMaxRuleLen = 0;
	
	for (var sType in oRules) if (oRules.hasOwnProperty(sType)) {
		nMaxRuleLen = Math.max(oRules[sType].length, nMaxRuleLen);
	}
	
	for (var sType in oRules) if (oRules.hasOwnProperty(sType)) {
		
		// console.log(sType);
		
		var aRule = oRules[sType];
		var nRuleLen = aRule.length;
		
		var aBodyPrependCode = [];
		var aBodyIfCode = [];
		var aBodyThenCode = [];
		
		if (!bCompat) {
			if (nRuleLen < nMaxRuleLen) { aBodyIfCode.push('nArgsLen === ' + nRuleLen); }
			else { aBodyIfCode.push('nArgsLen >= ' + nRuleLen); }
		}
		
		aBodyThenCode.push('var oRet = new $Jindo._varTypeRetObj();');
		
		var nTypeCount = nRuleLen;
		
		for (var i = 0; i < nRuleLen; ++i) {
			
			/^([^:]+):([^\+]*)(\+?)$/.test(aRule[i]);
			
			var sVarName = RegExp.$1;
			var sVarType = RegExp.$2;
			var bAutoCast = RegExp.$3 ? true : false;
			
			// 모든 타입을 허용하면
			if (sVarType === 'Variant') {
				
				if (bCompat) {
					aBodyIfCode.push(i + ' in aArgs');
				}
				
				aBodyThenCode.push('oRet["' + sVarName + '"] = aArgs[' + i + '];');
				nTypeCount--;
				
			// 사용자 정의 타입이면
			} else if ($Jindo._varTypeList[sVarType]) {
				
				var vVar = 'tmp' + sVarType + '_' + i;
				
				aBodyPrependCode.push('var ' + vVar + ' = $Jindo._varTypeList.' + sVarType + '(aArgs[' + i + '], ' + bAutoCast + ');');
				aBodyIfCode.push(vVar + ' !== jindo.$Jindo.VARTYPE_NOT_MATCHED');
				aBodyThenCode.push('oRet["' + sVarName + '"] = ' + vVar + ';');
				
			// Jindo 랩핑 타입이면
			} else if (/^\$/.test(sVarType) && jindo[sVarType]) {
				
				var sOR = '';
				var sNativeVarType;
				
				if (bAutoCast) {
					sNativeVarType = ({ $Fn : 'Function', $S : 'String', $A : 'Array', $H : 'Hash', $ElementList : 'Array' })[sVarType] || sVarType.replace(/^\$/, '');
					if (jindo.$Jindo['is' + sNativeVarType]) {
						sOR = ' || $Jindo.is' + sNativeVarType + '(vNativeArg_' + i + ')';
					}
				}
				
				aBodyIfCode.push('(aArgs[' + i + '] instanceof jindo.' + sVarType + sOR + ')');
				aBodyThenCode.push('oRet["' + sVarName + '"] = jindo.' + sVarType + '(aArgs[' + i + ']);');
				
			// 기타 Native 타입이면
			} else if (jindo.$Jindo['is' + sVarType]) {

				var sOR = '';
				var sWrapedVarType;
				
				if (bAutoCast) {
					sWrapedVarType = ({ 'Function' : '$Fn', 'String' : '$S', 'Array' : '$A', 'Hash' : '$H' })[sVarType] || '$' + sVarType;
					if (jindo[sWrapedVarType]) {
						sOR = ' || aArgs[' + i + '] instanceof jindo.' + sWrapedVarType;
					}
				}
				
				aBodyIfCode.push('($Jindo.is' + sVarType + '(aArgs[' + i + '])' + sOR + ')');
				aBodyThenCode.push('oRet["' + sVarName + '"] = vNativeArg_' + i + ';');
			
			// 없는 타입이면
			} else {
				
				throw new Error('VarType(' + sVarType + ') Not Found');
				
			}
			
		}
		
		aBodyThenCode.push('oRet.__type = "' + sType + '";');
		
		if (bCompat) {
			aBodyThenCode.push('nMatchScore = ' + (nRuleLen * 1000 + nTypeCount * 10) + ' + (nArgsLen === ' + nRuleLen + ' ? 1 : 0);');
			aBodyThenCode.push('if (nMatchScore > nMaxMatchScore) {');
			aBodyThenCode.push('	nMaxMatchScore = nMatchScore;');
			aBodyThenCode.push('	oFinalRet = oRet;');
			aBodyThenCode.push('}');
		} else {
			aBodyThenCode.push('return oRet;');
		}
		
		aBodyCode.push(aBodyPrependCode.join('\n'));
		
		if (aBodyIfCode.length) { aBodyCode.push('if (' + aBodyIfCode.join(' && ') + ') {'); }
		aBodyCode.push(aBodyThenCode.join('\n'));
		if (aBodyIfCode.length) { aBodyCode.push('}'); }
		
	}
	
	aPrependCode.push('	$Jindo._warn(nArgsLen,'+nMaxRuleLen+',"'+sFuncName+'");');
	
	for (var i = 0; i < nMaxRuleLen; ++i) {
		var sArg = 'aArgs[' + i + ']';
		aPrependCode.push([ 'var vNativeArg_', i, ' = ', sArg, ' && ', sArg, '.$value ? ', sArg, '.$value() : ', sArg + ';' ].join('')); 
	}
	
	if (!bCompat) {
		aBodyCode.push('$Jindo.checkVarType._throwException(aArgs, oRules, sFuncName);');
	}

	aBodyCode.push('return oFinalRet;');

	// if (bCompat) { console.log(aPrependCode.join('\n') + aBodyCode.join('\n')); }
	
	aArgs.callee['_checkVarType_' + bCompat] = fpChecker = new Function('aArgs,oRules,sFuncName', aPrependCode.join('\n') + aBodyCode.join('\n'));
	
	return fpChecker(aArgs, oRules, sFuncName);
	
};

jindo.$Jindo._varTypeRetObj = function() {};
jindo.$Jindo._varTypeRetObj.prototype.toString = function() { return this.__type; };

jindo.$Jindo.checkVarType._throwException = function(aArgs, oRules, sFuncName) {
	
	var fpGetType = function(vArg) {

		for (var sKey in jindo) if (jindo.hasOwnProperty(sKey)) {
			var oConstructor = jindo[sKey];
			if (typeof oConstructor !== 'function') { continue; }
			if (vArg instanceof oConstructor) { return sKey; }
		}
		
		var $Jindo = jindo.$Jindo;
		
		for (var sKey in $Jindo) if ($Jindo.hasOwnProperty(sKey)) {
			if (!/^is(.+)$/.test(sKey)) { continue; }
			var sType = RegExp.$1;
			var fpMethod = $Jindo[sKey];
			if (fpMethod(vArg)) { return sType; }
		}
		
		return 'Unknown';
		
	};
	
	var fpErrorMessage = function(sUsed, aSuggs, sURL) {
		
		var aMsg = [ '잘못된 파라미터입니다.', '' ];
		
		if (sUsed) {
			aMsg.push('호출한 형태 :');
			aMsg.push('\t' + sUsed);
			aMsg.push('');
		}
		
		if (aSuggs.length) {
			aMsg.push('사용 가능한 형태 :');
			for (var i = 0, nLen = aSuggs.length; i < nLen; i++) {
				aMsg.push('\t' + aSuggs[i]);
			}
			aMsg.push('');
		}
		
		if (sURL) {
			aMsg.push('매뉴얼 페이지 :');
			aMsg.push('\t' + sURL);
			aMsg.push('');
		}
		
		aMsg.unshift();
		
		return aMsg.join('\n');
		
	};
	
	var aArgName = [];
	
	for (var i = 0, ic = aArgs.length; i < ic; ++i) {
		try { aArgName.push(fpGetType(aArgs[i])); }
		catch(e) { aArgName.push('Unknown'); }
	}
	
	var sUsed = sFuncName + '(' + aArgName.join(', ') + ')';
	var aSuggs = [];
	
	for (var sKey in oRules) if (oRules.hasOwnProperty(sKey)) {
		var aRule = oRules[sKey];
		aSuggs.push('' + sFuncName + '(' + aRule.join(', ').replace(/(^|,\s)[^:]+:/g, '$1') + ')');
	}
	
	var sURL;
	
	if (/(\$\w+)(#\w+)?/.test(sFuncName)) {
		sURL = 'http://jindo.nhncorp.com/docs/jindo/archive/Jindo2-2.0.0/desktop/ko/symbols/' + encodeURIComponent(RegExp.$1) + '.html' + RegExp.$2;
	}
	
	throw new TypeError(fpErrorMessage(sUsed, aSuggs, sURL));

};

/**

 * @description checkVarType 를 수행할때 사용할 타입을 설정한다.
 *
 * @param1 {String+} sTypeName 타입 이름
 * @param1 {Function+} fpFunc 타입을 검사하는 규칙을 구현하는 함수
 * @return1 {$Jindo}
 * @ignore
 *
 * checkVarType 를 수행할때 사용할 여러개의 타입들을 한번에 설정한다.
 * @param2 {Hash+} oTypeLists 타입 규칙을 담은 객체
 * @return2 {$Jindo}
 * @ignore
 *
 * checkVarType 를 수행할때 사용하고 있는 타입을 얻는다.
 * @param3 {String+} sTypeName 타입 이름
 * @return3 {Function} 타입을 검사하는 규칙을 구현하는 함수
 * @ignore
 
 */
jindo.$Jindo.varType = function() {
	
	var oArgs = this.checkVarType(arguments, {
		's4str' : [ 'sTypeName:String+', 'fpFunc:Function+' ],
		's4obj' : [ 'oTypeLists:Hash+' ],
		'g' : [ 'sTypeName:String+' ]
	});
	
	var sDenyTypeListComma = jindo.$Jindo._denyTypeListComma;
	
	switch (oArgs+"") {
	case 's4str':
		var sTypeNameComma = ',' + oArgs.sTypeName.replace(/\+$/, '') + ',';
		if (sDenyTypeListComma.indexOf(sTypeNameComma) > -1) {
			throw new Error('Not allowed Variable Type');
		}
		
		this._varTypeList[oArgs.sTypeName] = oArgs.fpFunc;
		return this;
		
	case 's4obj':
		var oTypeLists = oArgs.oTypeLists;
		for (var sTypeName in oTypeLists) if (oTypeLists.hasOwnProperty(sTypeName)) {
			fpFunc = oTypeLists[sTypeName];
			arguments.callee.call(this, sTypeName, fpFunc);
		}
		return this;
		
	case 'g':
		return this._varTypeList[oArgs.sTypeName];
	}

};

/**

 * varType 에 등록한 타입 체크 함수에서 타입이 매칭되지 않음을 알리고 싶을때 사용한다.
 * @ignore
 
 */
jindo.$Jindo.VARTYPE_NOT_MATCHED = {};

(function() {
	
	var oVarTypeList = jindo.$Jindo._varTypeList = {};
	var ___jindo = jindo.$Jindo;
	var ___notMatched = ___jindo.VARTYPE_NOT_MATCHED;
	oVarTypeList['Numeric'] = function(v) {
		if (___jindo.isNumeric(v)) { return v * 1; }
		return ___notMatched;
	};

	oVarTypeList['Hash'] = function(val, bAutoCast){
		if (bAutoCast && jindo.$H && val instanceof jindo.$H) {
			return val.$value();
		} else if (___jindo.isHash(val)) {
			return val;
		}
		return ___notMatched;
	};
	
	oVarTypeList['$Class'] = function(val, bAutoCast){
		if ((!___jindo.isFunction(val))||!val.extend) {
			return ___notMatched;
		}
		return val;
	};
	
	var aDenyTypeList = [];
	
	for (var sTypeName in ___jindo) if (___jindo.hasOwnProperty(sTypeName)) {
		if (/^is(.+)$/.test(sTypeName)) { aDenyTypeList.push(RegExp.$1); }
	}
	
	___jindo._denyTypeListComma = aDenyTypeList.join(',');
	
	___jindo.varType("ArrayStyle",function(val, bAutoCast){
		if(!val) { return ___notMatched; }
		if (  
		    /(Arguments|NodeList|HTMLCollection|global|Window)/.test(_objToString.call(val)) ||
			/Object/.test(_objToString.call(val))&&___jindo.isNumeric(val.length)) {
			return _toArray(val);
		}
		return ___notMatched;
	});
	
	___jindo.varType("Form",function(val, bAutoCast){
		if(!val) { return ___notMatched; }
		if(bAutoCast&&val.$value){
			val = val.$value();
		}
		if (val.tagName&&val.tagName.toUpperCase()=="FORM") {
			return val
		}
		return ___notMatched;
	});
//	___jindo.varType("FormId",function(val, bAutoCast){
//		if(___jindo.isString(val)){
//			val = jindo.$(val);
//			if (val.tagName&&val.tagName.toUpperCase()=="FORM") {
//				return val;
//			}
//		}
//		return ___notMatched;
//	});
//	
//	___jindo.varType("PrimativeStyle",function(val, bAutoCast){
//		if(
//		___jindo.isNumeric(val) ||
//		___jindo.isString(val) ||
//		___jindo.isBoolean(val)
//		){
//			return val;
//		}
//		return ___notMatched;
//		
//	});
//	
})();


//-!jindo.$ start(jindo._createEle)!-//
/** 

 * @function
 * @description $() 함수는 DOM 에서 특정 요소를 조작할 수 있게 가져오거나, 요소를 생성한다.
 * <ul>
 * 	<li>ID를 사용하여 DOM 요소(Element)를 가져온다. 파라미터를 두 개 이상 지정하면 DOM 요소를 원소로하는 배열을 반환한다.</li>
 *  <li>또한 "&lt;tagName&gt;" 과 같은 형식의 문자열을 입력하면 tagName 요소를 가지는 객체를 생성한다.</li>
 * </ul>
 * @param {String+} sID1 가져올 첫 번째 DOM 요소의 ID 또는 생성할 DOM 요소
 * @param {String+} […] …
 * @param {String+} [sIDN] 가져올 N 번째 DOM 요소의 ID(Jindo 1.4.6 버전부터 마지막 파라미터에 document 요소을 지정할 수 있다.).
 * @return {Variant} ID 값으로 지정한 DOM 요소(Element) 혹은 DOM 요소를 원소로 가지는 배열(Array)을 반환한다. 만약 ID에 해당하는 요소가가 없으면 null 값을 반환한다. 요소를 생성한 경우는 객체(Object) 형태로 반환한다.
 * @example
// ID를 이용하여 객체를 리턴한다.
<div id="div1"></div>

var el = $("div1");

// ID를 이용하여 여러개의 객체를 리턴한다.
<div id="div1"></div>
<div id="div2"></div>

var els = $("div1","div2"); // [$("div1"),$("div2")]와 같은 결과를 리턴한다.

// tagName과 같은 형식의 문자열을 이용하여 객체를 생성한다.
var el = $("<DIV>");
var els = $("<DIV id='div1'><SPAN>hello</SPAN></DIV>");

//IE는 iframe에 추가할 엘리먼트를 생성하려고 할 때는 document를 반드시 지정해야 한다.(1.4.6 부터 지원)
var els = $("<div>" , iframe.contentWindow.document);
//위와 같을 경우 div태그가 iframe.contentWindow.document기준으로 생김.
  
 */
jindo.$ = function(sID/*, id1, id2*/) {
	//-@@$-@@//
	if(!arguments.length) throw new jindo.$Error(jindo.$Except.NOT_FOUND_ARGUMENT,"$");
	
	var ret = [], arg = arguments, nArgLeng = arg.length, lastArgument = arg[nArgLeng-1],doc = document,el  = null;
	var reg = /^<([a-z]+|h[1-5])>$/i;
	var reg2 = /^<([a-z]+|h[1-5])(\s+[^>]+)?>/i;
	if (nArgLeng > 1 && typeof lastArgument != "string" && lastArgument.body) {
        /*
         
마지막 인자가 document일때.
  
         */
		arg = Array.prototype.slice.apply(arg,[0,nArgLeng-1]);
		doc = lastArgument;
	}

	for(var i=0; i < nArgLeng; i++) {
		el = arg[i] && arg[i].$value ? arg[i].$value() : arg[i];
		if (jindo.$Jindo.isString(el)||jindo.$Jindo.isNumeric(el)) {
			el += "";
			el = el.replace(/^\s+|\s+$/g, "");
			
			if (el.indexOf("<")>-1) {
				if (reg.test(el)) {
					el = doc.createElement(RegExp.$1);
				}else if (reg2.test(el)) {
					var p = { thead:'table', tbody:'table', tr:'tbody', td:'tr', dt:'dl', dd:'dl', li:'ul', legend:'fieldset',option:"select" };
					var tag = RegExp.$1.toLowerCase();
		 				
					var ele = jindo._createEle(p[tag],el,doc);
					for (var i=0,leng = ele.length; i < leng ; i++) {
						ret.push(ele[i]);
					};
					el = null;
					
				}
			}else {
				el = doc.getElementById(el);
			}
		}
		if (el&&el.nodeType) ret[ret.length] = el;
	}
	return ret.length>1?ret:(ret[0] || null);
};

//-!jindo._createEle.hidden start!-//
jindo._createEle = function(sParentTag,sHTML,oDoc,bWantParent){
	//-@@_createEle.hidden-@@//
	var sId = 'R' + new Date().getTime() + parseInt(Math.random() * 100000,10);

	var oDummy = oDoc.createElement("div");
	switch (sParentTag) {
		case 'select':
		case 'table':
		case 'dl':
		case 'ul':
		case 'fieldset':
			oDummy.innerHTML = '<' + sParentTag + ' class="' + sId + '">' + sHTML + '</' + sParentTag + '>';
			break;
		case 'thead':
		case 'tbody':
		case 'col':
			oDummy.innerHTML = '<table><' + sParentTag + ' class="' + sId + '">' + sHTML + '</' + sParentTag + '></table>';
			break;
		case 'tr':
			oDummy.innerHTML = '<table><tbody><tr class="' + sId + '">' + sHTML + '</tr></tbody></table>';
			break;
		default:
			oDummy.innerHTML = '<div class="' + sId + '">' + sHTML + '</div>';
	}
	var oFound;
	for (oFound = oDummy.firstChild; oFound; oFound = oFound.firstChild){
		if (oFound.className==sId) break;
	}
	
	return bWantParent? oFound : oFound.childNodes;
};

//-!jindo.$Class start!-//
/**

 * @class $Class() 객체는 Jindo 프레임워크를 사용하여 객체 지향 프로그래밍 방식으로 애플리케이션을 구현할 수 있도록 지원한다.
 * @extends core
 * @description 클래스($Class() 객체)를 생성한다. 파라미터로 클래스화할 객체를 입력한다. 해당 객체에 $init 이름으로 메서드를 등록하면 클래스 인스턴스를 생성하는 생성자 함수를 정의할 수 있다. 또한 $static 키워드를 사용하면 인스턴스를 생성하지 않아도 사용할 수 있는 메서드를 등록할 수 있다.
 * @param {Hash+} oDef 클래스를 정의하는 객체. 클래스의 생성자, 속성, 메서드 등을 정의한다.
 * @return {$Class} 생성된 클래스($Class() 객체).
 * @example
var CClass = $Class({
    prop : null,
    $init : function() {
         this.prop = $Ajax();
         ...
    },
	$static : {
		static_method : function(){ return 1;}
	}
});

var c1 = new CClass();
var c2 = new CClass();
// c1과 c2는 서로 다른 $Ajax 객체를 각각 가진다.

CClass.static_method(); // 1
  
 */

jindo.$Class = function(oDef) {
	//-@@$Class-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4obj' : [ 'oDef:Hash+' ]
	},"$Class");
	
	function typeClass() {
		var t = this;
		var a = [];
						
		var superFunc = function(m, superClass, func) {
	
			if(m!='constructor' && func.toString().indexOf("$super")>-1 ){		
				
				var funcArg = func.toString().replace(/function\s*\(([^\)]*)[\w\W]*/g,"$1").split(",");
				// var funcStr = func.toString().replace(/function\s*\(.*\)\s*\{/,"").replace(/this\.\$super/g,"this.$super.$super");
				var funcStr = func.toString().replace(/function[^{]*{/,"").replace(/(\w|\.?)(this\.\$super|this)/g,function(m,m2,m3){
                           if(!m2){
								return m3+".$super"
                           }
                           return m;
                });
				funcStr = funcStr.substr(0,funcStr.length-1);
				func = superClass[m] = eval("false||function("+funcArg.join(",")+"){"+funcStr+"}");
			}
		
			return function() {
				var f = this.$this[m];
				var t = this.$this;
				var r = (t[m] = func).apply(t, arguments);
				t[m] = f;
	
				return r;
			};
		}
		
		while(t._$superClass !== undefined) {
			
			t.$super = new Object;
			t.$super.$this = this;
					
			for(var x in t._$superClass.prototype) {
				
				if (t._$superClass.prototype.hasOwnProperty(x)){
					if (this[x] === undefined && x !="$init") this[x] = t._$superClass.prototype[x];
					if (x!='constructor' && x!='_$superClass' && typeof t._$superClass.prototype[x] == "function") {
						t.$super[x] = superFunc(x, t._$superClass, t._$superClass.prototype[x]);
					} else {
						
						t.$super[x] = t._$superClass.prototype[x];
					}
				}
			}			
			
			if (typeof t.$super.$init == "function") a[a.length] = t;
			t = t.$super;
		}
				
		for(var i=a.length-1; i > -1; i--) a[i].$super.$init.apply(a[i].$super, arguments);

		if (typeof this.$init == "function") this.$init.apply(this,arguments);
	}
	
	if (oDef.$static !== undefined) {
		var i=0, x;
		for(x in oDef){
			if (oDef.hasOwnProperty(x)) {
				x=="$static"||i++;
			}
		} 
		for(x in oDef.$static){
			if (oDef.$static.hasOwnProperty(x)) {
				typeClass[x] = oDef.$static[x];
			}
		} 

		if (!i) return oDef.$static;
		delete oDef.$static;
	}
	
	// if (oDef.$destroy === undefined) {
	// 	oDef.$destroy = function(){
	// 		if(this.$super&&(arguments.callee==this.$super.$destroy)){this.$super.$destroy();}
	// 	}
	// } else {
	// 	oDef.$destroy = eval("false||"+oDef.$destroy.toString().replace(/\}$/,"console.log(this.$super);console.log(arguments.callee!=this.$super.$destroy);if(this.$super&&(arguments.callee==this.$destroy)){this.$super.$destroy();}}"));
	// }
	// 
	typeClass.prototype = oDef;
	typeClass.prototype.constructor = typeClass;
	typeClass.prototype.kindOf = function(oClass){
		return _kindOf(this.constructor.prototype, oClass.prototype);
	};	
	typeClass.extend = jindo.$Class.extend;

	return typeClass;
};
 
/**
  
 @description 자신이 어떤 클래스의 종류인지 확인하는 메서드. 
 @name $Class#kindOf
 @since 2.0.0
 @param $Class
 @return {Boolean}
 @type $Class
 @example
	var Parent = $Class ({});
	var Parent2 = $Class ({});
	var Child = $Class ({}).extend (Parent);
	
	var child = new Child();
	child.kindOf(Parent);// true
	child.kindOf(Parent2);// false
  
 */
function _kindOf(oThis, oClass){
	if(oThis != oClass){
		if(oThis._$superClass){
			return _kindOf(oThis._$superClass.prototype,oClass);
		}else{
			return false;
		}
	}else{
		return true;
	}
}
 /**

 * @description extend() 메서드는 특정 클래스($Class() 객체)를 상속한다. 상속할 부모 클래스(Super Class)를 지정한다.
 * @name $Class#extend
 * @type $Class
 * @function
 * @param {$Class} superClass 상속할 부모 클래스($Class() 객체).
 * @return {$Class} 상속된 클래스($Class() 객체).
 * @example
var ClassExt = $Class(classDefinition);
ClassExt.extend(superClass);
// ClassExt는 SuperClass를 상속받는다.
  
 */
jindo.$Class.extend = function(superClass) { 
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4obj' : [ 'oDef:$Class' ]
	},"<static> $Class#extend");
	
	this.prototype._$superClass = superClass;
	

	// inherit static methods of parent
	for(var x in superClass) {
		if (superClass.hasOwnProperty(x)) {
			if (x == "prototype") continue;
			this[x] = superClass[x];
		}
	}
	return this;
};
/**

 @description $super 속성은 부모 클래스의 메서드에 접근할 때 사용한다. 하위 클래스는 this.$super.method 로 상위 클래스의 메서드에 접근할 수 있으나, this.$super.$super.method 와 같이 한 단계 이상의 상위 클래스는 접근할 수 없다. 또한 부모 클래스와 자식클래스가 같은 이름의 메서드를 가지고 있을 때 자식클래스에서 $super로 같은 이름의 메서드를 호출하면, 부모 클래스의 메서드를 호출한다. 
 @name $Class#$super
 @type $Class
 @example
	var Parent = $Class ({
		a: 100,
		b: 200,
		c: 300,
		sum2: function () {
			var init = this.sum();
			return init;
		},
		sum: function () {
			return this.a + this.b
		}
	});

	var Child = $Class ({
		a: 10,
		b: 20,
		sum2 : function () {
			var init = this.sum();
			return init;
		},
		sum: function () {
			return this.b;
		}
	}).extend (Parent);

	var oChild = new Child();
	var oParent = new Parent();

	oChild.sum();           // 20
	oChild.sum2();          // 20
	oChild.$super.sum();    // 30 -> 부모 클래스의 100(a)과 200(b)대신 자식 클래스의 10(a)과 20(b)을 더한다.
	oChild.$super.sum2();   // 20 -> 부모 클래스의 sum2 메서드에서 부모 클래스의 sum()이 아닌 자식 클래스의 sum()을 호출한다.
  
*/

//-!jindo.cssquery start!-//
/**
 
 * @fileOverview CSS 셀렉터를 사용한 엘리먼트 선택 엔진
 * @name cssquery.js
 * @author Hooriza
  
 */

/**
 
 * @class
 * @description $$() 함수(cssquery)는 CSS 선택자(CSS Selector)를 사용하여 객체를 탐색한다. $$() 함수 대신 cssquery() 함수를 사용해도 된다. CSS 선택자로 사용할 수 있는 패턴은 표준 패턴과 비표준 패턴이 있다. 표준 패턴은 CSS Level3 명세서에 있는 패턴을 지원한다. 선택자의 패턴에 대한 설명은 다음 표와 See Also 항목을 참고한다.<br>
<table>
	<caption>요소, ID, 클래스 선택자</caption>
	<thead>
		<tr>
			<th scope="col">패턴</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>*</td>
			<td>모든 요소.
				<textarea name="code" class="js:nocontrols">
				$$("*");
				// 문서의 모든 요소.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>HTML Tagname</td>
			<td>지정된 HTML 태그 요소.
				<textarea name="code" class="js:nocontrols">
				$$("div");
				// 문서의 모든 &lt;div&gt; 요소.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>#id</td>
			<td>ID가 지정된 요소.
				<textarea name="code" class="js:nocontrols">
				$$("#application")
				// ID가 application인 요소.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>.classname</td>
			<td>클래스가 지정된 요소.
				<textarea name="code" class="js:nocontrols">
				$$(".img");
				// 클래스가 img인 요소.
				</textarea>
			</td>
		</tr>
	</tbody>
</table>

<table>
	<caption>속성 선택자</caption>
	<thead>
		<tr>
			<th scope="col">패턴</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>[type]</td>
			<td>지정된 속성을 갖고 있는 요소.
				<textarea name="code" class="js:nocontrols">
				$$("input[type]");
				// type 속성을 갖는 &lt;input&gt; 요소.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>[type=value]</td>
			<td>속성과 값이 일치하는 요소.
				<textarea name="code" class="js:nocontrols">
				$$("input[type=text]");
				// type 속성 값이 text인 &lt;input&gt; 요소.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>[type^=value]</td>
			<td>속성의 값이 특정 값으로 시작하는 요소.
				<textarea name="code" class="js:nocontrols">
				$$("input[type^=hid]");
				//type 속성 값이 hid로 시작하는 &lt;input&gt; 요소.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>[type$=value]</td>
			<td>속성의 값이 특정 값으로 끝나는 요소.
				<textarea name="code" class="js:nocontrols">
				$$("input[type$=en]");
				//type 속성 값이 en으로 끝나는 &lt;input&gt; 요소.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>[type~=value]</td>
			<td>속성 값에 공백으로 구분된 여러 개의 값이 존재하는 경우, 각각의 값 중 한가지 값을 갖는 요소.
				<textarea name="code" class="js:nocontrols">
				&lt;img src="..." alt="welcome to naver"&gt;
				$$("img[alt~=welcome]");  // 있음.
				$$("img[alt~=naver]");  // 있음.
				$$("img[alt~=wel]");  // 없음.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>[type*=value]</td>
			<td>속성 값 중에 일치하는 값이 있는 요소.
				<textarea name="code" class="js:nocontrols">
				$$("img[alt*=come]");  // 있음.
				$$("img[alt*=nav]");  // 있음.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>[type!=value]</td>
			<td>값이 지정된 값과 일치하지 않는 요소.
				<textarea name="code" class="js:nocontrols">
				$$("input[type!=text]");
				// type 속성 값이 text가 아닌 요소.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>[@type]</td>
			<td>cssquery 전용으로 사용하는 선택자로서 요소의 속성이 아닌 요소의 스타일 속성을 사용한다. CSS 속성 선택자의 특성을 모두 적용해 사용할 수 있다.
				<textarea name="code" class="js:nocontrols">
				$$("div[@display=block]");
				// &lt;div&gt; 요소 중에 display 스타일 속성의 값이 block인 요소.
				</textarea>
			</td>
		</tr>
	</tbody>
</table>

<table>
	<caption>가상 클래스 선택자</caption>
	<thead>
		<tr>
			<th scope="col">패턴</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>:nth-child(n)</td>
			<td>n번째 자식인지 여부로 해당 요소를 선택한다.
				<textarea name="code" class="js:nocontrols">
				$$("div:nth-child(2)");
				// 두 번째 자식 요소인 &lt;div&gt; 요소.
				
				$$("div:nth-child(2n)");
				$$("div:nth-child(even)");
				// 짝수 번째 자식 요소인 모든 &lt;div&gt; 요소.
				
				$$("div:nth-child(2n+1)");
				$$("div:nth-child(odd)");
				// 홀수 번째 자식 요소인 모든 &lt;div&gt; 요소.
				
				$$("div:nth-child(4n)");
				// 4의 배수 번째 자식 요소인 모든 &lt;div&gt; 요소.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>:nth-last-child(n)</td>
			<td>nth-child와 동일하나, 뒤에서부터 요소를 선택한다.
				<textarea name="code" class="js:nocontrols">
				$$("div:nth-last-child(2)");
				// 뒤에서 두 번째 자식 요소인 모든 &lt;div&gt; 요소.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>:last-child</td>
			<td>마지막 자식인지 여부로 요소를 선택한다.
				<textarea name="code" class="js:nocontrols">
				$$("div:last-child");
				// 마지막 자식 요소인 모든 &lt;div&gt; 요소.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>:nth-of-type(n)</td>
			<td>n번째로 발견된 요소를 선택한다.
				<textarea name="code" class="js:nocontrols">
				&lt;div&gt;
					&lt;p&gt;1&lt;/p&gt;
					&lt;span&gt;2&lt;/span&gt;
					&lt;span&gt;3&lt;/span&gt;
				&lt;/div&gt;
				</textarea>
				위와 같은 DOM이 있을 때, $$("span:nth-child(1)")은 &lt;span&gt; 요소가 firstChild인 요소는 없기 때문에 결과 값을 반환하지 않는다 하지만 $$("span:nth-of-type(1)")는 &lt;span&gt; 요소 중에서 첫 번째 &lt;span&gt; 요소인 &lt;span&gt;2&lt;/span&gt;를 얻어오게 된다.<br>nth-child와 마찬가지로 짝수/홀수 등의 수식을 사용할 수 있다.
			</td>
		</tr>
		<tr>
			<td>:first-of-type</td>
			<td>같은 태그 이름을 갖는 형제 요소 중에서 첫 번째 요소를 선택한다.<br>nth-of-type(1)과 같은 결과 값을 반환한다.</td>
		</tr>
		<tr>
			<td>:nth-last-of-type</td>
			<td>nth-of-type과 동일하나, 뒤에서부터 요소를 선택한다.</td>
		</tr>
		<tr>
			<td>:last-of-type</td>
			<td>같은 태그 이름을 갖는 형제 요소 중에서 마지막 요소를 선택한다.<br>nth-last-of-type(1)과 같은 결과 값을 반환한다.</td>
		</tr>
		<tr>
			<td>:contains</td>
			<td>텍스트 노드에 특정 문자열을 포함하고 있는지 여부로 해당 요소를 선택한다.
				<textarea name="code" class="js:nocontrols">
				$$("span:contains(Jindo)");
				// "Jindo" 문자열를 포함하고 있는 &lt;span&gt; 요소.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>:only-child</td>
			<td>형제가 없는 요소를 선택한다.
				<textarea name="code" class="js:nocontrols">
				&lt;div&gt;
					&lt;p&gt;1&lt;/p&gt;
					&lt;span&gt;2&lt;/span&gt;
					&lt;span&gt;3&lt;/span&gt;
				&lt;/div&gt;
				</textarea>
				위의 DOM에서 $$("div:only-child")만 반환 값이 있고, $$("p:only-child") 또는 $$("span:only-child")는 반환 값이 없다. 즉, 형제 노드가 없는 &lt;div&gt; 요소만 선택된다.
			</td>
		</tr>
		<tr>
			<td>:empty</td>
			<td>비어있는 요소를 선택한다.
				<textarea name="code" class="js:nocontrols">
				$$("span:empty");
				// 텍스트 노드 또는 하위 노드가 없는 &lt;span&gt; 요소.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>:not</td>
			<td>선택자의 조건과 반대인 요소를 선택한다.
				<textarea name="code" class="js:nocontrols">
				$$("div:not(.img)");
				// img 클래스가 없는 &lt;div&gt; 요소.
				</textarea>
			</td>
		</tr>
	</tbody>
</table>

<table>
	<caption>콤비네이터 선택자</caption>
	<thead>
		<tr>
			<th scope="col">패턴</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>공백 (space)</td>
			<td>하위의 모든 요소를 의미한다.
				<textarea name="code" class="js:nocontrols">
				$$("body div");
				// &lt;body&gt; 요소 하위에 속한 모든 &lt;div&gt; 요소.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>&gt;</td>
			<td>자식 노드에 속하는 모든 요소를 의미한다.
				<textarea name="code" class="js:nocontrols">
				$$("div &gt; span");
				// &lt;div&gt; 요소의 자식 요소 중 모든 &lt;span&gt; 요소.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>+</td>
			<td>지정한 요소의 바로 다음 형제 노드에 속하는 모든 요소를 의미한다.
				<textarea name="code" class="js:nocontrols">
				$$("div + p");
				// &lt;div&gt; 요소의 nextSibling에 해당하는 모든 &lt;p&gt; 요소.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>~</td>
			<td>+ 패턴과 동일하나, 바로 다음 형제 노드뿐만 아니라 지정된 노드 이후에 속하는 모든 요소를 의미한다.
				<textarea name="code" class="js:nocontrols">
				$$("div ~ p");
				// &lt;div&gt; 요소 이후의 형제 노드에 속하는 모든 &lt;p&gt; 요소.
				</textarea>
			</td>
		</tr>
		<tr>
			<td>!</td>
			<td>cssquery 전용으로, 콤비네이터의 반대 방향으로 탐색을 시작해 요소를 검색한다.
				<textarea name="code" class="js:nocontrols">
				$$("span ! div");
				// &lt;span&gt; 요소의 상위에 있는 모든 &lt;div&gt; 요소.
				</textarea>
			</td>
		</tr>
	</tbody>
</table>
 *
 * @param1 {String+} sSelector CSS 선택자. CSS 선택자로 사용할 수 있는 패턴은 표준 패턴과 비표준 패턴이 있다. 표준 패턴은 CSS Level3 명세서에 있는 패턴을 지원한다.
 *
 * @param2 {String+} sSelector CSS 선택자. CSS 선택자로 사용할 수 있는 패턴은 표준 패턴과 비표준 패턴이 있다. 표준 패턴은 CSS Level3 명세서에 있는 패턴을 지원한다.
 * @param2 {Element+} elBaseElement 탐색 대상이 되는 DOM 요소. 지정한 요소의 하위 노드에서만 객체를 탐색한다.
 *
 * @param3 {String+} sSelector CSS 선택자. CSS 선택자로 사용할 수 있는 패턴은 표준 패턴과 비표준 패턴이 있다. 표준 패턴은 CSS Level3 명세서에 있는 패턴을 지원한다.
 * @param3 {String+} sBaseElement 탐색 대상이 되는 DOM 요소의 ID 문자열. 지정한 요소의 하위 노드에서만 객체를 탐색한다.
 *
 * @return {Array} 조건에 해당하는 요소를 배열 형태로 반환한다.
 * 
 * @see $Document#queryAll
 * @see <a href="http://www.w3.org/TR/css3-selectors/">CSS Level3 명세서</a> - W3C
 * @example
 // 문서에서 IMG 태그를 찾는다.
 var imgs = $$('IMG');

 // div 요소 하위에서 IMG 태그를 찾는다.
 var imgsInDiv = $$('IMG', $('div'));

 // 문서에서 IMG 태그 중 가장 첫 요소를 찾는다.
 var firstImg = $$.getSingle('IMG');
  
 */
jindo.$$ = jindo.cssquery = (function() {
	/*
	 
querySelector 설정.
  
	 */
	var sVersion = '3.0';
	
	var debugOption = { repeat : 1 };
	
	/*
	 
빠른 처리를 위해 노드마다 유일키 값 셋팅
  
	 */
	var UID = 1;
	
	var cost = 0;
	var validUID = {};
	
	var bSupportByClassName = document.getElementsByClassName ? true : false;
	var safeHTML = false;
	
	var getUID4HTML = function(oEl) {
		
		var nUID = safeHTML ? (oEl._cssquery_UID && oEl._cssquery_UID[0]) : oEl._cssquery_UID;
		if (nUID && validUID[nUID] == oEl) return nUID;
		
		nUID = UID++;
		oEl._cssquery_UID = safeHTML ? [ nUID ] : nUID;
		
		validUID[nUID] = oEl;
		return nUID;

	};
	
	var getUID4XML = function(oEl) {
		
		var oAttr = oEl.getAttribute('_cssquery_UID');
		var nUID = safeHTML ? (oAttr && oAttr[0]) : oAttr;
		
		if (!nUID) {
			nUID = UID++;
			oEl.setAttribute('_cssquery_UID', safeHTML ? [ nUID ] : nUID);
		}
		
		return nUID;
		
	};
	
	var getUID = getUID4HTML;
	
	var uniqid = function(sPrefix) {
		return (sPrefix || '') + new Date().getTime() + parseInt(Math.random() * 100000000,10);
	};
	
	function getElementsByClass(searchClass,node,tag) {
        var classElements = new Array();
        if ( node == null )
                node = document;
        if ( tag == null )
                tag = '*';
        var els = node.getElementsByTagName(tag);
        var elsLen = els.length;
        var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
        for (i = 0, j = 0; i < elsLen; i++) {
                if ( pattern.test(els[i].className) ) {
                        classElements[j] = els[i];
                        j++;
                }
        }
        return classElements;
	}

	var getChilds_dontShrink = function(oEl, sTagName, sClassName) {
		if (bSupportByClassName && sClassName) {
			if(oEl.getElementsByClassName)
				return oEl.getElementsByClassName(sClassName);
			if(oEl.querySelectorAll)
				return oEl.querySelectorAll(sClassName);
			return getElementsByClass(sClassName, oEl, sTagName);
		}else if (sTagName == '*') {
			return oEl.all || oEl.getElementsByTagName(sTagName);
		}
		return oEl.getElementsByTagName(sTagName);
	};

	var clearKeys = function() {
		 backupKeys._keys = {};
	};
	
	var oDocument_dontShrink = document;
	
	var bXMLDocument = false;
	
	/*
	 
따옴표, [] 등 파싱에 문제가 될 수 있는 부분 replace 시켜놓기
  
	 */
	var backupKeys = function(sQuery) {
		
		var oKeys = backupKeys._keys;
		
		/*
		 
작은 따옴표 걷어내기
  
		 */
		sQuery = sQuery.replace(/'(\\'|[^'])*'/g, function(sAll) {
			var uid = uniqid('QUOT');
			oKeys[uid] = sAll;
			return uid;
		});
		
		/*
		 
큰 따옴표 걷어내기
  
		 */
		sQuery = sQuery.replace(/"(\\"|[^"])*"/g, function(sAll) {
			var uid = uniqid('QUOT');
			oKeys[uid] = sAll;
			return uid;
		});
		
		/*
		 
[ ] 형태 걷어내기
  
		 */
		sQuery = sQuery.replace(/\[(.*?)\]/g, function(sAll, sBody) {
			if (sBody.indexOf('ATTR') == 0) return sAll;
			var uid = '[' + uniqid('ATTR') + ']';
			oKeys[uid] = sAll;
			return uid;
		});
	
		/*
		
( ) 형태 걷어내기
  
		 */
		var bChanged;
		
		do {
			
			bChanged = false;
		
			sQuery = sQuery.replace(/\(((\\\)|[^)|^(])*)\)/g, function(sAll, sBody) {
				if (sBody.indexOf('BRCE') == 0) return sAll;
				var uid = '_' + uniqid('BRCE');
				oKeys[uid] = sAll;
				bChanged = true;
				return uid;
			});
		
		} while(bChanged);
	
		return sQuery;
		
	};
	
	/*
	 
replace 시켜놓은 부분 복구하기
  
	 */
	var restoreKeys = function(sQuery, bOnlyAttrBrace) {
		
		var oKeys = backupKeys._keys;
	
		var bChanged;
		var rRegex = bOnlyAttrBrace ? /(\[ATTR[0-9]+\])/g : /(QUOT[0-9]+|\[ATTR[0-9]+\])/g;
		
		do {
			
			bChanged = false;
	
			sQuery = sQuery.replace(rRegex, function(sKey) {
				
				if (oKeys[sKey]) {
					bChanged = true;
					return oKeys[sKey];
				}
				
				return sKey;
	
			});
		
		} while(bChanged);
		
		/*
		
( ) 는 한꺼풀만 벗겨내기
  
		 */
		sQuery = sQuery.replace(/_BRCE[0-9]+/g, function(sKey) {
			return oKeys[sKey] ? oKeys[sKey] : sKey;
		});
		
		return sQuery;
		
	};
	
	/*
	 
replace 시켜놓은 문자열에서 Quot 을 제외하고 리턴
  
	 */
	var restoreString = function(sKey) {
		
		var oKeys = backupKeys._keys;
		var sOrg = oKeys[sKey];
		
		if (!sOrg) return sKey;
		return eval(sOrg);
		
	};
	
	var wrapQuot = function(sStr) {
		return '"' + sStr.replace(/"/g, '\\"') + '"';
	};
	
	var getStyleKey = function(sKey) {

		if (/^@/.test(sKey)) return sKey.substr(1);
		return null;
		
	};
	
	var getCSS = function(oEl, sKey) {
		
		if (oEl.currentStyle) {
			
			if (sKey == "float") sKey = "styleFloat";
			return oEl.currentStyle[sKey] || oEl.style[sKey];
			
		} else if (window.getComputedStyle) {
			
			return oDocument_dontShrink.defaultView.getComputedStyle(oEl, null).getPropertyValue(sKey.replace(/([A-Z])/g,"-$1").toLowerCase()) || oEl.style[sKey];
			
		}

		if (sKey == "float" && _JINDO_IS_IE) sKey = "styleFloat";
		return oEl.style[sKey];
		
	};

	var oCamels = {
		'accesskey' : 'accessKey',
		'cellspacing' : 'cellSpacing',
		'cellpadding' : 'cellPadding',
		'class' : 'className',
		'colspan' : 'colSpan',
		'for' : 'htmlFor',
		'maxlength' : 'maxLength',
		'readonly' : 'readOnly',
		'rowspan' : 'rowSpan',
		'tabindex' : 'tabIndex',
		'valign' : 'vAlign'
	};

	var getDefineCode = function(sKey) {
		var sVal;
		var sStyleKey;

		if (bXMLDocument) {
			
			sVal = 'oEl.getAttribute("' + sKey + '",2)';
		
		} else {
		
			if (sStyleKey = getStyleKey(sKey)) {
				
				sKey = '$$' + sStyleKey;
				sVal = 'getCSS(oEl, "' + sStyleKey + '")';
				
			} else {
				
				switch (sKey) {
				case 'checked':
					sVal = 'oEl.checked + ""';
					break;
					
				case 'disabled':
					sVal = 'oEl.disabled + ""';
					break;
					
				case 'enabled':
					sVal = '!oEl.disabled + ""';
					break;
					
				case 'readonly':
					sVal = 'oEl.readOnly + ""';
					break;
					
				case 'selected':
					sVal = 'oEl.selected + ""';
					break;
					
				default:
					if (oCamels[sKey]) {
						sVal = 'oEl.' + oCamels[sKey];
					} else {
						sVal = 'oEl.getAttribute("' + sKey + '",2)';
					} 
				}
				
			}
			
		}
			
		return '_' + sKey.replace(/\-/g,"_") + ' = ' + sVal;
	};
	
	var getReturnCode = function(oExpr) {
		
		var sStyleKey = getStyleKey(oExpr.key);
		
		var sVar = '_' + (sStyleKey ? '$$' + sStyleKey : oExpr.key);
		sVar = sVar.replace(/\-/g,"_");
		var sVal = oExpr.val ? wrapQuot(oExpr.val) : '';
		
		switch (oExpr.op) {
		case '~=':
			return '(' + sVar + ' && (" " + ' + sVar + ' + " ").indexOf(" " + ' + sVal + ' + " ") > -1)';
		case '^=':
			return '(' + sVar + ' && ' + sVar + '.indexOf(' + sVal + ') == 0)';
		case '$=':
			return '(' + sVar + ' && ' + sVar + '.substr(' + sVar + '.length - ' + oExpr.val.length + ') == ' + sVal + ')';
		case '*=':
			return '(' + sVar + ' && ' + sVar + '.indexOf(' + sVal + ') > -1)';
		case '!=':
			return '(' + sVar + ' != ' + sVal + ')';
		case '=':
			return '(' + sVar + ' == ' + sVal + ')';
		}
	
		return '(' + sVar + ')';
		
	};
	
	var getNodeIndex = function(oEl) {
		var nUID = getUID(oEl);
		var nIndex = oNodeIndexes[nUID] || 0;
		
		/*
		 
노드 인덱스를 구할 수 없으면
  
		 */
		if (nIndex == 0) {

			for (var oSib = (oEl.parentNode || oEl._IE5_parentNode).firstChild; oSib; oSib = oSib.nextSibling) {
				
				if (oSib.nodeType != 1){ 
					continue;
				}
				nIndex++;

				setNodeIndex(oSib, nIndex);
				
			}
						
			nIndex = oNodeIndexes[nUID];
			
		}
				
		return nIndex;
				
	};
	
	/*
	 
몇번째 자식인지 설정하는 부분
  
	 */
	var oNodeIndexes = {};

	var setNodeIndex = function(oEl, nIndex) {
		var nUID = getUID(oEl);
		oNodeIndexes[nUID] = nIndex;
	};
	
	var unsetNodeIndexes = function() {
		setTimeout(function() { oNodeIndexes = {}; }, 0);
	};
	
	/*
	 
가상 클래스
  
	 */
	var oPseudoes_dontShrink = {
	
		'contains' : function(oEl, sOption) {
			return (oEl.innerText || oEl.textContent || '').indexOf(sOption) > -1;
		},
		
		'last-child' : function(oEl, sOption) {
			for (oEl = oEl.nextSibling; oEl; oEl = oEl.nextSibling){
				if (oEl.nodeType == 1)
					return false;
			}
				
			
			return true;
		},
		
		'first-child' : function(oEl, sOption) {
			for (oEl = oEl.previousSibling; oEl; oEl = oEl.previousSibling){
				if (oEl.nodeType == 1)
					return false;
			}
				
					
			return true;
		},
		
		'only-child' : function(oEl, sOption) {
			var nChild = 0;
			
			for (var oChild = (oEl.parentNode || oEl._IE5_parentNode).firstChild; oChild; oChild = oChild.nextSibling) {
				if (oChild.nodeType == 1) nChild++;
				if (nChild > 1) return false;
			}
			
			return nChild ? true : false;
		},

		'empty' : function(oEl, _) {
			return oEl.firstChild ? false : true;
		},
		
		'nth-child' : function(oEl, nMul, nAdd) {
			var nIndex = getNodeIndex(oEl);
			return nIndex % nMul == nAdd;
		},
		
		'nth-last-child' : function(oEl, nMul, nAdd) {
			var oLast = (oEl.parentNode || oEl._IE5_parentNode).lastChild;
			for (; oLast; oLast = oLast.previousSibling){
				if (oLast.nodeType == 1) break;
			}
				
				
			var nTotal = getNodeIndex(oLast);
			var nIndex = getNodeIndex(oEl);
			
			var nLastIndex = nTotal - nIndex + 1;
			return nLastIndex % nMul == nAdd;
		},
		'checked' : function(oEl){
			return !!oEl.checked;
		},
		'selected' : function(oEl){
			return !!oEl.selected;
		},
		'enabled' : function(oEl){
			return !oEl.disabled;
		},
		'disabled' : function(oEl){
			return !!oEl.disabled;
		}
	};
	
	/*
	 
단일 part 의 body 에서 expression 뽑아냄
  
	 */
	var getExpression = function(sBody) {

		var oRet = { defines : '', returns : 'true' };
		
		var sBody = restoreKeys(sBody, true);
	
		var aExprs = [];
		var aDefineCode = [], aReturnCode = [];
		var sId, sTagName;
		
		/*
		 
유사클래스 조건 얻어내기
  
		 */
		var sBody = sBody.replace(/:([\w-]+)(\(([^)]*)\))?/g, function(_1, sType, _2, sOption) {
			
			switch (sType) {
			case 'not':
                /*
                 
괄호 안에 있는거 재귀파싱하기
  
                 */
				var oInner = getExpression(sOption);
				
				var sFuncDefines = oInner.defines;
				var sFuncReturns = oInner.returnsID + oInner.returnsTAG + oInner.returns;
				
				aReturnCode.push('!(function() { ' + sFuncDefines + ' return ' + sFuncReturns + ' })()');
				break;
				
			case 'nth-child':
			case 'nth-last-child':
				sOption =  restoreString(sOption);
				
				if (sOption == 'even'){
					sOption = '2n';
				}else if (sOption == 'odd') {
					sOption = '2n+1';
				}

				var nMul, nAdd;
				var matchstr = sOption.match(/([0-9]*)n([+-][0-9]+)*/);
				if (matchstr) {
					nMul = matchstr[1] || 1;
					nAdd = matchstr[2] || 0;
				} else {
					nMul = Infinity;
					nAdd = parseInt(sOption,10);
				}
				aReturnCode.push('oPseudoes_dontShrink[' + wrapQuot(sType) + '](oEl, ' + nMul + ', ' + nAdd + ')');
				break;
				
			case 'first-of-type':
			case 'last-of-type':
				sType = (sType == 'first-of-type' ? 'nth-of-type' : 'nth-last-of-type');
				sOption = 1;
				
			case 'nth-of-type':
			case 'nth-last-of-type':
				sOption =  restoreString(sOption);
				
				if (sOption == 'even') {
					sOption = '2n';
				}else if (sOption == 'odd'){
					sOption = '2n+1';
				}

				var nMul, nAdd;
				
				if (/([0-9]*)n([+-][0-9]+)*/.test(sOption)) {
					nMul = parseInt(RegExp.$1,10) || 1;
					nAdd = parseInt(RegExp.$2,20) || 0;
				} else {
					nMul = Infinity;
					nAdd = parseInt(sOption,10);
				}
				
				oRet.nth = [ nMul, nAdd, sType ];
				break;
				
			default:
				sOption = sOption ? restoreString(sOption) : '';
				aReturnCode.push('oPseudoes_dontShrink[' + wrapQuot(sType) + '](oEl, ' + wrapQuot(sOption) + ')');
			}
			
			return '';
			
		});
		
		/*
		 
[key=value] 형태 조건 얻어내기
  
		 */
		var sBody = sBody.replace(/\[(@?[\w-]+)(([!^~$*]?=)([^\]]*))?\]/g, function(_1, sKey, _2, sOp, sVal) {
			sKey = restoreString(sKey);
			sVal = restoreString(sVal);
			
			if (sKey == 'checked' || sKey == 'disabled' || sKey == 'enabled' || sKey == 'readonly' || sKey == 'selected') {
				
				if (!sVal) {
					sOp = '=';
					sVal = 'true';
				}
				
			}
			aExprs.push({ key : sKey, op : sOp, val : sVal });
			return '';
	
		});
		
		var sClassName = null;
	
		/*
		 
클래스 조건 얻어내기
  
		 */
		var sBody = sBody.replace(/\.([\w-]+)/g, function(_, sClass) { 
			aExprs.push({ key : 'class', op : '~=', val : sClass });
			if (!sClassName) sClassName = sClass;
			return '';
		});
		
		/*
		 
id 조건 얻어내기
  
		 */
		var sBody = sBody.replace(/#([\w-]+)/g, function(_, sIdValue) {
			if (bXMLDocument) {
				aExprs.push({ key : 'id', op : '=', val : sIdValue });
			}else{
				sId = sIdValue;
			}
			return '';
		});
		
		sTagName = sBody == '*' ? '' : sBody;
	
		/*
		 
match 함수 코드 만들어 내기
  
		 */
		var oVars = {};
		
		for (var i = 0, oExpr; oExpr = aExprs[i]; i++) {
			
			var sKey = oExpr.key;
			
			if (!oVars[sKey]) aDefineCode.push(getDefineCode(sKey));
            /*
             
유사클래스 조건 검사가 맨 뒤로 가도록 unshift 사용
  
             */
			aReturnCode.unshift(getReturnCode(oExpr));
			oVars[sKey] = true;
			
		}
		
		if (aDefineCode.length) oRet.defines = 'var ' + aDefineCode.join(',') + ';';
		if (aReturnCode.length) oRet.returns = aReturnCode.join('&&');
		
		oRet.quotID = sId ? wrapQuot(sId) : '';
		oRet.quotTAG = sTagName ? wrapQuot(bXMLDocument ? sTagName : sTagName.toUpperCase()) : '';
		
		if (bSupportByClassName) oRet.quotCLASS = sClassName ? wrapQuot(sClassName) : '';
		
		oRet.returnsID = sId ? 'oEl.id == ' + oRet.quotID + ' && ' : '';
		oRet.returnsTAG = sTagName && sTagName != '*' ? 'oEl.tagName == ' + oRet.quotTAG + ' && ' : '';
		
		return oRet;
		
	};
	
	/*
	 
쿼리를 연산자 기준으로 잘라냄
  
	 */
	var splitToParts = function(sQuery) {
		
		var aParts = [];
		var sRel = ' ';
		
		var sBody = sQuery.replace(/(.*?)\s*(!?[+>~ ]|!)\s*/g, function(_, sBody, sRelative) {
			
			if (sBody) aParts.push({ rel : sRel, body : sBody });
	
			sRel = sRelative.replace(/\s+$/g, '') || ' ';
			return '';
			
		});
	
		if (sBody) aParts.push({ rel : sRel, body : sBody });
		
		return aParts;
		
	};
	
	var isNth_dontShrink = function(oEl, sTagName, nMul, nAdd, sDirection) {
		
		var nIndex = 0;
		for (var oSib = oEl; oSib; oSib = oSib[sDirection]){
			if (oSib.nodeType == 1 && (!sTagName || sTagName == oSib.tagName))
					nIndex++;
		}
			

		return nIndex % nMul == nAdd;

	};
	
	/*
	 
잘라낸 part 를 함수로 컴파일 하기
  
	 */
	var compileParts = function(aParts) {
		var aPartExprs = [];
		/*
		 
잘라낸 부분들 조건 만들기
  
		 */
		for (var i = 0, oPart; oPart = aParts[i]; i++)
			aPartExprs.push(getExpression(oPart.body));
		
		//////////////////// BEGIN
		
		var sFunc = '';
		var sPushCode = 'aRet.push(oEl); if (oOptions.single) { bStop = true; }';

		for (var i = aParts.length - 1, oPart; oPart = aParts[i]; i--) {
			
			var oExpr = aPartExprs[i];
			var sPush = (debugOption.callback ? 'cost++;' : '') + oExpr.defines;
			

			var sReturn = 'if (bStop) {' + (i == 0 ? 'return aRet;' : 'return;') + '}';
			
			if (oExpr.returns == 'true') {
				sPush += (sFunc ? sFunc + '(oEl);' : sPushCode) + sReturn;
			}else{
				sPush += 'if (' + oExpr.returns + ') {' + (sFunc ? sFunc + '(oEl);' : sPushCode ) + sReturn + '}';
			}
			
			var sCheckTag = 'oEl.nodeType != 1';
			if (oExpr.quotTAG) sCheckTag = 'oEl.tagName != ' + oExpr.quotTAG;
			
			var sTmpFunc =
				'(function(oBase' +
					(i == 0 ? ', oOptions) { var bStop = false; var aRet = [];' : ') {');

			if (oExpr.nth) {
				sPush =
					'if (isNth_dontShrink(oEl, ' +
					(oExpr.quotTAG ? oExpr.quotTAG : 'false') + ',' +
					oExpr.nth[0] + ',' +
					oExpr.nth[1] + ',' +
					'"' + (oExpr.nth[2] == 'nth-of-type' ? 'previousSibling' : 'nextSibling') + '")) {' + sPush + '}';
			}
			
			switch (oPart.rel) {
			case ' ':
				if (oExpr.quotID) {
					
					sTmpFunc +=
						'var oEl = oDocument_dontShrink.getElementById(' + oExpr.quotID + ');' +
						'var oCandi = oEl;' +
						'for (; oCandi; oCandi = (oCandi.parentNode || oCandi._IE5_parentNode)) {' +
							'if (oCandi == oBase) break;' +
						'}' +
						'if (!oCandi || ' + sCheckTag + ') return aRet;' +
						sPush;
					
				} else {
					
					sTmpFunc +=
						'var aCandi = getChilds_dontShrink(oBase, ' + (oExpr.quotTAG || '"*"') + ', ' + (oExpr.quotCLASS || 'null') + ');' +
						'for (var i = 0, oEl; oEl = aCandi[i]; i++) {' +
							(oExpr.quotCLASS ? 'if (' + sCheckTag + ') continue;' : '') +
							sPush +
						'}';
					
				}
			
				break;
				
			case '>':
				if (oExpr.quotID) {
	
					sTmpFunc +=
						'var oEl = oDocument_dontShrink.getElementById(' + oExpr.quotID + ');' +
						'if ((oEl.parentNode || oEl._IE5_parentNode) != oBase || ' + sCheckTag + ') return aRet;' +
						sPush;
					
				} else {
	
					sTmpFunc +=
						'for (var oEl = oBase.firstChild; oEl; oEl = oEl.nextSibling) {' +
							'if (' + sCheckTag + ') { continue; }' +
							sPush +
						'}';
					
				}
				
				break;
				
			case '+':
				if (oExpr.quotID) {
	
					sTmpFunc +=
						'var oEl = oDocument_dontShrink.getElementById(' + oExpr.quotID + ');' +
						'var oPrev;' +
						'for (oPrev = oEl.previousSibling; oPrev; oPrev = oPrev.previousSibling) { if (oPrev.nodeType == 1) break; }' +
						'if (!oPrev || oPrev != oBase || ' + sCheckTag + ') return aRet;' +
						sPush;
					
				} else {
	
					sTmpFunc +=
						'for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) { if (oEl.nodeType == 1) break; }' +
						'if (!oEl || ' + sCheckTag + ') { return aRet; }' +
						sPush;
					
				}
				
				break;
			
			case '~':
	
				if (oExpr.quotID) {
	
					sTmpFunc +=
						'var oEl = oDocument_dontShrink.getElementById(' + oExpr.quotID + ');' +
						'var oCandi = oEl;' +
						'for (; oCandi; oCandi = oCandi.previousSibling) { if (oCandi == oBase) break; }' +
						'if (!oCandi || ' + sCheckTag + ') return aRet;' +
						sPush;
					
				} else {
	
					sTmpFunc +=
						'for (var oEl = oBase.nextSibling; oEl; oEl = oEl.nextSibling) {' +
							'if (' + sCheckTag + ') { continue; }' +
							'if (!markElement_dontShrink(oEl, ' + i + ')) { break; }' +
							sPush +
						'}';
	
				}
				
				break;
				
			case '!' :
			
				if (oExpr.quotID) {
					
					sTmpFunc +=
						'var oEl = oDocument_dontShrink.getElementById(' + oExpr.quotID + ');' +
						'for (; oBase; oBase = (oBase.parentNode || oBase._IE5_parentNode)) { if (oBase == oEl) break; }' +
						'if (!oBase || ' + sCheckTag + ') return aRet;' +
						sPush;
						
				} else {
					
					sTmpFunc +=
						'for (var oEl = (oBase.parentNode || oBase._IE5_parentNode); oEl; oEl = (oEl.parentNode || oEl._IE5_parentNode)) {'+
							'if (' + sCheckTag + ') { continue; }' +
							sPush +
						'}';
					
				}
				
				break;
	
			case '!>' :
			
				if (oExpr.quotID) {
	
					sTmpFunc +=
						'var oEl = oDocument_dontShrink.getElementById(' + oExpr.quotID + ');' +
						'var oRel = (oBase.parentNode || oBase._IE5_parentNode);' +
						'if (!oRel || oEl != oRel || (' + sCheckTag + ')) return aRet;' +
						sPush;
					
				} else {
	
					sTmpFunc +=
						'var oEl = (oBase.parentNode || oBase._IE5_parentNode);' +
						'if (!oEl || ' + sCheckTag + ') { return aRet; }' +
						sPush;
					
				}
				
				break;
				
			case '!+' :
				
				if (oExpr.quotID) {
	
					sTmpFunc +=
						'var oEl = oDocument_dontShrink.getElementById(' + oExpr.quotID + ');' +
						'var oRel;' +
						'for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { if (oRel.nodeType == 1) break; }' +
						'if (!oRel || oEl != oRel || (' + sCheckTag + ')) return aRet;' +
						sPush;
					
				} else {
	
					sTmpFunc +=
						'for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) { if (oEl.nodeType == 1) break; }' +
						'if (!oEl || ' + sCheckTag + ') { return aRet; }' +
						sPush;
					
				}
				
				break;
	
			case '!~' :
				
				if (oExpr.quotID) {
					
					sTmpFunc +=
						'var oEl = oDocument_dontShrink.getElementById(' + oExpr.quotID + ');' +
						'var oRel;' +
						'for (oRel = oBase.previousSibling; oRel; oRel = oRel.previousSibling) { ' +
							'if (oRel.nodeType != 1) { continue; }' +
							'if (oRel == oEl) { break; }' +
						'}' +
						'if (!oRel || (' + sCheckTag + ')) return aRet;' +
						sPush;
					
				} else {
	
					sTmpFunc +=
						'for (oEl = oBase.previousSibling; oEl; oEl = oEl.previousSibling) {' +
							'if (' + sCheckTag + ') { continue; }' +
							'if (!markElement_dontShrink(oEl, ' + i + ')) { break; }' +
							sPush +
						'}';
					
				}
				
			}
	
			sTmpFunc +=
				(i == 0 ? 'return aRet;' : '') +
			'})';
			
			sFunc = sTmpFunc;
			
		}
		eval('var fpCompiled = ' + sFunc + ';');
		return fpCompiled;
		
	};
	
	/*
	 
쿼리를 match 함수로 변환
  
	 */
	var parseQuery = function(sQuery) {
		var sCacheKey = sQuery;
		
		var fpSelf = arguments.callee;
		var fpFunction = fpSelf._cache[sCacheKey];
		
		if (!fpFunction) {
			
			sQuery = backupKeys(sQuery);
			
			var aParts = splitToParts(sQuery);
			
			fpFunction = fpSelf._cache[sCacheKey] = compileParts(aParts);
			fpFunction.depth = aParts.length;
			
		}
		
		return fpFunction;
		
	};
	
	parseQuery._cache = {};
	
	/*
	 
test 쿼리를 match 함수로 변환
  
	 */
	var parseTestQuery = function(sQuery) {
		
		var fpSelf = arguments.callee;
		
		var aSplitQuery = backupKeys(sQuery).split(/\s*,\s*/);
		var aResult = [];
		
		var nLen = aSplitQuery.length;
		var aFunc = [];
		
		for (var i = 0; i < nLen; i++) {

			aFunc.push((function(sQuery) {
				
				var sCacheKey = sQuery;
				var fpFunction = fpSelf._cache[sCacheKey];
				
				if (!fpFunction) {
					
					sQuery = backupKeys(sQuery);
					var oExpr = getExpression(sQuery);
					
					eval('fpFunction = function(oEl) { ' + oExpr.defines + 'return (' + oExpr.returnsID + oExpr.returnsTAG + oExpr.returns + '); };');
					
				}
				
				return fpFunction;
				
			})(restoreKeys(aSplitQuery[i])));
			
		}
		return aFunc;
		
	};
	
	parseTestQuery._cache = {};
	
	var distinct = function(aList) {
	
		var aDistinct = [];
		var oDummy = {};
		
		for (var i = 0, oEl; oEl = aList[i]; i++) {
			
			var nUID = getUID(oEl);
			if (oDummy[nUID]) continue;
			
			aDistinct.push(oEl);
			oDummy[nUID] = true;
		}
	
		return aDistinct;
	
	};
	
	var markElement_dontShrink = function(oEl, nDepth) {
		
		var nUID = getUID(oEl);
		if (cssquery._marked[nDepth][nUID]) return false;
		
		cssquery._marked[nDepth][nUID] = true;
		return true;

	};
	
	var oResultCache = null;
	var bUseResultCache = false;
	var bExtremeMode = false;
		
	var old_cssquery = function(sQuery, oParent, oOptions) {
		var oArgs = jindo.$Jindo.checkVarType(arguments, {
			'4str'   : [ 'sQuery:String+'],
			'4var'  : [ 'sQuery:String+', 'oParent:Variant' ],
			'4var2' : [ 'sQuery:String+', 'oParent:Variant', 'oOptions:Variant' ]
		},"cssquery");
		
		oParent = oParent && oParent.$value ? oParent.$value() : oParent;
		oOptions = oOptions && oOptions.$value ? oOptions.$value() : oOptions;
		
		if(jindo.$Jindo.isString(oParent)){
			try{
				oParent = document.getElementById(oParent);
			}catch(e){
				oParent = document;
			}
		}
		//-@@cssquery-@@//
		if(!oParent){
			oParent = document;
		}
        oParent = oParent || oParent.ownerDocument || oParent.document;
		
		if (typeof sQuery == 'object') {
			
			var oResult = {};
			
			for (var k in sQuery){
				if(sQuery.hasOwnProperty(k))
					oResult[k] = arguments.callee(sQuery[k], oParent, oOptions);
			}
			
			return oResult;
		}
		
		cost = 0;
		
		var executeTime = new Date().getTime();
		var aRet;
		
		for (var r = 0, rp = debugOption.repeat; r < rp; r++) {
			
			aRet = (function(sQuery, oParent, oOptions) {
				
				if(oOptions){
					if(!oOptions.oneTimeOffCache){
						oOptions.oneTimeOffCache = false;
					}
				}else{
					oOptions = {oneTimeOffCache:false};
				}
				cssquery.safeHTML(oOptions.oneTimeOffCache);
				
				if (!oParent) oParent = document;
					
				/*
				 
ownerDocument 잡아주기
  
				 */
				oDocument_dontShrink = oParent.ownerDocument || oParent.document || oParent;
				
				/*
				 
브라우저 버젼이 IE5.5 이하
  
				 */
				if (/\bMSIE\s([0-9]+(\.[0-9]+)*);/.test(_j_ag) && parseFloat(RegExp.$1,10) < 6) {
					try { oDocument_dontShrink.location; } catch(e) { oDocument_dontShrink = document; }
					
					oDocument_dontShrink.firstChild = oDocument_dontShrink.getElementsByTagName('html')[0];
					oDocument_dontShrink.firstChild._IE5_parentNode = oDocument_dontShrink;
				}
				
				/*
				 
XMLDocument 인지 체크
  
				 */
				bXMLDocument = (typeof XMLDocument !== 'undefined') ? (oDocument_dontShrink.constructor === XMLDocument) : (!oDocument_dontShrink.location);
				getUID = bXMLDocument ? getUID4XML : getUID4HTML;
		
				clearKeys();
				/*
				 
쿼리를 쉼표로 나누기
  
				 */
				var aSplitQuery = backupKeys(sQuery).split(/\s*,\s*/);
				var aResult = [];
				
				var nLen = aSplitQuery.length;
				
				for (var i = 0; i < nLen; i++)
					aSplitQuery[i] = restoreKeys(aSplitQuery[i]);
				
				/*
				 
쉼표로 나눠진 쿼리 루프
  
				 */
				for (var i = 0; i < nLen; i++) {
					
					var sSingleQuery = aSplitQuery[i];
					var aSingleQueryResult = null;
					
					var sResultCacheKey = sSingleQuery + (oOptions.single ? '_single' : '');
		
					/*
					 
결과 캐쉬 뒤짐
  
					 */
					var aCache = bUseResultCache ? oResultCache[sResultCacheKey] : null;
					if (aCache) {
						
						/*
						 
캐싱되어 있는게 있으면 parent 가 같은건지 검사한후 aSingleQueryResult 에 대입
  
						 */
						for (var j = 0, oCache; oCache = aCache[j]; j++) {
							if (oCache.parent == oParent) {
								aSingleQueryResult = oCache.result;
								break;
							}
						}
						
					}
					
					if (!aSingleQueryResult) {
						
						var fpFunction = parseQuery(sSingleQuery);
						
						cssquery._marked = [];
						for (var j = 0, nDepth = fpFunction.depth; j < nDepth; j++)
							cssquery._marked.push({});
						
						// console.log(fpFunction.toSource());
						aSingleQueryResult = distinct(fpFunction(oParent, oOptions));
						
						/*
					     
결과 캐쉬를 사용중이면 캐쉬에 저장
  
						 */
						if (bUseResultCache&&!oOptions.oneTimeOffCache) {
							if (!(oResultCache[sResultCacheKey] instanceof Array)) oResultCache[sResultCacheKey] = [];
							oResultCache[sResultCacheKey].push({ parent : oParent, result : aSingleQueryResult });
						}
						
					}
					
					aResult = aResult.concat(aSingleQueryResult);
					
				}
				unsetNodeIndexes();
		
				return aResult;
				
			})(sQuery, oParent, oOptions);
			
		}
		
		executeTime = new Date().getTime() - executeTime;

		if (debugOption.callback) debugOption.callback(sQuery, cost, executeTime);
		
		return aRet;
		
	};
	var cssquery;
	if (document.querySelectorAll) {
		function _isNonStandardQueryButNotException(sQuery){
			return /\[\s*(?:checked|selected|disabled)/.test(sQuery)
		}
		function _commaRevise (sQuery,sChange) {
			return sQuery.replace(/\,/gi,sChange);
		}
		

		/**
         
		 */
		cssquery = function(sQuery, oParent, oOptions){
			var oArgs = jindo.$Jindo.checkVarType(arguments, {
				'4str'   : [ 'sQuery:String+'],
				'4var'  : [ 'sQuery:String+', 'oParent:Variant' ],
				'4var2' : [ 'sQuery:String+', 'oParent:Variant', 'oOptions:Variant' ]
			},"cssquery");

			oParent = oParent && oParent.$value ? oParent.$value() : oParent;
			oOptions = oOptions && oOptions.$value ? oOptions.$value() : oOptions;
		
			//-@@cssquery-@@//
			if(jindo.$Jindo.isString(oParent)){
				oParent = document.getElementById(oParent);
			}
			var sTempId, aRet;
			if(!oParent){
				oParent = document;
			}
			
			oParent = oParent || oParent.ownerDocument || oParent.document ;
			var nNodeType = oParent.nodeType;
			var oldID, oOldParent;
			
			try{
				if(_isNonStandardQueryButNotException(sQuery)){
					return old_cssquery(sQuery, oParent, oOptions);
				}
				if(nNodeType===9){
				}else if(jindo.$Element._contain(oParent.ownerDocument || oParent.document,oParent)){
					if(oParent.id){ oldID = oParent.id;}
					oParent.setAttribute("id",('C' + new Date().getTime() + Math.floor(Math.random() * 1000000)));
					
					sQuery = _commaRevise("#"+oParent.id+" "+sQuery,", #"+oParent.id);
					oOldParent = oParent; 
					oParent = oParent.ownerDocument || oParent.document ;
				}else{
					return old_cssquery(sQuery, oParent, oOptions);
				}
				if (oOptions&&oOptions.single) {
					aRet = [oParent.querySelector(sQuery)];
				}else{
					aRet =  _toArray(oParent.querySelectorAll(sQuery));
				}
			}catch(e){
				aRet =  old_cssquery(sQuery, oParent, oOptions);
			}
			if(oOldParent){
				if(oldID) {
					oOldParent.id = oldID;
				}else{
					oOldParent.removeAttribute("id");
				}
			}
			return aRet;
		}
	}else{
		cssquery = old_cssquery;
	}
	/**
     
 * @function
 * @name $$.test
 * @description test() 메서드는 특정 요소가 해당 CSS 선택자(CSS Selector)에 부합하는 요소인지 판단하여 Boolean 형태로 반환한다. CSS 선택자에 연결자는 사용할 수 없음에 유의한다. 선택자의 패턴에 대한 설명은 $$() 함수와 See Also 항목을 참고한다.
 * @param {Element+} element	검사하고자 하는 요소
 * @param {String+} sCSSSelector	CSS 선택자. CSS 선택자로 사용할 수 있는 패턴은 표준 패턴과 비표준 패턴이 있다. 표준 패턴은 CSS Level3 명세서에 있는 패턴을 지원한다.
 * @return {Boolean} 조건에 부합하면 true, 부합하지 않으면 false를 반환한다.
 * @see $$
 * @see <a href="http://www.w3.org/TR/css3-selectors/">CSS Level3 명세서</a> - W3C
 * @example
// oEl 이 div 태그 또는 p 태그, 또는 align 속성이 center로 지정된 요소인지 검사한다.
if (cssquery.test(oEl, 'div, p, [align=center]'))
alert('해당 조건 만족');
  
	 */
	cssquery.test = function(oEl, sQuery) {
		clearKeys();
		try{
			var oArgs = jindo.$Jindo.checkVarType(arguments, {
				'4ele' : [ 'oEl:Element+', 'sQuery:String+' ],
				'4doc' : [ 'oEl:Document+', 'sQuery:String+' ]
			},"<static> cssquery#test");
			eEl = oArgs.oEl;
			sQuery = oArgs.sQuery;
		}catch(e){
			return false;
		}
		var aFunc = parseTestQuery(sQuery);
		for (var i = 0, nLen = aFunc.length; i < nLen; i++){
			if (aFunc[i](oEl)) return true;
		}
			
			
		return false;
		
	};

	/**
     
 * @function
 * @name $$.useCache
 * @description useCache() 메서드는 $$() 함수(cssquery)를 사용할 때 캐시를 사용할 것인지 설정한다. 캐시를 사용하면 동일한 선택자로 탐색하는 경우 탐색하지 않고 기존 탐색 결과를 반환한다. 따라서 사용자가 변수 캐시를 신경쓰지 않고 편하고 빠르게 사용할 수 있는 장점이 있지만 신뢰성을 위해 DOM 구조가 동적으로 변하지 않을 때만 사용해야 한다.
 * @param {Boolean} [bFlag] 캐시 사용 여부를 지정한다. 이 파라미터를 생략하면 캐시 사용 상태만 반환한다.
 * @return {Boolean} 캐시 사용 상태를 반환한다.
 * @see <a href="#.$$.clearCache">$$.clearCache</a>
  
	 */
	cssquery.useCache = function(bFlag) {
	
		if (bFlag !== undefined) {
			bUseResultCache = bFlag;
			cssquery.clearCache();
		}
		
		return bUseResultCache;
		
	};
	
	/**
     
 * @function
 * @name $$.clearCache
 * @description clearCache() 메서드는 $$() 함수(cssquery)에서 캐시를 사용할 때 캐시를 비울 때 사용한다. DOM 구조가 동적으로 바껴 기존의 캐시 데이터가 신뢰성이 없을 때 사용한다.
 * @return {Void}
 * @see <a href="#.$$.useCache">$$.useCache</a>
  
	 */
	cssquery.clearCache = function() {
		oResultCache = {};
	};
	
	/**
     
 * @function
 * @name $$.getSingle
 * @description getSingle() 메서드는 CSS 선택자를 사용에서 조건을 만족하는 첫 번째 요소를 가져온다. 반환하는 값은 배열이 아닌 객채 또는 null이다. 조건을 만족하는 요소를 찾으면 바로 탐색 작업을 중단하기 때문에 결과가 하나라는 보장이 있을 때 빠른 속도로 결과를 가져올 수 있다.
 $$() 함수(cssquery)에서 캐시를 사용할 때 캐시를 비울 때 사용한다. DOM 구조가 동적으로 바껴 기존의 캐시 데이터가 신뢰성이 없을 때 사용한다.
 *
 * @param1 {String+} sSelector CSS 선택자(CSS Selector). CSS 선택자로 사용할 수 있는 패턴은 표준 패턴과 비표준 패턴이 있다. 표준 패턴은 CSS3 Level3 명세서에 있는 패턴을 지원한다. 선택자의 패턴에 대한 설명은 $$() 함수와 See Also 항목을 참고한다.
 * @param1 {Element+} [oBaseElement] 탐색 대상이 되는 DOM 요소. 지정한 요소의 하위 노드에서만 객체를 탐색한다. 생략될 경우 문서를 대상으로 찾는다.
 * @param1 {Hash+} [oOption] 옵션 객체에 onTimeOffCache 속성을 true로 설정하면 탐색할 때 캐시를 사용하지 않는다.
 *
 * @param2 {String+} sSelector CSS 선택자(CSS Selector). CSS 선택자로 사용할 수 있는 패턴은 표준 패턴과 비표준 패턴이 있다. 표준 패턴은 CSS3 Level3 명세서에 있는 패턴을 지원한다. 선택자의 패턴에 대한 설명은 $$() 함수와 See Also 항목을 참고한다.
 * @param2 {String+} [sBaseElement] 탐색 대상이 되는 DOM 요소의 ID. 지정한 요소의 하위 노드에서만 객체를 탐색한다. 생략될 경우 문서를 대상으로 찾는다.  id을 넣을 수 있다.
 * @param2 {Hash+} [oOption] 옵션 객체에 onTimeOffCache 속성을 true로 설정하면 탐색할 때 캐시를 사용하지 않는다.
 *
 * @return {Element} 선택된 요소. 결과가 없으면 null을 반환한다.
 * @see $Document#query	 
 * @see <a href="#.$$.useCache">$$.useCache</a>
 * @see $$
 * @see <a href="http://www.w3.org/TR/css3-selectors/">CSS Level3 명세서</a> - W3C
  
	 */
	cssquery.getSingle = function(sQuery, oParent, oOptions) {

		oOptions = oOptions && oOptions.$value ? oOptions.$value() : oOptions; 

		return cssquery(sQuery, oParent, {
			single : true ,
			oneTimeOffCache:oOptions?(!!oOptions.oneTimeOffCache):false
		})[0] || null;
	};
	
	
	/**
     
 * @function
 * @name $$.xpath
 * @description xpath() 메서드는 XPath 문법을 만족하는 요소를 가져온다. 지원하는 문법이 제한적이므로 특수한 경우에만 사용할 것을 권장한다.
 *
 * @param1 {String+} sXPath XPath 값.
 * @return1 {Array} XPath 문법을 만족하는 요소를 원소로 하는 배열. 결과가 없으면 null을 반환한다.
 *
 * @param2 {String+} sXPath XPath 값.
 * @param2 {Element} [elBaseElement] 탐색 대상이 되는 DOM 요소. 지정한 요소의 하위 노드에서만 객체를 탐색한다. 
 * @return2 {Array} XPath 문법을 만족하는 요소를 원소로 하는 배열. 결과가 없으면 null을 반환한다.
 *
 * @see $Document#xpathAll
 * @see <a href="http://www.w3.org/standards/techs/xpath#w3c_all">XPath 문서</a> - W3C
  
	 */
	cssquery.xpath = function(sXPath, oParent) {
	
		sXPath = sXPath && sXPath.$value ? sXPath.$value() : sXPath; 
		
		sXPath = sXPath.replace(/\/(\w+)(\[([0-9]+)\])?/g, function(_1, sTag, _2, sTh) {
			sTh = sTh || '1';
			return '>' + sTag + ':nth-of-type(' + sTh + ')';
		});
		
		return old_cssquery(sXPath, oParent);
		
	};
	
	/**
     
 * @function
 * @name $$.debug
 * @description debug() 메서드는 $$() 함수(cssquery)를 사용할 때 성능을 측정하기 위한 기능을 제공하는 함수이다. 파라미터로 입력한 콜백 함수를 사용하여 성능을 측정한다.
 * @param1 {Function} fCallback 선택자 실행에 소요된 비용과 시간을 점검하는 함수. 이 파라미터에 함수 대신 false를 입력하면 성능 측정 모드(debug)를 사용하지 않는다. 이 콜백 함수는 파라미터로 query, cost, executeTime을 갖는다.<br>
 <ul>
	<li>query는 실행에 사용된 선택자이다.</li>
	<li>index는 탐색에 사용된 비용이다(루프 횟수).</li>
	<li>executeTime 탐색에 소요된 시간이다.</li>
 * @return1 {Void}
 *
 * @param2 {Function} fCallback 선택자 실행에 소요된 비용과 시간을 점검하는 함수. 이 파라미터에 함수 대신 false를 입력하면 성능 측정 모드(debug)를 사용하지 않는다. 이 콜백 함수는 파라미터로 query, cost, executeTime을 갖는다.<br>
 <ul>
	<li>query는 실행에 사용된 선택자이다.</li>
	<li>index는 탐색에 사용된 비용이다(루프 횟수).</li>
	<li>executeTime 탐색에 소요된 시간이다.</li>
 * @param2 {Numeric} [nRepeat] 하나의 선택자를 반복 수행할 횟수. 인위적으로 실행 속도를 늦추기 위해 사용할 수 있다.
 * @return2 {Void}
 *
 * @example
cssquery.debug(function(sQuery, nCost, nExecuteTime) {
	if (nCost > 5000)
		console.warn('5000이 넘는 비용이? 확인 -> ' + sQuery + '/' + nCost);
	else if (nExecuteTime > 200)
		console.warn('0.2초가 넘게 실행을? 확인 -> ' + sQuery + '/' + nExecuteTime);
}, 20);

....

cssquery.debug(false);
  
	 */
	cssquery.debug = function(fpCallback, nRepeat) {
		
		var oArgs = jindo.$Jindo.checkVarType(arguments, {
			'4fun'   : [ 'fpCallback:Function+'],
			'4fun2'  : [ 'fpCallback:Function+', 'nRepeat:Numeric' ]
		},"<static> cssquery#debug");

		debugOption.callback = oArgs.fpCallback;
		debugOption.repeat = oArgs.nRepeat || 1;
		
	};
	
	/**
     
 * @function
 * @name $$.safeHTML
 * @description safeHTML() 메서드는 인터넷 익스플로러에서 innerHTML 속성을 사용할 때 _cssquery_UID 값이 나오지 않게 하는 함수이다. true로 설정하면 탐색하는 노드의 innerHTML 속성에 _cssquery_UID가 나오지 않게 할 수 있지만 탐색 속도는 느려질 수 있다.
 * @param {Boolean} bFlag _cssquery_UID의 표시 여부를 지정한다. true로 설정하면 _cssquery_UID가 나오지 않는다.
 * @return {Boolean} _cssquery_UID 표시 여부 상태를 반환한다. _cssquery_UID를 표시하는 상태이면 true를 반환하고 그렇지 않으면 false를 반환한다.
  
	 */
	cssquery.safeHTML = function(bFlag) {
		
		if (arguments.length > 0)
			safeHTML = bFlag && _JINDO_IS_IE;
		
		return safeHTML || !_JINDO_IS_IE;
		
	};
	
	/**
     
 * @field
 * @name $$.version
 * @description version 속성은 cssquery의 버전 정보를 담고 있는 문자열이다.
  
	 */
	cssquery.version = sVersion;
	
	/**
     
	 * IE에서 validUID,cache를 사용했을때 메모리 닉이 발생하여 삭제하는 모듈 추가.
  
	 */
	cssquery.release = function() {
		if(_JINDO_IS_IE){
			
			delete validUID;
			validUID = {};
			
			if(bUseResultCache){
				cssquery.clearCache();
			}
		}
	};
	/**
     
	 * cache가 삭제가 되는지 확인하기 위해 필요한 함수
	 * @ignore
  
	 */
	cssquery._getCacheInfo = function(){
		return {
			uidCache : validUID,
			eleCache : oResultCache 
		}
	}
	/**
     
	 * 테스트를 위해 필요한 함수
	 * @ignore
  
	 */
	cssquery._resetUID = function(){
		UID = 0
	}
	/**
     
	 * querySelector가 있는 브라우져에서 extreme을 실행시키면 querySelector을 사용할수 있는 커버리지가 높아져 전체적으로 속도가 빨리진다.
	 * 하지만 ID가 없는 엘리먼트를 기준 엘리먼트로 넣었을 때 기준 엘리먼트에 임의의 아이디가 들어간다.
	 * @param {Boolean} bExtreme true
  
	 */
	cssquery.extreme = function(bExtreme){
		if(arguments.length == 0){
			bExtreme = true;
		}
		bExtremeMode = bExtreme;
	}

	return cssquery;
	
})();

//-!jindo.$Agent start!-//
/**

 * @class $Agent() 객체는 운영체제, 브라우저를 비롯한 사용자 시스템 정보를 제공한다.
 * @constructor
 * @description $Agent() 객체를 생성한다. $Agent() 객체는 사용자 시스템의 운영 체제 정보와 브라우저 정보를 제공한다.  
	
 */
jindo.$Agent = function() {
	//-@@$Agent-@@//
	var cl = arguments.callee;
	var cc = cl._cached;

	if (cc) return cc;
	if (!(this instanceof cl)) return new cl;
	if (!cc) cl._cached = this;

	this._navigator = navigator;
	this._dm = document.documentMode;
}

//-!jindo.$Agent.prototype.navigator start!-//
/**

 * @description navigator() 메서드는 사용자 브라우저 정보를 담고 있는 객체를 반환한다. 브라우저 정보를 저장하는 객체는 브라우저 이름과 버전을 속성으로 가진다. 브라우저 이름은 영어 소문자로 표시하며, 사용자의 브라우저와 일치하는 브라우저 속성은 true 값을 가진다. 또한, 사용자의 브라우저 이름을 확인할 수 있도록 메서드를 제공한다. 다음은 사용자 브라우저 정보를 담고 있는 객체의 속성과 메서드를 설명한 표이다.<br>
 <table>
	<caption>브라우저 정보 객체 속성</caption>
	<thead>
		<tr>
			<th scope="col">이름</th>
			<th scope="col">타입</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>camino</td>
			<td>Boolean</td>
			<td>카미노(Camino) 브라우저 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>chrome</td>
			<td>Boolean</td>
			<td>구글 크롬(Chrome) 브라우저 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>firefox</td>
			<td>Boolean</td>
			<td>파이어폭스(Firefox) 브라우저 사용 여부를 불리언 형태로 저장한다. </td>
		</tr>
		<tr>
			<td>icab</td>
			<td>Boolean</td>
			<td>iCab 브라우저 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>ie</td>
			<td>Boolean</td>
			<td>인터넷 익스플로러(Internet Explorer) 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>konqueror</td>
			<td>Boolean</td>
			<td>Konqueror 브라우저 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>mie</td>
			<td>Boolean</td>
			<td>인터넷 익스플로러 모바일(Internet Explorer Mobile) 브라우저 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>mobile</td>
			<td>Boolean</td>
			<td>모바일 브라우저 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>mozilla</td>
			<td>Boolean</td>
			<td>모질라(Mozilla) 계열의 브라우저 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>msafari</td>
			<td>Boolean</td>
			<td>Mobile 버전 Safari 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>nativeVersion</td>
			<td>Number</td>
			<td>인터넷 익스플로러 호환 모드의 브라우저를 사용할 경우 실제 브라우저를 저장한다.</td>
		</tr>
		<tr>
			<td>netscape</td>
			<td>Boolean</td>
			<td>넷스케이프(Netscape) 브라우저 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>omniweb</td>
			<td>Boolean</td>
			<td>OmniWeb 브라우저 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>opera</td>
			<td>Boolean</td>
			<td>오페라(Opera) 브라우저 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>safari</td>
			<td>Boolean</td>
			<td>Safari 브라우저 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>version</td>
			<td>Number</td>
			<td>사용자가 사용하고 있는 브라우저의 버전 정보를 저장한다. 실수(Float) 형태로 버전 정보를 저장하며 버전 정보가 없으면 -1 값을 가진다.</td>
		</tr>
		<tr>
			<td>webkit</td>
			<td>WebKit 계열 부라우저 사용 여부를 불리언 형태로 저장한다. </td>
		</tr>
	</tbody>
</table>
<table>
	<caption>브라우저 정보 객체 메서드</caption>
	<thead>
		<tr>
			<th scope="col">이름</th>
			<th scope="col">반환 타입</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>getName()</td>
			<td>String</td>
			<td>사용자가 사용하고 있는 브라우저의 이름을 반환한다. 반환하는 브라우저의 이름은 속성 이름과 동일하다.</td>
		</tr>
	</tbody>
 </table>
 * @return {Object} 브라우저 정보를 저장하는 객체.
 * @since 1.4.3 버전부터 mobile,msafari,mopera,mie 사용 가능.<br>1.4.5 버전부터 ipad에서 mobile은 false를 반환한다.
 * @example
oAgent = $Agent().navigator(); // 사용자가 파이어폭스 3를 사용한다고 가정한다.

oAgent.camino  // false
oAgent.firefox  // true
oAgent.konqueror // false
oAgent.mozilla  //true
oAgent.netscape  // false
oAgent.omniweb  //false
oAgent.opera  //false
oAgent.webkit  /false
oAgent.safari  //false
oAgent.ie  //false
oAgent.chrome  //false
oAgent.icab  //false
oAgent.version  //3
oAgent.nativeVersion //-1 (1.4.2부터 사용 가능, IE8에서 호환 모드 사용시 nativeVersion은 8로 나옴.)

oAgent.getName() // firefox
	
 */
jindo.$Agent.prototype.navigator = function() {
	//-@@$Agent.navigator-@@//
	var info = {};
	var ver  = -1;
	var nativeVersion = -1;
	var u    = this._navigator.userAgent;
	var v    = this._navigator.vendor || "";
	var dm    = this._dm;

	function f(s,h){ return ((h||"").indexOf(s) > -1) };

	info.getName = function(){
		var name = "";
		for(x in info){
			if(typeof info[x] == "boolean" && info[x]&&info.hasOwnProperty(x))
				name = x;
		}
		return name;
	}

	info.webkit		= f("WebKit",u);
	info.opera     = (window.opera !== undefined) || f("Opera",u);
	info.ie        = !info.opera && f("MSIE",u);
	info.chrome    = info.webkit && f("Chrome",u);
	info.safari    = info.webkit && !info.chrome && f("Apple",v);
	info.firefox   = f("Firefox",u);
	info.mozilla   = f("Gecko",u) && !info.safari && !info.chrome && !info.firefox;
	info.camino    = f("Camino",v);
	info.netscape  = f("Netscape",u);
	info.omniweb   = f("OmniWeb",u);
	info.icab      = f("iCab",v);
	info.konqueror = f("KDE",v);
	info.mobile	   = (f("Mobile",u)||f("Android",u)||f("Nokia",u)||f("webOS",u)||f("Opera Mini",u)||f("BlackBerry",u)||(f("Windows",u)&&f("PPC",u))||f("Smartphone",u)||f("IEMobile",u))&&!f("iPad",u);
	info.msafari   = (!f("IEMobile",u) && f("Mobile",u))||(f("iPad",u)&&f("Safari",u));
	info.mopera    = f("Opera Mini",u);
	info.mie       = f("PPC",u)||f("Smartphone",u)||f("IEMobile",u);

	try {
		
		if (info.ie) {
			if(dm > 0){
				ver = dm;
				if (u.match(/(?:Trident)\/([0-9.]+)/)){
					var nTridentNum = parseInt(RegExp.$1,10);
					if(nTridentNum > 3){
						nativeVersion = nTridentNum + 4;	
					}
				}else{
					nativeVersion = ver;
				}
			}else{
				nativeVersion = ver = u.match(/(?:MSIE) ([0-9.]+)/)[1];
			}
		} else if (info.safari||info.msafari) {
			
			ver = parseFloat(u.match(/Safari\/([0-9.]+)/)[1],10);
			if (ver == 100) {
				ver = 1.1;
			} else {
				if(u.match(/Version\/([0-9.]+)/)){
					ver = RegExp.$1;
				}else{
					ver = [1.0,1.2,-1,1.3,2.0,3.0][Math.floor(ver/100)];	
					
				}
			}
		} else if(info.mopera){
			ver = u.match(/(?:Opera\sMini)\/([0-9.]+)/)[1];
		} else if (info.firefox||info.opera||info.omniweb) {
			ver = u.match(/(?:Firefox|Opera|OmniWeb)\/([0-9.]+)/)[1];
		} else if (info.mozilla) {
			ver = u.match(/rv:([0-9.]+)/)[1];
		} else if (info.icab) {
			ver = u.match(/iCab[ \/]([0-9.]+)/)[1];
		} else if (info.chrome) {
			ver = u.match(/Chrome[ \/]([0-9.]+)/)[1];
		}

		info.version = parseFloat(ver,10);
		info.nativeVersion = parseFloat(nativeVersion,10);
		if (isNaN(info.version)) info.version = -1;
	} catch(e) {
		info.version = -1;
	}

	this.navigator = function() {
		return info;
	};

	return info;
};

//-!jindo.$Agent.prototype.os start!-//
/**

 * @description os() 메서드는 사용자 운영체제 정보를 담고 있는 객체를 반환한다. 운영체제 정보를 저장하는 객체는 운영체제 이름을 속성으로 가진다. 운영 체제 속성은 영어 소문자로 표시하며, 사용자의 운영체제와 일치하는 운영체제의 속성은 true 값을 가진다. 또한 사용자의 운영체제 이름을 확인할 수 있도록 메서드를 제공한다.<br> 다음은 사용자 운영체제 정보를 담고 있는 객체의 속성과 메서드를 설명한 표이다.<br>
<table>
	<caption>운영체제 정보 객체 속성</caption>
	<thead>
		<tr>
			<th scope="col">이름</th>
			<th scope="col">타입</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>android</td>
			<td>Boolean</td>
			<td>Android 운영체제 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>blackberry</td>
			<td>Boolean</td>
			<td>Blackberry 운영체제 사용 여부를 불리언 형태로 저장한다. </td>
		</tr>
		<tr>
			<td>iphone</td>
			<td>Boolean</td>
			<td>iPhone 운영체제 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>linux</td>
			<td>Boolean</td>
			<td>Linux운영체제 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>mac</td>
			<td>Boolean</td>
			<td>Mac운영체제 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>mwin</td>
			<td>Boolean</td>
			<td>Window Mobile 운영체제 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>nokia</td>
			<td>Boolean</td>
			<td>Nokia 운영체제 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>vista</td>
			<td>Boolean</td>
			<td>Windows Vista 운영체제 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>webos</td>
			<td>Boolean</td>
			<td>webOS 운영체제 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>win</td>
			<td>Boolean</td>
			<td>Windows계열 운영체제 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>win2000</td>
			<td>Boolean</td>
			<td>Windows 2000운영체제 사용 여부 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>win7</td>
			<td>Boolean</td>
			<td>Windows 7 운영체제 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>winxp</td>
			<td>Boolean</td>
			<td>Windows XP 운영체제 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>xpsp2</td>
			<td>Boolean</td>
			<td>Windows XP SP 2 운영체제 사용 여부를 불리언 형태로 저장한다.</td>
		</tr>
	</tbody>
</table>
<table>
	<caption>운영체제 정보 객체 메서드</caption>
	<thead>
		<tr>
			<th scope="col">이름</th>
			<th scope="col">반환 타입</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>getName()</td>
			<td>String</td>
			<td>사용자가 사용하고 있는 운영체제의 이름을 반환한다. 반환하는 운영체제의 이름은 속성 이름과 동일하다.</td>
		</tr>
	</tbody>
 </table>
 * @return {Object} 운영체제 정보를 저장하는 객체.
 * @since 1.4.3 버전부터 iphone,android,nokia,webos,blackberry,mwin 사용 가능.<br>1.4.5 버전부터 ipad 사용가능.
 * @example
oOS = $Agent().os();  // 사용자의 운영체제가 Windows XP라고 가정한다.
oOS.linux  // false
oOS.mac  // false
oOS.vista  // false
oOS.win  // true
oOS.win2000  // false
oOS.winxp  // true
oOS.xpsp2  // false
oOS.win7  // false
oOS.getName() // winxp
  
 */
jindo.$Agent.prototype.os = function() {
	//-@@$Agent.os-@@//
	var info = {};
	var u    = this._navigator.userAgent;
	var p    = this._navigator.platform;
	var f    = function(s,h){ return (h.indexOf(s) > -1) };

	info.getName = function(){
		var name = "";
		for(x in info){
			if(info[x]===true&&info.hasOwnProperty(x))
				name = x;
		}
		return name;
	}

	info.win     = f("Win",p)
	info.mac     = f("Mac",p);
	info.linux   = f("Linux",p);
	info.win2000 = info.win && (f("NT 5.0",u) || f("2000",u));
	info.winxp   = info.win && f("NT 5.1",u);
	info.xpsp2   = info.winxp && f("SV1",u);
	info.vista   = info.win && f("NT 6.0",u);
	info.win7  = info.win && f("NT 6.1",u);
	info.ipad = f("iPad",u);
	info.iphone = f("iPhone",u) && !info.ipad;
	info.android = f("Android",u);
	info.nokia =  f("Nokia",u);
	info.webos = f("webOS",u);
	info.blackberry = f("BlackBerry",u);
	info.mwin = f("PPC",u)||f("Smartphone",u)||f("IEMobile",u);


	this.os = function() {
		return info;
	};

	return info;
};

//-!jindo.$Agent.prototype.flash start!-//
/**

 * @description flash() 메서드는 사용자의 Flash Player 정보를 담고 있는 객체를 반환한다. Flash Player 정보를 저장하는 객체는 Flash Player 설치 여부와 설치된 Flash Player의 버전 정보를 제공한다. 다음은 Flash Player의 정보를 담고 있는 객체의 속성을 설명한 표이다.<br>
 <table>
	<caption>Flash Player 정보 객체 속성</caption>
	<thead>
		<tr>
			<th scope="col">이름</th>
			<th scope="col">타입</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>installed</td>
			<td>Boolean</td>
			<td>Flash Player 설치 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>version</td>
			<td>Number</td>
			<td>사용자가 사용하고 있는 Flash Player의 버전 정보를 저장한다. 실수(Float) 형태로 버전 정보를 저장하며, Flash Player가 설치되지 않은 경우 -1을 저장한다. </td>
		</tr>
	</tbody>
 </table>
 * @return {Object} Flash Player 정보를 저장하는 객체.
 * @see <a href="http://www.adobe.com/products/flashplayer/">Flash Player 공식 페이지</a>
 * @example
var oFlash = $Agent.flash();
oFlash.installed  // 플래시 플레이어를 설치했다면 true
oFlash.version  // 플래시 플레이어의 버전. 
  
 */
jindo.$Agent.prototype.flash = function() {
	//-@@$Agent.flash-@@//
	var info = {};
	var p    = this._navigator.plugins;
	var m    = this._navigator.mimeTypes;
	var f    = null;

	info.installed = false;
	info.version   = -1;

	if (!jindo.$Jindo.isUndefined(p)&& p.length) {
		f = p["Shockwave Flash"];
		if (f) {
			info.installed = true;
			if (f.description) {
				info.version = parseFloat(f.description.match(/[0-9.]+/)[0],10);
			}
		}

		if (p["Shockwave Flash 2.0"]) {
			info.installed = true;
			info.version   = 2;
		}
	} else if (!jindo.$Jindo.isUndefined(m) && m.length) {
		f = m["application/x-shockwave-flash"];
		info.installed = (f && f.enabledPlugin);
	} else {
		for(var i=10; i > 1; i--) {
			try {
				f = new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i);
				info.installed = true;
				info.version   = i;
				break;
			} catch(e) {}
		}
	}

	this.flash = function() {
		return info;
	};
    /*
    
하위호환을 위해 일단 남겨둔다.
  
     */
	this.info = this.flash;

	return info;
};

//-!jindo.$Agent.prototype.silverlight start!-//
/**

 * silverlight() 메서드는 사용자의 실버라이트(Silverlight) 정보를 담고 있는 객체를 반환한다. 
 * @description 실버라이트 정보를 저장하는 객체는 실버라이트 설치 여부와 설치된 실버라이트의 버전 정보를 제공한다. 다음은 실버라이트 정보를 담고 있는 객체의 속성을 설명한 표이다.<br>
  <table>
	<caption>실버라이트 정보 객체 속성</caption>
	<thead>
		<tr>
			<th scope="col">이름</th>
			<th scope="col">타입</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>installed</td>
			<td>Boolean</td>
			<td>실버라이트 설치 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>version</td>
			<td>Number</td>
			<td>사용자가 사용하고 있는 실버라이트의 버전 정보를 저장한다. 실수(Float) 형태로 버전 정보를 저장하며, 실버라이트가 설치되지 않은 경우 -1을 저장한다. </td>
		</tr>
	</tbody>
 </table>
 * @return {Object} 실버라이트 정보를 저장하는 객체.
 * @see <a href="http://www.microsoft.com/silverlight/">실버라이트 공식 페이지</a>
 * @example
var oSilver = $Agent.silverlight();
oSilver.installed  // Silverlight 플레이어를 설치했다면 true
oSilver.version  // Silverlight 플레이어의 버전. 
  
 */
jindo.$Agent.prototype.silverlight = function() {
	//-@@$Agent.silverlight-@@//
	var info = new Object;
	var p    = this._navigator.plugins;
	var s    = null;

	info.installed = false;
	info.version   = -1;

	if (!jindo.$Jindo.isUndefined(p) && p.length) {
		s = p["Silverlight Plug-In"];
		if (s) {
			info.installed = true;
			info.version = parseInt(s.description.split(".")[0],10);
			if (s.description == "1.0.30226.2") info.version = 2;
		}
	} else {
		try {
			s = new ActiveXObject("AgControl.AgControl");
			info.installed = true;
			if(s.isVersionSupported("3.0")){
				info.version = 3;
			}else if (s.isVersionSupported("2.0")) {
				info.version = 2;
			} else if (s.isVersionSupported("1.0")) {
				info.version = 1;
			}
		} catch(e) {}
	}

	this.silverlight = function() {
		return info;
	};

	return info;
};

//-!jindo.$A start!-//
/**

 * @fileOverview $A() 객체의 생성자 및 메서드를 정의한 파일
 * @name array.js
 * @author Kim, Taegon
  
 */

/**

 * @class $A() 객체는 배열(Array)을 좀 더 편리하게 다룰 수 있도록 메서드를 제공한다. $A() 객체를 생성할 때 원본 배열 객체를 래핑(warpping)하여 생성한다. 여기서 래핑이란 자바스크립트의 함수를 감싸 본래 함수의 기능에 새로운 확장 기능을 추가하는 것을 말한다.
 * @extends core
 * @constructor
 * @description $A() 객체를 생성한다.
 * @throws {jindo.$Except.EITHER_ARRAY_OR_$A_OR_NULL_OR_UNDEFINED} 파라메터가 array, $A, null, undefined가 아닌 경우. 
 * @param {Void|Null|Undefined|Array+|ArrayStyle} [vArray] 없거나 null, undefined인 경우는 빈배열이 할당됨.  
 * @example
var zoo = ["zebra", "giraffe", "bear", "monkey"];
var waZoo = $A(zoo); // ["zebra", "giraffe", "bear", "monkey"]를 래핑한 $A 객체를 생성하여 반환
  
 */
jindo.$A = function(array) {
	//-@@$A-@@//
	var cl = arguments.callee;
	
	if (array instanceof cl) {
		return array;
	}
	if (!(this instanceof cl)){
		try {
			jindo.$Jindo._warn(arguments.length, 1,"$A");
			return new cl(array);
		} catch(e) {
			if (e instanceof TypeError) { return null; }
			throw e;
		}
	}
	
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4voi' : [ ],
		'4arr' : ['aPram:Array+'],
		'4nul' : [ 'oNull:Null' ],
		'4und' : [ 'oUndefined:Undefined' ],
		'arrt' : [ 'aPram:ArrayStyle' ]
	},"$A");
	if(oArgs == null) array = [];
	switch(oArgs+"") {
	case 'arrt':
	case '4arr':
		array = oArgs.aPram;
		break;
	case '4nul':
	case '4und':
	case '4voi':
	    array = [];
		
	}



	this._array = [];
	for(var i=0; i < array.length; i++) {
		this._array[this._array.length] = array[i];
	}
};
jindo.$A.checkVarTypeObj ={
	'4fun' : [ 'fCallback:Function+'],
	'4thi' : [ 'fCallback:Function+', 'oThis:Variant']
};

//-!jindo.$A.prototype.toString start!-//
/**

* @description toString() 메서드는 내부 배열을 문자열로 변환한다. 자바스크립트의 Array.toString() 메서드를 사용한다.
 * @return {String} 내부 배열을 변환한 문자열.
 * @See <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/toString">array.toString()</a> - MDN Docs
 * @example
var zoo = ["zebra", "giraffe", "bear", "monkey"];
$A(zoo).toString();
// 결과 : zebra,giraffe,bear,monkey
  
 */
jindo.$A.prototype.toString = function() {
	//-@@$A.toString-@@//
	return this._array.toString();
};

//-!jindo.$A.prototype.get start!-//
/**

 * @description get() 메서드는 파라미터로 지정한 인덱스로 내부 배열의 원소 값을 조회한다.
 * @param {Numeric} nIndex 조회할 원소의 인덱스. 인덱스는 0부터 시작한다.
 * @return {Variant} 배열에서의 해당 인덱스의 원소 값.
 * @since 1.4.2 부터 지원
 * @example
var zoo = ["zebra", "giraffe", "bear", "monkey"];
var waZoo = $A(zoo);

// 원소 값 조회
waZoo.get(1); // 결과 : giraffe
waZoo.get(3); // 결과 : monkey
  
 */
jindo.$A.prototype.get = function(nIndex){
	//-@@$A.get-@@//
	 jindo.$Jindo.checkVarType(arguments, {
		'4num' : [ 'nIndex:Numeric' ]
	},"$A#get");
	return this._array[nIndex];
};

//-!jindo.$A.prototype.set start!-//
/**

 * @description set() 메서드는 인덱스와 값을 지정하여 값을 셋팅한다.
 * @param {Numeric} nIndex 인덱스
 * @param {Variant} vValue 다양한 값.
 * @return {$A} 인스턴스
 * @since 2.0.0 부터 지원
 * @example
var zoo = ["zebra", "giraffe", "bear", "monkey"];
var waZoo = $A(zoo);

// 값 셋팅
waZoo.set(1,"pig"); // 결과 : $A(["zebra", "pig", "bear", "monkey"]);
  
 */
jindo.$A.prototype.set = function(nIndex,vValue){
	//-@@$A.set-@@//
	jindo.$Jindo.checkVarType(arguments, {
		'4num' : [ 'nIndex:Numeric' ,'vValue:Variant']
		
	},"$A#set");
	
	this._array[nIndex] = vValue;
	return this;
};

//-!jindo.$A.prototype.length start!-//
/**

 * @description length() 메서드는 네이티브 length의 속성과 같이 내부 배열 크기를 지정한다.
 *
 * @param1 {Void}
 * @return1	{Number} 현재 내부 배열의 크기(Number)를 반환한다.
 *
 * @param2 	{Numeric} nLen 지정할 배열의 크기.지정할 배열의 크기. nLen이 기존 배열의 크기보다 크면 적용되지 않는다. nLen 이 기존 배열의 크기보다 작으면 nLen번째 이후의 원소는 제거한다.
 * @return2	{$A} $A() 객체를 반환한다.
 *
 * @param3 	{Numeric} nLen 지정할 배열의 크기. nLen이 기존 배열의 크기보다 크면 추가된 배열의 공간에 vValue 파라미터의 값으로 채운다. nLen 이 기존 배열의 크기보다 작으면 nLen번째 이후의 원소는 제거한다.
 * @param3	{Variant} vValue 새로운 원소를 추가할 때 사용할 초기 값.
 * @return3 	{$A} $A() 객체를 반환한다.
 *
 * @example
var zoo = ["zebra", "giraffe", "bear", "monkey"];

// 배열의 크기 지정 (원소가 삭제되는 경우)
$A(zoo).length(2);
// 결과 : ["zebra", "giraffe"]
 * @example
// 배열의 크기 지정 (원소가 추가되는 경우)
$A(zoo).length(6, "(Empty)");
// 결과 : ["zebra", "giraffe", "bear", "monkey", "(Empty)", "(Empty)"]
$A(zoo).length(5, birds);
// 결과 : ["zebra", "giraffe", "bear", "monkey", ["parrot", "sparrow", "dove"]]
 * @example
// 배열의 크기 조회
$A(zoo).length(); // 결과 : 4
  
 */
jindo.$A.prototype.length = function(nLen, oValue) {
	//-@@$A.length-@@//

	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4num' : [ jindo.$Jindo._F('nLen:Numeric')],
		'sv' : [ 'nLen:Numeric', 'vValue:Variant'],
		'4voi' : [ ]
	},"$A#length");
	
	switch(oArgs+"") {
		case '4num':
			this._array.length = oArgs.nLen;
			return this;
			
		case 'sv':
		    var l = this._array.length;
			this._array.length = oArgs.nLen;
			for(var i=l; i < nLen; i++) {
				this._array[i] = oArgs.vValue;
			}
			return this;
			
		case '4voi':
		    return this._array.length;
			
	}
};

//-!jindo.$A.prototype.has start(jindo.$A.prototype.indexOf)!-//
/**

 * @description has() 메서드는 내부 배열에서 특정 값을 갖는 원소의 유무를 Boolean 형태로 반환한다.
 * @param {Variant} vValue 검색할 값.
 * @return {Boolean} 배열에서 매개 변수의 값과 동일한 원소를 찾으면 true를, 찾지 못하면 false를 반환한다.
 * @see $A#indexOf
 * @example
var arr = $A([1,2,3]);

// 값 검색
arr.has(3); // 결과 : true
arr.has(4); // 결과 : false
  
 */
jindo.$A.prototype.has = function(oValue) {
	//-@@$A.has-@@//
	return (this.indexOf(oValue) > -1);
};

//-!jindo.$A.prototype.indexOf start!-//
/**

 * @description indexOf() 메서드는 내부 배열에서 특정 값을 갖는 원소를 검색하고 검색된 원소의 인덱스를 반환한다.
 * @param {Variant} vValue 검색할 값.
 * @return {Numeric} 검색된 원소의 인덱스. 인덱스는 0부터 시작한다. 파라미터와 같은 값을 가진 원소를 찾지 못하면 -1을 반환한다.
 * @see $A#has  
 * @example
var zoo = ["zebra", "giraffe", "bear"];
va  r waZoo = $A(zoo);

  // 값 검색 후 인덱스 리턴
  waZoo.indexOf("giraffe"); // 1
  waZoo.indexOf("monkey"); // -1
  
 */
jindo.$A.prototype.indexOf = function(oValue) {
	//-@@$A.indexOf-@@//
	if (this._array.indexOf) {
		jindo.$A.prototype.indexOf = function(oValue) {
			return this._array.indexOf(oValue);
		}
	}else{
		jindo.$A.prototype.indexOf = function(oValue) {
			for(var i=0; i < this._array.length; i++) {
				if (this._array[i] == oValue) return i;
			}
			return -1;
		}
	}
	
	return this.indexOf(oValue);
};

//-!jindo.$A.prototype.$value start!-//
/**

 * @description $value() 메서드는 내부 배열을 반환한다.
 * @return {Array} 원본 배열
 * @example
var waNum = $A([1, 2, 3]);
waNum.$value(); // 원래의 배열인 [1, 2, 3]이 반환된다.
  
 */
jindo.$A.prototype.$value = function() {
	//-@@$A.$value-@@//
	return this._array;
};

//-!jindo.$A.prototype.push start!-//
/**

 * @description push() 메서드는 내부 배열에 하나 이상의 원소를 추가하고 배열의 크기를 반환한다.
 * @param {Variant} vValue1 추가할 첫 번째 원소의 값.
 * @param {Variant} […] …
 * @param {Variant} [vValueN] 추가할 N 번째 원소의 값.
 * @return {Numeric} 원소를 추가한 후 배열의 크기.
 * @see $A#pop
 * @see $A#shift
 * @see $A#unshift
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/push">array.push()</a> - MDN Docs
 * @example
var arr = $A([1,2,3]);

// 원소 추가
arr.push(4);	// 결과 : 4 반환, 내부 배열은 [1,2,3,4]로 변경 됨
arr.push(5,6);	// 결과 : 6 반환, 내부 배열은 [1,2,3,4,5,6]로 변경 됨
  
 */
jindo.$A.prototype.push = function(oValue1/*, ...*/) {
	//-@@$A.push-@@//
	return this._array.push.apply(this._array, _toArray(arguments));
};

//-!jindo.$A.prototype.pop start!-//
/**

 * @description pop() 메서드는 내부 배열의 마지막 원소를 삭제한다.
 * @return {Variant} 삭제한 원소.
 * @see $A#push  
 * @see $A#shift
 * @see $A#unshift
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/pop">array.pop()</a> - MDN Docs
 * @example
var arr = $A([1,2,3,4,5]);

arr.pop(); // 결과 : 5 반환, 내부 배열은 [1,2,3,4]로 변경 됨
  
 */
jindo.$A.prototype.pop = function() {
	//-@@$A.pop-@@//
	return this._array.pop();
};

//-!jindo.$A.prototype.shift start!-//
/**

 * @description shift() 메서드는 내부 배열의 모든 원소를 앞으로 한 칸씩 이동시킨다. 내부 배열의 첫 번째 원소는 삭제된다.
 * @return {Variant} 삭제한 첫 번째 원소.
 * @see $A#pop
 * @see $A#push
 * @see $A#unshift
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/shift">array.shift()</a> - MDN Docs
 * @example
var arr  = $A(['Melon','Grape','Apple','Kiwi']);

arr.shift(); // 결과 : 'Melon' 반환, 내부 배열은 ["Grape", "Apple", "Kiwi"]로 변경 됨.
  
 */
jindo.$A.prototype.shift = function() {
	//-@@$A.shift-@@//
	return this._array.shift();
};

//-!jindo.$A.prototype.unshift start!-//
/**

 * @description unshift() 메서드는 내부 배열의 맨 앞에 하나 이상의 원소를 삽입한다.
 * @param {Variant} vValue1 삽입할 첫 번째 값.
 * @param {Variant} […] …
 * @param {Variant} [vValueN] 삽입할 N 번째 값.
 * @return {Numeric} 원소를 추가한 후 배열의 크기
 * @see $A#pop
 * @see $A#push
 * @see $A#shift
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/unshift">array.unshift()</a> - MDN Docs
 * @example
var arr = $A([4,5]);

arr.unshift('c');		// 결과 : 3 반환, 내부 배열은 ["c", 4, 5]로 변경 됨.
arr.unshift('a', 'b');	// 결과 : 5 반환, 내부 배열은 ["a", "b", "c", 4, 5]로 변경 됨.
  
 */
jindo.$A.prototype.unshift = function(oValue1/*, ...*/) {
	//-@@$A.unshift-@@//
	this._array.unshift.apply(this._array, _toArray(arguments));

	return this._array.length;
};

//-!jindo.$A.prototype.forEach start(jindo.$A.Break,jindo.$A.Continue)!-//
/**

 * @description forEach() 메서드는 내부 배열의 모든 원소를 순회하면서 콜백 함수를 실행한다.
 *
 * @param1 {Function+} fCallback 배열을 순회하면서 실행할 콜백 함수. 콜백 함수는 파라미터로 value, index, array를 갖는다.$A.Break()와 $A.Continue()을 사용할 수 있다.<br>
 <ul>
 <li>value는 배열이 가진 원소의 값이다.</li>
 <li>index는 해당 원소의 인덱스이다.</li>
 <li>array는 배열 그 자체를 가리킨다.</li>
 </ul>
 * @return1 {$A}	$A() 객체.
 *
 * @param2 {Function+} fCallback 배열을 순회하면서 실행할 콜백 함수. 콜백 함수는 파라미터로 value, index, array를 갖는다.$A.Break()와 $A.Continue()을 사용할 수 있다.<br>
 <ul>
 <li>value는 배열이 가진 원소의 값이다.</li>
 <li>index는 해당 원소의 인덱스이다.</li>
 <li>array는 배열 그 자체를 가리킨다.</li>
 </ul>
 * @param2 {Variant} oThis 콜백 함수가 객체의 메서드일 때 콜백 함수 내부에서 this 키워드의 실행 문맥(Execution Context)으로 사용할 객체.
 * @return2 {$A}	$A() 객체.
 * @throws {jindo.$Except.ONLY_FUNCTION_TYPE} 파라메터가 함수가 아닌 경우 예외상황이 발생된다.
 * @import core.$A[Break, Continue]
 * @see $A#map
 * @see $A#filter
 * @example
var waZoo = $A(["zebra", "giraffe", "bear", "monkey"]);

waZoo.forEach(function(value, index, array) {
	document.writeln((index+1) + ". " + value);
});

// 결과 :
// 1. zebra
// 2. giraffe
// 3. bear
// 4. monkey

 * @example
var waArray = $A([1, 2, 3]);

waArray.forEach(function(value, index, array) {
	array[index] += 10;
});

document.write(waArray.$value());
// 결과 : 11, 12, 13 (내부 배열에 10씩 더해짐)
  
 */
jindo.$A.prototype.forEach = function(fCallback, oThis) {
	//-@@$A.forEach-@@//
	function forEachBody(fpEach){
		return function(fCallback, oThis){
			var oArgs = jindo.$Jindo.checkVarType(arguments, jindo.$A.checkVarTypeObj,"$A#forEach");
			var that = this;
			function f(v,i,a) {
				try {
					fCallback.apply(oThis, _slice.call(arguments));
				} catch(e) {
					if (!(e instanceof that.constructor.Continue)) throw e;
				}
			};
			
			fpEach(this, f);
			return this;
		}
	}
	if (this._array.forEach) {
		jindo.$A.prototype.forEach = forEachBody(function(scope, fp){
			try {
				scope._array.forEach(fp);
			} catch(e) {
				if (!(e instanceof scope.constructor.Break)) throw e;
			}
		});
	}else{
		jindo.$A.prototype.forEach = forEachBody(function(scope, fp){
			var arr = scope._array;
			for(var i=0,l=arr.length; i < l; i++) {
				try {
					fp(arr[i], i, arr);
				} catch(e) {
					if (e instanceof scope.constructor.Break) break;
					throw e;
				}
			}
		});
	}
	return this.forEach.apply(this,_slice.call(arguments));
};

//-!jindo.$A.prototype.slice start!-//
/**

 * @description slice() 메서드는 내부 배열의 일부분을 추출한다.
 * @param {Numeric} nStart 배열에서 추출할 부분의 시작 원소 인덱스. 인덱스는 0부터 시작한다.
 * @param {Numeric} nEnd 배열에서 추출할 부분의 마지막 원소 바로 다음 인덱스.
 * @return {$A} 내부 배열의 일부를 추출한 새로운 $A() 객체.<br>nStart 값이 0보다 작거나 nStart 값이 nEnd보다 크거나 같으면 빈 배열을 가진 $A() 객체를 반환한다.
 * @example
var arr = $A([12, 5, 8, 130, 44]);
var newArr = arr.slice(1,3);
// 잘라낸 배열인 [5, 8]를 래핑한 $A 객체를 리턴한다. (원래의 배열은 변화 없음)

 * @example
var arr = $A([12, 5, 8, 130, 44]);
var newArr = arr.slice(3,3);
// []를 래핑한 $A 객체를 리턴한다.
  
 */
jindo.$A.prototype.slice = function(nStart, nEnd) {
	//-@@$A.slice-@@//
	var a = this._array.slice.call(this._array, nStart, nEnd);
	return jindo.$A(a);
};

//-!jindo.$A.prototype.splice start!-//
/**

 * @description splice() 메서드는 내부 배열의 일부분을 삭제한다.
 * @param {Numeric} nIndex	배열에서 삭제할 부분의 시작 원소 인덱스. 인덱스는 0부터 시작한다.
 * @param {Numeric} [nHowMany] 시작 원소부터 삭제할 원소의 개수.<br>
 * 이 값과 vValue1, ..., vValueN 파라미터를 생략하면 nIndex 번째 원소부터 배열의 마지막 원소까지 삭제한다.<br>
 * 이 값을 0으로 지정하거나 지정하지 않고 vValue1, ..., vValueN 파라미터에 값을 지정하면 nIndex 번째 위치에 지정한 vValue1, ..., vValueN 값을 추가한다.
 * @param {Variant} [vValue1] 삭제한 배열에 추가할 첫 번째 값. nIndex 인덱스에 지정한 값이 추가된다.
 * @param {Variant} […] …
 * @param {Variant} [vValueN] 삭제한 배열에 추가할 N 번째 값. nIndex + N 인덱스에 지정한 값이 추가된다.
 * @return {$A} 삭제한 원소를 래핑하는 새로운 $A() 객체.<br>삭제한 원소가 없을 경우 빈 배열을 가진 $A() 객체를 반환한다.
 * @example
var arr = $A(["angel", "clown", "mandarin", "surgeon"]);

var removed = arr.splice(2, 0, "drum");
// arr의 내부 배열은 ["angel", "clown", "drum", "mandarin", "surgeon"]로 인덱스 2에 drum이 추가 됨
// removed의 내부 배열은 []로 삭제된 원소가 없음

removed = arr.splice(3, 1);
// arr의 내부 배열은 ["angel", "clown", "drum", "surgeon"]로 mandarin이 삭제 됨
// removed의 내부 배열은 삭제된 원소 ["mandarin"]를 가짐

removed = arr.splice(2, 1, "trumpet", "parrot");
// arr의 내부 배열은 ["angel", "clown", "trumpet", "parrot", "surgeon"]로 drum이 삭제되고 새로운 원소가 추가 됨
// removed의 내부 배열은 삭제된 원소 ["drum"]을 가짐

removed = arr.splice(3);
// arr의 내부 배열은 ["angel", "clown", "trumpet"]로 인덱스 3부터 마지막 원소가 삭제되었음
// removed의 내부 배열은 삭제된 원소 ["parrot", "surgeon"]을 가짐
  
 */
jindo.$A.prototype.splice = function(nIndex, nHowMany/*, oValue1,...*/) {
	//-@@$A.splice-@@//
	var a = this._array.splice.apply(this._array, _toArray(arguments));

	return jindo.$A(a);
};

//-!jindo.$A.prototype.shuffle start!-//
/**

 * @description shuffle() 메서드는 배열 원소의 순서를 무작위로 섞는다.
 * @return {$A} 배열이 섞여진 $A() 객체
 * @see $A#reverse
 * @example
var dice = $A([1,2,3,4,5,6]);

dice.shuffle();
document.write("You get the number " + dice.get(0));
// 결과 : 1부터 6까지의 숫자 중 랜덤한 숫자
  
 */
jindo.$A.prototype.shuffle = function() {
	//-@@$A.shuffle-@@//
	this._array.sort(function(a,b){ return Math.random()>Math.random()?1:-1 });
	
	return this;
};

//-!jindo.$A.prototype.reverse start!-//
/**

 * @description reverse() 메서드는 배열 원소의 순서를 거꾸로 뒤집는다.
 * @return {$A} 원소 순서를 뒤집은 $A() 객체
 * @see $A#shuffle
 * @example
var arr = $A([1, 2, 3, 4, 5]);

arr.reverse(); // 결과 : [5, 4, 3, 2, 1]
  
 */
jindo.$A.prototype.reverse = function() {
	//-@@$A.reverse-@@//
	this._array.reverse();

	return this;
};

//-!jindo.$A.prototype.empty start!-//
/**

 * @description empty() 메서드는 배열의 모든 원소를 제거하고, 빈 배열로 만든다.
 * @return {$A} 배열의 원소가 제거된 $A() 객체
 * @example
var arr = $A([1, 2, 3]);

arr.empty(); // 결과 : []
  
 */
jindo.$A.prototype.empty = function() {
	//-@@$A.empty-@@//
	this._array.length = 0;
	return this;
};

//-!jindo.$A.Break start!-//
/**

 * @description Break() 메서드는 forEach(), filter(), map() 메서드의 루프를 중단한다. 내부적으로는 강제로 예외를 발생시키는 구조이므로, try - catch 영역에서 이 메서드를 실행하면 정상적으로 동작하지 않을 수 있다.
 * @see $A#Continue
 * @see $A#forEach
 * @see $A#filter
 * @see $A#map
 * @example
$A([1,2,3,4,5]).forEach(function(value,index,array) {
   // 값이 4보다 크면 종료
  if (value > 4) $A.Break();
   ...
});
  
 */
jindo.$A.Break = jindo.$Jindo.Break;

//-!jindo.$A.Continue start!-//
/**

 * @description Continue() 메서드는 forEach(), filter(), map() 메서드의 루프에서 나머지 명령을 실행하지 않고 다음 루프로 건너뛴다. 내부적으로는 강제로 예외를 발생시키는 구조이므로, try - catch 영역에서 이 메서드를 실행하면 정상적으로 동작하지 않을 수 있다.
 * @see $A#Break
 * @see $A#forEach
 * @see $A#filter
 * @see $A#map
 * @example
$A([1,2,3,4,5]).forEach(function(value,index,array) {
   // 값이 짝수면 처리를 하지 않음
  if (value%2 == 0) $A.Continue();
   ...
});
  
 */
jindo.$A.Continue = jindo.$Jindo.Continue;

//-!jindo.$A.prototype.map start(jindo.$A.Break,jindo.$A.Continue)!-//
/**

 * @fileOverview $A() 객체의 확장 메서드를 정의한 파일
 * @name array.extend.js
  
 */

/**

 * @description map() 메서드는 배열의 모든 원소를 순회하면서 콜백 함수를 실행하고 콜백 함수의 실행 결과를 배열의 원소에 설정한다.
 *
 * @param1 {Function+} fCallback 배열을 순회하면서 실행할 콜백 함수. 콜백 함수에서 반환하는 값을 해당 원소의 값으로 재설정한다. 콜백 함수는 파라미터로 value, index, array를 갖는다.$A.Break()와 $A.Continue()을 사용할 수 있다.<br>
 <ul>
 <li>value는 배열이 가진 원소의 값이다.</li>
 <li>index는 해당 원소의 인덱스이다.</li>
 <li>array는 배열 그 자체를 가리킨다.</li>
 </ul>
 * @return1 {$A} 콜백 함수의 수행 결과를 반영한 $A() 객체

 * @param2 {Function+} fCallback 배열을 순회하면서 실행할 콜백 함수. 콜백 함수에서 반환하는 값을 해당 원소의 값으로 재설정한다. 콜백 함수는 파라미터로 value, index, array를 갖는다.$A.Break()와 $A.Continue()을 사용할 수 있다.<br>
 <ul>
 <li>value는 배열이 가진 원소의 값이다.</li>
 <li>index는 해당 원소의 인덱스이다.</li>
 <li>array는 배열 그 자체를 가리킨다.</li>
 </ul>
 * @param2 {Variant} oThis 콜백 함수가 객체의 메서드일 때 콜백 함수 내부에서 this 키워드의 실행 문맥(Execution Context) 사용할 객체.
 * @return2 {$A} 콜백 함수의 수행 결과를 반영한 $A() 객체
 *
 * @import core.$A[Break, Continue]
 * @see $A#forEach
 * @see $A#filter
 * @example
var waZoo = $A(["zebra", "giraffe", "bear", "monkey"]);

waZoo.map(function(value, index, array) {
	return (index+1) + ". " + value;
});
// 결과 : [1. zebra, 2. giraffe, 3. bear, 4. monkey]

 * @example
var waArray = $A([1, 2, 3]);

waArray.map(function(value, index, array) {
	return value + 10;
});
 * @example
var waArray = $A([1, 2, 3]);
var Callback = {
	"key" : 1,
	"test" : function(value, index, array){
		return this.value + this.key;
	}
}

waArray.map(Callback.test, Callback);

document.write(waArray.$value());
// 결과 : 1, 2, 3 (this객체를 지정한 경우)
  
 */
jindo.$A.prototype.map = function(fCallback, oThis) {
	//-@@$A.map-@@//
	function mapBody(fpEach){
		return function(fCallback, oThis) {
			var oArgs = jindo.$Jindo.checkVarType(arguments, jindo.$A.checkVarTypeObj,"$A#map");
			if(oArgs == null){ return this; }
			
			var returnArr	= [];
			var that = this;
			function f(v,i,a) {
				try {
					returnArr.push(fCallback.apply(oThis, _toArray(arguments)));
				} catch(e) {
					if (e instanceof that.constructor.Continue){
						returnArr.push(v);
					} else{
						throw e;				
					}
				}
			};
			fpEach(this, f);
			return jindo.$A(returnArr);
		}
	}
	if (this._array.map) {
		jindo.$A.prototype.map = mapBody(function(scope,fp){
			scope.forEach(fp);
		});
	}else{
		jindo.$A.prototype.map = mapBody(function(scope,fp){
			var arr = scope._array;
			for(var i=0,l=scope._array.length; i < l; i++) {
				try {
					fp(arr[i], i, arr);
				} catch(e) {
					if (e instanceof scope.constructor.Break){
						break;
					}else{
						throw e;
					}
				}
			}
		});
	}
	return this.map.apply(this,_toArray(arguments));
};

//-!jindo.$A.prototype.filter start(jindo.$A.prototype.forEach)!-//
/**

 * @description filter() 메서드는 배열의 모든 원소를 순회하면서 콜백 함수를 실행하고 콜백 함수가 true 값을 반환하는 원소만 모아 새로운 $A() 객체를 반환한다.
 *
 * @param1 {Function+} fCallback 배열을 순회하면서 실행할 콜백 함수. 콜백 함수는 Boolean 형태로 값을 반환해야 한다. true 값을 반환하는 원소는 새로운 배열의 원소가 된다.$A.Break()와 $A.Continue()을 사용할 수 있다.<br>
 <ul>
 <li>value는 배열이 가진 원소의 값이다.</li>
 <li>index는 해당 원소의 인덱스이다.</li>
 <li>array는 배열 그 자체를 가리킨다.</li>
 </ul>
 * @return1 {$A}	콜백 함수의 반환 값이 true인 원소로 이루어진 새로운 $A() 객체
 *
 * @param2 {Function+} fCallback 배열을 순회하면서 실행할 콜백 함수. 콜백 함수는 Boolean 형태로 값을 반환해야 한다. true 값을 반환하는 원소는 새로운 배열의 원소가 된다.$A.Break()와 $A.Continue()을 사용할 수 있다.<br>
 <ul>
 <li>value는 배열이 가진 원소의 값이다.</li>
 <li>index는 해당 원소의 인덱스이다.</li>
 <li>array는 배열 그 자체를 가리킨다.</li>
 </ul>
 * @param2 {Variant} oThis 콜백 함수가 객체의 메서드일 때 콜백 함수 내부에서 this 키워드의 실행 문맥(Execution Context) 사용할 객체.
 * @return2 {$A}	콜백 함수의 반환 값이 true인 원소로 이루어진 새로운 $A() 객체
 *
 * @import core.$A[Break, Continue]
 * @see $A#forEach
 * @see $A#map
 * @example
var arr = $A([1,2,3,4,5]);

// 필터링 함수
function filterFunc(value, index, array) {
	if (value > 2) {
		return true;
	} else {
		return false;
	}
}

var newArr = arr.filter(filterFunc);

document.write(arr.$value()); 		// 결과 : [1,2,3,4,5]
document.write(newArr.$value()); 	// 결과 : [3,4,5]
 * @example
var waArray = $A([1, 2, 3]);
var Callback = {
	"key" : 1,
	"test" : function(value, index, array){
		return this.value > this.key;
	}
}

waArray.filter(Callback.test, Callback);

document.write(waArray.$value());
// 결과 :  2, 3 (this객체를 지정한 경우)
  
 */
jindo.$A.prototype.filter = function(fCallback, oThis) {
	//-@@$A.filter-@@//
	function filterBody(fpEach){
		return function(fCallback, oThis) {
			var oArgs = jindo.$Jindo.checkVarType(arguments, jindo.$A.checkVarTypeObj,"$A#filter");
			if(oArgs == null){ return this; }
			
			var returnArr	= [];
			var that = this;
			function f(v,i,a) {
				try {
					if(fCallback.apply(oThis, _toArray(arguments))) returnArr.push(v);
				} catch(e) {
					if (!(e instanceof that.constructor.Continue)){
						throw e;				
					}
				}
			};
			fpEach(this, f);
			return jindo.$A(returnArr);
		}
	}
	if (this._array.filter) {
		jindo.$A.prototype.filter = filterBody(function(scope,fp){
			try {
				scope.forEach(fp);
			} catch(e) {
				if(!(e instanceof scope.constructor.Break)) throw e;
			}
		});
	}else{
		jindo.$A.prototype.filter = filterBody(function(scope,fp){
			var arr = scope._array;
			for(var i=0,l=scope._array.length; i < l; i++) {
				try {
					fp(arr[i], i, arr);
				} catch(e) {
					if (e instanceof scope.constructor.Break){
						break;
					}else{
						throw e;
					}
				}
			}
		});
	}
	return this.filter.apply(this,_toArray(arguments));
};


//-!jindo.$A.prototype.every start(jindo.$A.prototype.forEach)!-//
/**

 * @description every() 메서드는 배열을 순회하면서 배열의 모든 원소가 콜백 함수에 설정한 조건을 만족하는지 검사한다. 모든 원소가 콜백 함수에서 true 값을 반환하면 true 값을 반환하고 그렇지 않으면 false 값을 반환한다.  콜백 함수가 수행 도중 한번이라도 false를 반환하면 바로 false 값을 반환한다.
 *
 * @param1 {Function+} fCallback 배열을 순회하면서 실행할 콜백 함수. 콜백 함수는 Boolean 형태로 값을 반환해야 한다.$A.Break()와 $A.Continue()을 사용할 수 없다. 대신 반환 값으로 반복문을 멈출 수 있다.<br>
 <ul>
 <li>value는 배열이 가진 원소의 값이다.</li>
 <li>index는 해당 원소의 인덱스이다.</li>
 <li>array는 배열 그 자체를 가리킨다.</li>
 </ul>
 * @return1 {Boolean}	콜백 함수의 반환 값이 모두 true이면 true를 반환하고 그렇지 않으면 false를 반환한다.
 *
 * @param2 {Function+} fCallback 배열을 순회하면서 실행할 콜백 함수. 콜백 함수는 Boolean 형태로 값을 반환해야 한다.$A.Break()와 $A.Continue()을 사용할 수 없다. 대신 반환 값으로 반복문을 멈출 수 있다.<br>
 <ul>
 <li>value는 배열이 가진 원소의 값이다.</li>
 <li>index는 해당 원소의 인덱스이다.</li>
 <li>array는 배열 그 자체를 가리킨다.</li>
 </ul>
 * @param2 {Variant} oThis 콜백 함수가 객체의 메서드일 때 콜백 함수 내부에서 this 키워드의 실행 문맥(Execution Context)으로 사용할 객체.
 * @return2 {Boolean}	콜백 함수의 반환 값이 모두 true이면 true를 반환하고 그렇지 않으면 false를 반환한다.
 *
 * @see $A#some
 * @example
function isBigEnough(value, index, array) {
		return (value >= 10);
	}

var try1 = $A([12, 5, 8, 130, 44]).every(isBigEnough);		// 결과 : false
var try2 = $A([12, 54, 18, 130, 44]).every(isBigEnough);	// 결과 : true
 * @example
var waArray = $A([1, 2, 3]);
var Callback = {
	"key" : 1,
	"test" : function(value, index, array){
		return this.value > this.key;
	}
}

waArray.every(Callback.test, Callback);
// 결과 :  false (this객체를 지정한 경우)
  
 */
jindo.$A.prototype.every = function(fCallback, oThis) {
	//-@@$A.every-@@//
	var ___checkVarType = jindo.$Jindo.checkVarType;
	var ___checkObj = jindo.$A.checkVarTypeObj;
	if (this._array.every) {
		jindo.$A.prototype.every = function(fCallback, oThis) {
			___checkVarType(arguments, ___checkObj,"$A#every");
			return this._array.every(fCallback, oThis);
		}
	}else{
		jindo.$A.prototype.every = function(fCallback, oThis) {
			___checkVarType(arguments, ___checkObj,"$A#every");
			
			var result = true;
			var arr = this._array;
			
			for(var i=0,l=arr.length; i < l; i++) {
				if(fCallback.call(oThis,arr[i], i, arr) === false){
					result = false;
					break;
				}
			}

			return result;
		}
	}
	return this.every.apply(this,_toArray(arguments));
};

//-!jindo.$A.prototype.some start(jindo.$A.prototype.forEach)!-//
/**

 * @description some() 메서드는 배열을 순회하면서 콜백 함수에 설정한 조건을 만족하는 원소가 있는지 검사한다. 조건을 만족하는 원소가 하나라도 있으면 true 값을 반환하고 그렇지 않으면 false 값을 반환한다.  콜백 함수가 수행 도중 한번이라도 true를 반환하면 바로 true 값을 반환한다.
 *
 * @param1 {Function+} fCallback 배열을 순회하면서 실행할 콜백 함수. 콜백 함수는 Boolean 형태로 값을 반환해야 한다.$A.Break()와 $A.Continue()을 사용할 수 없다. 대신 반환 값으로 반복문을 멈출 수 있다.<br>
 <ul>
 <li>value는 배열이 가진 원소의 값이다.</li>
 <li>index는 해당 원소의 인덱스이다.</li>
 <li>array는 배열 그 자체를 가리킨다.</li>
 </ul>
 * @return1 {Boolean} 콜백 함수의 반환 값이 모두 false이면 false를 반환하고 그렇지 않으면 true를 반환한다.
 *
 * @param2 {Function+} fCallback 배열을 순회하면서 실행할 콜백 함수. 콜백 함수는 Boolean 형태로 값을 반환해야 한다.$A.Break()와 $A.Continue()을 사용할 수 없다. 대신 반환 값으로 반복문을 멈출 수 있다.<br>
 <ul>
 <li>value는 배열이 가진 원소의 값이다.</li>
 <li>index는 해당 원소의 인덱스이다.</li>
 <li>array는 배열 그 자체를 가리킨다.</li>
 </ul>
 * @param2 {Variant} oThis 콜백 함수가 객체의 메서드일 때 콜백 함수 내부에서 this 키워드의 실행 문맥(Execution Context)으로 사용할 객체.
 * @return2 {Boolean} 콜백 함수의 반환 값이 모두 false이면 false를 반환하고 그렇지 않으면 true를 반환한다.
 *
 * @throws {jindo.$Except.ONLY_FUNCTION_TYPE} 파라메터가 함수가 아닌 경우 예외상황이 발생된다.
 * @see $A#every
 * @example
function twoDigitNumber(value, index, array) {
	return (value >= 10 && value < 100);
}

var try1 = $A([12, 5, 8, 130, 44]).some(twoDigitNumber);	// 결과 : true
var try2 = $A([1, 5, 8, 130, 4]).some(twoDigitNumber);		// 결과 : false
 * @example
var waArray = $A([1, 2, 3]);
var Callback = {
	"key" : 1,
	"test" : function(value, index, array){
		return this.value > this.key;
	}
}

waArray.some(Callback.test, Callback);
// 결과 :  true (this객체를 지정한 경우)
  
 */
jindo.$A.prototype.some = function(fCallback, oThis) {
	//-@@$A.some-@@//
	var ___checkVarType = jindo.$Jindo.checkVarType;
	var ___checkObj = jindo.$A.checkVarTypeObj;
	if (this._array.some) {
		jindo.$A.prototype.some = function(fCallback, oThis) {
			___checkVarType(arguments, ___checkObj,"$A#some");
			return this._array.some(fCallback, oThis);
		}
	}else{
		jindo.$A.prototype.some = function(fCallback, oThis) {
			___checkVarType(arguments, ___checkObj,"$A#some");
			var result = false;
			var arr = this._array;
			
			for(var i=0,l=arr.length; i < l; i++) {
				if(fCallback.call(oThis,arr[i], i, arr) === true){
					result = true;
					break;
				}
			}
			
			return result;
		}
	}
	return this.some.apply(this,_toArray(arguments));
};

//-!jindo.$A.prototype.refuse start(jindo.$A.prototype.filter, jindo.$A.prototype.indexOf)!-//
/**

 * @description refuse() 메서드는 배열에서 입력한 파라미터와 같은 값을 제외하여 새로운 $A() 객체를 생성한다. 제외할 값을 여러 개 지정할 수 있다.
 * @param {Variant} vValue1 배열에서 제거할 첫 번째 값.
 * @param {Variant} […] …
 * @param {Variant} [vValueN] 배열에서 제거할 N 번째 값.
 * @return {$A}	배열에서 특정 값을 제외한 새로운 $A() 객체
 * @throws {jindo.$Except.ONLY_FUNCTION_TYPE} 파라메터가 함수가 아닌 경우 예외상황이 발생된다.
 * @example
var arr = $A([12, 5, 8, 130, 44]);

var newArr1 = arr.refuse(12);

document.write(arr);		// 결과 : [12, 5, 8, 130, 44]
document.write(newArr1);	// 결과 : [5, 8, 130, 44]

var newArr2 = newArr1.refuse(8, 44, 130);

document.write(newArr1);	// 결과 : [5, 8, 130, 44]
document.write(newArr2);	// 결과 : [5]
  
 */
jindo.$A.prototype.refuse = function(oValue1/*, ...*/) {
	//-@@$A.refuse-@@//
	var a = jindo.$A(_slice.apply(arguments));
	return this.filter(function(v,i) {return !(a.indexOf(v) > -1) });
};

//-!jindo.$A.prototype.unique start!-//
/**

 * @description unique() 메서드는 배열에서 중복되는 원소를 삭제한다.
 * @return {$A} 중복되는 원소를 제거한 $A() 객체
 * @example
var arr = $A([10, 3, 2, 5, 4, 3, 7, 4, 11]);

arr.unique(); // 결과 : [10, 3, 2, 5, 4, 7, 11]
  
 */
jindo.$A.prototype.unique = function() {
	//-@@$A.unique-@@//
	var a = this._array, b = [], l = a.length;
	var i, j;

	/*
	
  중복되는 원소 제거
  
	 */
	for(i = 0; i < l; i++) {
		for(j = 0; j < b.length; j++) {
			if (a[i] == b[j]) break;
		}
		
		if (j >= b.length) b[j] = a[i];
	}
	
	this._array = b;
	
	return this;
};

//-!jindo.$H start!-//
/**
 
 * @class $H() 객체는 키(key)와 값(value)을 원소로 가지는 열거형 배열인 해시(Hash)를 구현하고, 해시를 다루기 위한 여러 가지 위한 메서드를 제공한다.
 * @constructor
 * @description $H() 객체를 생성한다.
 * @param {Hash+} oHashObject 해시로 만들 객체.
 * @throws {jindo.$Except.EITHER_OBJECT_OR_$H_OR_NULL_OR_UNDEFINED} 파라메터가 object, $H, null, undefined가 아닌 경우. 
 * @example
var h = $H({one:"first", two:"second", three:"third"})

  
 */
jindo.$H = function(hashObject) {
	//-@@$H-@@//
	var cl = arguments.callee;
	if (hashObject instanceof cl) return hashObject;
	
	if (!(this instanceof cl)){
		try {
			jindo.$Jindo._warn(arguments.length, 1,"$H");
			return new cl(hashObject||{});
		} catch(e) {
			if (e instanceof TypeError) { return null; }
			throw e;
		}
	}
	
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4obj' : ['oObj:Hash+'],
		'4vod' : []
	},"$H");

	this._table = {};
	for(var k in hashObject) {
		if(hashObject.hasOwnProperty(k)){
			this._table[k] = hashObject[k];	
		}
	}
};

//-!jindo.$H.prototype.$value start!-//
/**
 
 * @description $value() 메서드는 해시(Hash)를 객체로 반환한다.
 * @return {Object} 해시가 저장된 객체.
  
 */
jindo.$H.prototype.$value = function() {
	//-@@$H.$value-@@//
	return this._table;
};

//-!jindo.$H.prototype.$ start!-//
/**
 
 * @description $() 메서드는 키(key)와 값(value)을 설정하거나 키에 해당하는 값을 반환한다. 파라미터로 키만 입력한 경우 해당 키의 값을 반환하고 키와 값을 모두 입력한 경우 해당 키의 값을 지정한 값으로 설정한다.
 *
 * @param1 {String+|Numeric} sKey 해시의 키.
 * @param1 {Variant} vValue 설정할 값.
 * @return1 {$H} $H()객체.
 *
 * @param2 {String+|Numeric} sKey 해시의 키.
 * @return2 {Variant} 키에 해당하는 값.
 *
 * @param3 {Hash+} key와 value로된 오브젝트
 * @return3 {$H} $H()객체.
 *
 * @example
var woH = $H({one:"first", two:"second"});

// 값을 설정할 때
woH.$("three", "third");

// woH => {one:"first", two:"second", three:"third"}

// 값을 반환할 때
var three = woH.$("three");
// three = "third"
  
 */
jindo.$H.prototype.$ = function(key, value) {
	//-@@$H.$-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		's4var' : [ jindo.$Jindo._F('key:String+'), 'value:Variant' ],
		's4var2' : [ 'key:Numeric', 'value:Variant' ],
		'g4str' : [ 'key:String+' ],
		's4obj' : [ 'oObj:Hash+'],
		'g4num' : [ 'key:Numeric' ]
	},"$H#$");
	
	switch(oArgs+""){
		case "s4var":
		case "s4var2":
			this._table[key] = value;
			return this;
		case "s4obj":
			var obj = oArgs.oObj;
			for(var i in obj){
				this._table[i] = obj[i];
			}
			return this;
		default:
			return this._table[key];
	}
	
};

//-!jindo.$H.prototype.length start!-//
/**
 
 * @description length() 메서드는 해시 객체의 크기를 반환한다.
 * @return {Numeric} 해시의 크기.
 * @example
 var woH = $H({one:"first", two:"second"});
 woH.length();
 // 2
  
 */
jindo.$H.prototype.length = function() {
	//-@@$H.length-@@//
	var i = 0;
	for(var k in this._table) {
		if(this._table.hasOwnProperty(k)){
			if (Object.prototype[k] !== undefined && Object.prototype[k] === this._table[k]) continue;
			i++;
		}
	}

	return i;
};

//-!jindo.$H.prototype.forEach start(jindo.$H.Break,jindo.$H.Continue)!-//
/**
 
 * @description forEach() 메서드는 해시의 모든 원소를 순회하면서 콜백 함수를 실행한다. 이때 해시 객체의 키와 값 그리고 원본 해시 객체가 콜백 함수의 파라미터로 입력된다. $A() 객체의 forEach() 메서드와 유사하다.$H.Break()와 $H.Continue()을 사용할 수 있다.
 *
 * @param1 {Function+} fCallback 해시를 순회하면서 실행할 콜백 함수. 콜백 함수는 파라미터로 key, value, object를 갖는다.<br>
 * value는 해당 원소의 값이다.<br>
 * key는 해당 원소의 키이다.<br>
 * object는 해시 그 자체를 가리킨다.
 * @return1 {$H}	$H() 객체.
 *
 * @param2 {Function+} fCallback 해시를 순회하면서 실행할 콜백 함수. 콜백 함수는 파라미터로 key, value, object를 갖는다.<br>
 * value는 해당 원소의 값이다.<br>
 * key는 해당 원소의 키이다.<br>
 * object는 해시 그 자체를 가리킨다.
 * @param2 {Variant} oThis 콜백 함수가 객체의 메서드일 때 콜백 함수 내부에서 this 키워드의 실행 문맥(Execution Context)으로 사용할 객체.
 * @return2 {$H}	$H() 객체.
 *
 * @throws {jindo.$Except.ONLY_FUNCTION_TYPE} 파라메터가 함수가 아닌 경우 예외상황이 발생된다.
 * @see $H#map
 * @see $H#filter
 * @see $A#forEach
 * @example
function printIt(value, key, object) {
   document.write(key+" => "+value+" <br>");
}
$H({one:"first", two:"second", three:"third"}).forEach(printIt);
  
 */
jindo.$H.prototype.forEach = function(callback, thisObject) {
	//-@@$H.forEach-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4fun' : [ 'callback:Function+'],
		'4obj' : [ 'callback:Function+', "thisObject:Variant"]
	},"$H#forEach");
	var t = this._table;
	var h = this.constructor;
	
	for(var k in t) {
		if (t.hasOwnProperty(k)) {
			if (!t.propertyIsEnumerable(k)) continue;
			try {
				callback.call(thisObject, t[k], k, t);
			} catch(e) {
				if (e instanceof h.Break) break;
				if (e instanceof h.Continue) continue;
				throw e;
			}
		}
	}
	return this;
};

//-!jindo.$H.prototype.filter start(jindo.$H.prototype.forEach)!-//
/**
 
 * @description filter() 메서드는 해시의 모든 원소를 순회하면서 콜백 함수를 실행하고 콜백 함수가 true 값을 반환하는 원소만 모아 새로운 $H() 객체를 반환한다. $A() 객체의 filter() 메서드와 유사하다.$H.Break()와 $H.Continue()을 사용할 수 있다.
 *
 * @param1 {Function+} fCallback 해시를 순회하면서 실행할 콜백 함수. 콜백 함수는 Boolean 형태로 값을 반환해야 한다. true 값을 반환하는 원소는 새로운 해시의 원소가 된다. 콜백 함수는 파라미터로 value, key, object를 갖는다.<br>
 * value는 해당 원소의 값이다.<br>
 * key는 해당 원소의 키이다.<br>
 * object는 해시 그 자체를 가리킨다.
 * @return1 {$H}	콜백 함수의 반환 값이 true인 원소로 이루어진 새로운 $H() 객체.
 *
 * @param2 {Function+} fCallback 해시를 순회하면서 실행할 콜백 함수. 콜백 함수는 Boolean 형태로 값을 반환해야 한다. true 값을 반환하는 원소는 새로운 해시의 원소가 된다. 콜백 함수는 파라미터로 value, key, object를 갖는다.<br>
 * value는 해당 원소의 값이다.<br>
 * key는 해당 원소의 키이다.<br>
 * object는 해시 그 자체를 가리킨다.
 * @param2 {Variant} oThis 콜백 함수가 객체의 메서드일 때 콜백 함수 내부에서 this 키워드의 실행 문맥(Execution Context) 사용할 객체.
 * @return2 {$H}	콜백 함수의 반환 값이 true인 원소로 이루어진 새로운 $H() 객체.
 *
 * @throws {jindo.$Except.ONLY_FUNCTION_TYPE} 파라메터가 함수가 아닌 경우 예외상황이 발생된다.
 * @see $H#forEach
 * @see $H#map
 * @see $A#filter
 * @example
var ht=$H({one:"first", two:"second", three:"third"})

ht.filter(function(value, key, object){
	return value.length < 5;
})
// one:"first", three:"third"
  
 */
jindo.$H.prototype.filter = function(callback, thisObject) {
	//-@@$H.filter-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4fun' : [ 'callback:Function+'],
		'4obj' : [ 'callback:Function+', "thisObject:Variant"]
	},"$H#filter");
	var h = jindo.$H();
	var t = this._table;
	var hCon = this.constructor;
	
	for(var k in t) {
		if (t.hasOwnProperty(k)) {
			if (!t.propertyIsEnumerable(k)) continue;
			try {
				if(callback.call(thisObject, t[k], k, t)){
					h.add(k,t[k]);
				}
			} catch(e) {
				if (e instanceof hCon.Break) break;
				if (e instanceof hCon.Continue) continue;
				throw e;
			}
		}
	}
	return h;
};

//-!jindo.$H.prototype.map start(jindo.$H.prototype.forEach)!-//
/**
 
 * @description map() 메서드는 해시의 모든 원소를 순회하면서 콜백 함수를 실행하고 콜백 함수의 실행 결과를 배열의 원소에 설정한다. $A() 객체의 map() 메서드와 유사하다.$H.Break()와 $H.Continue()을 사용할 수 있다.
 *
 * @param1 {Function+} fCallback 해시를 순회하면서 실행할 콜백 함수. 콜백 함수에서 반환하는 값을 해당 원소의 값으로 재설정한다. 콜백 함수는 파라미터로 value, key, object를 갖는다.<br>
 * value는 해당 원소의 값이다.<br>
 * key는 해당 원소의 키이다.<br>
 * object는 해시 그 자체를 가리킨다.
 * @return1 {$H} 콜백 함수의 수행 결과를 반영한 새로운 $H() 객체.
 *
 * @param2 {Function+} fCallback 해시를 순회하면서 실행할 콜백 함수. 콜백 함수에서 반환하는 값을 해당 원소의 값으로 재설정한다. 콜백 함수는 파라미터로 value, key, object를 갖는다.<br>
 * value는 해당 원소의 값이다.<br>
 * key는 해당 원소의 키이다.<br>
 * object는 해시 그 자체를 가리킨다.
 * @param2 {Variant} oThis 콜백 함수가 객체의 메서드일 때 콜백 함수 내부에서 this 키워드의 실행 문맥(Execution Context) 사용할 객체.
 * @return2 {$H} 콜백 함수의 수행 결과를 반영한 새로운 $H() 객체.
 *
 * @throws {jindo.$Except.ONLY_FUNCTION_TYPE} 파라메터가 함수가 아닌 경우 예외상황이 발생된다.
 * @see $H#forEach
 * @see $H#filter
 * @see $H#map
 * @example
function callback(value, key, object) {
   var r = key+"_"+value;
   document.writeln (r + "<br />");
   return r;
}

$H({one:"first", two:"second", three:"third"}).map(callback);
  
 */

jindo.$H.prototype.map = function(callback, thisObject) {
	//-@@$H.map-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4fun' : [ 'callback:Function+'],
		'4obj' : [ 'callback:Function+', "thisObject:Variant"]
	},"$H#map");
	var h = jindo.$H();
	var t = this._table;
	var hCon = this.constructor;
	
	for(var k in t) {
		if (t.hasOwnProperty(k)) {
			if (!t.propertyIsEnumerable(k)) continue;
			try {
				h.add(k,callback.call(thisObject, t[k], k, t));
			} catch(e) {
				if (e instanceof hCon.Break) break;
				if (e instanceof hCon.Continue){
					h.add(k,t[k]);
				}else{
					throw e;
				}
			}
		}
	}
	
	return h;
};

//-!jindo.$H.prototype.add start!-//
/**
 
 * @description add() 메서드는 해시에 값을 추가한다. 파라미터로 값을 추가할 키를 지정한다. 지정한 키에 이미 값이 있다면 지정한 값으로 변경한다.
 * @param {String+|Numeric} sKey 값을 추가하거나 변경할 키.
 * @param {Variant} vValue 해당 키에 추가할 값.
 * @return {$H} 값을 추가한 해시 객체.
 * @see $H#remove
 * @example
 var woH = $H();
// 키가 'foo'이고 값이 'bar'인 원소를 추가
woH.add('foo', 'bar');

// 키가 'foo'인 원소의 값을 'bar2'로 변경
woH.add('foo', 'bar2');
  
 */
jindo.$H.prototype.add = function(key, value) {
	//-@@$H.add-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str' : [ 'key:String+',"value:Variant"],
		'4num' : [ 'key:Numeric',"value:Variant"]
	},"$H#add");
	this._table[key] = value;

	return this;
};

//-!jindo.$H.prototype.remove start!-//
/**
 
 * @description remove() 메서드는 지정한 키의 원소를 제거한다. 해당하는 원소가 없으면 아무 일도 수행하지 않는다.
 * @param {String+|Numeric} sKey 제거할 원소의 키.
 * @return {Variant} 제거한 값.
 * @see $H#add
 * @example
var h = $H({one:"first", two:"second", three:"third"});
h.remove ("two");
// h의 해시 테이블은 {one:"first", three:"third"}
  
 */
jindo.$H.prototype.remove = function(key) {
	//-@@$H.remove-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str' : [ 'key:String+'],
		'4num' : [ 'key:Numeric']
	},"$H#remove");
	
	if (this._table[key] === undefined) return null;
	var val = this._table[key];
	delete this._table[key];
	
	return val;
};

//-!jindo.$H.prototype.search start!-//
/**
 
 * @description search() 메서드는 해시에서 파라미터로 지정한 값을 가지는 원소의 키를 반환한다.
 * @param {Variant} sValue 검색할 값.
 * @return {Variant} 해당 값을 가지고 있는 원소의 키(String). 지정한 값을 가진 원소가 없다면 false를 반환한다.
 * @example
var h = $H({one:"first", two:"second", three:"third"});
h.search ("second");
// two

h.search ("fist");
// false
  
 */
jindo.$H.prototype.search = function(value) {
	//-@@$H.search-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str' : [ 'value:Variant']
	},"$H#search");
	var result = false;
	var t = this._table;

	for(var k in t) {
		if (t.hasOwnProperty(k)) {
			if (!t.propertyIsEnumerable(k)) continue;
			var v = t[k];
			if (v === value) {
				result = k;
				break;
			}			
		}
	}
	
	return result;
};

//-!jindo.$H.prototype.hasKey start!-//
/**
 
 * @description hasKey() 메서드는 해시에 파라미터로 입력한 키가 있는지 확인한다.
 * @param {String+|Numeric} sKey 검색할 키.
 * @return {Boolean} 키의 존재 여부. 존재하면 true 없으면 false를 반환한다.
 * @example
var h = $H({one:"first", two:"second", three:"third"});
h.hasKey("four"); // false
h.hasKey("one"); // true
  
 */
jindo.$H.prototype.hasKey = function(key) {
	//-@@$H.hasKey-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str' : [ 'key:String+'],
		'4num' : [ 'key:Numeric']
	},"$H#hasKey");
	return this._table[key] !== undefined;
};

//-!jindo.$H.prototype.hasValue start(jindo.$H.prototype.search)!-//
/**
 
 * @description hasValue() 메서드는 해시에 파라미터로로 입력한 값이 있는지 확인한다.
 * @param {Variant} vValue 해시에서 검색할 값.
 * @return {Boolean} 값의 존재 여부. 존재하면 true 없으면 false를 반환한다.
  
 */
jindo.$H.prototype.hasValue = function(value) {
	//-@@$H.hasValue-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str' : [ 'value:Variant']
	},"$H#hasValue");
	return (this.search(value) !== false);
};

//-!jindo.$H.prototype.sort start(jindo.$H.prototype.search)!-//
/**
 
 * @description sort() 메서드는 값을 기준으로 해시의 원소를 오름차순 정렬한다.
 * @return {$H} 원소를 정렬한 해시 객체.
 * @see $H#ksort
 * @example
var h = $H({one:"하나", two:"둘", three:"셋"});
h.sort ();
// {two:"둘", three:"셋", one:"하나"}
  
 */
jindo.$H.prototype.sort = function() {
	//-@@$H.sort-@@//
	var o = new Object;
	var a = [];
	for(var k in this._table) {
		if(this._table.hasOwnProperty(k))
			a[a.length] = this._table[k];
	}
	var k = false;

	a.sort();

	for(var i=0; i < a.length; i++) {
		k = this.search(a[i]);

		o[k] = a[i];
		delete this._table[k];
	}
	
	this._table = o;
	
	return this;
};

//-!jindo.$H.prototype.ksort start(jindo.$H.prototype.keys)!-//
/**
 
 * @description ksort() 메서드는 키를 기준으로 해시의 원소를 오름차순 정렬한다.
 * @return {$H} 원소를 정렬한 해시 객체.
 * @see $H#sort
 * @example
var h = $H({one:"하나", two:"둘", three:"셋"});
h.sort ();
// h => {one:"하나", three:"셋", two:"둘"}
  
 */
jindo.$H.prototype.ksort = function() {
	//-@@$H.ksort-@@//
	var o = new Object;
	var a = this.keys();

	a.sort();

	for(var i=0; i < a.length; i++) {
		o[a[i]] = this._table[a[i]];
	}

	this._table = o;

	return this;
};

//-!jindo.$H.prototype.keys start!-//
/**
 
 * @description keys() 메서드는 해시의 키를 배열로 반환한다.
 * @return {Array} 해시 키의 배열.
 * @see $H#values
 * @example
var h = $H({one:"first", two:"second", three:"third"});
h.keys ();
// ["one", "two", "three"]
  
 */
jindo.$H.prototype.keys = function() {
	//-@@$H.keys-@@//
	var keys = new Array;
	for(var k in this._table) {
		if(this._table.hasOwnProperty(k))
			keys.push(k);
	}

	return keys;
};

//-!jindo.$H.prototype.values start!-//
/**
 
 * @description values() 메서드는 해시의 값을 배열로 반환한다.
 * @return {Array} 해시 값의 배열.
 * @example
var h = $H({one:"first", two:"second", three:"third"});
h.values();
// ["first", "second", "third"]
  
 */
jindo.$H.prototype.values = function() {
	//-@@$H.values-@@//
	var values = [];
	for(var k in this._table) {
		if(this._table.hasOwnProperty(k))
			values[values.length] = this._table[k];
	}

	return values;
};

//-!jindo.$H.prototype.toQueryString start!-//
/**
 
 * @description toQueryString은 해시를 쿼리 스트링(Query String) 형태로 만든다.
 * @return {String} 해시를 변환한 쿼리 스트링.
 * @see <a href="http://en.wikipedia.org/wiki/Querystring">Query String</a> - Wikipedia
 * @example
var h = $H({one:"first", two:"second", three:"third"});
h.toQueryString();
// "one=first&two=second&three=third"
  
 */
jindo.$H.prototype.toQueryString = function() {
	//-@@$H.toQueryString-@@//
	var buf = [], val = null, idx = 0;
	for(var k in this._table) {
		if (this._table.hasOwnProperty(k)) {
			val = this._table[k];
			if (jindo.$Jindo.isArray(val)) {
				for(i=0; i < val.length; i++) {
					buf[buf.length] = encodeURIComponent(k)+"[]="+encodeURIComponent(val[i]+"");
				}
			} else {
				buf[buf.length] = encodeURIComponent(k)+"="+encodeURIComponent(this._table[k]+"");
			}
		}
	}
	
	return buf.join("&");
};

//-!jindo.$H.prototype.empty start!-//
/**
 
 * @description empty() 메서드는 해시를 비운다.
 * @return {$H} 비워진 $H() 객체.
 * @example
var hash = $H({a:1, b:2, c:3});
// hash => {a:1, b:2, c:3}

hash.empty();
// hash => {}
  
 */
jindo.$H.prototype.empty = function() {
	//-@@$H.empty-@@//
	this._table = {};
	
	return this;
};

//-!jindo.$H.Break start!-//
/**
 
 * @description Break() 메서드는 forEach(), filter(), map() 메서드의 루프를 중단한다. 내부적으로는 강제로 예외를 발생시키는 구조이므로, try - catch 영역에서 이 메서드를 실행하면 정상적으로 동작하지 않을 수 있다.
 * @see $H.Continue
 * @see $H#forEach
 * @see $H#filter
 * @see $H#map
 * @see $H.Continue
 * @example
$H({a:1, b:2, c:3}).forEach(function(v,k,o) {
   ...
   if (k == "b") $H.Break();
   ...
});
  
 */
jindo.$H.Break = jindo.$Jindo.Break;

//-!jindo.$H.Continue start!-//
/**
 
 * @description Continue() 메서드는 forEach(), filter(), map() 메서드의 루프에서 나머지 명령을 실행하지 않고 다음 루프로 건너뛴다. 내부적으로는 강제로 예외를 발생시키는 구조이므로, try - catch 영역에서 이 메서드를 실행하면 정상적으로 동작하지 않을 수 있다.
 * @see $H.Break
 * @see $H#forEach
 * @see $H#filter
 * @see $H#map
 * @see $H.Break
 * @example
$H({a:1, b:2, c:3}).forEach(function(v,k,o) {
   ...
   if (v % 2 == 0) $H.Continue();
   ...
});
  
 */
jindo.$H.Continue  = jindo.$Jindo.Continue;

//-!jindo.$Fn start(jindo.$Fn.prototype.attach)!-//
/**
 
 * @fileOverview $Fn() 객체의 생성자 및 메서드를 정의한 파일
 * @name function.js
  
 */

/**
 
 * @class $Fn() 객체는 Function 객체를 래핑(wrapping)하여 함수와 관련된 확장 기능을 제공한다.
 * @extends core
 * @constructor
 * @description $Fn() 객체()를 생성한다. 생성자의 파라미터로 특정 함수를 지정할 수 있다. 이 때, 함수와 함께 this 키워드를 상황에 맞게 사용할 수 있도록 실행 문맥(Execution Context)을 함께 지정할 수 있다. 또한 생성자의 파라미터로 래핑할 함수의 파라미터와 몸체를 각각 입력하여 $Fn() 객체를 생성할 수 있다.
 *
 * @param1 {Function+} fpFunction 랩핑할 함수
 * @return1 {$Fn} $Fn() 객체
 *
 * @param2 {Function+} fpFunction 랩핑할 함수
 * @param2 {Variant} vExeContext 함수의 실행 문맥이 될 객체
 * @return2 {$Fn} $Fn() 객체
 *
 * @param3 {String} sFuncArgs 함수의 파라미터를 나타내는 문자열
 * @param3 {String} sFuncBody 함수의 몸체를 나타내는 문자열
 * @return3 {$Fn} $Fn() 객체
 *
 * @throws {jindo.$Except.EITHER_STRING_OR_FUNCTION} 파라메터가 문자이거나 함수여야 한다.
 * @see $Fn#toFunction
 * @example
func : function() {
       // code here
}

var fn = $Fn(func, this);

 * @example
var someObject = {
    func : function() {
       // code here
   }
}

var fn = $Fn(someObject.func, someObject);

 * @example
var fn = $Fn("a, b", "return a + b;");
var result = fn.$value()(1, 2) // result = 3;

// fn은 함수 리터럴인 function(a, b){ return a + b;}와 동일한 함수를 래핑한다.
  
 */
jindo.$Fn = function(func, thisObject) {
	//-@@$Fn-@@//
	var cl = arguments.callee;
	if (func instanceof cl) return func;

	if (!(this instanceof cl)){
		try {
			jindo.$Jindo._warn(arguments.length, 2,"$Fn");
			return new cl(func, thisObject);
		} catch(e) {
			if (e instanceof TypeError) { return null; }
			throw e;
		}
	}	

	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4fun' : ['func:Function+'],
		'4fun2' : ['func:Function+', "thisObject:Variant"],
		'4str' : ['func:String+', "thisObject:String+"]
	},"$Fn");

	this._tmpElm = null;
	this._key    = null;
	
	switch(oArgs+""){
		case "4str":
			this._func = eval("false||function("+func+"){"+thisObject+"}");
			break;
		case "4fun":
		case "4fun2":
			this._func = func;
			this._this = thisObject;
			
	}

};

/**
 * @ignore 
 */
jindo.$Fn._commonPram = function(oPram,sMethod){
	return jindo.$Jindo.checkVarType(oPram, {
		'4ele' : ['eElement:Element+',"sEvent:String+"],
		'4ele2' : ['eElement:Element+',"sEvent:String+","bUseCapture:Boolean"],
		'4str' : ['eElement:String+',"sEvent:String+"],
		'4str2' : ['eElement:String+',"sEvent:String+","bUseCapture:Boolean"],
		'4arr' : ['aElement:Array+',"sEvent:String+"],
		'4arr2' : ['aElement:Array+',"sEvent:String+","bUseCapture:Boolean"],
		'4doc' : ['eElement:Document+',"sEvent:String+"],
		'4win' : ['eElement:Window+',"sEvent:String+"],
		'4doc2' : ['eElement:Document+',"sEvent:String+","bUseCapture:Boolean"],
		'4win2' : ['eElement:Window+',"sEvent:String+","bUseCapture:Boolean"]
	},sMethod);
};

//-!jindo.$Fn.prototype.$value start!-//
/**
 
 * @description $value() 메서드는 원본 Function 객체를 반환한다.
 * @return {Function} 원본 Function 객체
 * @example
func : function() {
	// code here
}

var fn = $Fn(func, this);
     fn.$value(); // 원래의 함수가 리턴된다.
  
 */
jindo.$Fn.prototype.$value = function() {
	//-@@$Fn.$value-@@//
	return this._func;
};

//-!jindo.$Fn.prototype.bind start!-//
/**
 
 * @description bind() 메서드는 생성자가 지정한 객체의 메서드로 동작하도록 묶은 Function 객체를 반환한다. 이때 해당 메서드의 실행 문맥(Execution Context)이 지정한 객체로 설정된다.
 * @param {Variant} [vParameter1] 생성한 함수에 기본적으로 입력할 첫 번째 파라미터.
 * @param {Variant} […] …
 * @param {Variant} [vParameterN] 생성한 함수에 기본적으로 입력할 N 번째 파라미터.
 * @return {Function} 실행 문맥의 메서드로 묶인 Function 객체
 * @see $Fn
 * @see $Class
 * @example
var sName = "OUT";
var oThis = {
    sName : "IN"
};

function getName() {
    return this.sName;
}

oThis.getName = $Fn(getName, oThis).bind();

alert( getName() );       	  //  OUT
alert( oThis.getName() ); //   IN

 * @example
 // 바인드한 메서드에 인수를 입력할 경우
var b = $Fn(function(one, two, three){
	console.log(one, two, three);
}).bind(true);

b();	// true, undefined, undefined
b(false);	// true, false, undefined
b(false, "1234");	// true, false, "1234"


 * @example
// 함수를 미리 선언하고 나중에 사용할 때 함수에서 참조하는 값은 해당 함수를 
// 생성할 때의 값이 아니라 함수 실행 시점의 값이 사용되므로 이때 bind() 메서드를 이용한다.
for(var i=0; i<2;i++){
	aTmp[i] = function(){alert(i);}
}

for(var n=0; n<2;n++){
	aTmp[n](); // 숫자 2만 두번 alert된다.
}

for(var i=0; i<2;i++){
aTmp[i] = $Fn(function(nTest){alert(nTest);}, this).bind(i);
}

for(var n=0; n<2;n++){
	aTmp[n](); // 숫자 0, 1이 alert된다.
}

 * @example
//클래스를 생성할 때 함수를 파라미터로 사용하면, scope를 맞추기 위해 bind() 메서드를 사용한다.
var MyClass = $Class({
	fFunc : null,
	$init : function(func){
		this.fFunc = func;

		this.testFunc();
	},
	testFunc : function(){
		this.fFunc();
	}
})
var MainClass = $Class({
	$init : function(){
		var oMyClass1 = new MyClass(this.func1);
		var oMyClass2 = new MyClass($Fn(this.func2, this).bind());
	},
	func1 : function(){
		alert(this);// this는 MyClass 를 의미한다.
	},
	func2 : function(){
		alert(this);// this는 MainClass 를 의미한다.
	}
})
function init(){
	var a = new MainClass();
}
  
*/
jindo.$Fn.prototype.bind = function() {
	//-@@$Fn.bind-@@//
	var a = _slice.call( arguments, 0);
	var f = this._func;
	var t = this._this;

	var b = function() {
		var args = _slice.call( arguments, 0);
		// fix opera concat bug
		if (a.length) args = a.concat(args);

		return f.apply(t, args);
	};
	return b;
};

//-!jindo.$Fn.prototype.attach start(jindo.$Fn.prototype.bind, jindo.$Element.prototype.attach, jindo.$Element.prototype.detach)!-//
/**
 
 * @description attach() 메서드는 함수를 특정 요소의 이벤트 핸들러로 등록한다. $Fn() 객체에 바인딩하여 사용할 때 함수의 반환 값이 false인 경우, 인터넷 익스플로러에서 기본 기능을 막기 때문에 사용하지 않도록 주의한다. 또한 다음과 같은 제약 사항이 있다.<br>
<ul>
	<li>이벤트 이름에는 on 접두어를 사용하지 않는다.</li>
	<li>마우스 휠 스크롤 이벤트는 mousewheel 로 사용한다.</li>
	<li>기본 이벤트 외에 추가로 사용이 가능한 이벤트로 domready, mouseenter, mouseleave, mousewheel이 있다.</li>
</ul>
 *
 * @param1 {Element} elElement 이벤트 핸들러를 할당할 요소
 * @param1 {String} sEvent 이벤트 종류
 * @return1 {$Fn} 생성된 $Fn() 객체.
 *
 * @param2 {Element} elElement 이벤트 핸들러를 할당할 요소
 * @param2 {String} sEvent 이벤트 종류
 * @param2 {Boolean} bUseCapture 캡쳐링(capturing) 사용 여부(1.4.2 버전부터 지원). 사용하면 true 사용하지 않으면 false를 입력한다.
 * @return2 {$Fn} 생성된 $Fn() 객체.
 *
 * @param3 {Array} aElement 이벤트 핸들러를 할당할 요소로 이루어진 배열
 * @param3 {String} sEvent 이벤트 종류
 * @return3 {$Fn} 생성된 $Fn() 객체.
 *
 * @param4 {Array|$A} vElement 이벤트 핸들러를 할당할 요소로 이루어진 배열
 * @param4 {String} sEvent 이벤트 종류
 * @param4 {Boolean} bUseCapture 캡쳐링(capturing) 사용 여부(1.4.2 버전부터 지원). 사용하면 true 사용하지 않으면 false를 입력한다.
 * @return4 {$Fn} 생성된 $Fn() 객체.
 *
 * @param5 {String} sElement 이벤트 핸들러를 할당할 요소의 id
 * @param5 {String} sEvent 이벤트 종류
 * @return5 {$Fn} 생성된 $Fn() 객체.
 *
 * @param6 {String} sElement 이벤트 핸들러를 할당할 요소의 id
 * @param6 {String} sEvent 이벤트 종류
 * @param6 {Boolean} bUseCapture 캡쳐링(capturing) 사용 여부(1.4.2 버전부터 지원). 사용하면 true 사용하지 않으면 false를 입력한다.
 * @return6 {$Fn} 생성된 $Fn() 객체.
 *
 * @see $Fn#detach
 * @throws {jindo.$Except.EITHER_STRING_OR_DOM_OR_$ELEMENT_OR_ARRAY_OR_$A} 첫 번째 인자가 id, tag, element, $Element, Array, $A이 아닌 경우.
 * @throws {jindo.$Except.ONLY_STRING_TYPE} 두 번째 인자가 string이 아닌 경우.
 * @deprecated Since version 2.0.0. $Element#attach로 변경
 * @example
var someObject = {
    func : function() {
		// code here
   }
}

// 단일 요소에 클릭 이벤트 핸들러를 등록할 경우
$Fn(someObject.func, someObject).attach($("test"),"click"); 

// 여러 요소에 클릭 이벤트 핸들러를 등록할 경우
// 아래와 같이 첫 번째 파라미터로 배열이 입력되면 해당 모든 요소에 이벤트 핸들러가 등록된다.
$Fn(someObject.func, someObject).attach($$(".test"),"click");     
  
 */
jindo.$Fn.prototype.attach = function(oElement, sEvent, bUseCapture) {
	//-@@$Fn.attach-@@//
	var oArgs = jindo.$Fn._commonPram(arguments,"$Fn#attach");
	var fn = null, l, ev = sEvent, el = oElement, ua = _j_ag;
	
	if (bUseCapture !== true) {
		bUseCapture = false;
	};
	
	this._bUseCapture = bUseCapture;

	switch(oArgs+""){
		case "4arr":
		case "4arr2":
			var el = oArgs.aElement;
			var ev = oArgs.sEvent;
			for(var i=0, l= el.length; i < l; i++) this.attach(el[i], ev, bUseCapture);
			return this;
	}
	fn = this._bind = this._bind?this._bind:this.bind();
	jindo.$Element(el).attach(ev,fn);

	return this;
};


/**
 
 * @description detach() 메서드는 요소에 등록된 이벤트 핸들러를 등록 해제한다.
 * @param {Element} elElement 이벤트 핸들러를 등록 해제할 요소
 * @param {String} sEvent 이벤트 종류. 이벤트 이름에는 on 접두어를 사용하지 않는다.
 * @return {$Fn} 생성된 $Fn() 객체.
 * @see $Fn#attach
 * @throws {jindo.$Except.EITHER_STRING_OR_DOM_OR_$ELEMENT_OR_ARRAY_OR_$A} 첫 번째 인자가 id, tag, element, $Element, Array, $A이 아닌 경우.
 * @throws {jindo.$Except.ONLY_STRING_TYPE} 두 번째 인자가 string이 아닌 경우.
 * @deprecated Since version 2.0.0. $Element#detach 로 변경
 * @example
var someObject = {
    func : function() {
		// code here
   }
}

var fpFn = $Fn(someObject.func, someObject);
fpFn.attach($("test"),"click");
// 단일 요소에 등록된 클릭 이벤트 핸들러를 등록 해제할 경우
// detach 함수는 attach 함수가 실행 된 같은 $Fn 인스턴스에서만 사용 가능하다
fpFn.detach($("test"),"click");

var fpFn = $Fn(someObject.func, someObject);
fpFn.attach($$(".test"),"click");
// 여러 요소에 등록된 클릭 이벤트 핸들러를 등록 해제할 경우
// 아래와 같이 첫 번째 파라미터로 배열이 입력되면 해당 모든 요소에 이벤트 핸들러가 등록된다.
// detach 함수는 attach 함수가 실행 된 같은 $Fn 인스턴스에서만 사용 가능하다.
fpFn.detach($$(".test"),"click");
  
 */
jindo.$Fn.prototype.detach = function(oElement, sEvent) {
	//-@@$Fn.detach-@@//
	var oArgs = jindo.$Fn._commonPram(arguments,"$Fn#detach");
	
	var fn = null, l, el = oElement, ev = sEvent, ua = _j_ag;
	
	switch(oArgs+""){
		case "4arr":
		case "4arr2":
			var el = oArgs.aElement;
			var ev = oArgs.sEvent;
			for(var i=0, l= el.length; i < l; i++) this.detach(el[i], ev, bUseCapture);
			return this;
		
	}
	fn = this._bind = this._bind?this._bind:this.bind();
	jindo.$Element(oArgs.eElement).detach(oArgs.sEvent, fn);

	return this;
};

//-!jindo.$Fn.prototype.detach start!-//

//-!jindo.$Fn.prototype.delay start(jindo.$Fn.prototype.bind)!-//
/**
 
 * @description delay() 메서드는 래핑한 함수를 지정한 시간 이후에 호출한다.
 
 * @param1 {Numeric} nSec 함수를 호출할 때까지 대기할 시간(초 단위).
 * @return1 {$Fn} 생성된 $Fn() 객체.
 
 * @param2 {Numeric} nSec 함수를 호출할 때까지 대기할 시간(초 단위).
 * @param2 {Array+} [aArgs] 함수를 호출할 때 사용할 파라미터를 담은 배열.
 * @return2 {$Fn} 생성된 $Fn() 객체.
 
 * @see $Fn#bind
 * @see $Fn#setInterval
 * @example
function func(a, b) {
	alert(a + b);
}

$Fn(func).delay(5, [3, 5]);//5초 이후에 3, 5 값을 매개변수로 하는 함수 func를 호출한다.
  
 */
jindo.$Fn.prototype.delay = function(nSec, args) {
	//-@@$Fn.delay-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4num' : ['nSec:Numeric'],
		'4arr' : ['nSec:Numeric','args:Array+']
	},"$Fn#delay");
	switch(oArgs+""){
		case "4num":
			args = args || [];
			break;
		case "4arr":
			args = oArgs.args;
			
	}
	this._delayKey = setTimeout(this.bind.apply(this, args), nSec*1000);
	return this;
};

//-!jindo.$Fn.prototype.setInterval start(jindo.$Fn.prototype.bind)!-//
/**
 
 * @description setInterval() 메서드는 래핑한 함수를 지정한 시간 간격마다 호출한다.
 
 * @param1 {Numeric} nSec 함수를 호출할 시간 간격(초 단위).
 * @return1 {$Fn} 생성된 $Fn() 객체.
 
 * @param2 {Numeric} nSec 함수를 호출할 시간 간격(초 단위).
 * @param2 {Array+} [aArgs] 함수를 호출할 때 사용할 파라미터를 담은 배열.
 * @return2 {$Fn} 생성된 $Fn() 객체.
 * @see $Fn#bind
 * @see $Fn#delay
 * @example
function func(a, b) {
	alert(a + b);
}

$Fn(func).setInterval(5, [3, 5]);//5초 간격으로 3, 5 값을 매개변수로 하는 함수 func를 호출한다.
  
 */
jindo.$Fn.prototype.setInterval = function(nSec, args) {
	//-@@$Fn.setInterval-@@//
	//-@@$Fn.repeat-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4num' : ['nSec:Numeric'],
		'4arr' : ['nSec:Numeric','args:Array+']
	},"$Fn#setInterval");
	switch(oArgs+""){
		case "4num":
			args = args || [];
			break;
		case "4arr":
			args = oArgs.args;
			
	}
	this._repeatKey = setInterval(this.bind.apply(this, args), nSec*1000);
	return this;
};

//-!jindo.$Fn.prototype.repeat start(jindo.$Fn.prototype.setInterval)!-//
/**
 
 * @function
 * @description repeat 메서드는 setInterval() 메서드와 동일하다.
 
 * @param1 {Numeric} nSec 함수를 호출할 시간 간격(초 단위).
 * @return1 {$Fn} 생성된 $Fn() 객체.
 
 * @param2 {Numeric} nSec 함수를 호출할 시간 간격(초 단위).
 * @param2 {Array+} [aArgs] 함수를 호출할 때 사용할 파라미터를 담은 배열.
 * @return2 {$Fn} 생성된 $Fn() 객체.
 * @see $Fn#setInterval
 * @see $Fn#bind
 * @see $Fn#delay
 * @example
function func(a, b) {
	alert(a + b);
}

$Fn(func).repeat(5, [3, 5]);//5초 간격으로 3, 5 값을 매개변수로 하는 함수 func를 호출한다.
  
 */
jindo.$Fn.prototype.repeat = jindo.$Fn.prototype.setInterval;

//-!jindo.$Fn.prototype.stopDelay start!-//
/**
 
 * @description stopDelay() 메서드는 delay() 메서드로 지정한 함수 호출을 중지할 때 사용한다.
 * @return {$Fn} $Fn() 객체.
 * @see $Fn#delay
 * @example
function func(a, b) {
	alert(a + b);
}

var fpDelay = $Fn(func);
	fpDelay.delay(5, [3, 5]);
	fpDelay.stopDelay();

  
 */
jindo.$Fn.prototype.stopDelay = function(){
	//-@@$Fn.stopDelay-@@//
	if(this._delayKey !== undefined){
		window.clearTimeout(this._delayKey);
		delete this._delayKey;
	}
	return this;
};

//-!jindo.$Fn.prototype.stopRepeat start!-//
/**
 
 * @description stopRepeat() 메서드는 repeat() 메서드로 지정한 함수 호출을 멈출 때 사용한다.
 * @return {$Fn} $Fn() 객체.
 * @see $Fn#repeat
 * @example
function func(a, b) {
	alert(a + b);
}

var fpDelay = $Fn(func);
	fpDelay.repeat(5, [3, 5]);
	fpDelay.stopRepeat();
  
 */
jindo.$Fn.prototype.stopRepeat = function(){
	//-@@$Fn.stopRepeat-@@//
	if(this._repeatKey !== undefined){
		window.clearInterval(this._repeatKey);
		delete this._repeatKey;
	}
	return this;
};

//-!jindo.$Element start(jindo.$)!-//
/**
 
  * @fileOverview $Element의 생성자 및 메서드를 정의한 파일
  * @name element.js
  * @author Kim, Taegon
  
 */

/**
 
 * @class $Element() 객체는 HTML 요소를 래핑(wrapping)하며, 해당 요소를 좀 더 쉽게 다룰 수 있는 기능을 제공한다.
 * @constructor
 * @description $Element() 객체를 생성한다.
 * @param {Variant} vElement $Element() 객체 생성자는 문자열(String), HTML 요소(Element+|Node|Document+|Window+), 또는 $Element() 객체를 파라미터로 지정할 수 있다.<br>
 <ul>
	<li>파라미터가 문자열이면 두 가지 방식으로 동작한다.
		<ul>
			<li>만일 "&lt;tagName&gt;"과 같은 형식의 문자열이면 tagName을 가지는 객체를 생성한다.</li>
			<li>그 이외의 경우 지정한 문자열을 ID로 갖는 HTML 요소를 사용하여 $Element() 객체를 생성한다.</li>
		</ul>
	</li>
	<li>파라미터가 HTML 요소이면 해당 요소를 래핑하여 $Element() 를 생성한다.</li>
	<li>파라미터가 $Element()이면 전달된 파라미터를 그대로 반환한다.</li>
</ul>
생성자의 파라미터가 undefined 혹은 null인 경우 null을 반환한다.
 * @return {$Element} 생성된 $Element() 객체.
 * @example
var element = $Element($("box"));	// HTML 요소를 파라미터로 지정
var element = $Element("box");		// HTML 요소의 id를 파라미터로 지정
var element = $Element("<DIV>");	// 태그를 파라미터로 지정, DIV 엘리먼트를 생성하여 래핑함       
  
 */
jindo.$Element = function(el) {
	//-@@$Element-@@//
	var cl = arguments.callee;
	if (el && el instanceof cl) return el;	
	
	if (!(this instanceof cl)){
		try {
			jindo.$Jindo._warn(arguments.length, 1,"$Element");
			return new cl(el);
		} catch(e) {
			if (e instanceof TypeError) { return null; }
			throw e;
		}
	}	
	var ___jindo = jindo.$Jindo;
	var oArgs = ___jindo.checkVarType(arguments, {
		'4str' : [ 'sID:String+' ],
		'4nod' : [ 'oEle:Node' ],
		'4doc' : [ 'oEle:Document+' ],
		'4win' : [ 'oEle:Window+' ]
	},"$Element");
	switch(oArgs + ""){
		case "4str":
			el = jindo.$(el);
			break;
		default:
			el = oArgs.oEle;
	}
	
	this._element = el;
	if(this._element != null){
		if(this._element.__jindo__id){
			this._key = this._element.__jindo__id; 
		}else{
			this._element.__jindo__id = this._key = _makeRandom();
		}
		var tag = this._element.tagName;	
		// tagname
		this.tag = tag !== undefined?tag.toLowerCase():''; 
	}else{
		throw new TypeError("{not_found_element}");
	}

};

function _makeRandom(){
	return "e"+ new Date().getTime() + parseInt(Math.random() * 100000000,10);
}

/**
 
 */
jindo.$Element._eventBind = function(oEle,sEvent,fAroundFunc,bUseCapture){
	if(oEle.addEventListener){
		if(document.documentMode == 9){
			jindo.$Element._eventBind = function(oEle,sEvent,fAroundFunc){
				if(/resize/.test(sEvent) ){
					oEle.attachEvent("on"+sEvent,fAroundFunc);
				}else{
					oEle.addEventListener(sEvent, fAroundFunc, !!bUseCapture);
				}
			}
		}else{
			jindo.$Element._eventBind = function(oEle,sEvent,fAroundFunc,bUseCapture){
				oEle.addEventListener(sEvent, fAroundFunc, !!bUseCapture);
			}
		}
	}else{
		jindo.$Element._eventBind = function(oEle,sEvent,fAroundFunc){
			oEle.attachEvent("on"+sEvent,fAroundFunc);
		}
	}
	jindo.$Element._eventBind(oEle,sEvent,fAroundFunc,bUseCapture);
};

/**
 
 */
jindo.$Element._unEventBind = function(oEle,sEvent,fAroundFunc){
	if(oEle.removeEventListener){
		if(document.documentMode == 9){
			jindo.$Element._unEventBind = function(oEle,sEvent,fAroundFunc){
				if(/resize/.test(sEvent) ){
					oEle.detachEvent("on"+sEvent,fAroundFunc);
				}else{
					oEle.removeEventListener(sEvent,fAroundFunc,false);
				}
			}
		}else{
			jindo.$Element._unEventBind = function(oEle,sEvent,fAroundFunc){
				oEle.removeEventListener(sEvent,fAroundFunc,false);
			}
		}
	}else{
		jindo.$Element._unEventBind = function(oEle,sEvent,fAroundFunc){
			oEle.detachEvent("on"+sEvent,fAroundFunc);
		}
	}
	jindo.$Element._unEventBind(oEle,sEvent,fAroundFunc);
};

//-!jindo.$Element.prototype.$value start!-//
/**
 
 * @description $value() 메서드는 원래의 HTML 요소를 반환한다.
 * @return {Element} $Element() 객체가 감싸고 있는 원본 요소.
 * @see $Element
 * @example
var element = $Element("sample_div");
element.$value(); // 원래의 엘리먼트가 반환된다
  
 */
jindo.$Element.prototype.$value = function() {
	//-@@$Element.$value-@@//
	return this._element;
};

//-!jindo.$Element.prototype.visible start(jindo.$Element.prototype._getCss,jindo.$Element.prototype.show,jindo.$Element.prototype.hide)!-//
/**
 
 * @description visible() 메서드는 HTML 요소의 display 속성을 확인하거나 display 속성을 설정하기 위해 사용한다. 파라미터를 생략하면 해당 요소의 display 속성을 확인하여 표시 여부를 Boolean 형태로 반환한다. display 속성이 none이면 false 값을 반환한다. 파라미터를 입력한 경우 display 속성에 대해 추가적인 설정이 가능하다.
 *
 * @param1 {Void}
 * @return1 {Boolean} display 여부 
 *
 * @param2 {Boolean} bVisible 해당 요소의 표시 여부.<br>입력한 파라미터가 true인 경우 display 속성을 설정하고 false인 경우에는 display 속성을 none으로 변경한다. boolean이 아닌 값이 들어온 경우는 ToBoolean한 결과를 가지고 비교한다.
 * @return2 {$Element} display 속성을 변경한 $Element() 객체
 *
 * @param3 {Boolean} bVisible 해당 요소의 표시 여부.<br>입력한 파라미터가 true인 경우 display 속성을 설정하고 false인 경우에는 display 속성을 none으로 변경한다. boolean이 아닌 값이 들어온 경우는 ToBoolean한 결과를 가지고 비교한다.
 * @param3 {String+} sDisplay 해당 요소의 display 속성 값.<br>bVisible 파라미터가 true 이면 sDisplay 값을 display 속성으로 설정한다.
 * @return3 {$Element} display 속성을 변경한 $Element() 객체
 *
 * @since 1.1.2부터 bVisible 파라미터를 사용할 수 있다.
 * @since 1.4.5부터 sDisplay 파라미터를 사용할 수 있다.
 * @see <a href="http://www.w3.org/TR/2008/REC-CSS2-20080411/visuren.html#display-prop">display 속성</a> - W3C CSS2 Specification
 * @see $Element#show
 * @see $Element#hide
 * @see $Element#toggle
 * @example
<div id="sample_div" style="display:none">Hello world</div>

// 조회
$Element("sample_div").visible(); // false

 * @example
// 화면에 보이도록 설정
$Element("sample_div").visible(true, 'block');

//Before
<div id="sample_div" style="display:none">Hello world</div>

//After
<div id="sample_div" style="display:block">Hello world</div>
   
 */
jindo.$Element.prototype.visible = function(bVisible, sDisplay) {
	//-@@$Element.visible-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'g' : [  ],
		's4bln' : [ jindo.$Jindo._F('bVisible:Boolean') ],
		's4str' : [ 'bVisible:Boolean', "sDisplay:String+"]
	},"$Element#visible");
	switch(oArgs+""){
		case "g":
			return (this._getCss(this._element,"display") != "none");
			
		case "s4bln":
			this[bVisible?"show":"hide"]();
			return this;
			
		case "s4str":
			this[bVisible?"show":"hide"](sDisplay);
			return this;
					
	}
};

//-!jindo.$Element.prototype.show start!-//
/**
 
 * @description show() 메서드는 HTML 요소가 화면에 보이도록 display 속성을 변경한다.
 *
 * @param1 {Void}
 * @return1 {$Element} display 속성이 변경된 $Element() 객체.
 *
 * @param2 {String+} sDisplay display 속성에 지정할 값.<br>파라미터를 생략하면 태그별로 미리 지정된 기본 값이 속성 값으로 설정된다. 미리 지정된 기본 값이 없으면 "inline"으로 설정된다. 에러가 발생한 경우는 block으로 설정된다.
 * @return2 {$Element} display 속성이 변경된 $Element() 객체.
 *
 * @since 1.4.5부터 sDisplay 파라미터를 사용할 수 있다.
 * @see <a href="http://www.w3.org/TR/2008/REC-CSS2-20080411/visuren.html#display-prop">display 속성</a> - W3C CSS2 Specification
 * @see $Element#hide
 * @see $Element#toggle
 * @see $Element#visible
 * @example
// 화면에 보이도록 설정
$Element("sample_div").show();

//Before
<div id="sample_div" style="display:none">Hello world</div>

//After
<div id="sample_div" style="display:block">Hello world</div>
  
 */
jindo.$Element.prototype.show = function(sDisplay) {
	//-@@$Element.show-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4voi' : [  ],
		'4str' : ["sDisplay:String+"]
	},"$Element#show");
	
	
	var s = this._element.style;
	var b = "block";
	var c = { p:b,div:b,form:b,h1:b,h2:b,h3:b,h4:b,ol:b,ul:b,fieldset:b,td:"table-cell",th:"table-cell",
			  li:"list-item",table:"table",thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",
			  tr:"table-row",col:"table-column",colgroup:"table-column-group",caption:"table-caption",dl:b,dt:b,dd:b};
	try {
		switch(oArgs+""){
			case "4voi":
				var type = c[this.tag];
				s.display = type || "inline";
				break;
			case "4str":
				s.display = sDisplay;
				
		}
	} catch(e) {
		/*
		 
IE에서 sDisplay값이 비정상적일때 block로 셋팅한다.
  
		 */
		s.display = "block";
	}

	return this;
};

//-!jindo.$Element.prototype.hide start!-//
/**
 
 * @description hide() 메서드는 HTML 요소가 화면에 보이지 않도록 display 속성을 none으로 변경한다.
 * @return {$Element} display 속성이 none으로 변경된 $Element() 객체.
 * @see <a href="http://www.w3.org/TR/2008/REC-CSS2-20080411/visuren.html#display-prop">display 속성</a> - W3C CSS2 Specification
 * @see $Element#show
 * @see $Element#toggle
 * @see $Element#visible
 * @example
// 화면에 보이지 않도록 설정
$Element("sample_div").hide();

//Before
<div id="sample_div" style="display:block">Hello world</div>

//After
<div id="sample_div" style="display:none">Hello world</div>
  
 */
jindo.$Element.prototype.hide = function() {
	//-@@$Element.hide-@@//
	this._element.style.display = "none";

	return this;
};


//-!jindo.$Element.prototype.toggle start(jindo.$Element.prototype._getCss,jindo.$Element.prototype.show,jindo.$Element.prototype.hide)!-//
/**
 
 * @description toggle() 메서드는 HTML 요소의 display 속성을 변경하여 해당 요소를 화면에 보이거나, 보이지 않게 한다. 이 메서드는 마치 스위치를 켜고 끄는 것과 같이 요소의 표시 여부를 반전시킨다.
 *
 * @param1 {Void}
 * @return1 {$Element} display 속성이 변경된 $Element() 객체.
 *
 * @param2 {String+} sDisplay 해당 요소가 보이도록 변경할 때 display 속성에 지정할 값.<br>파라미터를 생략하면 태그별로 미리 지정된 기본 값이 속성 값으로 설정된다. 미리 지정된 기본 값이 없으면 "inline"으로 설정된다.
 * @return2 {$Element} display 속성이 변경된 $Element() 객체.
 *
 * @since 1.4.5부터 보이도록 설정할 때 sDisplay 값으로 display 속성 값 지정이 가능하다.
 * @see <a href="http://www.w3.org/TR/2008/REC-CSS2-20080411/visuren.html#display-prop">display 속성</a> - W3C CSS2 Specification
 * @see $Element#show
 * @see $Element#hide
 * @see $Element#visible
 * @example
// 화면에 보이거나, 보이지 않도록 처리
$Element("sample_div1").toggle();
$Element("sample_div2").toggle();

//Before
<div id="sample_div1" style="display:block">Hello</div>
<div id="sample_div2" style="display:none">Good Bye</div>

//After
<div id="sample_div1" style="display:none">Hello</div>
<div id="sample_div2" style="display:block">Good Bye</div>
  
 */
jindo.$Element.prototype.toggle = function(sDisplay) {
	//-@@$Element.toggle-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4voi' : [  ],
		'4str' : ["sDisplay:String+"]
	},"$Element#toggle");
	
	this[this._getCss(this._element,"display")=="none"?"show":"hide"].apply(this,arguments);
	return this;
};

//-!jindo.$Element.prototype.opacity start!-//
/**
 
 * @description opacity() 메서드는 HTML 요소의 투명도(opacity 속성) 값을 가져오거나 설정한다.
 *
 * @param1 {Void}
 * @return1 {Numeric} opacity값을 반환한다.
 *
 * @param2 {Numeric} nValue 설정할 투명도 값.<br>투명도 값은 0에서 1 사이의 실수 값으로 지정한다. 지정한 파라미터의 값이 0보다 작으면 0을, 1보다 크면 1을 설정한다. 
 * @return2 {$Element} 값을 반영한 $Element() 객체를 반환한다.
 *
 * @throws {jindo.$Except.ONLY_NUMBER_TYPE} 파라메터의 parseFloat한 결과가 number가 아닌 경우.
 * @example
<div id="sample" style="background-color:#2B81AF; width:20px; height:20px;"></div>

// 조회
$Element("sample").opacity();	// 1

 * @example
// 투명도 값 설정
$Element("sample").opacity(0.4);

//Before
<div style="background-color: rgb(43, 129, 175); width: 20px; height: 20px;" id="sample"></div>

//After
<div style="background-color: rgb(43, 129, 175); width: 20px; height: 20px; opacity: 0.4;" id="sample"></div>         
  
 */
jindo.$Element.prototype.opacity = function(value) {
	//-@@$Element.opacity-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'g' : [  ],
		's' : ["nOpacity:Numeric"]
	},"$Element#opacity");
	
	var v,e = this._element,b;
	switch(oArgs+""){
		case "g":
			b = (this._getCss(e,"display") != "none");
			if (typeof e.filters != 'undefined') {
				v = typeof e.filters.alpha == 'undefined'?(b?100:0):e.filters.alpha.opacity;
				v = v / 100;
			} else {
				v = parseFloat(e.style.opacity,10);
				if (isNaN(v)) v = b?1:0;
			}
			return v;	
			
		case "s":
			 /*
		     
IE에서 layout을 가지고 있지 않으면 opacity가 적용되지 않음.
  
		     */
			b = (this._getCss(e,"display") != "none");
			value = oArgs.nOpacity;
			e.style.zoom = 1;
			value = Math.max(Math.min(value,1),0);
			
			if (typeof e.filters != 'undefined') {
				value = Math.ceil(value*100);
				
				if (typeof e.filters != 'unknown' && typeof e.filters.alpha != 'undefined') {
					e.filters.alpha.opacity = value;
				} else {
					e.style.filter = (e.style.filter + " alpha(opacity=" + value + ")");
				}		
			} else {
				e.style.opacity = value;
			}
			
			return this;
			
	}
	
};



//-!jindo.$Element.prototype.css start(jindo.$Element.prototype.opacity,jindo.$Element.prototype._getCss,jindo.$Element.prototype._setCss)!-//
/**
 
 * @description css() 메서드는 HTML 요소의 CSS 속성 값을 가져오거나 설정한다. 이 메서드로 CSS 속성은 카멜 표기법(Camel Notation)을 사용한다. 예를 들면 border-width-bottom 속성은 borderWidthBottom으로 지정할 수 있다. 또한 float 속성은 JavaScript의 예약어로 사용되므로 css() 메서드에서는 float 대신 cssFloat을 사용한다(Internet Explorer에서는 styleFloat, 그 외의 브라우저에서는 cssFloat를 사용한다.).
 *
 * @param1 {String+} vName CSS 속성 이름(String)
 * @return1 {String} CSS 속성 값을 반환한다.
 *
 * @param2 {String+} vName CSS 속성 이름(String)
 * @param2 {String+|Numeric} vValue CSS 속성에 설정할 값.<br>숫자(Number) 혹은 단위를 포함한 문자열(String)을 사용한다.
 * @return2 {$Element} CSS 속성 값을 반영한 $Element() 객체를 반환한다.
 *
 * @param3 {Hash+} oList 하나 이상의 CSS 속성과 값을 가지는 객체(Object) 또는 해시 객체($H() 객체).
 * @return3 {$Element} CSS 속성 값을 반영한 $Element() 객체를 반환한다.
 *
 * @throws {jindo.$Except.EITHER_STRING_OR_OBJECT_OR_HASH} sName이 문자, 오브젝트 나 $Hash여야 한다.
 * @see $Element#attr
 * @example
<style type="text/css">
	#btn {
		width: 120px;
		height: 30px;
		background-color: blue;
	}
</style>

<span id="btn"></span>

...

// CSS 속성 값 조회
$Element('btn').css('backgroundColor');		// rgb (0, 0, 255)

 * @example
// CSS 속성 값 설정
$Element('btn').css('backgroundColor', 'red');

//Before
<span id="btn"></span>

//After
<span id="btn" style="background-color: red;"></span>

 * @example
// 여러개의 CSS 속성 값을 설정
$Element('btn').css({
	width: "200px",		// 200
	height: "80px"  	// 80 으로 설정하여도 결과는 같음
});

//Before
<span id="btn" style="background-color: red;"></span>

//After
<span id="btn" style="background-color: red; width: 200px; height: 80px;"></span>
  
 */
jindo.$Element.prototype.css = function(sName, sValue) {
	//-@@$Element.css-@@//
	
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'g' 	: [ 'sName:String+'],
		's4str' : [ jindo.$Jindo._F('sName:String+'), jindo.$Jindo._F('vValue:String+') ],
		's4num' : [ 'sName:String+', 'vValue:Numeric' ],
		's4obj' : [ 'oObj:Hash+']
	},"$Element#css");
	
	var e = this._element;
	switch(oArgs+"") {
		case 's4str':
		case 's4num':
			var obj = {};
			obj[sName] = sValue;
			sName = obj;
			break;
		case 's4obj':
			sName = oArgs.oObj;
			break;
		case 'g':
			var _getCss = this._getCss;
			if(sName == "opacity"){
				return this.opacity();
			}
			if((_JINDO_IS_FF||_JINDO_IS_OP)&&(sName=="backgroundPositionX"||sName=="backgroundPositionY")){
				var bp = _getCss(e, "backgroundPosition").split(/\s+/);
				return (sName == "backgroundPositionX") ? bp[0] : bp[1];
			}
			if (_JINDO_IS_IE && sName == "backgroundPosition") {
				return _getCss(e, "backgroundPositionX") + " " + _getCss(e, "backgroundPositionY")
			}
			if ((_JINDO_IS_FF||_JINDO_IS_SF||_JINDO_IS_CH) && (sName=="padding"||sName=="margin")) {
				var top		= _getCss(e, sName+"Top");
				var right	= _getCss(e, sName+"Right");
				var bottom	= _getCss(e, sName+"Bottom");
				var left	= _getCss(e, sName+"Left");
				if ((top == right) && (bottom == left)) {
					return top;
				}else if (top == bottom) {
					if (right == left) {
						return top+" "+right;
					}else{
						return top+" "+right+" "+bottom+" "+left;
					}
				}else{
					return top+" "+right+" "+bottom+" "+left;
				}
			}
			return _getCss(e, sName);
			
	}
	var v, type;

	for(var k in sName) {
		if(sName.hasOwnProperty(k)){
			v    = sName[k];
			if (!(jindo.$Jindo.isString(v)||jindo.$Jindo.isNumeric(v))) continue;
			if (k == 'opacity') {
				this.opacity(v);
				continue;
			}
			if (k == "cssFloat" && _JINDO_IS_IE) k = "styleFloat";
		
			if((_JINDO_IS_FF||_JINDO_IS_OP)&&( k =="backgroundPositionX" || k == "backgroundPositionY")){
				var bp = this.css("backgroundPosition").split(/\s+/);
				v = k == "backgroundPositionX" ? v+" "+bp[1] : bp[0]+" "+v;
				this._setCss(e, "backgroundPosition", v);
			}else{
				this._setCss(e, k, v);
			}
		}
	}
	
	return this;
};

//-!jindo.$Element.prototype._getCss.hidden start!-//
/**
 
 * css에서 사용되는 함수
 * @ignore
 * @param {Element} e
 * @param {String} sName
  
 */
jindo.$Element.prototype._getCss = function(e, sName){
	var fpGetCss;
	if (e.currentStyle) {
		
		fpGetCss = function(e, sName){
			try{
				if (sName == "cssFloat") sName = "styleFloat";
				var sStyle = e.style[sName];
				if(sStyle){
					return sStyle;
				}else{
					var oCurrentStyle = e.currentStyle;
					if (oCurrentStyle) {
						return oCurrentStyle[sName];
					}
				}
				return sStyle;
			}catch(ex){
				throw new Error((e.tagName||"document") + "는 css를 사용 할수 없습니다.");
			}
		}
	} else if (window.getComputedStyle) {
		fpGetCss = function(e, sName){
			try{
				if (sName == "cssFloat") sName = "float";
				var d = e.ownerDocument || e.document || document;
				var sVal =  (e.style[sName]||d.defaultView.getComputedStyle(e,null).getPropertyValue(sName.replace(/([A-Z])/g,"-$1").toLowerCase()));
				if (sName == "textDecoration") sVal = sVal.replace(",","");
				return sVal;
			}catch(ex){
				throw new Error((e.tagName||"document") + "는 css를 사용 할수 없습니다.");
			}
		}
	
	} else {
		fpGetCss = function(e, sName){
			try{
				if (sName == "cssFloat" && _JINDO_IS_IE) sName = "styleFloat";
				return e.style[sName];
			}catch(ex){
				throw new Error((e.tagName||"document") + "는 css를 사용 할수 없습니다.");
			}
		}
	}
	jindo.$Element.prototype._getCss = fpGetCss;
	return fpGetCss(e, sName);
	
};

//-!jindo.$Element.prototype._setCss.hidden start!-//
/**
 
 * css에서 css를 세팅하기 위한 함수
 * @ignore
 * @param {Element} e
 * @param {String} k
  
 */
jindo.$Element.prototype._setCss = function(e, k, v){
	if (("#top#left#right#bottom#").indexOf(k+"#") > 0 && (typeof v == "number" ||(/\d$/.test(v)))) {
		e.style[k] = parseInt(v,10)+"px";
	}else{
		e.style[k] = v;
	}
};

//-!jindo.$Element.prototype.attr start!-//
/**
 
 * @description attr() 메서드는 HTML 요소의 속성을 가져오거나 설정한다. 하나의 파라미터만 사용하면 지정한 속성의 값을 반환하고 해당 속성이 없다면 null을 반환한다.
 *
 * @param1 {String+} sName 속성 이름(String)
 * @return1 {String+} 속성 값을 반환.
 *
 * @param2 {String+} sName 속성 이름(String).
 * @param2 {Variant} vValue 속성에 설정할 값.<br>숫자(Number) 혹은 단위를 포함한 문자열(String)을 사용한다. 또한 속성의 값을 null로 설정하면 해당 HTML 속성을 삭제한다.
 * @return2 {$Element} 속성 값을 반영한 $Element() 객체를 반환한다.
 *
 * @param3 {Hash+} oList 하나 이상의 속성과 값을 가지는 객체(Object) 또는 해시 객체($H() 객체).
 * @return3 {$Element} 속성 값을 반영한 $Element() 객체를 반환한다.
 *
 * @throws {jindo.$Except.EITHER_STRING_OR_OBJECT_OR_HASH} sName은 문자,오브젝트 나 $Hash여야 한다.
 * @see $Element#css
 * @example
<a href="http://www.naver.com" id="sample_a" target="_blank">Naver</a>

$Element("sample_a").attr("href"); // http://www.naver.com
 * @example
$Element("sample_a").attr("href", "http://www.hangame.com/");

//Before
<a href="http://www.naver.com" id="sample_a" target="_blank">Naver</a>
//After
<a href="http://www.hangame.com" id="sample_a" target="_blank">Naver</a>
 * @example
$Element("sample_a").attr({
    "href" : "http://www.hangame.com",
    "target" : "_self"
})

//Before
<a href="http://www.naver.com" id="sample_a" target="_blank">Naver</a>
//After
<a href="http://www.hangame.com" id="sample_a" target="_self">Naver</a>
  
 */
jindo.$Element.prototype.attr = function(sName, sValue) {
	//-@@$Element.attr-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'g' 	: [ 'sName:String+'],
		's4str' : [ 'sName:String+', 'vValue:String+' ],
		's4num' : [ 'sName:String+', 'vValue:Numeric' ],
		's4nul' : [ 'sName:String+', 'vValue:Null' ],
		's4bln' : [ 'sName:String+', 'vValue:Boolean' ],
		's4obj' : [ jindo.$Jindo._F('oObj:Hash+')]
	},"$Element#attr");
	
	var e = this._element;
	switch(oArgs+""){
		case "s4str":
		case "s4nul":
		case "s4num":
		case "s4bln":
			var obj = {};
			obj[sName] = sValue;
			sName = obj;
			break;
		case "s4obj":
			sName = oArgs.oObj;
			break;
		case "g":
			if (sName == "class" || sName == "className"){ 
				return e.className;
			}else if(sName == "style"){
				return e.style.cssText;
			}else if(sName == "checked"||sName == "disabled"){
				return !!e[sName];
			}else if(sName == "value"){
				var val = e.getAttributeNode('value');
				if(val == null){
					return e.value;
				}else{
					return val.value;	
				} 
			}else if(sName == "href"){
				return e.getAttribute(sName,2);
			}
			return e.getAttribute(sName);
			
	}
	for(var k in sName) {
		if(sName.hasOwnProperty(k)){
			var v = sName[k];
			if (jindo.$Jindo.isNull(v)) {
				e.removeAttribute(k);
			}else{
				if (k == "class"|| k == "className") { 
					e.className = v;
				}else if(k == "style"){
					e.style.cssText = v;
				}else if(k == "checked"||k == "disabled"){
					e[k] = v;
				}else if(k == "value"){
					e.value = v;
				}else{
					e.setAttribute(k, v);	
				}
				
			} 
		}
	}

	return this;
};

//-!jindo.$Element.prototype.width start!-//
/**
 
 * @description width() 메서드는 HTML 요소의 너비를 가져오거나 설정한다. width() 메서드는 HTML 요소의 실제 너비를 가져온다. 브라우저마다 Box 모델의 크기 계산 방법이 다르므로 CSS의 width 속성 값과 width 메서드()의 반환 값은 서로 다를 수 있다.
 *
 * @param1 {Void}
 * @return1 {Number} HTML 요소의 실제 너비(Number)를  반환한다.
 *
 * @param2 {Numeric} nWidth	설정할 너비 값.<br>단위는 픽셀(px)이며 파라미터의 값은 숫자로 지정한다. 
 * @return2 {$Element} 너비 값이 반영된 $Element() 객체를 반환한다.
 *
 * @throws {jindo.$Except.ONLY_NUMBER_TYPE} 파라메터의 parseFloat한 결과가 number가 아닌 경우.
 * @see $Element#height
 * @example
<style type="text/css">
	div { width:70px; height:50px; padding:5px; margin:5px; background:red; }
</style>

<div id="sample_div"></div>

...

// 조회
$Element("sample_div").width();	// 80

 * @example
// 위의 예제 HTML 요소에 너비 값을 설정
$Element("sample_div").width(200);

//Before
<div id="sample_div"></div>

//After
<div id="sample_div" style="width: 190px"></div>
  
 */
jindo.$Element.prototype.width = function(width) {
	//-@@$Element.width-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'g' : [  ],
		's' : ["nWidth:Numeric"]
	},"$Element#width");
	
	switch(oArgs+""){
		case "g" :
			
			return this._element.offsetWidth;
			
		case "s" :
			
			width = oArgs.nWidth;
			var e = this._element;
			e.style.width = width+"px";
			var off = e.offsetWidth;
			if (off != width && off!==0) {
				var w = (width*2 - off);
				if (w>0)
					e.style.width = w + "px";
			}
			return this;
			
	}

};

//-!jindo.$Element.prototype.height start!-//
/**
 
 * @description height() 메서드는 HTML 요소의 높이를 가져오거나 설정한다. height() 메서드는 HTML 요소의 실제 높이를 가져온다. 브라우저마다 Box 모델의 크기 계산 방법이 다르므로 CSS의 height 속성 값과 height() 메서드의 반환 값은 서로 다를 수 있다.
 *
 * @param1 {Void}
 * @return1 {Number} HTML 요소의 실제 높이(Number)를 반환한다.
 *
 * @param2 {Number} nHeight 설정할 높이 값.<br>단위는 픽셀(px)이며 파라미터의 값은 숫자로 지정한다. 파라미터를 생략하면 높이 값을 반환한다.
 * @return2 {$Element} 높이 값이 반영된 $Element() 객체를 반환한다.
 *
 * @throws {jindo.$Except.ONLY_NUMBER_TYPE} 파라메터의 parseFloat한 결과가 number가 아닌 경우.
 * @see $Element#width
 * @example
<style type="text/css">
	div { width:70px; height:50px; padding:5px; margin:5px; background:red; }
</style>

<div id="sample_div"></div>

...

// 조회
$Element("sample_div").height(); // 60

 * @example
// 위의 예제 HTML 요소에 높이 값을 설정
$Element("sample_div").height(100);

//Before
<div id="sample_div"></div>

//After
<div id="sample_div" style="height: 90px"></div>
  
 */
jindo.$Element.prototype.height = function(height) {
	//-@@$Element.height-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'g' : [  ],
		's' : ["nHeight:Numeric"]
	},"$Element#height");
	
	switch(oArgs+""){
		case "g" :
			return this._element.offsetHeight;
			
		case "s" :
			height = oArgs.nHeight;
			var e = this._element;
			e.style.height = height+"px";
			var off = e.offsetHeight;
			if (off != height && off!==0) {
				var height = (height*2 - off);
				if(height>0)
					e.style.height = height + "px";
			}
			return this;
			
	}
};

//-!jindo.$Element.prototype.className start!-//
/**
 
 * @description className() 메서드는 HTML 요소의 클래스 이름을 설정하거나 반환한다.
 *
 * @param1 {Void}
 * @return1 {String} 클래스 이름(String)을 반환. 하나 이상의 클래스가 지정된 경우 공백으로 구분된 문자열이 반환된다.
 *
 * @param2 {String+} sClass 설정할 클래스 이름. 하나 이상의 클래스를 지정하려면 공백으로 구분하여 지정할 클래스 이름을 나열한다.
 * @return2 {$Element} 지정한 클래스가 반영된 $Element 객체가 반환된다.
 *
 * @throws {jindo.$Except.NOT_FOUND_ARGUMENT} 파라메터가 없는 경우.
 * @see $Element#hasClass
 * @see $Element#addClass
 * @see $Element#removeClass
 * @see $Element#toggleClass
 * @example
<style type="text/css">
p { margin: 8px; font-size:16px; }
.selected { color:#0077FF; }
.highlight { background:#C6E746; }
</style>

<p>Hello and <span id="sample_span" class="selected">Goodbye</span></p>

...

// 클래스 이름 조회
$Element("sample_span").className(); // selected

 * @example
// 위의 예제 HTML 요소에 클래스 이름 설정
welSample.className("highlight");

//Before
<p>Hello and <span id="sample_span" class="selected">Goodbye</span></p>

//After
<p>Hello and <span id="sample_span" class="highlight">Goodbye</span></p>
  
 */
jindo.$Element.prototype.className = function(sClass) {
	//-@@$Element.className-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'g' : [  ],
		's' : [jindo.$Jindo._F("sClass:String+")]
	},"$Element#className");
	var e = this._element;
	switch(oArgs+"") {
		case "g":
			return e.className;
		case "s":
			e.className = sClass;
			return this;
			
	}

};

//-!jindo.$Element.prototype.hasClass start!-//
/**
 
 * @description hasClass() 메서드는 HTML 요소에서 특정 클래스를 사용하고 있는지 확인한다.
 * @param {String+} sClass 확인할 클래스 이름.
 * @return {Boolean} 지정한 클래스의 사용 여부.
 * @see $Element#className
 * @see $Element#addClass
 * @see $Element#removeClass
 * @see $Element#toggleClass
 *
 * @example
<style type="text/css">
	p { margin: 8px; font-size:16px; }
	.selected { color:#0077FF; }
	.highlight { background:#C6E746; }
</style>

<p>Hello and <span id="sample_span" class="selected highlight">Goodbye</span></p>

...

// 클래스의 사용여부를 확인
var welSample = $Element("sample_span");
welSample.hasClass("selected"); 			// true
welSample.hasClass("highlight"); 			// true
  
 */
jindo.$Element.prototype.hasClass = function(sClass) {
	//-@@$Element.hasClass-@@//
	var ___checkVarType = jindo.$Jindo.checkVarType;
	if(this._element.classList){
		jindo.$Element.prototype.hasClass = function(sClass){
			var oArgs = ___checkVarType(arguments, {
				'4str' : ["sClass:String+"]
			},"$Element#hasClass");
			return this._element.classList.contains(sClass);
		}
	} else {
		jindo.$Element.prototype.hasClass = function(sClass){
			var oArgs = ___checkVarType(arguments, {
				'4str' : ["sClass:String+"]
			},"$Element#hasClass");
			return (" "+this._element.className+" ").indexOf(" "+sClass+" ") > -1;
		}
	}
	return this.hasClass.apply(this,arguments);
	
};

//-!jindo.$Element.prototype.addClass start!-//
/**
 
 * @description addClass() 메서드는 HTML 요소에 클래스를 추가한다.
 * @param {String+} sClass 추가할 클래스 이름. 둘 이상의 클래스를 추가하려면 클래스 이름을 공백으로 구분하여 나열한다.
 * @return {$Element} 지정한 클래스가 추가된 $Element() 객체.
 * @see $Element#className
 * @see $Element#hasClass
 * @see $Element#removeClass
 * @see $Element#toggleClass
 * @example
// 클래스 추가
$Element("sample_span1").addClass("selected");
$Element("sample_span2").addClass("selected highlight");

//Before
<p>Hello and <span id="sample_span1">Goodbye</span></p>
<p>Hello and <span id="sample_span2">Goodbye</span></p>

//After
<p>Hello and <span id="sample_span1" class="selected">Goodbye</span></p>
<p>Hello and <span id="sample_span2" class="selected highlight">Goodbye</span></p>
  
 */
//jindo.$Element.prototype.addClass = function(sClass) {
//	//-@@$Element.addClass-@@//
//	if(this._element.classList){
//		jindo.$Element.prototype.addClass = function(sClass){
//			if(this._element==null) return this;
//			var oArgs = jindo.$Jindo.checkVarType(arguments, {
//				'4str' : ["sClass:String+"]
//			},"$Element#addClass");
//			
//			var aClass = (sClass+"").split(/\s+/);
//			var flistApi = this._element.classList;
//			for(var i = aClass.length ; i-- ;){
//				aClass[i]!=""&&flistApi.add(aClass[i]);
//			}
//			return this;
//		}
//	} else {
		jindo.$Element.prototype.addClass = function(sClass){
			var oArgs = jindo.$Jindo.checkVarType(arguments, {
				'4str' : ["sClass:String+"]
			},"$Element#addClass");
			var e = this._element;
			var sClassName = e.className;
			var aClass = (sClass+"").split(" ");
			var sEachClass;
			for (var i = aClass.length - 1; i >= 0 ; i--){
				sEachClass = aClass[i];
				if ((" "+sClassName+" ").indexOf(" "+sEachClass+" ") == -1) {
					sClassName = sClassName+" "+sEachClass;
				}
			}
			e.className = sClassName.replace(/\s+$/, "").replace(/^\s+/, "");
			return this;
		};
//	}
//	return this.addClass.apply(this,arguments);
//
//};

//-!jindo.$Element.prototype.removeClass start!-//
/**
 
 * @description removeClass() 메서드는 HTML 요소에서 특정 클래스를 제거한다.
 * @param {String+} sClass 제거할 클래스 이름. 둘 이상의 클래스를 제거하려면 클래스 이름을 공백으로 구분하여 나열한다.
 * @return {$Element} 지정한 클래스가 제거된 $Element() 객체.
 * @see $Element#className
 * @see $Element#hasClass
 * @see $Element#addClass
 * @see $Element#toggleClass
 *
 * @example
// 클래스 제거
$Element("sample_span").removeClass("selected");

//Before
<p>Hello and <span id="sample_span" class="selected highlight">Goodbye</span></p>

//After
<p>Hello and <span id="sample_span" class="highlight">Goodbye</span></p>
 * @example
// 여러개의 클래스를 제거
$Element("sample_span").removeClass("selected highlight");
$Element("sample_span").removeClass("highlight selected");

//Before
<p>Hello and <span id="sample_span" class="selected highlight">Goodbye</span></p>

//After
<p>Hello and <span id="sample_span" class="">Goodbye</span></p>
   
 */
//jindo.$Element.prototype.removeClass = function(sClass) {
//	//-@@$Element.removeClass-@@//
//	if(!this._element.classList){
//		jindo.$Element.prototype.removeClass = function(sClass){
//			var oArgs = jindo.$Jindo.checkVarType(arguments, {
//				'4str' : ["sClass:String+"]
//			},"$Element#removeClass");
//			if(this._element==null) return this;
//			var flistApi = this._element.classList;
//			var aClass = (sClass+"").split(" ");
//			for(var i = aClass.length ; i-- ;){
//				aClass[i]!=""&&flistApi.remove(aClass[i]);
//			}
//			return this;
//		}
//	} else {

		jindo.$Element.prototype.removeClass = function(sClass){
			var oArgs = jindo.$Jindo.checkVarType(arguments, {
				'4str' : ["sClass:String+"]
			},"$Element#removeClass");
			var e = this._element;
			var sClassName = e.className;
			var aClass = (sClass+"").split(" ");
			var sEachClass;
			
			for (var i = aClass.length - 1; i >= 0 ; i--){
				sClassName = (" "+sClassName+" ").replace(new RegExp("\\b"+aClass[i]+"\\s+","g")," ");
			}
			
			e.className = sClassName.replace(/\s+$/, "").replace(/^\s+/, "");

			return this;
		};
//	}
//	return this.removeClass.apply(this,arguments);
//	
//};

//-!jindo.$Element.prototype.toggleClass start(jindo.$Element.prototype.addClass,jindo.$Element.prototype.removeClass,jindo.$Element.prototype.hasClass)!-//
/**
 
 * @description toogleClass() 메서드는 HTML 요소에 클래스가 이미 적용되어 있으면 제거하고 만약 없으면 추가한다. 파라미터를 하나만 입력할 경우 파라미터로 지정한 클래스가 사용되고 있으면 제거하고 사용되고 있지 않으면 추가한다. 만약 두 개의 파라미터를 입력할 경우 두 클래스 중에서 사용하고 있는 것을 제거하고 나머지 클래스를 추가한다.
 *
 * @param1 {String+} sClass 추가 혹은 제거할 클래스 이름.
 * @return1 {$Element} 클래스가 추가 혹은 제거된 현재의 $Element 객체
 *
 * @param2 {String+} sClass 추가 혹은 제거할 클래스 이름.
 * @param2 {String+} sClass2 추가 혹은 제거할 클래스 이름.
 * @return2 {$Element} 클래스가 추가 혹은 제거된 현재의 $Element 객체
 *
 * @import core.$Element[hasClass,addClass,removeClass]
 * @see $Element#className
 * @see $Element#hasClass
 * @see $Element#addClass
 * @see $Element#removeClass
 * @example
// 파라미터가 하나인 경우
$Element("sample_span1").toggleClass("highlight");
$Element("sample_span2").toggleClass("highlight");

//Before
<p>Hello and <span id="sample_span1" class="selected highlight">Goodbye</span></p>
<p>Hello and <span id="sample_span2" class="selected">Goodbye</span></p>

//After
<p>Hello and <span id="sample_span1" class="selected">Goodbye</span></p>
<p>Hello and <span id="sample_span2" class="selected highlight">Goodbye</span></p>

 * @example
// 파라미터가 두 개인 경우
$Element("sample_span1").toggleClass("selected", "highlight");
$Element("sample_span2").toggleClass("selected", "highlight");

//Before
<p>Hello and <span id="sample_span1" class="highlight">Goodbye</span></p>
<p>Hello and <span id="sample_span2" class="selected">Goodbye</span></p>

//After
<p>Hello and <span id="sample_span1" class="selected">Goodbye</span></p>
<p>Hello and <span id="sample_span2" class="highlight">Goodbye</span></p>
   
 */
jindo.$Element.prototype.toggleClass = function(sClass, sClass2) {
	//-@@$Element.toggleClass-@@//
	var ___checkVarType = jindo.$Jindo.checkVarType;
	if(this._element.classList){
		jindo.$Element.prototype.toggleClass = function(sClass, sClass2){
			var oArgs = ___checkVarType(arguments, {
				'4str'  : ["sClass:String+"],
				'4str2' : ["sClass:String+", "sClass2:String+"]
			},"$Element#toggleClass");
			
			switch(oArgs+"") {
				case '4str':
					this._element.classList.toggle(sClass+"");
					break;
				case '4str2':
					sClass = sClass+"";
					sClass2 = sClass2+"";
					if(this.hasClass(sClass)){
						this.removeClass(sClass);
						this.addClass(sClass2);
					}else{
						this.addClass(sClass);
						this.removeClass(sClass2);
					}
					
			}
			return this;
		};
	} else {
		jindo.$Element.prototype.toggleClass = function(sClass, sClass2){
			var oArgs = ___checkVarType(arguments, {
				'4str'  : ["sClass:String+"],
				'4str2' : ["sClass:String+", "sClass2:String+"]
			},"$Element#toggleClass");
			
			sClass2 = sClass2 || "";
			if (this.hasClass(sClass)) {
				this.removeClass(sClass);
				if (sClass2) this.addClass(sClass2);
			} else {
				this.addClass(sClass);
				if (sClass2) this.removeClass(sClass2);
			}

			return this;
		};
	}
	return this.toggleClass.apply(this,arguments);
};

//-!jindo.$Element.prototype.cssClass start(jindo.$Element.prototype.addClass,jindo.$Element.prototype.removeClass,jindo.$Element.prototype.hasClass)!-//
/**
 
 * @description cssClass는 클래스를 추가, 삭제, 확인을 할 수 있다.
 *
 * @param1 {String+} sName class명(String)
 * @return1 {Boolean} 해당 클래스가 있는지 여부의 불린 값을 반환한다.
 *
 * @param2 {String+} sName class명(String),
 * @param2 {Boolean} bClassType true인 경우는 클래스를 추가하고 false인 경우는 클래스를 삭제한다.
 * @return2 {$Element} $Element인스턴스를 반환한다.
 *
 * @param3 {Hash+} oList 하나 이상의 속성명과 불린값을 가지는 객체(Object) 또는 해시 객체($H()객체).
 * @return3 {$Element} $Element인스턴스를 반환한다.
 *
 * @throws {jindo.$Except.EITHER_STRING_OR_OBJECT_OR_HASH} sName이 문자, 오브젝트 나 $Hash여야 한다.
 * @see $Element#addClass
 * @see $Element#removeClass
 * @example
 
// 첫 번째 파라메터만 넣은 경우
<div id="sample_span1"/>
$Element("sample_span1").cssClass("highlight");// false

// 두 번째 파라메터도 넣은 경우.
$Element("sample_span1").cssClass("highlight",true);
-> <div id="sample_span1" class="highlight"/>

$Element("sample_span1").cssClass("highlight",false);
-> <div id="sample_span1" class=""/>

// 첫 번째 파라메터를 오브젝트로 넣은 경우.
<div id="sample_span1" class="bar"/>

$Element("sample_span1").cssClass({
	"foo": true,
	"bar" : false
});
-> <div id="sample_span1" class="foo"/>
  
 */
jindo.$Element.prototype.cssClass = function(vClass, bCondition){
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'g'  : ["sClass:String+"],
		's4bln' : ["sClass:String+", "bCondition:Boolean"],
		's4obj' : ["oObj:Hash+"]
	},"$Element#cssClass");
			
	switch(oArgs+""){
		case "g":
			return this.hasClass(oArgs.sClass);
			
		case "s4bln":
			if(oArgs.bCondition){
				this.addClass(oArgs.sClass);
			}else{
				this.removeClass(oArgs.sClass);
			}
			return this;
			
		case "s4obj":
			var e = this._element;
			vClass = oArgs.oObj;
			var sClassName = e.className;
			for(var sEachClass in vClass){
				if (vClass.hasOwnProperty(sEachClass)) {
					if(vClass[sEachClass]){
						if ((" " + sClassName + " ").indexOf(" " + sEachClass + " ") == -1) {
							sClassName = (sClassName+" "+sEachClass).replace(/^\s+/, "");
						}
					}else{
						if ((" " + sClassName + " ").indexOf(" " + sEachClass + " ") > -1) {
							sClassName = (" "+sClassName+" ").replace(" "+sEachClass+" ", " ").replace(/\s+$/, "").replace(/^\s+/, "");
						}
					}
				}
			}
			e.className = sClassName;
			return this;
			
	}


};	
	

//-!jindo.$Element.prototype.text start!-//
/**
 
 * @description text() 메서드는 HTML 요소의 텍스트 노드 값을 가져오거나 설정한다. 파라미터를 생략하면 텍스트 노드의 값을 가져오고, 파라미터를 지정하면 텍스트 노드를 지정한 값으로 설정한다.
 *
 * @param1 {Void}
 * @return1 {String} HTML 요소의 텍스트 노드(String)를 반환.
 *
 * @param2 {String+} sText 지정할 텍스트.
 * @return2 {$Element} 지정한 값으로 설정된 $Element() 객체를 반환.
 *
 * @example
<ul id="sample_ul">
	<li>하나</li>
	<li>둘</li>
	<li>셋</li>
	<li>넷</li>
</ul>

...

// 텍스트 노드 값 조회
$Element("sample_ul").text();
// 결과
//	하나
//	둘
//	셋
//	넷
@example
// 텍스트 노드 값 설정
$Element("sample_ul").text('다섯');

//Before
<ul id="sample_ul">
	<li>하나</li>
	<li>둘</li>
	<li>셋</li>
	<li>넷</li>
</ul>

//After
<ul id="sample_ul">다섯</ul>
@example
// 텍스트 노드 값 설정
$Element("sample_p").text("New Content");

//Before
<p id="sample_p">
	Old Content
</p>

//After
<p id="sample_p">
	New Content
</p>
  
 */
jindo.$Element.prototype.text = function(sText) {
	//-@@$Element.text-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'g'  : [],
		's4str' : ["sText:String+"],
		's4num' : [jindo.$Jindo._F("sText:Numeric")],
		's4bln' : ["sText:Boolean"]
	},"$Element#text");
	
	var ele = this._element;
	var tag = this.tag;
	
	switch(oArgs+""){
		case "g":
			var	prop = (ele.innerText !== undefined)?"innerText":"textContent";
			if (tag == "textarea" || tag == "input") prop = "value";
			return ele[prop];
		case "s4str":
		case "s4num":
		case "s4bln":
			var	prop = (ele.innerText !== undefined)?"innerText":"textContent";
			if (tag == "textarea" || tag == "input") prop = "value";
			sText += "";
			try {
				/*
				 
 * Opera 11.01에서 textContext가 Get일때 정상적으로 동작하지 않음. 그래서 get일 때는 innerText을 사용하고 set하는 경우는 textContent을 사용한다.(http://devcafe.nhncorp.com/ajaxui/295768)
  
				 */ 
				if (prop!="value") prop = (ele.textContent !== undefined)?"textContent":"innerText";
				ele[prop] = sText+""; 
			} catch(e) {
				return ele.innerHTML = (sText+"").replace(/&/g, '&amp;').replace(/</g, '&lt;');
			}
			return this;
			
	}
};

//-!jindo.$Element.prototype.html start!-//
/**
 
 * @description html() 메서드는 HTML 요소의 내부 HTML 코드(innerHTML)를 가져오거나 설정한다. 파라미터를 생략하면 내부 HTML 코드를 가져오고, 파라미터를 지정하면 내부 HTML 코드를 지정한 값으로 변경한다.
 * @caution IE8에서 colgroup의 col을 수정하려고 할 때 colgroup을 삭제하고 다시 만든 후 col을 추가해야 합니다. 
 *
 * @param1 {Void}
 * @return1 {String} 내부 HTML(String)을 반환.
 *
 * @param2 {String+} sHTML 내부 HTML 코드로 설정할 HTML 문자열.
 * @return2 {$Element} 지정한 값으로 설정된 $Element() 객체를 반환.
 *
 * @see <a href="https://developer.mozilla.org/en/DOM/element.innerHTML">element.innerHTML</a> - MDN Docs
 * @see $Element#outerHTML
 * @example
 <div id="sample_container">
  	<p><em>Old</em> content</p>
 </div>

...

// 내부 HTML 조회
$Element("sample_container").html(); // <p><em>Old</em> content</p>

 * @example
// 내부 HTML 설정
$Element("sample_container").html("<p>New <em>content</em></p>");

//Before
<div id="sample_container">
 	<p><em>Old</em> content</p>
</div>

//After
<div id="sample_container">
 	<p>New <em>content</em></p>
</div>
  
 */
jindo.$Element.prototype.html = function(sHTML) {
	//-@@$Element.html-@@//
	var isIe = _JINDO_IS_IE;
	var isFF = _JINDO_IS_FF;
	var _param = {
				'g'  : [],
				's4str' : [jindo.$Jindo._F("sText:String+")],
				's4num' : ["sText:Numeric"],
				's4bln' : ["sText:Boolean"]
	}
	var ___checkVarType = jindo.$Jindo.checkVarType;
	if (isIe) {
		jindo.$Element.prototype.html = function(sHTML){
			var oArgs = ___checkVarType(arguments,_param,"$Element#html");
			switch(oArgs+""){
				case "g":
					return this._element.innerHTML;
					
				case "s4str":
				case "s4num":
				case "s4bln":
					sHTML += ""; 
					if(jindo.cssquery) jindo.cssquery.release();
					var oEl = this._element;
	
	
					while(oEl.firstChild){
						oEl.removeChild(oEl.firstChild);
					}
					/*
					 
	IE 나 FireFox 의 일부 상황에서 SELECT 태그나 TABLE, TR, THEAD, TBODY 태그에 innerHTML 을 셋팅해도
	문제가 생기지 않도록 보완 - hooriza
  
					 */
					var sId = 'R' + new Date().getTime() + parseInt(Math.random() * 100000,10);
					var oDoc = oEl.ownerDocument || oEl.document || document;
	
					var oDummy;
					var sTag = oEl.tagName.toLowerCase();
	
					switch (sTag) {
						case 'select':
						case 'table':
							oDummy = oDoc.createElement("div");
							oDummy.innerHTML = '<' + sTag + ' class="' + sId + '">' + sHTML + '</' + sTag + '>';
							break;
		
						case 'tr':
						case 'thead':
						case 'tbody':
						case 'colgroup':
							oDummy = oDoc.createElement("div");
							oDummy.innerHTML = '<table><' + sTag + ' class="' + sId + '">' + sHTML + '</' + sTag + '></table>';
							break;
		
						default:
							oEl.innerHTML = sHTML;
							
					}
	
					if (oDummy) {
	
						var oFound;
						for (oFound = oDummy.firstChild; oFound; oFound = oFound.firstChild)
							if (oFound.className == sId) break;
	
						if (oFound) {
							var notYetSelected = true;
							for (var oChild; oChild = oEl.firstChild;) oChild.removeNode(true); // innerHTML = '';
	
							for (var oChild = oFound.firstChild; oChild; oChild = oFound.firstChild){
								if(sTag=='select'){
									/*
									 
* ie에서 select테그일 경우 option중 selected가 되어 있는 option이 있는 경우 중간에
* selected가 되어 있으면 그 다음 부터는 계속 selected가 true로 되어 있어
* 해결하기 위해 cloneNode를 이용하여 option을 카피한 후 selected를 변경함. - mixed
  
									 */
									var cloneNode = oChild.cloneNode(true);
									if (oChild.selected && notYetSelected) {
										notYetSelected = false;
										cloneNode.selected = true;
									}
									oEl.appendChild(cloneNode);
									oChild.removeNode(true);
								}else{
									oEl.appendChild(oChild);
								}
	
							}
							oDummy.removeNode && oDummy.removeNode(true);
	
						}
	
						oDummy = null;
	
					}
	
					return this;
					
			}
		};
	}else if(isFF){
		jindo.$Element.prototype.html = function(sHTML){
			var oArgs = ___checkVarType(arguments,_param,"$Element#html");
			switch(oArgs+""){
				case "g":
					return this._element.innerHTML;
					
				case "s4str":
				case "s4num":
				case "s4bln":
					sHTML += ""; 
					var oEl = this._element;
					
					if(!oEl.parentNode){
						/*
						 
	IE 나 FireFox 의 일부 상황에서 SELECT 태그나 TABLE, TR, THEAD, TBODY 태그에 innerHTML 을 셋팅해도
	문제가 생기지 않도록 보완 - hooriza
  
						 */
						var sId = 'R' + new Date().getTime() + parseInt(Math.random() * 100000,10);
						var oDoc = oEl.ownerDocument || oEl.document || document;
	
						var oDummy;
						var sTag = oEl.tagName.toLowerCase();
	
						switch (sTag) {
						case 'select':
						case 'table':
							oDummy = oDoc.createElement("div");
							oDummy.innerHTML = '<' + sTag + ' class="' + sId + '">' + sHTML + '</' + sTag + '>';
							break;
	
						case 'tr':
						case 'thead':
						case 'tbody':
						case 'colgroup':
							oDummy = oDoc.createElement("div");
							oDummy.innerHTML = '<table><' + sTag + ' class="' + sId + '">' + sHTML + '</' + sTag + '></table>';
							break;
	
						default:
							oEl.innerHTML = sHTML;
							
						}
	
						if (oDummy) {
							var oFound;
							for (oFound = oDummy.firstChild; oFound; oFound = oFound.firstChild)
								if (oFound.className == sId) break;
	
							if (oFound) {
								for (var oChild; oChild = oEl.firstChild;) oChild.removeNode(true); // innerHTML = '';
	
								for (var oChild = oFound.firstChild; oChild; oChild = oFound.firstChild){
									oEl.appendChild(oChild);
								}
	
								oDummy.removeNode && oDummy.removeNode(true);
	
							}
	
							oDummy = null;
	
						}
					}else{
						oEl.innerHTML = sHTML;
					}
					
	
					return this;
					
			}
		};
	}else{
		jindo.$Element.prototype.html = function(sHTML){
			var oArgs = ___checkVarType(arguments,_param,"$Element#html");
			switch(oArgs+""){
				case "g":
					return this._element.innerHTML;
					
				case "s4str":
				case "s4num":
				case "s4bln":
					sHTML += ""; 
					var oEl = this._element;
					oEl.innerHTML = sHTML;
					return this;
					
			}
			
		};
	}
	
	return this.html.apply(this,arguments);
};

//-!jindo.$Element.prototype.outerHTML start!-//
/**
 
 * @description outerHTML() 메서드는 HTML 요소의 내부 코드(innerHTML)에 해당하는 부분과 자신의 태그를 포함한 HTML 코드를 반환한다.
 * @return {String} HTML 코드.
 * @see $Element#html
 * @example
<h2 id="sample0">Today is...</h2>

<div id="sample1">
  	<p><span id="sample2">Sample</span> content</p>
</div>

...

// 외부 HTML 값을 조회
$Element("sample0").outerHTML(); // <h2 id="sample0">Today is...</h2>

$Element("sample1").outerHTML(); // <div id="sample1">  <p><span id="sample2">Sample</span> content</p>  </div>

$Element("sample2").outerHTML(); // <span id="sample2">Sample</span>
  
 */
jindo.$Element.prototype.outerHTML = function() {
	//-@@$Element.outerHTML-@@//
	var e = this._element;
	if (e.outerHTML !== undefined) return e.outerHTML;
	
	var oDoc = e.ownerDocument || e.document || document;
	var div = oDoc.createElement("div");
	var par = e.parentNode;

    /**
      상위노드가 없으면 innerHTML반환
     */
	if(!par) return e.innerHTML;

	par.insertBefore(div, e);
	div.style.display = "none";
	div.appendChild(e);

	var s = div.innerHTML;
	par.insertBefore(e, div);
	par.removeChild(div);

	return s;
};

//-!jindo.$Element.prototype.toString start(jindo.$Element.prototype.outerHTML)!-//
/**
 
 * @function
 * @description toString() 메서드는 해당 요소의 코드를 문자열로 변환하여 반환한다(outerHTML 메서드와 동일).
 * @return {String} HTML 코드.
 * @see $Element#outerHTML
  
 */
jindo.$Element.prototype.toString = jindo.$Element.prototype.outerHTML;

//-!jindo.$Element.prototype.attach start(jindo.$Element.prototype.isEqual,jindo.$Element.prototype.isChildOf,jindo.$Element.prototype.detach, jindo.$Element.event_etc, jindo.$Element.domready, jindo.$Element.unload, jindo.$Event)!-//
/**
 
 * @description 엘리먼트에 이벤트를 할당한다.
 * @since 2.0.0
 * @param {String+} sEvent 이벤트 명
   <ul>
	<li>이벤트 이름에는 on 접두어를 사용하지 않는다.</li>
	<li>마우스 휠 스크롤 이벤트는 mousewheel 로 사용한다.</li>
	<li>기본 이벤트 외에 추가로 사용이 가능한 이벤트로 domready, mouseenter, mouseleave, mousewheel이 있다.</li>
   </ul>
 * @param {Function+} fpCallback 이벤트가 발생했을 때 실행되는 콜백함수.
 * @see $Element#detach
 * @see $Element#delegate
 * @see $Element#undelegate
 * @return {$Element} $Element() 객체.
 * @since 2.0.0부터 사용가능
 * @example
function normalEvent(e){
	alert("click");
}
function groupEvent(e){
	alert("group click");
}

//일반적인 이벤트 할당.
$Element("some_id").attach("click",normalEvent);
  
 */   
jindo.$Element.prototype.attach = function(sEvent, fpCallback){
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str'  : ["sEvent:String+", "fpCallback:Function+"]
	},"$Element#attach");
	return this._add("normal",sEvent.toLowerCase(),null,fpCallback);
};

//-!jindo.$Element.prototype.detach start(jindo.$Element.prototype.attach)!-//
/**
 
 * @description detach() 메서드는 엘리먼트에 등록된 이벤트 핸들러를 등록 해제한다.
 * @since 2.0.0
 * @param {String+} sEvent 이벤트 명
 * @param {Function+} fpCallback 이벤트가 발생했을 때 실행되는 콜백함수.
 * @see $Element#detach
 * @see $Element#delegate
 * @see $Element#undelegate
 * @return {$Element} $Element() 객체.
 * @since 2.0.0부터 사용가능
 * @example
function normalEvent(e){
	alert("click");
}
function groupEvent(e){
	alert("group click");
}
function groupEvent2(e){
	alert("group2 click");
}
function groupEvent3(e){
	alert("group3 click");
}

//일반적인 이벤트 할당.
$Element("some_id").attach("click",normalEvent);
//일반적인 이벤트 해제. 일반적인 이벤트 해제는 반드시 함수를 넣어야지만 해제가 가능하다.
$Element("some_id").detach("click",normalEvent);

  
 */
jindo.$Element.prototype.detach = function(sEvent, fpCallback){
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'group_for_string'  : ["sEvent:String+"],
		'4fun'  : ["sEvent:String+", "fpCallback:Function+"]
	},"$Element#detach");
	return this._del("normal",sEvent.toLowerCase(),null,fpCallback);
};

//-!jindo.$Element.prototype.delegate start(jindo.$Element.prototype.undelegate, jindo.$Element.event_etc, jindo.$Element.domready, jindo.$Element.unload, jindo.$Event)!-//
/**

 * @description delegate() 메서드는 이벤트 위임(Event Deligation) 방식으로 이벤트를 처리한다. 이벤트 위임이란 이벤트 버블링을 이용하여 이벤트를 관리하는 상위 요소를 따로 두어 효율적으로 이벤트를 관리하는 방법이다.
 * @param {String+} sEvent 이벤트 이름.<br>on 접두어는 생략한다.
 * @param {Variant} vFilter 특정 HTML 요소에 대해서만 이벤트 핸들러를 실행하도록 하기 위한 필터.<br>
 * 필터는 CSS 선택자(String)와 함수(Function)으로 지정할 수 있다.
<ul>
	<li>문자열을 입력하면 CSS 선택자로 이벤트 핸들러를 실행시킬 요소를 지정할 수 있다.</li>
	<li>Boolean 값을 반환하는 함수를 파라미터 입력할 수 있다. 이 함수를 사용할 경우 함수가 true를 반환할 때 실행할 콜백 함수(fCallback)를 파라미터로 추가 지정해야 한다.
</ul>
 * @param {Function+} [fCallback] vFilter에 지정된 함수가 true를 반환하는 경우 실행할 콜백 함수.<br>콜백 함수의 첫 번째 파라미터는 HTML 요소 자신이고, 두 번째 파라미터는 이벤트가 발생한 HTML 요소가 입력된다.
 * @return {$Element} $Element() 객체.
 * @throws {jindo.$Except.ONLY_STRING_TYPE} 첫 번째 인자는 문자여야 한다.
 * @throws {jindo.$Except.EITHER_STRING_OR_FUNCTION} 두 번째 인자는 문자이거나 함수여야 한다.
 * @throws {jindo.$Except.ONLY_FUNCTION_TYPE} 세 번째 인자는 함수여야 한다.
 * @since 1.4.6부터 사용 가능.
 * @since 2.0.0부터  domready, mousewheel, mouseleave, mouseenter 이벤트 사용가능.
 * @see $Element#attach
 * @see $Element#detach
 * @see $Element#undelegate
 * @example
	<ul id="parent">
		<li class="odd">1</li>
		<li>2</li>
		<li class="odd">3</li>
		<li>4</li>
	</ul>

	// CSS 셀렉터를 필터로 사용하는 경우
	$Element("parent").delegate("click",
		".odd", 			// 필터
		function(eEvent){	// 콜백 함수
			alert("odd 클래스를 가진 li가 클릭 될 때 실행");
		});
 * @example
	<ul id="parent">
		<li class="odd">1</li>
		<li>2</li>
		<li class="odd">3</li>
		<li>4</li>
	</ul>

	// 함수를 필터로 사용하는 경우
	$Element("parent").delegate("click",
		function(oEle,oClickEle){	// 필터
			return oClickEle.innerHTML == "2"
		},
		function(eEvent){			// 콜백 함수
			alert("클릭한 요소의 innerHTML이 2인 경우에 실행");
		});
  
*/
jindo.$Element.prototype.delegate = function(sEvent , vFilter , fpCallback){
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str'  : ["sEvent:String+", "vFilter:String+", "fpCallback:Function+"],
		'4fun'  : ["sEvent:String+", "vFilter:Function+", "fpCallback:Function+"]
	},"$Element#delegate");
	return this._add("delegate",sEvent.toLowerCase(),vFilter,fpCallback);
};

//-!jindo.$Element.prototype.undelegate start(jindo.$Element.prototype.delegate)!-//
/**

 * @description undelegate() 메서드는 delegate() 메서드로 등록한 이벤트 위임을 해제한다.
 * @param {String+} sEvent 이벤트 위임을 등록할 때 사용한 이벤트 이름.<br>on 접두어는 생략한다. 
 * @param {Variant} vFilter 이벤트 위임을 등록할 때 지정한 필터. 안넣으면 엘리먼트에 delegate로 할당한 이벤트 중 특정 이벤트의 모든 조건이 사라진다.
 * @param {Function+} [fCallback] 이벤트 위임을 등록할 때 지정한 콜백 함수. 
 * @return {$Element} $Element() 객체.
 * @throws {jindo.$Except.ONLY_STRING_TYPE} 첫 번째 인자는 문자여야 한다.
 * @throws {jindo.$Except.EITHER_STRING_OR_FUNCTION} 두 번째 인자는 문자이거나 함수여야 한다.
 * @throws {jindo.$Except.ONLY_FUNCTION_TYPE} 세 번째 인자는 함수여야 한다.
 * @since 1.4.6부터 사용 가능.
 * @see $Element#attach
 * @see $Element#detach
 * @see $Element#delegate
 * @example
<ul id="parent">
	<li class="odd">1</li>
	<li>2</li>
	<li class="odd">3</li>
	<li>4</li>
</ul>

// 콜백 함수
function fnOddClass(eEvent){
	alert("odd 클래스를 가진 li가 클릭 될 때 실행");
};
function fnOddClass2(eEvent){
	alert("odd 클래스를 가진 li가 클릭 될 때 실행2");
};
function fnOddClass3(eEvent){
	alert("odd 클래스를 가진 li가 클릭 될 때 실행3");
};

$Element("parent").delegate("click", ".odd", fnOddClass);	// 이벤트 델리게이션 사용

$Element("parent").undelegate("click", ".odd", fnOddClass);	// fnOddClass만 이벤트 해제
  
 */
jindo.$Element.prototype.undelegate = function(sEvent , vFilter , fpCallback){
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str'  : ["sEvent:String+", "vFilter:String+", "fpCallback:Function+"],
		'4fun'  : ["sEvent:String+", "vFilter:Function+", "fpCallback:Function+"],
		'group_for_string'  : ["sEvent:String+", "vFilter:String+"],
		'group_for_function'  : ["sEvent:String+", "vFilter:Function+"]
	},"$Element#undelegate");
	return this._del("delegate",sEvent.toLowerCase(),vFilter,fpCallback);
};

//-!jindo.$Element.event_etc.hidden start!-//
/**

 * 이벤트를 추가하는 내부 함수.
 * @ignore
 * @param {String} sType delegate인지 일반 이벤트인지 확인.
 * @param {String} sEvent 이벤트명.
 * @param {String|Function} vFilter 필터 함수.
 * @param {Function} fpCallback 이벤트 콜백함수.
  
 */
jindo.$Element.prototype._add = function(sType, sEvent , vFilter , fpCallback){

	var oManager = jindo.$Element.eventManager;
	var oEvent = oManager.splitGroup(sEvent);
	sEvent = oEvent.event;
	var sGroup = oEvent.group;
	
	if((!document.addEventListener)&&("domready"==sEvent)){
		if(window.top != window) throw new Error("Domready Event doesn't work in the iframe.");
		jindo.$Element._domready(this._element, fpCallback);
		return this;
	}
	
	fpCallback = oManager.revisionCallback(sType, sEvent, fpCallback);
	sEvent = oManager.revisionEvent(sType, sEvent);
	
	if(!oManager.isInit(this._key)){
		oManager.init(this._key, this._element);
	}
	
	if(!oManager.hasEvent(this._key, sEvent)){
		oManager.initEvent(this, sEvent,sGroup);
	}
	
	if(!oManager.hasGroup(this._key, sEvent, sGroup)){
		oManager.initGroup(this._key, sEvent, sGroup);
	}
	
	oManager.addEventListener(this._key, sEvent, sGroup, sType, vFilter, fpCallback);

	return this;
};

/**

 * 이벤트를 삭제할 때 사용하는 내부 함수.
 * @ignore
 * @param {String} sType 이벤트 delegate인지 일반 이벤트인지 확인.
 * @param {String} sEvent 이벤트명.
 * @param {String|Function} vFilter 필터 함수.
 * @param {Function} fpCallback 이벤트 콜백함수.
  
 */
jindo.$Element.prototype._del = function(sType, sEvent, vFilter, fpCallback){
	var oManager = jindo.$Element.eventManager;
	var oEvent = oManager.splitGroup(sEvent);
	sEvent = oEvent.event;
	var sGroup = oEvent.group;
	sEvent = oManager.revisionEvent(sType, sEvent);
	if((!document.addEventListener)&&("domready"==sEvent)){
		var aNewDomReady = [];
		var list = jindo.$Element._domready.list;
		for(var i=0,l=list.length; i < l ;i++){
			if(list[i]!=fpCallback){
				aNewDomReady.push(list[i]);
			}	
		}
		jindo.$Element._domready.list = aNewDomReady;
		return this;
	}
	
	var NONE_GROUP = "_jindo_event_none";
	if(sGroup === NONE_GROUP && !jindo.$Jindo.isFunction(fpCallback)){
		throw new jindo.$Error(jindo.$Except.HAS_FUNCTION_FOR_GROUP,"$Element#"+(sType=="normal"?"detach":"delegate"));
	}
	
	oManager.removeEventListener(this._key, sEvent, sGroup, sType, vFilter, fpCallback);
	return this;
};

/**

 * $Element의 이벤트를 관리하는 객체.
 * @ignore
  
 */
jindo.$Element.eventManager = (function(){
	var eventStore = {};
	var NONE_GROUP = "_jindo_event_none";
	function bind(fpFunc, oScope, aPram){
		return function() {
			var args = _slice.call( arguments, 0);
			if (aPram.length) args = aPram.concat(args);
			return fpFunc.apply(oScope, args);
		};
	}
	var touch;
	
	if(_JINDO_IS_MO){
		touch =  {
			 "mousedown":"touchstart",
			 "mousemove":"touchmove",
			 "mouseup":"touchend"
		};
	}else{
		touch = {
			 "mousedown":"mousedown",
			 "mousemove":"mousemove",
			 "mouseup":"mouseup"
		};
	}
	return {
		/**
		
 * mouseenter나 mouseleave 이벤트가 없는 브라우저에서 이벤트를 할당 할 때 동작하게끔 콜백함수를 조정하는 함수.
 * IE에서 delegate에 mouseenter나 mouseleave을 사용할 때도 사용. 
 * @ignore
 * @param {String} sType 이벤트 delegate인지 일반 이벤트인지 확인.
 * @param {String} sEvent 이벤트명
 * @param {Function} fpCallback 이벤트 콜백함수
  
		 */
		revisionCallback : function(sType, sEvent, fpCallback){
			if((document.addEventListener !== undefined&&(sEvent=="mouseenter"||sEvent=="mouseleave")) || (_JINDO_IS_IE&&(sType=="delegate")&&(sEvent=="mouseenter"||sEvent=="mouseleave"))){
				var fpWrapCallback = jindo.$Element.eventManager._fireWhenElementBoundary(sType, fpCallback);
				fpWrapCallback._origin_ = fpCallback;
				fpCallback = fpWrapCallback;
			}
			return fpCallback;
		},
		/**
		
 * mouseenter나 mouseleave 이벤트가 없는 브라우저에서 에뮬레이션해주는 함수.
 * @ignore
 * @param {String} sType 이벤트 delegate인지 일반 이벤트인지 확인.
 * @param {Function} fpCallback 이벤트 콜백함수
  
		 */
		_fireWhenElementBoundary : function(sType, fpCallback){
			return function(oEvent){
				var woRelatedElement = oEvent.relatedElement?jindo.$Element(oEvent.relatedElement):null;
				var eElement = oEvent.currentElement;
				if(sType == "delegate"){
					eElement = oEvent.element;
				}
				if(woRelatedElement && (woRelatedElement.isEqual(eElement) || woRelatedElement.isChildOf(eElement))) return;
				
				fpCallback(oEvent);
			}
		},
		/**
        
 * 브라우저마다 차이있는 이벤트 명을 보정하는 함수.
 * @ignore
 * @param {String} sType 이벤트 delegate인지 일반 이벤트인지 확인.
 * @param {String} sEvent 이벤트명
  
		 */
		revisionEvent : function(sType, sEvent){
			if (document.addEventListener !== undefined) {
				this.revisionEvent = function(sType, sEvent){
					sEvent = sEvent.toLowerCase();
					if (sEvent == "domready") {
						sEvent = "DOMContentLoaded";	
					}else if (sEvent == "mousewheel" && !_JINDO_IS_WK && !_JINDO_IS_OP && !_JINDO_IS_IE) {
						/*
						 
  IE9인 경우도 DOMMouseScroll이 동작하지 않음.
  
						 */
						sEvent = "DOMMouseScroll";	
					}else if (sEvent == "mouseenter" && !_JINDO_IS_IE){
						sEvent = "mouseover";
					}else if (sEvent == "mouseleave" && !_JINDO_IS_IE){
						sEvent = "mouseout";
					}else if(sEvent == "transitionend"||sEvent == "transitionstart"){
						var sPrefix, sPostfix = sEvent.replace("transition","");
						
						sPostfix = sPostfix.substr(0,1).toUpperCase() + sPostfix.substr(1);
						
						if(document.body.style.WebkitTransition !== undefined){
							sPrefix = "webkit";
						}else if(document.body.style.OTransition !== undefined){
							sPrefix = "o";
						}else if(document.body.style.MsTransition !== undefined){
							sPrefix = "ms";
						}
						sEvent = (sPrefix?sPrefix+"Transition":"transition")+sPostfix;
					}else if(sEvent == "animationstart"||sEvent == "animationend"||sEvent == "animationiteration"){
						var sPrefix, sPostfix = sEvent.replace("animation","");
						
						sPostfix = sPostfix.substr(0,1).toUpperCase() + sPostfix.substr(1);
						
						if(document.body.style.WebkitAnimationName !== undefined){
							sPrefix = "webkit";
						}else if(document.body.style.OAnimationName !== undefined){
							sPrefix = "o";
						}else if(document.body.style.MsTransitionName !== undefined){
							sPrefix = "ms";
						}
						sEvent = (sPrefix?sPrefix+"Animation":"animation")+sPostfix;
					}else if("mousedown|mousemove|mouseup".indexOf(sEvent) > -1){
						sEvent = touch[sEvent];
					}		
					return sEvent;
				}
			}else{
				this.revisionEvent = function(sType, sEvent){
					/*
					
  IE에서 delegate에 mouseenter나 mouseleave을 사용할 때는 mouseover나 mouseleave을 이용하여 에뮬레이션 하도록 수정해야 함.
  
					 */
					if (sType=="delegate"&&sEvent == "mouseenter"){
						sEvent = "mouseover";
					}else if (sType=="delegate"&&sEvent == "mouseleave"){
						sEvent = "mouseout";
					}else if("mousedown|mousemove|mouseup".indexOf(sEvent) > -1){
						sEvent = touch[sEvent];
					}
					return sEvent;
				}
			}
			return this.revisionEvent(sType, sEvent);
		},
		/**
		
 * 테스트를 위한 함수.
 * @ignore
  
		 */
		test : function(){
			return eventStore;
		},
		/**
		
		 * 키에 해당하는 함수가 초기화 되었는지 확인하는 함수.
		 * @param {String} sKey 엘리먼트 키값
  
		 */
		isInit : function(sKey){
			return !!eventStore[sKey];
		},
		/**
		
		 * 초기화 하는 함수.
		 * @ignore
		 * @param {String} sKey 엘리먼트 키값
		 * @param {Element} eEle 엘리먼트
  
		 */
		init : function(sKey, eEle){
			eventStore[sKey] = {
				"ele" : eEle,
				"event" : {}
			}
		},
		/**
        
		 * 키값의 해당하는 정보를 반환.
		 * @ignore
		 * @param {String} sKey 엘리먼트 키값
  
		 */
		getEventConfig : function(sKey){
			return eventStore[sKey];
		},
		/**
        
		 * 해당 키에 이벤트가 있는지 확인하는 함수. 
		 * @ignore
		 * @param {String} sKey 엘리먼트 키값
		 * @param {String} sEvent 이벤트명  
  
		 */
		hasEvent : function(sKey, sEvent){
			try{
				return !!eventStore[sKey]["event"][sEvent];
			}catch(e){
				return false;
			}
		},
		/**
        
		 * 해당 그룹이 있는지 확인하는 함수.
		 * @ignore
		 * @param {String} sKey 엘리먼트 키값 
		 * @param {String} sEvent 이벤트 명
		 * @param {String} sEvent 그룹명
  
		 */
		hasGroup : function(sKey, sEvent, sGroup){
			return !!eventStore[sKey]["event"][sEvent]["type"][sGroup];
		},
		/**
        
		 * 이벤트를 초기화 하는 함수
		 * @ignore
		 * @param {Hash+} oThis this 객체
		 * @param {String} sEvent 이벤트 명
		 * @param {String} sEvent 그룹명
  
		 */
		initEvent : function(oThis, sEvent, sGroup){
			var sKey = oThis._key;
			var oEvent = eventStore[sKey]["event"];
			
			var fAroundFunc = bind(function(sEvent,wEvent){
					
				wEvent = wEvent || window.event;
				if (wEvent.currentTarget === undefined) {
					wEvent.currentTarget = this._element;
				}
				var weEvent = jindo.$Event(wEvent);
				if(!weEvent.currentElement){
					weEvent.currentElement = this._element;
				}
				var oEle = weEvent.element;
				var oManager = jindo.$Element.eventManager;
				var oConfig = oManager.getEventConfig(weEvent.currentElement.__jindo__id);
				
				var oType = oConfig["event"][sEvent].type;
				for(var i in oType){
					if(oType.hasOwnProperty(i)){
						var aNormal = oType[i].normal;
						for(var j = 0, l = aNormal.length; j < l; j++){
							aNormal[j](weEvent);
						}
						var oDelegate = oType[i].delegate;
						var aResultFilter;
						var afpFilterCallback;
						for(var k in oDelegate){
							if(oDelegate.hasOwnProperty(k)){
								aResultFilter = oDelegate[k].checker(oEle);
								if(aResultFilter[0]){
									afpFilterCallback = oDelegate[k].callback;
									weEvent.element = aResultFilter[1];
									for(var m = 0, leng = afpFilterCallback.length; m < leng ; m++){
										afpFilterCallback[m](weEvent);
									}
								}
							}
						}
					}
					
				}
			},oThis,[sEvent]);
			
			oEvent[sEvent] = {
				"listener" : fAroundFunc,
				"type" :{}
			}			
			
			jindo.$Element._eventBind(oThis._element,sEvent,fAroundFunc,false);
			
		},
		/**
		
		 * 그룹을 초기화 하는 함수
		 * @ignore
		 * @param {String} sKey 엘리먼트 키값
		 * @param {String} sEvent 이벤트 명
		 * @param {String} sEvent 그룹명
  
		 */
		initGroup : function(sKey, sEvent, sGroup){
			var oType = eventStore[sKey]["event"][sEvent]["type"];
			oType[sGroup] = {
				"normal" : [],
				"delegate" :{}
			}
		},
		/**
        
		 * 이벤트를 추가하는 함수
		 * @ignore
		 * @param {String} ssKey 엘리먼트 키 값
		 * @param {String} sEvent 이벤트명
		 * @param {String} sGroup 그룹명
		 * @param {String} sType delegate인지 일반 이벤트인지 확인.
		 * @param {Function} vFilter 필터링하는 css선택자 혹은 필터함수
		 * @param {Function} fpCallback 콜백함수
  
		 */
		addEventListener : function(sKey, sEvent, sGroup, sType, vFilter, fpCallback){
			
			var oEventInfo = eventStore[sKey]["event"][sEvent]["type"][sGroup];
			
			if(sType === "normal"){
				oEventInfo.normal.push(fpCallback);
			}else if(sType === "delegate"){
				if(!this.hasDelegate(oEventInfo,vFilter)){
					this.initDelegate(eventStore[sKey].ele,oEventInfo,vFilter);
				}
				this.addDelegate(oEventInfo,vFilter,fpCallback);
			}
			
		},
		/**
         
		 * delegate가 있는지 확인하는 함수.
		 * @ignore
		 * @param {Hash+} oEventInfo 이벤트 정보객체
		 * @param {Function} vFilter 필터링하는 css선택자 혹은 필터함수
  
		 */
		hasDelegate : function(oEventInfo,vFilter){
			return !!oEventInfo.delegate[vFilter];
		},
		/**
        
		 * delegate를 초기화 하는 함수.
		 * @ignore
		 * @param {Hash+} eOwnEle
		 * @param {Hash+} oEventInfo 이벤트 정보객체
		 * @param {Function} vFilter 필터링하는 css선택자 혹은 필터함수
  
		 */
		initDelegate : function(eOwnEle,oEventInfo,vFilter){
			var fpCheck;
			if(jindo.$Jindo.isString(vFilter)){
				fpCheck = bind(function(eOwnEle,sCssquery,oEle){
					var eIncludeEle = oEle;
					var ___query = jindo.cssquery;
					var isIncludeEle = ___query.test(oEle, sCssquery);
					if(!isIncludeEle){
						var aPropagationElements = this._getParent(eOwnEle,oEle);
						for(var i = 0, leng = aPropagationElements.length ; i < leng ; i++){
							eIncludeEle = aPropagationElements[i];
							if(___query.test(eIncludeEle, sCssquery)){
								isIncludeEle = true;
								break;
							}
						}
					}
					return [isIncludeEle,eIncludeEle];
				},this,[eOwnEle,vFilter]);
			}else{
				fpCheck = bind(function(eOwnEle,fpFilter,oEle){
					var eIncludeEle = oEle;
					var isIncludeEle = fpFilter(eOwnEle,oEle);
					if(!isIncludeEle){
						var aPropagationElements = this._getParent(eOwnEle,oEle);
						for(var i = 0, leng = aPropagationElements.length ; i < leng ; i++){
							eIncludeEle = aPropagationElements[i];
							if(fpFilter(eOwnEle,eIncludeEle)){
								isIncludeEle = true;
								break;
							}
						}
					}
					return [isIncludeEle,eIncludeEle];
				},this,[eOwnEle,vFilter]);
			}
			oEventInfo.delegate[vFilter] = {
				"checker" : fpCheck,
				"callback" : []
			}
		},
		/**
        
		 * delegate를 추가하는 함수.
		 * @ignore
		 * @param {Hash+} oEventInfo 이벤트 정보객체
		 * @param {Function} vFilter 필터링하는 css선택자 혹은 필터함수
		 * @param {Function} fpCallback 콜백함수
  
		 */
		addDelegate : function(oEventInfo,vFilter,fpCallback){
			oEventInfo.delegate[vFilter].callback.push(fpCallback);
		},
		/**
        
		 * 이벤트를 해제하는 함수.
		 * @ignore
		 * @param {String} ssKey 엘리먼트 키 값
		 * @param {String} sEvent 이벤트명
		 * @param {String} sGroup 그룹명
		 * @param {String} sType delegate인지 일반 이벤트인지 확인.
		 * @param {Function} vFilter 필터링하는 css선택자 혹은 필터함수
		 * @param {Function} fpCallback 콜백함수
  
		 */
		removeEventListener : function(sKey, sEvent, sGroup, sType, vFilter, fpCallback){
			var oEventInfo;
			try{
				oEventInfo = eventStore[sKey]["event"][sEvent]["type"][sGroup];
			}catch(e){
				return;
			}
			var aNewCallback = [];
			var aOldCallback;
			if(sType === "normal"){
				aOldCallback = oEventInfo.normal;
			}else{
				aOldCallback  = oEventInfo.delegate[vFilter].callback;
			}
			if (sEvent == NONE_GROUP || jindo.$Jindo.isFunction(fpCallback)) {
				for(var i = 0, l = aOldCallback.length; i < l; i++){
					if((aOldCallback[i]._origin_||aOldCallback[i]) != fpCallback){
						aNewCallback.push(aOldCallback[i]);
					}
				}
			}
			if(sType === "normal"){
				
				delete oEventInfo.normal;
				oEventInfo.normal = aNewCallback;
			}else if(sType === "delegate"){
				delete oEventInfo.delegate[vFilter].callback;
				oEventInfo.delegate[vFilter].callback = aNewCallback;
			}
			
			this.cleanUp(sKey, sEvent);
		},
		/**
        
		 * 모든 이벤트를 해제하는 함수(절대 사용불가.)
		 * @ignore
  
		 */
		cleanUpAll : function(){
			var oEvent;
			for(var sKey in eventStore){
				if (eventStore.hasOwnProperty(sKey)) {
					this.cleanUpUsingKey(sKey, true);
				}
			}
		},
		/**
		
		 * 엘리먼트 키를 이용하여 모든 이벤트를 삭제할 때 사용.
		 * @ignore
		 * @param {String} sKey
  
		 */
		cleanUpUsingKey : function(sKey, bForce){
			var oEvent; 
			try{
				oEvent = eventStore[sKey].event;
			}catch(e){
				return;
			}
			for(var sEvent in oEvent){
				if (oEvent.hasOwnProperty(sEvent)) {
					this.cleanUp(sKey, sEvent, bForce);
				}
			}
		},
		/**
        
		 * 키에 해당하는 모든 이벤트를 해제하는 함수(절대 사용불가)
		 * @ignore
		 * @param {String} ssKey 엘리먼트 키 값
		 * @param {String} sEvent 이벤트명
		 * @param {Boolean} bForce 강제로 해제할 것인지 여부
  
		 */
		cleanUp : function(sKey, sEvent, bForce){
			var oTypeInfo; 
			try{
				oTypeInfo = eventStore[sKey]["event"][sEvent]["type"];
			}catch(e){
				return;
				
			}
			var oEventInfo;
			var bHasEvent = false;
			if(!bForce){
				for(var i in oTypeInfo){
					if (oTypeInfo.hasOwnProperty(i)) {
						oEventInfo = oTypeInfo[i];
						if(oEventInfo.normal.length){
							bHasEvent = true;
							break;
						}
						var oDele = oEventInfo.delegate;
						for(var j in oDele){ 
							if (oDele.hasOwnProperty(j)) {
								if(oDele[j].callback.length){
									bHasEvent = true;
									break;
								}
							}
						}
						if(bHasEvent) break;
						
					}
				}
			}
			if(!bHasEvent){
				jindo.$Element._unEventBind(eventStore[sKey].ele, sEvent, eventStore[sKey]["event"][sEvent]["listener"]);
				delete eventStore[sKey]["event"][sEvent];
				var bAllDetach = true;
				var oEvent = eventStore[sKey]["event"];
				for(var k in oEvent){
					if (oEvent.hasOwnProperty(k)) {
						bAllDetach = false;
						break;
					}
				}
				if(bAllDetach){
					delete eventStore[sKey];
				}
			}
		},
		/**
        
		 * 이벤트 명과 그룹을 구분하는 함수.
		 * @ignore
		 * @param {String} sEvent 이벤트명
  
		 */
		splitGroup : function(sEvent){
			var aMatch = /\s*(.+?)\s*\(\s*(.*?)\s*\)/.exec(sEvent);
			if(aMatch){
				return {
					"event" : aMatch[1].toLowerCase(),
					"group" : aMatch[2].toLowerCase()
				}
			}else{
				return {
					"event" : sEvent.toLowerCase(),
					"group" : NONE_GROUP
				}
			}
		},
		/**
        
		 * delegate에서 부모를 찾는 함수.
		 * @ignore
		 * @param {Element} oOwnEle 자신의 엘리먼트
		 * @param {Element} oEle 비교 엘리먼트
  
		 */
		_getParent : function(oOwnEle, oEle){
			var e = oOwnEle;
			var a = [], p = null;
			var oDoc = oEle.ownerDocument || oEle.document || document;
			while (oEle.parentNode && p != e) {
				p = oEle.parentNode;
				if (p == oDoc.documentElement) break;
				a[a.length] = p;
				oEle = p;
			}
		
			return a;
		}
	};
})();
/*

// $Element의 보관 구조.
//
// {
//	"key" : {
//		"ele" : ele,
//		"event" : {
//			"click":{
//				"listener" : function(){},
//				"type":{
//					"-none-" : {
//						"normal" : [],
//						"delegate" :{
//							"vFilter" :{
//								"checker" : function(){},
//								"callback" : [function(){}]
//							}
//							
//						}
//					}
//				}
//			}
//		}
//	}
//}
  
 */

//-!jindo.$Element.domready.hidden start!-//
/**

 * Emulates the domready (=DOMContentLoaded) event in Internet Explorer.
 * @ignore
  
*/
jindo.$Element._domready = function(doc, func) {
	if (jindo.$Element._domready.list === undefined) {
		var f = null, l  = jindo.$Element._domready.list = [func];
		
		// use the trick by Diego Perini
		// http://javascript.nwbox.com/IEContentLoaded/
		var done = false, execFuncs = function(){
			if(!done) {
				done = true;
				var evt = {
					type : "domready",
					target : doc,
					currentTarget : doc
				};

				while(f = l.shift()) f(evt);
			}
		};

		(function (){
			try {
				doc.documentElement.doScroll("left");
			} catch(e) {
				setTimeout(arguments.callee, 50);
				return;
			}
			execFuncs();
		})();

		// trying to always fire before onload
		doc.onreadystatechange = function() {
			if (doc.readyState == 'complete') {
				doc.onreadystatechange = null;
				execFuncs();
			}
		};

	} else {
		jindo.$Element._domready.list.push(func);
	}
};


//-!jindo.$Element.unload.hidden start!-//
/*

 * IE에서 unload시에 이벤트를 해제하지 않으면 메모리닉이 발생하여 unload시 이벤트를 해제하는 로직 추가.
 * 모바일에서는 unload를 설정하면 iOS5 미만의 모바일 사파리에서는 캐시가 적용안됨.
  
 */
if (!jindo.$Jindo.isUndefined(window)&& !(_j_ag.indexOf("IEMobile") == -1 && _j_ag.indexOf("Mobile") > -1 && _JINDO_IS_SP)) {
 	(new jindo.$Element(window)).attach("unload",function(e){
		jindo.$Element.eventManager.cleanUpAll();
	});
}

//-!jindo.$Element._getTransition.hidden start!-//
/**
 
 * @fileOverview $Element의 확장 메서드를 정의한 파일
 * @name element.extend.js
  
 */

/**
 
 * appear ,disappear에서 사용되는 함수로 현재 transition을 사용 할수 있는지를 학인한다.
 * @ignore
  
 */
jindo.$Element._getTransition = function(){
	var hasTransition = false , sTransitionName = "";
	
	if (document.body.style.trasition) {
		hasTransition = true;
		sTransitionName = "trasition";
	}
	/*
	 
아직 firefox는 transitionEnd API를 지원 하지 않음.
  
	 */
	// else if(typeof document.body.style.MozTransition !== 'undefined'){ 
	// 	hasTransition = true;
	// 	sTransitionName = "MozTransition";
	// }
	else if(document.body.style.webkitTransition !== undefined){
		hasTransition = true;
		sTransitionName = "webkitTransition";
	}else if(document.body.style.OTransition !== undefined){
		hasTransition = true;
		sTransitionName = "OTransition";
	}
	return (jindo.$Element._getTransition = function(){
		return {
			"hasTransition" : hasTransition,
			"name" : sTransitionName
		};
	})();
};

//-!jindo.$Element.prototype.appear start(jindo.$Element._getTransition,jindo.$Element.prototype.opacity,jindo.$Element.prototype.show)!-//
/**
 
 * @description appear() 메서드는 HTML 요소를 서서히 나타나게 한다(Fade-in 효과). 인터넷 익스플로러 6 버전에서 filter를 사용하면서 해당 요소가 position 속성을 가지고 있으며 사라지는 문제가 있다. 이 경우에는 HTML 요소에 position 속성이 없어야 정상적으로 사용할 수 있다. Webkit 기반의 브라우저(Safari 5 버전 이상, Mobile Safari, Chrome, Mobile Webkit), Opear 10.60 버전 이상의 브라우저에서는 CSS3 transition 속성을 사용한다. 그 이외의 브라우저에서는 자바스크립트를 사용한다.
 *
 * @param1 {Void}
 * @return1 {$Element} 현재의 $Element() 객체
 *
 * @param2 {Numeric} nDuration HTML 요소가 완전히 나타날 때까지 걸리는 시간. 단위는 초(second)이다.
 * @return2 {$Element} 현재의 $Element() 객체
 *
 * @param3 {Numeric} nDuration HTML 요소가 완전히 나타날 때까지 걸리는 시간. 단위는 초(second)이다.
 * @param3 {Function} fCallback HTML 요소가 완전히 나타난 후에 실행할 콜백 함수.
 * @return3 {$Element} 현재의 $Element() 객체
 *
 * @see <a href="http://www.w3.org/TR/css3-transitions/">CSS Transitions</a> - W3C
 * @see $Element#show
 * @see $Element#disappear
 * @example
$Element("sample1").appear(5, function(){
	$Element("sample2").appear(3);
});

//Before
<div style="display: none; background-color: rgb(51, 51, 153); width: 100px; height: 50px;" id="sample1">
	<div style="display: none; background-color: rgb(165, 10, 81); width: 50px; height: 20px;" id="sample2">
	</div>
</div>

//After(1) : sample1 요소가 나타남
<div style="display: block; background-color: rgb(51, 51, 153); width: 100px; height: 50px; opacity: 1;" id="sample1">
	<div style="display: none; background-color: rgb(165, 10, 81); width: 50px; height: 20px;" id="sample2">
	</div>
</div>

//After(2) : sample2 요소가 나타남
<div style="display: block; background-color: rgb(51, 51, 153); width: 100px; height: 50px; opacity: 1;" id="sample1">
	<div style="display: block; background-color: rgb(165, 10, 81); width: 50px; height: 20px; opacity: 1;" id="sample2">
	</div>
</div>
  
 */
jindo.$Element.prototype.appear = function(duration, callback) {
	//-@@$Element.appear-@@//
	var oTransition = jindo.$Element._getTransition();
	function appear(){
		var oArgs = jindo.$Jindo.checkVarType(arguments, {
			'4voi' : [ ],
			'4num' : [ 'nDuration:Numeric'],
			'4fun' : [ 'nDuration:Numeric' ,'fpCallback:Function+']
		},"$Element#appear");
		switch(oArgs+""){
			case "4voi":
				duration = 0.3;
				callback = function(){};
				break;
			case "4num":
				duration = oArgs.nDuration;
				callback = function(){};
				break;
			case "4fun":
				duration = oArgs.nDuration;
				
		}
		return [duration, callback];
	}
	if (oTransition.hasTransition) {
		jindo.$Element.prototype.appear = function(duration, callback) {
			var aOption = appear.apply(this,_toArray(arguments));
			duration = aOption[0];
			callback = aOption[1];
			var self = this;
			var ele = this._element;
			var bindFunc = function(){
				callback(self);
				this.show();
				this.removeEventListener(oTransition.name+"End", arguments.callee , false );
			};
			if(!this.visible()){
				ele.style.opacity = ele.style.opacity||0;
				self.show();
			}
			ele.addEventListener( oTransition.name+"End", bindFunc , false );
			ele.style[oTransition.name + 'Property'] = 'opacity';
			ele.style[oTransition.name + 'Duration'] = duration+'s';
			ele.style[oTransition.name + 'TimingFunction'] = 'linear';
			
			setTimeout(function(){
				ele.style.opacity = '1';
			},1);
			
			return this;
		}
	}else{
		jindo.$Element.prototype.appear = function(duration, callback) {
			var aOption = appear.apply(this,_toArray(arguments));
			duration = aOption[0];
			callback = aOption[1];
			var self = this;
			var op   = this.opacity();
			if(this._getCss("display")=="none") op = 0;
			
			if (op == 1) return this;
			try { clearTimeout(this._fade_timer); } catch(e){};

			var step = (1-op) / ((duration||0.3)*100);
			var func = function(){
				op += step;
				self.opacity(op);

				if (op >= 1) {
					callback(self);
				} else {
					self._fade_timer = setTimeout(func, 10);
				}
			};

			this.show();
			func();
			return this;
		}
	}
	return this.appear.apply(this,arguments);
	
};

//-!jindo.$Element.prototype.disappear start(jindo.$Element._getTransition,jindo.$Element.prototype.opacity)!-//
/**
 
 * @description disappear() 메서드는 HTML 요소를 서서히 사라지게 한다(Fade-out 효과). HTML 요소가 완전히 사라지면 해당 요소의 display 속성은 none으로 변한다. Webkit 기반의 브라우저(Safari 5 버전 이상, Mobile Safari, Chrome, Mobile Webkit), Opear 10.6 버전 이상의 브라우저에서는 CSS3 transition 속성을 사용한다. 그 이외의 브라우저에서는 자바스크립트를 사용한다.
 *
 * @param1 {Void}
 * @return1 {$Element} 현재의 $Element() 객체.
 *
 * @param2 {Numeric} nDuration HTML 요소 완전히 사라질 때까지 걸리는 시간. 단위는 초를 사용한다.
 * @return2 {$Element} 현재의 $Element() 객체.
 *
 * @param3 {Numeric} nDuration HTML 요소 완전히 사라질 때까지 걸리는 시간. 단위는 초를 사용한다.
 * @param3 {Function} fCallback HTML 요소가 완전히 사라진 후에 실행할 콜백 함수.
 * @return3 {$Element} 현재의 $Element() 객체.
 *
 * @see <a href="http://www.w3.org/TR/css3-transitions/">CSS Transitions</a> - W3C
 * @see $Element#hide
 * @see $Element#appear
 * @example
$Element("sample1").disappear(5, function(){
	$Element("sample2").disappear(3);
});

//Before
<div id="sample1" style="background-color: rgb(51, 51, 153); width: 100px; height: 50px;">
</div>
<div id="sample2" style="background-color: rgb(165, 10, 81); width: 100px; height: 50px;">
</div>

//After(1) : sample1 요소가 사라짐
<div id="sample1" style="background-color: rgb(51, 51, 153); width: 100px; height: 50px; opacity: 1; display: none;">
</div>
<div id="sample2" style="background-color: rgb(165, 10, 81); width: 100px; height: 50px;">
</div>

//After(2) : sample2 요소가 사라짐
<div id="sample1" style="background-color: rgb(51, 51, 153); width: 100px; height: 50px; opacity: 1; display: none;">
</div>
<div id="sample2" style="background-color: rgb(165, 10, 81); width: 100px; height: 50px; opacity: 1; display: none;">
</div>
  
 */
jindo.$Element.prototype.disappear = function(duration, callback) {
	//-@@$Element.disappear-@@//
	var oTransition = jindo.$Element._getTransition();
	function disappear(){
		var oArgs = jindo.$Jindo.checkVarType(arguments, {
			'4voi' : [ ],
			'4num' : [ 'nDuration:Numeric'],
			'4fun' : [ 'nDuration:Numeric' ,'fpCallback:Function+']
		},"$Element#disappear");
		switch(oArgs+""){
			case "4voi":
				duration = 0.3;
				callback = function(){};
				break;
			case "4num":
				duration = oArgs.nDuration;
				callback = function(){};
				break;
			case "4fun":
				duration = oArgs.nDuration;
				
		}
		return [duration, callback];
	}
	if (oTransition.hasTransition) {
		jindo.$Element.prototype.disappear = function(duration, callback) {
			var aOption = disappear.apply(this,_toArray(arguments));
			duration = aOption[0];
			callback = aOption[1];
			var self = this;
			var bindFunc = function(){
				callback(self);
				this.removeEventListener(oTransition.name+"End", arguments.callee , false );
				self._element.style.display = "none";
			};
			var ele = this._element;
			ele.addEventListener( oTransition.name+"End", bindFunc , false );
		
		
			ele.style[oTransition.name + 'Property'] = 'opacity';
			ele.style[oTransition.name + 'Duration'] = duration+'s';
			ele.style[oTransition.name + 'TimingFunction'] = 'linear';
			/*
			 
opera 버그로 인하여 아래와 같이 처리함.
  
			 */
			setTimeout(function(){
				ele.style.opacity = '0';
			},1);
		
			return this;
		}
	}else{
		jindo.$Element.prototype.disappear = function(duration, callback) {
			var aOption = disappear.apply(this,_toArray(arguments));
			duration = aOption[0];
			callback = aOption[1];
			
			var self = this;
			var op   = this.opacity();
	
			if (op == 0) return this;
			try { clearTimeout(this._fade_timer); } catch(e){};

			var step = op / ((duration||0.3)*100);
			var func = function(){
				op -= step;
				self.opacity(op);

				if (op <= 0) {
					self._element.style.display = "none";
					self.opacity(1);
					callback(self);
				} else {
					self._fade_timer = setTimeout(func, 10);
				}
			};

			func();

			return this;
		}
	}
	return this.disappear(duration, callback);
};

//-!jindo.$Element.prototype.offset start!-//
/**
 
 * @description offset() 메서드는 HTML 요소의 위치를 가져오거나 설정한다. 파라미터를 생략하면 해당 HTML 요소의 위치 값을 반환한다. 파라미터를 지정하면 HTML 요소의 위치를 설정한다. 위치를 결정하는 기준점은 브라우저가 페이지를 표시하는 화면의 왼쪽 위 모서리이다. HTML 요소가 보이는 상태(display)에서 적용해야 한다. 요소가 화면에 보이지 않으면 정상적으로 동작하지 않을 수 있다. 일부 브라우저와 일부 상황에서 inline 요소에 대한 위치를 올바르게 구하지 못하는 문제가 있으며 이 경우 해당 요소의 position 속성을 relative 값으로 바꿔서 해결할 수 있다.<br>
 다음은 위치 값을 반환할 때 반환되는 객체의 속성 설명이다.<br>
 <table>
	<caption>HTML 요소 위치 정보 객체의 속성</caption>
	<thead>
		<tr>
			<th scope="col">이름</th>
			<th scope="col">타입</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>top</td>
			<td>Number</td>
			<td>문서의 맨 위에서 HTML 요소의 윗 부분까지의 거리를 저장한다.</td>
		</tr>
		<tr>
			<td>left</td>
			<td>Number</td>
			<td>문서의 왼쪽 가장자리에서 HTML 요소의 왼쪽 가장자리까지의 거리를 저장한다.</td>
		</tr>
	</tbody>
</table>
 *
 * @param1 {Void}
 * @return1 {Hash+} HTML 요소의 위치 값을 객체로 반환한다.
 *
 * @param2 {Numeric} nTop 문서의 맨 위에서 HTML 요소의 윗 부분까지의 거리. 단위는 픽셀(px)이다.
 * @param2 {Numeric} nLeft 문서의 왼쪽 가장자리에서 HTML 요소의 왼쪽 가장자리까지의 거리. 단위는 픽셀(px)이다.
 * @return2 {$Element} 위치 값이 변경된 $Element() 객체를 반환한다.
 *
 * @throws {jindo.$Except.ONLY_NUMBER_TYPE} 파라메터는 숫자여야 한다.
 * @example
<style type="text/css">
	div { background-color:#2B81AF; width:20px; height:20px; float:left; left:100px; top:50px; position:absolute;}
</style>

<div id="sample"></div>

...

// 위치 값 조회
$Element("sample").offset(); // { left=100, top=50 }

 * @example
// 위치 값 설정
$Element("sample").offset(40, 30);

//Before
<div id="sample"></div>

//After
<div id="sample" style="top: 40px; left: 30px;"></div>
  
 */
jindo.$Element.prototype.offset = function(nTop, nLeft) {
	//-@@$Element.offset-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'g' : [ ],
		's' : [ 'nTop:Numeric', 'nLeft:Numeric']
	},"$Element#offset");
	
	switch(oArgs+""){
		case "g":
			return this.offset_get();
			
		case "s":
			return this.offset_set(oArgs.nTop, oArgs.nLeft);
			
	}
};

jindo.$Element.prototype.offset_set = function(nTop,nLeft){
	var oEl = this._element;
	var oPhantom = null;
	
	if (isNaN(parseFloat(this._getCss(oEl,'top'),10))) oEl.style.top = "0px";
	if (isNaN(parseFloat(this._getCss(oEl,'left'),10))) oEl.style.left = "0px";

	var oPos = this.offset_get();
	var oGap = { top : nTop - oPos.top, left : nLeft - oPos.left };
	oEl.style.top = parseFloat(this._getCss(oEl,'top'),10) + oGap.top + 'px';
	oEl.style.left = parseFloat(this._getCss(oEl,'left'),10) + oGap.left + 'px';

	return this;
};

jindo.$Element.prototype.offset_get = function(nTop,nLeft){
	var oEl = this._element;
	var oPhantom = null;
	
	var bSafari = _JINDO_IS_SP;
	var bIE = _JINDO_IS_IE;
	var nVer = 0;
	if(bIE){
		if(document.documentMode){
			nVer = document.documentMode;
		}else{
			nVer = navigator.userAgent.match(/(?:MSIE) ([0-9.]+)/)[1];
		}
	}
	
	var fpSafari = function(oEl) {

		var oPos = { left : 0, top : 0 };

		for (var oParent = oEl, oOffsetParent = oParent.offsetParent; oParent = oParent.parentNode; ) {

			if (oParent.offsetParent) {

				oPos.left -= oParent.scrollLeft;
				oPos.top -= oParent.scrollTop;

			}

			if (oParent == oOffsetParent) {

				oPos.left += oEl.offsetLeft + oParent.clientLeft;
				oPos.top += oEl.offsetTop + oParent.clientTop ;

				if (!oParent.offsetParent) {

					oPos.left += oParent.offsetLeft;
					oPos.top += oParent.offsetTop;

				}

				oOffsetParent = oParent.offsetParent;
				oEl = oParent;
			}
		}

		return oPos;

	};

	var fpOthers = function(oEl) {
		var oPos = { left : 0, top : 0 };

		var oDoc = oEl.ownerDocument || oEl.document || document;
		var oHtml = oDoc.documentElement;
		var oBody = oDoc.body;

		if (oEl.getBoundingClientRect) { // has getBoundingClientRect
			if (!oPhantom) {
				var bHasFrameBorder = (window == top); 
				if(!bHasFrameBorder){ 
					try{ 
						bHasFrameBorder = (window.frameElement && window.frameElement.frameBorder == 1); 
					}catch(e){} 
				}
				if ((bIE && nVer < 8 && window.external) && bHasFrameBorder) {
					oPhantom = { left : 2, top : 2 };
					oBase = null;
				} else {
					oPhantom = { left : 0, top : 0 };
				}
			}

			var box = oEl.getBoundingClientRect();
			if (oEl !== oHtml && oEl !== oBody) {

				oPos.left = box.left - oPhantom.left;
				oPos.top = box.top - oPhantom.top;
				oPos.left += oHtml.scrollLeft || oBody.scrollLeft;
				oPos.top += oHtml.scrollTop || oBody.scrollTop;

			}

		} else if (oDoc.getBoxObjectFor) { // has getBoxObjectFor
			var box = oDoc.getBoxObjectFor(oEl);
			var vpBox = oDoc.getBoxObjectFor(oHtml || oBody);

			oPos.left = box.screenX - vpBox.screenX;
			oPos.top = box.screenY - vpBox.screenY;

		} else {
			for (var o = oEl; o; o = o.offsetParent) {

				oPos.left += o.offsetLeft;
				oPos.top += o.offsetTop;

			}

			for (var o = oEl.parentNode; o; o = o.parentNode) {

				if (o.tagName == 'BODY') break;
				if (o.tagName == 'TR') oPos.top += 2;

				oPos.left -= o.scrollLeft;
				oPos.top -= o.scrollTop;

			}

		}

		return oPos;

	};
	
	return (bSafari ? fpSafari : fpOthers)(oEl);
};

//-!jindo.$Element.prototype.evalScripts start!-//
/**
 
 * @description evalScripts() 메서드는 문자열에 포함된 JavaScript 코드를 실행한다. &lt;script&gt; 태그가 포함된 문자열을 파라미터로 지정하면, &lt;script&gt; 안에 있는 내용을 파싱하여 eval() 메서드를 수행한다.
 * @param {String+} sHTML &lt;script&gt; 요소가 포함된 HTML 문자열.
 * @return {$Element} 현재의 $Element() 객체를 반환.
 * @example
// script 태그가 포함된 문자열을 지정
var response = "<script type='text/javascript'>$Element('sample').appendHTML('<li>4</li>')</script>";

$Element("sample").evalScripts(response);

//Before
<ul id="sample">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>

//After
<ul id="sample">
	<li>1</li>
	<li>2</li>
	<li>3</li>
<li>4</li></ul>
  
 */
jindo.$Element.prototype.evalScripts = function(sHTML) {
	//-@@$Element.evalScripts-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str' : [ "sHTML:String+" ]
	},"$Element#evalScripts");
	var aJS = [];
    sHTML = sHTML.replace(new RegExp('<script(\\s[^>]+)*>(.*?)</'+'script>', 'gi'), function(_1, _2, sPart) { aJS.push(sPart); return ''; });
    eval(aJS.join('\n'));
    
    return this;

};

//-!jindo.$Element._common.hidden start!-//
/**
 * @ignore
 */
jindo.$Element._common = function(oElement,sMethod){

	try{
		return jindo.$Element(oElement)._element;
	}catch(e){
		throw TypeError(e.message.replace(/\$Element/g,"$Element#"+sMethod).replace(/Element\.html/g,"Element.html#"+sMethod));
	}
};

//-!jindo.$Element._prepend.hidden start(jindo.$)!-//
/**
 
 * element를 앞에 붙일때 사용되는 함수.
 * @ignore
 * @param {Element} 기준 엘리먼트
 * @param {Element} 붙일 엘리먼트
 * @return {$Element} 두번째 파라메터의 엘리먼트
  
 */
jindo.$Element._prepend = function(oParent, oChild){
	var nodes = oParent.childNodes;
	if (nodes.length > 0) {
		oParent.insertBefore(oChild, nodes[0]);
	} else {
		oParent.appendChild(oChild);
	}
};

//-!jindo.$Element.prototype.append start(jindo.$Element._common)!-//
/**
 
 * @description append() 메서드는 $Element() 객체에 있는 요소의 마지막 자식 노드로 파라미터로 지정한 HTML 요소를 배정한다.
 *
 * @param1 {String+} sId 마지막 자식 노드로 배정할 HTML 요소의 ID
 * @return1 {$Element} $Element() 객체.
 *
 * @param2 {Element+|Node} vElement 마지막 자식 노드로 배정할 HTML 요소(Element) 또는 $Element() 객체를 파라미터로 지정할 수 있다.
 * @return2 {$Element} $Element() 객체.
 *
 * @throws {jindo.$Except.EITHER_STRING_OR_ELEMENT_OR_$ELEMENT} 문자, 엘리먼트, $Element 중 하나여야 한다.
 * @see $Element#prepend
 * @see $Element#before
 * @see $Element#after
 * @see $Element#appendTo
 * @see $Element#prependTo
 * @see $Element#wrap
 * @example
// ID가 sample1인 HTML 요소에
// ID가 sample2인 HTML 요소를 추가
$Element("sample1").append("sample2");

//Before
<div id="sample2">
    <div>Hello 2</div>
</div>
<div id="sample1">
    <div>Hello 1</div>
</div>

//After
<div id="sample1">
	<div>Hello 1</div>
	<div id="sample2">
		<div>Hello 2</div>
	</div>
</div>

 * @example
// ID가 sample인 HTML 요소에
// 새로운 DIV 요소를 추가
var elChild = $("<div>Hello New</div>");
$Element("sample").append(elChild);

//Before
<div id="sample">
	<div>Hello</div>
</div>

//After
<div id="sample">
	<div>Hello </div>
	<div>Hello New</div>
</div>
  
 */
jindo.$Element.prototype.append = function(oElement) {
	//-@@$Element.append-@@//
	this._element.appendChild(jindo.$Element._common(oElement,"append"));
	return this;
};

//-!jindo.$Element.prototype.prepend start(jindo.$Element._prepend)!-//
/** 
 
 * @description prepend() 메서드는 $Element() 객체에 있는 요소의 첫 번째 자식 노드로 파라미터로 지정한 HTML 요소를 배정한다.
 *
 * @param1 {String+} sId 첫 번째 자식 노드로 배정할 HTML 요소의 ID
 * @return1 {$Element} $Element() 객체.
 *
 * @param2 {Element+|Node} vElement 첫 번째 자식 노드로 배정할 HTML 요소(Element) 또는 $Element() 객체를 파라미터로 지정할 수 있다.
 * @return2 {$Element} $Element() 객체.
 *
 * @throws {jindo.$Except.EITHER_STRING_OR_ELEMENT_OR_$ELEMENT} 문자, 엘리먼트, $Element 중 하나여야 한다.
 * @see $Element#append
 * @see $Element#before
 * @see $Element#after
 * @see $Element#appendTo
 * @see $Element#prependTo
 * @see $Element#wrap
 * @example
// ID가 sample1인 HTML 요소에서
// ID가 sample2인 HTML 요소를 첫 번째 자식 노드로 이동
$Element("sample1").prepend("sample2");

//Before
<div id="sample1">
    <div>Hello 1</div>
	<div id="sample2">
	    <div>Hello 2</div>
	</div>
</div>

//After
<div id="sample1">
	<div id="sample2">
	    <div>Hello 2</div>
	</div>
    <div>Hello 1</div>
</div>

 * @example
// ID가 sample인 HTML 요소에
// 새로운 DIV 요소를 추가
var elChild = $("<div>Hello New</div>");
$Element("sample").prepend(elChild);

//Before
<div id="sample">
	<div>Hello</div>
</div>

//After
<div id="sample">
	<div>Hello New</div>
	<div>Hello</div>
</div>
  
 */
jindo.$Element.prototype.prepend = function(oElement) {
	//-@@$Element.prepend-@@//
	jindo.$Element._prepend(this._element, jindo.$Element._common(oElement,"prepend"));
	
	return this;
};

//-!jindo.$Element.prototype.replace start(jindo.$Element._common)!-//
/**
 
 * @description replace() 메서드는 $Element() 객체 내부의 HTML 요소를 지정한 파라미터의 요소로 대체한다.
 *
 * @param1 {String+} sId 대체할 HTML 요소의 ID
 * @return1 {$Element} $Element() 객체.
 *
 * @param2 {Element+|Node} vElement 대체할 HTML 요소(Element) 또는 $Element() 객체를 파라미터로 지정할 수 있다.
 * @return2 {$Element} $Element() 객체.
 *
 * @throws {jindo.$Except.EITHER_STRING_OR_ELEMENT_OR_$ELEMENT} 문자, 엘리먼트, $Element 중 하나여야 한다.
 * @example
// ID가 sample1인 HTML 요소에서
// ID가 sample2인 HTML 요소로 대체
$Element('sample1').replace('sample2');

//Before
<div>
	<div id="sample1">Sample1</div>
</div>
<div id="sample2">Sample2</div>

//After
<div>
	<div id="sample2">Sample2</div>
</div>

 * @example
// 새로운 DIV 요소로 대체
$Element("btn").replace($("<div>Sample</div>"));

//Before
<button id="btn">Sample</button>

//After
<div>Sample</div>
  
 */
jindo.$Element.prototype.replace = function(oElement) {
	//-@@$Element.replace-@@//
	oElement = jindo.$Element._common(oElement,"replace");
	if(jindo.cssquery) jindo.cssquery.release();
	var e = this._element;
	var oParentNode = e.parentNode;
	if(oParentNode&&oParentNode.replaceChild){
		oParentNode.replaceChild(oElement,e);
		return this;
	}
	
	var _o = oElement;

	oParentNode.insertBefore(_o, e);
	oParentNode.removeChild(e);

	return this;
};

//-!jindo.$Element.prototype.appendTo start(jindo.$Element._common)!-//
/**
 
 * @description appendTo() 메서드는 $Element() 객체에 있는 요소를 파라미터로 지정한 요소의 마지막 자식 요소로 배정한다.
 *
 * @param1 {String+} sId 마지막 자식 노드가 배정 될 HTML 요소의 ID
 * @return1 {$Element} $Element() 객체.
 *
 * @param2 {Element+|Node} vElement 마지막 자식 노드가 배정 될 HTML 요소(Element) 또는 $Element() 객체를 파라미터로 지정할 수 있다.
 * @return2 {$Element} $Element() 객체.
 *
 * @throws {jindo.$Except.EITHER_STRING_OR_ELEMENT_OR_$ELEMENT} 문자, 엘리먼트, $Element 중 하나여야 한다.
 * @see $Element#append
 * @see $Element#prepend
 * @see $Element#before
 * @see $Element#after
 * @see $Element#prependTo
 * @see $Element#wrap
 * @example
// ID가 sample2인 HTML 요소에
// ID가 sample1인 HTML 요소를 추가
$Element("sample1").appendTo("sample2");

//Before
<div id="sample1">
    <div>Hello 1</div>
</div>
<div id="sample2">
    <div>Hello 2</div>
</div>

//After
<div id="sample2">
    <div>Hello 2</div>
	<div id="sample1">
	    <div>Hello 1</div>
	</div>
</div>
  
 */
jindo.$Element.prototype.appendTo = function(oElement) {
	//-@@$Element.appendTo-@@//
	jindo.$Element._common(oElement,"appendTo").appendChild(this._element);
	return this;
};

//-!jindo.$Element.prototype.prependTo start(jindo.$Element._prepend, jindo.$Element._common)!-//
/**
 
 * @description prependTo() 메서드는 $Element() 객체에 있는 요소를 파라미터로 지정한 요소의 첫 번째 자식 노드로 배정한다.
 *
 * @param1 {String+} sId 첫 번째 자식 노드가 배정 될 HTML 요소의 ID
 * @return1 {$Element} $Element() 객체.
 *
 * @param2 {Element+|Node} vElement 첫 번째 자식 노드가 배정 될 HTML 요소(Element) 또는 $Element() 객체를 파라미터로 지정할 수 있다.
 * @return2 {$Element} $Element() 객체.
 *
 * @throws {jindo.$Except.EITHER_STRING_OR_ELEMENT_OR_$ELEMENT} 문자, 엘리먼트, $Element 중 하나여야 한다.
 * @see $Element#append
 * @see $Element#prepend
 * @see $Element#before
 * @see $Element#after
 * @see $Element#appendTo
 * @see $Element#wrap
 * @example
// ID가 sample2인 HTML 요소에
// ID가 sample1인 HTML 요소를 추가
$Element("sample1").prependTo("sample2");

//Before
<div id="sample1">
    <div>Hello 1</div>
</div>
<div id="sample2">
    <div>Hello 2</div>
</div>

//After
<div id="sample2">
	<div id="sample1">
	    <div>Hello 1</div>
	</div>
    <div>Hello 2</div>
</div>
  
 */
jindo.$Element.prototype.prependTo = function(oElement) {
	//-@@$Element.prependTo-@@//
	jindo.$Element._prepend(jindo.$Element._common(oElement,"prependTo"), this._element);
	return this;
};

//-!jindo.$Element.prototype.before start(jindo.$Element._common)!-//
/**
 
 * @description before() 메서드는 $Element() 객체에 있는 요소의 이전 형제 노드(previousSibling)로 파라미터로 지정한 요소를 배정한다.
 *
 * @param1 {String+} sId 이전 형제 노드로 배정할 HTML 요소의 ID
 * @return1 {$Element} $Element() 객체.
 *
 * @param2 {Element+|Node} vElement 이전 형제 노드로 배정할 HTML 요소(Element) 또는 $Element() 객체를 파라미터로 지정할 수 있다.
 * @return2 {$Element} $Element() 객체.
 *
 * @throws {jindo.$Except.EITHER_STRING_OR_ELEMENT_OR_$ELEMENT} 문자, 엘리먼트, $Element 중 하나여야 한다.
 * @see $Element#append
 * @see $Element#prepend
 * @see $Element#after
 * @see $Element#appendTo
 * @see $Element#prependTo
 * @see $Element#wrap
 * @example
// ID가 sample1인 HTML 요소 앞에
// ID가 sample2인 HTML 요소를 추가 함
$Element("sample1").before("sample2"); // sample2를 래핑한 $Element 를 반환

//Before
<div id="sample1">
    <div>Hello 1</div>
	<div id="sample2">
	    <div>Hello 2</div>
	</div>
</div>

//After
<div id="sample2">
	<div>Hello 2</div>
</div>
<div id="sample1">
  <div>Hello 1</div>
</div>

 * @example
// 새로운 DIV 요소를 추가
var elNew = $("<div>Hello New</div>");
$Element("sample").before(elNew); // elNew 요소를 래핑한 $Element 를 반환

//Before
<div id="sample">
	<div>Hello</div>
</div>

//After
<div>Hello New</div>
<div id="sample">
	<div>Hello</div>
</div>
  
 */
jindo.$Element.prototype.before = function(oElement) {
	//-@@$Element.before-@@//
	var o = jindo.$Element._common(oElement,"before");

	this._element.parentNode.insertBefore(o, this._element);

	return this;
};

//-!jindo.$Element.prototype.after start(jindo.$Element.prototype.before, jindo.$Element._common)!-//
/**
 
 * @description after() 메서드는 $Element() 객체에 있는 요소의 다음 형제 노드(nextSibling)로 파라미터로 지정한 요소를 배정한다.
 *
 * @param1 {String+} sId 다음 형제 노드로 배정할 HTML 요소의 ID
 * @return1 {$Element} $Element() 객체.
 *
 * @param2 {Element+|Node} vElement 다음 형제 노드로 배정할 HTML 요소(Element) 또는 $Element() 객체를 파라미터로 지정할 수 있다.
 * @return2 {$Element} $Element() 객체.
 *
 * @throws {jindo.$Except.EITHER_STRING_OR_ELEMENT_OR_$ELEMENT} 문자, 엘리먼트, $Element 중 하나여야 한다.
 * @see $Element#append
 * @see $Element#prepend
 * @see $Element#before
 * @see $Element#appendTo
 * @see $Element#prependTo
 * @see $Element#wrap
 * @example
// ID가 sample1인 HTML 요소 뒤에
// ID가 sample2인 HTML 요소를 추가 함
$Element("sample1").after("sample2");  // sample2를 래핑한 $Element 를 반환

//Before
<div id="sample1">
    <div>Hello 1</div>
	<div id="sample2">
	    <div>Hello 2</div>
	</div>
</div>

//After
<div id="sample1">
	<div>Hello 1</div>
</div>
<div id="sample2">
	<div>Hello 2</div>
</div>

 * @example
// 새로운 DIV 요소를 추가
var elNew = $("<div>Hello New</div>");
$Element("sample").after(elNew); // elNew 요소를 래핑한 $Element 를 반환

//Before
<div id="sample">
	<div>Hello</div>
</div>

//After
<div id="sample">
	<div>Hello</div>
</div>
<div>Hello New</div>
  
 */
jindo.$Element.prototype.after = function(oElement) {
	//-@@$Element.after-@@//
	oElement = jindo.$Element._common(oElement,"after");
	this.before(oElement);
	jindo.$Element(oElement).before(this);

	return this;
};

//-!jindo.$Element.prototype.parent start!-//
/**
 
 * @description parent() 메서드는 HTML 요소의 상위 노드에 해당하는 요소를 검색한다.
 *
 * @param1 {Void}
 * @return1 {$Element} 부모 요소가 담긴 $Element() 객체.
 *
 * @param2 {Function+} fCallback 상위 요소의 검색 조건을 지정한 콜백 함수.<br>파라미터를 생략하면 부모 요소를 반환하고, 파라미터로 콜백 함수를 지정하면 콜백 함수의 실행 결과가 true를 반환하는 상위 요소를 반환한다. 이때 콜백 함수는 결과를 배열로 반환한다. 콜백 함수의 파라미터로 탐색 중인 상위 요소의 $Element() 객체가 입력된다.
 * @return2 {Variant} 부모 요소가 담긴 $Element() 객체 혹은 조건을 만족하는 상위 요소의 배열(Array).<br>파라미터를 생략하여 부모 요소를 반환하는 경우, $Element() 객체로 반환하고 그 이외에는 $Element() 객체를 원소로 갖는 배열로 반환한다.
 *
 * @param3 {Function+} fCallback 상위 요소의 검색 조건을 지정한 콜백 함수.<br>파라미터를 생략하면 부모 요소를 반환하고, 파라미터로 콜백 함수를 지정하면 콜백 함수의 실행 결과가 true를 반환하는 상위 요소를 반환한다. 이때 콜백 함수는 결과를 배열로 반환한다. 콜백 함수의 파라미터로 탐색 중인 상위 요소의 $Element() 객체가 입력된다.
 * @param3 {Numeric} nLimit 탐색할 상위 요소의 레벨.<br>파라미터를 생략하면 모든 상위 요소를 탐색한다. fCallback 파라미터를 null로 설정하고 nLimit 파라미터를 설정하면 제한된 레벨의 상위 요소를 조건없이 검색한다.
 * @return3 {Variant} 부모 요소가 담긴 $Element() 객체 혹은 조건을 만족하는 상위 요소의 배열(Array).<br>파라미터를 생략하여 부모 요소를 반환하는 경우, $Element() 객체로 반환하고 그 이외에는 $Element() 객체를 원소로 갖는 배열로 반환한다.
 *
 * @throws {jindo.$Except.EITHER_NULL_OR_FUNCTION} 첫 번째 인자는 null, 함수 중 하나여야 한다.
 * @throws {jindo.$Except.ONLY_NUMBER_TYPE} 두 번째 인자는 숫자여야 한다.
 * @see $Element#child
 * @see $Element#prev
 * @see $Element#next
 * @see $Element#first
 * @see $Element#last
 * @see $Element#indexOf
 * @example
<div class="sample" id="div1">
	<div id="div2">
		<div class="sample" id="div3">
			<div id="target">
				Sample
				<div id="div4">
					Sample
				</div>
				<div class="sample" id="div5">
					Sample
				</div>
			</div>
			<div class="sample" id="div6">
				Sample
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
	var welTarget = $Element("target");
	var parent = welTarget.parent();
	// ID가 div3인 DIV를 래핑한 $Element를 반환

	parent = welTarget.parent(function(v){
	        return v.hasClass("sample");
	    });
	// ID가 div3인 DIV를 래핑한 $Element와
	// ID가 div1인 DIV를 래핑한 $Element를 원소로 하는 배열을 반환

	parent = welTarget.parent(function(v){
	        return v.hasClass("sample");
	    }, 1);
	// ID가 div3인 DIV를 래핑한 $Element를 원소로 하는 배열을 반환
</script>
  
 */
jindo.$Element.prototype.parent = function(pFunc, limit) {
	//-@@$Element.parent-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4voi' : [],
		'4fun' : [ 'fpFunc:Function+' ],
		'4nul' : [ 'fpFunc:Null' ],
		'for_function_number' : [ 'fpFunc:Function+', 'nLimit:Numeric'],
		'for_null_number' : [ 'fpFunc:Null', 'nLimit:Numeric' ]
	},"$Element#parent");
	
	var e = this._element;
	
	switch(oArgs+""){
		case "4voi":
			return e.parentNode?jindo.$Element(e.parentNode):null;
		case "4fun":
		case "4nul":
			 limit = -1;
			 break;
		case "for_function_number":
		case "for_null_number":
			if(oArgs.nLimit==0)limit = -1; 
			
	}
	
	
	var a = [], p = null;

	while (e.parentNode && limit-- != 0) {
		try{
			p = jindo.$Element(e.parentNode);
		}catch(e){
			p = null;
		}
		if (e.parentNode == document.documentElement) break;
		if (!pFunc || (pFunc && pFunc(p))) a[a.length] = p;

		e = e.parentNode;
	}
	return a;
};

//-!jindo.$Element.prototype.child start!-//
/**
 
 * @description child() 메서드는 HTML 요소의 하위 노드에 해당하는 요소를 검색한다.
 *
 * @param1 {Void}
 * @return1 {Variant} 자식 요소가 담긴 배열(Array)<br>$Element() 객체를 원소로 갖는 배열로 반환한다.
 *
 * @param2 {Function+} fCallback 하위 요소의 검색 조건을 지정한 콜백 함수.<br>파라미터를 생략하면 자식 요소를 반환하고, 파라미터로 콜백 함수를 지정하면 콜백 함수의 실행 결과가 true를 반환하는 하위 요소를 반환한다. 이때 콜백 함수는 결과를 배열로 반환한다. 콜백 함수의 파라미터로 탐색 중인 하위 요소의 $Element() 객체가 입력된다.
 * @return2 {Variant} 자식 요소가 담긴 배열(Array) 혹은 조건을 만족하는 하위 요소의 배열(Array).<br>하나의 하위 요소를 반환할 때는 $Element() 객체를 반환하고 그 이외에는 $Element() 객체를 원소로 갖는 배열로 반환한다.
 *
 * @param3 {Function+} fCallback 하위 요소의 검색 조건을 지정한 콜백 함수.<br>파라미터를 생략하면 자식 요소를 반환하고, 파라미터로 콜백 함수를 지정하면 콜백 함수의 실행 결과가 true를 반환하는 하위 요소를 반환한다. 이때 콜백 함수는 결과를 배열로 반환한다. 콜백 함수의 파라미터로 탐색 중인 하위 요소의 $Element() 객체가 입력된다.
 * @param3 {Numeric} nLimit 탐색할 하위 요소의 레벨.<br>파라미터를 생략하면 모든 하위 요소를 탐색한다. fCallback 파라미터를 null로 설정하고 nLimit 파라미터를 설정하면 제한된 레벨의 하위 요소를 조건없이 검색한다.
 * @return3 {Variant} 자식 요소가 담긴 배열(Array) 혹은 조건을 만족하는 하위 요소의 배열(Array).<br>하나의 하위 요소를 반환할 때는 $Element() 객체를 반환하고 그 이외에는 $Element() 객체를 원소로 갖는 배열로 반환한다.
 *
 * @throws {jindo.$Except.EITHER_NULL_OR_FUNCTION} 첫 번째 인자는 null, 함수 중 하나여야 한다.
 * @throws {jindo.$Except.ONLY_NUMBER_TYPE} 두 번째 인자는 숫자여야 한다.
 * @see $Element#parent
 * @see $Element#prev
 * @see $Element#next
 * @see $Element#first
 * @see $Element#last
 * @see $Element#indexOf
 * @example
<div class="sample" id="target">
	<div id="div1">
		<div class="sample" id="div2">
			<div id="div3">
				Sample
				<div id="div4">
					Sample
				</div>
				<div class="sample" id="div5">
					Sample
					<div class="sample" id="div6">
						Sample
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="sample" id="div7">
		Sample
	</div>
</div>

<script type="text/javascript">
	var welTarget = $Element("target");
	var child = welTarget.child();
	// ID가 div1인 DIV를 래핑한 $Element와
	// ID가 div7인 DIV를 래핑한 $Element를 원소로 하는 배열을 반환

	child = welTarget.child(function(v){
	        return v.hasClass("sample");
	    });
	// ID가 div2인 DIV를 래핑한 $Element와
	// ID가 div5인 DIV를 래핑한 $Element와
	// ID가 div6인 DIV를 래핑한 $Element와
	// ID가 div7인 DIV를 래핑한 $Element를 원소로 하는 배열을 반환

	child = welTarget.child(function(v){
	        return v.hasClass("sample");
	    }, 1);
	// ID가 div7인 DIV를 래핑한 $Element를 원소로 하는 배열을 반환

	child = welTarget.child(function(v){
	        return v.hasClass("sample");
	    }, 2);
	// ID가 div2인 DIV를 래핑한 $Element와
	// ID가 div7인 DIV를 래핑한 $Element를 원소로 하는 배열을 반환
</script>
  
 */
jindo.$Element.prototype.child = function(pFunc, limit) {
	//-@@$Element.child-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4voi' : [],
		'4fun' : [ 'fpFunc:Function+' ],
		'4nul' : [ 'fpFunc:Null' ],
		'for_function_number' : [ 'fpFunc:Function+', 'nLimit:Numeric'],
		'for_null_number' : [ 'fpFunc:Null', 'nLimit:Numeric' ]
	},"$Element#child");
	var e = this._element;
	var a = [], c = null, f = null;
	
	switch(oArgs+""){
		case "4voi":
			var child = e.childNodes;
			var filtered = [];
			for(var  i = 0, l = child.length ; i < l ; i++){
				if(child[i].nodeType == 1){
					try{
						filtered.push(jindo.$Element(child[i]));
					}catch(e){
						filtered.push(null);
					}
				}
			}
			return filtered;
		case "4fun":
		case "4nul":
			 limit = -1;
			 break;
		case "for_function_number":
		case "for_null_number":
			if(oArgs.nLimit==0)limit = -1; 
			
	}

	(f = function(el, lim){
		var ch = null, o = null;

		for(var i=0; i < el.childNodes.length; i++) {
			ch = el.childNodes[i];
			if (ch.nodeType != 1) continue;
			try{
				o = jindo.$Element(el.childNodes[i]);
			}catch(e){
				o = null;
			}
			if (!pFunc || (pFunc && pFunc(o))) a[a.length] = o;
			if (lim != 0) f(el.childNodes[i], lim-1);
		}
	})(e, limit-1);

	return a;
};

//-!jindo.$Element.prototype.prev start!-//
/**
 
 * @description prev() 메서드는 HTML 요소의 이전 형제 노드에 해당하는 요소를 검색한다.
 *
 * @param1 {Void}
 * @return1 {$Element} 바로 이전 형제 요소가 담긴 $Element() 객체. 만약 엘리먼트가 없으면 null을 반환.
 *
 * @param2 {Null} fCallback null인 경우 모든 이전 형제노드를 반환한다.
 * @return2 {Variant} 이전 형제 요소의 배열(Array).<br>$Element() 객체를 원소로 갖는 배열로 반환한다.
 *
 * @param3 {Function+} fCallback 이전 형제 요소의 검색 조건을 지정한 콜백 함수.<br>파라미터로 콜백 함수를 지정하면 콜백 함수의 실행 결과가 true를 반환하는 이전 형제 요소를 반환한다. 이때 콜백 함수는 결과를 배열로 반환한다. 콜백 함수의 파라미터로 탐색 중인 이전 형제 요소의 $Element() 객체가 입력된다.
 * @return3 {Variant} 조건을 만족하는 이전 형제 요소의 배열(Array).<br>$Element() 객체를 원소로 갖는 배열로 반환한다.
 *
 * @throws {jindo.$Except.EITHER_NULL_OR_FUNCTION}  인자는 null, 함수 중 하나여야 한다.
 * @see $Element#parent
 * @see $Element#child
 * @see $Element#next
 * @see $Element#first
 * @see $Element#last
 * @see $Element#indexOf
 * @example
<div class="sample" id="sample_div1">
	<div id="sample_div2">
		<div class="sample" id="sample_div3">
			Sample1
		</div>
		<div id="sample_div4">
			Sample2
		</div>
		<div class="sample" id="sample_div5">
			Sample3
		</div>
		<div id="sample_div">
			Sample4
			<div id="sample_div6">
				Sample5
			</div>
		</div>
		<div id="sample_div7">
			Sample6
		</div>
		<div class="sample" id="sample_div8">
			Sample7
		</div>
	</div>
</div>

<script type="text/javascript">
	var sibling = $Element("sample_div").prev();
	// ID가 sample_div5인 DIV를 래핑한 $Element를 반환

	sibling = $Element("sample_div").prev(function(v){
	    return $Element(v).hasClass("sample");
	});
	// ID가 sample_div5인 DIV를 래핑한 $Element와
	// ID가 sample_div3인 DIV를 래핑한 $Element를 원소로 하는 배열을 반환
</script>
  
 */
jindo.$Element.prototype.prev = function(pFunc) {
	//-@@$Element.prev-@@//
	
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4voi' : [],
		'4fun' : [ 'fpFunc:Function+' ],
		'4nul' : [ 'fpFunc:Null' ]
	},"$Element#prev");
	
	var e = this._element;
	var a = [];
	
	switch(oArgs+""){
		case "4voi":
			if (!e) return null;
			do {
				
				e = e.previousSibling;
				if (!e || e.nodeType != 1) continue;
				try{
					if(e==null) return null;
					return jindo.$Element(e);	
				}catch(e){
					return null;
				}
			} while(e);
			try{
				if(e==null) return null;
				return jindo.$Element(e);	
			}catch(e){
				return null;
			}
		case "4fun":
		case "4nul":
			if (!e) return a;
			do {
				e = e.previousSibling;
				
				if (!e || e.nodeType != 1) continue;
				if (!pFunc||pFunc(e)) {
					
					try{
						if(e==null) a[a.length]=null;
						else a[a.length] = jindo.$Element(e);
					}catch(e){
						a[a.length] = null;
					}
					 
				}
			} while(e);
			try{
				return a;	
			}catch(e){
				return null;
			}
	}
};

//-!jindo.$Element.prototype.next start!-//
/**
 
 * @description next() 메서드는 HTML 요소의 다음 형제 노드에 해당하는 요소를 검색한다.
 *
 * @param1 {Void}
 * @return1 {$Element} 바로 다음 형제 요소가 담긴 $Element() 객체.만약 엘리먼트가 없으면 null을 반환.
 *
 * @param2 {Null} fCallback null인 경우 모든 다음 형제노드를 반환한다.
 * @return2 {Variant} 다음 형제 요소의 배열(Array).<br>$Element() 객체를 원소로 갖는 배열로 반환한다.
 *
 * @param3 {Function+} fCallback 다음 형제 요소의 검색 조건을 지정한 콜백 함수.<br>파라미터로 콜백 함수를 지정하면 콜백 함수의 실행 결과가 true를 반환하는 다음 형제 요소를 반환한다. 이때 콜백 함수는 결과를 배열로 반환한다. 콜백 함수의 파라미터로 탐색 중인 다음 형제 요소의 $Element() 객체가 입력된다.
 * @return3 {Variant} 조건을 만족하는 다음 형제 요소의 배열(Array).<br>$Element() 객체를 원소로 갖는 배열로 반환한다.
 *
 * @throws {jindo.$Except.EITHER_NULL_OR_FUNCTION}  인자는 null, 함수 중 하나여야 한다.
 * @see $Element#parent
 * @see $Element#child
 * @see $Element#prev
 * @see $Element#first
 * @see $Element#last
 * @see $Element#indexOf
 * @example
<div class="sample" id="sample_div1">
	<div id="sample_div2">
		<div class="sample" id="sample_div3">
			Sample1
		</div>
		<div id="sample_div4">
			Sample2
		</div>
		<div class="sample" id="sample_div5">
			Sample3
		</div>
		<div id="sample_div">
			Sample4
			<div id="sample_div6">
				Sample5
			</div>
		</div>
		<div id="sample_div7">
			Sample6
		</div>
		<div class="sample" id="sample_div8">
			Sample7
		</div>
	</div>
</div>

<script type="text/javascript">
	var sibling = $Element("sample_div").next();
	// ID가 sample_div7인 DIV를 래핑한 $Element를 반환

	sibling = $Element("sample_div").next(function(v){
	    return $Element(v).hasClass("sample");
	});
	// ID가 sample_div8인 DIV를 래핑한 $Element를 원소로 하는 배열을 반환
</script>
  
 */
jindo.$Element.prototype.next = function(pFunc) {
	//-@@$Element.next-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4voi' : [],
		'4fun' : [ 'fpFunc:Function+' ],
		'4nul' : [ 'fpFunc:Null' ]
	},"$Element#next");
	var e = this._element;
	var a = [];
	
	switch(oArgs+""){
		case "4voi":
			if (!e) return null;
			do {
				e = e.nextSibling;
				if (!e || e.nodeType != 1) continue;
				try{
					if(e==null) return null;
					return jindo.$Element(e);	
				}catch(e){
					return null;
				}
			} while(e);
			try{
				if(e==null) return null;
				return jindo.$Element(e);	
			}catch(e){
				return null;
			}
			
		case "4fun":
		case "4nul":
			if (!e) return a;
			do {
				e = e.nextSibling;
				
				if (!e || e.nodeType != 1) continue;
				if (!pFunc||pFunc(e)) {
					
					try{
						if(e==null) a[a.length] = null;
						else a[a.length] = jindo.$Element(e);
					}catch(e){
						a[a.length] = null;
					}
					 
				}
			} while(e);
			try{
				return a;	
			}catch(e){
				return null;
			}
			
	}
};

//-!jindo.$Element.prototype.first start!-//
/**
 
 * @description first() 메서드는 HTML 요소의 첫 번째 자식 노드에 해당하는 요소를 반환한다.
 * @return {$Element} 첫 번째 자식 노드에 해당하는 요소.만약 엘리먼트가 없으면 null을 반환.
 * @since 1.2.0 버전부터 사용 가능
 * @see $Element#parent
 * @see $Element#child
 * @see $Element#prev
 * @see $Element#next
 * @see $Element#last
 * @see $Element#indexOf
 * @example
<div id="sample_div1">
	<div id="sample_div2">
		<div id="sample_div">
			Sample1
			<div id="sample_div3">
				<div id="sample_div4">
					Sample2
				</div>
				Sample3
			</div>
			<div id="sample_div5">
				Sample4
				<div id="sample_div6">
					Sample5
				</div>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
	var firstChild = $Element("sample_div").first();
	// ID가 sample_div3인 DIV를 래핑한 $Element를 반환
</script>
  
 */
jindo.$Element.prototype.first = function() {
	//-@@$Element.first-@@//
	var el = this._element.firstElementChild||this._element.firstChild;
	if (!el) return null;
	while(el && el.nodeType != 1) el = el.nextSibling;
	try{
		return el?jindo.$Element(el):null;
	}catch(e){
		return null;
	}
};

//-!jindo.$Element.prototype.last start!-//
/**
 
 * @description last() 메서드는 HTML 요소의 마지막 자식 노드에 해당하는 요소를 반환한다.
 * @return {$Element} 마지막 자식 노드에 해당하는 요소.만약 엘리먼트가 없으면 null을 반환.
 * @since 1.2.0 버전부터 사용 가능
 * @see $Element#parent
 * @see $Element#child
 * @see $Element#prev
 * @see $Element#next
 * @see $Element#first
 * @see $Element#indexOf
 * @example
<div id="sample_div1">
	<div id="sample_div2">
		<div id="sample_div">
			Sample1
			<div id="sample_div3">
				<div id="sample_div4">
					Sample2
				</div>
				Sample3
			</div>
			<div id="sample_div5">
				Sample4
				<div id="sample_div6">
					Sample5
				</div>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
	var lastChild = $Element("sample_div").last();
	// ID가 sample_div5인 DIV를 래핑한 $Element를 반환
</script>
  
 */
jindo.$Element.prototype.last = function() {
	//-@@$Element.last-@@//
	var el = this._element.lastElementChild||this._element.lastChild;
	if (!el) return null;
	while(el && el.nodeType != 1) el = el.previousSibling;

	try{
		return el?jindo.$Element(el):null;
	}catch(e){
		return null;
	}
};

//-!jindo.$Element._contain.hidden start!-//
/**
 
 * isChildOf , isParentOf의 기본이 되는 API(IE에서는 contains,기타 브라우져에는 compareDocumentPosition을 사용하고 둘다 없는 경우는 기존 레거시 API사용.)
 * @param {HTMLElement} eParent	부모노드
 * @param {HTMLElement} eChild	자식노드
 * @ignore
  
 */
jindo.$Element._contain = function(eParent,eChild){
	if (document.compareDocumentPosition) {
		return !!(eParent.compareDocumentPosition(eChild)&16);
	}else if(eParent.contains){
		return (eParent !== eChild)&&(eParent.contains ? eParent.contains(eChild) : true);
	}else{
		var e  = eParent;
		var el = eChild;

		while(e && e.parentNode) {
			e = e.parentNode;
			if (e == el) return true;
		}
		return false;
	}
};

//-!jindo.$Element.prototype.isChildOf start(jindo.$Element._contain)!-//
/**
 
 * @description isChildOf() 메서드는 파라미터로 지정한 요소가 HTML 요소의 부모 노드인지 검사한다.
 *
 * @param1 {String+} sElement 부모 노드인지 검사할 HTML 요소의 ID
 * @return1 {Boolean} 지정한 요소가 부모 요소이면 true, 그렇지 않으면 false를 반환한다.
 *
 * @param2 {Element+} elElement 부모 노드인지 검사할 HTML 요소
 * @return2 {Boolean} 지정한 요소가 부모 요소이면 true, 그렇지 않으면 false를 반환한다.
 *
 * @see $Element#isParentOf
 * @example
<div id="parent">
	<div id="child">
		<div id="grandchild"></div>
	</div>
</div>
<div id="others"></div>

...

// 부모/자식 확인하기
$Element("child").isChildOf("parent");		// 결과 : true
$Element("others").isChildOf("parent");		// 결과 : false
$Element("grandchild").isChildOf("parent");	// 결과 : true
  
 */
jindo.$Element.prototype.isChildOf = function(element) {
	//-@@$Element.isChildOf-@@//
	try{
		return jindo.$Element._contain(jindo.$Element(element)._element,this._element);
	}catch(e){
		return false;
	}
};

//-!jindo.$Element.prototype.isParentOf start(jindo.$Element._contain)!-//
/**
 
 * @description isParentOf() 메서드는 파라미터로 지정한 요소가 HTML 요소의 자식 노드인지 검사한다.
 *
 * @param1 {String+} sElement 자식 노드인지 검사할 HTML 요소의 ID
 * @return1 {Boolean} 지정한 요소가 자식 요소이면 true, 그렇지 않으면 false를 반환한다.
 *
 * @param2 {Element+} elElement 자식 노드인지 검사할 HTML 요소
 * @return2 {Boolean} 지정한 요소가 자식 요소이면 true, 그렇지 않으면 false를 반환한다.
 *
 * @see $Element#isChildOf
 * @example
<div id="parent">
	<div id="child"></div>
</div>
<div id="others"></div>

...

// 부모/자식 확인하기
$Element("parent").isParentOf("child");		// 결과 : true
$Element("others").isParentOf("child");		// 결과 : false
$Element("parent").isParentOf("grandchild");// 결과 : true
  
 */
jindo.$Element.prototype.isParentOf = function(element) {
	//-@@$Element.isParentOf-@@//
	try{
		return jindo.$Element._contain(this._element, jindo.$Element(element)._element);
	}catch(e){
		return false;
	}
};

//-!jindo.$Element.prototype.isEqual start!-//
/**
 
 * @description isEqual() 메서드는 파라미터로 지정한 요소가 HTML 요소와 같은 요소인지 검사한다. DOM Level 3 명세의 API 중 isSameNode 함수와 같은 메서드로 레퍼런스까지 확인한다. isEqualNode() 메서드와는 다른 함수이기 때문에 주의한다.
 *
 * @param1 {String+} vElement 같은 요소인지 비교할 HTML 요소의 ID.
 * @return1 {Boolean} 지정한 요소와 같은 요소이면 true, 그렇지 않으면 false를 반환한다.
 *
 * @param2 {Element+} vElement 같은 요소인지 비교할 HTML 요소.
 * @return2 {Boolean} 지정한 요소와 같은 요소이면 true, 그렇지 않으면 false를 반환한다.
 *
 * @see <a href="http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-isSameNode">isSameNode</a> - W3C DOM Level 3 Specification
 * @see $Element#isEqualnode
 * @example
<div id="sample1"><span>Sample</span></div>
<div id="sample2"><span>Sample</span></div>

...

// 같은 HTML 요소인지 확인
var welSpan1 = $Element("sample1").first();	// <span>Sample</span>
var welSpan2 = $Element("sample2").first();	// <span>Sample</span>

welSpan1.isEqual(welSpan2); // 결과 : false
welSpan1.isEqual(welSpan1); // 결과 : true
  
 */
jindo.$Element.prototype.isEqual = function(element) {
	//-@@$Element.isEqual-@@//
	try {
		return (this._element === jindo.$Element(element)._element);
	} catch(e) {
		return false;
	}
};

//-!jindo.$Element.prototype.fireEvent start!-//
/**
 
 * @description fireEvent() 메서드는 HTML 요소에 이벤트를 발생시킨다. 파라미터로 발생시킬 이벤트 종류와 이벤트 객체의 속성을 지정할 수 있다.
 *
 * @param1 {String+} sEvent 발생시킬 이벤트 이름. on 접두사는 생략한다.
 * @return1 {$Element} 이벤트가 발생한 HTML 요소의 $Element() 객체.
 *
 * @param2 {String+} sEvent 발생시킬 이벤트 이름. on 접두사는 생략한다.
 * @param2 {Hash+} oProps 이벤트 객체의 속성을 지정한 객체. 이벤트를 발생시킬 때 속성을 설정할 수 있다.
 * @return2 {$Element} 이벤트가 발생한 HTML 요소의 $Element() 객체.
 *
 * @throws {jindo.$Except.ONLY_STRING_TYPE} 첫 번째 인자는 문자여야 한다.
 * @throws {jindo.$Except.EITHER_OBJECT_OR_UNDEFINED} 두 번째 인자는 오브젝트이거나 undefined여야 한다.
 * @since 1.4.1 버전부터 keyCode 값을 설정할 수 있다. WebKit 계열에서는 이벤트 객체의 keyCode가 읽기 전용(read-only)인 관계로 key 이벤트를 발생시킬 경우 keyCode 값을 설정할 수 없었다.
 * @example
$Element("div").fireEvent("click", {left : true, middle : false, right : false}); // click 이벤트 발생
$Element("div").fireEvent("mouseover", {screenX : 50, screenY : 50, clientX : 50, clientY : 50}); // mouseover 이벤트 발생
$Element("div").fireEvent("keydown", {keyCode : 13, alt : true, shift : false ,meta : false, ctrl : true}); // keydown 이벤트 발생
  
 */
jindo.$Element.prototype.fireEvent = function(sEvent, oProps) {
	//-@@$Element.fireEvent-@@//
	var _oParam = {
			'4str' : [ jindo.$Jindo._F('sEvent:String+') ],
			'4obj' : [ 'sEvent:String+', 'oProps:Hash+' ]
	};
	function IE(sEvent, oProps) {
		var oArgs = jindo.$Jindo.checkVarType(arguments, _oParam,"$Element#fireEvent");
	
		sEvent = (sEvent+"").toLowerCase();
		var oEvent = document.createEventObject();
		
		switch(oArgs+""){
			case "4obj":
				oProps = oArgs.oProps;
				for (k in oProps){
					if(oProps.hasOwnProperty(k))
						oEvent[k] = oProps[k];
				} 
				oEvent.button = (oProps.left?1:0)+(oProps.middle?4:0)+(oProps.right?2:0);
				oEvent.relatedTarget = oProps.relatedElement||null;
				
		}

		var ele = this._element;
		if(this.tag == "input" && sEvent == "click"){ 
	        if(ele.type=="checkbox"){ 
	        	ele.checked = (!ele.checked); 
	        }else if(ele.type=="radio"){ 
	        	ele.checked = true; 
	        } 
		} 
				
		this._element.fireEvent("on"+sEvent, oEvent);
		return this;
	}

	function DOM2(sEvent, oProps) {
		var oArgs = jindo.$Jindo.checkVarType(arguments, _oParam,"$Element#fireEvent");
		var sType = "HTMLEvents";
		sEvent = (sEvent+"").toLowerCase();

		if (sEvent == "click" || sEvent.indexOf("mouse") == 0) {
			sType = "MouseEvent";
			if (sEvent == "mousewheel") sEvent = "dommousescroll";
		} else if (sEvent.indexOf("key") == 0) {
			sType = "KeyboardEvent";
		}
		var evt;
		switch (oArgs+"") {
			case "4obj":
				oProps = oArgs.oProps;
				oProps.button = 0 + (oProps.middle?1:0) + (oProps.right?2:0);
				oProps.ctrl = oProps.ctrl||false;
				oProps.alt = oProps.alt||false;
				oProps.shift = oProps.shift||false;
				oProps.meta = oProps.meta||false;
				switch (sType) {
					case 'MouseEvent':
						evt = document.createEvent(sType);
	
						evt.initMouseEvent( sEvent, true, true, null, oProps.detail||0, oProps.screenX||0, oProps.screenY||0, oProps.clientX||0, oProps.clientY||0, 
											oProps.ctrl, oProps.alt, oProps.shift, oProps.meta, oProps.button, oProps.relatedElement||null);
						break;
					case 'KeyboardEvent':
						if (window.KeyEvent) {
					        evt = document.createEvent('KeyEvents');
					        evt.initKeyEvent(sEvent, true, true, window,  oProps.ctrl, oProps.alt, oProps.shift, oProps.meta, oProps.keyCode, oProps.keyCode);
					    } else {
							try {
					            evt = document.createEvent("Events");
					        } catch (e){
					            evt = document.createEvent("UIEvents");
					        } finally {
								evt.initEvent(sEvent, true, true);
								evt.ctrlKey  = oProps.ctrl;
						        evt.altKey   = oProps.alt;
						        evt.shiftKey = oProps.shift;
						        evt.metaKey  = oProps.meta;
						        evt.keyCode = oProps.keyCode;
						        evt.which = oProps.keyCode;
					        }          
					    }
						break;
					default:
						evt = document.createEvent(sType);
						evt.initEvent(sEvent, true, true);				
				}
			break;
			case "4str":
				evt = document.createEvent(sType);			
				evt.initEvent(sEvent, true, true);
			
		}
		this._element.dispatchEvent(evt);
		return this;
	}
	jindo.$Element.prototype.fireEvent =  (document.dispatchEvent !== undefined)?DOM2:IE;
	return this.fireEvent.apply(this,_toArray(arguments));
}

//-!jindo.$Element.prototype.empty start(jindo.$Element.prototype.html)!-//
/**
 
 * @description empty() 메서드는 HTML 요소의 자식 노드를 모두 제거한다.
 * @return {$Element} 자식 노드를 모두 제거한 $Element 객체.
 * @see $Element#leave
 * @see $Element#remove
 * @example
// 자식 노드를 모두 제거
$Element("sample").empty();

//Before
<div id="sample"><span>노드</span> <span>모두</span> 삭제하기 </div>

//After
<div id="sample"></div>
  
 */
jindo.$Element.prototype.empty = function() {
	//-@@$Element.empty-@@//
	if(jindo.cssquery) jindo.cssquery.release();
	this.html("");
	return this;
};

//-!jindo.$Element.prototype.remove start(jindo.$Element.prototype.leave, jindo.$Element._common)!-//
/**
 
 * @description remove() 메서드는 HTML 요소의 특정 자식 노드를 제거한다. 파라미터로 지정한 자식 요소를 제거하며 제거되는 자식 요소의 이벤트 핸들러도 제거한다.
 *
 * @param1 {String+} vElement 자식 요소에서 제거할 HTML 요소의 ID.
 * @return1 {$Element} 지정한 자식 요소를 제거한 $Element() 객체.
 *
 * @param2 {Element+} vElement 자식 요소에서 제거할 HTML 요소.
 * @return2 {$Element} 지정한 자식 요소를 제거한 $Element() 객체.
 *
 * @throws {jindo.$Except.EITHER_STRING_OR_ELEMENT_OR_$ELEMENT} 문자, 엘리먼트, $Element 중 하나여야 한다.
 * @see $Element#empty
 * @see $Element#leave
 * @example
// 특정 자식 노드를 제거
$Element("sample").remove("child2");

//Before
<div id="sample"><span id="child1">노드</span> <span id="child2">삭제하기</span></div>

//After
<div id="sample"><span id="child1">노드</span> </div>
  
 */
jindo.$Element.prototype.remove = function(oChild) {
	//-@@$Element.remove-@@//
	if(jindo.cssquery) jindo.cssquery.release();
	var ___element = jindo.$Element;
	___element(___element._common(oChild,"remove")).leave();
	return this;
};

//-!jindo.$Element.prototype.leave start(jindo.$Element.event_etc)!-//
/**
 
 * @description leave() 메서드는 HTML 요소를 자신의 부모 요소에서 제거한다. HTML 요소에 등록된 이벤트 핸들러도 제거한다.
 * @return {$Element} 부모 요소에서 제거된 $Element() 객체.
 * @see $Element#empty
 * @see $Element#remove
 *
 * @example
// 부모 요소 노드에서 제거
$Element("sample").leave();

//Before
<div>
	<div id="sample"><span>노드</span> <span>모두</span> 삭제하기 </div>
</div>

//After
// <div id="sample"><span>노드</span> <span>모두</span> 삭제하기 </div>를 래핑한 $Element가 반환된다
<div>

</div>
  
 */
jindo.$Element.prototype.leave = function() {
	//-@@$Element.leave-@@//
	var e = this._element;

	if (e.parentNode) {
		if(jindo.cssquery) jindo.cssquery.release();
		e.parentNode.removeChild(e);
	}
	
	if(this._element.__jindo__id){
		jindo.$Element.eventManager.cleanUpUsingKey(this._element.__jindo__id,true);
	}

	return this;
};

//-!jindo.$Element.prototype.wrap start(jindo.$Element._common)!-//
/**
 
 * @description wrap() 메서드는 HTML 요소를 지정한 요소로 감싼다. HTML 요소는 지정한 요소의 마지막 자식 요소가 된다.
 *
 * @param1 {String+} vElement 부모가 될 HTML 요소의 ID.
 * @return1 {$Element} 지정한 요소로 감싸진 $Element() 객체.
 *
 * @param2 {Element+|Node} vElement 부모가 될 HTML 요소.
 * @return2 {$Element} 지정한 요소로 감싸진 $Element() 객체.
 *
 * @throws {jindo.$Except.EITHER_STRING_OR_ELEMENT_OR_$ELEMENT} 문자, 엘리먼트, $Element 중 하나여야 한다.
 * @example
$Element("sample1").wrap("sample2");

//Before
<div id="sample1"><span>Sample</span></div>
<div id="sample2"><span>Sample</span></div>

//After
<div id="sample2"><span>Sample</span><div id="sample1"><span>Sample</span></div></div>

 * @example
$Element("box").wrap($('<DIV>'));

//Before
<span id="box"></span>

//After
<div><span id="box"></span></div>
  
 */
jindo.$Element.prototype.wrap = function(wrapper) {
	//-@@$Element.wrap-@@//
	var e = this._element;
	wrapper = jindo.$Element._common(wrapper,"wrap");
	if (e.parentNode) {
		e.parentNode.insertBefore(wrapper, e);
	}
	wrapper.appendChild(e);

	return this;
};

//-!jindo.$Element.prototype.ellipsis start(jindo.$Element.prototype._getCss,jindo.$Element.prototype.text)!-//
/**
 
 * @description ellipsis() 메서드는 HTML 요소의 텍스트 노드가 브라우저에서 한 줄로 보이도록 길이를 조절한다. 이 메서드는 HTML 요소가 텍스트 노드만을 포함한다고 가정하고 동작한다. 따라서, 이 외의 상황에서는 사용을 자제한다. 또한 브라우저에서 HTML 요소의 너비를 기준으로 텍스트 노드의 길이를 정하므로 HTML 요소는 반드시 보이는 상태(display)여야 한다. 화면에 전체 텍스트 노드가 보였다가 줄어드는 경우가 있다. 이 경우, HTML 요소에 overflow 속성의 값을 hidden으로 지정하면 해결할 수 있다.
 *
 * @param1 {Void}
 * @return1 {$Element} $Element() 객체 자신
 *
 * @param2 {String+} sTail 말줄임 표시자.<br>파라미터에 지정한 문자열을 텍스트 노드 끝에 붙이고 텍스트 노드의 길이를 조절한다. 파라미터를 생락하면 기본 값으로 '...'를 사용한다.
 * @return2 {$Element} $Element() 객체 자신
 *
 * @example
$Element("sample_span").ellipsis();

//Before
<div style="width:300px; border:1px solid #CCCCCC; padding:10px">
	<span id="sample_span">NHN은 검색과 게임을 양축으로 혁신적이고 편리한 온라인 서비스를 꾸준히 선보이며 디지털 라이프를 선도하고 있습니다.</span>
</div>

//After
<div style="width:300px; border:1px solid #CCCCCC; padding:10px">
	<span id="sample_span">NHN은 검색과 게임을 양축으로 혁신적...</span>
</div>
   
 */
jindo.$Element.prototype.ellipsis = function(stringTail) {
	//-@@$Element.ellipsis-@@//
	
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4voi' : [ ],
		'4str' : [ 'stringTail:String+' ]
	},"$Element#ellipsis");
	
	stringTail = stringTail || "...";
	var txt   = this.text();
	var len   = txt.length;
	var padding = parseInt(this._getCss(this._element,"paddingTop"),10) + parseInt(this._getCss(this._element,"paddingBottom"),10);
	var cur_h = this._element.offsetHeight - padding;
	var i     = 0;
	var h     = this.text('A')._element.offsetHeight - padding;

	if (cur_h < h * 1.5) {
		this.text(txt);
		return this;
	}

	cur_h = h;
	while(cur_h < h * 1.5) {
		i += Math.max(Math.ceil((len - i)/2), 1);
		cur_h = this.text(txt.substring(0,i)+stringTail)._element.offsetHeight - padding;
	}

	while(cur_h > h * 1.5) {
		i--;
		cur_h = this.text(txt.substring(0,i)+stringTail)._element.offsetHeight - padding;
	}
	return this;
};

//-!jindo.$Element.prototype.indexOf start!-//
/**
 
 * @description indexOf() 메서드는 HTML 요소에서 파라미터로 지정한 요소가 몇 번째 자식인지 확인하여 인덱스를 반환한다.
 *
 * @param1 {String+} vElement 몇 번째 자식인지 검색할 요소의 ID
 * @return1 {Numeric} 검색 결과 인덱스.<br>인덱스는 0부터 시작하며, 찾지 못한 경우에는 -1 을 반환한다.
 *
 * @param2 {Element+} vElement 몇 번째 자식인지 검색할 요소.
 * @return2 {Numeric} 검색 결과 인덱스.<br>인덱스는 0부터 시작하며, 찾지 못한 경우에는 -1 을 반환한다.
 *
 * @throws {jindo.$Except.EITHER_STRING_OR_ELEMENT_OR_$ELEMENT} 문자, 엘리먼트, $Element 중 하나여야 한다.
 * @since 1.2.0
 * @see $Element#parent
 * @see $Element#child
 * @see $Element#prev
 * @see $Element#next
 * @see $Element#first
 * @see $Element#last
 * @example
<div id="sample_div1">
	<div id="sample_div">
		<div id="sample_div2">
			Sample1
		</div>
		<div id="sample_div3">
			<div id="sample_div4">
				Sample2
			</div>
			Sample3
		</div>
		<div id="sample_div5">
			Sample4
			<div id="sample_div6">
				Sample5
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
	var welSample = $Element("sample_div");
	welSample.indexOf($Element("sample_div1"));	// 결과 : -1
	welSample.indexOf($Element("sample_div2"));	// 결과 : 0
	welSample.indexOf($Element("sample_div3"));	// 결과 : 1
	welSample.indexOf($Element("sample_div4"));	// 결과 : -1
	welSample.indexOf($Element("sample_div5"));	// 결과 : 2
	welSample.indexOf($Element("sample_div6"));	// 결과 : -1
</script>
  
 */
jindo.$Element.prototype.indexOf = function(element) {
	//-@@$Element.indexOf-@@//
	try {
		var e = jindo.$Element(element)._element;
		var n = this._element.childNodes;
		var c = 0;
		var l = n.length;

		for (var i=0; i < l; i++) {
			if (n[i].nodeType != 1) continue;

			if (n[i] === e) return c;
			c++;
		}
	}catch(e){}

	return -1;
};

//-!jindo.$Element.prototype.queryAll start(jindo.cssquery)!-//
/**
 
 * @description queryAll() 메서드는 HTML 요소에서 특정 CSS 선택자(CSS Selector)를 만족하는 하위 요소를 찾는다.
 * @param {String+} sSelector CSS 선택자. CSS 선택자로 사용할 수 있는 패턴은 표준 패턴과 비표준 패턴이 있다. 표준 패턴은 CSS Level3 명세서에 있는 패턴을 지원한다.
 * @return {Array($Element)} CSS 셀렉터 조건을 만족하는 HTML 요소의 $Element배열을 반환한다.<br>만족하는 HTML 요소가 존재하지 않으면 빈 배열을 반환한다.
 * @see $Element#query
 * @see $Element#queryAll
 * @see <a href="http://www.w3.org/TR/css3-selectors/">CSS Level3 명세서</a> - W3C
 * @example
<div id="sample">
	<div></div>
	<div class="pink"></div>
	<div></div>
	<div class="pink"></div>
	<div></div>
	<div class="blue"></div>
	<div class="blue"></div>
</div>

<script type="text/javascript">
	$Element("sample").queryAll(".pink");
	// <div class="pink"></div>와 <div class="pink"></div>를 원소로 하는 배열을 반환

	$Element("sample").queryAll(".green");
	// [] 빈 배열을 반환
</script>
  
 */
jindo.$Element.prototype.queryAll = function(sSelector) { 
	//-@@$Element.queryAll-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str'  : [ 'sSelector:String+']
	},"$Element#queryAll");
	
	var arrEle = jindo.cssquery(sSelector, this._element);
	var returnArr = [];
	for(var i = 0, l = arrEle.length; i < l; i++){
		returnArr.push(jindo.$Element(arrEle[i]));
	}
	return returnArr; 
};

//-!jindo.$Element.prototype.query start(jindo.cssquery)!-//
/**
 
 * @description query() 메서드는 HTML 요소에서 특정 CSS 선택자(CSS Selector)를 만족하는 첫 번째 하위 요소를 반환한다.
 * @param {String+} sSelector CSS 선택자. CSS 선택자로 사용할 수 있는 패턴은 표준 패턴과 비표준 패턴이 있다. 표준 패턴은 CSS Level3 명세서에 있는 패턴을 지원한다.
 * @return {$Element} CSS 선택자의 조건을 만족하는 첫 번째 HTML 요소의 $Element인스턴스.<br>만족하는 HTML 요소가 존재하지 않으면 null을 반환한다.
 * @see $Element#test
 * @see $Element#queryAll
 * @see <a href="http://www.w3.org/TR/css3-selectors/">CSS Level3 명세서</a> - W3C
 * @example
<div id="sample">
	<div></div>
	<div class="pink"></div>
	<div></div>
	<div class="pink"></div>
	<div></div>
	<div class="blue"></div>
	<div class="blue"></div>
</div>

<script type="text/javascript">
	$Element("sample").query(".pink");
	// 첫 번째 <div class="pink"></div> DIV 요소를 반환

	$Element("sample").query(".green");
	// null 을 반환
</script>
  
 */
jindo.$Element.prototype.query = function(sSelector) { 
	//-@@$Element.query-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str'  : [ 'sSelector:String+']
	},"$Element#query");
	var ele =  jindo.cssquery.getSingle(sSelector, this._element);
	return ele === null? ele : jindo.$Element(ele); 
};

//-!jindo.$Element.prototype.test start(jindo.cssquery)!-//
/**
 
 * @description test() 메서드는 HTML 요소에서 특정 CSS 선택자(CSS Selector)를 만족하는지 확인한다.
 *
 * @param {String+} sSelector CSS 선택자. CSS 선택자로 사용할 수 있는 패턴은 표준 패턴과 비표준 패턴이 있다. 표준 패턴은 CSS Level3 명세서에 있는 패턴을 지원한다.
 * @return {Boolean} CSS 선택자의 조건을 만족하면 true, 그렇지 않으면 false를 반환한다.
 * @see $Element#query
 * @see $Element#queryAll
 * @see <a href="http://www.w3.org/TR/css3-selectors/">CSS Level3 명세서</a> - W3C
 * @example
<div id="sample" class="blue"></div>

<script type="text/javascript">
	$Element("sample").test(".blue");	// 결과 : true
	$Element("sample").test(".red");	// 결과 : false
</script>
  
 */
jindo.$Element.prototype.test = function(sSelector) {
	//-@@$Element.test-@@// 
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str'  : [ 'sSelector:String+']
	},"$Element#test");
	return jindo.cssquery.test(this._element, sSelector); 
};

//-!jindo.$Element.prototype.xpathAll start(jindo.cssquery)!-//
/**
 
 * @description xpathAll() 메서드는 HTML 요소를 기준으로 XPath 문법을 만족하는 요소를 가져온다. 지원하는 문법이 제한적이므로 특수한 경우에만 사용할 것을 권장한다.
 * @param {String+} sXPath XPath 값.
 * @return {Array($Element)} XPath 문법을 만족하는 요소를 원소로 하는 배열.
 * @see <a href="_global_.html#$$">$$()</a>
 * @example
<div id="sample">
	<div>
		<div>1</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>
		<div>5</div>
		<div>6</div>
	</div>
</div>

<script type="text/javascript">
	$Element("sample").xpathAll("div/div[5]");
	// <div>5</div> 요소를 원소로 하는 배열이 반환 됨
</script>
  
 */
jindo.$Element.prototype.xpathAll = function(sXPath) {
	//-@@$Element.xpathAll-@@// 
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str'  : [ 'sXPath:String+']
	},"$Element#xpathAll");
	var arrEle = jindo.cssquery.xpath(sXPath, this._element);
	var returnArr = [];
	for(var i = 0, l = arrEle.length; i < l; i++){
		returnArr.push(jindo.$Element(arrEle[i]));
	}
	return returnArr; 
};

//-!jindo.$Element.prototype.insertAdjacentHTML.hidden start(jindo._createEle)!-//
/**
 
 * insertAdjacentHTML 함수. 직접사용하지 못함.
 * @ignore
  
 */
jindo.$Element.insertAdjacentHTML = function(ins,html,insertType,type,fn,sType){
	var aArg = [ html ];
	aArg.callee = arguments.callee;
	var oArgs = jindo.$Jindo.checkVarType(aArg, {
		'4str'  : [ 'sHTML:String+' ]
	},"$Element#"+sType);
	var _ele = ins._element;
	html = html+"";
	if( _ele.insertAdjacentHTML && !(/^<(option|tr|td|th|col)(?:.*?)>/.test(html.replace(/^(\s|　)+|(\s|　)+$/g, "").toLowerCase()))){
		_ele.insertAdjacentHTML(insertType, html);
	}else{
		var oDoc = _ele.ownerDocument || _ele.document || document;
		var fragment = oDoc.createDocumentFragment();
		var defaultElement;
		var sTag = html.replace(/^(\s|　)+|(\s|　)+$/g, "");
		var oParentTag = {
			"option" : "select",
			"tr" : "tbody",
			"thead" : "table",
			"tbody" : "table",
			"col" : "table",
			"td" : "tr",
			"th" : "tr",
			"div" : "div"
		}
		var aMatch = /^\<(option|tr|thead|tbody|td|th|col)(?:.*?)\>/i.exec(sTag);
		var sChild = aMatch === null ? "div" : aMatch[1].toLowerCase();
		var sParent = oParentTag[sChild] ;
		defaultElement = jindo._createEle(sParent,sTag,oDoc,true);
		var scripts = defaultElement.getElementsByTagName("script");
	
		for ( var i = 0, l = scripts.length; i < l; i++ ){
			scripts[i].parentNode.removeChild( scripts[i] );
		}
		
		while ( defaultElement[ type ]){
			fragment.appendChild( defaultElement[ type ] );
		}
		
		fn(fragment.cloneNode(true));

	}
	return ins;
};


//-!jindo.$Element.prototype.appendHTML start(jindo.$Element.prototype.insertAdjacentHTML)!-//
/**
 
 * @description appendHTML() 메서드는 내부 HTML 코드(innerHTML)의 뒤에 파라미터로 지정한 HTML 코드를 덧붙인다.
 * @param {String+} sHTML 덧붙일 HTML 문자열.
 * @return {$Element} 내부 HTML 코드를 변경한 $Element() 객체.
 * @since 1.4.6 부터 사용 가능.
 * @since 1.4.8 부터 $Element 객체를 반환한다.
 * @see $Element#prependHTML
 * @see $Element#beforeHTML
 * @see $Element#afterHTML
 * @example
// 내부 HTML 가장 뒤에 덧붙이기
$Element("sample_ul").appendHTML("<li>3</li><li>4</li>");

//Before
<ul id="sample_ul">
	<li>1</li>
	<li>2</li>
</ul>

//After
<ul id="sample_ul">
	<li>1</li>
	<li>2</li>
	<li>3</li>
	<li>4</li>
</ul>
  
 */
jindo.$Element.prototype.appendHTML = function(sHTML) {
	//-@@$Element.appendHTML-@@//
	return jindo.$Element.insertAdjacentHTML(this,sHTML,"beforeEnd","firstChild",jindo.$Fn(function(oEle){
		this._element.appendChild(oEle);
	},this).bind(),"appendHTML");
};

//-!jindo.$Element.prototype.prependHTML start(jindo.$Element.prototype.insertAdjacentHTML,jindo.$Element._prepend)!-//
/**
 
 * @description prependHTML() 메서드는 내부 HTML 코드(innerHTML)의 앞에 파라미터로 지정한 HTML 코드를 삽입한다.
 * @param {String+} sHTML 삽입할 HTML 문자열.
 * @return {$Element} 내부 HTML 코드를 변경한 $Element() 객체.
 * @since 1.4.6 부터 사용 가능.
 * @since 1.4.8 부터 $Element 객체를 반환한다.
 * @see $Element#appendHTML
 * @see $Element#beforeHTML
 * @see $Element#afterHTML
 * @example
// 내부 HTML 가장 앞에 삽입
$Element("sample_ul").prependHTML("<li>3</li><li>4</li>");

//Before
<ul id="sample_ul">
	<li>1</li>
	<li>2</li>
</ul>

//After
<ul id="sample_ul">
	<li>4</li>
	<li>3</li>
	<li>1</li>
	<li>2</li>
</ul>
  
 */
jindo.$Element.prototype.prependHTML = function(sHTML) {
	//-@@$Element.prependHTML-@@//
	var ___element = jindo.$Element
	return ___element.insertAdjacentHTML(this,sHTML,"afterBegin","firstChild",jindo.$Fn(function(oEle){
		___element._prepend(this._element,oEle);
	},this).bind(),"prependHTML");
};

//-!jindo.$Element.prototype.beforeHTML start(jindo.$Element.prototype.insertAdjacentHTML)!-//
/**
 
 * @description beforeHTML() 메서드는 HTML 코드(outerHTML)의 앞에 파라미터로 지정한 HTML 코드를 삽입한다.
 * @param {String+} sHTML 삽입할 HTML 문자열.
 * @return {$Element} HTML 코드를 변경한 $Element() 객체.
 * @since 1.4.6 부터 사용 가능.
 * @since 1.4.8 부터 $Element 객체를 반환한다.
 * @see $Element#appendHTML
 * @see $Element#prependHTML
 * @see $Element#afterHTML
 * @example
var welSample = $Element("sample_ul");

welSample.beforeHTML("<ul><li>3</li><li>4</li></ul>");
welSample.beforeHTML("<ul><li>5</li><li>6</li></ul>");

//Before
<ul id="sample_ul">
	<li>1</li>
	<li>2</li>
</ul>

//After
<ul>
	<li>5</li>
	<li>6</li>
</ul>
<ul>
	<li>3</li>
	<li>4</li>
</ul>
<ul id="sample_ul">
	<li>1</li>
	<li>2</li>
</ul>
  
 */
jindo.$Element.prototype.beforeHTML = function(sHTML) {
	//-@@$Element.beforeHTML-@@//
	return jindo.$Element.insertAdjacentHTML(this,sHTML,"beforeBegin","firstChild",jindo.$Fn(function(oEle){
		this._element.parentNode.insertBefore(oEle, this._element);
	},this).bind(),"beforeHTML");
};

//-!jindo.$Element.prototype.afterHTML start(jindo.$Element.prototype.insertAdjacentHTML)!-//
/**
 
 * @description afterHTML() 메서드는 HTML 코드(outerHTML)의 뒤에 파라미터로 지정한 HTML 코드를 삽입한다.
 * @param {String+} sHTML 삽입할 HTML 문자열.
 * @return {$Element} HTML 코드를 변경한 $Element() 객체.
 * @since 1.4.6 부터 사용 가능.
 * @since 1.4.8 부터 $Element 객체를 반환한다.
 * @see $Element#appendHTML
 * @see $Element#prependHTML
 * @see $Element#beforeHTML
 * @example
var welSample = $Element("sample_ul");

welSample.afterHTML("<ul><li>3</li><li>4</li></ul>");
welSample.afterHTML("<ul><li>5</li><li>6</li></ul>");

//Before
<ul id="sample_ul">
	<li>1</li>
	<li>2</li>
</ul>

//After
<ul id="sample_ul">
	<li>1</li>
	<li>2</li>
</ul>
<ul>
	<li>3</li>
	<li>4</li>
</ul>
<ul>
	<li>5</li>
	<li>6</li>
</ul>
  
 */
jindo.$Element.prototype.afterHTML = function(sHTML) {
	//-@@$Element.afterHTML-@@//
	return jindo.$Element.insertAdjacentHTML(this,sHTML,"afterEnd","firstChild",jindo.$Fn(function(oEle){
		this._element.parentNode.insertBefore( oEle, this._element.nextSibling );
	},this).bind(),"afterHTML");
};

//-!jindo.$Element.prototype.hasEventListener start(jindo.$Element.prototype.attach)!-//
/**

 * 엘리먼트에 해당 이벤트가 할당되어 있는지를 확인.
 * @since 2.0.0
 * @param {String+} sEvent 이벤트명
 * @return {Boolean} 이벤트 할당 유무
 * @example
 $Element("test").attach("click",function(){});
 
 $Element("test").hasEventListener("click"); //true
 $Element("test").hasEventListener("mousemove"); //false
  
 */
jindo.$Element.prototype.hasEventListener = function(sEvent){

	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str' : [ 'sEvent:String+' ]
	},"$Element#hasEventListener");
	
	if(this._key){
		return !!jindo.$Element.eventManager.hasEvent(this._key, oArgs.sEvent);
	}
	
	return false;
};

//-!jindo.$Element.prototype.preventTapHighlight start(jindo.$Element.prototype.addClass, jindo.$Element.prototype.removeClass)!-//
/**

 * 모바일에서 이벤트 델리게이트를 사용했을때 부모 엘리먼트에 하이라이트가 되는 것을 막는다. 
 * @caution 데스크탑에서는 작동하지 않는다.
 * @since 2.0.0
 * @param {Boolean} bType 하이라이트를 막을지 유무
 * @return {$Element} 자신
 * @example
 <ul id="test">
 	<li><a href="#nhn">nhn</a></li>
 	<li><a href="#naver">naver</a></li>
 	<li><a href="#hangame">hangame</a></li>
 </ul>
 
 $Element("test").preventTapHighlight(true);//이렇게 하면 모바일에서 test에 하이라이트가 되는 것을 막는다.
 $Element("test").delegate("click","a",function(e){});
 
  
 */
jindo.$Element.prototype.preventTapHighlight = function(bFlag){
	if(_JINDO_IS_MO){
		var sClassName = 'no_tap_highlight' + new Date().getTime();
		
		var elStyleTag = document.createElement('style');
		var elHTML = document.getElementsByTagName('html')[0];
		
		elStyleTag.type = "text/css";
		
		elHTML.insertBefore(elStyleTag, elHTML.firstChild);
		var oSheet = elStyleTag.sheet || elStyleTag.styleSheet;
		
		oSheet.insertRule('.' + sClassName + ' { -webkit-tap-highlight-color: rgba(0,0,0,0); }', 0);
		oSheet.insertRule('.' + sClassName + ' * { -webkit-tap-highlight-color: rgba(0,0,0,.25); }', 0);
		
		jindo.$Element.prototype.preventTapHighlight = function(bFlag) {
			return this[bFlag ? 'addClass' : 'removeClass'](sClassName);
		};
	}else{
		jindo.$Element.prototype.preventTapHighlight = function(bFlag) { return this; };
	}
	return this.preventTapHighlight.apply(this,_toArray(arguments));
};

//-!jindo.$ElementList start(jindo.$Element)!-//
/**
 
 * @fileOverview $ElementList의 생성자 및 메서드를 정의한 파일
 * @name elementlist.js
 * @author Kim, Taegon
  
 */

/**
 
 * @class $ElementList() 객체는 여러 개의 DOM 요소를 한 번에 다룰 수 있는 기능을 제공한다. $ElementList 객체는 DOM 요소를 배열 형태로 관리한다.
 * @constructor
 * @description $ElementList() 객체를 생성한다. $ElementList() 객체를 생성할 때 DOM 요소의 ID 또는 ID를 원소로 같은 배열, 혹은 CSS 선택자, $Element() 객체를 원소로 갖는 배열 등을 사용하여 $ElementList() 객체를 생성한다.
 *
 * @param1 {Void}
 *
 * @param2 {String+} sIDorSelector 문서에서 DOM 요소를 찾기 위한 CSS 선택자(CSS Selector) 혹은 ID 를 입력한다.
 *
 * @param3 {Array+} aList 문서에서 DOM 요소의 ID, Element, $Element() 객체를 원소로 같는 배열을 입력한다.
 *
 * @throws {jindo.$Except.$ELEMENTLIST_OPTION} 인자가 배열, 문자, $A, null, undefined가 아닌 경우에 발생한다.
 * @borrows $Element#show as this.show
 * @borrows $Element#hide as this.hide
 * @borrows $Element#toggle as this.toggle
 * @borrows $Element#addClass as this.addClass
 * @borrows $Element#removeClass as this.removeClass
 * @borrows $Element#toggleClass as this.toggleClass
 * @borrows $Element#fireEvent as this.fireEvent
 * @borrows $Element#leave as this.leave
 * @borrows $Element#empty as this.empty
 * @borrows $Element#appear as this.appear
 * @borrows $Element#disappear as this.disappear
 * @borrows $Element#className as this.className
 * @borrows $Element#width as this.width
 * @borrows $Element#height as this.height
 * @borrows $Element#text as this.text
 * @borrows $Element#html as this.html
 * @borrows $Element#css as this.css
 * @borrows $Element#attr as this.attr
 * @example
 // 'foo', 'bar' 요소의 ElementList를 생성한다.
var woElList = $ElementList($('foo','bar'));

// 문서의 모든 'DIV' 요소에 대한 $ElementList를 생성한다. 
var woElList = $ElementList('DIV');

  
 */
jindo.$ElementList = function (els) {
	//-@@$ElementList-@@//
	var cl = arguments.callee;
	if (els instanceof cl) return els;
	
	if (!(this instanceof cl)){
		try {
			return new cl(els);
		} catch(e) {
			if (e instanceof TypeError) { return null; }
			throw e;
		}
	}	
	
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4arr' : [ 'aEle:Array+' ],
		'4str' : [ 'sCssQuery:String+' ],
		'4nul' : [ 'oEle:Null' ],
		'4und' : [ 'oEle:Undefined' ]
	},"$ElementList");
	
	switch(oArgs+""){
		case "4arr":
			els = oArgs.aEle;
			break;
		case "4str":
			els = jindo.cssquery(oArgs.sCssQuery);
			break;
		case "4nul":
		case "4und":
			els = [];
	}

	this._elements = [];
	for(var i = 0, l = els.length; i < l ;i++){
		this._elements.push(jindo.$Element(els[i]));
	}
};
//-@@$ElementList.meta_program_config-@@//
(function(proto){
	var setters = ['show','hide','toggle','addClass','removeClass','toggleClass','fireEvent','leave',
				   'empty','className','width','height','text','html','css','attr'];
				   
	for (var i = 0, l = setters.length; i < l; i++) {
		var name = setters[i];
		if(jindo.$Element.prototype[name]){
			proto[setters[i]] = (function(name) {
				return function(){
					//-@@$ElementList.meta_program-@@//
					try{
						var args = [];
						for(var j = 0,m = arguments.length ; j < m ; j++){
							args.push(arguments[j]);
						}
						for(var k = 0,n = this._elements.length ; k < n ; k++){
							this._elements[k][name].apply(this._elements[k], args);
						}
						return this;
					}catch(e){
						throw TypeError(e.message.replace(/\$Element/g,"$Elementlist#"+name).replace(/Element\.html/g,"Elementlist.html#"+name));
					}
				}
	
			})(setters[i]);	
		} 
		
	}
	

	var setters2 = ['appear','disappear'];
	for (var i = 0, l = setters2.length; i < l; i++) {
		if (jindo.$Element.prototype[name]) {
			proto[setters2[i]] = (function(name){
				return function(duration, callback) {
					//-@@$ElementList.meta_program-@@//
					try{
						var self = this;
						for (var j = 0, m = this._elements.length; j < m; j++) {
							if(j == m-1) {
								this._elements[j][name](duration, function(){callback(self)});
							} else {
								this._elements[j][name](duration);
							}
						}
						return this;
					}catch(e){
						throw TypeError(e.message.replace(/\$Element/g,"$Elementlist#"+name).replace(/Element\.html/g,"Elementlist.html#"+name));
					}
				}
			})(setters2[i]);
		}
	}	
	
})(jindo.$ElementList.prototype);

//-!jindo.$ElementList.prototype.get start!-//
/**
 
 * @description get() 메서드는 $ElementList() 객체의 내부 요소 중에서 지정한 인덱스에 해당하는 요소를 반환한다.
 * @param {Numeric} nIndex 가져올 요소의 인덱스.<br>인덱스는 0부터 시작한다.
 * @return {$Element} 지정한 인덱스의 요소.
  
*/
jindo.$ElementList.prototype.get = function(idx) {
	//-@@$ElementList.get-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4num' : [ 'nIdx:Numeric' ]
	},"$ElementList#get");
	return this._elements[idx];
};

//-!jindo.$ElementList.prototype.getFirst start!-//
/**
 
 * @description getFirst() 메서드는 $ElementList() 객체의 첫 번째 요소를 반환한다. get() 메서드에 인덱스 값으로 0을 지정한 것과 동일하다.
 * @return {$Element} $ElementList() 객체의 첫 번째 요소.
 * @see $ElementList#get
 * @see $ElementList#getLast
  
*/
jindo.$ElementList.prototype.getFirst = function() {
	//-@@$ElementList.getFirst-@@//
	return this._elements[0];
};

//-!jindo.$ElementList.prototype.getLast start!-//
/**
 
 * @description getFirst() 메서드는 $ElementList() 객체의 마지막 요소를 반환한다. get() 메서드에 인덱스 값으로 마지막 인덱스 번호를 지정한 것과 동일하다.
 * @return {$Element} $ElementList() 객체의 마지막 요소.
 * @see $ElementList#get
 * @see $ElementList#getFirst
  
*/
jindo.$ElementList.prototype.getLast = function() {
	//-@@$ElementList.getLast-@@//
	return this._elements[Math.max(this._elements.length-1,0)];
};

//-!jindo.$ElementList.prototype.length start(jindo.$A.prototype.length)!-//
/**
 
 * @description length() 메서드는 $A() 객체의 length() 메서드를 이용하여 $ElementList() 객체의 크기를 반환하거나 조정한다.
 *
 * @param1 {Void}
 * @return1 	{Number} 현재 $ElementList() 객체의 배열 크기(Number)를 반환한다.
 *
 * @param2 	{Numeric} nLen 지정할 배열의 크기. nLen이 기존 $ElementList() 객체의 배열 크기보다 작으면 nLen 번째 이후의 원소는 제거한다.
 * @return2 	{$ElementList} 내부 배열을 변경한 $ElementList() 객체를 반환한다.
 *
 * @param3 	{Numeric} nLen 지정할 배열의 크기. nLen이 기존 $ElementList() 객체의 배열 크기보다 크면 추가된 배열의 공간에 oValue 파라미터의 값으로 채운다. nLen이 기존 $ElementList() 객체의 배열 크기보다 작으면 nLen 번째 이후의 원소는 제거한다.
 * @param3 	{Variant} oValue 새로운 원소를 추가할 때 사용할 초기 값.
 * @return3 	{$ElementList} 내부 배열을 변경한 $ElementList() 객체를 반환한다.
 *
 * @since 1.4.3 버전부터 사용 가능
 * @see $A#length
  
*/
jindo.$ElementList.prototype.length = function(nLen, oValue) {
	//-@@$ElementList.length-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4voi' : [],
		'4num' : [ jindo.$Jindo._F("nLen:Numeric")],
		'4var' : [ "nLen:Numeric", "oValue:Variant"]
	},"$ElementList#length");
	
	var waEle = jindo.$A(this._elements);
	try{
		return waEle.length.apply(waEle, _toArray(arguments));
	}catch(e){
		throw TypeError(e.message.replace(/\$A/g,"$Elementlist#length").replace(/A\.html/g,"Elementlist.html#length"));
	}
};

//-!jindo.$ElementList.prototype.$value start!-//
/**
 
 * @description $value() 메서드는 내부 배열을 반환한다.
 * @return {Array} $Element() 객체를 원소로 갖는 배열.
  
*/
jindo.$ElementList.prototype.$value = function() {
	//-@@$ElementList.$value-@@//
	return this._elements;
};

//-!jindo.$ElementList.prototype.show start(jindo.$Element.prototype.show)!-//

//-!jindo.$ElementList.prototype.hide start(jindo.$Element.prototype.hide)!-//

//-!jindo.$ElementList.prototype.toggle start(jindo.$Element.prototype.toggle)!-//

//-!jindo.$ElementList.prototype.addClass start(jindo.$Element.prototype.addClass)!-//

//-!jindo.$ElementList.prototype.removeClass start(jindo.$Element.prototype.removeClass)!-//

//-!jindo.$ElementList.prototype.toggleClass start(jindo.$Element.prototype.toggleClass)!-//

//-!jindo.$ElementList.prototype.fireEvent start(jindo.$Element.prototype.fireEvent)!-//

//-!jindo.$ElementList.prototype.leave start(jindo.$Element.prototype.leave)!-//

//-!jindo.$ElementList.prototype.empty start(jindo.$Element.prototype.empty)!-//

//-!jindo.$ElementList.prototype.className start(jindo.$Element.prototype.className)!-//

//-!jindo.$ElementList.prototype.width start(jindo.$Element.prototype.width)!-//

//-!jindo.$ElementList.prototype.height start(jindo.$Element.prototype.height)!-//

//-!jindo.$ElementList.prototype.text start(jindo.$Element.prototype.text)!-//

//-!jindo.$ElementList.prototype.html start(jindo.$Element.prototype.html)!-//

//-!jindo.$ElementList.prototype.css start(jindo.$Element.prototype.css)!-//

//-!jindo.$ElementList.prototype.attr start(jindo.$Element.prototype.attr)!-//

//-!jindo.$ElementList.prototype.appear start(jindo.$Element.prototype.appear)!-//

//-!jindo.$ElementList.prototype.disappear start(jindo.$Element.prototype.disappear)!-//

//-!jindo.$Form start!-//
/**
 
 * @class $Form() 객체는 &lt;form&gt; 요소와 자식 요소를 제어하는 기능을 제공한다.
 * @constructor
 * @description $Form() 객체를 생성한다.
 *
 * @param1 {Element} elForm	&lt;form&gt; 요소(Element).
 * @return1 {Element} 원본 &lt;form&gt; 요소
 *
 * @param2 {String} elForm	&lt;form&gt; 요소의 ID(String). 만약 동일한 ID를 사용한 &lt;form&gt; 요소가 둘 이상이면 먼저 나오는 요소를 감싼 $Form() 객체를 반환한다.
 * @return2 {Element} 원본 &lt;form&gt; 요소
  
 */
jindo.$Form = function (el) {
	//-@@$Form-@@//
	var cl = arguments.callee;
	if (el instanceof cl) return el;
	
	if (!(this instanceof cl)){
		try {
			jindo.$Jindo._warn(arguments.length, 1,"$Form");
			return new cl(el);
		} catch(e) {
			if (e instanceof TypeError) { return null; }
			throw e;
		}
	}	
	
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str' : ['oForm:String+'],
		'4ele' : [ 'oForm:Element+']
	},"$Form");
	
	switch (oArgs + "") {
		case "4str":
			el = jindo.$(el);
			break;
	}
	
	if (!(el.tagName&&el.tagName.toUpperCase()=="FORM")) {
		throw TypeError("only form");
	}
	this._form = el;
};

//-!jindo.$Form.prototype.$value start!-//
/**
 
 * @description $value() 메서드는 원본 &lt;form&gt; 요소를 반환한다
 * @example
var el = $('<form>');
var form = $Form(el);

alert(form.$value() === el); // true
  
 */
jindo.$Form.prototype.$value = function() {
	//-@@$Form.$value-@@//
	return this._form;
};

//-!jindo.$Form.prototype.serialize start(jindo.$H.prototype.toQueryString)!-//
/**
 
 * @description serialize() 메서드는 &lt;form&gt; 요소의 특정 또는 전체 입력 요소를 쿼리스트링(Query String) 형태로 반환한다. serialize() 메서드를 사용할 때 파라미터를 입력하지 않으면 &lt;form&gt; 요소의 하위의 모든 입력 요소를 쿼리스트링으로 반환하고 파라미터를 입력하면 지정한 이름과 같은 name 속성을 가지는 입력 요소를 쿼리스트링 형태로 반환한다.
 * @param {String} [sName1] 첫 번째 입력 요소의 이름(name).
 * @param {String} […] …
 * @param {String} [sNameN] N 번째 입력 요소의 이름(name).
 * @return {String} 쿼리스트링 형태로 변환한 문자열.
 * @see <a href="http://en.wikipedia.org/wiki/Querystring">Query String</a> - Wikipedia
 * @example
<form id="TEST">
	<input name="ONE" value="1" type="text" />
	<input name="TWO" value="2" checked="checked" type="checkbox" />
	<input name="THREE" value="3_1" type="radio" />
	<input name="THREE" value="3_2" checked="checked" type="radio" />
	<input name="THREE" value="3_3" type="radio" />
	<select name="FOUR">
		<option value="4_1">..</option>
		<option value="4_2">..</option>
		<option value="4_3" selected="selected">..</option>
	</select>
</form>

<script type="text/javascript">
	var form = $Form('TEST');

	var allstr = form.serialize();
	// ONE=1&TWO=2&THREE=3_2&FOUR=4_3

	var str = form.serialize('ONE', 'THREE');
	// ONE=1&THREE=3_2'
</script>
  
 */
jindo.$Form.prototype.serialize = function() {
	//-@@$Form.serialize-@@//
 	var self = this;
 	var oRet = {};
 	
 	var nLen = arguments.length;
 	var fpInsert = function(eEle,sKey) {
		if(!eEle.disabled){
	 		var sVal = self.value(sKey);
	 		if (sVal !== undefined) oRet[sKey] = sVal;
		}
 	};
 	
 	if (nLen == 0) {
 		var len = this._form.elements.length;
 		for(var i=0; i<len; i++){
 			var o = this._form.elements[i];
 			if(o.name) fpInsert(o,o.name);
 		}		
	}else{
		for (var i = 0; i < nLen; i++) {
			fpInsert(this.element(arguments[i]),arguments[i]);
		}
	}

	return jindo.$H(oRet).toQueryString();	
};

//-!jindo.$Form.prototype.element start!-//
/**
 
 * @description element() 메서드는 특정 또는 전체 입력 요소를 반환한다. 파라미터에 가져올 입력 요소의 이름(name)을 지정할 수 있다. 또한, 파라미터를 생략하면 모든 입력 요소의 값을 가져온다.
 *
 * @param1 {Void}
 * @return1 {Array} 입력 요소를 가진 배열.
 *
 * @param2 {String+} sKey 입력 요소의 이름(name).
 * @return2 {Element} 입력 요소.
  
 */
jindo.$Form.prototype.element = function(sKey) {
	//-@@$Form.element-@@//
	
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4voi' : [],
		'4str' : [jindo.$Jindo._F('sKey:String+')]
	},"$Form#element");
	
	switch(oArgs+""){
		case "4voi":
			return _toArray(this._form.elements);	
		case "4str":
			return this._form[sKey+""];
		
	}
};

//-!jindo.$Form.prototype.enable start!-//
/**
 
 * @description enable() 메서드는 입력 요소의 활성화 여부를 검사하거나 설정한다. 파라미터에 입력 요소의 이름(name)만 입력하면 해당 요소의 활성화 여부를 확인할 수 있다. 입력 요소의 이름과 함께 true 값을 입력하면 해당 요소를 활성화하고 false를 입력하면 비활성화한다. 또한, 한번에 여러 요소의 활성화 상태를 변경하기 위해 객체를 입력할 수도 있다.
 *
 * @param1 {String+} sName 입력 요소의 이름.
 * @return1 {Boolean} 입력 요소의 활성화 여부를 나타내는 Boolean 값.
 *
 * @param2 {String+} sName 입력 요소의 이름.
 * @param2 {Boolean} bEnable 활성화 여부.
 * @return2 {$Form} 입력 요소의 활성화 여부를 반영한 $Form() 객체.
 *
 * @param3 {Hash+} oList 여러 입력 요소의 활성화 여부를 지정한 객체및 $H.
 * @return3 {$Form} 입력 요소의 활성화 여부를 반영한 $Form() 객체.
 *
 * @throws {jindo.$Except.EITHER_STRING_OR_OBJECT_OR_HASH} 파라메터가 문자, 오브젝트, $H가 아닌 경우 예외상황이 발생한다.
 * @example

<form id="TEST">
	<input name="ONE" disabled="disabled" type="text" />
	<input name="TWO" type="checkbox" />
</form>

<script type="text/javascript">
	var form = $Form('TEST');

	form.enable('ONE');	// false

	form.enable('TWO', false);
	form.enable('TWO');	// false

	form.enable({
		'ONE' : true,
		'TWO' : false
	});
	
	form.enable('ONE');	// true
	form.enable('TWO');	// false
	
</script>
  
 */
jindo.$Form.prototype.enable = function(sKey) {
	//-@@$Form.enable-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		's4bln' : [ 'sName:String+', 'bEnable:Boolean' ],
		's4obj' : [ 'oObj:Hash+'],
		'g' : [ jindo.$Jindo._F('sName:String+')]
	},"$Form#enable");
	
	switch(oArgs+""){
		case "s4bln":
			var aEls = this._form[sKey];
			if (!aEls) return this;
			aEls = aEls.nodeType == 1 ? [ aEls ] : aEls;
			var sFlag = oArgs.bEnable;
			for(var i=0; i<aEls.length; i++){
				aEls[i].disabled = !sFlag;
			}
			return this;
			
		case "s4obj":
			sKey = oArgs.oObj;
			var self = this;
			for (var k in sKey) {
				if (sKey.hasOwnProperty(k)) {
					self.enable(k, sKey[k]);
				}
			}
			return this;
			
		case "g":
			var aEls = this._form[sKey];
			if (!aEls) return this;
			aEls = aEls.nodeType == 1 ? [ aEls ] : aEls;
			
			var bEnabled = true;
			for(var i=0; i<aEls.length; i++){
				if(aEls[i].disabled){
					bEnabled=false;
					break;
				}
			}
			return bEnabled;
			
	}
};

//-!jindo.$Form.prototype.value start(jindo.$A.prototype.has)!-//
/**
 
 * @description value() 메서드는 &lt;form&gt; 요소의 값을 얻거나 설정한다. 파라미터에 입력 요소의 이름(name)만 입력하면 해당 요소의 값을 확인할 수 있다. 입력 요소의 이름과 함께 값을 지정하면 해당 요소의 값을 변경한다. 또한, 한번에 여러 요소의 값을 변경하기 위해 객체를 입력할 수도 있다.
 *
 * @param1 {String+} sName 입력 요소의 이름.
 * @return1 {String} 입력 요소의 값.
 *
 * @param2 {String+} sName 입력 요소의 이름.
 * @param2 {Variant} sValue 입력 요소에 지정할 값.
 * @return2 {$Form} 입력 요소의 값을 반영한 $Form() 객체.
 *
 * @param3 {Hash+} sName 입력 요소의 이름. 이 파라미터로 여러 입력 요소의 값을 지정한 객체를 입력할 수 있다.
 * @return3 {$Form} 입력 요소의 값을 반영한 $Form() 객체.
 *
 * @throws {jindo.$Except.EITHER_STRING_OR_OBJECT_OR_HASH} 파라메터가 문자, 오브젝트, $H가 아닌 경우 예외상황이 발생한다.
 * @throws {jindo.$Except.NOT_FOUND_ELEMENT} 엘리먼트가 없을 때 예외상황 발생한다.
 * @example

<form id="TEST">
	<input name="ONE" value="1" type="text" />
	<input name="TWO" type="checkbox" />
</form>
<script type="text/javascript">
	var form = $Form('TEST');

	form.value('ONE');	// 1
	
	form.value('TWO');	// undefined

	form.value('TWO', 2);
	form.value('TWO');	//2

	form.value({
		'ONE' : '1111',
		'TWO' : '2'
	});
	
	form.value('ONE');	// 1111
	form.value('ONE');	// 2
</script>
  
 */
jindo.$Form.prototype.value = function(sKey) {
	//-@@$Form.value-@@//
	
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		's4str' : [ 'sKey:String+', 'vValue:Variant' ],
		's4obj' : [ jindo.$Jindo._F('oObj:Hash+')],
		'g' : [ 'sKey:String+']
	},"$Form#value");
	
	if(oArgs+"" == "s4obj"){
		var self = this;
		sKey = oArgs.oObj;
		for(var k in sKey){
			if (sKey.hasOwnProperty(k)) {
				self.value(k, sKey[k]);
			}
		} 
		return this;	
	}
	
	var aEls = this._form[sKey];
	if (!aEls) throw new jindo.$Error(sKey+jindo.$Except.NONE_ELEMENT,"$Form#value");
	
	aEls = aEls.nodeType == 1 ? [ aEls ] : aEls;
	switch(oArgs+""){
		case "s4str":
			var sVal = oArgs.vValue;
			var nLen = aEls.length;
			for(var i=0; i<nLen; i++){
				var o = aEls[i];
				switch (o.type) {
					case 'radio':
						o.checked = (o.value == sVal);
						break;
					case 'checkbox':
						if(sVal.constructor == Array){
							o.checked = jindo.$A(sVal).has(o.value);
						}else{
							o.checked = (o.value == sVal);
						}
						break;
						
					case 'select-one':
						var nIndex = -1;
						for (var i = 0, len = o.options.length; i < len; i++){
							if (o.options[i].value == sVal) nIndex = i;
						}
						o.selectedIndex = nIndex;
		
						break;
					
					case 'select-multiple':
						var nIndex = -1;
						if(sVal.constructor == Array){
							var waVal = jindo.$A(sVal);
							for (var i = 0, len = o.options.length; i < len; i++){
								o.options[i].selected = waVal.has(o.options[i].value); 
							}
						}else{
							for (var i = 0, len = o.options.length; i < len; i++){
								if (o.options[i].value == sVal) nIndex = i;
							}
							o.selectedIndex = nIndex;
						}
						break;
						
					default:
						o.value = sVal;
						
				}
			}
			
			return this;
			
		case "g":
			var aRet = [];
			var nLen = aEls.length;
			for(var i=0;i<nLen; i++){
				var o = aEls[i];
				switch (o.type) {
				case 'radio':
				case 'checkbox':
					if (o.checked) aRet.push(o.value);
					break;
				
				case 'select-one':
					if (o.selectedIndex != -1) aRet.push(o.options[o.selectedIndex].value);
					break;
				case 'select-multiple':
					if (o.selectedIndex != -1){
						for (var i = 0, len = o.options.length; i < len; i++){
							if (o.options[i].selected) aRet.push(o.options[i].value);
						}
					}
					break;
				default:
					aRet.push(o.value);
					
				}
				
			}
			
			return aRet.length > 1 ? aRet : aRet[0];
			
	}
	
	

	
};

//-!jindo.$Form.prototype.submit start!-//
/**
 
 * @description submit() 메서드는 &lt;form&gt; 요소의 데이터를 제출(submit)한다. submit() 메서드에 파라미터를 지정하면 &lt;form&gt; 요소의 target 속성을 무시하고 지정한 전송 대상으로 정보를 전송한다. 이때 기존 &lt;form&gt; 요소의 target 속성을 변경하지 않는다. 또한 파라미터로 함수를 입력할 수 있으며 해당 함수가 true 값을 반환하면 데이터를 제출한다. 이 함수를 사용하여 데이터를 전송하기 전에 검증할 수 있다.
 *
 * @param1 {Void}
 * @return1 {$Form} 데이터를 제출한 $Form() 객체.
 *
 * @param2 {String+} sTargetName 전송 대상.
 * @return2 {$Form} 데이터를 제출한 $Form() 객체.
 *
 * @param3 {Function+} fValidation &lt;form&gt; 요소의 데이터를 검증할 함수. 이 함수의 파라미터로 $Form() 객체가 감싸고 있는 원본 &lt;form&gt; 요소가 입력된다.
 * @return4 {$Form} 데이터를 제출한 $Form() 객체.
 *
 * @param4 {String+} sTargetName 전송 대상.
 * @param4 {Function+} fValidation &lt;form&gt; 요소의 데이터를 검증할 함수. 이 함수의 파라미터로 $Form() 객체가 감싸고 있는 원본 &lt;form&gt; 요소가 입력된다.
 * @return4 {$Form} 데이터를 제출한 $Form() 객체.
 *
 * @throws {jindo.$Except.EITHER_STRING_OR_FUNCTION} 첫 번째 인자가 문자나 함수가 아닌경우 예외상황 발생.
 * @throws {jindo.$Except.EITHER_STRING_OR_FUNCTION} 두 번째 인자가 함수가 아닌 경우 예외상황 발생.
 * @example
var form = $Form(el);
form.submit();
form.submit('foo');

* @example
// fValidation 파라미터 사용한 경우
var form = $Form(el);
form.submit("target_name");

form.submit(function(){
	if($("test").value.length > 0) {
		return true; //true를 리턴하면 submit() 수행
	}
	
	return false; //false를 리턴하면 submit() 수행하지 않음
});

form.submit("target_name", function(){
	if($("test").value.length > 0) {
		return true;
	}
	
	return false;
});
  
 */
jindo.$Form.prototype.submit = function(sTargetName, fValidation) {
	//-@@$Form.submit-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'voi' : [],
		'4str' : [ 'sTargetName:String+'],
		'4fun' : [ 'fValidation:Function+'],
		'4fun2' : [ 'sTargetName:String+',"fValidation:Function+"]
	},"$Form#submit");
	
	var sOrgTarget = null;
	switch(oArgs+""){
		case "4str":
			sOrgTarget = this._form.target;
			this._form.target = oArgs.sTargetName;
			break;
		case "4fun":
		case "4fun2":
			if(!oArgs.fValidation(this._form)) return this;
			if(oArgs+"" == "4fun2"){
				sOrgTarget = this._form.target;
				this._form.target = oArgs.sTargetName;
			}
			
			
	}
	this._form.submit();
	if (!jindo.$Jindo.isNull(sOrgTarget)) this._form.target = sOrgTarget;
	return this;
};

//-!jindo.$Form.prototype.reset start!-//
/**
 
 * @description reset() 메서드는 &lt;form&gt; 요소를 초기화(reset)한다. 파라미터로 함수를 입력할 수 있으며 해당 함수가 true 값을 반환하면 &lt;form&gt; 요소를 초기화한다.
 *
 * @param1 {Void}
 * @return1 {$Form} 초기화한 $Form() 객체.
 *
 * @param2 {Function+} fValidation &lt;form&gt; 요소의 데이터를 초기화하기 전에 실행할 함수.
 * @return2 {$Form} 초기화한 $Form() 객체.
 *
 * @throws {jindo.$Except.ONLY_FUNCTION_TYPE} 첫 번째 인자가 함수가 아닌 경우 예외상황.
 * @example
var form = $Form(el);
form.reset(); 

 * @example
// fValidation 파라미터 사용한 경우
var form = $Form(el);

form.submit(function(){
	return confirm("초기화하시겠습니까?");
});
  
 */
jindo.$Form.prototype.reset = function(fValidation) {
	//-@@$Form.reset-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4voi' : [ ],
		'4fun' : [ 'fValidation:Function+']
	},"$Form#reset");
	
	if(oArgs+"" == "4fun") if(!fValidation(this._form)) return this;
	
	this._form.reset();
	return this;
	
};

//-!jindo.$Document start(jindo.$Document.prototype.renderingMode)!-//
/**
 
 * @fileOverview $Document 생성자 및 메서드를 정의한 파일
 * @name document.js
 * @author Hooriza 
  
 */

/**
 
 * @class $Document() 객체는 문서와 관련된 정보를 제공한다.
 * @constructor
 * @description $Document() 객체를 생성한다. 파라미터를 생략하면 기본 값으로 현재 문서의 document 요소가 입력된다.
 *
 * @param1 {Void}
 *
 * @param2 {Element} elDocument 정보를 확인할 document 요소.
 *
  
 */
jindo.$Document = function (el) {
	//-@@$Document-@@//
	var cl = arguments.callee;
	if (el instanceof cl) return el;

	if (!(this instanceof cl)){
		try {
			jindo.$Jindo._warn(arguments.length, 1,"$Document");
			return new cl(el||document);
		} catch(e) {
			if (e instanceof TypeError) { return null; }
			throw e;
		}
	}	
	
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4doc'  : [ 'oDocument:Document+']
	},"$Document");
	if(oArgs==null){this._doc = document;}
	else{this._doc = el;}
	
	this._docKey = this.renderingMode() == 'Standards' ? 'documentElement' : 'body';	
};
(function(){
	var qu = jindo.cssquery;
	var type = {
		"query" : qu.getSingle,
		"queryAll" : qu,
		"xpathAll" : qu.xpath
	};
	for(var i in type){
		jindo.$Document.prototype[i] = (function(sMethod,fp){
			return function(sQuery){
				var oArgs = jindo.$Jindo.checkVarType(arguments, {
					'4str'  : [ 'sQuery:String+']
				},"$Document#"+sMethod);
				return fp(sQuery,this._doc);
			}
		})(i, type[i])
	}
	
})();

//-!jindo.$Document.prototype.$value start!-//
/**
 
 * @description $value() 메서드는 원본 document 요소를 반환한다.
 * @return {Element} document 요소
  
 */
jindo.$Document.prototype.$value = function() {
	//-@@$Document.$value-@@//
	return this._doc;
};

//-!jindo.$Document.prototype.scrollSize start!-//
/**
 
 * @description scrollSize() 메서드는 문서의 가로 크기와 세로 크기 정보를 담은 객체를 반환한다. 다음은 문서의 가로, 세로 크기 정보를 담고 있는 객체의 속성을 설명한 표이다.<br>
 <table>
	<caption>문서 크기 정보 객체</caption>
	<thead>
		<tr>
			<th scope="col">이름</th>
			<th scope="col">타입</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>width</td>
			<td>Number</td>
			<td>문서의 가로 크기 정보. 단위는 픽셀(px)이다.</td>
		</tr>
		<tr>
			<td>height</td>
			<td>Number</td>
			<td>문서의 세로 크기 정보. 단위는 픽셀(px)이다.</td>
		</tr>
	</tbody>
 </table>
 * @return {Object} 문서의 가로, 세로 크기 정보를 담고 있는 객체.
 * @see $Document#clientSize
 * @example
var size = $Document().scrollSize();
alert('가로 : ' + size.width + ' / 세로 : ' + size.height);
   
 */
jindo.$Document.prototype.scrollSize = function() {
	//-@@$Document.scrollSize-@@//
	/*
	  
webkit 계열에서는 Standard 모드라도 body를 사용해야 정상적인 scroll Size를 얻어온다.
  
	 */
	var oDoc = this._doc[_JINDO_IS_WK?'body':this._docKey];
	
	return {
		width : Math.max(oDoc.scrollWidth, oDoc.clientWidth),
		height : Math.max(oDoc.scrollHeight, oDoc.clientHeight)
	};

};

//-!jindo.$Document.prototype.scrollPosition start!-//
/**
 
 * @description scrollPosition() 메서드는 현재 문서에서 스크롤바의 위치를 구한다. 다음은 스크롤바의 위치 정보를 담고 있는 객체의 속성을 설명한 표이다.<br>
 <table>
	<caption>스크롤바 위치 정보 객체의 속성</caption>
	<thead>
		<tr>
			<th scope="col">이름</th>
			<th scope="col">타입</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>left</td>
			<td>number</td>
			<td>수평 스크롤바의 가로 위치. 단위는 픽셀(px)이다.</td>
		</tr>
		<tr>
			<td>height</td>
			<td>number</td>
			<td>수직 스크롤바의 세로 위치. 단위는 픽셀(px)이다.</td>
		</tr>
	</tbody>
 </table>
 * @return {Object} 가로 위치는 left, 세로위치는 top 라는 키값으로 리턴된다.
 * @since 1.3.5버전부터 사용 가능
 * @example
var size = $Document().scrollPosition();
alert('가로 : ' + size.left + ' / 세로 : ' + size.top);
  
 */
jindo.$Document.prototype.scrollPosition = function() {
	//-@@$Document.scrollPosition-@@//
	/*
	 
webkit 계열에서는 Standard 모드라도 body를 사용해야 정상적인 scroll Size를 얻어온다.
  
	 */
	var oDoc = this._doc[_JINDO_IS_WK?'body':this._docKey];
	return {
		left : oDoc.scrollLeft||window.pageXOffset||window.scrollX||0,
		top : oDoc.scrollTop||window.pageYOffset||window.scrollY||0
	};

};

//-!jindo.$Document.prototype.clientSize start!-//
/**
 
 * @description clientSize() 메서드는 문서에서 스크롤바가 생겨 보이지 않는 부분을 제외한 영역(화면에 보이는 부분)의 가로 크기와 세로 크기 정보를 담은 객체를 반환한다. 다음은 화면에 보이는 영역의 가로, 세로 크기 정보를 담고 있는 객체의 속성을 설명한 표이다.<br>
 <table>
	<caption>화면 크기 정보 객체</caption>
	<thead>
		<tr>
			<th scope="col">이름</th>
			<th scope="col">속성</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>width</td>
			<td>number</td>
			<td>화면에 보이는 부분의 가로 크기. 단위는 픽셀(px)이다.</td>
		</tr>
		<tr>
			<td>height</td>
			<td>number</td>
			<td>화면에 보이는 부분의 세로 크기. 단위는 픽셀(px)이다.</td>
		</tr>
	</tbody>
 </table>
 * @return {Object} 화면에 보이는 부분의 크기를 저장하고 있는 객체.
 * @see $Document#scrollSize
 * @example
var size = $Document(document).clientSize();
alert('가로 : ' + size.width + ' / 세로 : ' + size.height);
   
 */
jindo.$Document.prototype.clientSize = function() {
	//-@@$Document.clientSize-@@//
	var oDoc = this._doc[this._docKey];
	
	var isSafari = _JINDO_IS_SP && !_JINDO_IS_CH;

	/*
	 
사파리의 경우 윈도우 리사이즈시에 clientWidth,clientHeight값이 정상적으로 나오지 않아서 window.innerWidth,innerHeight로 대체
  
	 */
	return (isSafari)?{
					width : window.innerWidth,
					height : window.innerHeight
				}:{
					width : oDoc.clientWidth,
					height : oDoc.clientHeight
				};
};

//-!jindo.$Document.prototype.renderingMode start!-//
/**
 
 * @description renderingMode() 메서드는 문서가 렌더링된 방식을 검사하여 반환한다. 이 메서드가 확인할 수 있는 렌더링 방식은 다음 표와 같다.<br>
  <table>
	<caption>렌더링 방식</caption>
	<thead>
		<tr>
			<th scope="col">렌더링 모드</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Standards</td>
			<td>표준 렌더링 모드.</td>
		</tr>
		<tr>
			<td>Almost</td>
			<td>유사 표준 렌더링 모드. 인터넷 익스플로러 외의 브라우저에서 DTD를 올바르게 지정하지 않았을 때 반환된다.</td>
		</tr>
		<tr>
			<td>Quirks</td>
			<td>비표준 렌더링 모드.</td>
		</tr>
	</tbody>
 </table>
 * @return {String} 렌더링 모드.
 * @see DTD와 브라우저에 따른 렌더링 차이 설명(<a href="http://hsivonen.iki.fi/doctype/">http://hsivonen.iki.fi/doctype/</a>)
 * @example
var mode = $Document().renderingMode();
alert('렌더링 방식 : ' + mode);
  
 */
jindo.$Document.prototype.renderingMode = function() {
	//-@@$Document.renderingMode-@@//
	var agent = navigator.userAgent;
	var isIe = _JINDO_IS_IE;
	var isSafari = (_JINDO_IS_WK && !_JINDO_IS_CH && navigator.vendor.indexOf("Apple")>-1);
	var sRet;

	if ('compatMode' in this._doc){
		sRet = this._doc.compatMode == 'CSS1Compat' ? 'Standards' : (isIe ? 'Quirks' : 'Almost');
	}else{
		sRet = isSafari ? 'Standards' : 'Quirks';
	}

	return sRet;

};

//-!jindo.$Document.prototype.queryAll start(jindo.cssquery)!-//
/**
 
 * @description 문서를 대상으로 지정한 선택자를 만족시키는 요소의 배열을 반환한다. 만족하는 요소가 존재하지 않으면 빈 배열을 반환한다. $$() 함수에서 elBaseElement 파라미터에 문서를 지정한 것과 같은 의미이다.
 * @param {String+} sSelector CSS 선택자(CSS Selector). CSS 선택자로 사용할 수 있는 패턴은 표준 패턴과 비표준 패턴이 있다. 표준 패턴은 CSS Level3 명세서에 있는 패턴을 지원한다. 선택자의 패턴에 대한 설명은 $$() 함수와 See Also 항목을 참고한다.
 * @return {Array} 조건을 만족하는 요소의 배열
 * @see <a href="_global_.html#$$">$$()</a>
 * @see <a href="http://www.w3.org/TR/css3-selectors/">CSS Level3 명세서</a> - W3C
 * @example
 $Document().queryAll("span");  // 문서 내에 모든 <span> 요소를 선택한다.
  
 */

//-!jindo.$Document.prototype.query start(jindo.cssquery)!-//
/**
 
 * @description 문서를 대상으로 지정한 선택자를 만족시키는 첫 번째 요소를 반환한다. 만족하는 요소가 존재하지 않으면 null을 반환한다. $$.getSingle 함수에서 elBaseElement 파라미터에 문서를 지정한 것과 같은 의미이다.
 * @param {String+} sSelector CSS 선택자(CSS Selector). CSS 선택자로 사용할 수 있는 패턴은 표준 패턴과 비표준 패턴이 있다. 표준 패턴은 CSS Level3 명세서에 있는 패턴을 지원한다. 선택자의 패턴에 대한 설명은 $$() 함수와 See Also 항목을 참고한다.
 * @return {Element} 선택자 조건을 만족하는 첫 번째 요소.
 * @see <a href="_global_.html#.$$.getSingle">$$.getSingle()</a>
 * @see <a href="_global_.html#$$">$$()</a>
 * @see <a href="http://www.w3.org/TR/css3-selectors/">CSS Level3 명세서</a> - W3C
 * @example
 $Document().query("body");  // <body> 요소를 선택한다.
  
 */

//-!jindo.$Document.prototype.xpathAll start(jindo.cssquery)!-//
/**
 
 * @description 문서를 대상으로 XPath 문법을 만족하는 요소를 가져온다. 지원하는 문법이 제한 적이므로 특수한 경우에만 사용할 것을 권장한다. $$.xpath() 함수에서 elBaseElement 파라미터에 문서를 지정한 것과 같은 의미이다.
 * @param {String+} sXPath XPath 값.
 * @return {Array} XPath 문법을 만족하는 요소를 원소로 하는 배열.
 * @see <a href="_global_.html#.$$.xpath">$$()</a>
 * @see <a href="http://www.w3.org/standards/techs/xpath#w3c_all">XPath 문서</a> - W3C
 * @example
var oDocument = $Document();
alert (oDocument.xpathAll("body/div/div").length);
  
 */

//-!jindo.$Window start!-//
/**
 
 * @class $Window() 객체는 브라우저가 제공하는 window 객체를 래핑하고, 이를 다루기 위한 여러가지 메서드를 제공한다.
 * @Constructor
 * @description $Window() 객체를 생성하고 생성한다.
 * @param {Hash+} oWindow $Window() 객체로 래핑할 window 객체.
  
 */
jindo.$Window = function(el) {
	//-@@$Window-@@//
	var cl = arguments.callee;
	if (el instanceof cl) return el;
	
	if (!(this instanceof cl)){
		try {
			jindo.$Jindo._warn(arguments.length, 1,"$Window");
			return new cl(el||window);
		} catch(e) {
			if (e instanceof TypeError) { return null; }
			throw e;
		}
	}	
	
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4win' : ['el:Window+']
	},"$Window");
	
	this._win = el;
};

//-!jindo.$Window.prototype.$value start!-//
/**
 
 * @description $value() 메서드는 원본 window 객체를 반환한다.
 * @return {$Window} window 객체.
 * @example
     $Window().$value(); // 원래의 window 객체를 반환한다.
  
 */
jindo.$Window.prototype.$value = function() {
	//-@@$Window.$value-@@//
	return this._win;
};

//-!jindo.$Window.prototype.resizeTo start!-//
/**
 
 * @description resizeTo() 메서드는 창의 크기를 지정한 크기로 변경한다. 지정한 크기는 프레임을 포함한 창 전체의 크기를 의미한다. 따라서 실제로 표현하는 컨텐트 사이즈는 브라우저 종류와 설정에 따라 달라질 수 있다. 브라우저에 따라 보안 문제 때문에, 창 크기가 화면의 가시 영역보다 커지지 못하도록 막는 경우도 있다. 이 경우에는 지정한 크기보다 창이 작아질 수 있다. 단위는 픽셀(px) 단위이다.
 * @param {Numeric} nWidth 창의 너비.
 * @param {Numeric} nHeight 창의 높이.
 * @return {$Window} $Window() 객체.
 * @see $Window#resizeBy
 * @example
 // 현재 창의 너비를 400, 높이를 300으로 변경한다.
 $Window.resizeTo(400, 300);
  
 */
jindo.$Window.prototype.resizeTo = function(nWidth, nHeight) {
	//-@@$Window.resizeTo-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4num' : ['nWidth:Numeric','nHeight:Numeric']
	},"$Window#resizeTo");
	this._win.resizeTo(nWidth, nHeight);
	return this;
};

//-!jindo.$Window.prototype.resizeBy start!-//
/**
 
 * @description resizeBy() 메서드는 창의 크기를 지정한 크기만큼 늘리거나 줄인다. 창의 크기를 늘릴 때는 양의 정수를 줄일 때는 음의 정수를 입력한다. 단위는 픽셀(px) 단위이다.
 * @param {Numeric} nWidth 늘이거나 줄일 창의 너비.
 * @param {Numeric} nHeight 늘어날 줄일 창의 높이
 * @return {$Window} $Window() 객체.
 * @see $Window#resizeTo
 * @example
 // 현재 창의 너비를 100, 높이를 50 만큼 늘린다.
 $Window().resizeBy(100, 50);
  
 */
jindo.$Window.prototype.resizeBy = function(nWidth, nHeight) {
	//-@@$Window.resizeBy-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4num' : ['nWidth:Numeric','nHeight:Numeric']
	},"$Window#resizeBy");
	this._win.resizeBy(nWidth, nHeight);
	return this;
};

//-!jindo.$Window.prototype.moveTo start!-//
/**
 
 * @description moveTo() 메서드는 창을 지정한 위치로 이동시킨다. 좌표는 브라우저 프레임을 포함한 창의 왼쪽 위의 모서리를 기준으로 한다. 단위는 픽셀(px) 단위이다.
 * @param {Numeric} nLeft 이동할 X 좌표.
 * @param {Numeric} nTop 이동할 Y좌표.
 * @see $Window#moveBy
 * @return {$Window} $Window() 객체.
 * @example
 *  // 현재 창을 (15, 10) 으로 이동시킨다.
 *  $Window().moveTo(15, 10);
  
 */
jindo.$Window.prototype.moveTo = function(nLeft, nTop) {
	//-@@$Window.moveTo-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4num' : ['nLeft:Numeric','nTop:Numeric']
	},"$Window#moveTo");
	this._win.moveTo(nLeft, nTop);
	return this;
};

//-!jindo.$Window.prototype.moveBy start!-//
/**
 
 * @description moveBy() 메서드는 창을 지정한 위치만큼 이동시킨다. 단위는 픽셀(px) 단위이다.
 * @param {Numeric} nLeft 창을 좌우로 이동시킬 크기. 양의 정수를 입력하면 오른쪽으로 이동시키고 음의 정수를 입력하면 왼쪽으로 이동한다.
 * @param {Numeric} nTop 창을 위아래로 이동시킬 크기. 양의 정수를 입력하면 아래로 이동시키고 음의 정수를 입력하면 위로 이동시킨다.
 * @see $Window#moveTo
 * @return {$Window} $Window() 객체.
 * @example
 *  // 현재 창을 좌측으로 15px만큼, 아래로 10px만큼 이동시킨다.
 *  $Window().moveBy(15, 10);
  
 */
 jindo.$Window.prototype.moveBy = function(nLeft, nTop) {
 	//-@@$Window.moveBy-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4num' : ['nLeft:Numeric','nTop:Numeric']
	},"$Window#moveBy");
	this._win.moveBy(nLeft, nTop);
	return this;
};

//-!jindo.$Window.prototype.sizeToContent start!-//
/**
 
 * @description sizeToContent() 메서드는 내부 문서의 콘텐츠 크기에 맞추어 창의 크기를 변경한다. 이때 몇 가지 제약 사항을 가진다.<br>
<ul>
	<li>문서가 완전히 로딩된 다음에 메서드를 실행해야 한다.</li>
	<li>창이 내부 문서보다 큰 경우에는 내부 문서의 크기를 구할 수 없으므로, 반드시 창 크기를 내부 문서보다 작게 만든다.</li>
	<li>반드시 body 요소의 사이즈가 있어야 한다.</li>
	<li>HTML의 DOCTYPE이 Quirks일때 MAC 운영체제 환경에는 Opera 10 버전, Windows 운영체제 환경에서는 인터넷 익스플로러 6버전 이상, Opera 10 버전, Safari 4버전에서 정상 동작하지 않는다.</li>
	<li>가능하면 부모 창에서 실행시켜야 한다. 자식 창이 모니터 화면을 벗어나 가려진 경우, 인터넷 익스플로러에서는 가려진 영역을 콘텐츠가 없는 것으로 판단하여 가려진 영역만큼 줄인다.</li>
</ul>
위와 같은 제약 사항에 걸리는 경우 파라미터로 창의 사이즈를 직접 지정할 수 있다.
 * @param {Numeric} nWidth 창의 너비.
 * @param {Numeric} nHeight 창의 높이.
 * @return {$Window} $Window() 객체.
 * @see $Document#renderingMode
 * @example
 // 새 창을 띄우고 자동으로 창 크기를 컨텐트에 맞게 변경하는 함수
 function winopen(url) {
	try {
		win = window.open(url, "", "toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,width=250,height=300");
		win.moveTo(200, 100);
		win.focus();
	} catch(e){}
 
	setTimeout(function() {
		$Window(win).sizeToContent();
	}, 1000);
}

winopen('/samples/popup.html');
  
 */	
jindo.$Window.prototype.sizeToContent = function(nWidth, nHeight) {
	//-@@$Window.sizeToContent-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4num' : ['nWidth:Numeric','nHeight:Numeric']
	},"$Window#sizeToContent");
	if (this._win.sizeToContent) {
		this._win.sizeToContent();
	} else {
		if(arguments.length != 2){
			// use trick by Peter-Paul Koch
			// http://www.quirksmode.org/
			var innerX,innerY;
			var self = this._win;
			var doc = this._win.document;
			if (self.innerHeight) {
				// all except Explorer
				innerX = self.innerWidth;
				innerY = self.innerHeight;
			} else if (doc.documentElement && doc.documentElement.clientHeight) {
				// Explorer 6 Strict Mode
				innerX = doc.documentElement.clientWidth;
				innerY = doc.documentElement.clientHeight;
			} else if (doc.body) {
				// other Explorers
				innerX = doc.body.clientWidth;
				innerY = doc.body.clientHeight;
			}

			var pageX,pageY;
			var test1 = doc.body.scrollHeight;
			var test2 = doc.body.offsetHeight;

			if (test1 > test2) {
				// all but Explorer Mac
				pageX = doc.body.scrollWidth;
				pageY = doc.body.scrollHeight;
			} else {
				// Explorer Mac;
				//would also work in Explorer 6 Strict, Mozilla and Safari
				pageX = doc.body.offsetWidth;
				pageY = doc.body.offsetHeight;
			}
			nWidth  = pageX - innerX;
			nHeight = pageY - innerY;
		}
		this._win.resizeBy(nWidth, nHeight);
	}

	return this;
};

//-!jindo.$S start!-//
/**
 
 * @class $S() 객체는 String 객체를 래핑(wrapping)하여 문자열을 처리하기 위한 확장 기능을 제공한다.
 * @constructor
 * @description $S() 객체를 생성한다.
 * @param {String+} sStr 래핑할 문자열.
 * @example
var sStr = 'Hello world!';
var oStr = $S(sStr);            // $S() 객체 생성
var oStr2 = new $S(sStr);        // new를 사용한 $S() 객체 생성
  
 */
jindo.$S = function(str) {
	//-@@$S-@@//
	var cl = arguments.callee;

	if (str instanceof cl) return str;
	
	if (!(this instanceof cl)){
		try {
			jindo.$Jindo._warn(arguments.length, 1,"$Json");
			return new cl(str||"");
		} catch(e) {
			if (e instanceof TypeError) { return null; }
			throw e;
		}
	}	
		
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str' : ['str:String+']
	},"$S");

	this._str = str + '';
};

//-!jindo.$S.prototype.$value start!-//
/**
 
 * @description $value() 메서드는 $S() 객체가 감싸고 있던 원본 문자열(String 객체)을 반환한다. toString() 메서드와 같은 의미이다.
 * @return {String} 원본 String 객체.
 * @see $S#toString
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String">String</a> - MDN Docs
 * @example
var str = $S("Hello world!!");
str.$value();
// 결과 :
// Hello world!!
  
 */
jindo.$S.prototype.$value = function() {
	//-@@$S.$value-@@//
	//-@@$S.toString-@@//
	return this._str;
};

//-!jindo.$S.prototype.toString start!-//
/**
 
 * @function
 * @description toString() 메서드는 $S() 객체가 감싸고 있던 원본 문자열(String 객체)을 반환한다. $value() 메서드와 같은 의미이다.
 * @return {String} 원본 String 객체.
 * @see $S#$value
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String">String</a> - MDN Docs
 * @example
var str = $S("Hello world!!");
str.toString();
// 결과 :
// Hello world!!
  
 */
jindo.$S.prototype.toString = jindo.$S.prototype.$value;

//-!jindo.$S.prototype.trim start!-//
/**
 
 * @description trim() 메서드는 문자열의 양 끝에 있는 공백을 제거한다.
 * @return {$S} 문자열의 양 끝에 있는 공백을 제거한 새로운 $S() 객체
 * @since 1.4.1 버전부터 전각공백도 제거
 * @example
var str = "   I have many spaces.   ";
document.write ( $S(str).trim() );
// 결과 :
// I have many spaces.
  
 */
jindo.$S.prototype.trim = function() {
	//-@@$S.trim-@@//
	if ("".trim) {
		jindo.$S.prototype.trim = function() {
			return jindo.$S(this._str.trim());
		}
	}else{
		jindo.$S.prototype.trim = function() {
			return jindo.$S(this._str.replace(/^(\s|　)+/g, "").replace(/(\s|　)+$/g, ""));
		}
	}
	
	return jindo.$S(this.trim());
	
};

//-!jindo.$S.prototype.escapeHTML start!-//
/**
 
 * @description escapeHTML() 메서드는 HTML 특수 문자를 HTML 엔티티(Entities)형식으로 변환한다. 변경하는 문자는 다음 표와 같다.<br>
 <table>
	<caption>HTML Escape 문자 변환</caption>
	<thead>
		<tr>
			<th>변환 대상 문자</th>
			<th>&quot;</th>
			<th>&amp;</th>
			<th>&lt;</th>
			<th>&gt;</th>
			<th>&#39;</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>변환 결과</th>
			<td>&amp;quot;</td>
			<td>&amp;amp;</td>
			<td>&amp;lt;</td>
			<td>&amp;gt;</td>
			<td>&#39;</td>			
		</tr>
	</tbody>
 </table>
 * @return {$S} HTML 특수 문자를 엔티티 형식으로 변환한 새로운 $S() 객체.
 * @see $S#unescapeHTML
 * @see $S#escape
 * @example
 var str = ">_<;;";
 document.write( $S(str).escapeHTML() );
 
 // 결과 :
 // &amp;gt;_&amp;lt;;;
  
 */
jindo.$S.prototype.escapeHTML = function() {
	//-@@$S.escapeHTML-@@//
	var entities = {'"':'quot','&':'amp','<':'lt','>':'gt','\'':'#39'};
	var s = this._str.replace(/[<>&"']/g, function(m0){
		return entities[m0]?'&'+entities[m0]+';':m0;
	});
	return jindo.$S(s);
};

//-!jindo.$S.prototype.stripTags start!-//
/**
 
 * @description stripTags() 메서드는 문자열에서 XML 혹은 HTML 태그를 제거한다.
 * @return {$S} XML 혹은 HTML 태그를 제거한 새로운 $S() 객체.
 * @example
 var str = "Meeting <b>people</b> is easy.";
 document.write( $S(str).stripTags() );
 
 // 결과 :
 // Meeting people is easy.
  
 */
jindo.$S.prototype.stripTags = function() {
	//-@@$S.stripTags-@@//
	return jindo.$S(this._str.replace(/<\/?(?:h[1-5]|[a-z]+(?:\:[a-z]+)?)[^>]*>/ig, ''));
};

//-!jindo.$S.prototype.times start!-//
/**
 
 * @description times() 메서드는 문자열을 파라미터로 지정한 횟수만큼 반복하는 문자열을 생성한다.
 * @param {Numeric} nTimes 반복할 횟수.(기본값은 1)
 * @return {$S} 문자열을 지정한 횟수만큼 반복한 새로운 $S() 객체
 * @example
 document.write ( $S("Abc").times(3) );
 
 // 결과 : AbcAbcAbc
  
 */
jindo.$S.prototype.times = function(nTimes) {
	//-@@$S.times-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str' : ['nTimes:Numeric']
	},"$S#times");
	if (!oArgs) { return this; }
	return jindo.$S(Array(oArgs.nTimes+1).join(this._str));
};

//-!jindo.$S.prototype.unescapeHTML start!-//
/**
 
 * @description unescapeHTML() 메서드는 이스케이프(escape)된 문자를 원래의 문자로 변환한다.
 * @return {$S} 이스케이프된 문자를 원래의 문자로 변환한 새로운 $S() 객체
 * @see $S#escapeHTML
 * @example
var str = "&lt;a href=&quot;http://naver.com&quot;&gt;Naver&lt;/a&gt;";
document.write( $S(str).unescapeHTML() );

// 결과 :
// <a href="http://naver.com">Naver</a>
  
 */
jindo.$S.prototype.unescapeHTML = function() {
	//-@@$S.unescapeHTML-@@//
	var entities = {'quot':'"','amp':'&','lt':'<','gt':'>','#39':'\''};
	var s = this._str.replace(/&([a-z]+|#[0-9]+);/g, function(m0,m1){
		return entities[m1]?entities[m1]:m0;
	});
	return jindo.$S(s);
};

//-!jindo.$S.prototype.escape start!-//
/**
 
 * @description escape() 메서드는 문자열에 포함된 한글을 ASCII 문자열로 인코딩하고 non-ASCII 문자를 이스케이프(escape)한다. 변경하는 문자는 다음 표와 같다.<br>
 <table>
	<caption>Escape 문자 변환</caption>
	<thead>
		<tr>
			<th>변환 대상 문자</th>
			<th>\r</th>
			<th>\n</th>
			<th>\t</th>
			<th>'</th>
			<th>"</th>
			<th>non-ASCII 문자</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>변환 결과</th>
			<td>\\r</td>
			<td>\\n</td>
			<td>\\t</td>
			<td>\'</td>
			<td>\"</td>	
			<td>\uXXXX</td>	
		</tr>
	</tbody>
 </table>
 * @return {$S} 문자열을 이스케이프한 새로운 $S() 객체
 * @see $S#escapeHTML
 * @example
 var str = '가"\'나\\';
 document.write( $S(str).escape() );
 
 // 결과 :
 // \uAC00\"\'\uB098\\
  
 */
jindo.$S.prototype.escape = function() {
	//-@@$S.escape-@@//
	var s = this._str.replace(/([\u0080-\uFFFF]+)|[\n\r\t"'\\]/g, function(m0,m1,_){
		if(m1) return escape(m1).replace(/%/g,'\\');
		return (_={"\n":"\\n","\r":"\\r","\t":"\\t"})[m0]?_[m0]:"\\"+m0;
	});

	return jindo.$S(s);
};

//-!jindo.$S.prototype.bytes start!-//
/**
 
 * @description bytes() 메서드는 문자열의 실제 바이트(byte) 수를 반환하고, 제한하려는 바이트(byte) 수를 지정하면 문자열을 해당 크기에 맞게 잘라낸다. 또한, 지정한 인코딩 방식에 따라 한글을 비롯한 유니코드 문자열의 바이트 수를 계산한다.
 *
 * @param1 {Void}
 * @return1 {Number} 문자열의 바이트 수를 반환한다.
 *
 * @param2 {Numeric} nLength 잘라내고자 하는 바이트 수
 * @return2 {$S} 해당 크기만큼 문자열을 잘라낸 $S() 객체
 *
 * @param3 {Hash+} oOptions 인코딩 방식과 제한할 크기를 설정한 객체.
 * @return3 {Variant} 파라미터에 제한할 바이트 수를 지정하면 해당 크기만큼 문자열을 잘라낸 $S() 객체를 반환하고 이외의 경우 문자열의 크기(Number)를 반환한다.
 * 
 * @since 1.4.3 버전부터 인코딩 방식 사용 가능
 * @example
// 문서가 euc-kr 환경임을 가정합니다.
var str = "한글과 English가 섞인 문장...";

document.write( $S(str).bytes() );
// 결과 :
// 37

document.write( $S(str).bytes(20) );
// 결과 :
// 한글과 English가

document.write( $S(str).bytes({charset:'euc-kr',size:20}) );
// 결과 :
// 한글과 English가 섞

document.write( $S(str).bytes({charset:'euc-kr'}) );
// 결과 :
// 29
  
 */
jindo.$S.prototype.bytes = function(vConfig) {
	//-@@$S.bytes-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4voi' : [],
		'4num' : ["nConfig:Numeric"],
		'4obj' : ["nConfig:Hash+"]
	},"$S#bytes");
	var code = 0, bytes = 0, i = 0, len = this._str.length;
	var charset = ((document.charset || document.characterSet || document.defaultCharset)+"");
	var cut,nBytes;
	switch(oArgs+""){
		case "4voi":
			cut = false;
			break;
		case "4num":
			cut = true;
			nBytes = vConfig;
			break;
		case "4obj":
			charset = vConfig.charset||charset;
			nBytes  = vConfig.size||false;
			cut = !!nBytes;
			break;
		
	}

	if (charset.toLowerCase() == "utf-8") {
		/*
		 
유니코드 문자열의 바이트 수는 위키피디아를 참고했다(http://ko.wikipedia.org/wiki/UTF-8).
  
		 */
		for(i=0; i < len; i++) {
			code = this._str.charCodeAt(i);
			if (code < 128) {
				bytes += 1;
			}else if (code < 2048){
				bytes += 2;
			}else if (code < 65536){
				bytes += 3;
			}else{
				bytes += 4;
			}
			
			if (cut && bytes > nBytes) {
				this._str = this._str.substr(0,i);
				break;
			}
		}
	} else {
		for(i=0; i < len; i++) {
			bytes += (this._str.charCodeAt(i) > 128)?2:1;
			
			if (cut && bytes > nBytes) {
				this._str = this._str.substr(0,i);
				break;
			}
		}
	}

	return cut?this:bytes;
};

//-!jindo.$S.prototype.parseString start!-//
/**
 
 * @description parseString() 메서드는 URL 쿼리스트링(Query String)을 객체로 파싱한다. 예제를 확인한다.
 * @return {Object} 쿼리스트링을 파싱한 객체.
 * @see <a href="http://en.wikipedia.org/wiki/Querystring">Query String</a> - Wikipedia
 * @example
var str = "aa=first&bb=second";
var obj = $S(str).parseString();
// 결과 :
// obj => { aa : "first", bb : "second" }
  
 */
jindo.$S.prototype.parseString = function() {
	//-@@$S.parseString-@@//
	if(this._str=="") return {};
	
	var str = this._str.split(/&/g), pos, key, val, buf = {},isescape = false;

	for(var i=0; i < str.length; i++) {
		key = str[i].substring(0, pos=str[i].indexOf("=")), isescape = false;
		try{
			val = decodeURIComponent(str[i].substring(pos+1));
		}catch(e){
			isescape = true;
			val = decodeURIComponent(unescape(str[i].substring(pos+1)));
		}
		

		if (key.substr(key.length-2,2) == "[]") {
			key = key.substring(0, key.length-2);
			if (jindo.$Jindo.isUndefined(buf[key])) buf[key] = [];
			buf[key][buf[key].length] = isescape? escape(val) : val;;
		} else {
			buf[key] = isescape? escape(val) : val;
		}
	}

	return buf;
};

//-!jindo.$S.prototype.escapeRegex start!-//
/**
 
 * @description escapeRegex() 메서드는 문자열을 정규식에 사용할 수 있도록 이스케이프(escape)한다. 예제를 참고한다.
 * @since 1.2.0 버전에 작성됨.
 * @return {$S} 내부 문자열이 이스케이프된 $S() 객체.
 * @see <a href="http://en.wikipedia.org/wiki/Regexp">Regular Expression</a>
 * @example
var str = "Slash / is very important. Backslash \ is more important. +_+";
document.write( $S(str).escapeRegex() );
 
 // 결과 : \/ is very important\. Backslash \\ is more important\. \+_\+
  
 */
jindo.$S.prototype.escapeRegex = function() {
	//-@@$S.escapeRegex-@@//
	var s = this._str;
	var r = /([\?\.\*\+\-\/\(\)\{\}\[\]\:\!\^\$\\\|])/g;

	return jindo.$S(s.replace(r, "\\$1"));
};

//-!jindo.$S.prototype.format start(jindo.$S.prototype.times)!-//
/**
 
 * @descritpion format() 메서드는 문자열을 형식 문자열(Format Specifier)에 대입하여 새로운 문자열을 만든다. 형식 문자열은 %로 시작하며, 사용하는 형식 문자열의 종류는 PHP의 sprintf() 함수가 사용하는 것과 동일하다.
 * @param {String} sFormatString 대입할 형식 문자열.
 * @return {String} 문자열을 형식 문자열에 대입하여 만든 새로운 문자열.
 * @see <a href="http://www.php.net/manual/en/function.sprintf.php">sprintf()</a>" - php.net
 * @example
var str = $S("%4d년 %02d월 %02d일").format(2008, 2, 13);
*
* // 결과 :
* // str = "2008년 02월 13일"

var str = $S("패딩 %5s 빈공백").format("값");
*
* // 결과 :
* // str => "패딩     값 빈공백"

var str = $S("%b").format(10);
*
* // 결과 :
* // str => "1010"

var str = $S("%x").format(10);
*
* // 결과 :
* // str => "a"

var str = $S("%X").format(10);
*
* // 결과 :
* // str => "A"
 * @see $S#times
  
 */
jindo.$S.prototype.format = function() {
	//-@@$S.format-@@//
	var args = arguments;
	var idx  = 0;
	var s = this._str.replace(/%([ 0])?(-)?([1-9][0-9]*)?([bcdsoxX])/g, function(m0,m1,m2,m3,m4){
		var a = args[idx++];
		var ret = "", pad = "";

		m3 = m3?+m3:0;

		if (m4 == "s") {
			ret = a+"";
		} else if (" bcdoxX".indexOf(m4) > 0) {
			if (!jindo.$Jindo.isNumeric(a)) return "";
			ret = (m4 == "c")?String.fromCharCode(a):a.toString(({b:2,d:10,o:8,x:16,X:16})[m4]);
			if (" X".indexOf(m4) > 0) ret = ret.toUpperCase();
		}

		if (ret.length < m3) pad = jindo.$S(m1||" ").times(m3 - ret.length)._str;
		(m2 == '-')?(ret+=pad):(ret=pad+ret);

		return ret;
	});

	return jindo.$S(s);
};

//-!jindo.$Event start!-//
/**
 
 * @fileOverview $Event() 객체의 생성자 및 메서드를 정의한 파일
 * @name event.js
 * @author Kim, Taegon
  
 */

/**
 
 * @class $Event() 객체는 Event 객체를 래핑하여 이벤트 처리와 관련된 확장 기능을 제공한다. 사용자는 $Event() 객체를 사용하여 발생한 이벤트에 대한 정보를 파악하거나 동작을 지정할 수 있다.
 * @constructor
 * @description Event 객체를 래핑한 $Event() 객체를 생성한다.
 * @param {Event} event Event 객체.
  
 */
jindo.$Event = (function(isMobile) {
	if(isMobile){
		return function(e){
			//-@@$Event-@@//
			var cl = arguments.callee;
			if (e instanceof cl) return e;
			if (!(this instanceof cl)) return new cl(e);
		
			this._event = this._posEvent = e;
			this._globalEvent = window.event;
		    /**  
		     
이벤트의 종류
  
		     */
			this.type = e.type.toLowerCase();
			if (this.type == "dommousescroll") {
				this.type = "mousewheel";
			} else if (this.type == "domcontentloaded") {
				this.type = "domready";
			}
			
			this.isTouch = false;
			if(this.type.indexOf("touch") > -1){
				this._posEvent = e.changedTouches[0];
				this.isTouch = true;
			}
		
			this.canceled = false;
		
			/**  
		     
이벤트가 발생한 엘리먼트
  
		     */
			this.element = e.target || e.srcElement;
		    /**
		     
이벤트가 정의된 엘리먼트
  
		     */
			this.currentElement = e.currentTarget;
		    /**
		     
이벤트의 연관 엘리먼트
  
		     */
			this.relatedElement = null;
		
			if (!jindo.$Jindo.isUndefined(e.relatedTarget)) {
				this.relatedElement = e.relatedTarget;
			} else if(e.fromElement && e.toElement) {
				this.relatedElement = e[(this.type=="mouseout")?"toElement":"fromElement"];
			}
		};
	}else{
		return function(e){
			//-@@$Event-@@//
			var cl = arguments.callee;
			if (e instanceof cl) return e;
			if (!(this instanceof cl)) return new cl(e);
		
			if (e === undefined) e = window.event;
			if (e === window.event && document.createEventObject) e = document.createEventObject(e);
		
		
			this.isTouch = false;
			this._event = this._posEvent = e;
			this._globalEvent = window.event;
		
		    /**  
		     
이벤트의 종류
  
		     */
			this.type = e.type.toLowerCase();
			if (this.type == "dommousescroll") {
				this.type = "mousewheel";
			} else if (this.type == "domcontentloaded") {
				this.type = "domready";
			}
		
			this.canceled = false;
		
			/**  
		     
이벤트가 발생한 엘리먼트
  
		     */
			this.element = e.target || e.srcElement;
		    /**
		     
이벤트가 정의된 엘리먼트
  
		     */
			this.currentElement = e.currentTarget;
		    /**
		     
이벤트의 연관 엘리먼트
  
		     */
			this.relatedElement = null;
		
			if (e.relatedTarget !== undefined) {
				this.relatedElement = e.relatedTarget;
			} else if(e.fromElement && e.toElement) {
				this.relatedElement = e[(this.type=="mouseout")?"toElement":"fromElement"];
			}
		};
	}
})(_JINDO_IS_MO);

//-!jindo.$Event.prototype.mouse start!-//
/**
 
 * @description mouse() 메서드는 마우스 이벤트 정보를 담고 있는 객체를 반환한다. 마우스 이벤트 정보 객체의 속성에 대한 설명은 다음 표와 같다.<br>
 * @param1 
 * @return1 {Object} 마우스 이벤트 정보를 갖는 객체.
 * @param2 {Boolean} bIsScrollbar true이면 scroll속성을 알 수 있다.(기본 값은 false) - desktop에서만 사용가능
 * @return2 {Object} 마우스 이벤트 정보를 갖는 객체.
 <table>
	<caption>마우스 이벤트 정보 객체 속성</caption>
	<thead>
		<tr>
			<th scope="col">속성</th>
			<th scope="col">타입</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>delta</td>
			<td>Number</td>
			<td>마우스 휠을 굴린 정도를 정수로 저장한다. 마우스 휠을 위로 굴린 정도는 양수 값으로, 아래로 굴린 정도는 음수 값으로 저장한다.</td>
		</tr>
		<tr>
			<td>left</td>
			<td>Boolean</td>
			<td>마우스 왼쪽 버튼 클릭 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>middle</td>
			<td>Boolean</td>
			<td>마우스 가운데 버튼 클릭 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>right</td>
			<td>Boolean</td>
			<td>마우스 오른쪽 버튼 클릭 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>scroll</td>
			<td>Boolean</td>
			<td>이벤트가 스크롤에서 발생했는지를 알수있다.</td>
		</tr>
	</tbody>
</table>
* @example
function eventHandler(evt) {
   var mouse = evt.mouse();

   mouse.delta;   // Number. 휠이 움직인 정도. 휠을 위로 굴리면 양수, 아래로 굴리면 음수.
   mouse.left;    // 마우스 왼쪽 버튼을 입력된 경우 true, 아니면 false
   mouse.middle;  // 마우스 중간 버튼을 입력된 경우 true, 아니면 false
   mouse.right;   // 마우스 오른쪽 버튼을 입력된 경우 true, 아니면 false
}
  
 */
jindo.$Event.prototype.mouse = function(bIsScrollbar) {
	//-@@$Event.mouse-@@//
	jindo.$Jindo.checkVarType(arguments,{
		"voi" : [],
		"bol" : ["bIsScrollbar:Boolean"]
	});
	var e    = this._event;
	var ele  = this.element;
	var delta = 0;
	var left = false,mid = false,right = false;

	var left  = e.which ? e.button==0 : !!(e.button&1);
	var mid   = e.which ? e.button==1 : !!(e.button&4);
	var right = e.which ? e.button==2 : !!(e.button&2);
	var ret   = {};

	if (e.wheelDelta) {
		delta = e.wheelDelta / 120;
	} else if (e.detail) {
		delta = -e.detail / 3;
	}
	var scrollbar;
	if(bIsScrollbar){
		scrollbar = _event_isScroll(ele,e);
	}
	
				
	ret = {
		delta  : delta,
		left   : left,
		middle : mid,
		right  : right,
		scrollbar : scrollbar
	};
	// replace method
	this.mouse = function(bIsScrollbar){
		if(bIsScrollbar){
			ret.scrollbar = _event_isScroll(this.element,this._event);
			this.mouse = function(){return ret;};
		} 
		return ret;
	};

	return ret;
};
/**
 * @ignore
 */
function _event_getScrollbarSize() {
	
	var oScrollbarSize = { x : 0, y : 0 };
		
	var elDummy = jindo.$([
		'<div style="',
		[
			'overflow:scroll',
			'width:100px',
			'height:100px',
			'position:absolute',
			'left:-1000px',
			'border:0',
			'margin:0',
			'padding:0'
		].join(' !important;'),
		' !important;">'
	].join(''));
	
	document.body.insertBefore(elDummy, document.body.firstChild);
	
	oScrollbarSize = {
		x : elDummy.offsetWidth - elDummy.scrollWidth,
		y : elDummy.offsetHeight - elDummy.scrollHeight
	};
	
	document.body.removeChild(elDummy);
	elDummy = null;
	
	_event_getScrollbarSize = function() {
		return oScrollbarSize;
	};
	
	return oScrollbarSize;
	
}
/**
 * @ignore
 */
function _event_isScroll(ele,e){
	
	// IE 의 경우 componentFromPoint 메서드를 제공하므로 이걸 활용
	if (ele.componentFromPoint) {
		return /(scrollbar|outside)/.test(ele.componentFromPoint(e.clientX, e.clientY));
	}
	
	// 파이어폭스는 스크롤바 클릭시 XUL 객체로 지정
	if (_JINDO_IS_FF) {
		
		try {
			var name = e.originalTarget.localName;
			return (
				name === 'thumb' ||
				name === 'slider' ||
				name === 'scrollcorner' ||
				name === 'scrollbarbutton'
			);
		} catch(ex) {
			return true;
		}
		
	}
	
	var sDisplay = jindo.$Element(ele).css('display');
	if (sDisplay === 'inline') { return false; }
	
	// 엘리먼트 내에서 클릭된 위치 얻기
	var oPos = {
		x : e.offsetX || e.layerX || 0,
		y : e.offsetY || e.layerY || 0
	};
	
	// Webkit 의 경우 border 의 사이즈가 더해져서 나옴
	if (_JINDO_IS_WK) {
		oPos.x -= ele.clientLeft;
		oPos.y -= ele.clientTop;
	}
	
	var oScrollbarSize = _event_getScrollbarSize();
	
	// 스크롤바가 있는 영역
	var oScrollPos = {
		x : [ ele.clientWidth, ele.clientWidth + oScrollbarSize.x ],
		y : [ ele.clientHeight, ele.clientHeight + oScrollbarSize.y ]
	};
	
	return (
		(oScrollPos.x[0] <= oPos.x && oPos.x <= oScrollPos.x[1]) ||
		(oScrollPos.y[0] <= oPos.y && oPos.y <= oScrollPos.y[1])
	);
}

//-!jindo.$Event.prototype.key start!-//
/**
 
  * @description key() 메서드는 키보드 이벤트 정보를 담고 있는 객체를 반환한다. 키보드 이벤트 정보 객체의 속성에 대한 설명은 다음 표와 같다.<br>
 <table>
	<caption>키보드 이벤트 정보 객체 속성</caption>
	<thead>
		<tr>
			<th scope="col">속성</th>
			<th scope="col">타입</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>alt</td>
			<td>Boolean</td>
			<td>ALT 키 입력 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>ctrl</td>
			<td>Boolean</td>
			<td>CTRL 키 입력 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>down</td>
			<td>Boolean</td>
			<td>아래쪽 방향키 입력 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>enter</td>
			<td>Boolean</td>
			<td>엔터(enter)키 입력 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>esc</td>
			<td>Boolean</td>
			<td>ESC 키 입력 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>keyCode</td>
			<td>Boolean</td>
			<td>입력한 키의 코드 값을 정수 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>left</td>
			<td>Boolean</td>
			<td>왼쪽 방향키 입력 여부를 불리언 형태 저장한다.</td>
		</tr>
		<tr>
			<td>meta</td>
			<td>Boolean</td>
			<td>META키(Mac 용 키보드의 Command 키) 입력 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>right</td>
			<td>Boolean</td>
			<td>오른쪽 방향키 입력 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>shift</td>
			<td>Boolean</td>
			<td>Shift키 입력 여부를 불리언 형태로 저장한다.</td>
		</tr>
		<tr>
			<td>up</td>
			<td>Boolean</td>
			<td>위쪽 방향키 입력 여부를 불리언 형태로 저장한다.</td>
		</tr>
	</tbody>
</table>
 * @return {Object} 키보드 이벤트 정보를 갖는 객체.
 * @example
function eventHandler(evt) {
   var key = evt.key();

   key.keyCode; // Number. 키보드의 키코드
   key.alt;     // Alt 키를 입력된 경우 true.
   key.ctrl;    // Ctrl 키를 입력된 경우 true.
   key.meta;    // Meta 키를 입력된 경우 true.
   key.shift;   // Shift 키를 입력된 경우 true.
   key.up;      // 위쪽 화살표 키를 입력된 경우 true.
   key.down;    // 아래쪽 화살표 키를 입력된 경우 true.
   key.left;    // 왼쪽 화살표 키를 입력된 경우 true.
   key.right;   // 오른쪽 화살표 키를 입력된 경우 true.
   key.enter;   // 리턴키를 눌렀으면 true
   key.esc;   // ESC키를 눌렀으면 true
   }
  
 */
jindo.$Event.prototype.key = function() {
	//-@@$Event.key-@@//
	var e     = this._event;
	var k     = e.keyCode || e.charCode;
	var ret   = {
		keyCode : k,
		alt     : e.altKey,
		ctrl    : e.ctrlKey,
		meta    : e.metaKey,
		shift   : e.shiftKey,
		up      : (k == 38),
		down    : (k == 40),
		left    : (k == 37),
		right   : (k == 39),
		enter   : (k == 13),		
		esc   : (k == 27)
	};

	this.key = function(){ return ret };

	return ret;
};

//-!jindo.$Event.prototype.pos start(jindo.$Element.prototype.offset)!-//
/**
 
   * @description pos() 메서드는 마우스 커서의 위치 정보를 담고 있는 객체를 반환한다. 키보드 커서 위치 정보 객체의 속성에 대한 설명은 다음 표와 같다.<br>
 <table>
	<caption>마우서 커서 위치 정보 객체 속성</caption>
	<thead>
		<tr>
			<th scope="col">속성</th>
			<th scope="col">타입</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>clientX</td>
			<td>Number</td>
			<td>화면을 기준으로 마우스 커서의 X좌표를 저장한다.</td>
		</tr>
		<tr>
			<td>clientY</td>
			<td>Number</td>
			<td>화면을 기준으로 마우스 커서의 Y좌표를 저장한다.</td>
		</tr>
		<tr>
			<td>offsetX</td>
			<td>Number</td>
			<td>DOM 요소를 기준으로 마우스 커서의 상대적인 X좌표를 저장한다.</td>
		</tr>
		<tr>
			<td>offsetY</td>
			<td>Number</td>
			<td>DOM 요소를 기준으로 마우스 커서의 상대적인 Y좌표를 저장한다.</td>
		</tr>
		<tr>
			<td>pageX</td>
			<td>Number</td>
			<td>문서를 기준으로 마우스 커서의 X 좌표를 저장한다.</td>
		</tr>
		<tr>
			<td>pageY</td>
			<td>Number</td>
			<td>문서를 기준으로 마우스 커서의 Y좌표를 저장한다.</td>
		</tr>
	</tbody>
</table>
<b>참고</b>
<ul>
	<li>layerX, layerY는 더 이상 지원하지 않는다(deprecated).</li>
	<li>pos() 메서드를 사용하려면 Jindo 프레임워크에 $Element() 객체가 포함되어 있어야 한다.</li>
</ul>
 * @param1 
 * @return1 {Object} 마우스 커서의 위치 정보.
 * @param2 {Boolean} bGetOffset 이벤트가 발생한 요소에서 마우스 커서의 상대 위치인 offsetX, offsetY 값을 구할 것인지를 결정할 파라미터. bGetOffset 값이 true면 값을 구한다.
 * @return2 {Object} 마우스 커서의 위치 정보.
 * @example
function eventHandler(evt) {
   var pos = evt.pos();

   pos.clientX;  // 현재 화면에 대한 X 좌표
   pos.clientY;  // 현재 화면에 대한 Y 좌표
   pos.pageX;  // 문서 전체에 대한 X 좌표
   pos.pageY;  // 문서 전체에 대한 Y 좌표
   pos.offsetX; // 이벤트가 발생한 엘리먼트에 대한 마우스 커서의 상대적인 X좌표 (1.2.0 이상)
   pos.offsetY; // 이벤트가 발생한 엘리먼트에 대한 마우스 커서의 상대적인 Y좌표 (1.2.0 이상)
   pos.layerX;  // (deprecated)이벤트가 발생한 엘리먼트로부터의 상대적인 X 좌표
   pos.layerY;  // (deprecated)이벤트가 발생한 엘리먼트로부터의 상대적인 Y 좌표
}
  
 */
jindo.$Event.prototype.pos = function(bGetOffset) {
	//-@@$Event.pos-@@//
	jindo.$Jindo.checkVarType(arguments,{
		"voi" : [],
		"bol" : ["bGetOffset:Boolean"]
	});
	var e   = this._posEvent;
	var doc = (this.element.ownerDocument||document);
	var b   = doc.body;
	var de  = doc.documentElement;
	var pos = [b.scrollLeft || de.scrollLeft, b.scrollTop || de.scrollTop];
	var ret = {
		clientX : e.clientX,
		clientY : e.clientY,
		pageX   : 'pageX' in e ? e.pageX : e.clientX+pos[0]-b.clientLeft,
		pageY   : 'pageY' in e ? e.pageY : e.clientY+pos[1]-b.clientTop,
		layerX  : 'offsetX' in e ? e.offsetX : e.layerX - 1,
		layerY  : 'offsetY' in e ? e.offsetY : e.layerY - 1
	};

    /*
     
오프셋을 구하는 메소드의 비용이 크므로, 요청시에만 구하도록 한다.
  
     */
	if (bGetOffset && jindo.$Element) {
		var offset = jindo.$Element(this.element).offset();
		ret.offsetX = ret.pageX - offset.left;
		ret.offsetY = ret.pageY - offset.top;
	}

	return ret;
};

//-!jindo.$Event.prototype.stop start!-//
/**
 
 * @description stop() 메서드는 이벤트의 버블링과 기본 동작을 중지시킨다. 버블링은 특정 HTML 엘리먼트에서 이벤트가 발생했을 때 이벤트가 상위 노드로 전파되는 현상이다. 예를 들어, &lt;div&gt; 요소를 클릭할 때 &lt;div&gt; 요소와 함께 상위 요소인 document 요소에도 onclick 이벤트가 발생한다. stop() 메서드는 지정한 객체에서만 이벤트가 발생하도록 버블링을 차단한다.
 *
 * @param1 {Void}
 * @return1 {$Event} 이벤트 객체.
 *
 * @param2 {Numeric} nCancelConstant $Event() 객체의 상수. 지정한 상수에 따라 이벤트의 버블링과 기본 동작을 선택하여 중지시킨다. $Event() 객체의 상수 값으로 CANCEL_ALL, CANCEL_BUBBLE, CANCEL_DEFAULT가 있으며, 기본 값은 CANCEL_ALL이다(1.1.3 버전 이상).
 * @return2 {$Event} 이벤트 객체.
 *
 * @see $Event.CANCEL_ALL
 * @see $Event.CANCEL_BUBBLE
 * @see $Event.CANCEL_DEFAULT
 * @example
// 기본 동작만 중지시키고 싶을 때 (1.1.3버전 이상)
function stopDefaultOnly(evt) {
	// Here is some code to execute

	// Stop default event only
	evt.stop($Event.CANCEL_DEFAULT);
}
  
 */
jindo.$Event.prototype.stop = function(nCancel) {
	//-@@$Event.stop-@@//
	jindo.$Jindo.checkVarType(arguments,{
		"voi" : [],
		"num" : ["nCancel:Numeric"]
	});
	nCancel = nCancel || jindo.$Event.CANCEL_ALL;

	var e = (window.event && window.event == this._globalEvent)?this._globalEvent:this._event;
	var b = !!(nCancel & jindo.$Event.CANCEL_BUBBLE); // stop bubbling
	var d = !!(nCancel & jindo.$Event.CANCEL_DEFAULT); // stop default event

	this.canceled = true;

	if (e.preventDefault !== undefined && d) e.preventDefault();
	if (e.stopPropagation !== undefined && b) e.stopPropagation();

	if(d) e.returnValue = false;
	if(b) e.cancelBubble = true;

	return this;
};

/**
 
 * @description stopDefault() 메서드는 이벤트의 기본 동작을 중지시킨다. stop() 메서드의 파라미터로 CANCEL_DEFAULT 값을 입력한 것과 같다.
 * @return {$Event} 이벤트 객체.
 * @see $Event#stop
 * @see $Event.CANCEL_DEFAULT
  
 */
jindo.$Event.prototype.stopDefault = function(){
	return this.stop(jindo.$Event.CANCEL_DEFAULT);
};

/**
 
 * @description stopBubble() 메서드는 이벤트의 버블링을 중지시킨다. stop() 메서드의 파라미터로 CANCEL_BUBBLE 값을 입력한 것과 같다.
 * @return {$Event} 이벤트 객체.
 * @see $Event#stop
 * @see $Event.CANCEL_BUBBLE
  
 */
jindo.$Event.prototype.stopBubble = function(){
	return this.stop(jindo.$Event.CANCEL_BUBBLE);
};

/**
 
 * @constant
 * @description CANCEL_BUBBLE는 stop() 메서드에서 버블링을 중지시킬 때 사용되는 상수이다.
 * @see $Event#stop
 * @final
  
 */
jindo.$Event.CANCEL_BUBBLE = 1;

/**
 
 * @constant
 * @description CANCEL_DEFAULT는 stop() 메서드에서 기본 동작을 중지시킬 때 사용되는 상수이다.
 * @see $Event#stop
 * @final
  
 */
jindo.$Event.CANCEL_DEFAULT = 2;

/**
 
 * @constant
 * @description CANCEL_ALL는 stop() 메서드에서 버블링과 기본 동작을 모두 중지시킬 때 사용되는 상수이다.
 * @see $Event#stop
 * @final
  
 */
jindo.$Event.CANCEL_ALL = 3;

//-!jindo.$Event.prototype.$value start!-//
/**
 
 * @description $value 메서드는 원본 Event 객체를 리턴한다
 * @return {Event} 원본 Event 객체
 * @example
function eventHandler(evt){
	evt.$value();
}
  
 */
jindo.$Event.prototype.$value = function() {
	//-@@$Event.$value-@@//
	return this._event;
};

//-!jindo.$Event.prototype.changedTouch start(jindo.$Event.prototype.targetTouch)!-//
/**
 
 * 모바일에서 touch관련 이벤트를 사용시 changeTouches객체를 좀 더 쉽게 사용하도록 한다.
 * @name $Event#changedTouch
 * @caution 데스크탑에서는 작동하지 않는다.
 * @since 2.0.0
 
 * @param1 {Void} 
 * @return1 {Array} 각종 정보 데이터가 들어있는 배열

 * @param2 {Numeric} 인덱스 번호
 * @return2 {Hash} 각종 정보 데이터
 
 * @throws {$Except.NOT_SUPPORT_METHOD} 데스크탑에서 사용할 때 예외상황 발생.
 * @see $Event#targetTouch 
 * @see $Event#pos 
 * @example
 $Element("only_mobile").attach("touchstart",function(e){
 	e.changeTouch(0);
	{
	   "id" : "123123",// identifier
	   "event" : $Event,// $Event
	   "element" : element, // 해당 엘리먼트
	   "pos" : function(){}//  메서드 (Pos메서드과 같음)
	}
	
 	e.changeTouch();
	[
		{
		   "id" : "123123",
		   "event" : $Event,
		   "element" : element,
		   "pos" : function(){}
		},
		{
		   "id" : "123123",
		   "event" : $Event,
		   "element" : element,
		   "pos" : function(){}
		}
	]

 });
  
 */
(function(aType){
	var sTouches = "Touch";
	for(var i = 0, l = aType.length; i < l; i++){
		jindo.$Event.prototype[aType[i]+sTouches] = (function(sType){
			return function(nIndex){
				if(this.isTouch){
					var oRet = [];
					var ev = this._event[sType+"es"];
					var l = ev.length;
					var e;
					for(var i = 0; i < l; i++){
						e = ev[i];
						oRet.push({
							"id" : e.identifier,
							"event" : this,
							"element" : e.target,
							"_posEvent" : e,
							"pos" : jindo.$Event.prototype.pos
						});
					}
					this[sType] = function(nIndex){
						var oArgs = jindo.$Jindo.checkVarType(arguments, {
							'void' : [  ],
							'4num' : [ 'nIndex:Numeric' ]
						},"$Event#"+sType);
						if(oArgs+"" == 'void') return oRet;
						
						return oRet[nIndex];
					}
				}else{
					this[sType] = function(nIndex){
						throw new jindo.$Error(jindo.$Except.NOT_SUPPORT_METHOD,"$Event#"+sType);
					}
				}
				
				return this[sType].apply(this,_toArray(arguments));
			};
		})(aType[0]+sTouches);
	}
	
})(["changed","target"]);

//-!jindo.$Event.prototype.targetTouch start(jindo.$Event.prototype.changedTouch)!-//
/**
 
 * 모바일에서 touch관련 이벤트를 사용시 targetTouches객체를 좀 더 쉽게 사용하도록 한다.
 * @name $Event#targetTouch
 * @caution 데스크탑에서는 작동하지 않는다.
 * @since 2.0.0
 
 * @param1 {Void} 
 * @return1 {Array} 각종 정보 데이터가 들어있는 배열

 * @param2 {Numeric} 인덱스 번호
 * @return2 {Hash} 각종 정보 데이터
 
 * @throws {$Except.NOT_SUPPORT_METHOD} 데스크탑에서 사용할 때 예외상황 발생.
 * @see $Event#changedTouch 
 * @see $Event#pos 
 * @example
 $Element("only_mobile").attach("touchstart",function(e){
	e.targetTouch(0);
	{
	   "id" : "123123",// identifier
	   "event" : $Event,// $Event
	   "element" : element, // 해당 엘리먼트
	   "pos" : function(){}//  메서드 (Pos메서드과 같음)
	}
	
	e.targetTouch();
	[
		{
		   "id" : "123123",
		   "event" : $Event,
		   "element" : element,
		   "pos" : function(){}
		},
		{
		   "id" : "123123",
		   "event" : $Event,
		   "element" : element,
		   "pos" : function(){}
		}
	]
 });
  
 */

//-!jindo.$Json start(jindo.$Json._oldMakeJSON)!-//
/**
 
 * @class $Json 객체는 JSON(JavaScript Object Notation)을 다루기 위한 다양한 기능을 제공한다. 생성자에 파라미터로 객체나 문자열을 입력한다. XML 형태의 문자열로 $Json() 객체를 생성하려면 fromXML() 메서드를 사용한다.
 * @constructor
 * @description $Json() 객체를 생성한다.
 * @param {Varaint} 다양한 타입
 * @return {$Json} 인수를 인코딩한 $Json() 객체.
 * @see $Json#fromXML
 * @see <a href="http://www.json.org/json-ko.html">json.org</a>
 * @example
var oStr = $Json ('{ zoo: "myFirstZoo", tiger: 3, zebra: 2}');

var d = {name : 'nhn', location: 'Bundang-gu'}
var oObj = $Json (d);
  
 */

jindo.$Json = function (sObject) {
	//-@@$Json-@@//
	var cl = arguments.callee;
	if (sObject instanceof cl) return sObject;
	
	if (!(this instanceof cl)){
		try {
			jindo.$Jindo._warn(arguments.length, 1,"$Json");
			return new cl(arguments.length?sObject:{});
		} catch(e) {
			if (e instanceof TypeError) { return null; }
			throw e;
		}
	}	
		
	jindo.$Jindo.checkVarType(arguments, {
		'4var' : ['oObject:Variant']
	},"$Json");
	this._object = sObject;
};

//-!jindo.$Json._oldMakeJSON.hidden start!-//
jindo.$Json._oldMakeJSON = function(sObject,sType){
	try {
		if(jindo.$Jindo.isString(sObject)&&/^(?:\s*)[\{\[]/.test(sObject)){
			sObject = eval("("+sObject+")");
		}else{
			return sObject;
		}
	} catch(e) {
		throw new jindo.$Error(jindo.$Except.PARSE_ERROR,sType);
	}
	return sObject;
};

//-!jindo.$Json.fromXML start!-//
/**
  
 * @description fromXML() 메서드는 XML 형태의 문자열을 $Json() 객체로 인코딩한다. XML 형식의 문자열에 XML 요소가 속성을 포함하고 있을 경우 해당 요소의 정보에 해당하는 내용을 하위 객체로 표현한다. 이때 요소가 CDATA 값을 가질 경우 $cdata 속성으로 값을 저장한다.
 * @param {String+} sXML XML 형태의 문자열.
 * @return {$Json} $Json() 객체.
 * @throws {jindo.$Except.ONLY_STRING_TYPE} 파라메터가 문자가 아닌 경우 예외상황이 발생된다.
 * @example
var j1 = $Json.fromXML('<data>only string</data>');

// 결과 :
// {"data":"only string"}

var j2 = $Json.fromXML('<data><id>Faqh%$</id><str attr="123">string value</str></data>');

// 결과:
// {"data":{"id":"Faqh%$","str":{"attr":"123","$cdata":"string value"}}}
  
  */
jindo.$Json.fromXML = function(sXML) {
	//-@@$Json.fromXML-@@//
	var ___jindo = jindo.$Jindo;
	var oArgs = ___jindo.checkVarType(arguments, {
		'4str' : ['sXML:String+']
	},"<static> $Json#fromXML");
	var o  = {};
	var re = /\s*<(\/?[\w:\-]+)((?:\s+[\w:\-]+\s*=\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'))*)\s*((?:\/>)|(?:><\/\1>|\s*))|\s*<!\[CDATA\[([\w\W]*?)\]\]>\s*|\s*>?([^<]*)/ig;
	var re2= /^[0-9]+(?:\.[0-9]+)?$/;
	var ec = {"&amp;":"&","&nbsp;":" ","&quot;":"\"","&lt;":"<","&gt;":">"};
	var fg = {tags:["/"],stack:[o]};
	var es = function(s){ 
		if (___jindo.isUndefined(s)) return "";
		return  s.replace(/&[a-z]+;/g, function(m){ return (___jindo.isString(ec[m]))?ec[m]:m; })
	};
	var at = function(s,c){s.replace(/([\w\:\-]+)\s*=\s*(?:"((?:\\"|[^"])*)"|'((?:\\'|[^'])*)')/g, function($0,$1,$2,$3){c[$1] = es(($2?$2.replace(/\\"/g,'"'):undefined)||($3?$3.replace(/\\'/g,"'"):undefined));}) };
	var em = function(o){
		for(var x in o){
			if (o.hasOwnProperty(x)) {
				if(Object.prototype[x])
					continue;
					return false;
			}
		};
		return true
	};
	/*
	  
$0 : 전체
$1 : 태그명
$2 : 속성문자열
$3 : 닫는태그
$4 : CDATA바디값
$5 : 그냥 바디값
  
	 */

	var cb = function($0,$1,$2,$3,$4,$5) {
		var cur, cdata = "";
		var idx = fg.stack.length - 1;
		
		if (___jindo.isString($1)&& $1) {
			if ($1.substr(0,1) != "/") {
				var has_attr = (typeof $2 == "string" && $2);
				var closed   = (typeof $3 == "string" && $3);
				var newobj   = (!has_attr && closed)?"":{};

				cur = fg.stack[idx];
				
				if (___jindo.isUndefined(cur[$1])) {
					cur[$1] = newobj; 
					cur = fg.stack[idx+1] = cur[$1];
				} else if (cur[$1] instanceof Array) {
					var len = cur[$1].length;
					cur[$1][len] = newobj;
					cur = fg.stack[idx+1] = cur[$1][len];  
				} else {
					cur[$1] = [cur[$1], newobj];
					cur = fg.stack[idx+1] = cur[$1][1];
				}
				
				if (has_attr) at($2,cur);

				fg.tags[idx+1] = $1;

				if (closed) {
					fg.tags.length--;
					fg.stack.length--;
				}
			} else {
				fg.tags.length--;
				fg.stack.length--;
			}
		} else if (___jindo.isString($4) && $4) {
			cdata = $4;
		} else if (___jindo.isString($5) && $5) {
			cdata = es($5);
		}
		
		if (cdata.replace(/^\s+/g, "").length > 0) {
			var par = fg.stack[idx-1];
			var tag = fg.tags[idx];

			if (re2.test(cdata)) {
				cdata = parseFloat(cdata,10);
			}else if (cdata == "true"){
				cdata = true;
			}else if(cdata == "false"){
				cdata = false;
			}
			
			if(___jindo.isUndefined(par)) return;
			
			if (par[tag] instanceof Array) {
				var o = par[tag];
				if (___jindo.isHash(o[o.length-1]) && !em(o[o.length-1])) {
					o[o.length-1].$cdata = cdata;
					o[o.length-1].toString = function(){ return cdata; }
				} else {
					o[o.length-1] = cdata;
				}
			} else {
				if (___jindo.isHash(par[tag])&& !em(par[tag])) {
					par[tag].$cdata = cdata;
					par[tag].toString = function(){ return cdata; }
				} else {
					par[tag] = cdata;
				}
			}
		}
	};
	
	sXML = sXML.replace(/<(\?|\!-)[^>]*>/g, "");
	sXML.replace(re, cb);
	
	return jindo.$Json(o);
};

//-!jindo.$Json.prototype.get start!-//
/**
 
 * @description get() 메서드는 특정 경로(path)에 해당하는 $Json() 객체의 값을 반환한다.
 * @param {String+} sPath 경로를 지정한 문자열
 * @return {Array} 지정된 경로에 해당하는 값을 원소로 가지는 배열.
 * @throws {jindo.$Except.ONLY_STRING_TYPE} 파라메터가 문자가 아닌 경우 예외상황이 발생된다.
 * @example
var j = $Json.fromXML('<data><id>Faqh%$</id><str attr="123">string value</str></data>');
var r = j.get ("/data/id");

// 결과 :
// [Faqh%$]
  
 */
jindo.$Json.prototype.get = function(sPath) {
	//-@@$Json.get-@@//
	var ___jindo = jindo.$Jindo;
	var oArgs = ___jindo.checkVarType(arguments, {
		'4str' : ['sPath:String+']
	},"$Json#get");
	var o = jindo.$Json._oldMakeJSON(this._object,"$Json#get");
	if(!(___jindo.isHash(o)||___jindo.isArray(o))){
		throw new jindo.$Error(jindo.$Except.JSON_MUST_HAVE_ARRAY_HASH,"$Json#get");
	}
	var p = sPath.split("/");
	var re = /^([\w:\-]+)\[([0-9]+)\]$/;
	var stack = [[o]], cur = stack[0];
	var len = p.length, c_len, idx, buf, j, e;
	
	for(var i=0; i < len; i++) {
		if (p[i] == "." || p[i] == "") continue;
		if (p[i] == "..") {
			stack.length--;
		} else {
			buf = [];
			idx = -1;
			c_len = cur.length;
			
			if (c_len == 0) return [];
			if (re.test(p[i])) idx = +RegExp.$2;
			
			for(j=0; j < c_len; j++) {
				e = cur[j][p[i]];
				if (___jindo.isUndefined(e)) continue;
				if (___jindo.isArray(e)) {
					if (idx > -1) {
						if (idx < e.length) buf[buf.length] = e[idx];
					} else {
						buf = buf.concat(e);
					}
				} else if (idx == -1) {
					buf[buf.length] = e;
				}
			}
			
			stack[stack.length] = buf;
		}
		
		cur = stack[stack.length-1];
	}

	return cur;
};

//-!jindo.$Json.prototype.toString start(jindo.$Json._oldToString)!-//
/**
 
 * @function
 * @description toString() 메서드는 $Json() 객체를 JSON 문자열 형태로 반환한다.
 * @return {String} JSON 문자열.
 * @see $Json#toObject
 * @see $Json#toXML
 * @see <a href="http://www.json.org/json-ko.html">json.org</a>
 * @example
var j = $Json({foo:1, bar: 31});
document.write (j.toString());
document.write (j);

// 결과 :
// {"bar":31,"foo":1}{"bar":31,"foo":1}
   
 */
jindo.$Json.prototype.toString = function() {
	//-@@$Json.toString-@@//
	if (window.JSON&&window.JSON.stringify&&window.JSON.stringify(/!/)) {
		jindo.$Json.prototype.toString = function() {
			try{
				return (window.JSON.stringify(this._object)).substr(0);
			}catch(e){
				return jindo.$Json._oldToString(this._object);
			}
		}
	}
	jindo.$Json.prototype.toString = function() {
		return jindo.$Json._oldToString(this._object);
	}
	
	return this.toString();
};

//-!jindo.$Json._oldToString.hidden start(jindo.$H.prototype.ksort)!-//
jindo.$Json._oldToString = function(oObj){
	var ___jindo = jindo.$Jindo;
	var func = {
		$ : function($) {
			if (___jindo.isNull($)||$==Infinity) return "null";
			if (___jindo.isFunction($)) return undefined;
			if (___jindo.isUndefined($)) return undefined;
			if (___jindo.isBoolean($)) return $?"true":"false";
			if (___jindo.isString($)) return this.s($);
			if (___jindo.isNumeric($)) return $;
			if (___jindo.isArray($)) return this.a($);
			if (___jindo.isHash($)) return this.o($);
			if (typeof $ == "object"||___jindo.isRegExp($)) return "{}";
			if (isNaN($)) return "null";
		},
		s : function(s) {
			var e = {'"':'\\"',"\\":"\\\\","\n":"\\n","\r":"\\r","\t":"\\t"};
			var c = function(m){ return (e[m] !== undefined)?e[m]:m };
			return '"'+s.replace(/[\\"'\n\r\t]/g, c)+'"';
		},
		a : function(a) {
			// a = a.sort();
			var s = "[",c = "",n=a.length;
			for(var i=0; i < n; i++) {
				if (___jindo.isFunction(a[i])) continue;
				s += c+this.$(a[i]);
				if (!c) c = ",";
			}
			return s+"]";
		},
		o : function(o) {
			o = jindo.$H(o).ksort().$value();
			var s = "{",c = "";
			for(var x in o) {
				if (o.hasOwnProperty(x)) {
					if (___jindo.isUndefined(o[x])||___jindo.isFunction(o[x])) continue;
					s += c+this.s(x)+":"+this.$(o[x]);
					if (!c) c = ",";
				}
			}
			return s+"}";
		}
	}

	return func.$(oObj);
};

//-!jindo.$Json.prototype.toXML start!-//
/**
 
 * @description toXML() 메서드는 $Json() 객체를 XML 형태의 문자열로 반환한다.
 * @return {String} XML 형태의 문자열.
 * @see $Json#toObject
 * @see $Json#toString
 * @example
var json = $Json({foo:1, bar: 31});
json.toXML();

// 결과 :
// <foo>1</foo><bar>31</bar>
  
 */
jindo.$Json.prototype.toXML = function() {
	//-@@$Json.toXML-@@//
	var f = function($,tag) {
		var t = function(s,at) { return "<"+tag+(at||"")+">"+s+"</"+tag+">" };
		
		switch (typeof $) {
			case 'undefined':
			case "null":
				return t("");
			case "number":
				return t($);
			case "string":
				if ($.indexOf("<") < 0){
					 return t($.replace(/&/g,"&amp;"));
				}else{
					return t("<![CDATA["+$+"]]>");
				}
			case "boolean":
				return t(String($));
			case "object":
				var ret = "";
				if ($ instanceof Array) {
					var len = $.length;
					for(var i=0; i < len; i++) { ret += f($[i],tag); };
				} else {
					var at = "";

					for(var x in $) {
						if ($.hasOwnProperty(x)) {
							if (x == "$cdata" || typeof $[x] == "function") continue;
							ret += f($[x], x);
						}
					}

					if (tag) ret = t(ret, at);
				}
				return ret;
		}
	};
	
	return f(jindo.$Json._oldMakeJSON(this._object,"$Json#toXML"), "");
};

//-!jindo.$Json.prototype.toObject start!-//
/**
 
 * @description toObject() 메서드는 $Json() 객체를 원래의 데이터 객체로 반환한다.
 * @return {Object} 원본 데이터 객체.
 * @see $Json#toObject
 * @see $Json#toString
 * @see $Json#toXML
 * @example
var json = $Json({foo:1, bar: 31});
json.toObject();

// 결과 :
// {foo: 1, bar: 31}
  
 */
jindo.$Json.prototype.toObject = function() {
	//-@@$Json.toObject-@@//
	//-@@$Json.$value-@@//
	return jindo.$Json._oldMakeJSON(this._object,"$Json#toObject");
};

//-!jindo.$Json.prototype.compare start(jindo.$Json._oldToString,jindo.$Json.prototype.toObject,jindo.$Json.prototype.toString)!-//
/**
 
 * @description compare() 메서드는 Json 객체끼리 값이 같은지 비교한다.
 * @param {Varaint} oData 비교할 Json 포맷 객체.
 * @return {Boolean} 비교 결과. 값이 같으면 true, 다르면 false를 반환한다.
 * @since  1.4.4 버전부터 사용 가능.
 * @example
$Json({foo:1, bar: 31}).compare({foo:1, bar: 31});

// 결과 :
// true

$Json({foo:1, bar: 31}).compare({foo:1, bar: 1});

// 결과 :
// false
  
 */
jindo.$Json.prototype.compare = function(oObj){
	//-@@$Json.compare-@@//
	var ___jindo = jindo.$Jindo;
	var oArgs = ___jindo.checkVarType(arguments, {
		'4obj' : ['oData:Hash+'],
		'4arr' : ['oData:Array+']
	},"$Json#compare");
	function compare(vSrc, vTar) {
		if (___jindo.isArray(vSrc)) {
			if (vSrc.length !== vTar.length) { return false; }
			for (var i = 0, nLen = vSrc.length; i < nLen; i++) {
				if (!arguments.callee(vSrc[i], vTar[i])) { return false; }
			}
			return true;
		} else if (___jindo.isRegExp(vSrc) || ___jindo.isFunction(vSrc) || ___jindo.isDate(vSrc)) { // toString 으로 비교할 것들
			return String(vSrc) === String(vTar);
		} else if (typeof vSrc === "number" && isNaN(vSrc)) {
			return isNaN(vTar);
		} else if (___jindo.isHash(vSrc)) {
			var nLen = 0;
			for (var k in vSrc) {nLen++; }
			for (var k in vTar) { nLen--; }
			if (nLen !== 0) { return false; }

			for (var k in vSrc) {
				if (k in vTar === false || !arguments.callee(vSrc[k], vTar[k])) { return false; }
			}

			return true
		}
		
		// === 로 비교할 것들
		return vSrc === vTar;
		
	}
	try{
		return compare(jindo.$Json._oldMakeJSON(this._object,"$Json#compare"), oObj);
	}catch(e){
		return false;
	}


//	return jindo.$Json._oldToString(this._object).toString() == jindo.$Json._oldToString(jindo.$Json(oData).toObject()).toString();
};

//-!jindo.$Json.prototype.$value start(jindo.$Json.prototype.toObject)!-//
/**
 
 * @description $value() 메서드는 toObject() 메서드와 같이 원래의 데이터 객체를 반환한다.
 * @return {Object} 원본 데이터 객체.
 * @see $Json#toObject
  
 */
jindo.$Json.prototype.$value = jindo.$Json.prototype.toObject;

//-!jindo.$Ajax start(jindo.$Json.prototype.toString)!-//
/**

 * @class $Ajax() 객체는 다양한 개발 환경에서 Ajax 요청과 응답을 쉽게 구현하기 위한 메서드를 제공한다.<br>
 * @extends core
 * @constructor
 * @description $Ajax() 객체는 서버와 브라우저 사이의 비동기 통신, 즉 Ajax 통신을 지원한다. $Ajax() 객체는 XHR 객체(XMLHTTPRequest)를 사용한 기본적인 방식과 함께 다른 도메인 사이의 통신을 위한 여러 방식을 제공한다. $Ajax() 객체의 기본적인 초기화 방식은 다음과 같다.
 <textarea name="code" class="js:nocontrols">
 var oAjax = new $Ajax('server.php', {
    type : 'xhr',
    method : 'get',     // GET 방식으로 통신
    onload : function(res){ // 요청이 완료되면 실행될 콜백 함수
      $('list').innerHTML = res.text();
    },
    timeout : 3,      // 3초 이내에 요청이 완료되지 않으면 ontimeout 실행 (생략 시 0)
    ontimeout : function(){ // 타임 아웃이 발생하면 실행될 콜백 함수, 생략 시 타임 아웃이 되면 아무 처리도 하지 않음
      alert("Timeout!");
    },
    async : true      // 비동기로 호출하는 경우, 생략하면 true
  });
  oAjax.request();
}
</textarea>
 * @param {String+} sUrl Ajax 요청을 보낼 서버의 URL.
 * @param {Hash+} oOption $Ajax()에서 사용하는 콜백 함수, 통신 방식 등과 같은 다양한 정보를 정의한다. oOption 객체의 프로퍼티와 사용법에 대한 설명은 다음 표와 같다.<br>
 * @throws {jindo.$Except.REQUIRE_AJAX} 사용하는 타입의 ajax가 없는 경우. 
 * @throws {jindo.$Except.CANNOT_USE_OPTION} 사용하지 못하는 옵션을 사용할 경우.
<table>
	<caption>oOption 객체의 속성</caption>
	<thead>
		<th>속성</th>
		<th>타입</th>
		<th>설명</th>
	</thead>
	<tbody>
		<tr>
			<td style="font-weight:bold;">type</td>
			<td>String</td>
			<td>
				Ajax 요청 방식. 생략하면 기본 값은 xhr이다.
				<ul>
					<li><strong>xhr</strong><br>
						브라우저에 내장된 XMLHttpRequest 객체를 이용하여 Ajax 요청을 처리한다. text, xml, json 형식의 응답 데이터를 처리할 수 있다. 요청 실패 시 HTTP 응답 코드를 통해 원인 파악이 가능하다. 단, 크로스 도메인(Cross-Domain) 상황에서 사용할 수 없다.
					</li>
					<li><strong>iframe</strong><br>
						iframe 요소를 프록시로 사용하여 Ajax 요청을 처리한다. 크로스 도메인 상황에서 사용할 수 있다. iframe 요청 방식은 다음과 같이 동작한다.
						<ol>
							<li>로컬(요청 하는 쪽)과 원격(요청 받는 쪽)에 모두 프록시용 HTML 파일을 만든다.</li>
							<li>로컬 프록시에서 원격 프록시로 데이터를 요청한다.</li>
							<li>원격 프록시가 원격 도메인에 XHR 방식으로 다시 Ajax 요청한다.</li>
							<li>응답을 받은 원격 프록시에서 로컬 프록시로 데이터를 전달한다.</li>
							<li>로컬 프록시에서 최종적으로 콜백 함수(onload)를 호출하여 처리한다.</li>
						</ol>
						<br>
						로컬 프록시 파일과 원격 프록시 파일은 다음과 같이 작성할 수 있다.
						<ul type="disc">
							<li>원격 프록시 파일 : ajax_remote_callback.html</li>
							<li>로컬 프록시 파일 : ajax_local_callback.html</li>
						</ul>
						※ iframe 요소를 사용한 방식은 인터넷 익스플로러에서 "딱딱"하는 페이지 이동음이 발생할 수 있다(요청당 2회).
					</li>
					<li><strong>jsonp</strong><br>
							JSON 형식과 &lt;script&gt; 태그를 사용하여 사용하여 Ajax 요청을 처리한다. 크로스 도메인 상황에서 사용할 수 있다. jsonp 요청 방식은 다음과 같이 동작한다.<br>
							<ol>
								<li>&lt;script&gt; 태그를 동적으로 생성한다. 이때 요청할 원격 페이지를 src 속성으로 입력하여 GET 방식으로 요청을 전송한다.</li>
								<li>요청 시에 콜백 함수를 매개 변수로 넘기면, 원격 페이지에서 전달받은 콜백 함수명으로 아래와 같이 응답을 보낸다.
									<ul type="disc">
										<li>function_name(...결과 값...)</li>
									</ul>
								</li>
								<li>응답은 콜백 함수(onload)에서 처리된다.</li>
							</ol>
							※ GET 방식만 가능하므로, 전송 데이터의 길이는 URL에서 허용하는 길이로 제한된다.
					</li>
					<li><strong>flash</strong><br>
						플래시 객체를 사용하여 Ajax 요청을 처리한다. 크로스 도메인 상황에에서 사용할 수 있다. 이 방식을 사용할 때 원격 서버의 웹 루트 디렉터리에 crossdomain.xml 파일이 존재해야 하며 해당 파일에 접근 권한이 설정되어 있어야 한다. 모든 통신은 플래시 객체를 통하여 주고 받으며 Ajax 요청을 시도하기 전에 반드시 플래시 객체를 초기화해야 한다. $Ajax.SWFRequest.write() 메서드를 사용하여 플래시 객체를 초기화하며 해당 메서드는 &lt;body&gt; 요소 안에 작성한다.
						만약 https에서 https 쪽으로 호출할 경우 &lt;allow-access-from domain="*" secure="true" /&gt; 처럼 secure을 true로 설정해야 하며 그 이외에는 false로 설정한다.
					</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">method</td>
			<td>String</td>
			<td>
				HTTP 요청 방식으로 post, get, put, delete 방식을 지원한다.
				<ul>
					<li><strong>post</strong><br>
					post 방식으로 http 요청을 전달한다. 기본 값이다.</li>
					<li><strong>get</strong><br>
					get 방식으로 http 요청을 전달한다. type 속성이 "jsonp" 방식으로 지정되면 HTTP 요청 방식은 "get"으로 설정된다.</li>
					<li><strong>put</strong><br>
					put 방식으로 http 요청을 전달한다. 1.4.2 부터 사용 가능하다.</li>
					<li><strong>delete</strong><br>
					delete 방식으로 http 요청을 전달한다. 1.4.2 부터 사용 가능하다.</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">timeout</td>
			<td>Number</td>
			<td>
				요청 타임 아웃 시간(초 단위).<br>
				기본 값은 0으로 타임 아웃을 적용하지 않는다. 타임 아웃 시간 안에 요청이 완료되지 않으면 Ajax 요청을 중지한다. 비동기 호출인 경우에만 사용 가능하다.
			</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">onload</td>
			<td>Function</td>
			<td>
				요청이 완료되면 실행할 콜백 함수.<br>
				반드시 지정해야 하며 콜백 함수의 파라미터로 응답 객체인 {@link $Ajax.Response} 객체가 전달된다.
			</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">onerror</td>
			<td>Function</td>
			<td>
				요청이 실패하면 실행할 콜백 함수.<br>
				생략하면 오류가 발생해도 onload 속성에 지정한 콜백 함수를 실행한다.
			</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">ontimeout</td>
			<td>Function</td>
			<td>
				타임 아웃이 되었을 때 실행할 콜백 함수.<br>
				생략하면 타임 아웃 발생해도 아무런 처리를 하지 않는다.
			</td>
		</tr>
		<tr>
		<td style="font-weight:bold;">proxy</td>
			<td>String</td>
			<td>
				로컬 프록시 파일의 경로.<br>
				type 속성이 "iframe"일 때 사용하며 반드시 지정해야 한다.
			</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">jsonp_charset</td>
			<td>String</td>
			<td>
				요청 시 사용할 &lt;script&gt; 인코딩 방식.<br>
				type 속성이 "jsonp"일 때 사용한다. 생략하면 "utf-8"이 기본값이다(0.4.2 버전부터 지원).
			</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">callbackid</td>
			<td>String</td>
			<td>
				콜백 함수 이름에 사용할 ID.<br>
				type 속성이 "jsonp"일 때 사용한다(1.3.0 부터 지원). 생략하면 랜덤한 ID 값이 생성된다.<br>
				jsonp 방식에서 Ajax 요청할 때 콜백 함수 이름에 랜덤한 ID 값을 덧붙여 만든 콜백 함수 이름을 서버로 전달한다. 이때 랜덤한 값을 ID로 사용하여 넘기므로 요청 URL이 매번 새롭게 생성되어 캐쉬 서버가 아닌 서버로 직접 데이터를 요청하게 된다. 따라서 ID 값을 지정하면 랜덤한 아이디 값으로 콜백 함수 이름을 생성하지 않으므로 캐쉬 서버를 사용하여 그에 대한 히트율을 높이고자 할 때 ID를 지정하여 사용할 수 있다.
			</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">callbackname</td>
			<td>String</td>
			<td>
				콜백 함수 이름.<br>
				type 속성이 "jsonp"일 때 사용하며, 서버에 요청할 콜백 함수의 이름을 지정할 수 있다. 기본 값은 "_callback"이다(1.3.8 부터 지원).
			</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">sendheader</td>
			<td>Boolean</td>
			<td>
				요청 헤더를 전송할지 여부.<br>
				type 속성이 "flash"일 때 사용하며, 서버에서 접근 권한을 설정하는 crossdomain.xml에 allow-header가 없는 경우에 false 로 설정해야 한다.<br>
				플래시 9에서는 allow-header가 false인 경우 get 방식으로만 ajax 통신이 가능하다.<br>
				플래시 10에서는 allow-header가 false인 경우 get,post 둘다 ajax 통신이 안된다.<br>
				allow-header가 설정되어 있지 않다면 반드시 false로 설정해야 한다. 기본 값은 true 이다(1.3.4부터 지원). 
			</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">async</td>
			<td>Boolean</td>
			<td>
				비동기 호출 여부.<br>
				type 속성이 "xhr"일 때 이 속성 값이 유효하다. 기본 값은 true 이다(1.3.7부터 지원).
			</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">decode</td>
			<td>Boolean</td>
			<td>
				type 속성이 "flash"일 때 사용하며, 요청한 데이터 안에 utf-8 이 아닌 다른 인코딩이 되어 있을때 false 로 지정한다. 기본 값은 true 이다(1.4.0부터 지원). 
			</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">postBody</td>
			<td>Boolean</td>
			<td>
				Ajax 요청 시 서버로 전달할 데이터를 Body 요소에 전달할 지의 여부.<br>
				type 속성이 "xhr"이고 method가 "get"이 아니어야 유효하며 REST 환경에서 사용된다. 기본값은 false 이다(1.4.2부터 지원).
			</td>
		</tr>
	</tbody>
</table>

 * @see $Ajax.Response
 * @see <a href="http://dev.naver.com/projects/jindo/wiki/cross%20domain%20ajax">Cross Domain Ajax 이해</a>
 * @example
// 'Get List' 버튼 클릭 시, 서버에서 데이터를 받아와 리스트를 구성하는 예제
// (1) 서버 페이지와 서비스 페이지가 같은 도메인에 있는 경우 - xhr

// [client.html]
<!DOCTYPE html>
<html>
	<head>
		<title>Ajax Sample</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
		<script type="text/javascript" language="javascript" src="lib/jindo.all.js"></script>
		<script type="text/javascript" language="javascript">
			function getList() {
				var oAjax = new $Ajax('server.php', {
					type : 'xhr',
					method : 'get',			// GET 방식으로 통신
					onload : function(res){	// 요청이 완료되면 실행될 콜백 함수
						$('list').innerHTML = res.text();
					},
					timeout : 3,			// 3초 이내에 요청이 완료되지 않으면 ontimeout 실행 (생략 시 0)
					ontimeout : function(){	// 타임 아웃이 발생하면 실행될 콜백 함수, 생략 시 타임 아웃이 되면 아무 처리도 하지 않음
						alert("Timeout!");
					},
					async : true			// 비동기로 호출하는 경우, 생략하면 true
				});
				oAjax.request();
			}
		</script>
	</head>
	<body>
		<button onclick="getList(); return false;">Get List</button>

		<ul id="list">

		</ul>
	</body>
</html>

// [server.php]
<?php
	echo "<li>첫번째</li><li>두번째</li><li>세번째</li>";
?>

 * @example
// 'Get List' 버튼 클릭 시, 서버에서 데이터를 받아와 리스트를 구성하는 예제
// (2) 서버 페이지와 서비스 페이지가 같은 도메인에 있는 경우 - iframe

// [http://local.com/some/client.html]
<!DOCTYPE html>
<html>
	<head>
		<title>Ajax Sample</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
		<script type="text/javascript" language="javascript" src="lib/jindo.all.js"></script>
		<script type="text/javascript" language="javascript">
			function getList() {
				var oAjax = new $Ajax('http://server.com/some/some.php', {
					type : 'iframe',
					method : 'get',			// GET 방식으로 통신
											// POST로 지정하면 원격 프록시 파일에서 some.php 로 요청 시에 POST 방식으로 처리
					onload : function(res){	// 요청이 완료되면 실행될 콜백 함수
						$('list').innerHTML = res.text();
					},
					// 로컬 프록시 파일의 경로.
					// 반드시 정확한 경로를 지정해야 하며, 로컬 도메인의 경로라면 어디에 두어도 상관 없음
					// (※ 원격 프록시 파일은 반드시  원격 도메인 서버의 도메인 루트 상에 두어야 함)
					proxy : 'http://local.naver.com/some/ajax_local_callback.html'
				});
				oAjax.request();
			}

		</script>
	</head>
	<body>
		<button onclick="getList(); return false;">Get List</button>

		<ul id="list">

		</ul>
	</body>
</html>

// [http://server.com/some/some.php]
<?php
	echo "<li>첫번째</li><li>두번째</li><li>세번째</li>";
?>

 * @example
// 'Get List' 버튼 클릭 시, 서버에서 데이터를 받아와 리스트를 구성하는 예제
// (3) 서버 페이지와 서비스 페이지가 같은 도메인에 있는 경우 - jsonp

// [http://local.com/some/client.html]
<!DOCTYPE html>
<html>
	<head>
		<title>Ajax Sample</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
		<script type="text/javascript" language="javascript" src="lib/jindo.all.js"></script>
		<script type="text/javascript" language="javascript">
			function getList(){
				var oAjax = new $Ajax('http://server.com/some/some.php', {
					type: 'jsonp',
					method: 'get',			// type 이 jsonp 이면 get 으로 지정하지 않아도 자동으로 get 으로 처리함 (생략가능)
					jsonp_charset: 'utf-8',	// 요청 시 사용할 <script> 인코딩 방식 (생략 시 utf-8)
					onload: function(res){	// 요청이 완료되면 실행될 콜백 함수
						var response = res.json();
						var welList = $Element('list').empty();

						for (var i = 0, nLen = response.length; i < nLen; i++) {
							welList.append($("<li>" + response[i] + "</li>"));
						}
					},
					callbackid: '12345',				// 콜백 함수 이름에 사용할 아이디 값 (생략가능)
					callbackname: 'ajax_callback_fn'	// 서버에서 사용할 콜백 함수이름을 가지는 매개 변수 이름 (생략 시 '_callback')
				});
				oAjax.request();
			}
		</script>
	</head>
	<body>
		<button onclick="getList(); return false;">Get List</button>

		<ul id="list">

		</ul>
	</body>
</html>

// [http://server.com/some/some.php]
<?php
	$callbackName = $_GET['ajax_callback_fn'];
	echo $callbackName."(['첫번째','두번째','세번째'])";
?>

 * @example
// 'Get List' 버튼 클릭 시, 서버에서 데이터를 받아와 리스트를 구성하는 예제
// (4) 서버 페이지와 서비스 페이지가 같은 도메인에 있는 경우 - flash

// [http://local.com/some/client.html]
<!DOCTYPE html>
<html>
	<head>
		<title>Ajax Sample</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
		<script type="text/javascript" language="javascript" src="lib/jindo.all.js"></script>
		<script type="text/javascript" language="javascript">
			function getList(){
				var oAjax = new $Ajax('http://server.com/some/some.php', {
					type : 'flash',
					method : 'get',			// GET 방식으로 통신
					sendheader : false,		// 요청 헤더를 전송할지 여부. (생략 시 true)
					decode : true,			// 요청한 데이터 안에 utf-8 이 아닌 다른 인코딩이 되어 있을때 false. (생략 시 true)
					onload : function(res){	// 요청이 완료되면 실행될 콜백 함수
						$('list').innerHTML = res.text();
					},
				});
				oAjax.request();
			}
		</script>
	</head>
	<body>
		<script type="text/javascript">
			$Ajax.SWFRequest.write("swf/ajax.swf");	// Ajax 호출을 하기 전에 반드시 플래시 객체를 초기화
		</script>
		<button onclick="getList(); return false;">Get List</button>

		<ul id="list">

		</ul>
	</body>
</html>

// [http://server.com/some/some.php]
<?php
	echo "<li>첫번째</li><li>두번째</li><li>세번째</li>";
?>

<table>
	<caption>타입에 따른 옵션의 사용 가능 여부</caption>
	<thead>
		<th>옵션</th>
		<th>xhr</th>
		<th>jsonp</th>
		<th>flash</th>
		<th>iframe</th>
	</thead>
	<tbody>
		<tr>
			<td style="font-weight:bold;">method(get, post, put, delete)</td>
			<td>O</td>
			<td>get</td>
			<td>get, post</td>
			<td>iframe</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">onload</td>
			<td>O</td>
			<td>O</td>
			<td>O</td>
			<td>O</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">timeout</td>
			<td>O</td>
			<td>O</td>
			<td>O</td>
			<td>X</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">ontimeout</td>
			<td>O</td>
			<td>O</td>
			<td>O</td>
			<td>X</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">onerror</td>
			<td>O</td>
			<td>O</td>
			<td>O</td>
			<td>X</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">async</td>
			<td>O</td>
			<td>X</td>
			<td>X</td>
			<td>X</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">postBody</td>
			<td>method가 post, put, delete만 가능</td>
			<td>X</td>
			<td>X</td>
			<td>X</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">jsonp_charset</td>
			<td>X</td>
			<td>O</td>
			<td>X</td>
			<td>X</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">callbackid</td>
			<td>X</td>
			<td>O</td>
			<td>X</td>
			<td>X</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">callbackname</td>
			<td>X</td>
			<td>O</td>
			<td>X</td>
			<td>X</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">setheader</td>
			<td>O</td>
			<td>X</td>
			<td>O</td>
			<td>X</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">decode</td>
			<td>X</td>
			<td>X</td>
			<td>O</td>
			<td>X</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">proxy</td>
			<td>X</td>
			<td>X</td>
			<td>X</td>
			<td>O</td>
		</tr>
	</tbody>
</table>


<table>
	<caption>타입에 따른 메서드의 사용 가능 여부</caption>
	<thead>
		<th>메서드</th>
		<th>xhr</th>
		<th>jsonp</th>
		<th>flash</th>
		<th>iframe</th>
	</thead>
	<tbody>
		<tr>
			<td style="font-weight:bold;">abort</td>
			<td>O</td>
			<td>O</td>
			<td>O</td>
			<td>O</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">isIdle</td>
			<td>O</td>
			<td>O</td>
			<td>O</td>
			<td>O</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">option</td>
			<td>O</td>
			<td>O</td>
			<td>O</td>
			<td>O</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">request</td>
			<td>O</td>
			<td>O</td>
			<td>O</td>
			<td>O</td>
		</tr>
		<tr>
			<td style="font-weight:bold;">header</td>
			<td>O</td>
			<td>X</td>
			<td>O</td>
			<td>O</td>
		</tr>
	</tbody>
</table>
	
 */
jindo.$Ajax = function (url, option) {
	var cl = arguments.callee;

	if (!(this instanceof cl)){
		try {
			jindo.$Jindo._warn(arguments.length, 2,"$Ajax");
			return new cl(url, option||{});
		} catch(e) {
			if (e instanceof TypeError) { return null; }
			throw e;
		}
	}	
	var ___ajax = jindo.$Ajax;
	var ___error = jindo.$Error;
	var ___except = jindo.$Except;
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str' : [ 'sURL:String+' ],
		'4obj' : [ 'sURL:String+', 'oOption:Hash+' ]
	},"$Ajax");
		
	if(oArgs+"" == "for_string"){
		oArgs.oOption = {};
	}
	
	function _getXHR() {
		if (window.XMLHttpRequest) {
			return new XMLHttpRequest();
		} else if (ActiveXObject) {
			try { 
				return new ActiveXObject('MSXML2.XMLHTTP'); 
			}catch(e) { 
				return new ActiveXObject('Microsoft.XMLHTTP'); 
			}
			return null;
		}
	}

	var loc    = location.toString();
	var domain = '';
	try { domain = loc.match(/^https?:\/\/([a-z0-9_\-\.]+)/i)[1]; } catch(e) {}
	
	this._status = 0;
	this._url = oArgs.sURL;
	this._headers  = {};
	this._options = {
		type   :"xhr",
		method :"post",
		proxy  :"",
		timeout:0,
		onload :function(req){},
		onerror :null,
		ontimeout:function(req){},
		jsonp_charset : "utf-8",
		callbackid : "",
		callbackname : "",
		sendheader : true,
		async : true,
		decode :true,
		postBody :false
	};

	this._options = ___ajax._setProperties(oArgs.oOption,this);
	___ajax._validationOption(this._options,"$Ajax");
	
	/*
	 
테스트를 위해 우선 적용가능한 설정 객체가 존재하면 적용
	
	 */
	if(___ajax.CONFIG){
		this.option(___ajax.CONFIG);
	}	

	var _opt = this._options;

	_opt.type   = _opt.type.toLowerCase();
	_opt.method = _opt.method.toLowerCase();

	if (window.__jindo2_callback === undefined) {
		window.__jindo2_callback = [];
	}

	var t = this;
	switch (_opt.type) {
		case "put":
		case "delete":
		case "get":
		case "post":
			_opt.method = _opt.type;
		case "xhr":
			//-@@$Ajax.xhr-@@//
			this._request = _getXHR();
			break;
		case "flash":
			//-@@$Ajax.flash-@@//
			if(!___ajax.SWFRequest) throw new ___error('jindo.$Ajax.SWFRequest'+___except.REQUIRE_AJAX, "$Ajax");
			
			this._request = new ___ajax.SWFRequest( function(name,value){return t.option.apply(t, arguments);} );
			break;
		case "jsonp":
			//-@@$Ajax.jsonp-@@//
			if(!___ajax.JSONPRequest) throw new ___error('jindo.$Ajax.JSONPRequest'+___except.REQUIRE_AJAX, "$Ajax");
			this._request = new ___ajax.JSONPRequest( function(name,value){return t.option.apply(t, arguments);} );
			break;
		case "iframe":
			//-@@$Ajax.iframe-@@//
			if(!___ajax.FrameRequest) throw new ___error('jindo.$Ajax.FrameRequest'+___except.REQUIRE_AJAX, "$Ajax");
			this._request = new ___ajax.FrameRequest( function(name,value){return t.option.apply(t, arguments);} );
			
	}
};
jindo.$Ajax._setProperties = function(option){
	option = option||{};
	var type;
	type = option.type = option.type||"xhr";
	option.onload = option.onload||function(){};
	option.method = option.method ||"post";
	if(type != "iframe"){
		option.timeout = option.timeout||0;
		option.ontimeout = option.ontimeout||function(){};
		option.onerror = option.onerror||function(){};
	}
	if(type == "xhr"){
		option.async = option.async === undefined?true:option.async;
		option.postBody = option.postBody === undefined?false:option.postBody;
		option.sendheader = option.sendheader === undefined ? true : option.sendheader;
	}else if(type == "jsonp"){
		option.method = "get";
		option.jsonp_charset = option.jsonp_charset ||"utf-8";
		option.callbackid = option.callbackid ||"";
		option.callbackname = option.callbackname ||"";
	}else if(type == "flash"){
		option.sendheader =  option.sendheader === undefined ? true : option.sendheader;
		option.decode =  option.decode === undefined ? true : option.decode;
	}else if(type == "iframe"){
		option.proxy = option.proxy||"";
	}
	return option;
};
jindo.$Ajax._validationOption = function(oOption,sMethod){
	var ___error = jindo.$Error;
	var ___except = jindo.$Except;
	var sType = oOption.type;
	if(sType === "jsonp"){
		if(oOption["method"] !== "get") throw new ___error(___except.CANNOT_USE_OPTION,sMethod);
	}else if(sType === "flash"){
		if(!(oOption["method"] === "get" || oOption["method"] === "post")) throw new ___error(___except.CANNOT_USE_OPTION,sMethod,sMethod);
	}
	
	if(oOption["postBody"]){
		if(!(sType === "xhr" && (oOption["method"]!=="get"))){
			throw new ___error(___except.CANNOT_USE_OPTION,sMethod);
		}
	}
	
	var oTypeProperty = {
			"xhr": "onload|timeout|ontimeout|onerror|async|method|postBody|sendheader|type" , 
			"jsonp": "onload|timeout|ontimeout|onerror|jsonp_charset|callbackid|callbackname|method|type",
			"flash": "onload|timeout|ontimeout|onerror|sendheader|decode|method|type",
			"iframe": "onload|proxy|method|type"
	}
	var aName = [];
	var i = 0;
	for(aName[i++] in oOption){}
	var sProperty = oTypeProperty[sType];
	
	for(var i = 0 ,l = aName.length; i < l ; i++){
		if(sProperty.indexOf(aName[i]) == -1) throw new ___error(___except.CANNOT_USE_OPTION,sMethod);
	}
};
/**
 * @ignore
 */
jindo.$Ajax.prototype._onload = (function(isIE) {
	var ___ajax = jindo.$Ajax;
	var ___jindo = jindo.$Jindo;
	if(isIE){
		return function(){
			var bSuccess = this._request.readyState == 4 && this._request.status == 200;
			var oResult;
			if (this._request.readyState == 4) {
				  try {
						if (this._request.status != 200 && ___jindo.isFunction(this._options.onerror)){
							if(!this._request.status == 0){
								this._options.onerror(new ___ajax.Response(this._request));
							}
						}else{
							if(!this._is_abort){
								oResult = this._options.onload(new ___ajax.Response(this._request));	
							}
						} 
				}finally{
					if(___jindo.isFunction(this._oncompleted)){
						this._oncompleted(bSuccess, oResult);
					}
					if (this._options.type == "xhr" ){
						this.abort();
						try { delete this._request.onload; } catch(e) { this._request.onload =undefined;} 
					}
					delete this._request.onreadystatechange;
					
				}
			}
		}
	}else{
		return function(){
			var bSuccess = this._request.readyState == 4 && this._request.status == 200;
			var oResult;
			if (this._request.readyState == 4) {
				  try {
				  		
						if (this._request.status != 200 && ___jindo.isFunction(this._options.onerror)){
							this._options.onerror(new ___ajax.Response(this._request));
						}else{
							oResult = this._options.onload(new ___ajax.Response(this._request));
						} 
				}finally{
					this._status--;
					if(___jindo.isFunction(this._oncompleted)){
						this._oncompleted(bSuccess, oResult);
					} 
				}
			}
		}
	}
})(_JINDO_IS_IE);


/**

 * @description request() 메서드는 Ajax 요청을 서버에 전송한다. 요청에 사용할 파라미터는 $Ajax() 객체 생성자에서 설정하거나 option() 메서드를 사용하여 변경할 수 있다. 요청 타입(type)이 "flash"면 이 메소드를 실행하기 전에 body 요소에서 {@link $Ajax.SWFRequest.write}() 메서드를 반드시 실행해야 한다.
 *
 * @param1 {Void}
 * @return1 {$Ajax} $Ajax() 객체.
 *
 * @param2 {String+} oData 서버로 전송할 데이터. (postbody가 true, type이 xhr, method가 get이 아닌 경우만 사용가능)
 * @return2 {$Ajax} $Ajax() 객체.
 *
 * @param3 {Hash+} oData 서버로 전송할 데이터.
 * @return3 {$Ajax} $Ajax() 객체.
 *
 * @see $Ajax#option
 * @see $Ajax.SWFRequest.write
 * @example
var ajax = $Ajax("http://www.remote.com", {
   onload : function(res) {
      // onload 핸들러
   }
});

ajax.request( {key1:"value1", key2:"value2"} );	// 서버에 전송할 데이터를 매개변수로 넘긴다.
ajax.request( );

 * @example
var ajax2 = $Ajax("http://www.remote.com", {
   type : "xhr",
   method : "post",
   postBody : true
 
});

ajax2.request({key1:"value1", key2:"value2"});
ajax2.request("{key1:\"value1\", key2:\"value2\"}");

	
 */
jindo.$Ajax.prototype.request = function(oData) {
	var ___jindo = jindo.$Jindo;
	var oArgs = ___jindo.checkVarType(arguments, {
		'4voi' : [ ],
		'4obj' : [ ___jindo._F('oData:Hash+') ],
		'4str' : [ 'sData:String+' ]
	},"$Ajax#request");
	
	this._status++;
	var t   = this;
	var req = this._request;
	var opt = this._options;
	var data, v,a = [], data = "";
	var _timer = null;
	var url = this._url;
	this._is_abort = false;
	var sUpType = opt.type.toUpperCase();
	var sUpMethod = opt.method.toUpperCase();
	if (opt.postBody && sUpType == "XHR" && sUpMethod != "GET") {
		if(oArgs+"" == "4str"){
			data = oArgs.sData;
		}else if(oArgs+"" == "4obj"){
			data = jindo.$Json(oArgs.sData).toString();	
		}else{
			data = null;
		}
	}else{
		switch(oArgs+""){
			case "4voi" : 
				data = null;
				break;
			case "4obj":
				var oData = oArgs.oData;
				for(var k in oData) {
					if(oData.hasOwnProperty(k)){
						v = oData[k];
						if (___jindo.isFunction(v)) v = v();
						
						if (___jindo.isArray(v) || (jindo.$A && v instanceof jindo.$A)) {
							if(v instanceof jindo.$A) v = v._array;
							
							for(var i=0; i < v.length; i++) {
								a[a.length] = k+"="+encodeURIComponent(v[i]);
							}
						} else {
							a[a.length] = k+"="+encodeURIComponent(v);
						}
					}
				}
				data = a.join("&");
		}
	}
	
	/*
	 
XHR GET 방식 요청인 경우 URL에 파라미터 추가
	
	 */
	if(data && sUpType=="XHR" && sUpMethod=="GET"){
		if(url.indexOf('?')==-1){
			url += "?";
		} else {
			url += "&";			
		}
		url += data;
		data = null;
	}

	if(sUpType=="XHR"&&opt.async){
		req.open(sUpMethod, url, opt.async);
	}else if(sUpType=="XHR"){
		req.open(sUpMethod, url, false);
	}else{
		req.open(sUpMethod, url);
	}
	if(sUpType=="XHR"&&sUpMethod=="GET"&&_JINDO_IS_IE){
		/*
		 
xhr인 경우 IE에서는 GET으로 보낼 때 브라우져에서 자체 cache하여 cache을 안되게 수정.
	
		 */
		req.setRequestHeader("If-Modified-Since", "Thu, 1 Jan 1970 00:00:00 GMT");
	} 
	if (opt.sendheader) {
		if(!this._headers["Content-Type"]){
			req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
		}
		req.setRequestHeader("charset", "utf-8");
		for (var x in this._headers) {
			if(this._headers.hasOwnProperty(x)){
				if (typeof this._headers[x] == "function") 
					continue;
				req.setRequestHeader(x, String(this._headers[x]));
			}
		}
	}
	if(req.addEventListener&&!_JINDO_IS_OP&&!_JINDO_IS_IE){
		/*
		 
 * opera 10.60에서 XMLHttpRequest에 addEventListener기 추가되었지만 정상적으로 동작하지 않아 opera는 무조건 dom1방식으로 지원함.
 * IE9에서도 opera와 같은 문제가 있음.
	
		 */
		if(this._loadFunc){ req.removeEventListener("load", this._loadFunc, false); }
		this._loadFunc = function(rq){ 
			clearTimeout(_timer);
			_timer = undefined; 
			t._onload(rq); 
		}
		req.addEventListener("load", this._loadFunc, false);
	}else{
		if (req.onload !== undefined) {
			req.onload = function(rq){
				if(req.readyState == 4 && !t._is_abort){
					clearTimeout(_timer); 
					_timer = undefined;
					t._onload(rq);
				}
			};
		} else {
            /*
            
 * IE6에서는 onreadystatechange가 동기적으로 실행되어 timeout이벤트가 발생안됨.
 * 그래서 interval로 체크하여 timeout이벤트가 정상적으로 발생되도록 수정. 비동기 방식일때만
	
             */
			if(_j_ag.match(/(?:MSIE) ([0-9.]+)/)[1]==6&&opt.async){
				var onreadystatechange = function(rq){
					if(req.readyState == 4 && !t._is_abort){
						if(_timer){
							clearTimeout(_timer);
							_timer = undefined;
						}
						t._onload(rq);
						clearInterval(t._interval);
						t._interval = undefined;
					}
				};
				this._interval = setInterval(onreadystatechange,300);

			}else{
				req.onreadystatechange = function(rq){
					if(req.readyState == 4){
						clearTimeout(_timer); 
						_timer = undefined;
						t._onload(rq);
					}
				};
			}
		}
	}
	if (opt.timeout > 0) {
		
//		if(this._interval)clearInterval(this._interval);
		if(this._timer) clearTimeout(this._timer);
		
		_timer = setTimeout(function(){
			t._is_abort = true;
			if(t._interval){
				clearInterval(t._interval);
				t._interval = undefined;
			}
			try{ req.abort(); }catch(e){};

			opt.ontimeout(req);	
			if(___jindo.isFunction(t._oncompleted)) t._oncompleted(false);
		}, opt.timeout * 1000 );
		this._timer = _timer;
	}
	/*
	
 * test을 하기 위한 url
	
	 */
	this._test_url = url;
	req.send(data);

	return this;
};

/**

 * @description isIdle() 메서드는 $Ajax() 객체가 현재 요청 대기 상태인지 확인한다.
 * @since 1.3.5 부터 사용 가능
 * @return {Boolean} 현재 대기 중이면 true 를, 그렇지 않으면 false를 리턴한다.
 * @example
 var ajax = $Ajax("http://www.remote.com",{
     onload : function(res){
         // onload 핸들러
     }
});

if(ajax.isIdle()) ajax.request();
    
 */
jindo.$Ajax.prototype.isIdle = function(){
	return this._status==0;
};

/**

 * @description abort() 메서드는 서버로 전송한 Ajax 요청을 취소한다. Ajax 요청의 응답 시간이 길거나 강제로 Ajax 요청을 취소할 경우 사용한다.
 * @caution type이 jsonp일 경우 abort를 해도 요청을 멈추진 않는다.
 * @return {$Ajax} 전송을 취소한 $Ajax() 객체
 * @example
var ajax = $Ajax("http://www.remote.com", {
	timeout : 3,
	ontimeout : function() {
		stopRequest();
	}
	onload : function(res) {
		// onload 핸들러
	}
}).request( {key1:"value1", key2:"value2"} );

function stopRequest() {
    ajax.abort();
}
    
 */
jindo.$Ajax.prototype.abort = function() {
	try {
		if(this._interval) clearInterval(this._interval);
		if(this._timer) clearTimeout(this._timer);
		this._interval = undefined;
		this._timer = undefined;
		this._is_abort = true;
		this._request.abort();
	}finally{
		this._status--;
	}

	return this;
};

/**

 * @description url()메서드는 url을 변경하거나 반환한다.
 *
 * @param1 {Void}
 * @return1 {String} URL의 값.
 *
 * @param2 {String+} url
 * @return2 {$Ajax} $Ajax() 객체 자신.
 *
 * @since 2.0.0 부터 지원
	
 */
jindo.$Ajax.prototype.url = function(sURL){
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'g' : [ ],
		's' : [ 'sURL:String+' ]
	},"$Ajax#url");
	
	switch(oArgs+"") {
		case 'g':
	    	return this._url;
		case 's':
	    	this._url = oArgs.sURL;
			return this;
			
	}
};
/**

 * @description option() 메서드는 $Ajax() 객체의 옵션 객체(oOption) 속성에 정의된 Ajax 요청 옵션에 대한 정보를 가져오거나 혹은 설정한다. Ajax 요청 옵션을 설정하려면 이름과 값을, 혹은 이름과 값을 원소로 가지는 하나의 객체를 파라미터로 입력한다. 이름과 값을 원소로 가지는 객체를 입력하면 하나 이상의 정보를 한 번에 설정할 수 있다.
 * @memberOf $Ajax#
 *
 * @param1 {String+} sName 옵션 객체의 속성 이름
 * @param1 {Variant} vValue 새로 설정할 옵션 속성의 값.
 * @return1 {$Ajax} $Ajax() 객체를 반환한다.
 *
 * @param2 {Hash+} oOption 속성 값이 정의된 객체.
 * @return2 {$Ajax} $Ajax() 객체를 반환한다.
 *
 * @param3 {String+} sName 옵션 객체의 속성 이름
 * @return3 {Variant} 해당 옵션에 해당하는 값.
 * 
 * @throws {jindo.$Except.CANNOT_USE_OPTION} 해당 타입에 적절한 옵션이 아닌 경우.
 * @example
var ajax = $Ajax("http://www.remote.com", {
	type : "xhr",
	method : "get",
	onload : function(res) {
		// onload 핸들러
	}
});

var request_type = ajax.option("type");					// type 인 xhr 을 리턴한다.
ajax.option("method", "post");							// method 를 post 로 설정한다.
ajax.option( { timeout : 0, onload : handler_func } );	// timeout 을 으로, onload 를 handler_func 로 설정한다.
    
 */

jindo.$Ajax.prototype.option = function(name, value) {
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		's4var' : [ 'sKey:String+', 'vValue:Variant' ],
		's4obj' : [ 'oOption:Hash+'],
		'g' : [ 'sKey:String+']
	},"$Ajax#option");
	
	switch(oArgs+"") {
		case "s4var":
			this._options[oArgs.sKey] = oArgs.vValue;
			break;
		case "s4obj":
			var oOption = oArgs.oOption;
			try {
				for (var x in oOption) {
					if (oOption.hasOwnProperty(x)) 
						this._options[x] = oOption[x];
				}
			}catch (e) {};
			break;
		case 'g':
			return this._options[oArgs.sKey];
			
	}
	
	jindo.$Ajax._validationOption(this._options,"$Ajax#option");
	return this;
};

/**

 * @description header() 메서드는 Ajax 요청에서 사용할 HTTP 요청 헤더를 가져오거나 설정한다. 헤더를 설정하려면 헤더의 이름과 값을 각각 파라미터로 입력하거나 헤더의 이름과 값을 원소로 가지는 객체를 파라미터로 입력한다. 객체를 파라미터로 입력하면 하나 이상의 헤더를 한 번에 설정할 수 있다. 헤더에서 특정 속성 값을 가져오려면 속성의 이름을 파라미터로 입력한다.
 * @memberOf $Ajax#
 *
 * @param1 {String+} sName 헤더 이름
 * @param1 {String+} sValue 설정할 헤더 값.
 * @return1 {$Ajax} $Ajax() 객체를 반환한다.
 *
 * @param2 {Hash+} oHeader 하나 이상의 헤더 값이 정의된 객체
 * @return2 {$Ajax}$Ajax() 객체를 반환한다.
 *
 * @param3 {String+} vName 헤더 이름
 * @return3 {String} 문자열을 반환한다.
 *
 * @throws {jindo.$Except.CANNOT_USE_OPTION} jsonp 타입일 경우 header메서드를 사용시 할 때.
 * @example
var customheader = ajax.header("myHeader"); 		// HTTP 요청 헤더에서 myHeader 의 값
ajax.header( "myHeader", "someValue" );				// HTTP 요청 헤더의 myHeader 를 someValue 로 설정한다.
ajax.header( { anotherHeader : "someValue2" } );	// HTTP 요청 헤더의 anotherHeader 를 someValue2 로 설정한다.
    
 */
jindo.$Ajax.prototype.header = function(name, value) {
	if(this._options["type"]==="jsonp"){throw new jindo.$Error(jindo.$Except.CANNOT_USE_OPTION,"$Ajax#header");} 
	
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		's4str' : [ 'sKey:String+', 'sValue:String+' ],
		's4obj' : [ 'oOption:Hash+' ],
		'g' : [ 'sKey:String+' ]
	},"$Ajax#option");
	
	switch(oArgs+"") {
		case 's4str':
			this._headers[oArgs.sKey] = oArgs.sValue;
			break;
		case 's4obj':
			var oOption = oArgs.oOption;
			try {
				for (var x in oOption) {
					if (oOption.hasOwnProperty(x)) 
						this._headers[x] = oOption[x];
				}
			}catch (e) {};
			break;
		case 'g':
			return this._headers[oArgs.sKey];
			
	}

	return this;
};

/**

 * @class $Ajax.Response 객체를 생성한다. $Ajax.Response 객체는 $Ajax() 객체에서 request() 메서드의 요청 처리 완료한 후 생성된다. $Ajax() 객체를 생성할 때 onload 속성에 설정한 콜백 함수의 파라미터로 $Ajax.Response 객체가 전달된다.
 * @constructor
 * @description Ajax 응답 객체를 래핑하여 응답 데이터를 가져오거나 활용하는데 유용한 기능을 제공한다.
 * @param {Hash+} oReq 요청 객체
 * @see $Ajax
    
 */
jindo.$Ajax.Response  = function(req) {
	this._response = req;
	this._regSheild = /^for\(;;\);/;
};

/**

 * @description xml() 메서드는 응답을 XML 객체로 반환한다. XHR의 responseXML 속성과 유사하다.
 * @return {Object} 응답 XML 객체. 
 * @see <a href="https://developer.mozilla.org/en/XMLHttpRequest">XMLHttpRequest</a> - MDN Docs
 * @example
// some.xml
<?xml version="1.0" encoding="utf-8"?>
<data>
	<li>첫번째</li>
	<li>두번째</li>
	<li>세번째</li>
</data>

// client.html
var oAjax = new $Ajax('some.xml', {
	type : 'xhr',
	method : 'get',
	onload : function(res){
		var elData = cssquery.getSingle('data', res.xml());	// 응답을 XML 객체로 리턴한다
		$('list').innerHTML = elData.firstChild.nodeValue;
	},
}).request();
    
 */
jindo.$Ajax.Response.prototype.xml = function() {
	return this._response.responseXML;
};

/**

 * @description text() 메서드는 응답을 문자열(String)로 반환한다. XHR의 responseText 와 유사하다.
 * @return {String} 응답 문자열. 
 * @see <a href="https://developer.mozilla.org/en/XMLHttpRequest">XMLHttpRequest</a> - MDN Docs
 * @example
// some.php
<?php
	echo "<li>첫번째</li><li>두번째</li><li>세번째</li>";
?>

// client.html
var oAjax = new $Ajax('some.xml', {
	type : 'xhr',
	method : 'get',
	onload : function(res){
		$('list').innerHTML = res.text();	// 응답을 문자열로 리턴한다
	},
}).request();
    
 */
jindo.$Ajax.Response.prototype.text = function() {
	return this._response.responseText.replace(this._regSheild, '');
};

/**

 * @description status() 메서드는 HTTP 응답 코드를 반환한다. HTTP 응답 코드표를 참고한다.
 * @return {Numeric} 응답 코드. 
 * @see <a href="http://www.w3.org/Protocols/HTTP/HTRESP.html">HTTP Status codes</a> - W3C
 * @example
var oAjax = new $Ajax('some.php', {
	type : 'xhr',
	method : 'get',
	onload : function(res){
		if(res.status() == 200){	// HTTP 응답 코드를 확인한다.
			$('list').innerHTML = res.text();
		}
	},
}).request();
    
 */
jindo.$Ajax.Response.prototype.status = function() {
	return this._response.status;
};

/**

 * @description readyState() 메서드는 응답 상태(readyState)를 반환한다. readyState 속성 값에 대한 설명은 다음 표와 같다.<br>
 <tabel>
	<caption>readyState 속성 설명</caption>
	<thead>
		<tr>
			<th>값</th>
			<th>설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>0(UNINITIALIZED)</td>
			<td>요청이 초기화되지 않은 상태.</td>
		</tr>
		<tr>
			<td>1(LOADING)</td>
			<td>요청 옵션을 설정했으나, 요청하지 않은 상태</td>
		</tr>
		<tr>
			<td>2(LOADED)</td>
			<td>요청을 보내고 처리 중인 상태. 이 상태에서 응답 헤더를 얻을 수 있다.</td>
		</tr>
		<tr>
			<td>3(INTERACTIVE)</td>
			<td>요청이 처리 중이며, 부분적인 응답 데이터를 받은 상태.</td>
		</tr>
		<tr>
			<td>4(COMPLETED)</td>
			<td>응답 데이터를 모두 받아 통신을 완료한 상태.</td>
		</tr>
	</tbody>
</table>
 * @return {Numeric}  readyState 값.
 * @see open
 * @see send
 * @example
var oAjax = new $Ajax('some.php', {
	type : 'xhr',
	method : 'get',
	onload : function(res){
		if(res.readyState() == 4){	// 응답의 readyState 를 확인한다.
			$('list').innerHTML = res.text();
		}
	},
}).request();
    
 */
jindo.$Ajax.Response.prototype.readyState = function() {
	return this._response.readyState;
};

/**

 * @description json() 메서드는 응답을 JSON 객체로 반환한다. 응답 문자열을 자동으로 JSON 객체로 변환하여 반환한다. 변환 과정에서 오류가 발생하면 빈 객체를 반환한다.
 * @return {Object} JSON 객체.
 * @example
// some.php
<?php
	echo "['첫번째', '두번째', '세번째']";
?>

// client.html
var oAjax = new $Ajax('some.php', {
	type : 'xhr',
	method : 'get',
	onload : function(res){
		var welList = $Element('list').empty();
		var jsonData = res.json();	// 응답을 JSON 객체로 리턴한다

		for(var i = 0, nLen = jsonData.length; i < nLen; i++){
			welList.append($("<li>" + jsonData[i] + "</li>"));
		}
	},
}).request();
    
 */
jindo.$Ajax.Response.prototype.json = function() {
	if (this._response.responseJSON) {
		return this._response.responseJSON;
	} else if (this._response.responseText) {
		try {
			return eval("("+this.text()+")");
		} catch(e) {
			throw new jindo.$Error(jindo.$Except.PARSE_ERROR,"$Ajax#json");
		}
	}

	return {};
};

/**

 * @description header() 메서드는 응답 헤더를 가져온다. 파라미터를 입력하지 않으면 헤더 전체를 반환한다.
 * @memberOf $Ajax.Response#
 *
 * @param1 {Void}
 * @return1 {Object} 헤더 전체(Object)를 반환한다.
 *
 * @param2 {String+} sName 가져올 응답 헤더의 이름.
 * @return2 {String} 해당하는 헤더 값(String)
 *
 * @example
var oAjax = new $Ajax('some.php', {
	type : 'xhr',
	method : 'get',
	onload : function(res){
		res.header("Content-Length")	// 응답 헤더에서 "Content-Length" 의 값을 리턴한다.
	},
}).request();
    
 */
jindo.$Ajax.Response.prototype.header = function(name) {
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str' : [ 'name:String+' ],
		'4voi' : [ ]
	},"$Ajax.Response#header");
	
	switch (oArgs+"") {
	case '4str':
		return this._response.getResponseHeader(name);
	case '4voi':
		return this._response.getAllResponseHeaders();
	}
};

//-!jindo.$Ajax.RequestBase start(jindo.$Class,jindo.$Ajax)!-//
/**

 * @class Ajax 요청 객체의 기본 객체이다.
 * @description Ajax 요청 타입 별로 Ajax 요청 객체를 생성할 때 Ajax 요청 객체를 생성하기 위한 상위 객체로 사용한다.
 * @ignore
 * @see $Ajax
    
 */
jindo.$Ajax.RequestBase = jindo.$Class({
	_respHeaderString : "",
	callbackid:"",
	callbackname:"",
	responseXML  : null,
	responseJSON : null,
	responseText : "",
	status : 404,
	readyState : 0,
	$init  : function(fpOption){},
	onload : function(){},
	abort  : function(){},
	open   : function(){},
	send   : function(){},
	setRequestHeader  : function(sName, sValue) {
		jindo.$Jindo.checkVarType(arguments, {
			'4str' : [ 'sName:String+', 'sValue:String+' ]
		},"$Ajax.RequestBase#setRequestHeader");
		this._headers[sName] = sValue;
	},
	getResponseHeader : function(sName) {
		jindo.$Jindo.checkVarType(arguments, {
			'4str' : [ 'sName:String+']
		},"$Ajax.RequestBase#getResponseHeader");
		return this._respHeaders[sName] || "";
	},
	getAllResponseHeaders : function() {
		return this._respHeaderString;
	},
	_getCallbackInfo : function() {
		var id = "";
		if(this.option("callbackid")!="") {
			var idx = 0;
			do {
				id = "_" + this.option("callbackid") + "_"+idx;
				idx++;
			} while (window.__jindo2_callback[id]);	
		}else{
			do {
				id = "_" + Math.floor(Math.random() * 10000);
			} while (window.__jindo2_callback[id]);
		}
		
		if(this.option("callbackname") == ""){
			this.option("callbackname","_callback");
		}
		return {callbackname:this.option("callbackname"),id:id,name:"window.__jindo2_callback."+id};
	}
});

//-!jindo.$Ajax.JSONPRequest start(jindo.$Class,jindo.$Ajax,jindo.$Agent.prototype.navigator,jindo.$Ajax.RequestBase)!-//
/**

 * @class Ajax 요청 타입이 jsonp인 요청 객체를 생성하며, $Ajax() 객체에서 Ajax 요청 객체를 생성할 때 사용한다.
 * @extends $Ajax.RequestBase
 * @description $Ajax.JSONPRequest 객체를 생성한다. 이때, $Ajax.JSONPRequest 객체는 $Ajax.RequestBase 객체를 상속한다.
 * @ignore
 * @see $Ajax
 * @see $Ajax.RequestBase
    
 */
jindo.$Ajax.JSONPRequest = jindo.$Class({
	_headers : {},
	_respHeaders : {},
	_script : null,
	_onerror : null,
	$init  : function(fpOption){
		this.option = fpOption;
	},
	/**
	 * @ignore 
	 */
	_callback : function(data) {
		
		if (this._onerror) {
			clearTimeout(this._onerror);
			this._onerror = null;
		}
			
		var self = this;

		this.responseJSON = data;
		this.onload(this);
		setTimeout(function(){ self.abort() }, 10);
	},
	abort : function() {
		if (this._script) {
			try { 
				this._script.parentNode.removeChild(this._script); 
			}catch(e){
			};
		}
	},
	open  : function(method, url) {
		jindo.$Jindo.checkVarType(arguments, {
			'4str' : [ 'method:String+','url:String+']
		},"$Ajax.JSONPRequest#open");
		this.responseJSON = null;
		this._url = url;
	},
	send  : function(data) {
		var oArgs = jindo.$Jindo.checkVarType(arguments, {
			'4voi' : [],
			'4nul' : ["data:Null"],
			'4str' : ["data:String+"]
		},"$Ajax.JSONPRequest#send");
		var t    = this;
		var info = this._getCallbackInfo();
		var head = document.getElementsByTagName("head")[0];
		this._script = document.createElement("script");
		this._script.type    = "text/javascript";
		this._script.charset = this.option("jsonp_charset");

		if (head) {
			head.appendChild(this._script);
		} else if (document.body) {
			document.body.appendChild(this._script);
		}

		window.__jindo2_callback[info.id] = function(data){
			try {
				t.readyState = 4;
				t.status = 200;
				t._callback(data);
			} finally {
				delete window.__jindo2_callback[info.id];
			}
		};
		
		var agent = jindo.$Agent(navigator); 
		var _loadCallback = function(){
			if (!t.responseJSON) {
				t.readyState = 4;
				t.status = 404;
				t._onerror = setTimeout(function(){t._callback(null);}, 200);
			}
		};
		if (agent.navigator().ie || agent.navigator().opera) {
			this._script.onreadystatechange = function(){		
				if (this.readyState == 'loaded'){
					_loadCallback();
					this.onreadystatechange = null;
				}
			};
		} else {
			this._script.onload = 
			this._script.onerror = function(){
				_loadCallback();
				this.onerror = null;
				this.onload = null;
			};
		}
		var delimiter = "&";
		if(this._url.indexOf('?')==-1){
			delimiter = "?";
		}
		switch(oArgs+""){
			case "4voi":
			case "4nul":
				data = "";
				break;
			case "4str":
				data = "&" + data;
				
			
		}
		//test url for spec.
		this._test_url = this._script.src = this._url+delimiter+info.callbackname+"="+info.name+data;
		
	}
}).extend(jindo.$Ajax.RequestBase);

//-!jindo.$Ajax.SWFRequest start(jindo.$Class,jindo.$Ajax,jindo.$Agent.prototype.navigator,jindo.$Ajax.RequestBase)!-//
/**
 
 * @class Ajax 요청 타입이 flash인 요청 객체를 생성하며, $Ajax() 객체에서 Ajax 요청 객체를 생성할 때 사용한다.
 * @extends $Ajax.RequestBase
 * @description $Ajax.SWFRequest 객체를 생성한다. 이때, $Ajax.SWFRequest 객체는 $Ajax.RequestBase 객체를 상속한다.
 * @ignore
 * @see $Ajax
 * @see $Ajax.RequestBase
    
 */
jindo.$Ajax.SWFRequest = jindo.$Class({
	$init  : function(fpOption){
		this.option = fpOption;
	},
	_headers : {},
	_respHeaders : {},
	_getFlashObj : function(){
		var _tmpId = jindo.$Ajax.SWFRequest._tmpId;
		var navi = jindo.$Agent(window.navigator).navigator();
		var obj;
		if (navi.ie&&navi.version==9) {
			obj = document.getElementById(_tmpId);
		}else{
			obj = window.document[_tmpId];
		}
		return(this._getFlashObj =  function(){
			return obj;
		})();
		
	},
	_callback : function(status, data, headers){
		this.readyState = 4;
        /*
         
 하위 호환을 위해 status가 boolean 값인 경우도 처리
    
         */

		if( jindo.$Jindo.isNumeric(status)){
			this.status = status;
		}else{
			if(status==true) this.status=200;
		}		
		if (this.status==200) {
			if (jindo.$Jindo.isString(data)) {
				try {
					this.responseText = this.option("decode")?decodeURIComponent(data):data;
					if(!this.responseText || this.responseText=="") {
						this.responseText = data;
					}	
				} catch(e) {
                    /*
                        
 데이터 안에 utf-8이 아닌 다른 인코딩일때 디코딩을 안하고 바로 text에 저장.
    
                     */

					if(e.name == "URIError"){
						this.responseText = data;
						if(!this.responseText || this.responseText=="") {
							this.responseText = data;
						}
					}
				}
			}
            /*
            
 콜백코드는 넣었지만, 아직 SWF에서 응답헤더 지원 안함
    
             */
			if(jindo.$Jindo.isHash(headers)){
				this._respHeaders = headers;				
			}
		}
		
		this.onload(this);
	},
	open : function(method, url) {
		jindo.$Jindo.checkVarType(arguments, {
			'4str' : [ 'method:String+','url:String+']
		},"$Ajax.SWFRequest#open");
		var re  = /https?:\/\/([a-z0-9_\-\.]+)/i;

		this._url    = url;
		this._method = method;
	},
	send : function(data) {
		var _jjindo = jindo.$Jindo;
		var oArgs = _jjindo.checkVarType(arguments, {
			'4voi' : [],
			'4nul' : ["data:Null"],
			'4str' : ["data:String+"]
		},"$Ajax.SWFRequest#send");
		this.responseXML  = false;
		this.responseText = "";

		var t    = this;
		var dat  = {};
		var info = this._getCallbackInfo();
		var swf  = this._getFlashObj()

		function f(arg) {
			switch(typeof arg){
				case "string":
					return '"'+arg.replace(/\"/g, '\\"')+'"';
					
				case "number":
					return arg;
					
				case "object":
					var ret = "", arr = [];
					if (_jjindo.isArray(arg)) {
						for(var i=0; i < arg.length; i++) {
							arr[i] = f(arg[i]);
						}
						ret = "["+arr.join(",")+"]";
					} else {
						for(var x in arg) {
							if(arg.hasOwnProperty(x)){
								arr[arr.length] = f(x)+":"+f(arg[x]);	
							}
						}
						ret = "{"+arr.join(",")+"}";
					}
					return ret;
				default:
					return '""';
			}
		}

		data = (data || "").split("&");
		var oEach;
		for(var i=0; i < data.length; i++) {
			oEach = data[i]; 
			pos = oEach.indexOf("=");
			key = oEach.substring(0,pos);
			val = oEach.substring(pos+1);

			dat[key] = decodeURIComponent(val);
		}
		this._current_callback_id = info.id
		window.__jindo2_callback[info.id] = function(success, data){
			try {
				t._callback(success, data);
			} finally {
				delete window.__jindo2_callback[info.id];
			}
		};
		
		var oData = {
			url  : this._url,
			type : this._method,
			data : dat,
			charset  : "UTF-8",
			callback : info.name,
			header_json : this._headers
		};
		
		swf.requestViaFlash(f(oData));
	},
	abort : function(){
		
		if(this._current_callback_id){
			window.__jindo2_callback[this._current_callback_id] = function(){
				delete window.__jindo2_callback[info.id];
			}
		}
	}
}).extend(jindo.$Ajax.RequestBase);

/**

 * @description write() 메서드는 플래시 객체를 초기화하는 메서드로서 write() 메서드를 호출하면 통신을 위한 플래시 객체를 문서 내에 추가한다. Ajax 요청 타입이 flash이면 플래시 객체를 통해 통신한다. 따라서 $Ajax() 객체의 request 메서드가 호출되기 전에 write() 메서드를 반드시 한 번 실행해야 하며, <body> 요소에 작성되어야 한다. 두 번 이상 실행해도 문제가 발생한다.
 * @param {String+} [sSWFPath] Ajax 통신에 사용할 플래시 파일. 기본 값은 "./ajax.swf" 이다.
 * @see $Ajax#request
 * @example
<body>
    <script type="text/javascript">
        $Ajax.SWFRequest.write("/path/swf/ajax.swf");
    </script>
</body>
    
 */
jindo.$Ajax.SWFRequest.write = function(swf_path) {
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4voi' : [],
		'4str' : ["data:String+"]
	},"<static> $Ajax.SWFRequest#write");
	switch(oArgs+""){
		case "4voi":
			swf_path = "./ajax.swf";
		
	}
	var ajax = jindo.$Ajax; 
	ajax.SWFRequest._tmpId = 'tmpSwf'+(new Date()).getMilliseconds()+Math.floor(Math.random()*100000);
	var activeCallback = "jindo.$Ajax.SWFRequest.loaded";
	var protocol = (location.protocol == "https:")?"https:":"http:";
	
	ajax._checkFlashLoad();
	document.write('<div style="position:absolute;top:-1000px;left:-1000px"><object id="'+ajax.SWFRequest._tmpId+'" width="1" height="1" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+protocol+'//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"><param name="movie" value="'+swf_path+'"><param name = "FlashVars" value = "activeCallback='+activeCallback+'" /><param name = "allowScriptAccess" value = "always" /><embed name="'+ajax.SWFRequest._tmpId+'" src="'+swf_path+'" type="application/x-shockwave-flash" pluginspage="'+protocol+'://www.macromedia.com/go/getflashplayer" width="1" height="1" allowScriptAccess="always" swLiveConnect="true" FlashVars="activeCallback='+activeCallback+'"></embed></object></div>');
	
};

/**
 * @ignore
 */
jindo.$Ajax._checkFlashLoad = function(){
	jindo.$Ajax._checkFlashKey = setTimeout(function(){
		jindo.$Ajax.SWFRequest.onerror();
	},5000);
	jindo.$Ajax._checkFlashLoad = function(){}
};
/**

 * @description 플래시 객체 로딩 여부를 저장한 변수. 로딩된 경우 true를 반환하고 로딩되지 않은 경우 false를 반환한다. 플래시 객체가 로딩되었는지 확인할 때 사용할 수 있다.
 * @see $Ajax.SWFRequest.write
    
 */
jindo.$Ajax.SWFRequest.activeFlash = false;

/**
 * 
 * @description flash가 정상적으로 load가 완료된 후 실행되는 함수.
 * @see $Ajax.SWFRequest.onerror
 * @since 2.0.0 부터 지원
 * @example
    <script type="text/javascript">
		var oSWFAjax = $Ajax("http://naver.com/api/test.json",{
			"type" : "flash"
		});
        $Ajax.SWFRequest.onload = function(){
			oSWFAjax.request();	
		}
    </script>
    
 */
jindo.$Ajax.SWFRequest.onload = function(){
};

/**
 * 
 * @description flash가 정상적으로 load가 완료되지 않을때 실행되는 함수.
 * @see $Ajax.SWFRequest.onerror
 * @since 2.0.0 부터 지원
 * @example
    <script type="text/javascript">
		var oSWFAjax = $Ajax("http://naver.com/api/test.json",{
			"type" : "flash"
		});
        $Ajax.SWFRequest.onerror = function(){
			alert("flash로드 실패.다시 로드하세요!");
		}
    </script>
    
 */
jindo.$Ajax.SWFRequest.onerror = function(){
};

/**

 * flash에서 로딩 후 실행 시키는 함수.
 * @ignore
    
 */
jindo.$Ajax.SWFRequest.loaded = function(){
	clearTimeout(jindo.$Ajax._checkFlashKey);
	jindo.$Ajax.SWFRequest.activeFlash = true;
	jindo.$Ajax.SWFRequest.onload();
};

//-!jindo.$Ajax.FrameRequest start(jindo.$Class,jindo.$Ajax,jindo.$Ajax.RequestBase)!-//
/**

 * @class Ajax 요청 타입이 iframe인 요청 객체를 생성하며, $Ajax() 객체에서 Ajax 요청 객체를 생성할 때 사용한다.
 * @extends $Ajax.RequestBase
 * @description $Ajax.FrameRequest 객체를 생성한다. 이때, $Ajax.FrameRequest 객체는 $Ajax.RequestBase 객체를 상속한다.
 * @ignire
 * @see $Ajax
 * @see $Ajax.RequestBase
    
 */
jindo.$Ajax.FrameRequest = jindo.$Class({
	_headers : {},
	_respHeaders : {},
	_frame  : null,
	_domain : "",
	$init  : function(fpOption){
		this.option = fpOption;
	},
	_callback : function(id, data, header) {
		var self = this;

		this.readyState   = 4;
		this.status = 200;
		this.responseText = data;

		this._respHeaderString = header;
		header.replace(/^([\w\-]+)\s*:\s*(.+)$/m, function($0,$1,$2) {
			self._respHeaders[$1] = $2;
		});

		this.onload(this);

		setTimeout(function(){ self.abort() }, 10);
	},
	abort : function() {
		if (this._frame) {
			try {
				this._frame.parentNode.removeChild(this._frame);
			} catch(e) {
			}
		}
	},
	open : function(method, url) {
		jindo.$Jindo.checkVarType(arguments, {
			'4str' : [ 'method:String+','url:String+']
		},"$Ajax.FrameRequest#open");
		
		var re  = /https?:\/\/([a-z0-9_\-\.]+)/i;
		var dom = document.location.toString().match(re);

		this._method = method;
		this._url    = url;
		this._remote = String(url).match(/(https?:\/\/[a-z0-9_\-\.]+)(:[0-9]+)?/i)[0];
		this._frame = null;
		this._domain = (dom[1] != document.domain)?document.domain:"";
	},
	send : function(data) {
		var oArgs = jindo.$Jindo.checkVarType(arguments, {
			'4voi' : [],
			'4nul' : ["data:Null"],
			'4str' : ["data:String+"]
		},"$Ajax.FrameRequest#send");
		
		this.responseXML  = "";
		this.responseText = "";

		var t      = this;
		var re     = /https?:\/\/([a-z0-9_\-\.]+)/i;
		var info   = this._getCallbackInfo();
		var url;
		var _aStr = [];
		_aStr.push(this._remote+"/ajax_remote_callback.html?method="+this._method);
		var header = [];

		window.__jindo2_callback[info.id] = function(id, data, header){
			try {
				t._callback(id, data, header);
			} finally {
				delete window.__jindo2_callback[info.id];
			}
		};

		for(var x in this._headers) {
			if(this._headers.hasOwnProperty(x)){
				header[header.length] = "'"+x+"':'"+this._headers[x]+"'";	
			}
			
		}

		header = "{"+header.join(",")+"}";
		
		
		_aStr.push("&id="+info.id);
		_aStr.push("&header="+encodeURIComponent(header));
		_aStr.push("&proxy="+encodeURIComponent(this.option("proxy")));
		_aStr.push("&domain="+this._domain);
		_aStr.push("&url="+encodeURIComponent(this._url.replace(re, "")));
		_aStr.push("#"+encodeURIComponent(data));

		var fr = this._frame = document.createElement("iframe");
		var style = fr.style;
		style.position = "absolute";
		style.visibility = "hidden";
		style.width = "1px";
		style.height = "1px";

		var body = document.body || document.documentElement;
		if (body.firstChild){ 
			body.insertBefore(fr, body.firstChild);
		}else{ 
			body.appendChild(fr);
		}
		fr.src = _aStr.join("");
	}
}).extend(jindo.$Ajax.RequestBase);

//-!jindo.$Ajax.Queue start(jindo.$Ajax)!-//
/**

 * @class Ajax 요청을 큐에 담아 큐에 들어온 순서대로 요청을 처리한다.
 * @constructor
 * @description $Ajax() 객체를 순서대로 호출할 수 있도록 기능을 제공한다.
 * @param {Hash+} oOption $Ajax.Queue 객체가 서버로 통신을 요청할 때 사용하는 정보를 정의한다.
	<ul>
		<li>async : 비동기/동기 요청 방식을 설정한다. 비동기 요청 방식이면 true, 동기 요청 방식이면 false를 설정한다. 기본 값은 false 이다.</li>
		<li>useResultAsParam : 이전 요청 결과를 다음 요청의 파라미터로 전달할지 결정한다. 이전 요청 결과를 파라미터로 전달하려면 true, 그렇게 하지 않을 경우 false를 설정한다. 기본 값은 false 이다.</li>
		<li>stopOnFailure : 이전 요청이 실패할 경우 다음 요청 중단 여부를 설정한다. 다음 요청을 중단하려면 true, 계속 실행하려면 false를 설정한다. 기본 값은 false 이다.</li>
	</ul>
 * @since 1.3.7
 * @see $Ajax
 * @example
// $Ajax 요청 큐를 생성한다.
var oAjaxQueue = new $Ajax.Queue({
	useResultAsParam : true
});
    
 */
jindo.$Ajax.Queue = function (option) {
	//-@@$Ajax.Queue-@@//
	var cl = arguments.callee;
	if (!(this instanceof cl)){ return new cl(option||{});}
	
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4voi' : [],
		'4obj' : ["option:Hash+"]
	},"$Ajax.Queue");
	option = oArgs.option;
	this._options = {
		async : false,
		useResultAsParam : false,
		stopOnFailure : false
	};

	this.option(option);
	
	this._queue = [];	
};

/**

 * @description option() 메서드는 $Ajax.Queue 객체에 설정한 옵션 값을 키와 값으로 설정한다.
 *
 * @param1 {String+} sName 옵션의 이름(String)
 * @param1 {Variant} vValue 설정할 옵션의 값. 설정할 옵션을 vName에 지정한 경우에만 입력한다.
 * @return1 {$Ajax.Queue} 입력한 옵션을 설정한 $Ajax.Queue 객체를 반환한다.
 *
 * @param2 {Hash+} oOption 옵션의 이름(String) 또는 하나 이상의 옵션을 설정한 객체(Object).
 * @return2 {$Ajax.Queue} 입력한 옵션을 설정한 $Ajax.Queue 객체를 반환한다.
 *
 * @param3 {String+} vName 옵션의 이름
 * @return3 {Variant} 입력한 옵션을 반환한다.
 *
 * @see $Ajax.Queue
 * @example
var oAjaxQueue = new $Ajax.Queue({
	useResultAsParam : true
});

oAjaxQueue.option("async", true);		// async 옵션을 true 로 설정한다.

 * @example

oAjaxQueue.option("useResultAsParam");	// useResultAsParam 옵션 값인 true 를 리턴한다.
    
 */
jindo.$Ajax.Queue.prototype.option = function(name, value) {
	
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		's4str' : [ 'sKey:String+', 'sValue:Variant' ],
		's4obj' : [ 'oOption:Hash+' ],
		'g' : [ 'sKey:String+' ]
	},"$Ajax.Queue#option");
	
	switch(oArgs+"") {
		case 's4str':
			this._options[oArgs.sKey] = oArgs.sValue;
			break;
		case 's4obj':
			var oOption = oArgs.oOption;
			try {
				for (var x in oOption) {
					if (oOption.hasOwnProperty(x)) 
						this._options[x] = oOption[x];
				}
			}catch (e) {};
			break;
		case 'g':
			return this._options[oArgs.sKey];
	}

	return this;
};

/**

 * @description add() 메서드는 $Ajax.Queue에 Ajax 요청($Ajax() 객체)을 추가한다.
 *
 * @param1 {$Ajax} oAjax 추가할 $Ajax() 객체.
 * @return1 {$Ajax.Queue} $Ajax.Queue객체
 *
 *
 * @param2 {$Ajax} oAjax 추가할 $Ajax() 객체.
 * @param2 {Hash+} oParam Ajax 요청 시 전송할 파라미터 객체.
 * @return2 {$Ajax.Queue} $Ajax.Queue객체 
 *
 * @example
var oAjax1 = new $Ajax('ajax_test.php',{
	onload :  function(res){
		// onload 핸들러
	}
});
var oAjax2 = new $Ajax('ajax_test.php',{
	onload :  function(res){
		// onload 핸들러
	}
});
var oAjax3 = new $Ajax('ajax_test.php',{
	onload :  function(res){
		// onload 핸들러
	}

});

var oAjaxQueue = new $Ajax.Queue({
	async : true,
	useResultAsParam : true,
	stopOnFailure : false
});

// Ajax 요청을 큐에 추가한다.
oAjaxQueue.add(oAjax1);

// Ajax 요청을 큐에 추가한다.
oAjaxQueue.add(oAjax1,{seq:1});
oAjaxQueue.add(oAjax2,{seq:2,foo:99});
oAjaxQueue.add(oAjax3,{seq:3});

oAjaxQueue.request();
    
 */
jindo.$Ajax.Queue.prototype.add = function (oAjax, oParam) {
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4obj' : ['oAjax:Hash+'],
		'4obj2' : ['oAjax:Hash+','oPram:Hash+']
	},"$Ajax.Queue");
	switch(oArgs+""){
		case "4obj2":
			oParam = oArgs.oPram;
	}
	
	this._queue.push({obj:oAjax, param:oParam});
	return this;
};

/**

 * @description request() 메서드는 $Ajax.Queue에 있는 Ajax 요청을 서버로 보낸다.
 * @return {$Ajax.Queue} $Ajax.Queue객체
 * @example
var oAjaxQueue = new $Ajax.Queue({
	useResultAsParam : true
});
oAjaxQueue.add(oAjax1,{seq:1});
oAjaxQueue.add(oAjax2,{seq:2,foo:99});
oAjaxQueue.add(oAjax3,{seq:3});

// 서버에 Ajax 요청을 보낸다.
oAjaxQueue.request();
    
 */
jindo.$Ajax.Queue.prototype.request = function () {
	this._requestAsync.apply(this,this.option('async')?[]:[0]);
	return this;
};

jindo.$Ajax.Queue.prototype._requestSync = function (nIdx, oParam) {
	var t = this;
	var queue = this._queue;
	if (queue.length > nIdx+1) {
		queue[nIdx].obj._oncompleted = function(bSuccess, oResult){
			if(!t.option('stopOnFailure') || bSuccess) t._requestSync(nIdx + 1, oResult);
		};
	}
	var _oParam = queue[nIdx].param||{};
	if(this.option('useResultAsParam') && oParam){
		try { for(var x in oParam) if(_oParam[x] === undefined && oParam.hasOwnProperty(x)) _oParam[x] = oParam[x] } catch(e) {};		
	}
	queue[nIdx].obj.request(_oParam);
};

jindo.$Ajax.Queue.prototype._requestAsync = function () {
	for( var i=0; i<this._queue.length; i++)
		this._queue[i].obj.request(this._queue[i].param||{});
};

//-!jindo.$Date start!-//
/**
 
 * @class $Date() 객체는 Date 객체를 래핑(Wrapping)하여 날짜 및 시간을 처리하기 위한 확장 기능을 제공한다.
 * @extends core
 * @constructor
 * @description $Date() 객체를 생성한다. $Date() 객체를 생성할 때 파라미터 없이 생성하거나 ISO Date 포맷 또는 밀리 초 단위의 정수를 생성자의 인수로 입력할 수 있다. ISO Date 포맷 문자를 넣은 경우 $Date.utc 속성을 기반하여 날짜를 계산한다.
 *
 * @param1 {Void}
 *
 * @param2 {String+} sDate Date 포맷의 문자열.
 *
 * @param3 {Number} nDate 밀리 초 단위의 TimeStamp 정수 값.
 *
 * @param4 {Date+} oDate Date 또는 $Date 객체
 *
 * @param5 {Numeric} nYear 정수 값(Number) 년
 * @param5 {Numeric} nMonth 정수 값(Number) 월
 *
 * @param6 {Numeric} nYear 정수 값(Number) 년
 * @param6 {Numeric} nMonth 정수 값(Number) 월
 * @param6 {Numeric} nDate 정수 값(Number) 일 
 *
 * @param7 {Numeric} nYear 정수 값(Number) 년
 * @param7 {Numeric} nMonth 정수 값(Number) 월
 * @param7 {Numeric} nDate 정수 값(Number) 일 
 * @param7 {Numeric} nHour 정수 값(Number) 시 
 *
 * @param8 {Numeric} nYear 정수 값(Number) 년
 * @param8 {Numeric} nMonth 정수 값(Number) 월
 * @param8 {Numeric} nDate 정수 값(Number) 일 
 * @param8 {Numeric} nHour 정수 값(Number) 시 
 * @param8 {Numeric} nMinute 정수 값(Number) 분 
 *
 * @param9 {Numeric} nYear 정수 값(Number) 년
 * @param9 {Numeric} nMonth 정수 값(Number) 월
 * @param9 {Numeric} nDate 정수 값(Number) 일 
 * @param9 {Numeric} nHour 정수 값(Number) 시 
 * @param9 {Numeric} nMinute 정수 값(Number) 분 
 * @param9 {Numeric} nSecond 정수 값(Number) 초
 *
 * @param10 {Numeric} nYear 정수 값(Number) 년
 * @param10 {Numeric} nMonth 정수 값(Number) 월
 * @param10 {Numeric} nDate 정수 값(Number) 일 
 * @param10 {Numeric} nHour 정수 값(Number) 시 
 * @param10 {Numeric} nMinute 정수 값(Number) 분 
 * @param10 {Numeric} nSecond 정수 값(Number) 초
 * @param10 {Numeric} nMiliSec 정수 값(Number) 밀리세컨드

 *
 * @see $Date.utc
 * @see $Date#format
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date">Date</a> - MDN Docs
 * @see <a href="http://ko.wikipedia.org/wiki/ISO_8601">ISO 8601</a> - W3C
 * @example
$Date();
$Date(milliseconds);
$Date(dateString);
//1.4.6 이후부터 달까지만 넣어도 $Date사용 가능하여 빈 값은 1로 설정
$Date(year, month, [date, [hours, [minitues, [seconds, [milliseconds]]]]]);
$Date(2010,6);//이러고 하면 $Date(2010,6,1,1,1,1,1); 와 같음.
  
 */
jindo.$Date = function(src) {
	//-@@$Date-@@//	
	var a=arguments,t="";
	var cl=arguments.callee;

	if (src && src instanceof cl) return src;
	if (!(this instanceof cl)){
		var str="";
		for(var i = 0, l = a.length; i < l; i++){
			str += "a["+i+"],";
		}
		var init = new Function('cl','a','return new cl('+str.replace(/,$/,"")+');');
		
		try {
			jindo.$Jindo._warn(arguments.length, 7,"$Date");
			return init(cl,a);
		} catch(e) {
			if (e instanceof TypeError) { return null; }
			throw e;
		}
		
	}
	
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4voi'  : [ ],
		'4str'  : [ 'src:String+' ],
		'4num'  : [ 'src:Numeric'],
		'4dat' 	: [ 'src:Date+'],
		'4num2' : [ 'src:Numeric', 'src:Numeric'],
		'4num3' : [ 'src:Numeric', 'src:Numeric', 'src:Numeric'],
		'4num4' : [ 'src:Numeric', 'src:Numeric', 'src:Numeric', 'src:Numeric'],
		'4num5' : [ 'src:Numeric', 'src:Numeric', 'src:Numeric', 'src:Numeric', 'src:Numeric'],
		'4num6' : [ 'src:Numeric', 'src:Numeric', 'src:Numeric', 'src:Numeric', 'src:Numeric', 'src:Numeric'],
		'4num7' : [ 'src:Numeric', 'src:Numeric', 'src:Numeric', 'src:Numeric', 'src:Numeric', 'src:Numeric', 'src:Numeric']
	},"$Date");

	switch(oArgs+""){
		case '4voi' : 
			this._date = new Date;
			break;
		case '4num' : 
			this._date = new Date(src*1);
			break;
		case '4str' :
			if (/(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d)))/.test(src)) {
				this._date = jindo.$Date._makeISO(src);
			}else{
				this._date = cl.parse(src);
			}
			break;
		case '4dat' :
			(this._date = new Date).setTime(src.getTime());
			this._date.setMilliseconds(src.getMilliseconds());
			break;
		case '4num2':
		case '4num3':
		case '4num4':
		case '4num5':
		case '4num6':
		case '4num7':
			for(var i = 0 ; i < 7 ; i++){
				if(!jindo.$Jindo.isNumeric(a[i])){
					a[i] = 1;
				}
			}
			this._date = new Date(a[0],a[1],a[2],a[3],a[4],a[5],a[6]);
	}
	this._names = {};
	for(var i in jindo.$Date.names){
		if(jindo.$Date.names.hasOwnProperty(i))
			this._names[i] = jindo.$Date.names[i];	
	}
};
/**
 * @ignore
 */
jindo.$Date._makeISO = function(src){
	var match = src.match(/(\d\d\d\d)(?:-?(\d\d)(?:-?(\d\d)(?:[T ](\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|(?:([-+])(\d\d)(?::?(\d\d))?)?)?)?)?)?/);
	var hour = parseInt(match[4]||0,10);
	var min = parseInt(match[5]||0,10);
	if (match[8] == "Z") {
		hour += jindo.$Date.utc;
	}else if(match[9] == "+" || match[9] == "-"){
		hour += (jindo.$Date.utc - parseInt(match[9]+match[10],10));
		min  +=  parseInt(match[9] + match[11],10);
	}
	return new Date(match[1]||0,parseInt(match[2]||0,10)-1,match[3]||0,hour ,min ,match[6]||0,match[7]||0);
	
};
/**
 * @ignore
 */
jindo.$Date._paramCheck = function(aPram, sType){
	return jindo.$Jindo.checkVarType(aPram, {
		's' : [ 'nParm:Numeric'],
		'g' : []
	},"$Date#"+sType);
};
/**
 
 * @description names 속성은 $Date() 객체에서 사용하는 달, 요일, 오전/오후를 표시하는 문자열을 저장한다. s_ 를 접두어로 가지는 이름은 약어(abbreviation)이다.<br>
<table>
	<caption>달, 요일, 오전/오후 표시 문자열</caption>
	<thead>
		<tr>
			<th scope="col">구분</th>
			<th scope="col">문자열</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>month</td>
			<td>January, Febrary, March, April, May, June, July, August, September, October, Novermber, December</td>
		</tr>
		<tr>
			<td>s_month</td>
			<td>Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec</td>
		</tr>
		<tr>
			<td>day</td>
			<td>Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday</td>
		</tr>
		<tr>
			<td>s_day</td>
			<td>Sun, Mon, Tue, Wed, Thu, Fri, Sat</td>
		</tr>
		<tr>
			<td>ampm</td>
			<td>AM, PM</td>
		</tr>
	</tbody>
</table>
  
 */
jindo.$Date.names = {
	month   : ["January","Febrary","March","April","May","June","July","August","September","October","Novermber","December"],
	s_month : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
	day     : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
	s_day   : ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
	ampm    : ["AM", "PM"]
};

/**
 
 * @description utc 속성은 협정 세계시와 시차를 저장한다. 기본 값은 한국 시간 기준으로 +9로 저장된다.
 * @see <a href="http://ko.wikipedia.org/wiki/UTC">협정 세계시간</a>
 * @example
$Date.utc = -10; // 하와이 시간을 기준으로 한다.
  
 */
jindo.$Date.utc = 9;

//-!jindo.$Date.now start!-//
/**
 
 * @description now() 메서드는 현재 시간을 밀리 초(millisecond) 단위의 정수로 리턴한다.
 * @return {Numeric} 현재 시간을 밀리 초 단위의 정수로 나타낸 값.
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/now">Date.now()</a> - MDN Docs
 * @example
$Date().now(); //sample : 1304907432081
  
 */
jindo.$Date.now = function() {
	//-@@$Date.now-@@//
  if(Date.now){
	/**
	 * @ignore
	 */
  	this.now = function(){
		return Date.now();
	}
  }else{
	/**
	 * @ignore
	 */
  	this.now = function(){
		return +new Date();
	}
  }
  return this.now();
};

//-!jindo.$Date.prototype.name start!-//
/**
 
 * @description name() 메서드는 names 속성에 정의된 달, 요일, 오전/오후를 표시하는 문자열의 값을 가져오거나 문자열을 새로 설정할 수 있다. 
 * @since 1.4.1 버전부터 추가됨.
 *
 * @param1 {String+} vName names속성 이름(String).
 * @return1 {Variant} names 속성 값을 반환한다
 *
 * @param2 {Hash+} 하나 이상의 names속성과 값을 가지는 객체(Object) 또는 해시 객체($H()객체).
 * @return2 {Variant} 값을 반영한 인스턴스를 반환한다.
 * 
 * @param3 {String+} vName names속성 이름(String)
 * @param3 {Array+} aValue names속성에 설정할 값.
 * @return3 {Variant} 값을 반영한 인스턴스를 반환한다.
 *
 * @throws {jindo.$Except.EITHER_STRING_OR_OBJECT_OR_HASH} sName이 문자, 오브젝트 나 $Hash여야 한다.
 * @see $Date.names
  
 */
jindo.$Date.prototype.name = function(vName,aValue){
	//-@@$Date.name-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		's4str' : [ 'sKey:String+', 'aValue:Array+' ],
		's4obj' : [ 'oObject:Hash+' ],
		'g' : [ 'sKey:String+' ]
	},"$Date#name");
	
	switch(oArgs+"") {
		case 's4str':
			this._names[vName] = aValue;
			break;
		case 's4obj':
			vName = oArgs.oObject;
			for(var i in vName){
				if(vName.hasOwnProperty(i)){
					this._names[i] = vName[i];
				}
			}
			break;
		case 'g':
			return this._names[vName]; 
	}
	
	return this;
};

//-!jindo.$Date.prototype.parse start!-//
/**
 
 * @description parse() 메서드는 인수로 지정한 문자열을 파싱하여 $Date() 객체를 생성한다.
 * @param {String+} sDate 날짜, 혹은 시간 형식을 가진 문자열
 * @return {Object} Date 객체.
 * @throws {jindo.$Except.INVALID_DATE} date가 정상적인 문자 포맷이 아닌경우.
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date">Date</a> - MDN Docs
  
 */
jindo.$Date.parse = function(strDate) {
	//-@@$Date.parse-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str' : [ 'sKey:String+']
	},"$Date#parse");
	
	var date = new Date(Date.parse(strDate));
	if(isNaN(date)||date == "Invalid Date"){
		throw new jindo.$Error(jindo.$Except.INVALID_DATE, "$Date#parse");
	}
	return date;
};

//-!jindo.$Date.prototype.$value start!-//
/**
 
 * @description $value() 메서드는 $Date() 객체가 감싸고 있던 원본 Date 객체를 반환한다.
 * @return {Object} 원본 Date 객체.
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date">Date</a> - MDN Docs
  
 */
jindo.$Date.prototype.$value = function(){
	//-@@$Date.$value-@@//
	return this._date;
};

//-!jindo.$Date.prototype.format start(jindo.$Date.prototype.name,jindo.$Date.prototype.isLeapYear,jindo.$Date.prototype.time)!-//
/**
 
 * @description format() 메서드는 $Date() 객체가 저장하고 있는 시간을 파라미터로 지정한 형식 문자열(Format Specifier)에 맞추어 변환한다. 지원하는 형식 문자열은 PHP의 date() 함수와 동일하다.<br>
	<table>
		<caption>날짜</caption>
		<thead>
			<tr>
				<th scope="col">문자</th>
				<th scope="col">설명</th>
				<th scope="col">기타</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>d</td>
				<td>두자리 날짜</td>
				<td>01 ~ 31</td>
			</tr>
			<tr>
				<td>j</td>
				<td>0 없는 날짜</td>
				<td>1 ~ 31</td>
			</tr>
			<tr>
				<td>l (소문자L)</td>
				<td>주의 전체 날짜</td>
				<td>$Date.names.day에 지정되는 날짜</td>
			</tr>
			<tr>
				<td>D</td>
				<td>요약된 날짜</td>
				<td>$Date.names.s_day에 지정된 날짜</td>
			</tr>
			<tr>
				<td>w</td>
				<td>그 주의 몇번째 일</td>
				<td>0(일) ~ 6(토)</td>
			</tr>
			<tr>
				<td>N</td>
				<td>ISO-8601 주의 몇번째 일</td>
				<td>1(월) ~ 7(일)</td>
			</tr>
			<tr>
				<td>S</td>
				<td>2글자, 서수형식의 표현(1st, 2nd)</td>
				<td>st, nd, rd, th</td>
			</tr>
			<tr>
				<td>z</td>
				<td>해당 년도의 몇번째 일(0부터)</td>
				<td>0 ~ 365</td>
			</tr>
		</tbody>
	</table>
	<table>
		<caption>월</caption>
		<thead>
			<tr>
				<th scope="col">문자</th>
				<th scope="col">설명</th>
				<th scope="col">기타</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>m</td>
				<td>두자리 고정으로 월</td>
				<td>01 ~ 12</td>
			</tr>
			<tr>
				<td>n</td>
				<td>앞에 0제외 월</td>
				<td>1 ~ 12</td>
			</tr>
		</tbody>
	</table>
	<table>
		<caption>년</caption>
		<thead>
			<tr>
				<th scope="col">문자</th>
				<th scope="col">설명</th>
				<th scope="col">기타</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>L</td>
				<td>윤년 여부</td>
				<td>true, false</td>
			</tr>
			<tr>
				<td>o</td>
				<td>4자리 연도</td>
				<td>2010</td>
			</tr>
			<tr>
				<td>Y</td>
				<td>o와 같음.</td>
				<td>2010</td>
			</tr>
			<tr>
				<td>y</td>
				<td>2자리 연도</td>
				<td>10</td>
			</tr>
		</tbody>
	</table>
	<table>
		<caption>시</caption>
		<thead>
			<tr>
				<th scope="col">문자</th>
				<th scope="col">설명</th>
				<th scope="col">기타</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>a</td>
				<td>소문자 오전, 오후</td>
				<td>am,pm</td>
			</tr>
			<tr>
				<td>A</td>
				<td>대문자 오전,오후</td>
				<td>AM,PM</td>
			</tr>
			<tr>
				<td>g</td>
				<td>(12시간 주기)0없는 두자리 시간.</td>
				<td>1~12</td>
			</tr>
			<tr>
				<td>G</td>
				<td>(24시간 주기)0없는 두자리 시간.</td>
				<td>0~24</td>
			</tr>
			<tr>
				<td>h</td>
				<td>(12시간 주기)0있는 두자리 시간.</td>
				<td>01~12</td>
			</tr>
			<tr>
				<td>H</td>
				<td>(24시간 주기)0있는 두자리 시간.</td>
				<td>00~24</td>
			</tr>
			<tr>
				<td>i</td>
				<td>0포함 2자리 분.</td>
				<td>00~59</td>
			</tr>
			<tr>
				<td>s</td>
				<td>0포함 2자리 초</td>
				<td>00~59</td>
			</tr>
			<tr>
				<td>u</td>
				<td>microseconds</td>
				<td>654321</td>
			</tr>
		</tbody>
	</table>
	<table>
		<caption>기타</caption>
		<thead>
			<tr>
				<th scope="col">문자</th>
				<th scope="col">설명</th>
				<th scope="col">기타</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>U</td>
				<td>Unix Time(1970 00:00:00 GMT) </td>
				<td></td>
			</tr>
		</tbody>
	</table>
 * @param {String+} sFormat  형식 문자열
 * @return {String} 시간을 형식 문자열에 맞추어 변환한 문자열.
 * @see <a href="http://kr2.php.net/manual/en/function.date.php">date()</a> - php.net
 * @example
	var oDate = $Date("Jun 17 2009 12:02:54");
	oDate.format("Y.m.d(D) A H:i") => "2009.06.17(Wed) PM 12:02"
  
 */
jindo.$Date.prototype.format = function(strFormat){
	//-@@$Date.format-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str' : [ 'sFormat:String+']
	},"$Date#format");
	strFormat = oArgs.sFormat;
	
	var o = {};
	var d = this._date;
	var name = this._names;
	var self = this;
	return (strFormat||"").replace(/[a-z]/ig, function callback(m){
		if (o[m] !== undefined) return o[m];

		switch(m) {
			case"d":
			case"j":
				o.j = d.getDate();
				o.d = (o.j>9?"":"0")+o.j;
				return o[m];
			case"l":
			case"D":
			case"w":
			case"N":
				o.w = d.getDay();
				o.N = o.w?o.w:7;
				o.D = name.s_day[o.w];
				o.l = name.day[o.w];
				return o[m];
			case"S":
				return (!!(o.S=["st","nd","rd"][d.getDate()]))?o.S:(o.S="th");
			case"z":
				o.z = Math.floor((d.getTime() - (new Date(d.getFullYear(),0,1)).getTime())/(3600*24*1000));
				return o.z;
			case"m":
			case"n":
				o.n = d.getMonth()+1;
				o.m = (o.n>9?"":"0")+o.n;
				return o[m];
			case"L":
				o.L = self.isLeapYear();
				return o.L;
			case"o":
			case"Y":
			case"y":
				o.o = o.Y = d.getFullYear();
				o.y = (o.o+"").substr(2);
				return o[m];
			case"a":
			case"A":
			case"g":
			case"G":
			case"h":
			case"H":
				o.G = d.getHours();
				o.g = (o.g=o.G%12)?o.g:12;
				o.A = o.G<12?name.ampm[0]:name.ampm[1];
				o.a = o.A.toLowerCase();
				o.H = (o.G>9?"":"0")+o.G;
				o.h = (o.g>9?"":"0")+o.g;
				return o[m];
			case"i":
				o.i = (((o.i=d.getMinutes())>9)?"":"0")+o.i;
				return o.i;
			case"s":
				o.s = (((o.s=d.getSeconds())>9)?"":"0")+o.s;
				return o.s;
			case"u":
				o.u = d.getMilliseconds();
				return o.u;
			case"U":
				o.U = self.time();
				return o.U;
			default:
				return m;
		}
	});
};

//-!jindo.$Date.prototype.time start!-//
/**
 
 * @description time() 메서드는 GMT(1970/01/01 00:00:00)를 기준으로 경과한 시간을 $Date() 객체에 설정하거나 $Date() 객체가 가지고 있는 값을 가져온다. 파라미터를 입력하면 경과한 시간을 설정하고 파라미터를 생략하면 현재 시간을 기준으로 경과한 시간을 가져온다.
 *
 * @param1 {Void}
 * @return1 {Number} $Date() 객체가 저장하고 있는 밀리세컨드 단위의 timeStamp 값.
 *
 * @param2 {Numeric} nTimeStamp  밀리 초 단위의 정수 값.
 * @return2 {$Date} GMT를 기준으로 파라미터에 지정한 시간만큼 경과한 시간을 설정한 $Date() 객체.
 * 
 * @throws {jindo.$Except.INVALID_DATE} 파라메터나 숫자가 아닌 경우 예외상황 발생. 
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getTime">Date.getTime()</a> - MDN
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setTime">Date.setTime()</a> - MDN
 * @see <a href="http://ko.wikipedia.org/wiki/GMT">GMT</a>
 * @example
var oDate = new $Date(Date.now());
oDate.time(); //sample : 1304908070435
  
 */
jindo.$Date.prototype.time = function(nTime) {
	//-@@$Date.time-@@//
	var oArgs = jindo.$Date._paramCheck(arguments,"time");
	nTime = oArgs.nParm;
	
	switch(oArgs+""){
		case 's':
			this._date.setTime(nTime);
			return this;
		case 'g':
			return this._date.getTime();
	}
};

//-!jindo.$Date.prototype.year start!-//
/**
 
 * @description year() 메서드는 $Date() 객체가 저장하고 있는 시각의 연도(year)를 가져오거나 지정한 값으로 설정한다. 파라미터를 입력하면 $Date() 객체에 지정한 연도를 설정하고 파라미터를 생략하면 $Date() 객체가 저장하고 있는 연도를 반환한다. 이때 연도 값의 형식은 4자리 정수 값이다.
 *
 * @param1 {Void}
 * @return1 {Number} $Date() 객체가 저장하고 있는 시각의 연도를 반환한다.
 *
 * @param2 {Numeric} nYear $Date() 객체에 설정할 연도(year).
 * @return2 {$Date} 연도를 새로 설정한 $Date() 객체.
 * 
 * @throws {jindo.$Except.INVALID_DATE} 파라메터나 숫자가 아닌 경우 예외상황 발생.
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getFullYear">Date.getFullYear()</a> - MDN
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setFullYear">Date.setFullYear()</a> - MDN
 * @example
var oDate = new $Date(Date.now());
oDate.year(); // 2011
oDate.year(1984);
oDate.year(); // 1984
  
 */
jindo.$Date.prototype.year = function(nYear) {
	//-@@$Date.year-@@//
	var oArgs = jindo.$Date._paramCheck(arguments,"year");
	nYear = oArgs.nParm;
	
	switch(oArgs+""){
		case 's':
			this._date.setFullYear(nYear);
			return this;
			
		case 'g':
			return this._date.getFullYear();
			
	}
};

//-!jindo.$Date.prototype.month start!-//
/**
 
 * @description month() 메서드는 $Date() 객체가 저장하고 있는 시각의 달(month)을 가져오거나 지정한 값으로 설정한다. 파라미터를 입력하면 $Date() 객체에 지정한 달을 설정하고 파라미터를 생략하면 $Date() 객체가 저장하고 있는 달을 반환한다. 이때 사용되는 달 값의 범위는 0(1월)에서 11(12월)사이의 정수 값이다.
 *
 * @param1 {Void}
 * @return1 {Number} $Date() 객체가 저장하고 있는 시각의 달을 반환한다.
 *
 * @param2 {Numeric} nMon  $Date() 객체에 설정할 달(month).
 * @return2 {$Date} 새로 설정한 $Date() 객체를 반환.
 * 
 * @throws {jindo.$Except.INVALID_DATE} 파라메터나 숫자가 아닌 경우 예외상황 발생.
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getMonth">Date.getMonth()</a> - MDN
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setMonth">Date.setMonth()</a> - MDN
 * @example
var oDate = new $Date(Date.now());
oDate.month(); // 4, 5월
oDate.month(1);
oDate.month(); // 3, 4월
  
 */
jindo.$Date.prototype.month = function(nMon) {
	//-@@$Date.month-@@//
	var oArgs = jindo.$Date._paramCheck(arguments,"month");
	nMon = oArgs.nParm;
	
	switch(oArgs+""){
		case 's':
			this._date.setMonth(nMon);
			return this;
			
		case 'g':
			return this._date.getMonth();
			
	}

};

//-!jindo.$Date.prototype.date start!-//
/**
 
 * @description date() 메서드는 $Date() 객체가 저장하고 있는 시각의 날짜(day of the month)를 가져오거나 지정한 값으로 설정한다. 파라미터를 입력하면 $Date() 객체에 지정한 날짜를 설정하고 파라미터를 생략하면 $Date() 객체가 저장하고 있는 날짜를 반환한다. 이때 사용되는 날짜의 범위는 1에서 31 사이의 정수 값이다.
 *
 * @param1 {Void}
 * @return1 {Number} $Date() 객체가 저장하고 있는 시각의 날짜를 반환한다.
 *
 * @param2 {Numeric} nMon  $Date() 객체에 설정할 날짜(day of the month).
 * @return2 {$Date} 새로 설정한 $Date() 객체를 반환.
 * 
 * @throws {jindo.$Except.INVALID_DATE} 파라메터나 숫자가 아닌 경우 예외상황 발생.
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getDate">Date.getDate()</a> - MDN
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setDate">Date.setDate()</a> - MDN
 * @example
var oDate = new $Date(Date.now());
oDate.date(); // 9, 9일
oDate.date(15);
oDate.date(); // 14, 14일
  
 */
jindo.$Date.prototype.date = function(nDate) {
	//-@@$Date.date-@@//
	var oArgs = jindo.$Date._paramCheck(arguments,"date");
	nDate = oArgs.nParm;
	
	switch(oArgs+""){
		case 's':
			this._date.setDate(nDate);
			return this;
			
		case 'g':
			return this._date.getDate();
			
	}
};

//-!jindo.$Date.prototype.day start!-//
/**
 
 * @description day() 메서드는 $Date() 객체가 지정하고 있는 시각의 요일(day of the week)를 가져온다. 이때 반환되는 요일의 범위는 0(일요일)에서 6(토요일) 사이의 정수 값이다.
 * @return {Number} $Date() 객체가 저장하고 있는 시각의 요일(0~6)을 반환한다.
 * @throws {jindo.$Except.INVALID_DATE} 파라메터나 숫자가 아닌 경우 예외상황 발생.
 * @see $Date#Date
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getDay">Date.getDay()</a> - MDN
 * @example
var oDate = new $Date(Date.now());
oDate.date(); // 9, 9일
oDate.day(); // 1, 월요일
oDate.date(10);
oDate.day(); // 2, 화요일
   
 */
jindo.$Date.prototype.day = function() {
	//-@@$Date.day-@@//
	return this._date.getDay();
};

//-!jindo.$Date.prototype.hours start!-//
/**
 
 * @description hours() 메서드는 $Date() 객체가 저장하고 있는 시각의 시간(hour)을 가져오거나 지정한 값으로 설정한다. 파라미터를 입력하면 $Date() 객체에 지정한 날짜를 설정하고 파라미터를 생략하면 $Date() 객체가 저장하고 있는 시간을 반환한다. 이때 사용되는 시간의 범위는 0에서 23 사이의 정수 값이다.
 *
 * @param1 {Void}
 * @return1 {Number} $Date() 객체가 저장하고 있는 시각의 시간를 반환한다.
 *
 * @param2 {Numeric} nMon  $Date() 객체에 설정할 시간(hour).
 * @return2 {$Date} 새로 설정한 $Date() 객체를 반환.
 * 
 * @throws {jindo.$Except.INVALID_DATE} 파라메터나 숫자가 아닌 경우 예외상황 발생.
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getHours">Date.getHours()</a> - MDN
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setHours">Date.setHours()</a> - MDN
 * @example
var oDate = new $Date(Date.now());
oDate.hours(); // 11, 11시
oDate.hours(19);
oDate.hours(); // 19, 19시
  
 */
jindo.$Date.prototype.hours = function(nHour) {
	//-@@$Date.hours-@@//
	var oArgs = jindo.$Date._paramCheck(arguments,"hours");
	nHour = oArgs.nParm;
	
	switch(oArgs+""){
		case 's':
			this._date.setHours(nHour);
			return this;
			
		case 'g':
			return this._date.getHours();
			
	}

};

//-!jindo.$Date.prototype.minutes start!-//
/**
 
 * @description minutes() 메서드는 $Date() 객체가 저장하고 있는 시각의 분(minute)을 가져오거나 지정한 값으로 설정한다. 파라미터를 입력하면 $Date() 객체에 지정한 분을 설정하고 파라미터를 생략하면 $Date() 객체가 저장하고 있는 시간을 반환한다. 이때 사용되는 분의 범위는 0에서 59 사이의 정수 값이다.
 *
 * @param1 {Void}
 * @return1 {Number} $Date() 객체가 저장하고 있는 시각의 분을 반환한다.
 *
 * @param2 {Numeric} nMon  $Date() 객체에 설정할 분(minute).
 * @return2 {$Date} 새로 설정한 $Date() 객체를 반환.
 *
 * @throws {jindo.$Except.INVALID_DATE} 파라메터나 숫자가 아닌 경우 예외상황 발생.
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getMinutes">Date.getMinutes()</a> - MDN
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setMinutes">Date.setMinutes()</a> - MDN
 * @example
var oDate = new $Date(Date.now());
oDate.minutes(); // 53, 53분
oDate.minutes(0);
oDate.minutes(); // 0, 0분
  
 */
jindo.$Date.prototype.minutes = function(nMin) {
	//-@@$Date.minutes-@@//
	var oArgs = jindo.$Date._paramCheck(arguments,"minutes");
	nMin = oArgs.nParm;
	
	switch(oArgs+""){
		case 's':
			this._date.setMinutes(nMin);
			return this;
			
		case 'g':
			return this._date.getMinutes();
			
	}
};

//-!jindo.$Date.prototype.seconds start!-//
/**
 
 * @description seconds() 메서드는 $Date() 객체가 저장하고 있는 시각의 초(second)를 가져오거나 지정한 값으로 설정한다. 파라미터를 입력하면 $Date() 객체에 지정한 초를 설정하고 파라미터를 생략하면 $Date() 객체가 저장하고 있는 시간을 반환한다. 이때 사용되는 초의 범위는 0에서 59 사이의 정수 값이다.
 *
 * @param1 {Void}
 * @return1 {Number} $Date() 객체가 저장하고 있는 시각의 초를 반환한다.
 *
 * @param2 {Numeric} nMon  $Date() 객체에 설정할 초(second).
 * @return2 {$Date} 새로 설정한 $Date() 객체를 반환.
 * 
 * @throws {jindo.$Except.INVALID_DATE} 파라메터나 숫자가 아닌 경우 예외상황 발생. 
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getSeconds">Date.getSeconds()</a> - MDN
 * @see <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setSeconds">Date.setSeconds()</a> - MDN
 * @example 
var oDate = new $Date(Date.now());
oDate.seconds(); // 23, 23초
oDate.seconds(0);
oDate.seconds(); // 0, 0초
  
 */
jindo.$Date.prototype.seconds = function(nSec) {
	//-@@$Date.seconds-@@//
	var oArgs = jindo.$Date._paramCheck(arguments,"seconds");
	nSec = oArgs.nParm;
	
	switch(oArgs+""){
		case 's':
			this._date.setSeconds(nSec);
			return this;
			
		case 'g':
			return this._date.getSeconds();
			
	}
};

//-!jindo.$Date.prototype.isLeapYear start!-//
/**
 
 * @description isLeapYear() 메서드는 $Date() 객체가 저장하고 있는 시각의 연도가 윤년인지 검사한다. 
 * @return {Boolean} $Date()가 저장하고 있는 시각의 연도가 윤년이면 true를 반환하고 평년이면 false를 반환한다.
 * @see <a href="http://ko.wikipedia.org/wiki/%EC%9C%A4%EB%85%84">윤년</a> - Wikipedia
 * @example
 var oDate = new $Date(Date.now());

oDate.year(); // 2011
oDate.isLeapYear(); // false

oDate.year(1984);
oDate.isLeapYear(); // true

oDate.year(1900);
oDate.isLeapYear(); // false

oDate.year(2000);
oDate.isLeapYear(); // true
  
 */
jindo.$Date.prototype.isLeapYear = function() {
	//-@@$Date.isLeapYear-@@//
	var y = this._date.getFullYear();

	return !(y%4)&&!!(y%100)||!(y%400);
};

//-!jindo.$Date.prototype.compare start!-//
/**
 
 * @description compare() 메서드는 인자로 받은 날짜와 차이를 숫자로 반환하는 함수이다.
 *
 * @param1 {Date+} oDate  비교할 날짜.
 * @return1 {Number} 비교 단위를 기준으로 차이를 숫자로 반환한다.
 *
 * @param2 {Date+} oDate  비교할 날짜.
 * @param2 {String+} sOption  비교할 단위를 지정.(기본 값은 천 분의 1초까지 비교하며, y, m, d, h, i, s등을 넣을 수 있다. 각 옵션은 y는 년, m은 달, d는 날, h는 시, i는 분, s는 초로 한다)
 * @return2 {Number} 비교 단위를 기준으로 차이를 숫자로 반환한다.
 *
 * @example
var oDate = new $Date(new Date());
oDate.compare(oDate);-> 0//같은 경우
var oCurrentDate = new Date();
oDate.compare(oCurrnetDate); -> 3 // 3ms후
$Date(oCurrnetDate).compare(oDate); -> -3 // 3ms전
oDate.compare(oCurrnetDate,"h"); -> 0 //시간은 같기 때문에 0
  
 */
jindo.$Date.prototype.compare = function(oDate, sType) {
	//-@@$Date.compare-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4dat' : [ 'oDate:Date+'],
		'4str' : [ 'oDate:Date+','sType:String+']
	},"$Date#compare");
	oDate = oArgs.oDate;
	sType = oArgs.sType;

	if(!sType){
		return oDate - this._date;
	}else if(sType === "s"){
		return Math.floor(oDate / 1000) - Math.floor(this._date / 1000);
	}else if(sType === "i"){
		return Math.floor(Math.floor(oDate / 1000)/60) - Math.floor(Math.floor(this._date / 1000)/60);
	}else if(sType === "h"){
		return Math.floor(Math.floor(Math.floor(oDate / 1000)/60)/60) - Math.floor(Math.floor(Math.floor(this._date / 1000)/60)/60);
	}else if(sType === "d"){
		return Math.floor(Math.floor(Math.floor(Math.floor(oDate / 1000)/60)/60)/24) - Math.floor(Math.floor(Math.floor(Math.floor(this._date / 1000)/60)/60)/24);
	}else if(sType === "m"){
		return oDate.getMonth() - this._date.getMonth();
	}else if(sType === "y"){
		return oDate.getFullYear() - this._date.getFullYear();
	}
	
};

//-!jindo.$Cookie start!-//
/**

 * @class $Cookie() 객체는 쿠키(Cookie)에 정보를 추가, 수정, 혹은 삭제하거나 쿠키의 값을 가져온다.
 * @constructor
 * @description $Cookie() 객체를 생성한다.
 * @example
var cookie = $Cookie();
    
 */
jindo.$Cookie = function() {
	//-@@$Cookie-@@//
	var cl = arguments.callee;
	var cached = cl._cached;
	
	if (cl._cached) return cl._cached;
	if (!(this instanceof cl)) return new cl;
	if (typeof jindo.$Jindo.isUndefined(cl._cached)) cl._cached = this;
};

//-!jindo.$Cookie.prototype.keys start!-//
/**

 * @description keys() 메서드는 쿠키 키(key)를 원소로 가지는 배열을 리턴한다.
 * @return {Array} 쿠키의 키를 원소로 가지는 배열
 * @see $Cookie#set
 * @example
var cookie = $Cookie();
cookie.set("session_id1", "value1", 1);
cookie.set("session_id2", "value2", 1);
cookie.set("session_id3", "value3", 1);

document.write (cookie.keys ());
// 결과 :
// session_id1, session_id2, session_id3
  
 */
jindo.$Cookie.prototype.keys = function() {
	//-@@$Cookie.keys-@@//
	var ca = document.cookie.split(";");
	var re = /^\s+|\s+$/g;
	var a  = new Array;
	
	for(var i=0; i < ca.length; i++) {
		a[a.length] = ca[i].substr(0,ca[i].indexOf("=")).replace(re, "");
	}
	
	return a;
};

//-!jindo.$Cookie.prototype.get start!-//
/**

 * @description get() 메서드는 쿠키에서 키(key)에 해당하는 값(value)을 가져온다. 값이 존재하지 않는다면 null을 반환한다.
 * @param {String+} sName 키 이름.
 * @return {String} 해당 키의 값.
 * @see $Cookie#set
 * @example
var cookie = $Cookie();
cookie.set("session_id1", "value1", 1);
document.write (cookie.get ("session_id1"));
	
// 결과 :
// value1

document.write (cookie.get ("session_id0"));
// 결과 :
// null
  
 */
jindo.$Cookie.prototype.get = function(sName) {
	//-@@$Cookie.get-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4str' : [ 'sName:String+']
	},"$Cookie#get");
	var ca = document.cookie.split(/\s*;\s*/);
	var re = new RegExp("^(\\s*"+sName+"\\s*=)");
	
	for(var i=0; i < ca.length; i++) {
		if (re.test(ca[i])) return unescape(ca[i].substr(RegExp.$1.length));
	}
	
	return null;
};

//-!jindo.$Cookie.prototype.set start!-//
/**

 * @description set() 메서드는 쿠키 값을 설정한다. 쿠키 값을 설정할 때 유효 기간, 유효 도메인, 유효 경로(path)를 함께 설정할 수 있다.
 *
 * @param1 {String+} sName 키의 이름
 * @param1 {String+} sValue 키의 값
 * @return1 {$Cookie} $Cookie() 객체
 *
 * @param2 {String+} sName 키의 이름
 * @param2 {String+} sValue 키의 값
 * @param2 {Numeric} nDays 쿠키 유효 시간. 유효 시간은 일단위로 설정한다. 유효시간을 생략했다면 쿠키는 웹 브라우저가 종료되면 없어진다.
 * @return2 {$Cookie} $Cookie() 객체
 *
 * @param3 {String+} sName 키의 이름
 * @param3 {String+} sValue 키의 값
 * @param3 {Numeric} nDays 쿠키 유효 시간. 유효 시간은 일단위로 설정한다. 유효시간을 생략했다면 쿠키는 웹 브라우저가 종료되면 없어진다.
 * @param3 {String+} sDomain 쿠키 도메인
 * @return3 {$Cookie} $Cookie() 객체
 *
 * @param4 {String+} sName 키의 이름
 * @param4 {String+} sValue 키의 값
 * @param4 {Numeric} nDays 쿠키 유효 시간. 유효 시간은 일단위로 설정한다. 유효시간을 생략했다면 쿠키는 웹 브라우저가 종료되면 없어진다.
 * @param4 {String+} sDomain 쿠키 도메인
 * @param4 {String+} sPath 쿠키 패스
 * @return4 {$Cookie} $Cookie() 객체
 *
 * @see $Cookie#set
 * @example
var cookie = $Cookie();
cookie.set("session_id1", "value1", 1);
cookie.set("session_id2", "value2", 1);
cookie.set("session_id3", "value3", 1);
  
 */
jindo.$Cookie.prototype.set = function(sName, sValue, nDays, sDomain, sPath) {
	//-@@$Cookie.set-@@//
	var ___jindo = jindo.$Jindo;
	var oArgs = ___jindo.checkVarType(arguments, {
		'4str' : [ 'sName:String+',"sValue:String+"],
		'day_for_string' : [ 'sName:String+',"sValue:String+","nDays:Numeric"],
		'domain_for_string' : [ 'sName:String+',"sValue:String+","nDays:Numeric","sDomain:String+"],
		'path_for_string' : [ 'sName:String+',"sValue:String+","nDays:Numeric","sDomain:String+","sPath:String+"]
	},"$Cookie#set");
	
	var sExpire = "";
	
	nDays = parseInt(nDays,10);
	if (!isNaN(nDays)&&___jindo.isNumeric(nDays)) {
		sExpire = ";expires="+(new Date((new Date()).getTime()+nDays*1000*60*60*24)).toGMTString();
	}
	if (___jindo.isUndefined(sDomain)) sDomain = "";
	if (___jindo.isUndefined(sPath)) sPath = "/";
	
	document.cookie = sName+"="+escape(sValue)+sExpire+"; path="+sPath+(sDomain?"; domain="+sDomain:"");
	
	return this;
};

//-!jindo.$Cookie.prototype.remove start(jindo.$Cookie.prototype.get,jindo.$Cookie.prototype.set)!-//
/**

 * @description remove() 메서드는 쿠키에 설정된 쿠키 값을 제거한다. 만약 제거하려는 값에 유효 도메인과 유효 경로가 설정되어 있다면 정확히 지정해야 한다.
 *
 * @param1 {String+} sName 키 이름.
 * @return1 {$Cookie} $Cookie() 객체.
 *
 * @param2 {String+} sName 키 이름.
 * @param2 {String+} sDomain 설정된 유효 도메인.
 * @return2 {$Cookie} $Cookie() 객체.
 *
 * @param3 {String+} sName 키 이름.
 * @param3 {String+} sDomain 설정된 유효 도메인.
 * @param3 {String+} sPath 설정된 유효 경로.
 * @return3 {$Cookie} $Cookie() 객체.
 *
 * @see $Cookie#get
 * @see $Cookie#set
 * @example
var cookie = $Cookie();
cookie.set("session_id1", "value1", 1);
document.write (cookie.get ("session_id1"));

// 결과 :
// value1

cookie.remove("session_id1");
document.write (cookie.get ("session_id1"));

// 결과 :
// null
  
 */
jindo.$Cookie.prototype.remove = function(sName, sDomain, sPath) {
	//-@@$Cookie.remove-@@//
	var ___jindo = jindo.$Jindo;
	var oArgs = ___jindo.checkVarType(arguments, {
		'4str' : [ 'sName:String+'],
		'domain_for_string' : [ 'sName:String+',"sDomain:String+"],
		'path_for_string' : [ 'sName:String+',"sDomain:String+","sPath:String+"]
	},"$Cookie#remove");
	var aArg = _toArray(arguments);
	var aPram = [];
	for(var i = 0, l = aArg.length ; i < l ; i++){
		aPram.push(aArg[i]);
		if(i == 0){
			aPram.push("");	
			aPram.push(-1);	
		}
	}
	if (!___jindo.isNull(this.get(sName))) this.set.apply(this,aPram);
	
	return this;
};

//-!jindo.$Template start!-//
/**
 
 * @class $Template() 객체를 사용하면 템플릿을 해석하여 템플릿에 동적으로 데이터를 적용할 수 있다.
 * @constructor
 * @description $Template() 객체를 생성한다.
 * @param1 {String+} sTemplate 템플릿으로 사용할 문자열 또는 템플릿 HTML 요소의 id<br>
	파라미터가 문자열이면 두 가지 방식으로 동작한다.
	<ul>
		<li>문자열이 HTML 요소의 id라면 HTML 요소의 innerHTML을 템플릿으로 사용한다.</li>
		<li>만약 일반 문자열이라면 문자열 자체를 템플릿으로 사용한다.</li>
	</ul>
 * @param2 {Element+} elTemplate 템플릿으로 HTML 요소<br>
	파라미터가 HTML 요소이면 TEXTAREA와 SCRIPT 요소만 사용할 수 있다.
	<ul>
		<li>HTML 요소가 SCRIPT 요소인 경우 type 속성은 반드시 "text/template"으로 지정해야 한다.</li>
		<li>HTML 요소의 value 값을 템플릿으로 사용하며, value 값이 없을 경우 HTML 요소의 innerHTML을 템플릿으로 사용한다.</li>
	</ul>
 * @example
// 파라미터가 일반 문자열인 경우
var tpl = $Template("{=service} : {=url}");

 * @example
<textarea id="tpl1">
{=service} : {=url}
&lt;/textarea&gt;

// 같은 TEXTAREA 요소를 템플릿으로 사용한다
var template1 = $Template("tpl1");		// 파라미터가 HTML 요소의 ID
var template2 = $Template($("tpl1"));	// 파라미터가 TEXTAREA 요소인 경우
</script>

 * @example
<script type="text/template" id="tpl2">
{=service} : {=url}
</script>

// 같은 SCRIPT 요소를 템플릿으로 사용한다
var template1 = $Template("tpl2");		// 파라미터가 HTML 요소의 ID
var template2 = $Template($("tpl2"));	// 파라미터가가 SCRIPT 요소인 경우
  
 */
jindo.$Template = function(str) {
	//-@@$Template-@@//
    var obj = null, tag = "";
    var cl  = arguments.callee;

    if (str instanceof cl) return str;

	if (!(this instanceof cl)){
		try {
			jindo.$Jindo._warn(arguments.length, 1,"$Template");
			return new cl(str||"");
		} catch(e) {
			if (e instanceof TypeError) { return null; }
			throw e;
		}
	}    
	
	jindo.$Jindo.checkVarType(arguments, {
		'4str' : ['str:String+'],
		'4ele' : ['ele:Element+']
	},"$Template");

    if( (obj=document.getElementById(str)||str) && obj.tagName && (tag=obj.tagName.toUpperCase()) && (tag == "TEXTAREA" || (tag == "SCRIPT" && obj.getAttribute("type") == "text/template")) ) {
        str = (obj.value||obj.innerHTML).replace(/^\s+|\s+$/g,"");
    }

    this._str = str+"";
};
jindo.$Template.splitter = /(?!\\)[\{\}]/g;
jindo.$Template.pattern  = /^(?:if (.+)|elseif (.+)|for (?:(.+)\:)?(.+) in (.+)|(else)|\/(if|for)|=(.+)|js (.+)|set (.+)|gset (.+))$/;

//-!jindo.$Template.prototype.process start!-//
 /**
 
 * @description  process() 메서드는 템플릿을 해석하고 데이터를 적용하여 새로운 문자열을 생성한다. 템플릿 내에 구문이 없으면 단순 문자열 치환으로 처리한다. 템플릿을 해석할 때에 템플릿에 구문이 있으면 구문에 따라 템플릿을 해석이 달라진다. 각 구문의 해석은 예제와 다음 표를 참고한다.<br>
 <table>
	<caption>템플릿 구문</caption>
	<thead>
		<tr>
			<th scope="col">구분</th>
			<th scope="col">설명</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>{=변수}</td>
			<td>파라미터로 입력된 데이터 객체에서 변수와 이름이 같은 속성의 값을 출력한다.</td>
		</tr>
		<tr>
			<td>{if 조건}<br>{elseif 조건}<br>{else}<br>{/if}</td>
			<td>조건에 따라 출력할 템플릿 내용을 선택한다.</td>
		</tr>
		<tr>
			<td>{for [인덱스:]변수 in 배열}<br>{/for}</td>
			<td>for문 안에 있는 템플릿의 내용을 반복하여 출력한다.</td>
		</tr>
		<tr>
			<td>{set 변수 = 값}</td>
			<td>템플릿에서 사용할 임시 변수에 값을 할당한다.</td>
		</tr>
		<tr>
			<td>{gset 변수 = 값}</td>
			<td>set과 달리 지역변수로 할당되어 {js}에서 사용가능하다.(버전 2.0.0부터 사용가능)</td>
		</tr>
		<tr>
			<td>{js 함수}</td>
			<td>템플릿에서 특정 기능의 함수를 호출한다.</td>
		</tr>
	</tbody>
</table>
 * @param1 {Void} 
 * @return1 {String} 템플릿을 해석하고 데이터를 적용한 새로운 문자열.
 
 * @param2 {Hash+} oDdata 템플릿에 적용할 데이터를 가진 객체. 템플릿에 데이터를 적용할 부분은 객체의 속성(property) 이름으로 찾는다.
 * @return2 {String} 템플릿을 해석하고 데이터를 적용한 새로운 문자열.
 * @example
// 단순 문자열 치환
// {=value} 부분의 값을 치환한다.
var tpl  = $Template("Value1 : {=val1}, Value2 : {=val2}")
var data = { val1: "first value", val2: "second value" };

document.write( tpl.process(data) );

// 결과
// Value1 : first value, Value2 : second value

 * @example
// if/elseif/else : 조건문
// 템플릿을 해석할 때 조건문을 판단하여 처리한다.
var tpl= $Template("{if num >= 7}7보다 크거나 같다.{elseif num <= 5}5보다 작거나 같다.{else}아마 6?{/if}");
var data = { num: 5 };

document.write( tpl.process(data) );

// 결과
// 5보다 작거나 같다.

 * @example
// set : 임시 변수 사용
// set val=1 로 설정하는 경우 {=val} 부분에 1을 대입한다.
var tpl  = $Template("{set val3=val1}Value1 : {=val1}, Value2 : {=val2}, Value3 : {=val3}")
var data = { val1: "first value", val2: "second value" };

document.write( tpl.process(data) );

// 결과
// Value1 : first value, Value2 : second value, Value3 : first value

 * @example
// gset : 지역 변수로 할당.
// gset val=1 로 설정하는 경우 {js}을 사용해서 접근 가능하다.
var tpl  = $Template("{gset length=(=books).length}{for num:book in books}{js length}.{=book}\n{/for}")
var data = {"books":[1,2,3]};

document.write( tpl.process(data) );

// 결과
// 3.1
// 3.2
// 3.3

 * @example
// js : JavaScript 사용
// 템플릿을 해석할 때 해당 JavaScript를 실행한다.
var tpl  = $Template("Value1 : {js $S(=val1).bytes()}, Value2 : {=val2}")
var data = { val1: "first value", val2: "second value" };

document.write( tpl.process(data) );

// 결과
// Value1 : 11, Value2 : second value

 * @example
// for in : 반복문(인덱스를 사용하지 않는 경우)
var tpl  = $Template("<h1>포탈 사이트</h1>\n<ul>{for site in portals}\n<li><a href='{=site.url}'>{=site.name}</a></li>{/for}\n</ul>");
var data = { portals: [
	{ name: "네이버", url : "http://www.naver.com" },
	{ name: "다음",  url : "http://www.daum.net" },
	{ name: "야후",  url : "http://www.yahoo.co.kr" }
]};

document.write( tpl.process(data) );

// 결과
//<h1>포탈 사이트</h1>
//<ul>
//<li><a href='http://www.naver.com'>네이버</a></li>
//<li><a href='http://www.daum.net'>다음</a></li>
//<li><a href='http://www.yahoo.co.kr'>야후</a></li>
//</ul>

 * @example
// for: 반복문(인덱스를 사용하는 경우)
var tpl  = $Template("{for num:word in numbers}{=word}({=num}){/for}");
var data = { numbers: ["zero", "one", "two", "three"] };

document.write( tpl.process(data) );

// 결과
// zero(0) one(1) two(2) three(3) 
  
 */
jindo.$Template.prototype.process = function(data) {
	//-@@$Template.process-@@//
	var oArgs = jindo.$Jindo.checkVarType(arguments, {
		'4obj' : ['data:Hash+'],
		'4voi' : []
	},"$Template#process");
	var key = "\x01";
	var leftBrace = "\x02";
	var rightBrace = "\x03";
    var tpl = (" "+this._str+" ").replace(/\\{/g,leftBrace).replace(/\\}/g,rightBrace).replace(/(?!\\)\}\{/g, "}"+key+"{").split(jindo.$Template.splitter), i = tpl.length;
	
    var map = {'"':'\\"','\\':'\\\\','\n':'\\n','\r':'\\r','\t':'\\t','\f':'\\f'};
    var reg = [/(["'](?:(?:\\.)+|[^\\["']+)*["']|[a-zA-Z_](?:[\w\.]|\[(?:.*?)\])*)/g, /[\n\r\t\f"\\]/g, /^\s+/, /\s+$/, /#/g];
	var cb = [function(m){ return (m.substring(0,1)=='"' || m.substring(0,1)=='\''||m=='null'||m=="false"||m=="true")?m:"d."+m; }, function(m){return map[m]||m}, "", ""];
    var stm = [];
	var lev = 0;

	// remove " "
	tpl[0] = tpl[0].substr(1);
	tpl[i-1] = tpl[i-1].substr(0, tpl[i-1].length-1);

    // no pattern
    if(i<2) return tpl[0];
	
	tpl = tpl.reverse();
	
	var delete_info;
    while(i--) {
        if(i%2) {
            tpl[i] = tpl[i].replace(jindo.$Template.pattern, function(){
                var m = arguments;
				//gset
				if (m[11]) {
					return m[11].replace(/(\w+)(?:\s*)=(?:\s*)(?:([a-zA-Z0-9_]+)|(.+))$/g, function(){
										var mm = arguments;
										var str = "var "+ mm[1]+"=";
										if(mm[2]){
											str+= mm[2];
										}else {
											str += mm[3].replace(   /(=(?:[a-zA-Z_][\w\.]*)+)/g,
                				                                           function(m){ return (m.substring(0,1)=='=')?"d."+m.replace('=','') : m; }
                                				                        );
										}
										return str;
								}) +	";"; 
								
				}
				// set
				if (m[10]) {
					var a =  m[10].replace(/(\w+)(?:\s*)=(?:\s*)(?:([a-zA-Z0-9_]+)|(.+))$/g, function(){
										var mm = arguments;
										var str = "d."+mm[1]+"=";
										if(mm[2]){
											str+="d."+mm[2];
										}else {
											str += mm[3].replace(/((?:[a-zA-Z_](?:[\w\.]|\[(?:.*?)\])*)+)/g,
                				                                           function(m){ 
																			   return "d."+m; 
																		   }
                                				                 );
										}
										return str;
								}) +	";";
					return a;
								
				}
				// js 
				if(m[9]) {
					return 's[i++]=' + m[9].replace(   /(=(?:[a-zA-Z_][\w\.]*)+)/g,
                				                                           function(m){ return (m.substring(0,1)=='=')?"d."+m.replace('=','') : m; }
                                				                        )+';';
				}
                // variables
                if(m[8]) return 's[i++]= d.'+m[8]+';';

                // if
                if(m[1]) {
                    return 'if('+m[1].replace(reg[0],cb[0]).replace(/d\.(typeof) /,'$1 ').replace(/ d\.(instanceof) d\./,' $1 ')+'){';
                }

                // else if
                if(m[2]) return '}else if('+m[2].replace(reg[0],cb[0]).replace(/d\.(typeof) /,'$1 ').replace(/ d\.(instanceof) d\./,' $1 ')+'){';

                // for loop
                if(m[5]) {
					delete_info = m[4];
					var _aStr = [];
					_aStr.push('var t#=d.'+m[5]+'||{},p#=jindo.$Jindo.isArray(t#),i#=0;');
					_aStr.push('for(var x# in t#){');
					
					_aStr.push('if(!t#.hasOwnProperty(x#)){continue;}');
					_aStr.push('	if( (p# && isNaN(i#=parseInt(x#,10))) || (!p# && !t#.propertyIsEnumerable(x#)) ) continue;');
					_aStr.push('	d.'+m[4]+'=t#[x#];');
					_aStr.push(m[3]?'d.'+m[3]+'=p#?i#:x#;':'');
					return  _aStr.join("").replace(reg[4], lev++ );
                }

                // else
                if(m[6]) return '}else{';

                // end if, end for
                if(m[7]) {
					if(m[7]=="for"){
						return "delete d."+delete_info+"; };";
					}else{
						return '};';	
					}
                    
                }

                return m[0];
            });
        }else if(tpl[i] == key) {
			tpl[i] = "";
        }else if(tpl[i]){
            tpl[i] = 's[i++]="'+tpl[i].replace(reg[1],cb[1])+'";';
        }
    }
	
	tpl = tpl.reverse().join('').replace(new RegExp(leftBrace,'g'),"{").replace(new RegExp(rightBrace,'g'),"}");
	
	var _aStr = [];
	_aStr.push('var s=[],i=0;');
	_aStr.push(tpl);
	_aStr.push('return s.join("");');
	tpl = new Function("d",''+
		_aStr.join("")
	);
	
	tpl = tpl(oArgs+""=="for_void"?"":oArgs.data);
    return tpl;
};

