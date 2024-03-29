/**
 * @fileOverview 특정 연/월의 달력 출력을 위한 컴포넌트
 * @author senxation
 * @version 1.0.4
 */

jindo.Calendar = jindo.$Class({
	/** @lends jindo.Calendar.prototype */
	/**
	 * Calendar 컴포넌트를 생성한다.
	 * 달력이 출력 될때 토요일, 일요일은 각각 해당 셀에 sat, sun로 className을 설정한다. 
	 * 이전달의 마지막주의 날짜 셀은 prev-mon, 다음달의 첫주의 날짜 셀은 next_mon로 className을 설정한다.
	 * 공휴일 정보는 draw 커스텀 이벤트에서 클래스명 정의를 통해 작성해야한다.
	 * @constructs
	 * @class 특정 연/월의 달력 출력을 위한 컴포넌트
	 * @extends jindo.UIComponent
	 * @param {String | HTMLElement} sLayerId 달력을 출력할 레이어의 id 혹은 레이어 자체.
	 * @param {HashTable} htOption 초기화 옵션 설정을 위한 객체.
	 * @example
var oCalendar = new jindo.Calendar("calendar_layer", {
	sClassPrefix : "calendar-",
	nYear : 1983,
	nMonth : 5,
	nDate : 12,
	sTitleFormat : "yyyy-mm", //설정될 title의 형식
	sYearTitleFormat : "yyyy", //설정될 연 title의 형식
	sMonthTitleFormat : "m", //설정될 월 title의 형식
	aMonthTitle : ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"], //월의 이름을 설정 "title" 세팅시 적용
	bDrawOnload : true //로딩과 동시에 바로 그릴것인지 여부
}).attach({
	beforeDraw : function(oCustomEvent) {
		//달력을 새로 그리기 전 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	nYear : (Number) 연 (ex. 2009) 
		//	nMonth : (Number) 월 (ex. 5)
		//}
		//oCustomEvent.stop()을 실행하면 draw 커스텀 이벤트가 발생하지 않는다. 
	},
	draw : function(oCustomEvent) {
		//달력을 새로 그리는 중 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elDate : (HTMLElement) 날짜가 쓰여질 목표 엘리먼트
		//  elDateContainer : (HTMLElement) week의 child 엘리먼트로 날짜가 쓰여질 목표 엘리먼트를 감싸고 있는 상위 엘리먼트. (element와 같을 수도 있음) 
		//	nYear : (Number) 연 (ex. 2009) 
		//	nMonth : (Number) 월 (ex. 5)
		//	nDate : (Number) 일 (ex. 12)
		//	bPrevMonth : (Boolean) 그려질 날이 이전달의 날인지 여부
		//	bNextMonth : (Boolean) 그려질 날이 다음달의 날인지 여부
		//}
	},
	afterDraw : function(oCustomEvent) {
		//달력을 그린 이후 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	nYear : (Number) 연 (ex. 2009) 
		//	nMonth : (Number) 월 (ex. 5)
		//}
	}
});
	 * @example 
옵션의 sTitleFormat은 날짜의 형식으로 title 엘리먼트에 표현될 형식을 지정한다. 
다음의 형식을 조합하여 사용할 수 있다.
ex) "yyyy.m", "yyyy년 m월", "yy/m" ...
연도 : yyyy(4자리 숫자, ex "2001"), yy(2자리 숫자, ex "01")
월 : mm(2자리 숫자, ex "01"), m(1자리 숫자, ex "1"), M(aMonthTitle에 설정된 값으로 보여줌 ex "JAN")
	 */
	$init : function(sLayerId, htOption) {
		var htToday = this.constructor.getToday();
		this.setToday(htToday.nYear, htToday.nMonth, htToday.nDate);
		this._elLayer = jindo.$(sLayerId);
		this._htDefaultOption = {
			sClassPrefix : "calendar-",
			nYear : this._htToday.nYear,
			nMonth : this._htToday.nMonth,
			nDate : this._htToday.nDate,
					
			sTitleFormat : "yyyy-mm",
			sYearTitleFormat : "yyyy",
			sMonthTitleFormat : "m",
			
			aMonthTitle : ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
			bDrawOnload : true
		};
		
		this.option(this._htDefaultOption);
		this.option(htOption || {});
		
		this._assignHTMLElements();
		this.activate();
		this.setDate(this.option("nYear"), this.option("nMonth"), this.option("nDate"));
		if (this.option("bDrawOnload")) {
			this.draw();
		}
	},
	
	/**
	 * 기준 엘리먼트(달력 레이어 엘리먼트)를 가져온다.
	 * @return {HTMLElement} 달력 레이어
	 */
	getBaseElement : function() {
		return this._elLayer;
	},
	
	/**
	 * 현재 설정된 날짜를 가져온다.
	 * @return {HashTable} 
	 * @example 
oCalendar.getDate() -> { nYear : 2000, nMonth : 1, nDate : 31 } 
	 */
	getDate : function() {
		return this._htDate;
	},
	
	/**
	 * 그려진 달력의 날짜엘리먼트로 해당하는 날짜를 구한다.
	 * @param {HTMLElement} el week엘리먼트의 자식노드로 존재하는 7개의 엘리먼트중 하나
	 * @return {HashTable}
	 * @example 
oCalendar.getDateOfElement(el) -> { nYear : 2000, nMonth : 1, nDate : 31 }
	 */
	getDateOfElement : function(el) {
		var nDateIndex = jindo.$A(this._aDateContainerElement).indexOf(el);
		if (nDateIndex > -1) {
			return this._aMetaData[nDateIndex];
		}
		return null;
	},

	/**
	 * 오늘 정보를 설정한다.
	 * JavaScript의 new Date()는 사용자 로컬환경의 시간을 따르므로, 서버에서 내려주는 오늘의 정보를 설정하기 위해 사용한다.
	 * @param {Number} nYear 년
	 * @param {Number} nMonth 월
	 * @param {Number} nDate 일
	 * @return {this}
	 */
	setToday : function(nYear, nMonth, nDate) {
		if (!this._htToday) {
			this._htToday = {};
		}
		this._htToday.nYear = nYear;
		this._htToday.nMonth = nMonth;
		this._htToday.nDate = nDate;
		return this;
	},
	
	/**
	 * 오늘의 정보를 가지는 Hash Table을 가져온다.
	 * @return {HashTable}
	 * @example 
oCalendar.getToday() -> { nYear : 2000, nMonth : 1, nDate : 31 }
	 */
	getToday : function() {
		return {
			nYear : this._htToday.nYear,
			nMonth : this._htToday.nMonth,
			nDate : this._htToday.nDate
		};
	},

	/**
	 * 현재 달력의 날짜를 설정한다.
	 * @param {Number} nYear 연도 값 (ex. 2008)
	 * @param {Number} nMonth 월 값 (1 ~ 12)
	 * @param {Number} nDate 일 값 (1 ~ 31)
	 */
	setDate : function(nYear, nMonth, nDate) {
		this._htDate = {
			nYear : nYear,
			nMonth : (nMonth * 1),
			nDate : (nDate * 1)
		};
	},
	
	/**
	 * 현재 표시된 달력의 날짜를 가져온다.
	 * @remark 기본으로 설정된 날짜 또는 setDate로 설정된 날짜와 다른 경우, nDate 값은 1이다.
	 * @return {HashTable} 
	 * @example 
oCalendar.getShownDate() -> { nYear : 2000, nMonth : 1, nDate : 1 }
	 */
	getShownDate : function() {
		return this._getShownDate();
	},
	
	_getShownDate : function() {
		return this.htShownDate || this.getDate();
	},

	_setShownDate : function(nYear, nMonth) {
		this.htShownDate = {
			nYear : nYear,
			nMonth : (nMonth * 1),
			nDate : 1
		};
	},

	_assignHTMLElements : function() {
		var sClassPrefix = this.option("sClassPrefix"),
			elLayer = this.getBaseElement();
	
		if ((this.elBtnPrevYear = jindo.$$.getSingle(("." + sClassPrefix + "btn-prev-year"), elLayer))) {
			this.wfPrevYear = jindo.$Fn(function(oEvent){
				oEvent.stop(jindo.$Event.CANCEL_DEFAULT);
				this.draw(-1, 0, true);
			}, this);
		}
		if ((this.elBtnPrevMonth = jindo.$$.getSingle(("." + sClassPrefix + "btn-prev-mon"), elLayer))) {
			this.wfPrevMonth = jindo.$Fn(function(oEvent){
				oEvent.stop(jindo.$Event.CANCEL_DEFAULT);
				this.draw(0, -1, true);
			}, this);	
		}
		if ((this.elBtnNextMonth = jindo.$$.getSingle(("." + sClassPrefix + "btn-next-mon"), elLayer))) {
			this.wfNextMonth = jindo.$Fn(function(oEvent){
				oEvent.stop(jindo.$Event.CANCEL_DEFAULT);
				this.draw(0, 1, true);
			}, this);
		}
		if ((this.elBtnNextYear = jindo.$$.getSingle(("." + sClassPrefix + "btn-next-year"), elLayer))) {
			this.wfNextYear = jindo.$Fn(function(oEvent){
				oEvent.stop(jindo.$Event.CANCEL_DEFAULT);
				this.draw(1, 0, true);
			}, this);
		}
		
		this.elTitle = jindo.$$.getSingle(("." + sClassPrefix + "title"), elLayer);
		this.elTitleYear = jindo.$$.getSingle(("." + sClassPrefix + "title-year"), elLayer);
		this.elTitleMonth = jindo.$$.getSingle(("." + sClassPrefix + "title-month"), elLayer);
		var elWeekTemplate = jindo.$$.getSingle("." + sClassPrefix + "week", elLayer);
		this.elWeekTemplate = elWeekTemplate.cloneNode(true);
		this.elWeekAppendTarget = elWeekTemplate.parentNode;
	},
	
	_setCalendarTitle : function(nYear, nMonth, sType) {
		if (nMonth < 10) {
			nMonth = ("0" + (nMonth * 1)).toString();
		} 
		
		var elTitle = this.elTitle,
			sTitleFormat = this.option("sTitleFormat"),
			sTitle;
		
		if (typeof sType != "undefined") {
			switch (sType) {
				case "year" :
					elTitle = this.elTitleYear;
					sTitleFormat = this.option("sYearTitleFormat");
					sTitle = sTitleFormat.replace(/yyyy/g, nYear).replace(/y/g, (nYear).toString().substr(2,2));
				break;
				case "month" :
					elTitle = this.elTitleMonth;
					sTitleFormat = this.option("sMonthTitleFormat");
					sTitle = sTitleFormat.replace(/mm/g, nMonth).replace(/m/g, (nMonth * 1)).replace(/M/g, this.option("aMonthTitle")[nMonth-1]); 
				break;
			}
		} else {
			sTitle = sTitleFormat.replace(/yyyy/g, nYear).replace(/y/g, (nYear).toString().substr(2,2)).replace(/mm/g, nMonth).replace(/m/g, (nMonth * 1)).replace(/M/g, this.option("aMonthTitle")[nMonth-1] );
		}  
		
		jindo.$Element(elTitle).text(sTitle);
	},
	
	/**
	 * Calendar를 그린다.
	 * @function
	 * @param {Number} nYear 연도 값 (ex. 2008)
	 * @param {Number} nMonth 월 값 (1 ~ 12)
	 * @param {Boolean} bRelative 연도와 월 값이 상대값인지 여부, 생략 가능
	 * @example
oCalendar.draw(); //현재 설정된 날짜의 달력을 그린다.
oCalendar.draw(2008,12); //2008년 12월 달력을 그린다.
oCalendar.draw(null,12); //현재 표시된 달력의 12월을 그린다.
oCalendar.draw(2010,null); //2010년 현재 표시된 달력의 월을 그린다.
oCalendar.draw(0,1,true); //현재 표시된 달력의 다음 달을 그린다.
oCalendar.draw(-1,null,true); //현재 표시된 달력의 이전 연도를 그린다.
	 */
	draw : function(nYear, nMonth, bRelative) {
		var sClassPrefix = this.option("sClassPrefix"),
			htDate = this.getDate(),
			oShownDate = this._getShownDate();
			
		if (oShownDate && typeof bRelative != "undefined" && bRelative) {
			var htRelativeDate = this.constructor.getRelativeDate(nYear, nMonth, 0, oShownDate);
			nYear = htRelativeDate.nYear;
			nMonth = htRelativeDate.nMonth;
		} else if (typeof nYear == "undefined" && typeof nMonth == "undefined" && typeof bRelative == "undefined") {
			nYear = htDate.nYear;
			nMonth = htDate.nMonth;
		} else {
			nYear = nYear || oShownDate.nYear;
			nMonth = nMonth || oShownDate.nMonth; 
		}
		
		if (this.fireEvent("beforeDraw", {
			nYear: nYear,
			nMonth: nMonth
		})) {
			if (this.elTitle) {
				this._setCalendarTitle(nYear, nMonth);
			}
			if (this.elTitleYear) {
				this._setCalendarTitle(nYear, nMonth, "year");
			}
			if (this.elTitleMonth) {
				this._setCalendarTitle(nYear, nMonth, "month");
			}
			
			this._clear(jindo.Calendar.getWeeks(nYear, nMonth));
			this._setShownDate(nYear, nMonth);
			
			var htToday = this.getToday(),		
				nFirstDay = this.constructor.getFirstDay(nYear, nMonth),
				nLastDay = this.constructor.getLastDay(nYear, nMonth),
				nLastDate = this.constructor.getLastDate(nYear, nMonth),
				nDay = 0,
				htDatePrevMonth = this.constructor.getRelativeDate(0, -1, 0, {nYear:nYear, nMonth:nMonth, nDate:1}),
				htDateNextMonth = this.constructor.getRelativeDate(0, 1, 0, {nYear:nYear, nMonth:nMonth, nDate:1}),
				nPrevMonthLastDate = this.constructor.getLastDate(htDatePrevMonth.nYear, htDatePrevMonth.nMonth),	
				aDate = [],
				bPrevMonth,
				bNextMonth,
				welDateContainer,
				nTempYear,
				nTempMonth,
				oParam,
				nIndexOfLastDate,
				elWeek,
				i;
				
			var nWeeks = this.constructor.getWeeks(nYear, nMonth);
		
			for (i = 0; i < nWeeks; i++) {
				elWeek = this.elWeekTemplate.cloneNode(true);
				jindo.$Element(elWeek).appendTo(this.elWeekAppendTarget);
				this._aWeekElement.push(elWeek);
			}
			this._aDateElement = jindo.$$("." + sClassPrefix + "date", this.elWeekAppendTarget);
			this._aDateContainerElement = jindo.$$("." + sClassPrefix + "week > *", this.elWeekAppendTarget);
				
			if (nFirstDay > 0) {
				for (i = nPrevMonthLastDate - nFirstDay; i < nPrevMonthLastDate; i++) {
					aDate.push(i + 1);
				}
			}
			for (i = 1; i < nLastDate + 1; i++) {
				aDate.push(i);	
			}
			nIndexOfLastDate = aDate.length - 1;
			
			for (i = 1; i < 7 - nLastDay; i++) {
				aDate.push(i);	
			}
			
			for (i = 0; i < aDate.length; i++) {
				bPrevMonth = false;
				bNextMonth = false;
				welDateContainer = jindo.$Element(this._aDateContainerElement[i]);
				nTempYear = nYear;
				nTempMonth = nMonth;
				
				if (i < nFirstDay) {
					bPrevMonth = true;
					welDateContainer.addClass(sClassPrefix + "prev-mon");
					nTempYear = htDatePrevMonth.nYear;
					nTempMonth = htDatePrevMonth.nMonth;
				} else if (i > nIndexOfLastDate) {
					bNextMonth = true;
					welDateContainer.addClass(sClassPrefix + "next-mon");				
					nTempYear = htDateNextMonth.nYear;
					nTempMonth = htDateNextMonth.nMonth;
				} else {
					nTempYear = nYear;
					nTempMonth = nMonth;
				}
				
				if (nDay === 0) {
					welDateContainer.addClass(sClassPrefix + "sun");
				}
				if (nDay == 6) {
					welDateContainer.addClass(sClassPrefix + "sat");
				}
				if (nTempYear == htToday.nYear && (nTempMonth * 1) == htToday.nMonth && aDate[i] == htToday.nDate) {
					welDateContainer.addClass(sClassPrefix + "today");
				}
				
				oParam = {
					elDate : this._aDateElement[i],
					elDateContainer : welDateContainer.$value(),
					nYear : nTempYear, 
					nMonth : nTempMonth, 
					nDate : aDate[i],
					bPrevMonth : bPrevMonth,
					bNextMonth : bNextMonth,
					sHTML : aDate[i]
				};
				jindo.$Element(oParam.elDate).html(oParam.sHTML.toString());
				
				this._aMetaData.push({
					nYear : nTempYear, 
					nMonth : nTempMonth, 
					nDate : aDate[i]
				});
				
				nDay = (nDay + 1) % 7;
				
				this.fireEvent("draw", oParam);
			}
			this.fireEvent("afterDraw", {
				nYear : nYear, 
				nMonth : nMonth
			});
		}
	},
	
	_clear : function(nWeek) {
		this._aMetaData = [];
		this._aWeekElement = [];
		jindo.$Element(this.elWeekAppendTarget).empty();
	},
	
	/**
	 * @deprecated activate()
	 */
	attachEvent : function() {
		this.activate();
	},
	
	/**
	 * @deprecated deactivate()
	 */
	detachEvent : function() {
		this.deactivate();
	},
	
	_onActivate : function() {
		if (this.elBtnPrevYear) {
			this.wfPrevYear.attach(this.elBtnPrevYear, "click");
		}
		if (this.elBtnPrevMonth) {
			this.wfPrevMonth.attach(this.elBtnPrevMonth, "click");
			
		}
		if (this.elBtnNextMonth) {
			this.wfNextMonth.attach(this.elBtnNextMonth, "click");			
		}
		if (this.elBtnNextYear) {
			this.wfNextYear.attach(this.elBtnNextYear, "click");
		}
	},
	
	_onDeactivate : function() {
		if (this.elBtnPrevYear) {
			this.wfPrevYear.detach(this.elBtnPrevYear, "click");
		}
		if (this.elBtnPrevMonth) {
			this.wfPrevMonth.detach(this.elBtnPrevMonth, "click");
		}
		if (this.elBtnNextMonth) {
			this.wfNextMonth.detach(this.elBtnNextMonth, "click");			
		}
		if (this.elBtnNextYear) {
			this.wfNextYear.detach(this.elBtnNextYear, "click");
		}
	}
	
}).extend(jindo.UIComponent);

