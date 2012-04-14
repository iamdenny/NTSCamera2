/**
 * @fileOverview 타이머를 편리하게 사용할 수 있게해주는 컴포넌트
 * @version 1.0.4
 */
jindo.Timer = jindo.$Class({
	/** @lends jindo.Timer.prototype */

	/**
	 * Timer 컴포넌트를 초기화한다.
	 * @constructs
	 * @class 타이머의 사용을 편리하게 해주는 컴포넌트
	 * @extends jindo.Component
 	 */
	$init : function() { 
		this._nTimer = null;
		this._nLatest = null;
		this._nRemained = 0;
		this._nDelay = null;
		this._fRun = null;
		this._bIsRunning = false;
	},
	
	/**
	 * 함수를 지정한 시간이 지난 후에 실행한다. 실행될 콜백 함수가 true 를 리턴하면 setInterval 을 사용한 것처럼 계속 반복해서 수행된다.
	 * @param {Function} fCallback	지정된 지연 시간 이후에 실행될 콜백 함수
	 * @param {Number} nDelay	msec 단위의 지연 시간
	 * @return {Boolean} 항상 true
	 * @example
var o = new jindo.Timer();
o.start(function() {
	// ...
	return true;
}, 100);
	 */
 	start : function(fRun, nDelay) {
		this.abort();
		
		this._nRemained = 0;
		this._nDelay = nDelay;
		this._fRun = fRun;
		
		this._bIsRunning = true;
		this._nLatest = this._getTime();
		this.fireEvent('wait');
		this._excute(this._nDelay, false);
		
		return true;
	},
	
	/**
	 * 타이머의 동작 여부를 가져온다.
	 * @return {Boolean} 동작중이면 true, 그렇지 않으면 false
	 */
	isRunning : function() {
		return this._bIsRunning;
	},
	
	_getTime : function() {
		return new Date().getTime();
	},
	
	_clearTimer : function() {
		var bFlag = false;
		
		if (this._nTimer) {
			clearInterval(this._nTimer);
			this._bIsRunning = false;
			bFlag = true;
		}
		
		this._nTimer = null;
		return bFlag;
	},
	
	/**
	 * 현재 대기상태에 있는 타이머를 중단시킨다.
	 * @return {Boolean} 이미 멈춰있었으면 false, 그렇지 않으면 true
	 */
	abort : function() {
		var bReturn = this._clearTimer();
		if (bReturn) {
			this.fireEvent('abort');
			this._fRun = null;
		}
		return bReturn;
	},
	
	/**
	 * 현재 동작하고 있는 타이머를 일시정지 시킨다.
	 * @return {Boolean} 이미 멈춰있었으면 false, 그렇지 않으면 true
	 */
	pause : function() {
		var nPassed = this._getTime() - this._nLatest;
		this._nRemained = Math.max(this._nDelay - nPassed, 0);
		
		return this._clearTimer();
	},
	
	_excute : function(nDelay, bResetDelay) {
		var self = this;
		this._clearTimer();
	
		this._bIsRunning = true;
		this._nTimer = setInterval(function() {
			if (self._nTimer) { //self._nTimer가 null일때도 간헐적으로 수행되는 버그가 있어 추가
				self.fireEvent('run');
				
				var r = self._fRun();
				self._nLatest = self._getTime();
				
				if (!r) {
					clearInterval(self._nTimer);
					self._nTimer = null;
					self._bIsRunning = false;
					self.fireEvent('end');
					return;
				}
				
				self.fireEvent('wait');
				if (bResetDelay) {
					self._excute(self._nDelay, false);
				}
			}							   
		}, nDelay);
	},
	
	/**
	 * 일시정지 상태인 타이머를 재개시킨다.
	 * @return {Boolean} 재개에 성공했으면 true, 그렇지 않으면 false
	 */
	resume : function() {
		if (!this._fRun || this.isRunning()) {
			return false;
		}
		
		this._bIsRunning = true;
		this.fireEvent('wait');
		this._excute(this._nRemained, true);
		this._nRemained = 0;
		return true;
	}
}).extend(jindo.Component);
