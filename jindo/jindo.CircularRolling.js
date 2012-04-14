/**
 * @fileOverview 목록을 순환이동하는 롤링 컴포넌트
 * @author hooriza, modified by senxation
 * @version 1.0.4
 */
jindo.CircularRolling = jindo.$Class({
	/** @lends jindo.CircularRolling.prototype */
	/**
	 * 컴포넌트를 생성한다.
	 * 순환 롤링 컴포넌트는 moveBy 메소드만을 이용해서 롤링하여야한다.
	 * @remark 순환 롤링 컴포넌트는 리스트내의 아이템을 복제하여 무한의 리스트처럼 보이게 동작하므로 상속한 jindo.Rolling의 모든 메소드들을 동일하게 사용할 수 없고 이동을 위해서 moveBy 메소드를 사용해야 한다.
	 * @constructs
	 * @class 목록을 순환이동하는 롤링 컴포넌트
	 * @extends jindo.Rolling
	 * @see jindo.Rolling
	 */			 
	$init : function() {
		this.refresh();
	},
	
	/**
	 * 롤링 컴포넌트를 다시 로드한다. 리스트가 갱신되었을때 호출하여야한다.
	 * @return {this}
	 */
	refresh : function() {
		this.getTransition().abort();
		this._el[this._oKeys.scrollLeft] = 0;
		this._nDuplicateCount = 0;
		this._nItemCount = this.getItems().length;
		this._nDisplayedCount = this.getDisplayedItemCount();
		if (this.isOverflowed()) {
			this._nDuplicateCount = (this._nDisplayedCount <= (this._nItemCount / 2)) ? 1 : 2;
			this._duplicate(this._nDuplicateCount);
		}
		return this;
	},
	
	_duplicate : function(n) {
		var elList = this._elList,
			elDuplicatedList = jindo.$('<ul>'),
			sListInnerHTML = elList.innerHTML,
			aItem;
		
		for (var i = 0; i < n; i++) {
			elDuplicatedList.innerHTML = sListInnerHTML;
			aItem = jindo.$$('> li', elDuplicatedList);
			for (var j = 0; j < aItem.length; j++) {
				elList.appendChild(aItem[j]);
			}
		}
	},
	
	_setStartPosition : function(n, nTo) {
		var oKeys = this._oKeys;
		var nNewPosition = n % (this._nItemCount) || 0;
		if (nTo < 0) {
			var nTimes = this._nDuplicateCount;
			if (nNewPosition + this._nDisplayedCount > this._nItemCount) {
				nTimes -= 1;
			} 
			nNewPosition += this._nItemCount * nTimes;
		}
		this._el[oKeys.scrollLeft] = this._getPosition(nNewPosition);
	},
	
	/**
	 * 현재 위치와 n만큼 떨어진 아이템으로 이동한다.
	 * 롤링이 진행중일때에는 이동되지 않고 false를 리턴한다.
	 * @param {Number} n
	 * @return {Boolean} 성공여부
	 */
	moveBy : function(n) {
		if (this.isMoving()) {
			return false;
		}
		
		/*
		if (Math.abs(n) > this._nDisplayedCount) {
			if (n > 0) {
				n = this._nDisplayedCount;
			} else {
				n = -this._nDisplayedCount;
			}
		}
		*/
		
		var bBig = (n >= this._nItemCount);
		
		n = n % this._nItemCount;
		if (bBig) { n += this._nItemCount; }
		
		this._setStartPosition(this.getIndex(), n);
		
		var nTarget = this.getIndex() + n;
		if (!this._move(nTarget)) {
			return false;
		}
		return true;
	}

}).extend(jindo.Rolling);