/**
 * 오늘 정보를 설정한다.
 * JavaScript의 new Date()는 사용자 로컬환경의 시간을 따르므로, 서버에서 내려주는 오늘의 정보를 설정하기 위해 사용한다.
 * @param {Number} nYear 년
 * @param {Number} nMonth 월
 * @param {Number} nDate 일
 * @return {this}
 */
jindo.Calendar.setToday = function(nYear, nMonth, nDate) {
	if (!this._htToday) {
		this._htToday = {};
	}
	this._htToday.nYear = nYear;
	this._htToday.nMonth = nMonth;
	this._htToday.nDate = nDate;
	return this;
};

/**
 * 오늘의 정보를 가지는 Hash Table을 가져온다.
 * @return {HashTable}
 * @example 
oCalendar.getToday() -> { nYear : 2000, nMonth : 1, nDate : 31 }
 */
jindo.Calendar.getToday = function() {
	var htToday = this._htToday || this.getDateHashTable(new Date());
	return {
		nYear : htToday.nYear,
		nMonth : htToday.nMonth,
		nDate : htToday.nDate
	};
};

/**
 * Date 객체를 구한다.
 * @example
jindo.Calendar.getDateObject({nYear:2010, nMonth:5, nDate:12});
jindo.Calendar.getDateObject(2010, 5, 12); //연,월,일
 * @param {HashTable} htDate 날짜 객체
 * @return {Date} 
 */
