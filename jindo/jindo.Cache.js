/**
 * @fileOverview Data Cache  
 * @author AjaxUI-1 <TarauS>
 * @version 1.0.4
 */
jindo.Cache = jindo.$Class({
	/**
	 * @lends jindo.Cache.prototype
	 */

	/**
	 * @constructs
	 * @class Data Cache
	 * @param {HashTable} [htOption] 초기화 옵션
	 * {
	 *     "nCacheLimit" : 100,  // 캐쉬의 최대 저장 개수
	 *     "nExpireTime" : 600   // 캐쉬의 기본 유효 시간 (600초이며, 데이터가 추가된 지, 60분 후에는 유효하지 않음)
	 * }
	 * @extends jindo.Component
	 * @example
	 * var oCache = new jindo.Cache({'nCacheLimit' : 15});
	 * oCache.add('key1', 'value1', 5 * 60);
	 * oCache.add('key2', 'value2');
	 * oCache.add({'key1':true, 'key2':false}, {'value1':10, 'value2':20});
	 *
	 * // vResult is 'value1'
	 * var vResult = oCache.get('key1');
	 *
	 * // vResult is {'value1':10, 'value2':20}
	 * var vResult = oCache.get({'key1':true, 'key2':false}); 
	 *
	 * oCache.remove('key1');
	 * oCache.clear();
	 */
	$init : function(htOption){
		this._htCacheData = {};
		this._htExpireTime = {};
		this._waKeyList = jindo.$A();
		
		this.option({
			nCacheLimit : 50,
			nExpireTime : 0
		});
		this.option(htOption);
	},

	/**
	 * 데이터를 캐쉬함
	 * 
	 * @param {Variant} vKey 저장할 데이터를 구분할 키값 (String 타입과 Object 타입 모두 가능)
	 * @param {Variant} vValue 저장할 데이터
	 * @param {Number} [nExpireTime] 캐쉬 데이터가 폐기될 시간 (nExpireTime 이후에 폐기되며, 초로 입력)
	 * @example
	 * // 문자열 키를 이용하여 데이터 캐싱
	 * oCache.add("string_key", [0, 1, 2]);
	 *
	 * // HashTable 형태의 객체 키를 이용하여 데이터 캐싱
	 * oCache.add({"key1" : "a", "key2" : "b"}, [0, 1, 2]);
	 *
	 * // 데이터 캐싱 시에, 해당 데이터의 유효 시간을 설정
	 * // (120초 후에는 컴포넌트 내부에서 데이터 삭제)
	 * oCache.add({"key1" : "a", "key2" : "b"}, [0, 1, 2], 120);
	 */
	add : function(vKey, vValue, nExpireTime){
		if(vKey && vValue){
			this._checkCacheExpire();
			this._checkCacheLimit();
			
			var sKey = this._makeKey(vKey);
			if (sKey) {
				this._htCacheData[sKey] = vValue;
				this._htExpireTime[sKey] = this._getExpireTime(nExpireTime);
				this._waKeyList.push(sKey);
				return true;
			} 
		}
		return false;
	},
	
	/**
	 * 캐쉬된 데이터를 삭제함
	 * 
	 * @param {Varinat} vKey 캐쉬 데이터의 키값
	 * @param {Boolean} 삭제 여부
	 * @example
	 * // 데이터 추가
	 * oCache.add({"key1" : "a", "key2" : "b"}, [0, 1, 2]);
	 * 
	 * // 데이터를 추가할 때 전달했던 키를 동일하게 전달하여 내부 데이터 삭제
	 * oCache.remove({"key1" : "a", "key2" : "b"});
	 */
	remove : function(vKey){
		if(vKey){
			var sKey = this._makeKey(vKey);
			if(this._htCacheData[sKey]){
				this._waKeyList = this._waKeyList.refuse(sKey);
				delete this._htExpireTime[sKey];
				delete this._htCacheData[sKey];
				return true;
			}
		}
		return false;
	},
	
	/**
	 * 캐쉬된 데이터 모두를 삭제 함
	 *
	 * @example
	 * // 데이터 추가
	 * oCache.add({"key1" : "a", "key2" : "b"}, [0, 1, 2]);
	 * oCache.add({"key1" : "1", "key2" : "2"}, [0, 0, 0]);
	 * 
	 * // clear() 메소드를 호출하여, 추가된 모든 데이터를 삭제 함
	 * oCache.clear();
	 */
	clear : function(){
		this._htCacheData = {};
		this._htExpireTime = {};
		this._waKeyList = jindo.$A();
	},
	
	/**
	 * vKey에 해당하는 캐쉬된 데이터를 리턴함
	 * 
	 * @param {Variant} vKey 캐쉬 데이터의 키값
	 * @return {Variant} 캐쉬된 데이터
	 * @example
	 * // 데이터 추가
	 * oCache.add({"key1" : "a", "key2" : "b"}, [0, 1, 2]);
	 * 
	 * // 데이터를 추가할 때 전달했던 키를 동일하게 전달
	 * // vResult is [0, 1, 2]
	 * var vResult = oCache.get({"key1" : "a", "key2" : "b"});
	 */
	get : function(vKey){
		if (vKey){
			var sKey = this._makeKey(vKey);
			if(this.check(vKey)){
				return this._htCacheData[sKey];
			}
		}
		return null;
	},
	
	/**
	 * vKey에 해당하는 캐쉬 데이터의 유효성을 검사하여 리턴
	 * 
	 * @param {Variant} vKey 캐쉬 데이터의 키값
	 * @return {Boolean} 캐쉬 데이터의 유효성
	 * @example
	 * // 데이터 추가
	 * oCache.add({"key1" : "a", "key2" : "b"}, [0, 1, 2]);
	 * 
	 * // 데이터를 추가할 때 전달했던 키를 동일하게 전달
	 * // bResult is true, bResult2 is false
	 * var bResult = oCache.check({"key1" : "a", "key2" : "b"});
	 * var bResult2 = oCache.check({"key1" : 1, "key2" : 2});
	 */
	check : function(vKey){
		if(vKey){
			var sKey = this._makeKey(vKey);
			if(this._htCacheData[sKey] && this._checkCacheExpire(sKey)){
				return true;
			}
		}
		return false;
	},

	/**
	 * 저장되어 있는 캐쉬의 개수를 체크하여, 옵션의 캐시 최대 값보다 클 경우, 가장 먼저 저장된 항목을 삭제 함
	 */
	_checkCacheLimit : function(){
		if(this._waKeyList.length() == this.option("nCacheLimit")){
			this.remove(this._waKeyList.get(0));
		}
	},
	
	/**
	 * sKey에 해당하는 캐쉬 데이터가 유효한지 검사
	 * 
	 * @param {String} sKey 문자열로 변환된 캐쉬 데이터의 키값
	 * @return {Boolean} 유효 여부
	 */
	_checkCacheExpire : function(sKey){
		if(sKey){
			var nTime = this._getTime();
			if(this._htExpireTime[sKey] === 0 || nTime < this._htExpireTime[sKey]){
				return true;
			}else{
				this.remove(jindo.$S(sKey).parseString());
				return false;
			}
		}else{
			for(var i=0, n=this._waKeyList.length(); i<n; i++){
				return this._checkCacheExpire(this._waKeyList.get(i));
			}
		}
	},
	
	/**
	 * nExpireTime을 기준으로 캐쉬의 만료 시간을 계산하여 리턴 함
	 *
	 * @param {Number} [nExpireTime] 캐쉬 만료 시간 (생략할 경우 옵션에 설정된 값을 기준으로 계산)
	 * @return {Number} 계산된 캐쉬 만료 시간
	 */
	_getExpireTime : function(nExpireTime){
		if (nExpireTime) {
			return this._getTime() + (nExpireTime * 1000);
		} else if (this.option("nExpireTime")){
			return this._getTime() + (this.option("nExpireTime") * 1000);
		} else {
			return 0;
		}
	},
	
	/**
	 * vKey가 HashTable인 경우 문자열 키로 변경하여 리턴
	 * @param {Variant} vKey 캐쉬 데이터의 키값
	 * @return {String} 문자열로 변환된 캐쉬 데이터의 키값
	 */
	_makeKey : function(vKey){
		if(vKey){
			if(typeof(vKey) == "string"){
				return vKey;
			} else{
				try {
					return jindo.$H(vKey).toQueryString();
				} catch(e) {
					return "";
				}
			}
		} else {
			return "";
		}
	},
	
	/**
	 * 현재 시간을 리턴한다.
	 * 
	 * @return {Number} 현재 시간 (유닉스 타임스탬프 값)
	 */
	_getTime : function(){
		return +new Date();
	},
	
	/**
	 * 컴포넌트 소멸자
	 */
	destroy : function(){
		this._waKeyList = null;
		this._htCacheData = null;
		this._htExpireTime = null;
	}
}).extend(jindo.Component);