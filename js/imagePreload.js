var imagesQuantity = 1;
var imagesLoadedQuantity = 1;
var pictureDiv = new Array();
var pictureDivs = document.createElement("div");

function waitUntilBodyLoadedRoutineImages(){
	
	if (document.body==null)
		window.setTimeout("waitUntilBodyLoadedRoutineImages();",100);
	else{		
		document.body.appendChild(pictureDivs);
	}
}

/**
 * Preload images routine
 */
function loadImages() {

    var args = loadImages.arguments;

    var images = new Array();

	var imageLocation;

	pictureDivs.style.height = "1px";
	pictureDivs.id = "preloadedPictures";
	for (var i=0; i<args.length-1; i++){
		imageLocation = args[i];

		//if (the_dot_isIE || the_dot_isFirefox){	// IE			
			pictureDiv[i] = document.createElement("div");
			
			pictureDiv[i].style.visibility = "hidden";
			pictureDiv[i].style.height = "0px";
			pictureDiv[i].style.width = "0px";
			
			images[i] = document.createElement("img");			
			//new Function("window.setTimeout('imageLoaded();document.body.removeChild(pictureDiv["+i+"]);',50)");
			images[i].src = imageLocation;	// element.setAttribute("src", "img1.jpg");
			images[i].style.height = "0px";
			images[i].style.width = "0px";
				
			pictureDiv[i].appendChild(images[i]);			
			pictureDivs.appendChild(pictureDiv[i]);
			imagesQuantity++;
		/*}
		else{	//Opera
			images[i] = new Image();
			images[i].src = imageLocation;
		}*/
	}
	
	if (document.body!=null)
		document.body.appendChild(pictureDivs);
	else
		waitUntilBodyLoadedRoutineImages();
}