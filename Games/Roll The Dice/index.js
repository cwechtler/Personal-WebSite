var heading = document.querySelector("h1");
var button = document.querySelector(".button");
var audio = document.querySelector("audio");

var diceImage1 = document.querySelector(".img1");
var diceImage2 = document.querySelector(".img2");

button.onclick = function() {Roll();};

function Roll(){
  audio.pause();
  audio.currentTime = 0;
  audio.play();

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  diceImage1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  diceImage2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 === randomNumber2) {
    heading.textContent = "Draw!";
  }

  if (randomNumber1 > randomNumber2) {
    heading.textContent = "🚩 Player 1 Wins!";
  }

  if (randomNumber1 < randomNumber2) {
    heading.textContent = "Player 2 Wins! 🚩";
  }
}
