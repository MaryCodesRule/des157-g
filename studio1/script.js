console.log('reading script');



// 'use strict';
//
// /*capture the submit event with an event listener for onclick and a callback function of processForm
// */
//
//
//  document.querySelector('form').addEventListener('submit', processForm);
//document.querySelector('#r').addEventListener('click', resetForm);
//
//
// //define process function
// function processForm(evt) {
//   // capture html form inputs
//   var userName = document.querySelector('#userName').value;
//
//   var colLavender = document.querySelector('#colLavender').value;
// var yourAge = document.querySelector('#yourAge').value;
//
//    //caputre myMsg
//
//
//
//
//
//
//
//      // myMsg.innerHTML = 'love '+ userName + +colGreen;
//      // myMsg.innerHTML = 'love '+ userName + colYellow;
//       // myMsg.innerHTML = 'love '+ userName+ colBlue;
//      // myMsg.innerHTML = 'love '+userName+colBlack;
//      // myMsg.innerHTML = 'love '+userName+colLavender:
//      $
//     myMsg.innerHTML = 'love '+userName+ yourAge;
//
//

//
//   // prevent the page from reloading, which is the default behavior of a submit button
//   evt.preventDefault();
//   return false;
// }

// }
"use strict";

var response;
var submit = document.querySelector('input[type="submit"]');
// var r = document.querySelector('input[type="r"]');
var myMsg = document.querySelector('#myMsg');

//querySelectorAll returns all matches into an array
var userName = document.querySelector("#userName");
var yourAge = document.querySelector("#yourAge");
var colLavender = document.querySelector("#colLavender");
var colRed = document.querySelector('#colRed');
var colGreen = document.querySelector('#colGreen');
var colYellow = document.querySelector('#colYellow');
var colBlack = document.querySelector('#colBlack');
var colBlue = document.querySelector('#colBlue');

//add events for the radio buttons
userName.addEventListener("click", userNameSelected);
yourAge.addEventListener("click", yourAgeSelected);
colLavender.addEventListener("click", colLavenderSelected);
colRed.addEventListener("click", colRedSelected);
colBlue.addEventListener("click", colBlueSelected);
colGreen.addEventListener("click", colGreenSelected);
colYellow.addEventListener("click", colYellowSelected);
colBlack.addEventListener("click", colBlackSelected);

function userNameSelected() {
  response = 'userName';
}

function yourAgeSelected() {
  response = 'yourAge';
}

function colLavenderSelected() {
  response = 'colLavender';
}
function colRedSelected() {
  response = 'colRed';
}
function colYellowSelected() {
  response = 'colYellow';
}
function colGreenSelected() {
  response = 'colGreen';
}
function colBlueSelected() {
  response = 'colBlue';
}
function colBlackSelected() {
  response = 'colBlack';
}

submit.addEventListener("click", processForm);
// r.addEventListener('click', resetForm);

function processForm(evt) {
  // document.querySelector('#myMsg'"').innerHTML = "you selected: " + response;


  if (response=='colLavender') {
    myMsg.innerHTML = 'you got email!' ;
  } else if (response=='colBlue', 'colRed') {
    myMsg.innerHTML = 'my favorite Blondie song is \"Call Me\"';
  } else{
    myMsg.innerHTML = 'omg...that is so old school!';
  }
  // if (response=="colBlack"+ "colYellow"+ ) {
  //   myMsg.innerHTML = 'my favorite Blondie song is \"Call Me\"';
  // } else (response=='colYellow'+ 'colGreen') {
  //   myMsg.innerHTML = "omg...that is so old school!";
  // }
  //  else if(response=='colGreen'+ 'colBlack') {
  //   myMsg.innerHTML = "omg...that is so old school!";
  // } else{
  //   myMsg.innerHTML=
  //
  // }


  //stop the page from reloading
  evt.preventDefault();
}


//
//
