// _____JavaScript HTML DOM - Changing CSS________

/* The HTML DOM allows JavaScript to change the style of HTML elements.

Changing HTML Style
To change the style of an HTML element, use this syntax:

document.getElementById(id).style.property = new style */

document.getElementById("p2").style.color = "blue";

// Using Events
// The HTML DOM allows you to execute code when an event occurs.

// Events are generated by the browser when "things happen" to HTML elements:

// An element is clicked on
// The page has loaded
// Input fields are changed
// You will learn more about events in the next chapter of this tutorial.

// This example changes the style of the HTML element with id="id1", when the user clicks a button:

{
  /* <p id="p2">Hello World!</p>
<h1 id="id1">My Heading 1</h1>
<button type="button"
onclick="document.getElementById('id1').style.color = 'red'">
Click Me!</button> */
}

// const myDiv = document.getElementById('myDiv');

//         // Modify CSS styles
//         myDiv.style.backgroundColor = 'blue';
//         myDiv.style.width = '200px';
//         myDiv.style.height = '200px';
// =================================================================

/* To add multiple styles to an element in JavaScript, you can concatenate multiple CSS property-value pairs into a single string and then assign it to the style property of the element. Here's how you can do it: */

// Access the element
const myDiv = document.getElementById("myDiv");

// Define multiple CSS styles as a string
const multipleStyles = "background-color: red; width: 200px; height: 200px;";

// Assign the styles to the element
myDiv.style.cssText = multipleStyles;

// =================================================================

//   Description
// The className property sets or returns an element's class attribute.

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("myP").className = "test";
  } else {
    document.getElementById("myP").className = "";
  }
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* .classList: https://youtu.be/ykwBHnxP020?si=Pt635Ku3eEQncqNr

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

.classList is a property of DOM elements that returns a collection of the element's classes as a DOMTokenList object. This object provides methods for adding, removing, toggling, and checking the presence of classes. */

// classList
// classList.add('className');
// classList.remove('className');
// classList.toggle('className');
// classList.contains('className');
// classList.item(index)
// classList.length
// classList.value
// classList.forEach(callback)

// Toggle a class on the element
// element.classList.toggle('active');

// Check if the element has a specific class
// const hasClass = element.classList.contains('className');

// =======
// document.querySelector('#dam').classList.add('className');

document.querySelector("#dampp").classList.add("asaa");

// document.querySelector('#dam').classList.remove('className');

  // Select the element with ID "dam" and remove class "className"
  document.querySelector("#dam").classList.remove("aaa");

// document.querySelector('#dam').classList.toggle('className');

const button = document.getElementById('myButtonss');
const divx = document.getElementById('myDivss');

// Add click event listener to the button
button.addEventListener('click', function() {
    // Toggle the "highlight" class on the div
    divx.classList.toggle('highlight');
});

//=======================

// document.querySelector('#dam').classList.contains('className');

const divAA = document.getElementById('myDivAAAA');

        // Check if the div has the "highlight" class
        const hasHighlightClass = divAA.classList.contains('highlight');
        console.log('Has highlight class:', hasHighlightClass); // Output: true

        // Check if the div has the "box" class
        const hasBoxClass = divAA.classList.contains('box');
        console.log('Has box class:', hasBoxClass); // Output: true

        // Check if the div has the "otherClass" class
        const hasOtherClass = divAA.classList.contains('otherClass');
        console.log('Has otherClass class:', hasOtherClass); // Output: false

//=======================

// document.querySelector('#dam').classList.item(index);
// document.querySelector('#dam').classList.length;

const diva = document.getElementById('myDivaa');

// Accessing classList properties
console.log('Length:', diva.classList.length); // Output: 3
// Accessing class at index
console.log('Item at index 0:', diva.classList.item(0)); // Output: class1
console.log('Item at index 2:', diva.classList.item(2)); // Output: class3
console.log('Item at index 3:', diva.classList.item(3)); // Output: null

//=======================


// document.querySelector('#dam').classList.forEach(callback);


// =================================================================

// _______JavaScript HTML DOM Events______

// https://www.w3schools.com/js/js_htmldom_events.asp

// https://youtu.be/R7mu7nKFc7w?si=R6taBgfUlafvrcoL

// Reacting to Events
// A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.

// To execute code when a user clicks on an element, add JavaScript code to an HTML event attribute:

// onclick=JavaScript
// Examples of HTML events:

// When a user clicks the mouse
// When a web page has loaded
// When an image has been loaded
// When the mouse moves over an element
// When an input field is changed
// When an HTML form is submitted
// When a user strokes a key

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// JavaScript HTML DOM EventListener

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// https://youtu.be/NhRhrAziBRU?si=OjlMvG1nT8bzVSJH

/* The addEventListener() method
Example
Add an event listener that fires when a user clicks a button: */

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demoA").innerHTML = Date();
}

