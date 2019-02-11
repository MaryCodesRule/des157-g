console.log('reading script');




// var wallet.addEventListener("mousedown", function() {
//   console.log("mousedown on button");
//  button.innerHTML = "Mullah Malla Chasin Change!";
//   });
// find id
var wallet = document.getElementById('wallet')
wallet.addEventListener("mousedown", function() {
  console.log("mousedown on button");
  wallet.innerHTML = "Mullah Malla Chasin Change! What is a wallet? A carrier of DREAMS. Money may not buy them, but they sure do help!!!!";
});


var pallete = document.getElementById('pallete')
pallete.addEventListener("mousedown", function() {
  console.log("mousedown on button");
  pallete.innerHTML = "When I have time...but it's the prettiest decoration! I may be make up obsessed, but right now I'm more of a collector then a wearer. Hey I'm tired!! But new year, new face ;)";
});
var water = document.getElementById('water')
water.addEventListener("mousedown", function() {
  console.log("mousedown on button");
  water.innerHTML = "Gotta Stay Hydrated! Water keeps the body healthy, the skin moist and young. Best invention since the wheel I tell ya!";
});

function on() {
  document.getElementById("overlay").style.display = "block";

}

function off() {
  document.getElementById("overlay").style.display = "none";
}
