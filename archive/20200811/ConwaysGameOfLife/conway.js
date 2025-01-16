
// How to resize canvas
// https://stackoverflow.com/questions/4938346/canvas-width-and-height-in-html5

function evolve() {

    var ctx = canvas.getContext("2d");
    var imgData = ctx.getImageData(0, 0, width, height);
    var data = imgData.data;

    var neighbours;
    var shouldLive; // 1 = live, 0 = die
    var stride = 4;

    function isAlive(pos) {
        return data[pos + 0] === liveColor[0] && data[pos + 1] === liveColor[1] && data[pos + 2] === liveColor[2]
    }

    // Set all neighbour values to zero
    for (y = 1; y < height - 1; y = y + 1) {
        for (x = 1; x < width - 1; x = x + 1) {
            pos = y * width * 4 + x * 4;

            data[pos + 3] = 0; 	// pos + 3 refers to the alpha channel of the pixel
        }
    }

    // Update Neighbors of surrounding cells
    // Add one to the neighbours of all of the surrounding cells
    // (3x3 square around the current cell) if the current cell is alive
    for (y = 1; y < height - 1; y = y + 1) {
        for (x = 1; x < width - 1; x = x + 1) {
            pos = y * width * 4 + x * 4;

            if (data[pos + 0] === aliveColor[0]) { // currCell.isAlive

                data[pos + 3 - (width - 1) * stride] += 1;
                data[pos + 3 - (width) * stride] += 1;
                data[pos + 3 - (width + 1) * stride] += 1;
                data[pos + 3 - 1 * stride] += 1;
                // position of the current cell
                data[pos + 3 + 1 * stride] += 1;
                data[pos + 3 + (width - 1) * stride] += 1;
                data[pos + 3 + (width) * stride] += 1;
                data[pos + 3 + (width + 1) * stride] += 1;
            }
        }
    }

    // Update who's alive and who's dead
    for (y = 1; y < height - 1; y = y + 1) {
        for (x = 1; x < width - 1; x = x + 1) {
            pos = y * width * 4 + x * 4;
            neighbours = data[pos + 3];
            shouldLive = 0; // determines whether cell lives or dies

            if (data[pos + 0] === aliveColor[0]) { // currCell.isAlive
                if (neighbours < 2) {
                    shouldLive = 0; // false
                } else if ((neighbours === 2) || (neighbours === 3)) {
                    shouldLive = 1; // true
                } else if (neighbours > 3) {
                    shouldLive = 0; // false
                }
            } else {
                if (neighbours === 3) {
                    shouldLive = 1; // true
                }
            }
            if (shouldLive === 1) {
                data[pos + 0] = aliveColor[0];
                data[pos + 1] = aliveColor[1];
                data[pos + 2] = aliveColor[2];
                data[pos + 3] = aliveColor[3];
            } else {
                data[pos + 0] = deadColor[0];
                data[pos + 1] = deadColor[1];
                data[pos + 2] = deadColor[2];
                data[pos + 3] = deadColor[3];
            }
        }
    }

    ctx.putImageData(imgData, 0, 0);
}


var canvasid, width, height, deadColor, aliveColor, canvas, ctx,
    imgData, data, rgbaDeadColor, rgbaAliveColor, arg;

deadColor = [255, 255, 255, 255];
aliveColor = [0, 0, 255, 255];

width = 200;
height = 200;

canvas = document.querySelector("canvas"); 
canvas.width  = 200;
canvas.height = 200; 

ctx = canvas.getContext("2d");
imgData = ctx.getImageData(0, 0, width, height);
data = imgData.data;


// Add random initial points to fill 10% of the usable space
rgbaDeadColor = 'rgba(' + deadColor[0] + ',' + deadColor[1] + ',' + deadColor[2] + ',' + deadColor[3] + ')';
rgbaAliveColor = 'rgba(' + aliveColor[0] + ',' + aliveColor[1] + ',' + aliveColor[2] + ',' + aliveColor[3] + ')';
ctx.fillStyle = rgbaDeadColor
ctx.fillRect(0, 0, width, height);
for (i = 0; i < 0.1 * width * height; i += 1) {
    var x = Math.round(Math.random() * (width - 1));
    var y = Math.round(Math.random() * (height - 1));
    ctx.fillStyle = rgbaAliveColor;
    ctx.fillRect(x, y, 1, 1);
}


// Playback
var timerID, paused, delay;
delay = 200; 
// clearInterval(timerID); //pause;
timerID = setInterval(evolve, delay); // play;


// canvas.addEventListener("mousedown",	pause,					false);
// canvas.addEventListener("mouseup",		play,					false);
// canvas.addEventListener("mousemove",	drawClickedPosition,	false);
