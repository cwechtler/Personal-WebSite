var buttons = $("button");
var startButton = $("#start");
var infoText = $(".info-text");
var simonsNumbers = [];
var playersSequence = [];
var level = 1;
var isPlayersTurn = false;
var isStarted = false;

playerPlays();

startButton.click(start);
$(document).keydown(start);

function start(){
  startButton.text("Started");
  startButton.removeClass("notpressed").addClass("pressed");
  $(".gameover-text").addClass("hide");
  if (!isStarted) {
      isStarted = true;
      simonsNumbers = [randomNumber()];
      autoPlay();
  }
}

function playerPlays() {
    buttons.mousedown(function () {
        if (isPlayersTurn) {
            $(this).attr("id", "pressed");
            playersSequence.push(buttons.index(this));
            infoText.text(playersSequence.length + " Correct - Level: " + level);

            $(this).mouseup(function () {
                buttons.removeAttr("id");
            });

            for (i = 0; i < playersSequence.length; i++) {
                if (playersSequence[i] !== simonsNumbers[i]) {
                    gameOver();
                    return;
                }
            }

            playAudio(this);

            if (playersSequence.length === simonsNumbers.length) {
                setTimeout(function () {
                    isPlayersTurn = false;
                    level++;
                    infoText.text("Watch the Sequence");
                    simonsNumbers.push(randomNumber());
                    autoPlay();
                }, 1000);
            }
        }
    });
}

function autoPlay() {
    for (i = 0; i < simonsNumbers.length; i++) {
        simonPlays(i);
    }
    playersSequence = [];
}

function simonPlays(i) {
    setTimeout(function () {
        $(buttons[simonsNumbers[i]]).attr("id", "simon-pressed");
        playAudio(buttons[simonsNumbers[i]]);
        setTimeout(function () {
            buttons.removeAttr("id");
        }, 300);
    }, 500 * i);

    if (i + 1 === simonsNumbers.length) {
        setTimeout(function () {
            infoText.text("Match the sequence");
            isPlayersTurn = true;
        }, 600 * i);
    }
}

function gameOver() {
    var audio = new Audio("sounds/Wrong 3.wav");
    audio.play();
    isStarted = false;
    infoText.text("Press any key to restart");
    $(".gameover-text").removeClass("hide").html("Game Over <br>Max Level: " + level);
    simonsNumbers = [];
    playersSequence = [];
    level = 1;
}

function randomNumber() {
    var number = Math.floor(Math.random() * 4);
    return number;
}

function playAudio(key) {
    var audio;
    switch (key.className) {
        case "green button":
            audio = new Audio("sounds/Green A4.wav");
            audio.play();
            break;
        case "red button":
            audio = new Audio("sounds/Red B3.wav");
            audio.play();
            break;
        case "yellow button":
            audio = new Audio("sounds/Yellow B4.wav");
            audio.play();
            break;
        case "blue button":
            audio = new Audio("sounds/Blue E4.wav");
            audio.play();
            break;
        default:
            console.log("No Button Pressed");
            break;
    }
}
