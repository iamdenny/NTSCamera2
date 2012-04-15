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
	_htClientSize : null,
	
	$init : function(){
    	this._bDeviceReady = true;
    	this._oCamera = navigator.camera;
    	
    	this._htClientSize = jindo.$Document(document).clientSize();
//        alert(this._htClientSize.width + " :: " + this._htClientSize.height);
    	//this._htClientSize.height = this._htClientSize.height - 60; 
	    
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

        this._initWindowSize();

	    this._initEvents();
	},
	
	_initWindowSize : function(){
		var self = this;
//		var f = jindo.$Fn(function(e){
//			//self._htClientSize = jindo.$Document(document).clientSize();
//		}, this).bind();
//		// bind함
//		jindo.m.bindRotate(f);
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
		//$.mobile.fixedToolbars.setTouchToggleEnabled(false);
		
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
			self._printTheImageToContent(self._welCropContent);
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

		this._oGalleryImage = null;
		this._oGalleryImage = document.createElement('img');
		this._oGalleryImage.src = sImageURI;
		
		var oCanvas = document.createElement('canvas');
		var oContext = oCanvas.getContext("2d");
		
		this._oGalleryImage.onload = function(){
			var htAdjustedSize = self._getAdjustedSize(self._oGalleryImage.width, self._oGalleryImage.height);
			oCanvas.width = htAdjustedSize.width;
			oCanvas.height = htAdjustedSize.height;
			
			oContext.drawImage(self._oGalleryImage, 0, 0, oCanvas.width, oCanvas.height);
			welContent.append(oCanvas);
                            
            if(htAdjustedSize.bWidthIsLonger){
                var nMarginTop = (htAdjustedSize.height / 2) * -1;
//                alert(htAdjustedSize.width + " :: " + htAdjustedSize.height + " ::1 " + nMarginTop);
                self._welMainContent.css({position:'absolute', top:'50%', left : 0, marginTop: nMarginTop + 'px', marginLeft : 0});                            
            }else{
                var nMarginLeft = (htAdjustedSize.width / 2) * -1;
//                alert(htAdjustedSize.width + " :: " + htAdjustedSize.height + " ::2 " + nMarginLeft);
                self._welMainContent.css({position:'absolute', top:'0', left : '50%', marginTop : 0,  marginLeft: nMarginLeft + 'px'});    
            }

		};
		this._oLastCanvas = oCanvas; 
	},
	
	_getAdjustedSize : function(nWidth, nHeight){
		
		var htSize = {};
		
		// 인자값 비율 계산
		var nArgRatio = 0;
		nArgRatio = nWidth / nHeight;
//                            alert(this._htClientSize.width / nArgRatio + " :::::: " + this._htClientSize.height + " ::: " + nArgRatio + " ::: " + nWidth + "x" + nHeight);
		// width 기준
		if((this._htClientSize.width / nArgRatio) >= this._htClientSize.height){
			htSize.width = this._htClientSize.height * nArgRatio;
			htSize.height = this._htClientSize.height;
            htSize.bWidthIsLonger = false;
		}else{
			htSize.width = this._htClientSize.width;
			htSize.height = this._htClientSize.width / nArgRatio;
            htSize.bWidthIsLonger = true;
		}
		
		return htSize;
	},
	
	_printEffectsToContent : function(){
		var self = this;
		
		var oEffects = new dny.Awesome5.Effects();
		
		var nEffectsCount = oEffects.getCount();
		for(var i=0; i<nEffectsCount; i++){
			var oCanvas = document.createElement('canvas');
			oCanvas.width = this._htClientSize.width / 3; 
			oCanvas.height = oCanvas.width / 1.35;
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
		var htAdjustedSize = this._getAdjustedSize(this._oGalleryImage.width, this._oGalleryImage.height);
		oCanvas.width = htAdjustedSize.width;
		oCanvas.height = htAdjustedSize.height;
		var oContext = oCanvas.getContext("2d");	
		
		oContext.drawImage(this._oGalleryImage, 0, 0, oCanvas.width, oCanvas.height);
		oEffects[this._effectKey](oCanvas);
		this._sImageDataURL = oCanvas.toDataURL("image/jpeg");
		
		this._welEffectDetailContent.append(oCanvas);

        if(htAdjustedSize.bWidthIsLonger){
            var nMarginTop = (htAdjustedSize.height / 2) * -1;
//                alert(htAdjustedSize.width + " :: " + htAdjustedSize.height + " ::1 " + nMarginTop);
            this._welEffectDetailContent.css({position:'absolute', top:'50%', left : 0, marginTop: nMarginTop + 'px', marginLeft : 0});                            
        }else{
            var nMarginLeft = (htAdjustedSize.width / 2) * -1;
//                alert(htAdjustedSize.width + " :: " + htAdjustedSize.height + " ::2 " + nMarginLeft);
            this._welEffectDetailContent.css({position:'absolute', top:'0', left : '50%', marginTop : 0,  marginLeft: nMarginLeft + 'px'});    
        }
		
		this._oLastCanvas = oCanvas; 
	},
	
	_printTheImageToContent : function(welContent){
		//
		var oCanvas = document.createElement('canvas');
		var htAdjustedSize = this._getAdjustedSize(this._oGalleryImage.width, this._oGalleryImage.height);
		oCanvas.width = htAdjustedSize.width;
		oCanvas.height = htAdjustedSize.height;
		var oContext = oCanvas.getContext("2d");	
		
		oContext.drawImage(this._oGalleryImage, 0, 0, oCanvas.width, oCanvas.height);
		welContent.append(oCanvas);
		
        if(htAdjustedSize.bWidthIsLonger){
            var nMarginTop = (htAdjustedSize.height / 2) * -1;
//                alert(htAdjustedSize.width + " :: " + htAdjustedSize.height + " ::1 " + nMarginTop);
            welContent.css({position:'absolute', top:'50%', left : 0, marginTop: nMarginTop + 'px', marginLeft : 0});                            
        }else{
            var nMarginLeft = (htAdjustedSize.width / 2) * -1;
//                alert(htAdjustedSize.width + " :: " + htAdjustedSize.height + " ::2 " + nMarginLeft);
            welContent.css({position:'absolute', top:'0', left : '50%', marginTop : 0,  marginLeft: nMarginLeft + 'px'});    
        }
		
		this._oLastCanvas = oCanvas;
		this._nRotationDegree = 0;
	},
	
	_rotateEditCanvasTo : function(nDegree){
        var image = this._oGalleryImage; 
        var canvas = this._oLastCanvas; 
        var canvasContext = canvas.getContext("2d"); 
		
        var htAdjustedSize = null;
        var width = null;
        var height = null;
        
        this._nRotationDegree = (this._nRotationDegree + nDegree) % 360;
        switch(this._nRotationDegree) { 
            default : 
            case 0 : 
                htAdjustedSize = this._getAdjustedSize(this._oGalleryImage.width, this._oGalleryImage.height);
                width = htAdjustedSize.width;
                height = htAdjustedSize.height;
                            
                canvas.setAttribute('width', width); 
                canvas.setAttribute('height', height); 
                canvasContext.rotate(this._nRotationDegree * Math.PI / 180); 
                canvasContext.drawImage(image, 0, 0, width, height); 
                break; 
            case 90 :
            case -270 :
                htAdjustedSize = this._getAdjustedSize(this._oGalleryImage.height, this._oGalleryImage.width);
                width = htAdjustedSize.width;
                height = htAdjustedSize.height;
                            
                canvas.setAttribute('width', width); 
                canvas.setAttribute('height', height); 
                canvasContext.rotate(this._nRotationDegree * Math.PI / 180); 
                canvasContext.scale(width/this._oGalleryImage.height, width/this._oGalleryImage.height);
                canvasContext.drawImage(image, 0, -image.height); 
                break; 
            case 180 : 
            case -180 :
                htAdjustedSize = this._getAdjustedSize(this._oGalleryImage.width, this._oGalleryImage.height);
                width = htAdjustedSize.width;
                height = htAdjustedSize.height;
                            
                canvas.setAttribute('width', width); 
                canvas.setAttribute('height', height); 
                canvasContext.rotate(this._nRotationDegree * Math.PI / 180); 
                canvasContext.scale(width/this._oGalleryImage.width, width/this._oGalleryImage.width);
                canvasContext.drawImage(image, -image.width, -image.height); 
                break; 
            case 270 : 
            case -90 : 
                htAdjustedSize = this._getAdjustedSize(this._oGalleryImage.height, this._oGalleryImage.width);
                width = htAdjustedSize.width;
                height = htAdjustedSize.height;
                            
                canvas.setAttribute('width', width); 
                canvas.setAttribute('height', height); 
                canvasContext.rotate(this._nRotationDegree * Math.PI / 180); 
                canvasContext.scale(width/this._oGalleryImage.height, width/this._oGalleryImage.height);
                canvasContext.drawImage(image, -image.width, 0); 
                break; 
        }; 		
                            
        if(htAdjustedSize.bWidthIsLonger){
            var nMarginTop = (htAdjustedSize.height / 2) * -1;
            this._welRotationContent.css({position:'absolute', top:'50%', left : 0, marginTop: nMarginTop + 'px', marginLeft : 0});                            
        }else{
            var nMarginLeft = (htAdjustedSize.width / 2) * -1;
            this._welRotationContent.css({position:'absolute', top:'0', left : '50%', marginTop : 0,  marginLeft: nMarginLeft + 'px'});    
        }

	},
	
	_printTheImageToContentAsImage : function(welContent){
		this._oGalleryImage.width=400;
		this._oGalleryImage.height=300;
		welContent.append(this._oGalleryImage);
	},	
	
	_addCropPluginToContent : function(welContent){
//		$('#crop-content img').Jcrop({
//            onSelect:    function(){console.log("selected");},
//            bgColor:     'black',
//            bgOpacity:   .4,
//            setSelect:   [ 100, 100, 50, 50 ],
//            aspectRatio: 16 / 9
//        }, function(){
//        	this.animateTo([100,100,400,300]);
//        });
	}
});