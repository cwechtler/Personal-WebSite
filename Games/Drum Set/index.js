var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick());
}

document.addEventListener("keydown", function (event) {
  var eventUpperCase = event.key.toLocaleUpperCase();
  playAudio(eventUpperCase);
  playAnimation(eventUpperCase);
});

function handleClick() {
  playAudio(this.innerHTML);
  playAnimation(this.innerHTML);
}

function playAudio(key) {
  var audio;
  switch (key) {
    case "W":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "A":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "S":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "D":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "J":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "K":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "L":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log("Incorect button pressed");
      break;
  }
}

function playAnimation(key) {
  var selectedKey = document.querySelector("." + key);
  if(selectedKey === null){
    return;
  }
  selectedKey.classList.add("pressed");

  setTimeout(function(){
      selectedKey.classList.remove("pressed");}, 100);
}
