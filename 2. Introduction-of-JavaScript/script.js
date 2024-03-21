// ----------------------------------------------------------------

// ------------------Java script introduction----------------------

// JavaScript is the world's most popular programming language.
// JavaScript is the programming language of the Web.
// JavaScript is easy to learn.
// This tutorial will teach you JavaScript from basic to advanced.


// **************************************JavaScript Can Change HTML Content********************************************

//--------------------------------------------- PREFER W3SCHOOL--------------------------------------------------------


// One of many JavaScript HTML methods is getElementById().
// The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":
// Example
document.getElementById("demo").innerHTML = "Hello JavaScript";

// JavaScript accepts both double and single quotes:
// Example
document.getElementById('demo').innerHTML = 'Hello JavaScript';

// JavaScript Can Change HTML Attribute Values
// In this example JavaScript changes the value of the src (source) attribute of an <img> tag:



// JavaScript Can Change HTML Styles (CSS)
// Changing the style of an HTML element, is a variant of changing an HTML attribute:
// Example
document.getElementById("demo").style.fontSize = "35px";

// JavaScript Can Hide HTML Elements
// Hiding HTML elements can be done by changing the display style:
// Example
document.getElementById("demo").style.display = "none";

// JavaScript Can Show HTML Elements
// Showing hidden HTML elements can also be done by changing the display style:
// Example
document.getElementById("demo").style.display = "block";


// **************************************HOW TO WRITE********************************************

// The <script> Tag
// In HTML, JavaScript code is inserted between <script> and </script> tags.
<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>