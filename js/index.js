//---------------------- Can be edited
//Auto play from the start
let autoPlaying = false;
let timer = 2000; //Timer in ms
let isMiniDivActivated = false;


let maxImg = document.querySelectorAll(".containerImg img").length - 1; //Maximum images
if(!isMiniDivActivated){

//----------------------  Do not touch

let positionDiv = 0;
let idInterval;
let autoPlay = false;
let movePixels = document.querySelector(".containerImg img").clientWidth;

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
function  ShowHideBtns(){
 
}
}else{
//Mini diapo

let divMini = document.createElement("div");
divMini.style = "display:flex;"
document.querySelector(".containerGallery").append(divMini)

//Diapos
let imgDiapo =[]
for (let j=1;j<=maxImg+1;j++){

  imgDiapo[j]  = document.createElement("img");
  imgDiapo[j].src = "img/0"+j+".jpg"; 
  imgDiapo[j].style.width = "150px";
  imgDiapo[j].classList.add("miniImg")
  divMini.append(imgDiapo[j]);

  //Events


}



}
