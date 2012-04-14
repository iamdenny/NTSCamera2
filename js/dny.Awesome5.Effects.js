dny.Awesome5.Effects = jindo.$Class({
	
	_nCount : null,
	
	$init : function(){
		this._nCount = 14;
	},
	
	getCount : function(){
		return this._nCount;
	},
	
	apply : function(nIndex, oCanvas){
		this[this.getKey(nIndex)](oCanvas);		
	},
	
	getKey : function(nIndex) {
		var sKey, sName;
		sName = this.getName(nIndex);
		sKey = sName.toLowerCase().replace(/\s/g, '');
		return sKey;
	},
	
	getName : function(nIndex) {
		var sName = "";
		nIndex = nIndex % this._nCount;
		switch(nIndex){
		case 0 : sName = "Sepia"; break;
		case 1 : sName = "Noise"; break;
		case 2 : sName = "Emboss"; break;
		case 3 : sName = "Brightness"; break;
		case 4 : sName = "Color Adjust"; break;
		case 5 : sName = "Desaturate"; break;
		case 6 : sName = "Edge Detection"; break;
		case 7 : sName = "Glow"; break;
		case 8 : sName = "Lighten"; break;
		case 9 : sName = "Mosaic"; break;
		case 10: sName = "Pointillize"; break;
		case 11: sName = "Posterize"; break;
		case 12: sName = "Sharpen"; break;
		case 13: sName = "Solarize"; break;
		}
		return sName;
	},
	
	sepia : function(oCanvas){
		var oContext = oCanvas.getContext("2d");
		var htImageData = oContext.getImageData(0, 0, oCanvas.width, oCanvas.height);
		var data = htImageData.data;
		var length = data.length;	
		
		for(var i=0; i<length; i+=4){
			var or = data[i];
			var og = data[i+1];
			var ob = data[i+2];

			var r = (or * 0.393 + og * 0.769 + ob * 0.189);
			var g = (or * 0.349 + og * 0.686 + ob * 0.168);
			var b = (or * 0.272 + og * 0.534 + ob * 0.131);

			if (r < 0) r = 0; if (r > 255) r = 255;
			if (g < 0) g = 0; if (g > 255) g = 255;
			if (b < 0) b = 0; if (b > 255) b = 255;
			
			data[i] = r;
			data[i+1] = g;
			data[i+2] = b;
		}
		
		htImageData.data = data;
		oContext.putImageData(htImageData, 0, 0);
		return true;	
	},
	
	noise : function(oCanvas){
		var oContext = oCanvas.getContext("2d");
		var htImageData = oContext.getImageData(0, 0, oCanvas.width, oCanvas.height);
		var data = htImageData.data;
		var length = data.length;	
		
		var amount = 0.5;
		var strength = 0.5;
		
		amount = Math.max(0,Math.min(1,amount));
		strength = Math.max(0,Math.min(1,strength));
		
		var noise = 128 * strength;
		var noise2 = noise / 2;
		var random = Math.random;
		for(var i=0; i<length; i+=4){
			var r = data[i] - noise2 + (random() * noise);
			var g = data[i+1] - noise2 + (random() * noise);
			var b = data[i+2] - noise2 + (random() * noise);
			
			if (r < 0 ) r = 0;
			if (g < 0 ) g = 0;
			if (b < 0 ) b = 0;
			if (r > 255 ) r = 255;
			if (g > 255 ) g = 255;
			if (b > 255 ) b = 255;
			
			data[i] = r;
			data[i+1] = g;
			data[i+2] = b;
		}
		
		htImageData.data = data;
		oContext.putImageData(htImageData, 0, 0);
		return true;
	},
	
	emboss : function(oCanvas){
		var oContext = oCanvas.getContext("2d");
		var htImageData = oContext.getImageData(0, 0, oCanvas.width, oCanvas.height);
		var data = htImageData.data;
		var length = data.length;	

		var strength = 1;
		var greyLevel = 180;
		var direction = "topleft";
		var blend = false;

		var dirY = 0;
		var dirX = 0;

		switch (direction) {
			case "topleft":			// top left
				dirY = -1;
				dirX = -1;
				break;
			case "top":			// top
				dirY = -1;
				dirX = 0;
				break;
			case "topright":			// top right
				dirY = -1;
				dirX = 1;
				break;
			case "right":			// right
				dirY = 0;
				dirX = 1;
				break;
			case "bottomright":			// bottom right
				dirY = 1;
				dirX = 1;
				break;
			case "bottom":			// bottom
				dirY = 1;
				dirX = 0;
				break;
			case "bottomleft":			// bottom left
				dirY = 1;
				dirX = -1;
				break;
			case "left":			// left
				dirY = 0;
				dirX = -1;
				break;
		}			
		var dataCopy = htImageData.data;
		var w = oCanvas.width;
		var h = oCanvas.height;

		var w4 = w*4;
		var y = h;
		do {
			var offsetY = (y-1)*w4;

			var otherY = dirY;
			if (y + otherY < 1) otherY = 0;
			if (y + otherY > h) otherY = 0;

			var offsetYOther = (y-1+otherY)*w*4;

			var x = w;
			do {
					var offset = offsetY + (x-1)*4;

					var otherX = dirX;
					if (x + otherX < 1) otherX = 0;
					if (x + otherX > w) otherX = 0;

					var offsetOther = offsetYOther + (x-1+otherX)*4;

					var dR = dataCopy[offset] - dataCopy[offsetOther];
					var dG = dataCopy[offset+1] - dataCopy[offsetOther+1];
					var dB = dataCopy[offset+2] - dataCopy[offsetOther+2];

					var dif = dR;
					var absDif = dif > 0 ? dif : -dif;

					var absG = dG > 0 ? dG : -dG;
					var absB = dB > 0 ? dB : -dB;

					if (absG > absDif) {
						dif = dG;
					}
					if (absB > absDif) {
						dif = dB;
					}

					dif *= strength;

					if (blend) {
						var r = data[offset] + dif;
						var g = data[offset+1] + dif;
						var b = data[offset+2] + dif;

						data[offset] = (r > 255) ? 255 : (r < 0 ? 0 : r);
						data[offset+1] = (g > 255) ? 255 : (g < 0 ? 0 : g);
						data[offset+2] = (b > 255) ? 255 : (b < 0 ? 0 : b);
					} else {
						var grey = greyLevel - dif;
						if (grey < 0) {
							grey = 0;
						} else if (grey > 255) {
							grey = 255;
						}

						data[offset] = data[offset+1] = data[offset+2] = grey;
					}

			} while (--x);
		} while (--y);
		
		htImageData.data = data;
		oContext.putImageData(htImageData, 0, 0);
		return true;
	},
	
	blur : function(oCanvas){
		var oContext = oCanvas.getContext("2d");
		var htImageData = oContext.getImageData(0, 0, oCanvas.width, oCanvas.height);
		var data = htImageData.data;
		var dataCopy = htImageData.data;

		/*
		var kernel = [
			[0.5, 	1, 	0.5],
			[1, 	2, 	1],
			[0.5, 	1, 	0.5]
		];
		*/

		var kernel = [
			[0, 	1, 	0],
			[1, 	2, 	1],
			[0, 	1, 	0]
		];

		var weight = 0;
		for (var i=0;i<3;i++) {
			for (var j=0;j<3;j++) {
				weight += kernel[i][j];
			}
		}

		weight = 1 / (weight*2);

		var w = oCanvas.width;
		var h = oCanvas.height;

		var w4 = w*4;
		var y = h;
		do {
			var offsetY = (y-1)*w4;

			var prevY = (y == 1) ? 0 : y-2;
			var nextY = (y == h) ? y - 1 : y;

			var offsetYPrev = prevY*w*4;
			var offsetYNext = nextY*w*4;

			var x = w;
			do {
				var offset = offsetY + (x*4-4);

				var offsetPrev = offsetYPrev + ((x == 1) ? 0 : x-2) * 4;
				var offsetNext = offsetYNext + ((x == w) ? x-1 : x) * 4;

				data[offset] = (
					/*
					dataCopy[offsetPrev - 4]
					+ dataCopy[offsetPrev+4] 
					+ dataCopy[offsetNext - 4]
					+ dataCopy[offsetNext+4]
					+ 
					*/
					(dataCopy[offsetPrev]
					+ dataCopy[offset-4]
					+ dataCopy[offset+4]
					+ dataCopy[offsetNext])		* 2
					+ dataCopy[offset] 		* 4
					) * weight;

				data[offset+1] = (
					/*
					dataCopy[offsetPrev - 3]
					+ dataCopy[offsetPrev+5] 
					+ dataCopy[offsetNext - 3] 
					+ dataCopy[offsetNext+5]
					+ 
					*/
					(dataCopy[offsetPrev+1]
					+ dataCopy[offset-3]
					+ dataCopy[offset+5]
					+ dataCopy[offsetNext+1])	* 2
					+ dataCopy[offset+1] 		* 4
					) * weight;

				data[offset+2] = (
					/*
					dataCopy[offsetPrev - 2] 
					+ dataCopy[offsetPrev+6] 
					+ dataCopy[offsetNext - 2] 
					+ dataCopy[offsetNext+6]
					+ 
					*/
					(dataCopy[offsetPrev+2]
					+ dataCopy[offset-2]
					+ dataCopy[offset+6]
					+ dataCopy[offsetNext+2])	* 2
					+ dataCopy[offset+2] 		* 4
					) * weight;

			} while (--x);
		} while (--y);

		htImageData.data = data;
		oContext.putImageData(htImageData, 0, 0);
		return true;
	},
	
	brightness : function(oCanvas){
		var oContext = oCanvas.getContext("2d");
		var htImageData = oContext.getImageData(0, 0, oCanvas.width, oCanvas.height);
		
		var brightness = 30;
		var contrast = 0.3;
		var legacy = true;

		if (legacy) {
			brightness = Math.min(150,Math.max(-150,brightness));
		} else {
			var brightMul = 1 + Math.min(150,Math.max(-150,brightness)) / 150;
		}
		contrast = Math.max(0,contrast+1);		
		
		var data = htImageData.data;
		var w = oCanvas.width;
		var h = oCanvas.height;

		var p = w*h;
		var pix = p*4, pix1, pix2;

		var mul, add;
		if (contrast != 1) {
			if (legacy) {
				mul = contrast;
				add = (brightness - 128) * contrast + 128;
			} else {
				mul = brightMul * contrast;
				add = - contrast * 128 + 128;
			}
		} else {  // this if-then is not necessary anymore, is it?
			if (legacy) {
				mul = 1;
				add = brightness;
			} else {
				mul = brightMul;
				add = 0;
			}
		}
		var r, g, b;
		while (p--) {
			if ((r = data[pix-=4] * mul + add) > 255 )
				data[pix] = 255;
			else if (r < 0)
				data[pix] = 0;
			else
					data[pix] = r;

			if ((g = data[pix1=pix+1] * mul + add) > 255 ) 
				data[pix1] = 255;
			else if (g < 0)
				data[pix1] = 0;
			else
				data[pix1] = g;

			if ((b = data[pix2=pix+2] * mul + add) > 255 ) 
				data[pix2] = 255;
			else if (b < 0)
				data[pix2] = 0;
			else
				data[pix2] = b;
		}
		
		htImageData.data = data;
		oContext.putImageData(htImageData, 0, 0);
		return true;
	},
	
	coloradjust : function(oCanvas){
		var oContext = oCanvas.getContext("2d");
		var htImageData = oContext.getImageData(0, 0, oCanvas.width, oCanvas.height);
		
		var red = 0.4;
		var green = 0.1;
		var blue = -0.24;

		red = Math.round(red*255);
		green = Math.round(green*255);
		blue = Math.round(blue*255);

		var data = htImageData.data;

		var p = oCanvas.width * oCanvas.height;
		var pix = p*4, pix1, pix2;

		var r, g, b;
		while (p--) {
			pix -= 4;

			if (red) {
				if ((r = data[pix] + red) < 0 ) 
					data[pix] = 0;
				else if (r > 255 ) 
					data[pix] = 255;
				else
					data[pix] = r;
			}

			if (green) {
				if ((g = data[pix1=pix+1] + green) < 0 ) 
					data[pix1] = 0;
				else if (g > 255 ) 
					data[pix1] = 255;
				else
					data[pix1] = g;
			}

			if (blue) {
				if ((b = data[pix2=pix+2] + blue) < 0 ) 
					data[pix2] = 0;
				else if (b > 255 ) 
					data[pix2] = 255;
				else
					data[pix2] = b;
			}
		}

		htImageData.data = data;
		oContext.putImageData(htImageData, 0, 0);
		return true;
	},
	
	desaturate : function(oCanvas){
		var oContext = oCanvas.getContext("2d");
		var htImageData = oContext.getImageData(0, 0, oCanvas.width, oCanvas.height);
		
		var useAverage = true;
		var data = htImageData.data;
		var w = oCanvas.width;
		var h = oCanvas.height;

		var p = w*h;
		var pix = p*4, pix1, pix2;

		if (useAverage) {
			while (p--) 
				data[pix-=4] = data[pix1=pix+1] = data[pix2=pix+2] = (data[pix]+data[pix1]+data[pix2])/3
		} else {
			while (p--)
				data[pix-=4] = data[pix1=pix+1] = data[pix2=pix+2] = (data[pix]*0.3 + data[pix1]*0.59 + data[pix2]*0.11);
		}

		htImageData.data = data;
		oContext.putImageData(htImageData, 0, 0);
		return true;
	},
	
	edgedetection : function(oCanvas){
		var oContext = oCanvas.getContext("2d");
		var htImageData = oContext.getImageData(0, 0, oCanvas.width, oCanvas.height);
		
		var mono = true;
		var invert = false;
		
		var data = htImageData.data;
		var dataCopy = htImageData.data;

		var c = -1/8;
		var kernel = [
			[c, 	c, 	c],
			[c, 	1, 	c],
			[c, 	c, 	c]
		];

		weight = 1/c;

		var w = oCanvas.width;
		var h = oCanvas.height;

		var w4 = w*4;
		var y = h;
		do {
			var offsetY = (y-1)*w4;

			var nextY = (y == h) ? y - 1 : y;
			var prevY = (y == 1) ? 0 : y-2;

			var offsetYPrev = prevY*w*4;
			var offsetYNext = nextY*w*4;

			var x = w;
			do {
				var offset = offsetY + (x*4-4);

				var offsetPrev = offsetYPrev + ((x == 1) ? 0 : x-2) * 4;
				var offsetNext = offsetYNext + ((x == w) ? x-1 : x) * 4;

				var r = ((dataCopy[offsetPrev-4]
					+ dataCopy[offsetPrev]
					+ dataCopy[offsetPrev+4]
					+ dataCopy[offset-4]
					+ dataCopy[offset+4]
					+ dataCopy[offsetNext-4]
					+ dataCopy[offsetNext]
					+ dataCopy[offsetNext+4]) * c
					+ dataCopy[offset]
					) 
					* weight;

				var g = ((dataCopy[offsetPrev-3]
					+ dataCopy[offsetPrev+1]
					+ dataCopy[offsetPrev+5]
					+ dataCopy[offset-3]
					+ dataCopy[offset+5]
					+ dataCopy[offsetNext-3]
					+ dataCopy[offsetNext+1]
					+ dataCopy[offsetNext+5]) * c
					+ dataCopy[offset+1])
					* weight;

				var b = ((dataCopy[offsetPrev-2]
					+ dataCopy[offsetPrev+2]
					+ dataCopy[offsetPrev+6]
					+ dataCopy[offset-2]
					+ dataCopy[offset+6]
					+ dataCopy[offsetNext-2]
					+ dataCopy[offsetNext+2]
					+ dataCopy[offsetNext+6]) * c
					+ dataCopy[offset+2])
					* weight;

				if (mono) {
					var brightness = (r*0.3 + g*0.59 + b*0.11)||0;
					if (invert) brightness = 255 - brightness;
					if (brightness < 0 ) brightness = 0;
					if (brightness > 255 ) brightness = 255;
					r = g = b = brightness;
				} else {
					if (invert) {
						r = 255 - r;
						g = 255 - g;
						b = 255 - b;
					}
					if (r < 0 ) r = 0;
					if (g < 0 ) g = 0;
					if (b < 0 ) b = 0;
					if (r > 255 ) r = 255;
					if (g > 255 ) g = 255;
					if (b > 255 ) b = 255;
				}

				data[offset] = r;
				data[offset+1] = g;
				data[offset+2] = b;

			} while (--x);
		} while (--y);

		htImageData.data = data;
		oContext.putImageData(htImageData, 0, 0);
		return true;
	},
	
	glow : function(oCanvas){
		var oContext = oCanvas.getContext("2d");
		var htImageData = oContext.getImageData(0, 0, oCanvas.width, oCanvas.height);
		
		var amount = 0.3;
		var blurAmount = 0.2;

		amount = Math.min(1,Math.max(0,amount));
		blurAmount = Math.min(5,Math.max(0,blurAmount));
		
		var blurCanvas = document.createElement("canvas");
		blurCanvas.width = oCanvas.width;
		blurCanvas.height = oCanvas.height;
		var blurCtx = blurCanvas.getContext("2d");
		blurCtx.drawImage(oCanvas,0,0);

		var scale = 2;
		var smallWidth = Math.round(oCanvas.width / scale);
		var smallHeight = Math.round(oCanvas.height / scale);

		var copy = document.createElement("canvas");
		copy.width = smallWidth;
		copy.height = smallHeight;

		var clear = true;
		var steps = Math.round(blurAmount * 20);

		var copyCtx = copy.getContext("2d");
		for (var i=0;i<steps;i++) {
			var scaledWidth = Math.max(1,Math.round(smallWidth - i));
			var scaledHeight = Math.max(1,Math.round(smallHeight - i));

			copyCtx.clearRect(0,0,smallWidth,smallHeight);

			copyCtx.drawImage(
				blurCanvas,
				0,0,oCanvas.width,oCanvas.height,
				0,0,scaledWidth,scaledHeight
			);

			blurCtx.clearRect(0,0,oCanvas.width,oCanvas.height);

			blurCtx.drawImage(
				copy,
				0,0,scaledWidth,scaledHeight,
				0,0,oCanvas.width,oCanvas.height
			);
		}
		
		var htBlurImageData = blurCtx.getImageData(0, 0, blurCanvas.width, blurCanvas.height);

		var data = htImageData.data;
		var blurData = htBlurImageData.data;

		var p = oCanvas.width * oCanvas.height;

		var pix = p*4, pix1 = pix + 1, pix2 = pix + 2, pix3 = pix + 3;
		while (p--) {
			if ((data[pix-=4] += amount * blurData[pix]) > 255) data[pix] = 255;
			if ((data[pix1-=4] += amount * blurData[pix1]) > 255) data[pix1] = 255;
			if ((data[pix2-=4] += amount * blurData[pix2]) > 255) data[pix2] = 255;
		}

		htImageData.data = data;
		oContext.putImageData(htImageData, 0, 0);
		return true;
	},
	
	lighten : function(oCanvas){
		var oContext = oCanvas.getContext("2d");
		var htImageData = oContext.getImageData(0, 0, oCanvas.width, oCanvas.height);
		
		var amount = 0.4;
		amount = Math.max(-1, Math.min(1, amount));
		
		var data = htImageData;

		var p = oCanvas.width * oCanvas.height;

		var pix = p*4, pix1 = pix + 1, pix2 = pix + 2;
		var mul = amount + 1;

		while (p--) {
			if ((data[pix-=4] = data[pix] * mul) > 255)
				data[pix] = 255;

			if ((data[pix1-=4] = data[pix1] * mul) > 255)
				data[pix1] = 255;

			if ((data[pix2-=4] = data[pix2] * mul) > 255)
				data[pix2] = 255;

		}

		htImageData.data = data;
		oContext.putImageData(htImageData, 0, 0);
		return true;
	},
	
	mosaic : function(oCanvas){
		var blockSize = Math.max(1, 7);
		
		var w = oCanvas.width;
		var h = oCanvas.height;
		var w4 = w*4;
		var y = h;

		var ctx = oCanvas.getContext("2d");

		var pixel = document.createElement("canvas");
		pixel.width = pixel.height = 1;
		var pixelCtx = pixel.getContext("2d");

		var copy = document.createElement("canvas");
		copy.width = w;
		copy.height = h;
		var copyCtx = copy.getContext("2d");
		copyCtx.drawImage(oCanvas,0,0,w,h, 0,0,w,h);

		for (var y=0;y<h;y+=blockSize) {
			for (var x=0;x<w;x+=blockSize) {
				var blockSizeX = blockSize;
				var blockSizeY = blockSize;
	
				if (blockSizeX + x > w)
					blockSizeX = w - x;
				if (blockSizeY + y > h)
					blockSizeY = h - y;

				pixelCtx.drawImage(copy, x, y, blockSizeX, blockSizeY, 0, 0, 1, 1);
				var data = pixelCtx.getImageData(0,0,1,1).data;
				ctx.fillStyle = "rgb(" + data[0] + "," + data[1] + "," + data[2] + ")";
				ctx.fillRect(0 + x, 0 + y, blockSize, blockSize);
			}
		}

		return true;
	},
	
	pointillize : function(oCanvas){
		var oContext = oCanvas.getContext("2d");
		var htImageData = oContext.getImageData(0, 0, oCanvas.width, oCanvas.height);
		
		var radius = Math.max(1, 5);
		var density = Math.min(5, 1.2);
		var noise = Math.max(0, 1.0);
		var transparent = false;
		
		var w = oCanvas.width;
		var h = oCanvas.height;
		var w4 = w*4;
		var y = h;

		var ctx = oCanvas.getContext("2d");
		var canvasWidth = oCanvas.width;
		var canvasHeight = oCanvas.height;

		var pixel = document.createElement("canvas");
		pixel.width = pixel.height = 1;
		var pixelCtx = pixel.getContext("2d");

		var copy = document.createElement("canvas");
		copy.width = w;
		copy.height = h;
		var copyCtx = copy.getContext("2d");
		copyCtx.drawImage(oCanvas,0,0,w,h, 0,0,w,h);

		var diameter = radius * 2;

		if (transparent)
			ctx.clearRect(0, 0, oCanvas.width, oCanvas.height);

		var noiseRadius = radius * noise;

		var dist = 1 / density;

		for (var y=0;y<h+radius;y+=diameter*dist) {
			for (var x=0;x<w+radius;x+=diameter*dist) {
				rndX = noise ? (x+((Math.random()*2-1) * noiseRadius))>>0 : x;
				rndY = noise ? (y+((Math.random()*2-1) * noiseRadius))>>0 : y;

				var pixX = rndX - radius;
				var pixY = rndY - radius;
				if (pixX < 0) pixX = 0;
				if (pixY < 0) pixY = 0;

				var cx = rndX + 0;
				var cy = rndY + 0;
				if (cx < 0) cx = 0;
				if (cx > canvasWidth) cx = canvasWidth;
				if (cy < 0) cy = 0;
				if (cy > canvasHeight) cy = canvasHeight;

				var diameterX = diameter;
				var diameterY = diameter;

				if (diameterX + pixX > w)
					diameterX = w - pixX;
				if (diameterY + pixY > h)
					diameterY = h - pixY;
				if (diameterX < 1) diameterX = 1;
				if (diameterY < 1) diameterY = 1;

				pixelCtx.drawImage(copy, pixX, pixY, diameterX, diameterY, 0, 0, 1, 1);
				var data = pixelCtx.getImageData(0,0,1,1).data;

				ctx.fillStyle = "rgb(" + data[0] + "," + data[1] + "," + data[2] + ")";
				ctx.beginPath();
				ctx.arc(cx, cy, radius, 0, Math.PI*2, true);
				ctx.closePath();
				ctx.fill();
			}
		}

		return true;
	},
	
	posterize : function(oCanvas){
		var oContext = oCanvas.getContext("2d");
		var htImageData = oContext.getImageData(0, 0, oCanvas.width, oCanvas.height);
		
		var numLevels = 7;
		
		var data = htImageData.data;

		numLevels = Math.max(2,Math.min(256,numLevels));

		var numAreas = 256 / numLevels;
		var numValues = 256 / (numLevels-1);

		var w = oCanvas.width;
		var h = oCanvas.height;
		var w4 = w*4;
		var y = h;
		do {
			var offsetY = (y-1)*w4;
			var x = w;
			do {
				var offset = offsetY + (x-1)*4;

				var r = numValues * ((data[offset] / numAreas)>>0);
				var g = numValues * ((data[offset+1] / numAreas)>>0);
				var b = numValues * ((data[offset+2] / numAreas)>>0);

				if (r > 255) r = 255;
				if (g > 255) g = 255;
				if (b > 255) b = 255;

				data[offset] = r;
				data[offset+1] = g;
				data[offset+2] = b;

			} while (--x);
		} while (--y);

		htImageData.data = data;
		oContext.putImageData(htImageData, 0, 0);
		return true;		
	},
	
	sharpen : function(oCanvas){
		var oContext = oCanvas.getContext("2d");
		var htImageData = oContext.getImageData(0, 0, oCanvas.width, oCanvas.height);
		
		var strength = 0.5;

		if (strength < 0) strength = 0;
		if (strength > 1) strength = 1;
		
		var data = htImageData.data;
		var dataCopy = htImageData.data;

		var mul = 15;
		var mulOther = 1 + 3*strength;

		var kernel = [
			[0, 	-mulOther, 	0],
			[-mulOther, 	mul, 	-mulOther],
			[0, 	-mulOther, 	0]
		];

		var weight = 0;
		for (var i=0;i<3;i++) {
			for (var j=0;j<3;j++) {
				weight += kernel[i][j];
			}
		}

		weight = 1 / weight;

		var w = oCanvas.width;
		var h = oCanvas.height;

		mul *= weight;
		mulOther *= weight;

		var w4 = w*4;
		var y = h;
		do {
			var offsetY = (y-1)*w4;

			var nextY = (y == h) ? y - 1 : y;
			var prevY = (y == 1) ? 0 : y-2;

			var offsetYPrev = prevY*w4;
			var offsetYNext = nextY*w4;

			var x = w;
			do {
				var offset = offsetY + (x*4-4);

				var offsetPrev = offsetYPrev + ((x == 1) ? 0 : x-2) * 4;
				var offsetNext = offsetYNext + ((x == w) ? x-1 : x) * 4;

				var r = ((
					- dataCopy[offsetPrev]
					- dataCopy[offset-4]
					- dataCopy[offset+4]
					- dataCopy[offsetNext])		* mulOther
					+ dataCopy[offset] 	* mul
					);

				var g = ((
					- dataCopy[offsetPrev+1]
					- dataCopy[offset-3]
					- dataCopy[offset+5]
					- dataCopy[offsetNext+1])	* mulOther
					+ dataCopy[offset+1] 	* mul
					);

				var b = ((
					- dataCopy[offsetPrev+2]
					- dataCopy[offset-2]
					- dataCopy[offset+6]
					- dataCopy[offsetNext+2])	* mulOther
					+ dataCopy[offset+2] 	* mul
					);


				if (r < 0 ) r = 0;
				if (g < 0 ) g = 0;
				if (b < 0 ) b = 0;
				if (r > 255 ) r = 255;
				if (g > 255 ) g = 255;
				if (b > 255 ) b = 255;

				data[offset] = r;
				data[offset+1] = g;
				data[offset+2] = b;

			} while (--x);
		} while (--y);

		htImageData.data = data;
		oContext.putImageData(htImageData, 0, 0);
		return true;
	},
	
	solarize : function(oCanvas){
		var oContext = oCanvas.getContext("2d");
		var htImageData = oContext.getImageData(0, 0, oCanvas.width, oCanvas.height);
		
		var data = htImageData.data;
		var w = oCanvas.width;
		var h = oCanvas.height;
		var w4 = w*4;
		var y = h;
		do {
			var offsetY = (y-1)*w4;
			var x = w;
			do {
				var offset = offsetY + (x-1)*4;

				var r = data[offset];
				var g = data[offset+1];
				var b = data[offset+2];

				if (r > 127) r = 255 - r;
				if (g > 127) g = 255 - g;
				if (b > 127) b = 255 - b;

				data[offset] = r;
				data[offset+1] = g;
				data[offset+2] = b;

			} while (--x);
		} while (--y);

		htImageData.data = data;
		oContext.putImageData(htImageData, 0, 0);
		return true;
	}
});