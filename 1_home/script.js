
// how to add html tags in javascript

document.write("hello world <br>");
document.write("<i>welcome to the MRzone</i> <br>");
document.write("<b>how are you?</b>");

// console.log

console.log("how are you?");

// eventlistener
document.addEventListener('click', function() {
  console.log('how are you?');
  document.getElementById('demo').innerHTML = new Date();
});