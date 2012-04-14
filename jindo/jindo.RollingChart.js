/**
 * @fileOverview 실시간 순위 변화를 보여주는 롤링 차트 컴포넌트
 * @author senxation
 * @version 1.0.4
 */

jindo.RollingChart = jindo.$Class({
	/** @lends jindo.RollingChart.prototype */
		
	_nIndexOfRolling : 0, //현재 롤링되고있는 아이템의 인덱스
	_bIsRolling : false, //롤링 중인지 여부

	/**
	 * 롤링차트 컴포넌트를 생성한다.
	 * @constructs
	 * @class 실시간 순위 변화를 보여주는 롤링 차트 컴포넌트
	 * @extends jindo.UIComponent
	 * @requires jindo.Rolling
	 * @param {HTMLElement} el 기준 엘리먼트
	 * @param {HashTable} htOption 옵션 객체
	 * @example
var oRollingChart = new jindo.RollingChart(jindo.$('rolling_chart'), {
	sDirection : 'down', //롤링될 방향 "down" || "up"
	nFPS : 50, //롤링을 그려줄 초당 프레임수
	nDuration : 300, //롤링될 시간
	nRollingInterval : 50, //각 롤링간의 시간간격
	sUrl : "test.php", //요청 url
	sRequestType : "jsonp", //요청타입
	sRequestMethod : "get", //요청방식
	htRequestParameter : { p : 11 }, //요청 파라메터
	nRequestInterval : 5000, //새로운 목록을 가져올 시간 간격 (ms)
	bActivateOnload : true //(Boolean) 초기화시 activate 여부
}).attach({
	request : function(oCustomEvent) {
		//롤링될 새로운 목록을 요청하기 전에 발생
		//oCustomEvent.stop(); 수행시 요청하지 않음
	},
	response : function(oCustomEvent) {
		//목록을 성공적으로 받아온 이후에 발생
		//이벤트 객체 oCustomEvent = {
		//	htResponseJSON : (HashTable) 응답의 JSON 객체
		//}
		//oCustomEvent.stop(); 수행시 새로 받아온 목록을 업데이트 하지 않음
	},
	beforeUpdate : function(oCustomEvent) {
		//새 목록을 받아온 후 기존 목록에 적용하기 이전에 발생 
		//oCustomEvent.stop(); 수행시 새로 받아온 목록을 업데이트 하지 않음
	},
	beforeRolling : function(oCustomEvent) {
		//새 목록이 추가되고 각각의 롤링이 시작되기전 발생.
		//이벤트 객체 oCustomEvent = {
		//	nIndex : (Number) 현재 롤링될 목록의 번호
		//}
	},
	afterRolling : function(oCustomEvent) {
		//새 목록이 추가되고 각각의 롤링이 종료된 후 발생.
		//이벤트 객체 oCustomEvent = {
		//	nIndex : (Number) 현재 롤링된 목록의 번호
		//}
	},
	afterUpdate : function(oCustomEvent) {
		//모든 롤링이 끝난 이후에 발생
	}
});
	 */
	$init : function(el, htOption) {
		
		var htDefaultOption = {
			sClassPrefix : 'rollingchart-', //Default Class Prefix
			sDirection : 'down', //롤링될 방향 "down" || "up"
			nFPS : 50, //롤링을 그려줄 초당 프레임수 
			nDuration : 300, //롤링될 시간
			nRollingInterval : 100, //각 롤링간의 시간간격
			sUrl : "", //요청 url
			sRequestType : "jsonp", //요청타입
			sRequestMethod : "get", //요청방식
			htRequestParameter : null, //(Object) 파라메터
			nRequestInterval : 10000, //새로운 목록을 가져올 시간 간격 (ms)
			bActivateOnload : true //(Boolean) 초기화시 activate 여부
		};
		
		this.option(htDefaultOption);
		this.option(htOption || {});
		
		this._el = jindo.$(el);

		this._assignHTMLElements(); //컴포넌트에서 사용되는 HTMLElement들을 선언하는 메소드
		this._initTimer();
		this._initRolling();
		
		if (this.option("bActivateOnload")) {
			this.activate(); //컴포넌트를 활성화한다.
		}
	},

	/**
	 * 컴포넌트에서 사용되는 HTMLElement들을 선언하는 메소드
	 */
	_assignHTMLElements : function() {
		this._elList = jindo.$$.getSingle("ol", this._el);
		this._aItems = jindo.$$("> li", this._elList);
	},
	
	/**
	 * 챠트의 리스트 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getList : function() {
		return this._elList;
	},
	
	/**
	 * 챠트 리스트의 아이템 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getItems : function() {
		return this._aItems;
	},
	
	/**
	 * 각 챠트 리스트 아이템에 롤링을 위한 리스트를 가져온다.
	 * @param {HTMLElement} elItem
	 */
	getListOfItem : function(elItem) {
		return jindo.$$.getSingle("ul", elItem);
	},
	
	/**
	 * 챠트가 롤링중인지 여부를 가져온다.
	 * @return {Boolean}
	 */
	isRolling : function() {
		return this._bIsRolling;	
	},
	
	_initTimer : function() {
		this._oRequestTimer = new jindo.Timer();
	},
	
	/**
	 * 일정 간격으로 Ajax 요청을 위한 Timer 객체를 가져온다.
	 * @return {jindo.Timer}
	 */
	getTimer : function() {
		return this._oRequestTimer;
	},
	
	_initRolling : function() {
		var self = this;
		this._oRollingEventHandler = {
			"end" : function(){
				setTimeout(function(){
					self.fireEvent("afterRolling", { nIndex : self._nIndexOfRolling });
					self._roll(self._nIndexOfRolling + 1);	
				}, self.option("nRollingInterval"));
			}
		};
		this._oRolling = new jindo.Rolling(this._el, {
			nFPS : this.option("nFPS"),
			nDuration : this.option("nDuration"),
			sDirection : 'vertical',
			fEffect : jindo.Effect.linear
		});
	},
	
	/**
	 * 롤링 컴포넌트의 인스턴스를 가져온다.
	 * @return {jindo.Rolling}
	 */
	getRolling : function() {
		return this._oRolling;
	},
	
	/**
	 * Rolling이 적용될 아이템을 번호로 정한다. ////////////// 
	 * @param {Number} n
	 * @ignore
	 */
	_setItemIndexToRolling : function(n) {
		var elList = this.getListOfItem(this.getItems()[n]);
		var oRolling = this.getRolling();
		oRolling._el = elList;
		oRolling._elList = elList;
	},

	/**
	 * 컴포넌트를 활성화한다.
	 * @return {this}
	 */
	_onActivate : function() {
		var self = this;

		this.getTimer().start(function(){
			self._stopRequest();
			self._request();
			return true;
		}, this.option("nRequestInterval"));
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 * @return {this}
	 */
	_onDeactivate : function() {
		this.getTimer().abort();
	},
	
	/**
     * @ignore
     * @param {String} sQuery 쿼리. 생략시 현재 입력된 input의 값
     */
    _request: function(sQuery){
		if (this.isRolling()) {
			return;
		}
		
        var htOption = this.option();
        var sUrl = htOption.sUrl;
        var htParameter = htOption.htRequestParameter;
		var self = this;        
        this._oAjax = jindo.$Ajax(sUrl, {
            type: htOption.sRequestType,
            method: htOption.sRequestMethod,
            onload: function(oResponse){
                try {
					var htParam = { htResponseJSON : oResponse.json() };
					if(!self.fireEvent("response", htParam)) {
						return;
					}
					
					if(!self.fireEvent("beforeUpdate")) {
						return;
					}
										
					var oChart = htParam.htResponseJSON;
					self._addItemToRolling(oChart);
					self.getRolling().getTransition().attach(self._oRollingEventHandler);
					self._roll(0);
                } 
                catch (e) {
                }
            }
        });
		if (!self.fireEvent("request")) {
			return;
		}
		this._oAjax.request(htParameter);
    },
	
	_stopRequest: function(){
        try {
            this._oAjax.abort();
            this._oAjax = null;
        } 
        catch (e) {
        }
	},
	
	_addItemToRolling : function(oChart) {
		var self = this;
		var sDirection = this.option("sDirection");
		
		jindo.$A(this.getItems()).forEach(function(el, i){
			var wel = jindo.$Element(jindo.$("<li>"));
			wel.html(oChart.items[i]);
			var elList = self.getListOfItem(el);
			if(sDirection == "down") {
				elList.insertBefore(wel.$value(), elList.firstChild);
				elList.scrollTop = 9999;
			}
			else {
				jindo.$Element(elList).append(wel.$value());
				elList.scrollTop = 0;	
			}
		});
	},
	
	_removeItemRolled : function() {
		var self = this;
		var sDirection = this.option("sDirection");
		
		jindo.$A(this.getItems()).forEach(function(el, i){
			if(sDirection == "down") {
				jindo.$Element(jindo.$$("li", self.getListOfItem(el))[1]).leave();
			}
			else {
				var elList = self.getListOfItem(el);
				jindo.$Element(jindo.$$.getSingle("li", elList)).leave();
				elList.scrollTop = 0;	
			}
			
		});
		this._nIndexOfRolling = 0;
	},

	_roll : function(n) {
		this._bIsRolling = true;
		this._nIndexOfRolling = n;
		this.fireEvent("beforeRolling", { nIndex : n });
		var nIndex = n;
		if (nIndex == this.getItems().length) {
			this._removeItemRolled();
			this._nIndexOfRolling = 0;
			this.getRolling().getTransition().detach(this._oRollingEventHandler);
			this._bIsRolling = false;
			this.fireEvent("afterUpdate");
			return;
		}
			
		this._setItemIndexToRolling(nIndex);
		
		var nDistance = 1;
		if (this.option("sDirection") == "down") {
			nDistance = -1;
		}
		this.getRolling().moveBy(nDistance);
	}
}).extend(jindo.UIComponent);	