/**
 * @fileOverview 리스트에 페이지 목록 매기고 페이지에 따른 네비게이션을 구현한 컴포넌트
 * @author senxation
 * @version 1.0.4
 */
jindo.Pagination = jindo.$Class({
	/** @lends jindo.Pagination.prototype */
	
	/**
	 * 리스트에 페이지 목록 매기고 페이지에 따른 네비게이션을 구현한 컴포넌트.
	 * 기본 목록은 마크업에 static하게 정의되어있고, 페이지 이동을위해 클릭시마다 보여줄 아이템 목록을 Ajax Call을 통해 받아온다.
	 * 페이지 컴포넌트가 로드되면 .loaded 클래스명이 추가된다.
	 * @constructs
	 * @class 리스트에 페이지 목록 매기고 페이지에 따른 네비게이션을 구현한 컴포넌트
	 * @param {String | HTMLElement} sId 페이지목록을 생성할 엘리먼트 id 혹은 엘리먼트 자체
	 * @param {HashTable} htOption 옵션 객체
	 * @extends jindo.UIComponent
	 * @example 
var oPagination = new jindo.Pagination("paginate", {
	nItem : 1000, //(Number) 전체 아이템 개수
	nItemPerPage : 10, //(Number) 한 페이지에 표시될 아이템 개수
	nPagePerPageList : 10, //(Number) 페이지목록에 표시될 페이지 개수
	nPage : 1, //(Number) 초기 페이지
	sMoveUnit : "pagelist", //(String) 페이지목록 이동시 이동 단위 "page" || "pagelist"
	bAlignCenter : false, //(Boolean) 현재페이지가 항상 가운데 위치하도록 정렬. sMoveUnit이 "page"일 때만 사용
	sInsertTextNode : "", //(String) 페이지리스트 생성시에 각각의 페이지 노드를 한줄로 붙여쓰지 않게 하기 위해서는 "\n" 또는 " "를 설정한다. 이 옵션에 따라 렌더링이 달라질 수 있다.
	sClassPrefix : "pagination-", //(String) 컴퍼넌트에서 사용되는 클래스의 Prefix 
	sClassFirst : "first-child", //(String) 첫번째 페이지리스트에 추가될 클래스명
	sClassLast : "last-child", //(String) 마지막 페이지리스트에 추가될 클래스명
	sPageTemplate : "<a href='#'>{=page}</a>", //(String) 페이지에 대한 템플릿. {=page}부분이 페이지 번호로 대치된다. 
	sCurrentPageTemplate : "<strong>{=page}</strong>", //(String) 현재페이지에 대한 템플릿. {=page}부분이 페이지 번호로 대치된다.
	elFirstPageLinkOn : (HTMLElement) '처음' 링크엘리먼트. 기본 값은 기준 엘리먼트 아래 pre_end 클래스명을 가지는 a 엘리먼트이다.
	elPrevPageLinkOn : (HTMLElement) '이전' 링크엘리먼트. 기본 값은 기준 엘리먼트 아래 pre 클래스명을 가지는 a 엘리먼트이다.
	elNextPageLinkOn : (HTMLElement) '다음' 링크엘리먼트. 기본 값은 기준 엘리먼트 아래 next 클래스명을 가지는 a 엘리먼트이다.
	elLastPageLinkOn : (HTMLElement) '마지막' 링크엘리먼트. 기본 값은 기준 엘리먼트 아래 next_end 클래스명을 가지는 a 엘리먼트이다.
	elFirstPageLinkOff : (HTMLElement) '처음' 엘리먼트. 기본 값은 기준 엘리먼트 아래 pre_end 클래스명을 가지는 span 엘리먼트이다.
	elPrevPageLinkOff : (HTMLElement) '이전' 엘리먼트. 기본 값은 기준 엘리먼트 아래 pre 클래스명을 가지는 span 엘리먼트이다.
	elNextPageLinkOff : (HTMLElement) '다음' 엘리먼트. 기본 값은 기준 엘리먼트 아래 next 클래스명을 가지는 span 엘리먼트이다.
	elLastPageLinkOff : (HTMLElement) '마지막' 엘리먼트. 기본 값은 기준 엘리먼트 아래 next_end 클래스명을 가지는 span 엘리먼트이다.
}).attach({
	beforeMove : function(oCustomEvent) {
		//페이지 이동이 수행되기 직전에 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	nPage : (Number) 이동하려는 페이지
		//}
		//oCustomEvent.stop()을 수행하면 페이지 이동(move 이벤트)이 일어나지 않는다.
	},
	move : function(oCustomEvent) {
		//페이지 이동이 완료된 이후 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	nPage : (Number) 현재 페이지
		//}
	},
	click : function(oCustomEvent) {
		//페이지 이동을 위한 숫자나 버튼을 클릭했을때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	nPage : (Number) 클릭해서 이동할 페이지
		//	weEvent : (jindo.$Event) click시 발생되는 jindo.$Event 객체
		//}
		//oCustomEvent.stop()을 수행하면 페이지 이동(beforeMove, move 이벤트)이 일어나지 않는다.
	}
});
	 */
	$init : function(sId, htOption){
		this._elPageList = jindo.$(sId);
		this._welPageList = jindo.$Element(this._elPageList);
		this._waPage = jindo.$A([]);
		
		this._fClickPage = jindo.$Fn(this._onClickPageList, this);
		
		this.option({
			bActivateOnload : true,
			nItem : 10,
			nItemPerPage : 10,
			nPagePerPageList : 10,
			nPage : 1,
			sMoveUnit : "pagelist",
			bAlignCenter : false,
			sInsertTextNode : "",
			sClassPrefix : "",
			sClassFirst : "first-child",
			sClassLast : "last-child",
			sPageTemplate : "<a href='#'>{=page}</a>",
			sCurrentPageTemplate : "<strong>{=page}</strong>",
			elFirstPageLinkOn : jindo.$$.getSingle("a." + this._wrapPrefix("pre_end"), this._elPageList),
			elPrevPageLinkOn : jindo.$$.getSingle("a." + this._wrapPrefix("pre"), this._elPageList),
			elNextPageLinkOn : jindo.$$.getSingle("a." + this._wrapPrefix("next"), this._elPageList),
			elLastPageLinkOn : jindo.$$.getSingle("a." + this._wrapPrefix("next_end"), this._elPageList),
			elFirstPageLinkOff : jindo.$$.getSingle("span." + this._wrapPrefix("pre_end"), this._elPageList),
			elPrevPageLinkOff : jindo.$$.getSingle("span." + this._wrapPrefix("pre"), this._elPageList),
			elNextPageLinkOff : jindo.$$.getSingle("span." + this._wrapPrefix("next"), this._elPageList),
			elLastPageLinkOff : jindo.$$.getSingle("span." + this._wrapPrefix("next_end"), this._elPageList)
		});
		this.option(htOption || {});
		
		if (this.option("bActivateOnload")) {
			this.activate();
		}
	},
	
	option : function(sName, vValue) {
		var oThis = jindo.Component.prototype.option.apply(this, arguments);

		// setter 로써 쓰일때만
		if (typeof sName === 'object' || typeof vValue != 'undefined') {
			var sMoveUnit = this.option('sMoveUnit');
			var bAlignCenter = this.option('bAlignCenter');
			
			// 올바르지 않은 옵션 상태일때
			if (bAlignCenter && sMoveUnit === 'pageunit') {
				throw new Error('Invalid Option : sMoveUnit can\'t be set to "pageunit" when bAlignCenter is true.');
			}
		}
		
		return oThis;
	},
	
	/**
	 * 클래스명에 Prefix 를 붙힘
	 * @param {String} sClassName
	 */
	_wrapPrefix : function(sClassName) {
		var sClassPrefix = this.option('sClassPrefix');
		return sClassPrefix ? sClassPrefix + sClassName.replace(/_/g, '-') : sClassName;
	},
	
	/**
	 * 기준 엘리먼트를 구한다.
	 * @return {HTMLElement}
	 */
	getBaseElement : function() {
		return this._elPageList;
	},
	
	/**
	 * 전체 아이템의 개수를 리턴한다.
	 * @return {Number} 아이템 개수
	 */
	getItemCount : function() {
		return this.option("nItem");
	},
	
	/**
	 * 전체 아이템의 개수를 설정한다.
	 * @param {Number} n 아이템 개수
	 */
	setItemCount : function(n) {
		this.option({"nItem" : n});
	},
	
	/**
	 * 한 페이지에 보여줄 아이템의 개수를 구한다.
	 * @return {Number} 한 페이지에 보여줄 아이템의 개수
	 */
	getItemPerPage : function() {
		return this.option("nItemPerPage");
	},
	
	/**
	 * 한 페이지에 보여줄 아이템의 개수를 설정한다.
	 * @param {Object} n 아이템 개수
	 */
	setItemPerPage : function(n) {
		this.option("nItemPerPage", n);
	},
	
	/**
	 * 현재 페이지를 리턴한다.
	 * @return {Number} 현재 페이지
	 */
	getCurrentPage : function() {
		return this._nCurrentPage;
	},
	
	/**
	 * 해당 페이지의 첫번째 아이템이 전체 중 몇 번째 아이템인지 구한다.
	 * @param {Number} n 페이지 번호
	 * @return {Number} 
	 */
	getFirstItemOfPage : function(n) {
		return this.getItemPerPage() * (n - 1) + 1;
	},
	
	/**
	 * 아이템의 인덱스로부터 몇번째 페이지인지를 구한다.
	 * @param {Object} n
	 * @return {Number} 
	 */
	getPageOfItem : function(n) {
		return Math.ceil(n / this.getItemPerPage());	
	},
	
	_getLastPage : function() {
		return Math.ceil(this.getItemCount() / this.getItemPerPage());
	},

	_getRelativePage : function(sRelative) {
		var nPage = null;
		var bMovePage = this.option("sMoveUnit") == "page";
		var nThisPageList = this._getPageList(this.getCurrentPage());
		
		switch (sRelative) {
		case "pre_end" :
			nPage = 1;
			break;
			
		case "next_end" :
			nPage = this._getLastPage();
			break;
			
		case "pre":
			nPage = bMovePage ? this.getCurrentPage() - 1 : (nThisPageList - 1) * this.option("nPagePerPageList");
			break;
			
		case "next":
			nPage = bMovePage ? this.getCurrentPage() + 1 : (nThisPageList) * this.option("nPagePerPageList") + 1;
			break;
		}
		
		return nPage;
	},
	
	/**
	 * 몇번째 페이지 리스트인지 구함
	 * @param {Number} nThisPage
	 */
	_getPageList : function(nThisPage) {
		if (this.option("bAlignCenter")) {
			var nLeft = Math.floor(this.option("nPagePerPageList") / 2);
			var nPageList = nThisPage - nLeft;
			nPageList = Math.max(nPageList, 1);
			nPageList = Math.min(nPageList, this._getLastPage()); 
			return nPageList;
		}
		return Math.ceil(nThisPage / this.option("nPagePerPageList"));
	},
	
	_isIn : function(el, elParent) {
		if (!elParent) {
			return false;
		}
		return (el === elParent) ? true : jindo.$Element(el).isChildOf(elParent); 
	},
	
	_getPageElement : function(el) {
		for (var i = 0, nLength = this._waPage.$value().length; i < nLength; i++) {
			var elPage = this._waPage.get(i);
			if (this._isIn(el, elPage)) {
				return elPage;
			}
		}
		return null;
	},
	
	_onClickPageList : function(we) {
		we.stop(jindo.$Event.CANCEL_DEFAULT);
		
		var nPage = null,
			htOption = this.option(),
			el = we.element;
			
		if (this._isIn(el, htOption.elFirstPageLinkOn)) {
			nPage = this._getRelativePage("pre_end");
		} else if (this._isIn(el, htOption.elPrevPageLinkOn)) {
			nPage = this._getRelativePage("pre");
		} else if (this._isIn(el, htOption.elNextPageLinkOn)) {
			nPage = this._getRelativePage("next");
		} else if (this._isIn(el, htOption.elLastPageLinkOn)) {
			nPage = this._getRelativePage("next_end");				
		} else {
			var elPage = this._getPageElement(el);
			if (elPage) {
				nPage = parseInt(jindo.$Element(elPage).text(), 10);
			} else {
				return;
			}
		}	
		
		if (!this.fireEvent("click", { nPage: nPage, weEvent : we })) {
			return;
		}
		
		this.movePageTo(nPage);
	},
	
	_convertToAvailPage : function(nPage) {
		var nLastPage = this._getLastPage();
		nPage = Math.max(nPage, 1);
		nPage = Math.min(nPage, nLastPage); 
		return nPage;
	},
	
	/**
	 * 지정한 페이지로 이동하고 페이지 목록을 다시 그린다.
	 * 이동하기전 beforeMove, 이동후에 move 커스텀이벤트를 발생한다.
	 * @param {Number} nPage 이동할 페이지
	 * @param {Boolean} bFireEvent 커스텀이벤트의 발생 여부 (디폴트 true)
	 */
	movePageTo : function(nPage, bFireEvent){
		if (typeof bFireEvent == "undefined") {
			bFireEvent = true;
		}
		
		nPage = this._convertToAvailPage(nPage);
		this._nCurrentPage = nPage;
		
		if (bFireEvent) {
			if (!this.fireEvent("beforeMove", {
				nPage: nPage
			})) {
				return;
			}
		}
		
		this._paginate(nPage);
		
		if (bFireEvent) {
			this.fireEvent("move", {
				nPage: nPage
			});
		}
	},
	
	/**
	 * 페이징을 다시 그린다.
	 * @param {Number} nItemCount 아이템의 개수가 바뀌었을 경우 설정해준다.
	 */
	reset : function(nItemCount) {
		if (typeof nItemCount == "undefined") {
			nItemCount = this.option("nItem");
		}  
		
		this.setItemCount(nItemCount);
		this.movePageTo(1, false);
	},
	
	_onActivate : function() {
		jindo.$Element.prototype.preventTapHighlight && this._welPageList.preventTapHighlight(true);
		this._fClickPage.attach(this._elPageList, "click");
		this.setItemCount(this.option("nItem"));
		this.movePageTo(this.option("nPage"), false);
		this._welPageList.addClass(this._wrapPrefix("loaded"));	
	},
	
	_onDeactivate : function() {
		jindo.$Element.prototype.preventTapHighlight && this._welPageList.preventTapHighlight(false);
		this._fClickPage.detach(this._elPageList, "click");
		this._welPageList.removeClass(this._wrapPrefix("loaded"));	
	},
	
	_addTextNode : function() {
		var sTextNode = this.option("sInsertTextNode");
		this._elPageList.appendChild(document.createTextNode(sTextNode));		
	},
	
	_paginate : function(nPage){
		this._empty();
		this._addTextNode();
		
		var htOption = this.option(),
			elFirstPageLinkOn = htOption.elFirstPageLinkOn, 
			elPrevPageLinkOn = htOption.elPrevPageLinkOn,
			elNextPageLinkOn = htOption.elNextPageLinkOn,
			elLastPageLinkOn = htOption.elLastPageLinkOn,
			elFirstPageLinkOff = htOption.elFirstPageLinkOff,
			elPrevPageLinkOff = htOption.elPrevPageLinkOff, 
			elNextPageLinkOff = htOption.elNextPageLinkOff, 
			elLastPageLinkOff = htOption.elLastPageLinkOff,
			nLastPage = this._getLastPage(),
			nThisPageList = this._getPageList(nPage),
			nLastPageList = this._getPageList(nLastPage);
		
		if (nLastPage === 0) {
			this._welPageList.addClass(this._wrapPrefix("no-result"));
		} else if (nLastPage == 1) {
			this._welPageList.addClass(this._wrapPrefix("only-one")).removeClass(this._wrapPrefix("no-result"));
		} else {
			this._welPageList.removeClass(this._wrapPrefix("only-one")).removeClass(this._wrapPrefix("no-result"));
		}
		
		var nFirstPageOfThisPageList, nLastPageOfThisPageList;
		if (htOption.bAlignCenter) {
			var nLeft = Math.floor(htOption.nPagePerPageList / 2);
			nFirstPageOfThisPageList = nPage - nLeft;
			nFirstPageOfThisPageList = Math.max(nFirstPageOfThisPageList, 1);
			nLastPageOfThisPageList = nFirstPageOfThisPageList + htOption.nPagePerPageList - 1;
			if (nLastPageOfThisPageList > nLastPage) {
				nFirstPageOfThisPageList = nLastPage - htOption.nPagePerPageList + 1;
				nFirstPageOfThisPageList = Math.max(nFirstPageOfThisPageList, 1);
				nLastPageOfThisPageList = nLastPage;
			}
		} else {
			nFirstPageOfThisPageList = (nThisPageList - 1) * htOption.nPagePerPageList + 1;
			nLastPageOfThisPageList = (nThisPageList) * htOption.nPagePerPageList;
			nLastPageOfThisPageList = Math.min(nLastPageOfThisPageList, nLastPage);
		}
		
		if (htOption.sMoveUnit == "page") {
			nThisPageList = nPage;
			nLastPageList = nLastPage;
		}

		//first
		if (nPage > 1) {
			if (elFirstPageLinkOn) {
				this._welPageList.append(elFirstPageLinkOn);
				this._addTextNode();
			}
		} else {
			if (elFirstPageLinkOff) {
				this._welPageList.append(elFirstPageLinkOff);
				this._addTextNode();
			}
		}

		//prev
		if (nThisPageList > 1) {
			if (elPrevPageLinkOn) {
				this._welPageList.append(elPrevPageLinkOn);
				this._addTextNode();
			}
		} else {
			if (elPrevPageLinkOff) {
				this._welPageList.append(elPrevPageLinkOff);
				this._addTextNode();
			}	
		}		

		var el, wel;
		for (var i = nFirstPageOfThisPageList; i <= nLastPageOfThisPageList ; i++) {
			if (i == nPage) {
				el = jindo.$(jindo.$Template(htOption.sCurrentPageTemplate).process({ page : i.toString() }));
			} else {
				el = jindo.$(jindo.$Template(htOption.sPageTemplate).process({ page : i.toString() }));
				this._waPage.push(el);
			}
				
			wel = jindo.$Element(el);
			if (i == nFirstPageOfThisPageList) {
				wel.addClass(this._wrapPrefix(this.option("sClassFirst")));
			}
			if (i == nLastPageOfThisPageList) {
				wel.addClass(this._wrapPrefix(this.option("sClassLast")));
			}
			this._welPageList.append(el);
			
			this._addTextNode();
		}

		//next
		if (nThisPageList < nLastPageList) {
			if (elNextPageLinkOn) {
				this._welPageList.append(elNextPageLinkOn);
				this._addTextNode();
			}
		} else {
			if (elNextPageLinkOff) {
				this._welPageList.append(elNextPageLinkOff);
				this._addTextNode();
			}
		}
		
		//last
		if (nPage < nLastPage) {
			if (elLastPageLinkOn) {
				this._welPageList.append(elLastPageLinkOn);
				this._addTextNode();
			}
		} else {
			if (elLastPageLinkOff) {
				this._welPageList.append(elLastPageLinkOff);
				this._addTextNode();
			}
		}
	},
	
	_empty : function(){
		var htOption = this.option(),
			elFirstPageLinkOn = htOption.elFirstPageLinkOn, 
			elPrevPageLinkOn = htOption.elPrevPageLinkOn,
			elNextPageLinkOn = htOption.elNextPageLinkOn,
			elLastPageLinkOn = htOption.elLastPageLinkOn,
			elFirstPageLinkOff = htOption.elFirstPageLinkOff,
			elPrevPageLinkOff = htOption.elPrevPageLinkOff, 
			elNextPageLinkOff = htOption.elNextPageLinkOff, 
			elLastPageLinkOff = htOption.elLastPageLinkOff;
			
		elFirstPageLinkOn = this._clone(elFirstPageLinkOn);
		elPrevPageLinkOn = this._clone(elPrevPageLinkOn);
		elLastPageLinkOn = this._clone(elLastPageLinkOn);
		elNextPageLinkOn = this._clone(elNextPageLinkOn);
		elFirstPageLinkOff = this._clone(elFirstPageLinkOff);
		elPrevPageLinkOff = this._clone(elPrevPageLinkOff);
		elLastPageLinkOff = this._clone(elLastPageLinkOff);
		elNextPageLinkOff = this._clone(elNextPageLinkOff);
		this._waPage.empty();
		this._welPageList.empty();
	},
	
	_clone : function(el) {
		if (el && typeof el.cloneNode == "function") {
			return el.cloneNode(true);
		}
		return el;
	}
}).extend(jindo.UIComponent);
