document.write("hello world <br>");
document.write("<i>welcome to the MRzone</i> <br>");
document.write("<b>how are you?</b>");
console.log("how are you?");

document.addEventListener('click', function() {
  console.log('how are you?');
  document.getElementById('demo').innerHTML = new Date();
});