jindo.Calendar.getDateObject = function(htDate) {
	if (arguments.length == 3) {
		return new Date(arguments[0], arguments[1] - 1, arguments[2]);
	}
	return new Date(htDate.nYear, htDate.nMonth - 1, htDate.nDate);
};

/**
 * 연월일을 포함한 HashTable 객체를 구한다.
 * @example
jindo.Calendar.getDateHashTable(2010, 5, 12); 
=> {nYear:2010, nMonth:5, nDate:12}
jindo.Calendar.getDateHashTable();
=> {nYear:2010, nMonth:5, nDate:12}
jindo.Calendar.getDateHashTable(new Date(2009,1,2));
=> {nYear:2009, nMonth:2, nDate:1}
 * @param {Date} Date 날짜 객체 
 * @return
 */
jindo.Calendar.getDateHashTable = function(oDate) {
	if (arguments.length == 3) {
		return {
			nYear : arguments[0],
			nMonth : arguments[1],
			nDate : arguments[2]
		};
	} 
	if (arguments.length <= 1) {
		oDate = oDate || new Date();
	}
	return {
		nYear : oDate.getFullYear(),
		nMonth : oDate.getMonth() + 1,
		nDate : oDate.getDate()
	};
};

/**
 * 연월일을 포함한 HashTable로부터 유닉스타임을 구한다.
 * @param {HashTable} htDate
 * @example
jindo.Calendar.getTime({nYear:2010, nMonth:5, nDate:12}); => 1273590000000
 * @return {Number}
 */
