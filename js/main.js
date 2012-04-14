$(document).ready(function() {   
	
	// Wait for PhoneGap to connect with the device
	document.addEventListener("deviceready", function(){
		$.mobile.allowCrossDomainPages = true;
		var woAwesome5 = new dny.Awesome5();
		 
		/*(
		var size = jindo.$Document(document).clientSize();
		alert("width : " + size.width + ", height : " + size.height);
		
		alert("screen width : " + screen.width + ", height : " + screen.height);
		
		alert("inner width : " + window.innerWidth + ", height : " + window.innerHeight);
		
		var mode = jindo.$Document().renderingMode();   
		alert('렌더링 방식 : ' + mode); 
		*/
	});
	
    
	document.addEventListener("orientationchange", function(event){
		var windowOrientation = window.orientation;
		if(windowOrientation === 0 || windowOrientation === 180){
			alert("세로");
		}else if(windowOrientation === 90 | windowOrientation === -90){
			alert('가로');
		}else{
			alert("어중간");
		}
	}, false);
    
});