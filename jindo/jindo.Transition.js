﻿/**
 * @fileOverview 엘리먼트의 css 스타일을 조정해 부드러운 움직임(변형)을 표현하는 컴포넌트
 * @version 1.0.4
 */
jindo.Transition = jindo.$Class({
	/** @lends jindo.Transition.prototype */
	_nFPS : 30,
	
	_aTaskQueue : null,
	_oTimer : null,
	
	_bIsWaiting : true, // 큐의 다음 동작을 하길 기다리는 상태
	_bIsPlaying : false, // 재생되고 있는 상태
	
	/**
	 * Transition 컴포넌트를 초기화한다.
	 * @constructs
	 * @class 엘리먼트의 css style의 변화를 주어 움직이는 효과를 주는 컴포넌트
	 * @param {HashTable} htOption 옵션 객체
	 * @extends jindo.Component
	 * @requires jindo.Effect
	 * @requires jindo.Timer
	 */
	$init : function(htOption) {
		this._aTaskQueue = [];
		this._oTimer = new jindo.Timer();
		this._oSleepTimer = new jindo.Timer();
		
		this.option({ 
			fEffect : jindo.Effect.linear, 
			bCorrection : false 
		});
		this.option(htOption || {});
	},

	/**
	 * 효과가 재생될 초당 frame rate를 설정하거나 가져온다.
	 * @param {Number} nFPS (생략시 현재 frame rate 리턴)
	 * @return {Number | this} 
	 */
	fps : function(nFPS) {
		if (arguments.length > 0) {
			this._nFPS = nFPS;
			return this;
		}
		
		return this._nFPS;
	},
	
	/**
	 * 트랜지션이 진행중인지 여부를 가져온다.
	 * @return {Boolean}
	 */
	isPlaying : function() {
		return this._bIsPlaying;
	},
	
	/**
	 * 진행되고 있는 Transition을 중지시킨다.
	 * @return {this}
	 */
	abort : function() {
		this._aTaskQueue = [];
		this._oTimer.abort();
		this._oSleepTimer.abort();
		
		if (this._bIsPlaying) {
			this.fireEvent("abort");
		}

		this._bIsWaiting = true;
		this._bIsPlaying = false;
		
		this._htTaskToDo = null;
		return this;
	},
	
	/**
	 * Transition을 수행한다.
	 * 파라메터를 지정(queue 메소드와 동일)하였을 경우에는 해당 동작을 바로 실행시키고, 파라메터가 생략되었을 때에는 지금까지 queue()로 지정된 동작들을 시작시킨다.
	 * 파라메터는 function타입으로 지정하여 콜백을 수행할수 있다. (예제 참고)
	 * @param {Number} nDuration Transition이 진행될 시간
	 * @param {Array} aCommand 적용할 명령셋
	 * @return {this}
	 * @see jindo.Transition#queue
	 * @example
oTransition.start(1000, 
	jindo.$("foo"), {
		'@left' : '200px'
	}
));
	 * @example
oTransition.start(1000, [
	[jindo.$("foo"), {
		'@left' : '200px'
	}],
	
	[jindo.$("bar"), {
		'@top' : '200px'
	}]
]));
	 * @example
oTransition.queue(1000,
	jindo.$("foo"), {
		'@left' : '200px'
	}
));
oTransition.start();
	 */
	start : function(nDuration, elTarget, htInfo) {
		if (arguments.length > 0) {
			this.queue.apply(this, arguments);
		}
		
		this._prepareNextTask();
		return this;
	},
	
	/**
	 * Transition을 큐에 담는다.
	 * 여러 단계의 Transition을 담아두고 순차적으로 실행시킬때 사용한다. start() 메소드가 호출되기 전까지 수행되지 않는다.
	 * 파라메터 aCommand는 [(HTMLElement)엘리먼트, (HashTable)Transition정보]로 구성되어야 하고, 여러명령을 동시에 적용할 수 있다.
	 * 파라메터로 function을 지정하여 콜백을 등록할 수 있다.
	 * @param {Number} nDuration Transition이 진행될 시간
	 * @param {Array} aCommand 적용할 명령셋
	 * @return {this}
	 * @see jindo.Transition#start
	 * @example 하나의 엘리먼트에 여러개의 명령을 지정하는 예제
oTransition.queue(1000,
	jindo.$("foo"), {
		'@left' : '200px',
		'@top' : '50px',
		'@width' : '200px',
		'@height' : '200px',
		'@backgroundColor' : [ '#07f', 'rgb(255, 127, 127)' ]
	}
); 
	 * @example 여러개의 엘리먼트에 명령을 지정하는 예 1
oTransition.queue(1000,
	jindo.$("foo"), {
		"@left" : jindo.Effect.linear("200px")
	},
	jindo.$("bar"), {
		"@top" : jindo.Effect.easeOut("200px")
	}
);
	 * @example 여러개의 엘리먼트에 명령을 지정하는 예 2
oTransition.queue(1000, [
	[jindo.$("foo"), {
		"@left" : jindo.Effect.linear("200px")
	}],
	[jindo.$("bar"), {
		"@top" : jindo.Effect.easeIn("200px")
	}]
]);  
	 * @example 엘리먼트를 getter / setter 함수로 지정하는 예  
oTransition.queue(1000, [
	[{
		getter : function(sKey) {
			return jindo.$Element("foo")[sKey]();
		},
		
		setter : function(sKey, sValue) {
			jindo.$Element("foo")[sKey](parseFloat(sValue));
		}
	}, {
		'height' : jindo.Effect.easeIn(100)
	}]
]);  
	 * @example 파라메터로 function을 지정하여 콜백을 수행하는 예제
oTransition.start(function(){
	alert("end")
});
	 */
	queue : function(nDuration, aCommand) {
		var htTask;
		if (typeof arguments[0] == 'function') {
			htTask = {
				sType : "function",
				fTask : arguments[0]
			};
		} else {
			var a = [];
			if (arguments[1] instanceof Array) {
				a = arguments[1];
			} else {
				var aInner = [];
				jindo.$A(arguments).forEach(function(v, i){
					if (i > 0) {
						aInner.push(v);
						if (i % 2 === 0) {
							a.push(aInner.concat());
							aInner = [];
						} 
					}
				});
			}
			
			htTask = {
				sType : "task",
				nDuration : nDuration, 
				aList : []
			};
			
			for (var i = 0, nLen = a.length; i < nLen; i ++) {
				var aValue = [],
					htArg = a[i][1],
					sEnd;
				
				for (var sKey in htArg) {
					sEnd = htArg[sKey];
					if (/^(@|style\.)(\w+)/i.test(sKey)) {
						aValue.push([ "style", RegExp.$2, sEnd ]);
					} else {
						aValue.push([ "attr", sKey, sEnd ]);
					}
				}
				
				htTask.aList.push({
					elTarget : a[i][0],
					aValue : aValue
				});
			}
		}
		this._queueTask(htTask);
		
		return this;
	},
	
	/**
	 * 진행되고 있는 Transition을 일시중지시킨다.
	 * Transition이 진행중일때만 가능하다. (sleep 상태일 때에는 불가능)
	 * @return {this}
	 */
	pause : function() {
		if (this._oTimer.abort()) {
			this.fireEvent("pause");
		}
		return this;
	},
	
	/**
	 * 일시중지된 Transition을 재시작시킨다.
	 * @return {this}
	 */
	resume : function() {
		if (this._htTaskToDo) {
			if (this._bIsWaiting === false && this._bIsPlaying === true) {
				this.fireEvent("resume");
			}
			
			this._doTask();
			
			this._bIsWaiting = false;
			this._bIsPlaying = true;
		
			var self = this;
			this._oTimer.start(function() {
				var bEnd = !self._doTask();
				if (bEnd) {
					self._bIsWaiting = true;
					setTimeout(function() { 
						self._prepareNextTask(); 
					}, 0);
				}
				
				return !bEnd;
			}, this._htTaskToDo.nInterval);
		}
		return this;
	},
	
	/**
	 * 지정된 Transition이 종료된 이후에 또 다른 Transition 을 수행한다.
	 * start() 메소드는 더이상 현재 진행중인 Transition을 abort시키지 않는다.
	 * @return {this}
	 * @deprecated start()
	 */
	precede : function(nDuration, elTarget, htInfo) {
		this.start.apply(this, arguments);
		return this;
	},
	
	/**
	 * 현재의 Transition 종료 후 다음 Transition 진행하기전에 지정된 시간만큼 동작을 지연한다.
	 * @param {Number} nDuration 지연할 시간
	 * @param {Function} fCallback 지연이 시작될때 수행될 콜백함수 (생략가능)
	 * @return {this}
	 * @example
oTransition.start(1000, jindo.$("foo"), {
	"@left" : jindo.Effect.linear(oPos.pageX + "px")
}).sleep(500).start(1000, jindo.$("bar"), {
	"@top" : jindo.Effect.easeOut(oPos.pageY + "px")
});
	 */
	sleep : function(nDuration, fCallback) {
		if (typeof fCallback == "undefined") {
			fCallback = function(){};
		}
		this._queueTask({
			sType : "sleep",
			nDuration : nDuration,
			fCallback : fCallback 
		});
		this._prepareNextTask();
		return this;
	},
	
	_queueTask : function(v) {
		this._aTaskQueue.push(v);
	},
	
	_dequeueTask : function() {
		var htTask = this._aTaskQueue.shift();
		if (htTask) {
			if (htTask.sType == "task") {
				var aList = htTask.aList;
				for (var i = 0, nLength = aList.length; i < nLength; i++) {
					
					var elTarget = aList[i].elTarget,
						welTarget = null;
					
					for (var j = 0, aValue = aList[i].aValue, nJLen = aValue.length; j < nJLen; j++) {
						var sType = aValue[j][0],
							sKey = aValue[j][1],
							fFunc = aValue[j][2];
						
						if (typeof fFunc != "function") {
							var fEffect = this.option("fEffect");
							if (fFunc instanceof Array) {
								fFunc = fEffect(fFunc[0], fFunc[1]);
							} else {
								fFunc = fEffect(fFunc);
							}
							aValue[j][2] = fFunc;
						}
						
						if (fFunc.setStart) {
							if (this._isHTMLElement(elTarget)) {
								welTarget = welTarget || jindo.$Element(elTarget);
								switch (sType) {
									case "style":
										fFunc.setStart(welTarget.css(sKey));
										break;
										
									case "attr":
										fFunc.setStart(welTarget.$value()[sKey]);
										break;
								}
							} else {
								fFunc.setStart(elTarget.getter(sKey));
							}
						}
					}
				}
			}
			return htTask;
		} else {
			return null;
		}
	},
	
	_prepareNextTask : function() {
		if (this._bIsWaiting) {
			var htTask = this._dequeueTask();
			if (htTask) {
				switch (htTask.sType) {
					case "task":
						if (!this._bIsPlaying) {
							this.fireEvent("start");
						}
						var nInterval = 1000 / this._nFPS,
							nGap = nInterval / htTask.nDuration;
						
						this._htTaskToDo = {
							aList: htTask.aList,
							nRatio: 0,
							nInterval: nInterval,
							nGap: nGap,
							nStep: 0,
							nTotalStep: Math.ceil(htTask.nDuration / nInterval)
						};
						
						this.resume();
						break;
					case "function":
						if (!this._bIsPlaying) {
							this.fireEvent("start");
						}
						htTask.fTask();
						this._prepareNextTask();
						break;
					case "sleep":
						if (this._bIsPlaying) {
							this.fireEvent("sleep", {
								nDuration: htTask.nDuration
							});
							htTask.fCallback();
						}
						var self = this;
						this._oSleepTimer.start(function(){
							self.fireEvent("awake");
							self._prepareNextTask();
						}, htTask.nDuration);
						break;
				}
			} else {
				if (this._bIsPlaying) {
					this._bIsPlaying = false;
					this.abort();
					this.fireEvent("end");
				}
			}
		}
	},
	
	_isHTMLElement : function(el) {
		return ("tagName" in el);
	},
	
	_doTask : function() {
		var htTaskToDo = this._htTaskToDo,
			nRatio = parseFloat(htTaskToDo.nRatio.toFixed(5), 1),
			nStep = htTaskToDo.nStep,
			nTotalStep = htTaskToDo.nTotalStep,
			aList = htTaskToDo.aList,
			htCorrection = {},
			bCorrection = this.option("bCorrection");
		
		for (var i = 0, nLength = aList.length; i < nLength; i++) {
			var elTarget = aList[i].elTarget,
				welTarget = null;
			
			for (var j = 0, aValue = aList[i].aValue, nJLen = aValue.length; j < nJLen; j++) {
				var sType = aValue[j][0],
					sKey = aValue[j][1],
					sValue = aValue[j][2](nRatio);
				
				if (this._isHTMLElement(elTarget)) {
					if (bCorrection) {
						var sUnit = /^\-?[0-9\.]+(%|px|pt|em)?$/.test(sValue) && RegExp.$1 || "";
						if (sUnit) {
							var nValue = parseFloat(sValue);
							nValue += htCorrection[sKey] || 0;
							nValue = parseFloat(nValue.toFixed(5));
							if (i == nLength - 1) {
								sValue = Math.round(nValue) + sUnit;
							} else {
								htCorrection[sKey] = nValue - Math.floor(nValue);
								sValue = parseInt(nValue, 10) + sUnit;
							}
						}
					}
					
					welTarget = welTarget || jindo.$Element(elTarget);
					
					switch (sType) {
						case "style":
							welTarget.css(sKey, sValue);
							break;
							
						case "attr":
							welTarget.$value()[sKey] = sValue;
							break;
					}
				} else {
					elTarget.setter(sKey, sValue);
				}
				
				if (this._bIsPlaying) {
					this.fireEvent("playing", {
						element : elTarget,
						sKey : sKey,
						sValue : sValue,
						nStep : nStep,
						nTotalStep : nTotalStep
					});
				}
			}
		}
		htTaskToDo.nRatio = Math.min(htTaskToDo.nRatio + htTaskToDo.nGap, 1);
		htTaskToDo.nStep += 1;
		return nRatio != 1;
	}
}).extend(jindo.Component);

// jindo.$Element.prototype.css 패치
(function() {
	
	var b = jindo.$Element.prototype.css;
	jindo.$Element.prototype.css = function(k, v) {
		if (k == "opacity") {
			return typeof v != "undefined" ? this.opacity(parseFloat(v)) : this.opacity();
		} else {
			return typeof v != "undefined" ? b.call(this, k, v) : b.call(this, k);
		}
	};
})();