/**
 * @fileOverview 외부의 모든 문서를 가리는 사용자 대화창을 생성하는 컴포넌트
 * @author senxation
 * @version 1.0.4
 */

jindo.ModalDialog = jindo.$Class({
	/** @lends jindo.ModalDialog.prototype */

	/**
	 * Modal Dialog 컴포넌트를 생성한다.
	 * @constructs
	 * @class 외부의 모든 문서를 가리는 사용자 대화창을 생성하는 컴포넌트
	 * @param {HashTable} htOption 옵션 해시테이블
	 * @extends jindo.Dialog
	 * @requires jindo.Foggy 
	 * @example
var oModalDialog = new jindo.ModalDialog({
	Foggy : { //Foggy 컴포넌트를 위한 옵션 (jindo.Foggy 참고)
		nShowDuration : 150, //(Number) fog 레이어가 완전히 나타나기까지의 시간 (ms)  
		nShowOpacity : 0.8, //(Number) fog 레이어가 보여질 때의 transition 효과와 투명도 (0~1사이의 값)      
		nHideDuration : 150, //(Number) fog 레이어가 완전히 사라지기까지의 시간 (ms)  
		nHideOpacity : 0, //(Number) fog 레이어가 숨겨질 때의 transition 효과와 투명도 (0~1사이의 값)
		sEffect : "linear", // (String) jindo.Effect의 종류
		nFPS : 30 //(Number) 효과가 재생될 초당 frame rate  
	}
}).attach({
	beforeShow : function(e) {
		//다이얼로그 레이어가 보여지기 전에 발생
		//전달되는 이벤트 객체 e = {
		//	elLayer (HTMLElement) 다이얼로그 레이어
		//}
		//e.stop(); 수행시 보여지지 않음
	},
	show : function(e) {
		//다이얼로그 레이어가 보여진 후 발생
		//전달되는 이벤트 객체 e = {
		//	elLayer (HTMLElement) 다이얼로그 레이어
		//}
	},
	beforeHide : function(e) {
		//다이얼로그 레이어가 숨겨지기 전에 발생
		//전달되는 이벤트 객체 e = {
		//	elLayer (HTMLElement) 다이얼로그 레이어
		//}
		//e.stop(); 수행시 숨겨지지 않음
	},
	hide : function(e) {
		//다이얼로그 레이어가 숨겨진 후 발생
		//전달되는 이벤트 객체 e = {
		//	elLayer (HTMLElement) 다이얼로그 레이어
		//}
	}
});
	 */
	$init : function(htOption) {
		var htDefaultOption = {
			Foggy : { //Foggy 컴포넌트를 위한 옵션 (jindo.Foggy 참고)
				nShowDuration : 150, //(Number) fog 레이어가 완전히 나타나기까지의 시간 (ms)  
				nShowOpacity : 0.8, //(Number) fog 레이어가 보여질 때의 transition 효과와 투명도 (0~1사이의 값)      
				nHideDuration : 150, //(Number) fog 레이어가 완전히 사라지기까지의 시간 (ms)  
				nHideOpacity : 0, //(Number) fog 레이어가 숨겨질 때의 transition 효과와 투명도 (0~1사이의 값)
				sEffect : "linear", // (String) jindo.Effect의 종류
				nFPS : 30 //(Number) 효과가 재생될 초당 frame rate  
			}
		};
		this.option(htDefaultOption);
		this.option(htOption || {});
		
		this._initFoggy();
	},
	
	/**
	 * Foggy 컴포넌트를 초기화한다.
	 * @ignore
	 */
	_initFoggy : function() {
		var self = this;
		this._oFoggy = new jindo.Foggy(this.option("Foggy")).attach({
			show : function(e) {
				self.fireEvent("show", { elLayer : self._elLayer });
			},
			hide : function() {
				self.detachAll("close").detachAll("confirm").detachAll("cancel");
				self._detachEvents();
				self._welLayer.hide();
				self._welLayer.leave();
				self._bIsShown = false;
				self.fireEvent("hide", { elLayer : self._elLayer });
			}
		});
		
		//컴포넌트에 의해 생성된 fog레이어에 대한 설정
		this._oFoggy.getFog().className = this.option("sClassPrefix") + 'fog'; 
	},
	
	/**
	 * 생성된 Foggy 컴포넌트의 인스턴스를 가져온다.
	 * @return {jindo.Foggy}
	 */
	getFoggy : function() {
		return this._oFoggy;
	},
	
	/**
	 * 다이얼로그 레이어를 보여준다.
	 * @remark 다이얼로그 레이어는 설정된 레이어의 템플릿으로부터 만들어져 document.body에 append된다.
	 * @param {Object} htTemplateProcess 템플릿에 대체하기 위한 데이터를 가지는 Hash Table
	 * @param {Object} htEventHandler 다이얼로그 내부에서 발생하는 이벤트를 처리하는 핸들러들
	 * @example
//다이얼로그 레이어에 닫기, 취소, 확인 버튼이 모두 존재하는경우 각각의 버튼에 대한 핸들러를 함께 등록한다. 
var oModalDialog = new jindo.ModalDialog();

oModalDialog.setLayerTemplate('<div><a href="#" class="dialog-close"><img width="15" height="14" alt="레이어닫기" src="http://static.naver.com/common/btn/btn_close2.gif"/></a></div><div style="position:absolute;top:30px;left:10px;">{=text}</div><div style="position:absolute;bottom:10px;right:10px;"><button type="button" class="dialog-confirm">확인</button><button type="button" class="dialog-cancel">취소</button></div></div>');

oModalDialog.show({ text : "<strong>확인하시겠습니까?</strong>" }, {
	close : function(e) {
		jindo.$Element("status").text("oDialog의 레이어에서 닫기 버튼이 클릭되었습니다.");
		//e.stop() 수행시 레이어가 닫히지 않는다.
	},
	cancel : function(e) {
		jindo.$Element("status").text("oDialog의 레이어에서 취소 버튼이 클릭되었습니다.");
		//e.stop() 수행시 레이어가 닫히지 않는다.
	},
	confirm : function(e) {
		jindo.$Element("status").text("oDialog의 레이어에서 확인 버튼이 클릭되었습니다.");
		//e.stop() 수행시 레이어가 닫히지 않는다.
	}
});	
	 */
	show : function(htTemplateProcess, htEventHandler) {
		if (!this.isShown()) {
			this.attach(htEventHandler);
			
			document.body.appendChild(this._elLayer);
			this._welLayer.html(this._template.process(htTemplateProcess));
			
			var htCustomEvent = { elLayer : this._elLayer }; 
			
			if (this.fireEvent("beforeShow", htCustomEvent)) {
				this._welLayer.show();
				this._attachEvents();
				this.getLayerPosition().setPosition();
				this._bIsShown = true;
				this._oFoggy.show(this._elLayer);
			}
		}
	},
	
	/**
	 * 다이얼로그 레이어를 숨긴다.
	 * @remark 다이얼로그 레이어가 숨겨지는 동시에 모든 이벤트가 제거되고 document.body에서 제거된다.
	 */
	hide : function() {
		if (this.fireEvent("beforeHide", { elLayer : this._elLayer })) {
			this._oFoggy.hide();
		} 
	}
}).extend(jindo.Dialog);	