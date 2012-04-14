/**
 * @fileOverview 클립보드를 컨트롤하는 컴포넌트
 * @author hooriza, modified by senxation
 * @version 1.0.4
 */

jindo.Clipboard = jindo.$Class({
	/** @lends jindo.Clipboard.prototype */
	_aElement : null,
	_aData : null,
	_elOvered : null,
	_bFailed : true,
	
	/**
	 * Clipboard 컴포넌트를 생성한다. 플래시로드를 위해 flashObject.js 파일을 사용한다.
	 * @constructs
	 * @class 플래시 객체를 사용하여 시스템 클립보드에 값을 설정하는 컴포넌트
	 * @extends jindo.Component
	 * @see <a href="http://devcafe.nhncorp.com/?vid=flashdev&mid=board_6&document_srl=60932" target="_blank">flashObject</a> 
	 * @see <a href="http://flashdev.naver.com/js_standard/reference.html" target="_blank">flashObject API</a>
	 * @param {String} sFlashURL 클립보드를 제어할 플래시파일 주소
	 * @example
<span id="foo">클립보드에 "http://naver.com/" 복사하기</span>
<script>
	oClipboard = new jindo.Clipboard('../Sources/clipboard.swf').attach({
		load : function(oCustomEvent) {
			//클립보드 제어를 위한 Flash 파일이 로드 완료된 이후에 발생
			this.setData(jindo.$('foo'), 'http://naver.com/');
			this.setData(jindo.$('bar'), 'http://daum.net/');
		},
		copy: function(oCustomEvent){
			//마우스 클릭시 성공적으로 클립보드가 설정된 경우 발생
			alert(e.element + ' 를 눌러서 ' + e.data + ' 가 클립보드에 저장되었습니다');
		},
		failure: function(oCustomEvent){
			//마우스 클릭시 클립보드 설정에 실패한 경우 발생
			alert('실패 : ' + e.element + ' 를 눌렀지만 ' + e.data + ' 를 클립보드에 저장하지 못했습니다');
		},
		over : function(oCustomEvent) {
		},
		out : function(oCustomEvent) {
		},
		down : function(oCustomEvent) {
		},
		up : function(oCustomEvent) {
		}
	});
</script>
	 */
	$init : function(sFlashURL) {
		this._sFlashURL = sFlashURL;
		var oStatic = jindo.Clipboard; //구버전 진도 (0.3.5 이하) jindo.$Class에는 constructor프로퍼티가 존재하지 않음
		var sFlashUID = this._sUnique = 'S' + new Date().getTime() + parseInt(Math.random() * 1000000000, 10);
		
		if (typeof oStatic._callbacks == "undefined") {
			oStatic._callbacks = {};
		}
		oStatic._callbacks[this._sUnique] = {
			click : jindo.$Fn(this._onFlashClick, this).bind(),
			mouseover : jindo.$Fn(this._onFlashMouseOver, this).bind(),
			mouseout : jindo.$Fn(this._onFlashMouseOut, this).bind(),
			mousedown : jindo.$Fn(this._onFlashMouseDown, this).bind(),
			mouseup : jindo.$Fn(this._onFlashMouseUp, this).bind(),
			load : jindo.$Fn(this._onFlashLoad, this).bind()
		};
		
		this._aElement = [];
		this._aData = [];
		
		this._initFlash();
		
		this._wfHandler = jindo.$Fn(function(we) {
			this._initFlash();
			var el = we.element;
			var htPosition = jindo.$Element(el).offset();
			this._setFlashPosSize(htPosition.left, htPosition.top, el.offsetWidth, el.offsetHeight);
			this._setClipboard(el, this._getData(el));
			this._elOvered = el;
		}, this);
		
	},
	
	_initFlash : function() {
		if (this._elDummy) {
			return;
		}
		var elDummy = this._elDummy = jindo.$('<div>');
		var sFlashUID = this._sUnique;
		
		elDummy.style.cssText = 'position:absolute !important; border:0 !important; padding:0 !important; margin:0 !important; overflow:visible !important; z-index:32000 !important;';
		document.body.insertBefore(elDummy, document.body.firstChild);
		
		var sFlashHtml = nhn.FlashObject.generateTag(this._sFlashURL, 'CLIPBOARD' + sFlashUID, 1, 1, {flashVars : { sUniq : sFlashUID }, wmode : 'transparent'}); //flashVars로 sUniq 전달
		sFlashHtml = sFlashHtml.replace(/style="position:relative !important;"/gi, 'style="position:absolute !important; left:0 !important; top:0 !important; border:0 !important; padding:0 !important; margin:0 !important; overflow:visible !important;"');
		elDummy.innerHTML = sFlashHtml;
		jindo.$Fn(this._checkFailed, this).attach(elDummy, 'click');
	},
	
	_getFlash : function() {
		return nhn.FlashObject.find('CLIPBOARD' + this._sUnique);
	},
	
	_setFlashPosSize : function(nLeft, nTop, nWidth, nHeight) {
		var elDummy = this._elDummy;
		elDummy.style.left = nLeft + 'px';
		elDummy.style.top = nTop + 'px';
		
		var oFlash = this._getFlash();
		oFlash.width = nWidth;
		oFlash.height = nHeight;
		oFlash.style.width = nWidth + 'px';
		oFlash.style.height = nHeight + 'px';
	},
	
	/**
	 * 특정 엘리먼트를 클릭하면 지정된 값을 클립보드에 저장하도록 설정한다.
	 * @remark setData메소드는 반드시 Flash 객체의 로드가 완료된 이후에 수행되어야한다. load 커스텀이벤트핸들러 내에서 수행하는 것을 권장한다.
	 * @example
oClipboard.attach({
	load : function(e) {
		//클립보드 제어를 위한 Flash 파일이 로드 완료된 이후에 발생
		this.setData(jindo.$('foo'), 'http://naver.com/');
		this.setData(jindo.$('bar'), 'http://daum.net/');
	}
});
	 * @param {HTMLElement | String} el 지정할 엘리먼트 혹은 id
	 * @param {String} sData 저장할 값. 빈 값(null 또는 "" 또는 false)이면 설정된 값을 해제한다.
	 */
	setData : function(el, sData) {
		el = jindo.$(el);
		
		var nIndex = jindo.$A(this._aElement).indexOf(el),
			bExist = nIndex != -1;
		
		if (bExist && (!sData || typeof sData == 'undefined') ) { // 지워야 하는 상황이면
			this._wfHandler.detach(el, 'mousemove');
			
			this._aElement.splice(nIndex, 1);
			this._aData.splice(nIndex, 1);

			this._setFlashPosSize(0, 0, 1, 1);
			return;
		}

		if (!bExist) { 
			// 새로 만들어야 하는 상황
			this._wfHandler.attach(el, 'mousemove');
			this._aElement.push(el);
			this._aData.push(sData);
		} else {
			// 바꿔야 하는 상황
			this._aData[nIndex] = sData;
		}
		this._setClipboard(el, sData);
	},
	
	_getData : function(el) {
		var nIndex = jindo.$A(this._aElement).indexOf(el);
		return this._aData[nIndex];
	},
	
	_setClipboard : function(el, sData) {
		var oFlash = this._getFlash();
		var sCursor = (jindo.$Element(el).css('cursor') || '').toUpperCase();
		var bHandCursor = sCursor == 'POINTER' || sCursor == 'HAND';
		
		try {
			oFlash.setClipboardData(sData);
			oFlash.setClipboardOptions({ cursor : bHandCursor ? 'pointer' : 'default' });
			
			this._sAppliedData = sData;
			this._bFailed = false;
		} catch(e) {
			this._bFailed = true;
		}
	},
	
	_checkFailed : function() {
		if (this._bFailed) {
			// 예전에 externalInterface 쓸때 실패했으면
			this.fireEvent('failure', {
				element: this._elOvered,
				data: this._lastestData
			});
		}
	},
	
	_onFlashClick : function(sData) { 
		this.fireEvent('copy', { element : this._elOvered, data : sData }); 
	},
	_onFlashMouseOver : function() { 
		this.fireEvent('over', { element : this._elOvered }); 
	},
	_onFlashMouseOut : function() { 
		this.fireEvent('out', { element : this._elOvered }); 
	},
	_onFlashMouseDown : function() { 
		this.fireEvent('down', { element : this._elOvered }); 
	},
	_onFlashMouseUp : function() { 
		this.fireEvent('up', { element : this._elOvered }); 
	},
	_onFlashLoad : function() { 
		this.fireEvent('load'); 
	}
}).extend(jindo.Component);
