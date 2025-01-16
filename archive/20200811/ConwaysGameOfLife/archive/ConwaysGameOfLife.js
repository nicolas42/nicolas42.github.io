// Conway's Game Of Life
// 
// <!-- An Image and the Console if needed -->
// <img id="img01" width="300" height="300">
// <p id="console"></p>
// 
// 
//
// There's a lot of 4's in this program because there's 4 bytes in a pixel.
// The number of neighbours of a cell is kept in its alpha channel of a pixel until it's needed
// A cell is seen as being alive if it's red channel is 0 (indicating that green, and blue are black and thus the pixel is black)

// The program uses a HTML image element not an HTML canvas element because an 
// image can be resized and scaled easily while 
// still using pixel level modifications

// Creating an image in javascript sucks.
// It requires that you create a HTML canvas element 
// then get its 2 dimensional context (which is used for draw functions)
// then get the image struct itself from that context
// which contains the width, height, and data - the actual pixels.
// Then it needs to be put back together.
// The context needs to be updated with the new image struct
// ctx.putImageData(imgData,posX,posY);
// then because I'm using a HTML image element I need to get the canvas element
// and convert it to a dataURL() so that it can be set to the src of the 
// image element. :(
// So basically canvas > 2D context > imageData > data
// and image.src = canvas.toDataURL()

function testConwaysGameOfLife(imageElement){
	// var imageElement = document.querySelector("#img01");
	imageElement.height = 100;
	imageElement.width = 100;

	  // gosper glider gun (x,y coordinates)
	var coords = [2, 6, 2, 7, 3, 6, 3, 7, 12, 6, 12, 7, 12, 8, 13, 5, 13, 9, 14, 4, 14, 10, 15, 4, 15, 10, 16, 7, 17, 5, 17, 9, 18, 6, 18, 7, 18, 8, 19, 7, 22, 4, 22, 5, 22, 6, 23, 4, 23, 5, 23, 6, 24, 3, 24, 7, 26, 2, 26, 3, 26, 7, 26, 8, 36, 4, 36, 5, 37, 4, 37, 5];
	animateConwaysGameOfLife(imageElement, 100, 100, coords);
	
}

function conwaysGameOfLife(imageElement, width, height, coords) {
  "use strict";


  var white = [255, 255, 255, 255];
  var black = [0, 0, 0, 255];
  // var width = 100;
  // var height = 100;
  var canvas = document.createElement("canvas");

  canvas.width = width;
  canvas.height = height;

  // get the image from the context - image: {width, height, data}
  var ctx = canvas.getContext("2d");
  var imgData = ctx.getImageData(0, 0, width, height);
  var data = imgData.data;

  // Make White Image
  var i;
  for (i = 0; i < data.length; i += 4) {
    data[i + 0] = white[0];
    data[i + 1] = white[1];
    data[i + 2] = white[2];
    data[i + 3] = white[3];
  }


  // gosper glider gun (x,y coordinates)
  // var coords = [2, 6, 2, 7, 3, 6, 3, 7, 12, 6, 12, 7, 12, 8, 13, 5, 13, 9, 14, 4, 14, 10, 15, 4, 15, 10, 16, 7, 17, 5, 17, 9, 18, 6, 18, 7, 18, 8, 19, 7, 22, 4, 22, 5, 22, 6, 23, 4, 23, 5, 23, 6, 24, 3, 24, 7, 26, 2, 26, 3, 26, 7, 26, 8, 36, 4, 36, 5, 37, 4, 37, 5];
  // coords is a list of x,y coordinates

  var x;
  var y;
  var pos;
  // draw coords (that gosper thing)
  for (i = 0; i < coords.length; i += 2) {
    x = coords[i];
    y = coords[i + 1];
    pos = (y * width * 4) + (x * 4);

    data[pos + 0] = black[0];
    data[pos + 1] = black[1];
    data[pos + 2] = black[2];
    data[pos + 3] = black[3];
  }

  ctx.putImageData(imgData, 0, 0);  // Put data in canvas' 2D context
  imageElement.src = canvas.toDataURL(); 

  function evolve() {

    // var x;
    // var y;
    // var pos;
    var num; // number of neighbours
    var live; // whether to live or die. 1 = live, 0 = die

    // zero neighbors
    for (y = 1; y < height - 1; y = y + 1) {
      for (x = 1; x < width - 1; x = x + 1) {
        pos = y * width * 4 + x * 4;

        data[pos + 3] = 0; // keep number of neighbours in alpha channel
      }
    }


    // update neighbors
    for (y = 1; y < height - 1; y = y + 1) {
      for (x = 1; x < width - 1; x = x + 1) {
        pos = y * width * 4 + x * 4;

        if (data[pos + 0] === black[0]) { // currCell.isAlive
          // alpha channel contains number of neighbours 
          // (red pixel position + 3)
          data[pos - (4 * width) - 4 + 3] += 1;
          data[pos - (4 * width) + 3] += 1;
          data[pos - (4 * width) + 4 + 3] += 1;
          data[pos - 4 + 3] += 1;
          // data[pos];
          data[pos + 4 + 3] += 1;
          data[pos + (4 * width) - 4 + 3] += 1;
          data[pos + (4 * width) + 3] += 1;
          data[pos + (4 * width) + 4 + 3] += 1;
        }
      }
    }

    //  Print Neighbours
    //  document.querySelector("#console").innerHTML = "";
    //  for (y = 1; y < height-1; y = y + 1) {
    //    for (x = 1; x < width-1; x = x + 1 ){
    //      pos = y*width*4 + x*4;
    //
    //      print(""+data[pos+3]+" ");
    //    }
    //      print("<br>");
    //  }

    // update the living
    for (y = 1; y < height - 1; y = y + 1) {
      for (x = 1; x < width - 1; x = x + 1) {
        pos = y * width * 4 + x * 4;
        num = data[pos + 3]; // number of neighbours
        live = 0; // determines whether cell lives or dies

        if (data[pos + 0] === black[0]) { // currCell.isAlive
          if (num < 2) {
            live = 0; // false
          } else if ((num === 2) || (num === 3)) {
            live = 1; // true
          } else if (num > 3) {
            live = 0; // false
          }
        } else {
          if (num === 3) {
            live = 1; // true
          }
        }
        if (live === 1) {
          data[pos + 0] = black[0];
          data[pos + 1] = black[1];
          data[pos + 2] = black[2];
          data[pos + 3] = black[3];
        } else {
          data[pos + 0] = white[0];
          data[pos + 1] = white[1];
          data[pos + 2] = white[2];
          data[pos + 3] = white[3];
        }
      }
    }

    ctx.putImageData(imgData, 0, 0);
    imageElement.src = canvas.toDataURL();
  }
  // evolve();
  setInterval(evolve, 20);

}
