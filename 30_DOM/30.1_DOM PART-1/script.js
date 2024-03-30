

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

// Accessing elements by their class name

// Accessing elements by their tag name

// Accessing an element using CSS selectors


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

/* 4. Adding Events Handlers

Method  |	Description

document.getElementById(id).onclick = function(){code}	    |   Adding event handler code to an onclick event

*/

// ==========================================================================================================

// @@@@@@@@@@@@@@@@@@@@@@ JavaScript HTML DOM Elements @@@@@@@@@@@@@@@@@@@@@@ 


// This page teaches you how to find and access HTML elements in an HTML page.

// Finding HTML Elements
// Often, with JavaScript, you want to manipulate HTML elements.

// To do so, you have to find the elements first. There are several ways to do this:

// Finding HTML elements by id
// Finding HTML elements by tag name
// Finding HTML elements by class name
// Finding HTML elements by CSS selectors
// Finding HTML elements by HTML object collections


/* 1. Finding HTML Element by Id

The easiest way to find an HTML element in the DOM, is by using the element id.
This example finds the element with [ id="intro" ]:
Example */

const element = document.getElementById("intro");

/* If the element is found, the method will return the element as an object (in element).

If the element is not found, element will contain null */


/* 2. Finding HTML Elements by Tag Name
This example finds all <p> elements:

Example */

const element1 = document.getElementsByTagName("p");

// !!!!!!!!!!!!! in above there is  single id so we need to write elements

/* This example finds the element with id="main", and then finds all <p> elements inside "main":

Example */
const x3 = document.getElementById("main");
const y = x3.getElementsByTagName("p");


/* 3. Finding HTML Elements by Class Name
If you want to find all HTML elements with the same class name, use getElementsByClassName().
This example returns a list of all elements with [class="intro"].

Example */

const x1 = document.getElementsByClassName("intro");

// !!!!!!!!!!!!! in above there are multiple classes so we need to write elements

/* 4. Finding HTML Elements by CSS Selectors
If you want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.
This example returns a list of all [<p>] elements with [class="intro"].

Example */

// document.querySelector("#myId / .myClass / tag");
//returns first element

// document.querySelectorAll("#myId / .myClass / tag");
//returns a NodeList

/* 5. Finding HTML Elements by HTML Object Collections
This example finds the form element with id="frm1", in the forms collection, and displays all element values:
 */

const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length ;i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demoo").innerHTML = text;

/* Properties:

tagName : returns tag for element nodes

innerText : returns the text content of the element and all its children

innerHTML : returns the plain text or HTML contents in the element

textContent : returns textual content even for hidden elements */

console.dir(document);
console.dir(window.document);
console.dir(document.body);
console.log(document.body);
console.log(document.images[0]);
console.log(document.images[1]);
console.log(document.form);
console.log(document.doctype);
console.log(document.URL);
console.log(document.baseURI);
console.log(document.domain);

/* The following HTML objects (and object collections) are also accessible:

document.anchors
document.body
document.documentElement
document.embeds
document.forms
document.head
document.images
document.links
document.scripts
document.title
 */
// Access all anchor elements with a name attribute
document.getElementById("dema").innerHTML = "Number of anchors are: " + document.anchors.length; // Number of anchors are: 3

// document.getElementById("dema").innerHTML = document.body.innerHTML;

// document.documentElement
// document.getElementById("dema").innerHTML = document.documentElement.innerHTML; //it will create a new document in that id !!!!!!!DANGER!!!!!!!!!!

document.getElementById("demaa").innerHTML = "Number of embeds: " + document.embeds.length; //Number of embeds: 0

document.getElementById("demaaa").innerHTML = "Number of forms: " + document.forms.length; //Number of forms: 2

document.getElementById("demaaaa").innerHTML = document.head; //[object HTMLHeadElement]

document.getElementById("demaaaaa").innerHTML = "Number of images: " + document.images.length; //Number of images: 2

document.getElementById("demaaaaaa").innerHTML = "Number of links: " + document.links.length; //Number of links: 0

document.getElementById("demaaaaaaa").innerHTML = "Number of scripts: " + document.scripts.length; // Number of scripts: 2

