console.log('reading.js');

function setup() {
  //size is createCanvas in js p5
  //create a variable to ref the canvas
  var myCanvas = createCanvas(800, 250);

  //connect mtCanvas to mySketch
  myCanvas.parent('mySketch');
var img = new Image();
  img.src = 'https://www.pinterest.com/pin/44262008823795880/.png'; //Had trouble putting the image in.


}

function draw() {
    //image(img, 0, 0);
  if (mouseIsPressed) { //when mouse is pressed on program it reacts
    fill(random(250), random(255), random(255));
      ellipse(165, 110, 55, 55);
      ellipse(617, 110, 55, 55);
      fill(random(250), random(0), random(255));
        ellipse(165, 110, 45, 45);
        ellipse(617, 110, 45, 45);
        fill(255, random(255));
        ellipse(165, 110, 35, 35);
        ellipse(617, 110, 35, 35);
        fill(random(250), random(300),random(155));
        ellipse(165, 110, 25, 25);
        ellipse(617, 110, 25, 25);
        fill('#FFF200');
         ellipse(165, 110, 15, 15);
         ellipse(617, 110, 15, 15);
          fill('#F43D2F');
          ellipse(165, 110, 5, 5);
        ellipse(617, 110, 5, 5);
      }
    }
