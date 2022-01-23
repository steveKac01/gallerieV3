// Can be edited
let startImg = 0; //Start from # images
let maxImg = 8; //Maximum images
let autoPlaying = false; //Auto play the slide from the start
let timer = 2000; //Timer in ms

//Do not touch
let positionDiv = 0;
let idInterval;
maxImg--;
let autoPlay = false;

let movePixels = document.querySelector(".containerImg > img").clientWidth;

//Grab
let btnArray = document.querySelectorAll(".btn-container div");
let iconePlayStop = document.querySelector(
  ".btn-container div:nth-of-type(2) > i"
);
let divToMove = document.querySelector(".containerImg");

if (autoPlaying) {
  autoPlaying = false;
  switchAutoMode();
}

//Events
for (let i = 0; i < btnArray.length; i++) {
  btnArray[i].addEventListener("click", function () {
    switch (i) {
      case 0: //Previous img
        MoveImage(-1);
        break;
      case 1: //Play auto
        switchAutoMode();
        break;
      case 2: //Next img
        MoveImage(1);
        break;
    }
  });
}

// Move the div .containerImg
function MoveImage(direction = 1) {
  positionDiv = positionDiv - movePixels * direction;
  if (positionDiv > 0) {
    positionDiv = -movePixels * maxImg;
  }
  if (positionDiv < maxImg * (movePixels * -1)) {
    positionDiv = 0;
  }
  divToMove.style.transform = "translateX(" + positionDiv + "px)";
}

//Switch auto play | pause.
function switchAutoMode() {
  if (!autoPlay) {
    autoPlay = true;
    iconePlayStop.classList.replace("fa-play", "fa-pause");
    idInterval = setInterval(MoveImage, timer);
    ShowHideBtns();
  } else {
    autoPlay = false;
    iconePlayStop.classList.replace("fa-pause", "fa-play");
    clearInterval(idInterval);
    ShowHideBtns();
  }
}

//Hide | display the next and previous buttons.
function ShowHideBtns() {
  btnArray[0].classList.toggle("hide");
  btnArray[2].classList.toggle("hide");
}
