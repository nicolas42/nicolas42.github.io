
function hslToRgb(h, s, l) {
	var r;
	var g;
	var b;
	function hue2rgb(p, q, t) {
		if (t < 0) {
			t += 1;
		}
		if (t > 1) {
			t -= 1;
		}
		if (t < 1 / 6) {
			return p + (q - p) * 6 * t;
		}
		if (t < 1 / 2) {
			return q;
		}
		if (t < 2 / 3) {
			return p + (q - p) * (2 / 3 - t) * 6;
		}
		return p;
	}

	var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	var p = 2 * l - q;

	if (s === 0) {
		r = 1;
		g = 1;
		b = 1; // achromatic
	} else {

		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}


/*
a.html?x=-0.36163781924926275&y=0.6020825666719246&zoom=549755813888
*/

function mandelbrot(canvas, math_x, math_y, zoom) {
	"use strict";

	var im = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
	// var math_x = 0;
	// var math_y = 0;
	// var zoom = 1; // max tested 562949953421312

	function main()
	{
		draw_mandelbrot();
		update_url();
		// respond to left and right mouse clicks
		canvas.addEventListener("mousedown", on_mousedown, false);
		// disable context menu
		canvas.addEventListener("contextmenu", (e)=>{ e.preventDefault(); } );

	}

	function draw_mandelbrot() {

		var black = [0, 0, 0, 255];
		var stride = 4;

		// make a black image
		for (i = 0; i < im.data.length; i += stride) {
			im.data[i + 0] = black[0];
			im.data[i + 1] = black[1];
			im.data[i + 2] = black[2];
			im.data[i + 3] = black[3];
		}

		// main loop
		for (y = 0; y < im.height; y += 1) {
			for (x = 0; x < im.width; x += 1) {

				var x, y, zx, zxtemp, zy, cx, cy, rgb, i, in_set, pos;
				var max_iterations;
				var math_height = 4 / zoom;
				var math_width = 4 / zoom;			

				// math numbers
				cx = (math_x - math_width / 2) + x / (im.width / math_width);
				cy = (math_y - math_height / 2) + y / (im.width / math_width);
				// image is flipped vertically. numbers go up, pixels go down
				// who cares
				zx = 0;
				zy = 0;

				in_set = true;
				max_iterations = (255 + (20 * Math.log2(zoom)));
				for (i = 1; i <= max_iterations; i += 1) {
					zxtemp = zx * zx - zy * zy + cx;
					zy = 2 * zx * zy + cy;
					zx = zxtemp;
					if (zx * zx + zy * zy > 4) {
						in_set = false;
						break;
					}
				}

				if (in_set === false) {
					pos = y * im.width * stride + x * stride;
					rgb = hslToRgb((i % 255) / 255, 1, 0.5);
					im.data[pos + 0] = rgb[0];
					im.data[pos + 1] = rgb[1];
					im.data[pos + 2] = rgb[2];
					// im.data[pos + 3] = rgb[3]; // don't mess with opacity
				}
			}
		}
		canvas.getContext("2d").putImageData(im, 0, 0);
	}


	function update_url() {
		// consolePara.innerHTML = currentURL(); // URL

		var url = document.location.href
		if (url.indexOf("?") !== -1) {
			url = url.slice(0, url.indexOf("?"))
		}
		console.log(url + "?x=" + math_x + "&y=" + math_y + "&zoom=" + zoom); //  + "&max_iterations=" + max_iterations);
		// infoPara.innerHTML = url+"?x="+math_x+"&y="+math_y+"&zoom="+zoom+"&max_iterations="+max_iterations;

	}

	var on_mousedown = function (e) {
		if (e.which === 1) {
			// get clicked position of mouse cursor
			var rect = e.currentTarget.getBoundingClientRect();
			var x_pixel = e.clientX - rect.left;
			var y_pixel = e.clientY - rect.top;

			var math_height = 4 / zoom;
			var math_width = 4 / zoom;
					
			// update globals
			math_x = (math_x - math_width / 2) + x_pixel / (im.width / math_width);
			math_y = (math_y - math_height / 2) + y_pixel / (im.height / math_height);
			zoom *= 2;

		} else if (e.which === 3) { // right click is 3 for some reason.
			// update global
			zoom /= 2;
		}

		draw_mandelbrot();
		update_url();
	}

	main();
}