jindo.Calendar.getTime = function(htDate) {
	return this.getDateObject(htDate).getTime();
};

/**
 * 해당 연월의 첫번째 날짜의 요일을 구한다.
 * @param {Number} nYear
 * @param {Number} nMonth
 * @return {Number} 요일 (0~6)
 */
jindo.Calendar.getFirstDay = function(nYear, nMonth) {
	return new Date(nYear, nMonth - 1, 1).getDay();
};

/**
 * 해당 연월의 마지막 날짜의 요일을 구한다.
 * @param {Number} nYear
 * @param {Number} nMonth
 * @return {Number} 요일 (0~6)
 */
jindo.Calendar.getLastDay = function(nYear, nMonth) {
	return new Date(nYear, nMonth, 0).getDay();
};

/**
 * 해당 연월의 마지막 날짜를 구한다.
 * @param {Number} nYear
 * @param {Number} nMonth
 * @return {Number} 날짜 (1~31)
 */
jindo.Calendar.getLastDate = function(nYear, nMonth) {
	return new Date(nYear, nMonth, 0).getDate();
};

/**
 * 해당 연월의 주의 수를 구한다.
 * @param {Number} nYear
 * @param {Number} nMonth
 * @return {Number} 주 (4~6)
 */
jindo.Calendar.getWeeks = function(nYear, nMonth) {
	var nFirstDay = this.getFirstDay(nYear, nMonth),
		nLastDate = this.getLastDate(nYear, nMonth);
		
	return Math.ceil((nFirstDay + nLastDate) / 7);	
};

