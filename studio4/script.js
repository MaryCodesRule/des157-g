'use strict'

console.log('reading script');

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("image", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("image");
  ev.target.appendChild(document.getElementById(data));
}

// var drag1 = document.getElementById('drag1')
// drag1.addEventListener("click", function() {
//   console.log("click on text");
//   drag1.innerHTML = "Mullah Malla Chasin Change! What is a wallet? A carrier of DREAMS. Money may not buy them, but they sure do help!!!!";
// });
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");

}
function myFunction1() {
var popup1 = document.getElementById("myPopup1");
popup1.classList.toggle("show");
}
function myFunction2() {
var popup2 = document.getElementById("myPopup2");
popup2.classList.toggle("show");
}
function myFunction3() {
var popup3 = document.getElementById("myPopup3");
popup3.classList.toggle("show");
}
