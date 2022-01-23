// Can be edited
let startImg = 0;
let maxImg = 8;
let pathImg = "Img/0";
let positionStartDiv = 0;

//Do not touch
//Nbr de pixel a se deplacer
let moveWidth = document.querySelector(".containerImg > img").clientWidth; //
let positionDiv = positionStartDiv;

//Grab
let btnArray = document.querySelectorAll(".btn-container div");
let divToMove = document.querySelector(".containerImg");

//Events
for (let i = 0; i < btnArray.length; i++) {
  btnArray[i].addEventListener("click", function () {
    let sens = 0;
    if (i == 0) {
      //Previous btn
      sens = -1;
    } else {
      //Next btn
      sens = 1;
    }

    console.log("je bouge");
    positionDiv = positionDiv - moveWidth * sens;
    if (positionDiv > 0) {
      positionDiv = -800 * (maxImg - 1);
    }
    if (positionDiv < (maxImg - 1) * 800 * -1) {
      positionDiv = 0;
    }
    divToMove.style.transform = "translateX(" + positionDiv + "px)";
    console.log(positionDiv);
  });
}

//Functions
function next() {}