/**
 * 연월일을 포함한 HashTable로부터 상대적인 날짜의 HashTable을 구한다.
 * @param {Number} nYear 상대적인 연도 (+/-로 정의) 
 * @param {Number} nMonth 상대적인 월 (+/-로 정의)
 * @param {Number} nDate 상대적인 일 (+/-로 정의)
 * @param {HashTable} 연월일 HashTable  
 * @return {HashTable}
 * @example
jindo.Calendar.getRelativeDate(1, 0, 0, {nYear:2000, nMonth:1, nDate:1}); => {nYear:2001, nMonth:1, nDate:1}
jindo.Calendar.getRelativeDate(0, 0, -1, {nYear:2010, nMonth:1, nDate:1}); => {nYear:2009, nMonth:12, nDate:31}
 */
jindo.Calendar.getRelativeDate = function(nYear, nMonth, nDate, htDate) {
	var beforeDate = jindo.$Date(new Date(htDate.nYear , htDate.nMonth, htDate.nDate));
	var day = {"1":31,"2":28,"3":31,"4":30,"5":31,"6":30,"7":31,"8":31,"9":30,"10":31,"11":30,"12":31};
	if(beforeDate.isLeapYear()){
		day = {"1":31,"2":29,"3":31,"4":30,"5":31,"6":30,"7":31,"8":31,"9":30,"10":31,"11":30,"12":31};
	}
	if(day[htDate.nMonth] == htDate.nDate ){
		htDate.nDate = day[htDate.nMonth+nMonth];
	}
	var changeDate = this.getDateHashTable(new Date(htDate.nYear + nYear, htDate.nMonth + nMonth - 1, htDate.nDate + nDate));
	return this.getDateHashTable(new Date(htDate.nYear + nYear, htDate.nMonth + nMonth - 1, htDate.nDate + nDate));		
};

