/**
 * @fileOverview 셀렉트박스의 디자인을 대체하기 위한 HTML Component
 * @version 1.0.4
 */
jindo.SelectBox = jindo.$Class({
	/** @lends jindo.SelectBox.prototype */
	sTagName : 'select',
	
	_bDisabled : false, 
	_sPrevValue : null, //select의 이전 값
	_nSelectedIndex : 0, //선택된 index
	_bRealFocused : false, //탭키 이동으로 실제로 포커스되었는지의 여부
	
	/**
	 * SelectBox 컴포넌트를 초기화한다.
	 * @constructs
	 * @class HTML Select 엘리먼트를 대체하여 디자인을 적용하는 컴포넌트
	 * @extends jindo.HTMLComponent
	 * @requires jindo.Timer
	 * @requires jindo.LayerManager
	 * @requires jindo.LayerPosition
	 * @requires jindo.RolloverClick
	 * @param {HTMLElement} el 기준엘리먼트
	 * @param {HashTable} htOption 옵션 객체
	 */
	$init : function(el, htOption) {
		this._aItemData = [];
		this._aListItem = [];
		this._aOptions = [];
		
		this.option({
			sClassPrefix : 'selectbox-', //Default Class Prefix
			nWidth : null,
			nHeight : null,
			bUseLayerPosition : true, //LayerPosition 컴포넌트로 위치 설정할지 여부
			aOptionHTML : [],
			aOptionLabel : [],
			LayerPosition : { //LayerPosition 컴포넌트에서 사용할 옵션
				sPosition : "outside-bottom", //목록의 위치. LayerPosition 컴포넌트에서 사용할 옵션
				sAlign : "left", //목록의 정렬. LayerPosition 컴포넌트에서 사용할 옵션
				nTop : 0, //선택박스와 목록의 상하 간격. LayerPosition 컴포넌트에서 사용할 옵션
				nLeft : 0 //선택박스와 목록의 좌우 간격. LayerPosition 컴포넌트에서 사용할 옵션
			},
			LayerManager : {
				sCheckEvent : "mousedown", // {String} 어떤 이벤트가 발생했을 때 레이어를 닫아야 하는지 설정
				nShowDelay : 20, //{Number} 보여주도록 명령을 한 뒤 얼마 이후에 실제로 보여질지 지연시간 지정 (ms)
				nHideDelay : 0 //{Number} 숨기도록 명령을 한 뒤 얼마 이후에 실제로 숨겨지게 할지 지연시간 지정 (ms)
			}
		});
		this.option(htOption || {});

		this._el = jindo.$(el);
		this._assignHTMLElements(); //컴포넌트에서 사용되는 HTMLElement들을 선언하는 메소드
		if(this.option("bUseLayerPosition")) {
			this._initLayerPosition();
		}
		this._initLayerManager();
		this._initRolloverClick();
		this._oTimer = new jindo.Timer();
		this._wfOnFocusSelect = jindo.$Fn(this._onFocusSelect, this);
		this._wfOnBlurSelect = jindo.$Fn(this._onBlurSelect, this);
		this._wfOnMouseDownBox = jindo.$Fn(this._onMouseDownBox, this);
		this._wfOnMouseDownList = jindo.$Fn(this._onMouseDownList, this);
		
		this._wfOnKeyDown = jindo.$Fn(this._onKeyDown, this);
		this._wfOnMouseWheel = jindo.$Fn(function(e){
			e.stop(jindo.$Event.CANCEL_DEFAULT);
			this._elLayer.scrollTop -= e.mouse().delta * 16;
		}, this); //ie6 에서 셀렉트박스에서 스크롤할 경우 선택값이 바뀌는 것을 방지하고 직접스크롤시키도록 수정
		
		this._oAgent = jindo.$Agent(); 
		this.activate(); //컴포넌트를 활성화한다.
	},

	/**
	 * 컴포넌트에서 사용되는 HTMLElement들을 선언하는 메소드
	 */
	_assignHTMLElements : function() {
		var sPrefix = this.option("sClassPrefix"),
			el = this._el;
			
		this._wel = jindo.$Element(el);
		this._elSelect	= jindo.$$.getSingle('select.' + sPrefix + 'source', el);
		this._sSelectInnerHTML = this._elSelect.innerHTML; //초기의 innerHtml을 구함
		this._elOptionDefault = jindo.$$.getSingle('option.' + sPrefix + 'default', el);
		this._elSelectOptionGroup	= jindo.$$.getSingle('select.' + sPrefix + 'source-option-group', el);
		this._elBox		= jindo.$$.getSingle('.' + sPrefix + 'box', el);
		this._elLabel	= jindo.$$.getSingle('.' + sPrefix + 'label', el);
		this._elLayer	= jindo.$$.getSingle('.' + sPrefix + 'layer', el);
		this._elList	= jindo.$$.getSingle('.' + sPrefix + 'list', el);
		this._elList.innerHTML = "";
		this._elSelectList	= jindo.$('<ul>');
		this._elList.insertBefore(this._elSelectList, this._elList.firstChild);
	},
	
	/**
	 * select 엘리먼트를 가져온다.
	 * @return {HTMLElement} 
	 */
	getSelectElement : function() {
		return this._elSelect;
	},
	
	/**
	 * box 엘리먼트(클래스명 "box")를 가져온다.
	 * @return {HTMLElement} 
	 */
	getBoxElement : function() {
		return this._elBox;
	},
	
	/**
	 * label 엘리먼트(클래스명 "label")를 가져온다.
	 * @return {HTMLElement} 
	 */
	getLabelElement : function() {
		return this._elLabel;
	},
	
	/**
	 * layer 엘리먼트(클래스명 "layer")를 가져온다.
	 * @return {HTMLElement} 
	 */
	getLayerElement : function() {
		return this._elLayer;
	},
	
	/**
	 * list 엘리먼트(클래스명 "list")를 가져온다.
	 * @return {HTMLElement} 
	 */
	getListElement : function() {
		return this._elList;
	},
	
	/**
	 * list 엘리먼트 내부의 실제 목록 ul 엘리먼트를 가져온다.
	 * @return {HTMLElement} 
	 */
	getSelectListElement : function() {
		return this._elSelectList;
	},
	
	_limitWidth : function() {
		var nWidth = this.option("nWidth");
		if (nWidth) {
			jindo.$Element(this.getBoxElement()).css({
				"width": nWidth + "px",
				"overflowX": "hidden"
			});
			jindo.$Element(this.getLayerElement()).css({
				"width": nWidth + "px",
				"overflowX": "hidden",
				"overflowY": "auto"
			});
		}
	},
	
	_limitHeight : function() {
		var nHeight = this.option("nHeight");
		if (nHeight) {
			var welLayer = jindo.$Element(this.getLayerElement()),
				elToMeasure = welLayer.$value().cloneNode(true),
				welToMeasure = jindo.$Element(elToMeasure),
				nLayerHeight;
				
			welToMeasure.opacity(0);
			welLayer.after(welToMeasure);
			welToMeasure.show();
			
			//layer size
			nLayerHeight = welToMeasure.height();
			welToMeasure.leave();
			
			if (nHeight < nLayerHeight) { //높이값 제한
				welLayer.css({
					"height": nHeight + "px",
					"overflowX": "hidden",
					"overflowY": "auto"
				});
			}
		}
	},
 	
	_initLayerManager : function() {
		var self = this,
			sPrefix = this.option("sClassPrefix"),
			elSelect = this.getSelectElement();
			
		this._oLayerManager = new jindo.LayerManager(this.getLayerElement(), this.option("LayerManager")).attach({
			beforeShow : function(oCustomEvent) {
				if(self.fireEvent("open")) {
					self._limitWidth();
					self._limitHeight();
					
					setTimeout(function(){ //focus때문에 delay
						try { elSelect.focus(); } catch(e) {}
					}, 10);
					self._wel.addClass(sPrefix + 'open');
					
					if (self.option("bUseLayerPosition")) {
						self.getLayerPosition().setPosition(); //레이어가 항상보이도록 포지셔닝을 LayerPosition에 위임
					}
				} else {
					oCustomEvent.stop();
				}
			},
			show : function(oCustomEvent) {
				self._paintSelected();
			},
			beforeHide : function(oCustomEvent) {
				if(self.fireEvent("close")) {
					self._wel.removeClass(sPrefix + 'open').removeClass(sPrefix + 'focused');
					setTimeout(function(){ //focus때문에 delay
						self.getSelectElement().blur();
					}, 10);
				} else {
					oCustomEvent.stop();
					setTimeout(function(){ //focus때문에 delay
						try { elSelect.focus(); } catch(e) {}
					}, 10);
				}
			}
		}).link(this.getBoxElement()).link(this.getLayerElement());
	},
	
	/**
	 * LayerManager 객체를 가져온다.
	 * @return {jindo.LayerManager}
	 */
	getLayerManager : function() {
		return this._oLayerManager;
	},
	
	_initRolloverClick : function() {
		var self = this,
			sPrefix = this.option("sClassPrefix");
		
		this._oRolloverClick = new jindo.RolloverClick(this.getSelectListElement(), {
			sCheckEvent : "mouseup",
			RolloverArea : {
				sClassName : sPrefix + "item",
				sClassPrefix : sPrefix + "item-"  
			}
		}).attach({
			over : function(oCustomEvent) {
				if (self._welOvered) {
					self._welOvered.removeClass(sPrefix + "item-over");	
				}
				var wel = jindo.$Element(oCustomEvent.element);
				wel.addClass(sPrefix + "item-over");
				self._welOvered = wel;
			},
			out : function(oCustomEvent) {
				oCustomEvent.stop();
			},
			click : function(oCustomEvent) {
				
				var nLastSelectedIndex = self._nSelectedIndex;
				var nSelectedIndex = -1;
				
				jindo.$A(self._aItemData).forEach(function(htData, nIndex){
					if (htData.elItem === oCustomEvent.element) {
						nSelectedIndex = nIndex;
						jindo.$A.Break();
					}
				});
				
				// click 이벤트 핸들러에서 stop 한경우 선택되지 않도록
				if (!self.fireEvent("click", {
					nIndex : nSelectedIndex,
					weEvent : oCustomEvent.weEvent
				})) {
					return;
				}
				
				if (nSelectedIndex !== -1) {
					self.setValue(self._aItemData[nSelectedIndex].sValue);
				}
				
				nSelectedIndex = self.getSelectedIndex();
				
				if (nSelectedIndex != nLastSelectedIndex) {
					jindo.$Element(self.getSelectElement()).fireEvent("change"); //이미 선언된 select의 onchange핸들러 수행을 위해 이벤트 트리거링
					self.fireEvent("change", { 
						nIndex : nSelectedIndex, 
						nLastIndex : nLastSelectedIndex 
					});	
				}
				
				if (!jindo.$Element(oCustomEvent.element).hasClass(sPrefix + "notclose")) {
					self.getLayerManager().hide(); //선택이 제대로 이뤄졌을 경우에 hide
				} 
			}
		});
	},
	
	/**
	 * RolloverClick 객체를 가져온다.
	 * @return {jindo.RolloverClick}
	 */
	getRolloverClick : function() {
		return this._oRolloverClick;
	},
	
	_initLayerPosition : function() {
		this._oLayerPosition = new jindo.LayerPosition(this.getBoxElement(), this.getLayerElement(), this.option("LayerPosition"));
	},
	
	/**
	 * LayerPosition 객체를 가져온다.
	 * @return {jindo.LayerPosition}
	 */
	getLayerPosition : function() {
		return this._oLayerPosition;
	},

	/**
	 * 컴포넌트를 활성화한다.
	 */
	_onActivate : function() {
		var sPrefix = this.option("sClassPrefix"),
			elSelect = this.getSelectElement();
		
		this._limitWidth();	
		this._wel.removeClass(sPrefix + "noscript");
		jindo.$Element.prototype.preventTapHighlight && jindo.$Element(this.getListElement()).preventTapHighlight(true);
		this._wfOnFocusSelect.attach(elSelect, "focus");
		this._wfOnBlurSelect.attach(elSelect, "blur");
		this._wfOnMouseDownBox.attach(this.getBoxElement(), "mousedown");
		this._wfOnMouseDownList.attach(this.getListElement(), "mousedown");
		this._wfOnKeyDown.attach(elSelect, "keydown");
		this._wfOnMouseWheel.attach(elSelect, "mousewheel"); 
		
		this.paint();
		this._sPrevValue = this.getValue();
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 */
	_onDeactivate : function() {
		this.getLayerManager().hide();
		var sPrefix = this.option("sClassPrefix"),
			elSelect = this.getSelectElement();
			
		this._wel.addClass(sPrefix + "noscript");
		jindo.$Element.prototype.preventTapHighlight && jindo.$Element(this.getListElement()).preventTapHighlight(false);
		this._wfOnFocusSelect.detach(elSelect, "focus");
		this._wfOnBlurSelect.detach(elSelect, "blur");
		this._wfOnMouseDownBox.detach(this.getBoxElement(), "mousedown");
		this._wfOnMouseDownList.detach(this.getListElement(), "mousedown");
		this._wfOnKeyDown.detach(elSelect, "keydown");
		this._wfOnMouseWheel.detach(elSelect, "mousewheel");
	},
	
	/**
	 * text값에 대한 option의 value를 가져온다.
	 * @param {String} sText
	 * @return {String}
	 */
	getValueOf : function (sText) {
		for (var i = 0, oItemData; (oItemData = this._aItemData[i]); i++) {
			if (oItemData.sText == sText) {
				return oItemData.sValue;
			}
		}
		return null;
	},
	
	/**
	 * Select의 value를 가져온다.
	 * @return {String}
	 */
	getValue : function() {
		return this.getSelectElement().value;
	},
	
	/**
	 * Select의 text를 가져온다.
	 * @return {String}
	 */
	getText : function() {
		return this._aItemData[this._nSelectedIndex].sText;
	},
	
	/**
	 * Select의 html를 가져온다.
	 * 옵션의 aOptionHTML을 설정한 경우에 리턴값을 가진다.
	 * @return {String}
	 */
	getHTML : function() {
		return this.getLabelElement().innerHTML;
	},
	
	/**
	 * SelectBox의 value를 설정한다.
	 * @param {String} sValue 
	 */
	setValue : function(sValue) {
		this.getSelectElement().value = sValue;
		this._sPrevValue = this.getValue();
		this._paint();
	},

	/**
	 * 선택된 index를 가져온다.
	 * @return {Number}
	 */
	getSelectedIndex : function() {
		return this.getSelectElement().selectedIndex;		
	},

	/**
	 * nIndex번째 옵션을 선택한다.
	 * disabled 된것에 대해 처리한다.
	 * @param {Object} nIndex
	 */
	setSelectedIndex : function(nIndex, bFireEvent) {
		if (typeof bFireEvent == "undefined") {
			bFireEvent = true;
		}
		
		if (this._isSelectable(nIndex)) {
			var nLastSelectedIndex = this.getSelectedIndex();
			this._setSelectedIndex(nIndex);
			this._paint();
			
			if (bFireEvent && nLastSelectedIndex != nIndex) {
				this.fireEvent("change", { nIndex : nIndex, nLastIndex : nLastSelectedIndex });	
			}
			return true;
		}
		return false;
	},
	
	_setSelectedIndex : function(nIndex) {
		this.getSelectElement().selectedIndex = nIndex; //선택된 index는 이메소드를 그릴때 정의
	},
	
	_isSelectable : function(nIndex) {
		var htItem = this._aItemData[nIndex];
		if (!htItem || htItem.bDisabled || htItem.bDefault) {
			return false;
		} else {
			return true;
		}
	},

	/**
	 * Select의 option 엘리먼트들을 가져온다.
	 * @return {Array}
	 */
	getOptions : function() {
		return this._aOptions;
	},
	
	/**
	 * List내의 아이템 엘리먼트(li)들을 가져온다.
	 * @return {Array}
	 */
	getListItems : function() {
		return this._aListItem;
	},
	
	/**
	 * 셀렉트박스가 disabled 되었는지 여부를 가져온다.
	 */
	getDisabled : function() {
		return this._bDisabled;
	},
	
	/**
	 * 보여질 옵션 그룹을 설정한다.
	 * source 엘리먼트 내에 &lt;option class="selectbox-default"&gt; 엘리먼트가 선언되어있어야한다.
	 * 옵션 그룹을 설정하기 위해 기본으로 설정된 source-option-group 셀렉트 엘리먼트가 선언되어있어야한다. 
	 * option 중 지정된 옵션 그룹명(option-group-그룹명)을 가진 엘리먼트만 보여진다.
	 * @param {String} sName 옵션 그룹 명
	 * @return {Boolean} 설정 완료 여부
	 * @example
<!-- 수행 전 구조 -->
<div>
	<select class="selectbox-source">
   		<option value="0" class="selectbox-default">팀을 선택하세요</option>
   	</select>
	<select class="selectbox-source-option-group"> <!--옵션 그룹을 설정하기 위한 보이지 않는 select-->
   		<option value="1" class="selectbox-option-group-1">Ajax UI1팀</option>
   		<option value="2" class="selectbox-option-group-1">Ajax UI2팀</option>
		<option value="3" class="selectbox-option-group-1">Ajax UI3팀</option>
		<option value="4" class="selectbox-option-group-1">Ajax UI4팀</option>
		<option disabled="disabled" class="selectbox-option-group-1">----------------------</option>
		<option value="5" class="selectbox-option-group-1">SPSUI TF</option>
		<option value="6" class="selectbox-option-group-2">플래시UI1팀</option>	
   		<option value="7" class="selectbox-option-group-2">플래시UI2팀</option>
		<option disabled="disabled" class="selectbox-option-group-2">----------------------</option>
		<option value="8" class="selectbox-option-group-2">RIA기술팀</option>
		<option value="9" class="selectbox-option-group-3">UI기술기획팀</option>
		<option value="10" class="selectbox-option-group-3">웹표준화팀</option>
		<option value="11" class="selectbox-option-group-3">오픈UI기술팀</option>
		<option value="12" class="selectbox-option-group-3">인터널서비스</option>
   	</select>
	<div class="selectbox-box">
		<div class="selectbox-label">팀을 선택하세요</div>
	</div>
	<div class="selectbox-layer">
		<div class="selectbox-list"><ul style="height: auto;"/></div>
	</div>
</div>

setOptionGroup("1")

<!-- 수행 후 구조 -->
<div>
	<select class="selectbox-source">
   		<option value="0" class="selectbox-default">팀을 선택하세요</option>
   		<option value="1" class="selectbox-option-group-1">Ajax UI1팀</option>
   		<option value="2" class="selectbox-option-group-1">Ajax UI2팀</option>
		<option value="3" class="selectbox-option-group-1">Ajax UI3팀</option>
		<option value="4" class="selectbox-option-group-1">Ajax UI4팀</option>
		<option disabled="disabled" class="selectbox-option-group-1">----------------------</option>
		<option value="5" class="selectbox-option-group-1">SPSUI TF</option>
	</select>
	<select class="selectbox-source-option-group"> <!--옵션 그룹을 설정하기 위한 보이지 않는 select-->
   		<option value="1" class="selectbox-option-group-1">Ajax UI1팀</option>
   		<option value="2" class="selectbox-option-group-1">Ajax UI2팀</option>
		<option value="3" class="selectbox-option-group-1">Ajax UI3팀</option>
		<option value="4" class="selectbox-option-group-1">Ajax UI4팀</option>
		<option disabled="disabled" class="selectbox-option-group-1">----------------------</option>
		<option value="5" class="selectbox-option-group-1">SPSUI TF</option>
		<option value="6" class="selectbox-option-group-2">플래시UI1팀</option>	
   		<option value="7" class="selectbox-option-group-2">플래시UI2팀</option>
		<option disabled="disabled" class="selectbox-option-group-2">----------------------</option>
		<option value="8" class="selectbox-option-group-2">RIA기술팀</option>
		<option value="9" class="selectbox-option-group-3">UI기술기획팀</option>
		<option value="10" class="selectbox-option-group-3">웹표준화팀</option>
		<option value="11" class="selectbox-option-group-3">오픈UI기술팀</option>
		<option value="12" class="selectbox-option-group-3">인터널서비스</option>
   	</select>
	<div class="selectbox-box">
		<div class="selectbox-label">팀을 선택하세요</div>
	</div>
	<div class="selectbox-layer">
		<div class="selectbox-list">
			<ul>
				<li class="selectbox-item">Ajax UI1팀</li>
				<li class="selectbox-item">Ajax UI2팀</li>
				<li class="selectbox-item">Ajax UI3팀</li>
				<li class="selectbox-item">Ajax UI4팀</li>
				<li class="selectbox-item-disabled">----------------------</li>
				<li class="selectbox-item">SPSUI TF</li>
			</ul>
		</div>
	</div>
</div>
	 */
	setOptionGroup : function(sName) {
		if (!this._elSelectOptionGroup || !this._elOptionDefault) {
			return false;
		}
		
		var elSelect = this.getSelectElement(),
			sPrefix = this.option('sClassPrefix'),
			aGroupOption = jindo.$$("." + sPrefix + "option-group-" + sName, this._elSelectOptionGroup),
			elOptionDefault = this._elOptionDefault = this._elOptionDefault.cloneNode(true);
		
		elSelect.innerHTML = "";
		elSelect.appendChild(elOptionDefault);
		this._nSelectedIndex = 0; 
		for (var i = 0; i < aGroupOption.length; i++) {
			elSelect.appendChild(aGroupOption[i].cloneNode(true));
		}
		this._sPrevValue = this.getValue();
		
		this.paint();
		return true;
	},
	
	/**
	 * 선택된 값이 있는지 여부를 가져온다.
	 * Default 옵션이 선택된 경우에 false를 리턴한다.
	 */
	isSelected : function() {
		return !this._aItemData[this.getSelectedIndex()].bDefault;
	},
	
	/**
	 * 선택된 값을 초기화하여 default값으로 되돌린다.
	 */
	setDefault : function() {
		var nDefaultOption = -1;
			
		jindo.$A(this._aItemData).forEach(function(o, i) {
			if (o.bDefault || o.bSelected) {
				nDefaultOption = i;	
			}
		});
		
		if (nDefaultOption < 0) { //default나 selected="selected" 된거 없으면 첫번째 옵션이 default 
			nDefaultOption = 0;
		} 
		
		this._nSelectedIndex = nDefaultOption;
		this._setSelectedIndex(nDefaultOption);
		this._sPrevValue = this.getValue();
		
		this._paint();
	},
	
	/**
	 * 셀렉트박스를 다시 그린다.
	 */
	paint : function() {
		this._paintList();
		this._paintSelected();
		this._paintLabel();
		this.getLayerManager().setLayer(this.getLayerElement());
	},
	
	/**
	 * 타이머로 체크하여 계속 다시 그림
	 * @ignore
	 */
	_paint : function() {
		this._paintSelected();
		this._paintLabel();
	},
	
	/**
	 * 현재 설정된 값을 box의 label에 그린다.
	 * @ignore
	 */
	_paintLabel : function() {
		var welLabel = jindo.$Element(this.getLabelElement()),
			sHTML = this.option("aOptionHTML")[this._nSelectedIndex] || "",
			sLabel = this.option("aOptionLabel")[this._nSelectedIndex] || "",
			sText = this.getText();
			
		if (sHTML) {
			if (sLabel) {
				welLabel.html(sLabel);
			} else {
				welLabel.html(sHTML);
			}
		} else {
			welLabel.text(sText);
		}
		welLabel.attr("unselectable", "on");
	},
	
	/**
	 * 현재 설정된 값을 list에 그린다.
	 * @ignore
	 */
	_paintList : function() {
		var sPrefix = this.option('sClassPrefix');
		this._aOptions = jindo.$$('option', this.getSelectElement());
		var aOptions = this._aOptions;
		this._aItemData = [];
		this._aListItem = [];
		
		this._nSelectedIndex = 0; 
		var elList = this.getSelectListElement();
		elList.innerHTML = "";
		if (this.option("nHeight")) { /* 높이값 되돌리기 */
			jindo.$Element(this.getLayerElement()).css("height", "auto");
		}
		
		for (var i = 0, elOption; (elOption = aOptions[i]); i++) {
			var welOption = jindo.$Element(elOption),
				bDefault = welOption.hasClass(sPrefix + 'default'),
				bSelected = welOption.attr("selected") == "selected",
				bDisabled = bDefault || elOption.disabled,
				sHTML = this.option("aOptionHTML")[i] || "",
				sText = welOption.text() || "",
				sValue = welOption.attr("value");
				
			if (!sValue) {
				welOption.attr("value", sText);
				sValue = sText;
			}
			
			this._aItemData[i] = {
				elOption : elOption,
				elItem : null,
				sHTML : sHTML,
				sText : sText,
				sValue : sValue,
				
				bDisabled : bDisabled,
				bSelected : bSelected,
				bDefault : bDefault
			};
			
			// <li> 태그 만들기
			var elItem = null,
				htItem = this._aItemData[i];
				
			if (!htItem.bDefault) {
				elItem = jindo.$('<li>');
				// <option> 에 적용된 스타일 그대로 적용하기
				elItem.style.cssText = htItem.elOption.style.cssText;
				elItem.className = htItem.elOption.className;
				var welItem = jindo.$Element(elItem);
				if (htItem.sHTML) {
					welItem.html(htItem.sHTML);
				} else {
					welItem.text(htItem.sText);
				}
				welItem.attr("unselectable", "on");
				
				if (htItem.bDisabled) {
					welItem.addClass(sPrefix + 'item-disabled');
				}
				else {
					welItem.addClass(sPrefix + 'item'); //구분선이 아닐경우만
				}
				
				elList.appendChild(elItem);
				this._aListItem.push(elItem);
				this._aItemData[i].elItem = elItem;
			}
			
		}
		if (this._aListItem.length === 0) {
			this.disable();
			return;
		}
		this.enable();
	},
	
	/**
	 * 레이어가 열리면, 현재 선택된 아이템을 하이라이팅하고 scrollTop을 보정
	 * @ignore
	 */
	_paintSelected : function() {
		var sPrefix = this.option('sClassPrefix'),
			n = this.getSelectedIndex(),
			htItem,
			nPrevSelectedIndex = this._nSelectedIndex;
			
		if (this._welSelected) {
			this._welSelected.removeClass(sPrefix + "item-selected");
			this._welSelected = null;
		}
		if (this._welOvered) {
			this._welOvered.removeClass(sPrefix + "item-over");
			this._welOvered = null;
		}
		
		this._nSelectedIndex = n; //선택된 index는 이메소드를 그릴때 정의
		htItem = this._aItemData[n];
		if (htItem.elItem) {
			var elSelected = htItem.elItem,
				welSelected = jindo.$Element(elSelected);
				
			this._welSelected = this._welOvered = welSelected;
			welSelected.addClass(sPrefix + "item-selected").addClass(sPrefix + "item-over");	
			
			if (this.isLayerOpened()) {
				var elLayerElement = this.getLayerElement();
				var nHeight = parseInt(jindo.$Element(elLayerElement).css("height"), 10),
					nOffsetTop = elSelected.offsetTop,
					nOffsetHeight = elSelected.offsetHeight,
					nScrollTop = elLayerElement.scrollTop,
					bDown;
				
				if (nPrevSelectedIndex < n) {
					bDown = true;
				} else {
					bDown = false;
				}
				if (nOffsetTop < nScrollTop || nOffsetTop > nScrollTop + nHeight) {
					elLayerElement.scrollTop = nOffsetTop;
				}
				if (bDown) {
					if (nOffsetTop + nOffsetHeight > nHeight + nScrollTop) {
						elLayerElement.scrollTop = (nOffsetTop + nOffsetHeight - nHeight);
					}
				} else {
					if (nOffsetTop < nScrollTop) {
						elLayerElement.scrollTop = nOffsetTop;
					}
				}
			}
		}
	},
	
	/**
	 * Select 레이어가 열려있는지 여부를 가져온다.
	 * @return {Boolean}
	 */
	isLayerOpened : function() {
		return this.getLayerManager().getVisible();	
	},
	
	/**
	 * SelectBox를 disable 시킨다.
	 * 마우스로 클릭하더라도 목록 레이어가 펼쳐지지 않는다.
	 */
	disable : function() {
		this.getLayerManager().hide();
		var sPrefix = this.option("sClassPrefix");
		this._wel.addClass(sPrefix + 'disabled');
		this.getSelectElement().disabled = true;
		this._bDisabled = true;
	},
	
	/**
	 * SelectBox를 enable 시킨다.
	 */
	enable : function() {
		var sPrefix = this.option("sClassPrefix");
		this._wel.removeClass(sPrefix + 'disabled');
		this.getSelectElement().disabled = false;
		this._bDisabled = false;
	},
	
	/**
	 * 레이어를 연다.
	 * @return {this}
	 */
	open : function() {
		if (!this._bDisabled) {
			this.getLayerManager().show();
		}
		return this;
	},
	
	/**
	 * 레이어를 닫는다.
	 * @return {this}
	 */
	close : function() {
		this.getLayerManager().hide();
		return this;
	},
	
	_onMouseDownBox : function(we){
		we.stop(jindo.$Event.CANCEL_DEFAULT);
		if (!this._bDisabled) {
			this.getLayerManager().toggle();
		}
	},
	
	_onMouseDownList : function(we){
		if (!jindo.$$.getSingle("! ." + this.option("sClassPrefix") + "notclose", we.element)) {
			we.stop(jindo.$Event.CANCEL_DEFAULT);
		}
	},
	
	/**
	 * 현재 index로부터 선택가능한 다음 index를 구한다.
	 * @param {Number} nIndex
	 * @param {Number} nTarget
	 * @ignore
	 */
	_getSelectableIndex : function(nIndex, nDirection, nTargetIndex) {
		var nFirst = -1,
			nLast = this._aItemData.length - 1,
			i;
		
		for (i = 0; i < this._aItemData.length; i++) {
			if (this._isSelectable(i)) {
				if (nFirst < 0) {
					nFirst = i;	
				}
				else {
					nLast = i;
				}
			}
		}
		
		switch (nDirection) {
			case -1 :
				if (nIndex == nFirst) {
					return nIndex;
				}
				for (i = nIndex - 1; i > nFirst; i--) {
					if (this._isSelectable(i)) {
						return i;
					}					
				}
				return nFirst;
			
			case 1 :
				if (nIndex == nLast) {
					return nIndex;
				}
				for (i = nIndex + 1; i < nLast; i++) {
					if (this._isSelectable(i)) {
						return i;
					}					
				}
				return nLast;
			
			case Infinity :
				return nLast;
			
			case -Infinity :
				return nFirst;
		}
	},
	
	_onKeyDown : function(we){
		var htKey = we.key();
		
		if ((this._oAgent.os().mac && this._oAgent.navigator().safari) || (this._oAgent.navigator().ie && this._oAgent.navigator().version == 6)) {
			var nKeyCode = htKey.keyCode;
			if (nKeyCode != 9) {
				//mac용 사파리에서는 select에서의 keydown을 중단. tab 제외
				we.stop(jindo.$Event.CANCEL_DEFAULT);
			}
			var nSelectedIndex = this.getSelectedIndex(),
				nTargetIndex = nSelectedIndex;
				
			// 콤보박스에서 발생한 이벤트도 처리하는 경우
			switch (nKeyCode) {
				case 37: // LEFT:
					nTargetIndex = this._getSelectableIndex(nSelectedIndex, -1);
					break;
					
				case 38: // UP:
					nTargetIndex = this._getSelectableIndex(nSelectedIndex, -1);
					break;
				
				case 39: // RIGHT
					nTargetIndex = this._getSelectableIndex(nSelectedIndex, 1);
					break;
					
				case 40: // DOWN
					nTargetIndex = this._getSelectableIndex(nSelectedIndex, 1);
					break;
					
				case 33: // PGUP
					nTargetIndex = this._getSelectableIndex(nSelectedIndex, -Infinity);
					break;
					
				case 34: // PGDN
					nTargetIndex = this._getSelectableIndex(nSelectedIndex, Infinity);
					break;
				case 13: // ENTER
					this.getLayerManager().hide();
					break;
				case 9 : // TAB
					this.getLayerManager().hide();
					break;	
			}
			
			var oParam = {
				nIndex: nTargetIndex,
				nLastIndex: parseInt(this._nSelectedIndex, 10)
			};
			
			this._setSelectedIndex(nTargetIndex);
			this._paint();
			if (oParam.nIndex != oParam.nLastIndex) {
				this.fireEvent("change", oParam);	
			}
		} else {
			if(this.isLayerOpened() && (htKey.enter || htKey.keyCode == 9)) {
				this.getLayerManager().hide();
			}
		}
	},
	
	_onFocusSelect : function(we){
		var sPrefix = this.option('sClassPrefix'),
			wel = this._wel;
			 
		if(!this.isLayerOpened()) {
			if (this.fireEvent("focus")) {
				this._bRealFocused = true;	
			} else {
				this.getSelectElement().blur();
				return;
			}
		}
		wel.addClass(sPrefix + 'focused');	
		
		//mac용 사파리에서는 타이머 돌지 않음
		if (!(this._oAgent.os().mac && this._oAgent.navigator().safari)) {
			var self = this;
			this._oTimer.start(function(){
			
				var sValue = self.getValue();
				if (!!self._sPrevValue && self._sPrevValue != sValue) {
					var nSelectedIndex = self.getSelectElement().selectedIndex;
					//Disable default는 다시 선택되지 않도록. ie는 선택이되네..
					if (!self._isSelectable(nSelectedIndex)) {
						var nDiff = -(self._nSelectedIndex - nSelectedIndex);
						nDiff = (nDiff > 0) ? 1 : -1;
						self._setSelectedIndex(self._getSelectableIndex(self._nSelectedIndex, nDiff, nSelectedIndex));
						return true;
					}
					
					var oParam = {
						nIndex: nSelectedIndex,
						nLastIndex: parseInt(self._nSelectedIndex, 10)
					};
					
					self._paint();
					if (oParam.nIndex != oParam.nLastIndex) {
						self.fireEvent("change", oParam);	
					}
					
					self._sPrevValue = sValue;
				}
				
				return true;
			}, 10);
		}
	},
	
	_onBlurSelect : function(we){
		var self = this,
			sPrefix = this.option('sClassPrefix');
			
		if (this._bRealFocused) { //레이어가 오픈되지 않고 focus되었던 경우에만 blur 발생
			this.fireEvent("blur");
			this._wel.removeClass(sPrefix + 'focused');
			this._bRealFocused = false;
		}
		setTimeout(function(){
			self._oTimer.abort();	
		}, 10); //마우스로 선택된것도 체크되도록
	}
}).extend(jindo.HTMLComponent);	