/* The addEventListener() method attaches an event handler to the specified element.

The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.

You can add many event handlers to one element.

You can add many event handlers of the same type to one element, i.e two "click" events.

You can add event listeners to any DOM object not only HTML elements. i.e the window object.

The addEventListener() method makes it easier to control how the event reacts to bubbling.

When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.

You can easily remove an event listener by using the removeEventListener() method.

Syntax
element.addEventListener(event, function, useCapture);
The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)

The second parameter is the function we want to call when the event occurs.

The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

Note that you don't use the "on" prefix for the event; use "click" instead of "onclick". */







// =============================================================================

// Add an Event Handler to an Element

// SYNTAX  :
/*  document.querySelector("").addEventListener("click", functionName);
 function functionName(){
    statement
 } */

document.getElementById("btn").addEventListener("click", as);

function as() {
  alert("Hello World!");
}

// Remove an Event Handler from an Element

// SYNTAX  :

// document.getElementById("btn").removeEventListener("click", as);


// =======================

// Add Many Event Handlers to the Same Element

// ========================

// The addEventListener() method allows you to add many events to the same element, without overwriting existing events:

const div = document.getElementById("myDisv");
// Add mouseover event listener
div.addEventListener("mouseover", function () {
  div.textContent = "Mouse over event triggered";
  div.style.backgroundColor = "yellow";
});
// Add mouseout event listener
div.addEventListener("mouseout", function () {
  div.textContent = "Hover over me";
  div.style.backgroundColor = "white";
});
// Add click event listener
div.addEventListener("click", function () {
  div.textContent = "Click event triggered";
  div.style.backgroundColor = "red";
});


// --- other methods --------------------------------

var x = document.getElementById("myBtnnnnn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);


function mySecondFunction() {
  document.getElementById("demmooo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("demmooo").innerHTML += "Moused out!<br>";
}

//----------------------------------------------------------------

// Add keydown event listener

const input = document.getElementById('myInput');
input.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});

//----------------------------------------------------------------

// Passing Parameters

// When passing parameter values, use an "anonymous function" that calls the specified function with the parameters:

let p1 = 5;
let p2 = 7;
document.getElementById("buttonpart").addEventListener("click", function() {
  myFunction(p1, p2);
});

function myFunction(a, b) {
  document.getElementById("dkm").innerHTML = a * b;
}



// Event Bubbling or Event Capturing?



//https://youtu.be/CO_DAXswOrc?si=Eg1S7YFFhkSmwGR3&t=731 

/* Event bubbling and event capturing are two phases of event propagation in the Document Object Model (DOM) when an event occurs on an element. Understanding these phases is crucial for handling events effectively in JavaScript.

Event Bubbling:
In event bubbling, the event starts from the target element and bubbles up through its ancestors in the DOM hierarchy until it reaches the root element (<html>), triggering event handlers along the way.

Event Capturing:
In event capturing (also known as trickling or capturing phase), the event starts from the root element (<html>) and travels down through the DOM hierarchy until it reaches the target element, triggering event handlers along the way. */


// Event Bubbling https://youtu.be/NhRhrAziBRU?si=hZkKSeQT9EvQLo7o

// document.querySelector('#outer').addEventListener('click', e => {
//    console.log('Outer div is clicked');
// }, false);
// document.querySelector('#inner').addEventListener('click', e => {
//    console.log('Inner div is clicked');
// }, false);
/* If you run the above code and click in the inner div, you'll get the log −

Inner div is clicked

Outer div is clicked */


// Event Capturing  https://youtu.be/NhRhrAziBRU?si=hZkKSeQT9EvQLo7o 

document.querySelector('#outer').addEventListener('click', e => {
   console.log('Outer div is clicked');
}, true);
document.querySelector('#inner').addEventListener('click', e => {
   console.log('Inner div is clicked');
}, true);
// If you run the above code and click in the inner div, you'll get the log −

// Outer div is clicked

// Inner div is clicked



document.querySelector(".child").addEventListener("click", (e) => {
  e.stopPropagation() // stop propagation of click
  alert("Child Was clicked")
})

document.querySelector(".childContainer").addEventListener("click", (e) => {
  e.stopPropagation()   
  alert("childContainer Was clicked")
})

document.querySelector(".containerr").addEventListener("click", (e) => {

  alert("container Was clicked")
})


//================================================

// DOM TRAVERSAL METHODS =================================


// JavaScript HTML DOM Navigation

//With the HTML DOM, you can navigate the node tree using node relationships.

/* DOM Nodes
According to the W3C HTML DOM standard, everything in an HTML document is a node:

The entire document is a document node
Every HTML element is an element node
The text inside HTML elements are text nodes
Every HTML attribute is an attribute node (deprecated)
All comments are comment nodes */

   /*               A
                    |
                    |
     -----------------------------
     |     |     |     |     |   |           
     B     C     D     E     F   G     */