/**
 * 유효한 날짜인지 확인힌다.
 * @param {Number} nYear
 * @param {Number} nMonth
 * @param {Number} nDate
 * @return {Boolean}
 */
jindo.Calendar.isValidDate = function(nYear, nMonth, nDate) {
	if (nMonth <= 12 && nDate <= this.getLastDate(nYear, nMonth)) {
		return true;
	} else {
		return false;
	}
};

/**
 * 연월일을 포함한 HashTable이 비교대상 HashTable보다 과거인지 확인한다.
 * @param {HashTable} htDate 비교를 원하는 날
 * @param {HashTable} htComparisonDate 비교할 기준
 * @return {Boolean}
 */
jindo.Calendar.isPast = function(htDate, htComparisonDate) {
	if (this.getTime(htDate) < this.getTime(htComparisonDate)) {
		return true;
	} 
	return false;
};

/**
 * 연월일을 포함한 HashTable이 비교대상 HashTable보다 미래인지 확인한다.
 * @param {HashTable} htDate 비교를 원하는 날
 * @param {HashTable} htComparisonDate 비교할 기준
 * @return {Boolean}
 */
jindo.Calendar.isFuture = function(htDate, htComparisonDate) {
	if (this.getTime(htDate) > this.getTime(htComparisonDate)) {
		return true;
	} 
	return false;
};

/**
 * 연월일을 포함한 HashTable이 비교대상 HashTable과 같은 날인지 확인한다.
 * @param {HashTable} htDate 비교를 원하는 날
 * @param {HashTable} htComparisonDate 비교할 기준
 * @return {Boolean}
 */
jindo.Calendar.isSameDate = function(htDate, htComparisonDate) {
	if (this.getTime(htDate) == this.getTime(htComparisonDate)) {
		return true;
	} 
	return false;
};

/**
 * 연월일을 포함한 HashTable이 특정 두 날 사이에 존재하는지 확인한다..
 * @param {HashTable} htDate 비교를 원하는 날
 * @param {HashTable} htFrom 시작 날짜
 * @param {HashTable} htTo 끝 날짜
 * @return {Boolean}
 * @example
jindo.Calendar.isBetween({nYear:2010, nMonth:5, nDate:12}, {nYear:2010, nMonth:1, nDate:1}, {nYear:2010, nMonth:12, nDate:31}); => true 
 */
jindo.Calendar.isBetween = function(htDate, htFrom, htTo) {
	if (this.isFuture(htDate, htTo) || this.isPast(htDate, htFrom)) {
		return false;
	} else {
		return true;
	}
};