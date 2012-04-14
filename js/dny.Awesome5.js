dny.Awesome5 = jindo.$Class({
	
	_bDeviceReady : false,
	_oCamera : null,
	
	_welMainContent : null,
	_welEffectContent : null,
	
	_welTakeAPhoto : null,
	_wfTakeAPhoto : null,
	
	_oGalleryImage : null,
	_effectKey : null,
	_sImageDataURL : null,
	_oTempGalleryImage : null,
	
	_oLastCanvas : null,
	_nRotationDegree : null,
	
	$init : function(){              
    	this._bDeviceReady = true;
    	this._oCamera = navigator.camera;
	    
	    // set contents
	    this._welMainContent = jindo.$Element("main-content");
	    this._welEffectContent = jindo.$Element("effect-content");
	    this._welEffectDetailContent = jindo.$Element("effectdetail-content");
	    this._welEditContent = jindo.$Element("edit-content");
	    this._welRotationContent = jindo.$Element("rotation-content");
	    this._welCropContent = jindo.$Element("crop-content");

	    // set 'take-a-photo'
	    this._welTakeAPhoto = jindo.$Element("take-a-photo");
	    this._wfTakeAPhoto = jindo.$Fn(this._onTakeAPhotoClick, this).attach(this._welTakeAPhoto, "click");
	    
	    // set 'select gallery'
	    this._welSelectGallery = jindo.$Element("select-gallery");
	    this._wfSelectGalery = jindo.$Fn(this._onSelectGalleryClick, this).attach(this._welSelectGallery, "click");
	    
	    this._initEvents();                          
        
	},
	
	_initEvents : function(){
		var self = this;
		
	    $("#effect").bind("pagebeforeload", function(event, ui){
	    	$.mobile.showPageLoadingMsg();
	    });
	    
	    $("#effect").bind("pagebeforeshow", function(event, ui){
	    	self._welEffectContent.empty();
	    });
		$("#effect").bind("pageshow", function(event, ui){
			if(!self._oGalleryImage){
				alert("Please select/take a photo.");
				history.back();
				//$.mobile.changePage("div#main");
                return false;
			}
			self._printEffectsToContent();
		});
		$.mobile.fixedToolbars.setTouchToggleEnabled(false);
		
		$("#effectdetail").bind("pagebeforeshow", function(event, ui){
			self._welEffectDetailContent.empty();
		});
		$("#effectdetail").bind("pageshow", function(event, ui){
			if(!self._effectKey){
				alert("Please select an effect.");
				history.back();
				return false;
			}
			self._printEffectDetailToContent();
		});
		
		$("#not-ready").bind("pageshow", function(event, ui){
			var msg = 'Under construction.';
	        navigator.notification.alert(msg, null, 'Notice');
		});
		
		$("#save-effected-canvas").bind("click", function(event, ui){
			alert("saved");
			window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
				var oDate = new jindo.$Date(Date.now());
				var sNewFileName = oDate.format("Y-m-d-H-i-s.jpeg");
				fileSystem.root.getFile("denny.png", {create: true, exclusive: false}, function(fileEntry){
					fileEntry.createWriter(function(writer){
						writer.onwrite = function(e){
							console.log("write success");
						};
						writer.onwriteend = function(e){
							console.log("contents of file now 'some sample text'");
						};
						writer.write(self._sImageDataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
					}, function(message){
						self._onFail(message);
					});
				}, function(message){
					self._onFail(message);
				});
			}, function(message){
				self._onFail(message);
			});
		});
		
	    $("#edit").bind("pagebeforeshow", function(event, ui){
	    	self._welEditContent.empty();
	    });
		$("#edit").bind("pageshow", function(event, ui){
			if(!self._oGalleryImage){
				alert("Please select/take a photo.");
				history.back();
				//$.mobile.changePage("div#main");
                return false;
			}
			self._printTheImageToContent(self._welEditContent);
		});

		
	    $("#rotation").bind("pagebeforeshow", function(event, ui){
	    	self._welRotationContent.empty();
	    });
		$("#rotation").bind("pageshow", function(event, ui){
			if(!self._oGalleryImage){
				alert("Please select/take a photo.");
				history.back();
				//$.mobile.changePage("div#main");
                return false;
			}
			self._printTheImageToContent(self._welRotationContent);
		});
		
		$("#rotate-image-to-right").bind("click", function(event, ui){
			self._rotateEditCanvasTo(90);
		});
		$("#rotete-image-to-left").bind("click", function(event, ui){
			self._rotateEditCanvasTo(-90);
		});
		
	    $("#crop").bind("pagebeforeshow", function(event, ui){
	    	self._welCropContent.empty();
	    });
		$("#crop").bind("pageshow", function(event, ui){
			if(!self._oGalleryImage){
				alert("Please select/take a photo.");
				history.back();
				//$.mobile.changePage("div#main");
                return false;
			}
			self._printTheImageToContentAsImage(self._welCropContent);
			self._addCropPluginToContent(self._welCropContent);
		});		
	},
	
	_onTakeAPhotoClick : function(){
		var self = this;
		if(this._bDeviceReady){
			/*
			this._oCamera.getPicture(function(sImageURI){
				alert(sImageURI)
				self._putImageURIToContent(sImageURI, self._welMainContent);
			}, function(message){
				self._onFail(message);
			}, { quality: 50, 
		    	  destinationType: this._oCamera.DestinationType.FILE_URI,
		    	  sourceType: this._oCamera.PictureSourceType.CAMERA,
		    	  mediaType: navigator.camera.MediaType.PICTURE});*/
			navigator.device.capture.captureImage(function(mediaFiles){
				self._putImageURIToContent(mediaFiles[0].fullPath, self._welMainContent);
			}, function(message){
				self._onFail(message);
			}, {limit: 1});
		}else{
			alert("Awesome5 works on PhoneGap.");
		}
	},
	
	_onSelectGalleryClick : function(){
		var self = this;
		if(this._bDeviceReady){
			this._oCamera.getPicture(function(sImageURI){
				self._putImageURIToContent(sImageURI, self._welMainContent);
			}, function(message){
				self._onFail(message);
			}, { quality: 50, 
		          destinationType: this._oCamera.DestinationType.FILE_URI,
		          sourceType: this._oCamera.PictureSourceType.PHOTOLIBRARY });
		}else{
			alert("Awesome5 works on PhoneGap.");
		}
	},
	
	_onFail : function (message) {
		alert('Failed because: ' + message);
    },
	
	_putBase64ImageToContent : function(sImageData, welContent){
		welContent.empty();
		var oCanvas = document.createElement('canvas');
		oCanvas.width = 600;
		oCanvas.height = 450;
		var oContext = oCanvas.getContext("2d");
		oContext.drawImage("data:image/jpeg;base64," + sImageData, 0, 0, oCanvas.width, oCanvas.height);
		welContent.append(oCanvas);
	},
	
	_putImageURIToContent : function(sImageURI, welContent){
		var self = this;
		
		welContent.empty();
		
		//
		var oCanvas = document.createElement('canvas');
		oCanvas.width = 400;
		oCanvas.height = 300;
		var oContext = oCanvas.getContext("2d");	
		
		this._oGalleryImage = null;
		this._oGalleryImage = document.createElement('img');
		this._oGalleryImage.src = sImageURI;
		
		this._oGalleryImage.onload = function(){
			oContext.drawImage(self._oGalleryImage, 0, 0, oCanvas.width, oCanvas.height);
			welContent.append(oCanvas);
		};
		this._oLastCanvas = oCanvas; 
	},
	
	_printEffectsToContent : function(){
		var self = this;
		
		var oEffects = new dny.Awesome5.Effects();
		
		var nEffectsCount = oEffects.getCount();
		for(var i=0; i<nEffectsCount; i++){
			var oCanvas = document.createElement('canvas');
			oCanvas.width = 100; 
			oCanvas.height = 75;
			oCanvas.effectKey = oEffects.getKey(i);
			oCanvas.effectName = oEffects.getName(i);
			var oContext = oCanvas.getContext("2d");
			
			oContext.drawImage(this._oGalleryImage, 0, 0, oCanvas.width, oCanvas.height);
			oEffects.apply(i, oCanvas);
			
			oCanvas.addEventListener("click", function(e){
				var oInnerCanvas = e.currentTarget;
				$.mobile.changePage("#effectdetail");
				self._effectKey = oInnerCanvas.effectKey;
			});
			
			var welStrong = jindo.$Element('<STRONG>');
			welStrong.text(oEffects.getName(i));
			
			var welLI = jindo.$Element("<LI>");
			welLI.append(oCanvas);
			welLI.append(welStrong);
			this._welEffectContent.append(welLI);
		}
		this._oLastCanvas = oCanvas; 
	},
	
	_printEffectDetailToContent : function(){
		var oEffects = new dny.Awesome5.Effects();
		
		var oCanvas = document.createElement('canvas');
		oCanvas.width = 400;
		oCanvas.height = 300;
		var oContext = oCanvas.getContext("2d");	
		
		oContext.drawImage(this._oGalleryImage, 0, 0, oCanvas.width, oCanvas.height);
		oEffects[this._effectKey](oCanvas);
		this._sImageDataURL = oCanvas.toDataURL("image/jpeg");
		
		this._welEffectDetailContent.append(oCanvas);
		
		this._oLastCanvas = oCanvas; 
	},
	
	_printTheImageToContent : function(welContent){
		//
		var oCanvas = document.createElement('canvas');
		oCanvas.width = 400;
		oCanvas.height = 300;
		var oContext = oCanvas.getContext("2d");	
		
		oContext.drawImage(this._oGalleryImage, 0, 0, oCanvas.width, oCanvas.height);
		welContent.append(oCanvas);
		
		this._oLastCanvas = oCanvas;
		this._nRotationDegree = 0;
	},
	
	_rotateEditCanvasTo : function(nDegree){
        var image = this._oGalleryImage; 
        var canvas = this._oLastCanvas; 
        var canvasContext = canvas.getContext("2d"); 
        
        var width = 400;
        var height = 300;
        
        this._nRotationDegree = (this._nRotationDegree + nDegree) % 360;
        switch(this._nRotationDegree) { 
            default : 
            case 0 : 
                canvas.setAttribute('width', width); 
                canvas.setAttribute('height', height); 
                canvasContext.rotate(this._nRotationDegree * Math.PI / 180); 
                canvasContext.drawImage(image, 0, 0, width, height); 
                break; 
            case 90 :
            case -270 :
                canvas.setAttribute('width', height); 
                canvas.setAttribute('height', width); 
                canvasContext.rotate(this._nRotationDegree * Math.PI / 180); 
                canvasContext.drawImage(image, 0, -image.height); 
                break; 
            case 180 : 
            case -180 :
                canvas.setAttribute('width', width); 
                canvas.setAttribute('height', height); 
                canvasContext.rotate(this._nRotationDegree * Math.PI / 180); 
                canvasContext.drawImage(image, -image.width, -image.height); 
                break; 
            case 270 : 
            case -90 : 
                canvas.setAttribute('width', height); 
                canvas.setAttribute('height', width); 
                canvasContext.rotate(this._nRotationDegree * Math.PI / 180); 
                canvasContext.drawImage(image, -image.width, 0); 
                break; 
        }; 		

	},
	
	_printTheImageToContentAsImage : function(welContent){
		this._oGalleryImage.width=400;
		this._oGalleryImage.height=300;
		welContent.append(this._oGalleryImage);
	},	
	
	_addCropPluginToContent : function(welContent){
		$('#crop-content img').Jcrop({
            onSelect:    function(){console.log("selected");},
            bgColor:     'black',
            bgOpacity:   .4,
            setSelect:   [ 100, 100, 50, 50 ],
            aspectRatio: 16 / 9
        }, function(){
        	this.animateTo([100,100,400,300]);
        });
	}
});