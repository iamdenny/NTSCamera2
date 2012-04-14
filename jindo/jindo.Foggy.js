/**
 * @fileOverview 특정영역을 강조하기 위해 이외의 부분전체를 안개처럼 뿌옇게 가려주는 컴포넌트
 * @author hooriza, modified by senxation
 * @version 1.0.4
 */
jindo.Foggy = jindo.$Class({
	/** @lends jindo.Foggy.prototype */

	_elFog : null,
	_bFogAppended : false,
	_oExcept : null,
	_bFogVisible : false,
	_bFogShowing : false,
	_oTransition : null,
	/**
	 * Foggy 컴포넌트를 생성한다.
	 * Foggy 컴포넌트는 특정영역을 highlighting하기 위해 이외의 부분을 안개처럼 뿌옇게 가려주는 기능을 한다.
	 * @constructs
	 * @class 특정영역을 강조하기 위해 이외의 부분전체를 안개처럼 뿌옇게 가려주는 컴포넌트
	 * @extends jindo.Component
	 * @requires jindo.Effect
	 * @requires jindo.Transition
	 * @param {HashTable} htOption 옵션 객체
	 * @example
var foggy = new jindo.Foggy({
	sClassName : "fog", //(String) fog 레이어에 지정될 클래스명
	nShowDuration : 200, //(Number) fog 레이어가 완전히 나타나기까지의 시간 (ms)
	nShowOpacity : 0.5, //(Number) fog 레이어가 모두 보여졌을 때의 투명도 (0~1사이의 값)
	nHideDuration : 200, //(Number) fog 레이어가 완전히 사라지기까지의 시간 (ms)
	nHideOpacity : 0, //(Number) fog 레이어를 숨기기위해 적용할 투명도 (0~1사이의 값)
	fShowEffect : jindo.Effect.linear, // (jindo.Effect) fog 레이어를 보여줄 때 적용할 효과
	fHideEffect : jindo.Effect.linear, // (jindo.Effect) fog 레이어를 숨길 때 적용할 효과
	nFPS : 15 //(Number) 효과가 재생될 초당 frame rate
	nZIndex : 32000 //(Number) foggy layer의 zindex. foggy에 의해 가려지지 않게 할 요소가 있는 경우에 사용 
}).attach({
	beforeShow : function(oCustomEvent) {
		//oCustomEvent.stop(); 수행시 fog레이어를 보여주지 않음.
	},
	show : function() {
		//fog 레이어가 화면에 보여지고나서 발생
	},
	beforeHide : function(oCustomEvent) {
		//oCustomEvent.stop(); 수행시 fog레이어를 숨기지 않음.
	},
	hide : function() {
		//fog 레이어가 화면에서 숨겨지고나서 발생
	}
});

//컴포넌트에 의해 생성된 fog레이어에 대한 설정
foggy.getFog().className = 'fog';
foggy.getFog().onclick = function() { foggy.hide(); };
	 */
	$init : function(htOption) {
		this.option({
			sClassName : "fog",
			nShowDuration : 200,
			nShowOpacity : 0.5,
			nHideDuration : 200,
			nHideOpacity : 0,
			fShowEffect : jindo.Effect.linear,
			fHideEffect : jindo.Effect.linear,
			nFPS : 15,
			nZIndex : 32000
		});
		this.option(htOption || {});

		this._elFog = jindo.$('<div class="' + this.option("sClassName") + '">');
		this._welFog = jindo.$Element(this._elFog);
		document.body.insertBefore(this._elFog, document.body.firstChild);
		this._welFog.opacity(this.option('nHideOpacity'));
		this._welFog.hide();

		this._oExcept = {};

		this._oTransition = new jindo.Transition().fps(this.option("nFPS"));

		this._fOnResize = jindo.$Fn(this._fitFogToDocument, this);
		this._fOnScroll = jindo.$Fn(this._fitFogToDocumentScrollSize, this);
	},

	_getScroll : function(wDocument) {
		return {
			top : window.pageYOffset || document[wDocument._docKey].scrollTop,
			left : window.pageXOffset || document[wDocument._docKey].scrollLeft
		};
	},

	_fitFogToDocument : function() {
		var wDocument = jindo.$Document();

		this._elFog.style.left = this._getScroll(wDocument).left + 'px';
		this._elFog.style.width = "100%";

		var self = this;
		clearTimeout(this._nTimer);
		this._nTimer = null;

		//가로스크롤이 생겼다 사라지는경우의 버그를 수정하기위한 setTimeout
		this._nTimer = setTimeout(function(){

			var oSize = wDocument.clientSize();

			self._elFog.style.top = self._getScroll(wDocument).top + 'px';
			self._elFog.style.height = oSize.height + 'px';

			self._elFog.style.left = self._getScroll(wDocument).left + 'px';

		}, 100);
	},

	_fitFogToDocumentScrollSize : function() {
		var oSize = jindo.$Document().scrollSize();
		this._elFog.style.left = "0";
		this._elFog.style.top = "0";
		this._elFog.style.width = oSize.width + 'px';
		this._elFog.style.height = oSize.height + 'px';
	},

	/**
	 * 생성된 fog 레이어 엘리먼트를 가져온다.
	 * @return {HTMLElement} fog 레이어 엘리먼트
	 */
	getFog : function() {
		return this._elFog;
	},

	/**
	 * fog 레이어가 보여졌는지 여부를 가져온다.
	 * @return {Boolean}
	 */
	isShown : function() {
		return this._bFogVisible;
	},

	/**
	 * fog 레이어가 보여지고 있는 상태인지 여부를 가져온다.
	 * @return {Boolean}
	 */
	isShowing : function() {
		return this._bFogShowing;
	},
	
	/**
	 * fog 레이어를 보여준다. (elExcept는 가리지 않는다.)
	 * @param {HTMLElement} elExcept
	 */
	show : function(elExcept) {
		if (!this._bFogVisible) {
			if (this.fireEvent('beforeShow')) {
				if (elExcept) {
					this._oExcept.element = elExcept;
					var sPosition = jindo.$Element(elExcept).css('position');
					if (sPosition == 'static') {
						elExcept.style.position = 'relative';
					}

					this._oExcept.position = elExcept.style.position;
					this._oExcept.zIndex = elExcept.style.zIndex;
					elExcept.style.zIndex = this.option('nZIndex')+1;
				}

				this._elFog.style.zIndex = this.option('nZIndex');
				this._elFog.style.display = 'none';

				this._fitFogToDocument();
				this._fOnResize.attach(window, "resize");
				this._fOnScroll.attach(window, "scroll");

				this._elFog.style.display = 'block';

				var self = this;
				this._bFogShowing = true;
				this._oTransition.abort().start(this.option('nShowDuration'),
					this._elFog, { '@opacity' : this.option("fShowEffect")(this.option('nShowOpacity')) }
				).start(function() {
					self._bFogVisible = true;
					self._bFogShowing = false;
					self.fireEvent('show');
				});
			}
		}
	},

	/**
	 * fog 레이어를 숨긴다.
	 */
	hide : function() {
		if (this._bFogVisible || this._bFogShowing) {
			if (this.fireEvent('beforeHide')) {
				var self = this;

				this._oTransition.abort().start(this.option('nHideDuration'),
					this._elFog, { '@opacity' : this.option("fHideEffect")(this.option('nHideOpacity')) }
				).start(function() {
					self._elFog.style.display = 'none';

					var elExcept = self._oExcept.element;
					if (elExcept) {
						elExcept.style.position = self._oExcept.position;
						elExcept.style.zIndex = self._oExcept.zIndex;
					}
					self._oExcept = {};
					self._fOnResize.detach(window, "resize");
					self._fOnScroll.detach(window, "scroll");

					self._bFogVisible = false;

					self.fireEvent('hide');
				});
			}
		}
	}
}).extend(jindo.Component);
