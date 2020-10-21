var n = Math.floor(Math.random()* 6) + 1;
var m = "images/dice" + n + ".png";

 document.querySelectorAll("img")[0].setAttribute("src", m);

var i = Math.floor(Math.random()* 6) + 1;
var j = "images/dice" + i + ".png";

document.querySelectorAll("img")[1].setAttribute("src", j);

// winner
if (n > i) {
  document.querySelector("h1").textContent = "🚩Player1 Wins";
} else if (n < i) {
  document.querySelector("h1").textContent = "🚩Player2 Wins";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
