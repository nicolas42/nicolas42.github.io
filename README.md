# nicolas42.github.io

[art_website](art_website)

[calculator](calculator)

[cellular-automaton](cellular-automaton)

[cellular_automaton.html](cellular_automaton.html)

[chaos](chaos)

[chaos_google_charts.html](chaos_google_charts.html)

[circle](circle)

[conway-simple](conway-simple)

[conway.html](conway.html)

[conways-game-of-life](conways-game-of-life)

[cross-origin-resource-sharing-with-s3](cross-origin-resource-sharing-with-s3)

[css](css)

[cut_down_version](cut_down_version)

[deco1400_educational_website](deco1400_educational_website)

[demo_katex_rendering.html](demo_katex_rendering.html)

[educational-website](educational-website)

[esri_arcgis_mapping_demos](esri_arcgis_mapping_demos)

[events](events)

[example_code](example_code)

[f35-vs-rafale.html](f35-vs-rafale.html)

[ganja_geometric_algebra_demos](ganja_geometric_algebra_demos)

[image-resizer](image-resizer)

[images](images)

[javascript-spreadsheet-by-ondrej-zara.html](javascript-spreadsheet-by-ondrej-zara.html)

[js](js)

[lets-get-classy](lets-get-classy)

[mandelbrot](mandelbrot)

[mandelbrot_old](mandelbrot_old)

[math-editor](math-editor)

[math_editor.html](math_editor.html)

[misc](misc)

[readme.txt](readme.txt)

[show_tractor_telemetry.html](show_tractor_telemetry.html)

[slider.html](slider.html)

[spiral.html](spiral.html)

[spreadsheet-by-ondrej-zara.html](spreadsheet-by-ondrej-zara.html)

[template_website.html](template_website.html)

[test.html](test.html)

[touch-swipe-detection](touch-swipe-detection)

[tractor_telemetry.js](tractor_telemetry.js)

[working-mandelbrot-with-local-storage](working-mandelbrot-with-local-storage)

[youtube_website](youtube_website)


[calculator](calculator)

[https://nicolas42.github.io/cut_down_version/circle/](https://nicolas42.github.io/cut_down_version/circle/)

This site was built using [GitHub Pages](https://pages.github.com/).




# Get started

Run this

    go run serve.go

then this

    localhost:8080

Then click stuff

# Notes

The go default http server has quite a nice habit of displaying links to all files in a directory if there's no index.html file.  It's neat.
That way you can try all the different stuff quite conveniently.

Also in the future it'd be nice to make a markdown server.  So when a markdown (.md) file is requested it can be dynamically transformed into html.

woo.

There's also a server in node scripts that you could copy to this directory then run but it sucks more.


## AWS Javascript SDK

https://docs.aws.amazon.com/sdk-for-javascript/index.html

version 2 API reference seems handiest


## AWS Credentials

make a json file that looks like this

{ "accessKeyId": "<accessKeyId>", "secretAccessKey": "<secretAccessKey>", "region": "<region>" }

then load it like this

AWS.config.loadFromPath(<the_file.json>);



## Promises

A good page on promises / asynchronous stuff 
https://javascript.info/async



promises seem to be syntactic sugar on callbacks.

callback
do_something(arg, function(){ } );

sugar 1
promise.then( do_other_stuff() )

sugar 2
async function(){
    var response = await do_something()
}


## ArcGIS Mapping

Hussein Nasser - ArcGIS Javascript API Video Playlist
https://www.youtube.com/watch?v=rft4ZecPQcI&list=PLQnljOFTspQUppK8iiIuoQJTAj436IWQz


arcgis examples
https://developers.arcgis.com/javascript/latest/sample-code/
