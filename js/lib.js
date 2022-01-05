// jquery pffft
// var $ = function(id) { return document.querySelector(id); }

function load_object_from_url(parameters)
{
    // the argument allows for default parameters to be overriden
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (_, key, value) {
        var result = parseFloat(value);
        if ( !isNaN(result) ) parameters[key] = result;
    });
    return parameters;
}

function save_object_to_url(obj)
{
    var str = "?"
    Object.keys(obj).forEach(function(key,index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object 
        str = str + key +"="+ (obj[key]).toString() +"&";
    });

    window.history.replaceState(
        "object or string", "Title", str // "?x=" + p.x + "&y=" + p.y + "&zoom=" + p.zoom + "&max_iterations=" + p.max_iterations
    );
}

// make element tree
function elt(type, ...children) {
    // from eloquent javascript
    // var tree = elt( "div", elt( "button", "toggle fullscreen") );
    // document.body.appendChild( tree );

    let node = document.createElement(type);
    for (let child of children) {
        if (typeof child != "string") node.appendChild(child);
        else node.appendChild(document.createTextNode(child));
    }
    return node;
}

function hide_scrollbars() {
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
}

function show_scrollbars() {
    document.documentElement.style.overflow = 'auto';  // firefox, chrome
    document.body.scroll = "yes"; // ie only
}


function toggle_content_editable(){
    // html element
    if ( document.documentElement.contentEditable === 'true' ) 
    {
        document.documentElement.contentEditable = 'false'; 
    } 
    else {
l    }
}


function append_elements(parent, arr )
{
    for ( var i=0; i<arr.length; i+= 1){
        // console.log(arr[i])
        var child = document.createElement(arr[i][0]);
        if ( arr[i][1] !== undefined ) child.innerText = arr[i][1];
        if ( arr[i][0] === "a" ){
            child.href = arr[i][2] ;
        } else {
            // event handler
            if ( arr[i][2] !== undefined && arr[i][3] !== undefined ) child.addEventListener(arr[i][2], arr[i][3])
        }
        parent.appendChild(child);
    }
}



// To Do
// Make object to form function

// <form action="/action_page.php">
// <label for="fname">First name:</label><br>
// <input type="text" id="fname" name="fname" value="John"><br>
// <label for="lname">Last name:</label><br>
// <input type="text" id="lname" name="lname" value="Doe"><br><br>
// <input type="submit" value="Submit">
// </form>


function update_object(obj, new_stuff)
{
    for (var key in new_stuff) {
        obj[key] = new_stuff[key];
    }
}


// save a file
// https://stackoverflow.com/questions/2897619/using-html5-javascript-to-generate-and-save-a-file
// usage
// save_file('test.txt', 'Hello world!');

function save_file(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}

// alternative to eval
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
function loose_json_parse(obj){
    return Function('"use strict";return (' + obj + ')')();
}


function copy_object(obj) {

    let cp = {}; 
    for (key in obj) {
        cp[key] = obj[key];
    }
    return cp;
}

