/**
 * denny's Framework
 * @version 0.1.0
 * @author Denny, Lim
 */
if (typeof window != "undefined") {
	if (typeof window.dny == "undefined") {
		window.dny = {};
	}
} else {
	if (!dny) {
		dny = {};
	}
}

dny.numberFormat = function(nNumber) {
	if(typeof(nNumber) != "number") return nNumber;
	nNumber = nNumber.toString(10);
	var pattern = /(-?[0-9]+)([0-9]{3})/; 
	while(pattern.test(nNumber)) { 
		nNumber = nNumber.replace(pattern,"$1,$2"); 
	} 
	return nNumber; 
};

dny.unNumberFormat = function(sNumber) { 
	return (sNumber.replace(/\,/g,"")); 
};

dny.randomRange = function(n1, n2) {
  return Math.floor( (Math.random() * (n2 - n1 + 1)) + n1 );
};