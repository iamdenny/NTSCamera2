/**
 * @fileOverview iframe에 Form을 Submit하여 리프레시없이 파일을 업로드하는 컴포넌트
 * @author senxation
 * @version 1.0.4
 */

jindo.FileUploader = jindo.$Class({
	/** @lends jindo.FileUploader.prototype */
		
	_bIsActivating : false, //컴포넌트의 활성화 여부
	_aHiddenInput : [],

	/**
	 * 컴포넌트를 생성한다.
	 * @constructs
	 * @class iframe에 Form을 Submit하여 리프레시없이 파일을 업로드하는 컴포넌트
	 * @param {HTMLElement} elFileSelect File Select. 베이스(기준) 엘리먼트
	 * @param {Object} oOption 옵션 객체
	 * @extends jindo.UIComponent
	 * @example 
var oFileUploader = new jindo.FileUploader(jindo.$("file_select"),{
    sUrl  : 'http://ajaxui.jindodesign.com/docs/components/samples/response/FileUpload.php', //업로드할 서버의 url (Form 전송의 대상)
    sCallback : 'http://ajaxui.jindodesign.com/svnview/Jindo_Component/FileUploader/trunk/Spec/callback.html', //업로드 이후에 iframe이 redirect될 콜백페이지의 주소
    htData : {}, //post할 데이터 셋 예 { blogId : "testid" }
    sFiletype : "*", //허용할 파일의 형식. ex) "*", "*.*", "*.jpg", "1234.*"
    sMsgNotAllowedExt: "업로드가 허용되지 않는 파일형식입니다", //허용할 파일의 형식이 아닌경우에 띄워주는 경고창의 문구
	bAutoUpload : false //파일이 선택됨과 동시에 자동으로 업로드를 수행할지 여부 (upload 메소드 수행)
	bAutoReset : true // 업로드한 직후에 파일폼을 리셋 시킬지 여부 (reset 메소드 수행)
}).attach({
	select : function(oCustomEvent) {
		//파일 선택이 완료되었을 때 발생
		//이벤트 객체 oCustomEvent = {
		//	sValue (String) 선택된 File Input의 값
		//	bAllowed (Boolean) 선택된 파일의 형식이 허용되는 형식인지 여부
		//	sMsgNotAllowedExt (String) 허용되지 않는 파일 형식인 경우 띄워줄 경고메세지
		//}
		//bAllowed 값이 false인 경우 경고문구와 함께 alert 수행 
		//oCustomEvent.stop(); 수행시 bAllowed 가 false이더라도 alert이 수행되지 않음
	},
	success : function(oCustomEvent) {
		//업로드가 성공적으로 완료되었을 때 발생
		//이벤트 객체 oCustomEvent = {
		//	htResult (Object) 서버에서 전달해주는 결과 객체 (서버 설정에 따라 유동적으로 선택가능)
		//}
	},
	error : function(oCustomEvent) {
		//업로드가 실패했을 때 발생
		//이벤트 객체 oCustomEvent = {
		//	htResult : { (Object) 서버에서 전달해주는 결과 객체. 에러발생시 errstr 프로퍼티를 반드시 포함하도록 서버 응답을 설정하여야한다.
		//		errstr : (String) 에러메시지
		// 	}
		//}
	}
});
	 */
	$init : function(elFileSelect, htOption) {
		
		//옵션 초기화
		var htDefaultOption = {
			sUrl: '', // upload url
			sCallback: '', // callback url
			htData : {},
            sFiletype: '*',
            sMsgNotAllowedExt: "업로드가 허용되지 않는 파일형식입니다",
            bAutoUpload: false,
            bAutoReset: true,
			bActivateOnload : true //로드시 컴포넌트 활성화여부
		};
		this.option(htDefaultOption);
		this.option(htOption || {});
		
		//Base 엘리먼트 설정
		this._el = jindo.$(elFileSelect);
		this._wel = jindo.$Element(this._el);
		this._elForm = this._el.form;
		this._aHiddenInput = [];
		
		this.constructor._oCallback = {};
		this._wfChange = jindo.$Fn(this._onFileSelectChange, this);
		
		//활성화
		if(this.option("bActivateOnload")) {
			this.activate(); //컴포넌트를 활성화한다.	
		}
	},
	
	_appendIframe : function() {
		//Iframe 설정
        var sIframeName = 'tmpFrame_' + this._makeUniqueId();
        this._welIframe = jindo.$Element(jindo.$('<iframe name="' + sIframeName + '" src="' + this.option("sCallback") + '?blank">')).css({
			position : 'absolute',
        	width : '1px',
        	height : '1px',
        	left : '-100px',
        	top : '-100px'
		});
        document.body.appendChild(this._welIframe.$value());
	},
	
	_removeIframe : function() {
		this._welIframe.leave();
	},
	
	/**
	 * 컴포넌트의 베이스 엘리먼트를 가져온다.
	 * @deprecated getFileSelect
	 * @return {HTMLElement}
	 */
	getBaseElement : function() {
		return this.getFileSelect();
	},
	
	/**
	 * File Select 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getFileSelect : function() {
		return this._el;
	},
	
	/**
	 * File Select의 해당 Form 엘리먼트를 가져온다.
	 * @return {HTMLElement} 
	 */
	getFormElement : function() {
		return this._elForm;
	},
	
	/**
	 * IFrame으로 업로드를 수행한다.
	 */
	upload : function(){
		this._appendIframe();
		
		var elForm = this.getFormElement(),
			welForm = jindo.$Element(elForm),
			sIframeName = this._welIframe.attr("name"),
			sFunctionName = sIframeName + '_func',
			sAction = this.option("sUrl");
		
		//Form 설정		
		welForm.attr({
			target : sIframeName,
			action : sAction
		});
		
		this._aHiddenInput.push(this._createElement('input', {
            'type': 'hidden',
            'name': 'callback',
            'value': this.option("sCallback")
        }));
        this._aHiddenInput.push(this._createElement('input', {
            'type': 'hidden',
            'name': 'callback_func',
            'value': sFunctionName
        }));
        for (var k in this.option("htData")) {
            this._aHiddenInput.push(this._createElement('input', {
                'type': 'hidden',
                'name': k,
                'value': this.option("htData")[k]
            }));
        }
		
		for (var i = 0; i < this._aHiddenInput.length; i++) {
			elForm.appendChild(this._aHiddenInput[i]);	
		}
        
		//callback 함수 정의
        this.constructor._oCallback[sFunctionName + '_success'] = jindo.$Fn(function(oParameter){
            this.fireEvent("success", { htResult : oParameter });
			delete this.constructor._oCallback[oParameter.callback_func + '_success'];
			delete this.constructor._oCallback[oParameter.callback_func + '_error'];
			for (var i = 0; i < this._aHiddenInput.length; i++) {
				jindo.$Element(this._aHiddenInput[i]).leave();	
			}
			this._aHiddenInput.length = 0;
			this._removeIframe();
        }, this).bind();
        
        // temporary function - on error
        this.constructor._oCallback[sFunctionName + '_error'] = jindo.$Fn(function(oParameter){
			this.fireEvent("error", { htResult : oParameter });
			delete this.constructor._oCallback[oParameter.callback_func + '_success'];
			delete this.constructor._oCallback[oParameter.callback_func + '_error'];
			for (var i = 0; i < this._aHiddenInput.length; i++) {
				jindo.$Element(this._aHiddenInput[i]).leave();	
			}
			this._aHiddenInput.length = 0;
			this._removeIframe();
        }, this).bind();
		
        // form submit and reset
        elForm.submit();
        
        if (this.option("bAutoReset")) {
        	this.reset();
        }

    },
	
    /**
     * File Select의 선택값을 초기화한다.
     * @return {this}
     */
    reset : function() {
    	
    	// 다른 폼에는 영향을 주지 않고 파일선택폼만 리셋시키기 위해 임시폼에 넣어놓고 리셋 수행
    	var elWrapForm = jindo.$("<form>");
    	this._wel.wrap(elWrapForm);
    	elWrapForm.reset();
    	
    	jindo.$Element(elWrapForm).replace(this._el);
    	
    	// activate 때 취했던 target, action 으로 원복
		var elForm = this.getFormElement(),
		welForm = jindo.$Element(elForm);
    	
		welForm.attr({
			target : this._sPrevTarget,
			action : this._sAction
		});
    	
    	return this;
    },
    
	/**
	 * 컴포넌트를 활성화한다.
	 * @return {this}
	 */
	_onActivate : function() {
		var elForm = this.getFormElement(),
			welForm = jindo.$Element(elForm);
    	
		this._sPrevTarget = welForm.attr("target");
		this._sAction = welForm.attr("action");
		
    	this._el.value = "";
		this._wfChange.attach(this._el, "change");
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 * @return {this}
	 */
	_onDeactivate : function() {
		this._wfChange.detach(this._el, "change");
	},
	
	/**
	 * 유일한 id를 랜덤하게 생성한다.
	 * @ignore
	 */
    _makeUniqueId: function(){
        return new Date().getMilliseconds() + Math.floor(Math.random() * 100000);
    },
	
	/**
	 * element를 생성한다.
	 * @param {Object} name
	 * @param {Object} attributes
	 * @ignore
	 */
    _createElement: function(name, attributes){
        var el = jindo.$("<" + name + ">");
		var wel = jindo.$Element(el);
        for (var k in attributes) {
            wel.attr(k, attributes[k]);
        }
        return el;
    },
	
	/**
	 * 파일의 확장자를 검사한다.
	 * @param {String} sFile
	 * @ignore
	 */
    _checkExtension: function(sFile){
        var aType = this.option("sFiletype").split(';');
        for (var i = 0, sType; i < aType.length; i++) {
			sType = (aType[i] == "*.*") ? "*" : aType[i];
            sType = sType.replace(/^\s+|\s+$/, '');
            sType = sType.replace(/\./g, '\\.');
            sType = sType.replace(/\*/g, '[^\\\/]+');
            if ((new RegExp(sType + '$', 'gi')).test(sFile)) {
                return true;
			} 
        }
        return false;
    },
	
	/**
	 * 선택된 파일이 바뀌었을경우 처리
	 * @param {jindo.$Event} we
	 * @ignore
	 */
	_onFileSelectChange : function(we) {
		var sValue = we.element.value,
			bAllowed = this._checkExtension(sValue),
			htParam = {
				sValue : sValue,
				bAllowed : bAllowed,
				sMsgNotAllowedExt : this.option("sMsgNotAllowedExt") 
			};
		
		if (sValue.length && this.fireEvent("select", htParam)) {
			if (bAllowed) {
		        if (this.option("bAutoUpload")) {
					this.upload();
				}
        	} else {
        		alert(htParam.sMsgNotAllowedExt);
			}
		}
	}
	
}).extend(jindo.UIComponent);