/*   A- parent node
     B- child node
     C- child node
     D- child node
     E- child node
     F- child node
     G- child node

- all children are siblings 
- if point is D then previous sibling is c and next sibling is E,
- if point is E then next sibling is F AND previous E sibling
- First child is B  and  last child is G
 */

// - PARENT NODE AND PARENT ELEMENT --------------------------------


document.getElementById("id02").innerHTML = document.getElementById("id01").innerHTML;

/* innerHTML
In this tutorial we use the innerHTML property to retrieve the content of an HTML element.

However, learning the other methods above is useful for understanding the tree structure and the navigation of the DOM.

DOM Root Nodes
There are two special properties that allow access to the full document:

document.body - The body of the document
document.documentElement - The full document */

/* document.getElementById("demo").innerHTML = document.body.innerHTML; */


/* The nodeName Property
The nodeName property specifies the name of a node.

nodeName is read-only
nodeName of an element node is the same as the tag name
nodeName of an attribute node is the attribute name
nodeName of a text node is always #text
nodeName of the document node is always #documenT */

/* document.getElementById("id02").innerHTML = document.getElementById("id01").nodeName; */


/* The nodeValue Property
The nodeValue property specifies the value of a node.

nodeValue for element nodes is null
nodeValue for text nodes is the text itself
nodeValue for attribute nodes is the attribute value
The nodeType Property
The nodeType property is read only. It returns the type of a node.

Example
<h1 id="id01">My First Page</h1>
<p id="id02"></p>

<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").nodeType; //1
</script> */

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//must watch

// https://youtu.be/Pe3sdhA7YME?si=EO5BxC99tMpFCQ4r
// https://youtu.be/nYr4e4H09MM?si=T78Lyd-wLzfqpHMq
// https://youtu.be/Fo2QsLDOYlY?si=A_NREsTaZbD3LXFC
// https://youtu.be/kn1BVQYgEDk?si=bnDPuSMV7cBUfeQE 

// https://youtu.be/KwPolbxL8Ps?si=c-3yyEcbiNtxSwu-
// https://youtu.be/XJU0KdOdwLM?si=dy4pLjD16T0Pqpqq
// https://youtu.be/1SYUI0uHksM?si=QOartda8ToysUg_5  

/* - Agar kuch find nahi hoga to parent node kuch bhi deta he | parent element undefine dikha dega 
- children node  Comment SPACE SABKO Target KARTA HE | children only text ko Target KARTA HE 
- FIRST CHILD TEXT NODE  SPACE Comment SAB KO TARGET KAREGA | FIRST Element CHILD PAHLE JO TAG AA RAAHA HOGA USE TARGET KAREGA (*YAHI USE HOTI HE*)
-  pervious and next siblings space , comment and all bhi count karta he | Next element sibling me space and all nahi count hota next tag ko hi target karega  (*YAHI USE HOTI HE*)  */

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// ______ DOM CREATE METHODS ______

// - createTextNode
// - createElement
// - createComment
/* 
 Tag               TEXT              COMMENT
  |                  |                  |
<p></p>     THIS IS JUST TEXT  <!-- JUST COMMENT -->
  |                  |                  |
createElement   createTextNode     createComment */

var newelement = document.createElement("h2");
console.log(newelement);

var newelement2 = document.createTextNode("THIS IS JUST TEXT ENJOY");
console.log(newelement2);

// var newelement3 = document.createComment("just comment");
// console.log(newelement3);


// ================================================================= 

// DOM APPEND METHODS 

// =================================================================

// - append child 

newelement.appendChild(newelement2);
console.log(newelement);
document.getElementById("partapp").appendChild(newelement);

// - insertBefore

let target = document.getElementById("partapp");
target.insertBefore(newelement, target.childNodes[4]);

// append child & insertBefore ONLY APPEND JO PAHLE SE BANA HO |  insertAdjacentElement , insertAdjacentHTML , insertAdjacentText create & append dono karte he 

// =================================================================

// create & append method

// ================================================================= 

/* 
 Tag           tag with  TEXT         TEXT
  |                  |                  |
<p></p>   <p>THIS IS JUST TEXT</p>  THIS IS TEXT
  |                  |                  |
insert             insert             insert
Adjacent          AdjaceNT            AdjaceNT
Element             HTML               text     */


// DOM insertAdjacent Position

/* 
  - beforebegin
  - afterbegin
  - beforeend
  - afterend
 */

// - insertAdjacentElement

var newel = document.createElement("h1");
console.log(newel);

var newel2 = document.createTextNode("THIS IS JUST TEXT TWOOOOOOO, ENJOY");
console.log(newel2); 

newel.appendChild(newel2);

let target3 = document.getElementById("oto");
target3.insertAdjacentElement("beforebegin", newel);

// - insertAdjacentText

let target4 = document.getElementById("oto");
target4.insertAdjacentText("afterbegin", "THIS IS JUST TEXT TWOOOOOOO, ENJOY");

