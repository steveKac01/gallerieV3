// Can be edited
let startImg = 0; //Start from # images
let maxImg = 8; //Maximum images
let autoPlay = false;
let timer = 2000; //Timer in ms

//Do not touch
let positionDiv = 0;
let idInterval;
maxImg--;

let moveWidth = document.querySelector(".containerImg > img").clientWidth;

//Grab
let btnArray = document.querySelectorAll(".btn-container div");
let iconePlayStop = document.querySelector(
  ".btn-container div:nth-of-type(2) > i"
);
let divToMove = document.querySelector(".containerImg");

//Events
for (let i = 0; i < btnArray.length; i++) {
  btnArray[i].addEventListener("click", function () {
    switch (
      i //Previous
    ) {
      case 0:
        MoveImage(-1);
        break;
      case 1: //Play auto
        switchAutoMode();
        break;
      case 2: //Next
        MoveImage(1);
        break;
    }
  });
}

// Move the div .containerImg
function MoveImage(direction = 1) {
  positionDiv = positionDiv - moveWidth * direction;
  if (positionDiv > 0) {
    positionDiv = -800 * maxImg;
  }
  if (positionDiv < maxImg * 800 * -1) {
    positionDiv = 0;
  }
  divToMove.style.transform = "translateX(" + positionDiv + "px)";
}

//Switch auto play or stop mode.
function switchAutoMode() {
  if (!autoPlay) {
    autoPlay = true;
    iconePlayStop.classList.replace("fa-play", "fa-stop");
    idInterval = setInterval(MoveImage, timer);
    ShowHideBtns();
  } else {
    autoPlay = false;
    iconePlayStop.classList.replace("fa-stop", "fa-play");
    clearInterval(idInterval);
    ShowHideBtns();
  }
}

//Hide or display the next and previous buttons.
function ShowHideBtns() {
  btnArray[0].classList.toggle("hide");
  btnArray[2].classList.toggle("hide");
}
