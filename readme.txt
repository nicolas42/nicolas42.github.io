To Do 
--------------------
change youtube into stumbleupon - put urls in a separate file 



macos take screenshtos as jpgs
--------------------------------
defaults write com.apple.screencapture type jpg;killall SystemUIServer




Data-*
--------------------------

Arbitrary web data can be put into HTML elements as long as it's called "data-*", e.g.

html_element.data-something = "{omg: 23, data: 34}"; 
Element.getAttribute("data-something") 

https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*

This means that the data that's needed to draw the element can be embedded in that same object.




Mapping
------------------

ArcGIS Mapping
Hussein Nasser - ArcGIS Javascript API Video Playlist
https://www.youtube.com/watch?v=rft4ZecPQcI&list=PLQnljOFTspQUppK8iiIuoQJTAj436IWQz

arcgis examples
https://developers.arcgis.com/javascript/latest/sample-code/



My terrible git usage
------------------------
git add . && git commit -m ":)" && git push



VS code sane tab switching
-------------------------------

Make ctrl+tab work properly
[
    // ...
    {
        "key": "ctrl+tab",
        "command": "workbench.action.nextEditor"
    },
    {
        "key": "ctrl+shift+tab",
        "command": "workbench.action.previousEditor"
    }
]



Reload html page every second
--------------------------------
<meta http-equiv="refresh" content="1">


Put CSS file in a webpage (I always forget this)
----------------------------
<link rel="stylesheet" href="styles.css">


Github Markdown Notes
----------------------

Links can be relative so these three links could be the same.
[https://nicolas42.github.io/calculator/](https://nicolas42.github.io/calculator/)
[/calculator/](/calculator/)
[calculator](calculator)


Running the golang server for automatic file listings
------------------------------------------------------

go run SERVE.go
localhost:8080


Promises
---------------------

Promises in javascript https://javascript.info/async

Promises appear to be syntactic sugar on callbacks.
A callback is a function that is supplied to another so it can use it later e.g.

do_something(arg, function(){ } ); <= the callback is in the parameter list 

This is helpful if there is a proceedure that will take an indeterminate amount of time.
This is commonly a network read.  Ideally you'd like to do something else while waiting
for that to finish.  So you do.  But the clever thing is that you provide the background 
code something to do once it has finished.  Because often you need it to do something with 
the network resource that you've just acquired.

Promises and async/await are different ways to write this.  They can be good if there's a lot of 
asynchronous code.

promise.then( do_other_stuff() )

async function(){
    var response = await do_something()
}