document.getElementById("demaaaaaaaa").innerHTML = "Number of title: " + document.title; //Number of title: DOM PART -1

// ==========================================================================================================

// ********** IMPLEMENTATION **********

let heading = document.getElementById("box-title-a");
console.dir(heading);
heading.addEventListener("click", function() {
  console.log(this);
  alert(this.innerHTML);
});


let headings = document.getElementsByClassName("box-title");
console.dir(headings);


let paras = document.getElementsByTagName("p");
console.dir(paras);
let parass = document.getElementsByTagName("h1");
console.dir(parass);

// Query Selector 
// WE CAN USE ID AND CLASS ALSO BUT MIMP IS QUERY SELECTOR

let firstel = document.querySelector("p");
console.dir(firstel);

let secondel = document.querySelectorAll("p");
console.dir(secondel);

let thirdel = document.querySelector(".box-title");// in query selector for class we use (.)
console.dir(thirdel);

let fourthel = document.querySelector("#box-title-a");
console.dir(fourthel);




// WHAT WE CAN GET WITH DOM?
/*  - HTML
    - Text
    - ATTRIBUTE */ 

    // DOM GET METHODS

/*  - innerTEXT
    - innerHTML
    - getAttribute
    - getAttributeNode
    - Attributes       */

// --------------------------innerTEXT-------------------------------

    let innerText = document.getElementById("getset-part").innerText;
    console.log(innerText);

// ----------------------------innerHTML----------------------------

    let innerHtml = document.getElementById("getset-part").innerHTML;
    console.log(innerHtml);

// ----------------------------getAttribute----------------------------

    let getAttribute = document.getElementById("getset-part").getAttribute("class");
    console.log(getAttribute);

    let getAttribute2 = document.getElementById("getset-part").getAttribute("style");
    console.log(getAttribute2);

    let getAttribute3 = document.getElementById("getset-part").getAttribute("onclick");
    console.log(getAttribute3);

    let getAttribute4 = document.getElementById("getset-part").getAttribute("id");
    console.log(getAttribute4);
    
  // ---------------------getAttributeNode-----------------------------

  let getAttribute5 = document.getElementById("getset-part").getAttributeNode("onclick");
  console.log(getAttribute5);

  let getAttribute6 = document.getElementById("getset-part").getAttributeNode("onclick").value;
  console.log(getAttribute6); // dont use just for knowledge use getAttribute instead getAttributeNode if only value needed

  // --------------------- Attributes -----------------------------

  let attributes = document.getElementById("getset-part").attributes;
  console.log(attributes);

  let attributes1 = document.getElementById("getset-part").attributes[1];
  console.log(attributes1);
  
  let attributes2 = document.getElementById("getset-part").attributes[2];
  console.log(attributes2);

  let attributes3 = document.getElementById("getset-part").attributes[3];
  console.log(attributes3);

  // value
  let attributes4 = document.getElementById("getset-part").attributes[2].value;
  console.log(attributes4);

  // name
  let attributes5 = document.getElementById("getset-part").attributes[2].name;
  console.log(attributes5);


      // DOM SET METHODS

/*  - innerTEXT
    - innerHTML
    - setAttribute
    - Attribute
    - removeAttributes       */

    // --------------------------innerTEXT-------------------------------

let innerText1 = document.getElementById("oldpart");
innerText1.innerText = "wow part";
console.log(innerText1);

// different method
let methodget;
document.getElementById("oldpart").innerText = "wooooow"
methodget = document.getElementById("oldpart").innerHTML;
console.log(methodget);

   // --------------------------innerHTML-------------------------------

let innerText2 = document.getElementById("get-set-twoo");
innerText2.innerHTML = "<h1>wow partsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss<br>sssssssssssssssssssssssssssssssssssssssssss</h1>";

// --------------------------setAttribute----------------------------

let innerText3 = document.getElementById("get-set-twoo");
innerText3.setAttribute("style", "background-color: red;");
innerText3.setAttribute("id", "get-set-twoo");
innerText3.setAttribute("onclick", "alert(123)");
console.log(innerText3);

