

// =============HTML DOM Methods===================

/*            JavaScript - HTML DOM Methods
HTML DOM methods are actions you can perform (on HTML Elements).

HTML DOM properties are values (of HTML Elements) that you can set or change.

The DOM Programming Interface
The HTML DOM can be accessed with JavaScript (and with other programming languages).

In the DOM, all HTML elements are defined as objects.

The programming interface is the properties and methods of each object.

A property is a value that you can get or set (like changing the content of an HTML element).

A method is an action you can do (like add or deleting an HTML element). */


/* Example
The following example changes the content (the innerHTML) of the <p> element with id="demo": */

document.getElementById("demo").innerHTML = "Hello world!";

/* In the example above, getElementById is a method, while innerHTML is a property.

The getElementById Method
The most common way to access an HTML element is to use the id of the element.

In the example above the getElementById method used id="demo" to find the element.

The innerHTML Property
The easiest way to get the content of an element is by using the innerHTML property.

The innerHTML property is useful for getting or replacing the content of HTML elements.

The innerHTML property can be used to get or change any HTML element, including <html> and <body>. */

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ JavaScript HTML DOM Document @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* 
The HTML DOM document object is the owner of all other objects in your web page.
W
The HTML DOM Document Object
The document object represents your web page.

If you want to access any element in an HTML page, you always start with accessing the document object.

Below are some examples of how you can use the document object to access and manipulate HTML.


1. Accessing Elements:
You can access elements in the DOM using methods like getElementById, getElementsByClassName, getElementsByTagName, querySelector, and querySelectorAll. */


// Accessing an element by its ID
const elementById = document.getElementById('myElement');

// Accessing elements by their class name
const elementsByClassName = document.getElementsByClassName('myClass');

// Accessing elements by their tag name
const elementsByTagName = document.getElementsByTagName('div');

// Accessing an element using CSS selectors
const elementBySelector = document.querySelector('.myClass');


/* 2. Changing HTML Elements
Property	|    Description

element.innerHTML =  new html content | Change the inner HTML of an element

element.attribute = new value | Change the attribute value of an HTML element

element.style.property = new style | Change the style property of an HTML element


Method    |   Description

element.setAttribute(attribute, value)	| Change the attribute value of an HTML element */


/* 3. Adding and Deleting Elements

Method	    |   Description

document.createElement(element)	   |    Create an HTML element

document.removeChild(element)   |	Remove an HTML element

document.appendChild(element)   |	Add an HTML element

document.replaceChild(new, old) |	Replace an HTML element

document.write(text)    |	Write into the HTML output stream

 */

/* Adding Events Handlers

Method  |	Description

document.getElementById(id).onclick = function(){code}	    |   Adding event handler code to an onclick event

*/