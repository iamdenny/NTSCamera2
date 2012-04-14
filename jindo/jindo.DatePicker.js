/**
 * @fileOverview Calendar 컴포넌트를 사용하여 Text Input Control에 특정 형식의 날짜입력을 클릭만으로 입력할 수 있게 하는 컴포넌트
 * @version 1.0.4
 */
jindo.DatePicker = jindo.$Class({
	/** @lends jindo.DatePicker.prototype */
	
	_aDatePickerSet : null,
	_htSelectedDatePickerSet : null, //클릭된 엘리먼트에 대한 DatePickerSet
	
	/**
	 * DatePicker 컴포넌트를 초기화한다.
	 * Calendar 컴포넌트를 통해 출력된 달력의 날짜 선택으로 Input의 값을 입력한다.
	 * @constructs
	 * @class 달력을 통해 Input Form에 날짜를 입력하기 위한 날짜선택 컴포넌트
	 * @extends jindo.UIComponent
	 * @requires jindo.Calendar
	 * @requires jindo.LayerManager
	 * @requires jindo.LayerPosition
	 * @param {HTMLElement} elCalendarLayer 달력을 출력할 레이어 엘리먼트 혹은 id 
	 * @param {htOption} htOption 초기화 옵션 설정을 위한 객체.
	 */	
	$init : function(elCalendarLayer, htOption) {
		var oDate = new Date();
		this.option({
			bUseLayerPosition : true, //LayerPosition을 사용해서 포지셔닝을 할지의 여부
			
			Calendar : { //Calendar를 위한 옵션
				sClassPrefix : "calendar-", //Default Class Prefix
				nYear : oDate.getFullYear(),
				nMonth : oDate.getMonth() + 1,
				nDate : oDate.getDate(),			
				sTitleFormat : "yyyy-mm", //달력의 제목부분에 표시될 형식
				aMonthTitle : ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"] //월 이름
			},
			
			LayerManager : { //LayerManager를 위한 옵션
				sCheckEvent : "click",
				nShowDelay : 0, 
				nHideDelay : 0
			},
			
			LayerPosition : { //LayerPosition을 위한 옵션
				sPosition: "outside-bottom",
				sAlign: "left",
				nTop: 0,
				nLeft: 0,
				bAuto: false
			}
		});
		this.option(htOption);
		
		this._aDatePickerSet = [];
		this._elCalendarLayer = jindo.$(elCalendarLayer);
		this._initCalendar();
		this._initLayerManager();
		this._initLayerPosition();	
		
		this._wfFocusInput = jindo.$Fn(this._onFocusInput, this);
		this._wfClickLinkedElement = jindo.$Fn(this._onClickLinkedElement, this);
		this._wfMouseOverDate = jindo.$Fn(this._onMouseOverDate, this);
		this._wfMouseOutDate = jindo.$Fn(this._onMouseOutDate, this);
		this._wfClickDate = jindo.$Fn(this._onClickDate, this);
		
		this.activate(); //컴포넌트를 활성화한다.
	},
	
	/**
	 * DatePicker를 적용할 셋을 추가한다.
	 * @param {HashTabel} ht
	 * @return {this} this
	 * @example
oDatePicker.addDatePickerSet({
	elInput : jindo.$("input"), //날짜가 입력될 input 엘리먼트
	elButton : jindo.$("button"), //input외에도 달력을 보이게 할 엘리먼트
	elLayerPosition : jindo.$("input"), //LayerPosition 컴포넌트로 자동으로 위치 조절시 기준이 되는 엘리먼트 (생략시 elInput이 디폴트)
	htOption : {
		nYear : 1983, //기본으로 설정될 연도
		nMonth : 5, //기본으로 설정될 월
		nDate : 12, //기본으로 설정될 일
		
		bDefaultSet : true, //true이면 기본 Input 값을 설정한다. false이면 설정하지 않는다.
		bReadOnly : true, //true이면 input에 직접 값을 입력하지 못한다.
		sDateFormat : "yyyy-mm-dd", //input에 입력될 날짜의 형식
		htSelectableDateFrom : { //선택가능한 첫 날짜
			nYear : 1900,
			nMonth : 1,
			nDate : 1				
		},
		htSelectableDateTo : { //선택가능한 마지막 날짜
			nYear : 2100,
			nMonth : 12,
			nDate : 31
		}
	}
});
	 */
	addDatePickerSet : function(ht) {
		var htOption = this.option(),
			htCalendarOption = this.getCalendar().option(),
			htDefaultOption = {
				nYear : htCalendarOption.nYear,
				nMonth : htCalendarOption.nMonth,
				nDate : htCalendarOption.nDate,
				bDefaultSet : true,
				bReadOnly : true, //true이면 input에 직접 값을 입력하지 못한다.
				sDateFormat : "yyyy-mm-dd", //input에 입력될 날짜의 형식
				htSelectableDateFrom : { //선택가능한 첫 날짜
					nYear : 1900,
					nMonth : 1,
					nDate : 1				
				},
				htSelectableDateTo : { //선택가능한 마지막 날짜
					nYear : 2100,
					nMonth : 12,
					nDate : 31
				}
			};
			
		if (typeof ht.htOption != "undefined") {
			//빈 값은 기본값으로 셋팅해줌.
			for (var value in ht.htOption) {
				if (typeof htDefaultOption[value] != "undefined") {
					htDefaultOption[value] = ht.htOption[value]; 
				}
			}
		} 	
		ht.htOption = htDefaultOption;
		
		this._aDatePickerSet.push(ht);
		
		var oLayerManager = this.getLayerManager();
		if (typeof ht.elInput != "undefined") {
			oLayerManager.link(ht.elInput);
			if (ht.htOption.bReadOnly) {
				ht.elInput.readOnly = true;
			}
			this._wfFocusInput.attach(ht.elInput, "focus");
			this._wfClickLinkedElement.attach(ht.elInput, "click");
		}
		
		if (typeof ht.elButton != "undefined") {
			oLayerManager.link(ht.elButton);
			this._wfClickLinkedElement.attach(ht.elButton, "click");
		}
		
		if (ht.htOption.bDefaultSet) {
			this._setDate(ht, ht.htOption);
		}
		return this;	
	},
	
	/**
	 * DatePicker를 적용할 셋을 제거한다.
	 * @param {HashTable} ht
	 * @return {this} this
	 * @example
oDatePicker.removeDatePickerSet({
	elInput : jindo.$("input"), //날짜가 입력될 input 엘리먼트
	elButton : jindo.$("button") //input외에도 달력을 보이게 할 엘리먼트 (생략가능)
})
	 */
	removeDatePickerSet : function(ht) {
		var nIndex = -1;
		for (var i = 0, len = this._aDatePickerSet.length ; i < len; i++) {
			if (this._aDatePickerSet[i].elInput == ht.elInput || this._aDatePickerSet[i].elButton == ht.elButton) {
				nIndex = i;
				break;				
			}
		}
		
		var htDatePickerSet = this._aDatePickerSet[nIndex];
		var oLayerManager = this.getLayerManager();
		if (typeof htDatePickerSet.elButton != "undefined") {
			oLayerManager.unlink(htDatePickerSet.elButton);
			this._wfClickLinkedElement.detach(htDatePickerSet.elButton, "click");
		}
		
		if (typeof htDatePickerSet.elInput != "undefined") {
			this._wfFocusInput.detach(htDatePickerSet.elInput, "focus");
			this._wfClickLinkedElement.detach(htDatePickerSet.elInput, "click");
			htDatePickerSet.elInput.readOnly = false;
		}
		if (htDatePickerSet == this._htSelectedDatePickerSet) {
			this._htSelectedDatePickerSet = null;
		}		
		this._aDatePickerSet.splice(i, 1);
		
		return this;
	},
	
	/**
	 * 추가된 DatePickerSet의 배열을 가져온다.
	 * 파라메터로 엘리먼트가 전달될 경우 해당 엘리먼트가 속하는 DatePickerSet를 리턴한다. 
	 * @param {HTMLElement} el
	 * @return {Array | Object}
	 */
	getDatePickerSet : function(el) {
		if(typeof el == "undefined") {
			return this._aDatePickerSet;
		}
		
		for (var i = 0, len = this._aDatePickerSet.length; i < len; i++) {
			if (this._aDatePickerSet[i].elInput == el || this._aDatePickerSet[i].elButton == el) {
				return this._aDatePickerSet[i];				
			}
		}
		return false;
	},
	
	/**
	 * 달력레이어를 가져온다.
	 * @return {HTMLElement}
	 */
	getCalendarLayer : function() {
		return this._elCalendarLayer;
	},
	
	_initCalendar : function() {
		/**
		 * 달력 오브젝트
		 * @type Object jindo.Calendar 컴포넌트 
		 * @see jindo.Calendar
		 */
		var self = this;
		this._oCalendar = new jindo.Calendar(this.getCalendarLayer(), this.option("Calendar")).attach({
			beforeDraw : function(oCustomEvent) {
				if(!self.fireEvent("beforeDraw", oCustomEvent)) {
					oCustomEvent.stop();
				}
			},
			draw : function(oCustomEvent) {
				//선택한 날짜 class명 부여
				var sClassPrefix = this.option("sClassPrefix");
				var oShowDatePickerSet = self._htSelectedDatePickerSet;
				
				if (self.isSelectable(oShowDatePickerSet, oCustomEvent)) {
					oCustomEvent.bSelectable = true;
					if (jindo.Calendar.isSameDate(oCustomEvent, oShowDatePickerSet)) {
						jindo.$Element(oCustomEvent.elDateContainer).addClass(sClassPrefix + "selected");
					}
				} else {
					oCustomEvent.bSelectable = false;
					jindo.$Element(oCustomEvent.elDateContainer).addClass(this.option("sClassPrefix") + "unselectable");
				}
				
				if(!self.fireEvent("draw", oCustomEvent)) {
					oCustomEvent.stop();
				}
			},
			afterDraw : function(oCustomEvent) {
				self.fireEvent("afterDraw", oCustomEvent);
			}
		});
	},
	
	/**
	 * Calendar 객체를 가져온다.
	 * @return {jindo.Calendar}
	 * @see jindo.Calendar
	 */
	getCalendar : function() {
		return this._oCalendar;
	},
	
	_initLayerManager : function() {
		var self = this;
		var elCalendarLayer = this.getCalendarLayer();
		this._oLayerManager = new jindo.LayerManager(elCalendarLayer, this.option("LayerManager")).attach({
			hide : function(oCustomEvent) {
				self._htSelectedDatePickerSet = null;
			}
		}).link(elCalendarLayer);
	},

	/**
	 * LayerManager 객체를 가져온다.
	 * @return {jindo.LayerManager}
	 */	
	getLayerManager : function() {
		return this._oLayerManager;
	},
	
	_initLayerPosition : function() {
		if (this.option("bUseLayerPosition")) {
			this._oLayerPosition = new jindo.LayerPosition(null, this.getCalendarLayer(), this.option("LayerPosition"));
		}
	},
	
	/**
	 * LayerPosition 객체를 가져온다.
	 * @return {jindo.LayerPosition}
	 */
	getLayerPosition : function() {
		return this._oLayerPosition;
	},
	
	/**
	 * DatePickerSet에 해당하는 elInput 엘리먼트를 가져온다.
	 * 파라메터가 없는 경우에는 현재포커스된 Input을 리턴하고 포커스된 Input이 없는 경우 null을 리턴한다.
	 * @param {HashTable} htDatePickerSet
	 * @return {HTMLElement}  
	 */
	getInput : function(htDatePickerSet) {
		if (typeof htDatePickerSet != "undefined") {
			return htDatePickerSet.elInput || null;
		}
		if (this._htSelectedDatePickerSet) {
			return this._htSelectedDatePickerSet.elInput || null;
		}
		return null;
	},
	
	/**
	 * 선택된 날짜를 가져온다.
	 * @param {HashTable} htDatePickerSet
	 * @return {HashTable} 
	 */
	getDate : function(htDatePickerSet) {
		return {
			nYear : htDatePickerSet.nYear,
			nMonth : htDatePickerSet.nMonth,
			nDate : htDatePickerSet.nDate 
		};
	},
	
	_setDate : function(htDatePickerSet, htDate) {
		htDatePickerSet.nYear = htDate.nYear * 1;
		htDatePickerSet.nMonth = htDate.nMonth * 1;
		htDatePickerSet.nDate = htDate.nDate * 1;
		if (typeof htDatePickerSet.elInput != "undefined") {
			htDatePickerSet.elInput.value = this._getDateFormat(htDatePickerSet, htDate);
		}
	},
	
	/**
	 * 선택가능한 날짜인지 확인한다.
	 * @param {HashTable} htDatePickerSet
	 * @param {HashTable} htDate
	 */
	isSelectable : function(htDatePickerSet, htDate) {
		return jindo.Calendar.isBetween(htDate, htDatePickerSet.htOption["htSelectableDateFrom"], htDatePickerSet.htOption["htSelectableDateTo"]);
	},
	
	/**
	 * 날짜를 선택한다.
	 * DatePickerSet에 elInput이 있는 경우 형식에 맞는 날짜값을 설정한다.
	 * @param {HashTable} htDatePickerSet
	 * @param {HashTable} htDate
	 */
	setDate : function(htDatePickerSet, htDate) {
		if (this.isSelectable(htDatePickerSet, htDate)) {
			var sDateFormat = this._getDateFormat(htDatePickerSet, htDate);
			var htParam = {
				"sText": sDateFormat,
				"nYear": htDate.nYear,
				"nMonth": htDate.nMonth,
				"nDate": htDate.nDate
			};
			if (this.fireEvent("beforeSelect", htParam)) {
				this._setDate(htDatePickerSet, htDate);
				this.getLayerManager().hide();
				this.fireEvent("select", htParam);
			}
			return true;
		}
		return false;
	},
	
	/**
	 * option("sDateFormat")에 맞는 형식의 문자열을 구한다.
	 * @param {HashTable} htDatePickerSet	 
	 * @param {HashTable} htDate  
	 * @return {String} sDateFormat
	 * @ingore
	 */
	_getDateFormat : function(htDatePickerSet, htDate) {
		var nYear = htDate.nYear;
		var nMonth = htDate.nMonth;
		var nDate = htDate.nDate;
		
		if (nMonth < 10) {
			nMonth = ("0" + (nMonth * 1)).toString();
		}
        if (nDate < 10) {
            nDate = ("0" + (nDate * 1)).toString();
		} 
		
		var sDateFormat = htDatePickerSet.htOption.sDateFormat;
		sDateFormat = sDateFormat.replace(/yyyy/g, nYear).replace(/y/g, (nYear).toString().substr(2,2)).replace(/mm/g, nMonth).replace(/m/g, (nMonth * 1)).replace(/M/g, this.getCalendar().option("aMonthTitle")[nMonth-1] ).replace(/dd/g, nDate).replace(/d/g, (nDate * 1));	
		return sDateFormat;
	},
	
	_linkOnly : function (htDatePickerSet) {
		var oLayerManager = this.getLayerManager();
		oLayerManager.setLinks([this.getCalendarLayer()]);
		if (typeof htDatePickerSet.elInput != "undefined") {
			oLayerManager.link(htDatePickerSet.elInput);
		}
		if (typeof htDatePickerSet.elButton != "undefined") {
			oLayerManager.link(htDatePickerSet.elButton);	
		}
	},
	
	/**
	 * 컴포넌트를 활성화한다.
	 */
	_onActivate : function() {
		var elCalendarLayer = this.getCalendarLayer();
		jindo.$Element.prototype.preventTapHighlight && jindo.$Element(elCalendarLayer).preventTapHighlight(true);
		this._wfMouseOverDate.attach(elCalendarLayer, "mouseover");
		this._wfMouseOutDate.attach(elCalendarLayer, "mouseout");
		this._wfClickDate.attach(elCalendarLayer, "click");
		this.getLayerManager().activate();
		this.getCalendar().activate();
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 */
	_onDeactivate : function() {
		var elCalendarLayer = this.getCalendarLayer();
		jindo.$Element.prototype.preventTapHighlight && jindo.$Element(elCalendarLayer).preventTapHighlight(false);
		this._wfMouseOverDate.detach(elCalendarLayer, "mouseover");
		this._wfMouseOutDate.detach(elCalendarLayer, "mouseout");
		this._wfClickDate.detach(elCalendarLayer, "click").detach(elCalendarLayer, "mouseover").detach(elCalendarLayer, "mouseout");
		this.getLayerManager().deactivate();
		this.getCalendar().deactivate();
	},
	
	_onFocusInput : function(we) {
		this.fireEvent("focus", {
			element : we.element
		});
	},
	
	_onClickLinkedElement : function(we){
		we.stop(jindo.$Event.CANCEL_DEFAULT);
		if (this.fireEvent("click", {
			element: we.element
		})) {
			var htDatePickerSet = this.getDatePickerSet(we.currentElement);
			if (htDatePickerSet) {
	            this._htSelectedDatePickerSet = htDatePickerSet;
	            this._linkOnly(htDatePickerSet);
	            if (!htDatePickerSet.nYear) {
	                htDatePickerSet.nYear = htDatePickerSet.htOption.nYear;
	            }
	            if (!htDatePickerSet.nMonth) {
	                htDatePickerSet.nMonth = htDatePickerSet.htOption.nMonth;
	            }
	            if (!htDatePickerSet.nDate) {
	                htDatePickerSet.nDate = htDatePickerSet.htOption.nDate;
	            }
	            var nYear = htDatePickerSet.nYear;
	            var nMonth = htDatePickerSet.nMonth;
	            this.getCalendar().draw(nYear, nMonth);
	            this.getLayerManager().show();
	            if (this.option("bUseLayerPosition")) {
	                if (typeof htDatePickerSet.elLayerPosition != "undefined") {
	                    this.getLayerPosition().setElement(htDatePickerSet.elLayerPosition).setPosition();
	                } else {
	                    this.getLayerPosition().setElement(htDatePickerSet.elInput).setPosition();
	                }
	            }
			}
		}
	},
	
	_getTargetDateElement : function(el) {
		var sClassPrefix = this.getCalendar().option("sClassPrefix");
		var elDate = (jindo.$Element(el).hasClass(sClassPrefix + "date")) ? el : jindo.$$.getSingle("."+ sClassPrefix + "date", el);
		if (elDate && (elDate == el || elDate.length == 1)) {
			return elDate;
		}
		return null;
	},
	
	_getTargetDateContainerElement : function(el) {
		var sClassPrefix = this.getCalendar().option("sClassPrefix");
		var elWeek = jindo.$$.getSingle("! ." + sClassPrefix + "week", el);
		if (elWeek) {
			var elReturn = el;
			while(!jindo.$Element(elReturn.parentNode).hasClass(sClassPrefix + "week")) {
				elReturn = elReturn.parentNode;
			}
			if (jindo.$Element(elReturn).hasClass(sClassPrefix + "unselectable")) {
				return null;
			}
			return elReturn;
		} else {
			return null;
		}
	},
	
	_setSelectedAgain : function() {
		if (this._elSelected) {
			var sClassPrefix = this.getCalendar().option("sClassPrefix");
			jindo.$Element(this._elSelected).addClass(sClassPrefix + "selected");
			this._elSelected = null;
		}
	},
	
	_setAsideSelected : function() {
		if (!this._elSelected) {
			var sClassPrefix = this.getCalendar().option("sClassPrefix");
			this._elSelected = jindo.$$.getSingle("." + sClassPrefix + "selected", this.elWeekAppendTarget);
			if (this._elSelected) {
				jindo.$Element(this._elSelected).removeClass(sClassPrefix + "selected");
			}
		}
	},
	
	_onMouseOverDate : function(we) {
		var sClassPrefix = this.getCalendar().option("sClassPrefix");
		var elDateContainer = this._getTargetDateContainerElement(we.element);
		if (elDateContainer) {
			var htDate = this.getCalendar().getDateOfElement(elDateContainer);
			var htParam = {
				element : we.element,
				nYear : htDate.nYear,
				nMonth : htDate.nMonth,
				nDate : htDate.nDate,
				bSelectable : false
			};
			if (this._htSelectedDatePickerSet && this.isSelectable(this._htSelectedDatePickerSet, htDate)) {
				this._setAsideSelected();
				jindo.$Element(elDateContainer).addClass(sClassPrefix + "over");
				htParam.bSelectable = true;
			} 
			this.fireEvent("mouseover", htParam);
		} 
	},
	
	_onMouseOutDate : function(we) {
		var sClassPrefix = this.getCalendar().option("sClassPrefix");
		var elDateContainer = this._getTargetDateContainerElement(we.element);
		if (elDateContainer) {
			var htDate = this.getCalendar().getDateOfElement(elDateContainer);
			var htParam = {
				element : we.element,
				nYear : htDate.nYear,
				nMonth : htDate.nMonth,
				nDate : htDate.nDate,
				bSelectable : false
			};
			if (this._htSelectedDatePickerSet && this.isSelectable(this._htSelectedDatePickerSet, htDate)) {
				jindo.$Element(elDateContainer).removeClass(sClassPrefix + "over");
				htParam.bSelectable = true;
				this._setSelectedAgain();
			}
			this.fireEvent("mouseout", htParam);
		} else {
			this._setSelectedAgain();
		}
	},
	
	_onClickDate : function(we){
		we.stop(jindo.$Event.CANCEL_DEFAULT);
		var el = we.element;
		
		var elDate = this._getTargetDateElement(el);
		if (elDate) {
			var elDateContainer = this._getTargetDateContainerElement(elDate);
			if (elDateContainer) {
				var htDate = this.getCalendar().getDateOfElement(elDateContainer);
				if (this.isSelectable(this._htSelectedDatePickerSet, htDate)) {
					this.setDate(this._htSelectedDatePickerSet, htDate);
				}
			}
		} 
	}
}).extend(jindo.UIComponent);
