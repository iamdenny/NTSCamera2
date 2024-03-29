/**
 * @fileOverview Data Bridge Component
 * @author TarauS
 * @version 1.0.4
 */
jindo.DataBridge = jindo.$Class({
	/** @lends jindo.DataBridge.prototype */
	/**
	 * 이벤트 핸들러 저장 객체
	 * @type {HashTable}
	 */
	_htEvent : {},
	
	/**
	 * 스태틱 메소드 저장 객체
	 * @private 
	 */
	$static : {
		/**
		 * 플래시에서 처리 상황을 로깅하기 위한 콜백함수
		 * @function
		 * @name log
		 * @member jindo.DataBridge
		 * @param {String} sFlashId 메시지를 전달할 플래시 객체의 아이디
		 * @param {String} sMessage 로깅 메시지
		 */
		log : function(sFlashId, sMessage){
			if(sFlashId && sMessage){
				this.getComponentInstance(sFlashId)._onLog(sMessage);
			}else{
				alert("Parameter is wrong!!");
			}
		},
		
		/**
		 * 다른 클라이언트에서 온 데이터를 수신하기 위한 콜백함수
		 * @function
		 * @name onReceive
		 * @member jindo.DataBridge
		 * @param {String} sFlashId 데이터를 전달할 플래시 객체의 아이디
		 * @param {String} sSenderId 데이터를 송신한 클라이언트의 아이디
		 * @param {Variant} vData 다른 클라이언트에서 온 데이터
		 */
		onReceive : function(sFlashId, sSenderId, vData){
			if(sFlashId && sSenderId && vData){
				this.getComponentInstance(sFlashId)._onReceiveData(sSenderId, vData);
			}else{
				alert("Parameter is wrong!!");
			}
		},
		
		/**
		 * sFlashId에 해당하는 인스턴스를 찾아서 리턴함
		 * @function
		 * @name getComponentInstance
		 * @member jindo.DataBridge
		 * @param {String} sFlashId 문서에 삽입된 플래시 객체의 아이디
		 * @return {jindo.DataBridge} DataBridge Component의 instance
		 */
		getComponentInstance : function(sFlashId){
			var aInstanceList = this.getInstance();
			for(var i=0; i<aInstanceList.length; i++){
				if(sFlashId == aInstanceList[i].getFlashObjectId()){
					return aInstanceList[i];
				}
			}
		}
	},
	
	/**
	 * 초기화 함수
	 * @constructs
	 * @class DataBridge
	 * @param {HashTable} htOption 초기화 옵션 객체
	 * @example
	 * var oDataBridge = new jindo.DataBridge({
	 * 		"sServiceId" : "deskhome",
	 * 		"nRetryCount" : 3
	 * });
	 * 
	 * oDataBridge.attach("receive", function(oCustomEvent){
	 * 		console.log(oCustomEvent.vData);
	 * });
	 * @extends jindo.Component
	 */
	$init : function(htOption){
		this.option({
			"sSwfPath" : "data_bridge.swf",
			"nRetryLimit" : 3
		});
		this.option(htOption);
		this._attachEvent();
		this._createFlashObject();
	},
	
	/**
	 * 이벤트 핸들러 등록
	 */
	_attachEvent : function(){
		this._htEvent["beforeunload"] = jindo.$Fn(this.destroy, this).attach(window, "beforeunload");
	},
	
	/**
	 * 클라이언트들과 통신을 담당할 플래시 객체를 동적으로 생성
	 */
	_createFlashObject : function(){
		this._sFlashId = 'data_bridge_'+(new Date()).getMilliseconds()+Math.floor(Math.random()*100000);
		var welFlashContainer = jindo.$Element('<div style="position:absolute;top:-1000px;left:0px">');
		var sFlashVars = "serviceId="+this.option("sServiceId")+"&logHandler=jindo.DataBridge.log&onReceiveHandler=jindo.DataBridge.onReceive&flashId="+this._sFlashId+"&retryLimit="+this.option("nRetryLimit");
		welFlashContainer.appendTo(document.body);
		welFlashContainer.html('<object id="'+this._sFlashId+'" width="1" height="1" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0"><param name="flashvars" value="'+sFlashVars+'"><param name="movie" value="'+this.option("sSwfPath")+'"><param name = "allowScriptAccess" value = "always" /><embed name="'+this._sFlashId+'" src="'+this.option("sSwfPath")+'" flashvars="'+sFlashVars+'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" width="1" height="1" allowScriptAccess="always" swLiveConnect="true"></embed></object>');
	},
	
	/**
	 * 클라이언트들과 통신을 담당하기 위해 문서에 삽입된 플래시 객체를 리턴
	 * 
	 * @return {Element} 플래시 객체
	 */
	_getFlashObject : function(){
		return document[this._sFlashId] || jindo.$(this._sFlashId);
	},
	
	/**
	 * 클라이언트들과 통신을 담당할 플래시 객체의 엘리먼트 아이디를 리턴
	 * 
	 * @return {String} 플래시 객체의 엘리먼트 아이디
	 */
	getFlashObjectId : function(){
		return this._sFlashId;
	},
	
	/**
	 * 클라이언트 아이디를 리턴한다.
	 * @return {String} 클라이언트 아이디
	 */
	getClientId : function(){
		return this.option("sServiceId")+"_"+this._sFlashId;
	},
	
	/**
	 * 다른 클라이언트들에게 vData를 전달
	 * - 클래스 인스턴스 생성 후, 플래시 객체가 문서에 삽입되기까지 시간이 걸리기에, send 메소드는 특정 시간 이후에 사용해야 함
	 * 
	 * @param {Variant} 전달할 데이터
	 * @return {this}
	 */
	send : function(vData){
		if(vData){
			try{
				this._getFlashObject().send(vData);
			}catch(e){
				alert("Flash object is not ready!!");
			}
		}else{
			alert("vData parameter is null!!");	
		}
		return this;
	},
	
	/**
	 * 다른 클라이언트로부터 데이터를 수신했을 때, 수행될 콜백 함수
	 * - 데이터 수신 후, receive라는 사용자 이벤트를 발생 시킴
	 * 
	 * @param {String} sSenderId 데이터를 송신한 클라이언트의 아이디
	 * @param {Variant} vData 전달받은 데이터
	 */
	_onReceiveData : function(sSenderId, vData){
		this.fireEvent("receive", {
			"sSenderId" : sSenderId,
			"vData" : vData
		});
	},
	
	/**
	 * 플래시 내에서의 처리 상황을 로깅하기 위한 콜백 함수
	 * 
	 * @param {String} sMessage 로깅 메시지
	 */
	_onLog : function(sMessage){
		this.fireEvent("log", {
			"sMessage" : sMessage
		});
	},
	
	/**
	 * 다른 클라이언트들과의 로컬 연결을 해제 함
	 */
	_close : function(){
		this._getFlashObject().close();
	},
	
	/**
	 * 이벤트 핸들러 해제
	 */
	_detachEvent : function(){
		this._htEvent["beforeunload"].detach(window, "beforeunload");
	},
	
	getLocalData : function(){
		
	},
	
	setLocalData : function(){
		
	},
	
	resetLocalData : function(){
		
	},
	
	/**
	 * 모듈 소멸자
	 */
	destroy : function(){
		this._close();
		this._detachEvent();
		this._htEvent = {};
		jindo.$Element(this._getFlashObject()).leave();
	}
}).extend(jindo.Component);