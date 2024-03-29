
/* JavaScript HTML DOM
With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

The HTML DOM (Document Object Model)
When a web page is loaded, the browser creates a Document Object Model of the page.

The HTML DOM model is constructed as a tree of Objects: */


// The HTML DOM Tree of Objects
// https://www.w3schools.com/js/js_htmldom.asp


/* With the object model, JavaScript gets all the power it needs to create dynamic HTML:

JavaScript can change all the HTML elements in the page
JavaScript can change all the HTML attributes in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can react to all existing HTML events in the page
JavaScript can create new HTML events in the page */

/* What You Will Learn
In the next chapters of this tutorial you will learn:

How to change the content of HTML elements
How to change the style (CSS) of HTML elements
How to react to HTML DOM events
How to add and delete HTML elements */


/* What is the DOM?
The DOM is a W3C (World Wide Web Consortium) standard.

The DOM defines a standard for accessing documents:

"The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

The W3C DOM standard is separated into 3 different parts:

Core DOM - standard model for all document types
XML DOM - standard model for XML documents
HTML DOM - standard model for HTML documents */




/* 
Window Object
The window object represents an open window in a browser. It is browser’s object (not JavaScript’s)
& is automatically created by browser.

It is a global object with lots of properties & methods.
 */

 console.log("helllow");

// Accessing window properties
console.log(window.innerWidth); // Inner width of the browser window
console.log(window.location.href); // Current URL

// Using window methods
window.alert("Hello, World!"); // Display an alert dialog
let timeoutID = window.setTimeout(function() {
    console.log("Delayed message");
}, 2000); // Execute code after a delay

// Handling window events
window.addEventListener('resize', function() {
    console.log("Window resized");
});
