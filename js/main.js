$(document).ready(function() {   
	// Wait for PhoneGap to connect with the device
	document.addEventListener("deviceready", function(){
		$.mobile.allowCrossDomainPages = true;
		var woAwesome5 = new dny.Awesome5();
	});
});