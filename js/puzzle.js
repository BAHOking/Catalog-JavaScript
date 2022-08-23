let puzzleBtn = document.querySelector(".puzzle__btn");
let imgHint = document.querySelector(".puzzle__img-hint");

puzzleBtn.addEventListener("click", fun1);

function fun1() {
  imgHint.style.display = "block";

  this.removeEventListener("click", fun1);
  this.addEventListener("click", fun2);
}

function fun2() {
  imgHint.style.display = "none";

  this.removeEventListener("click", fun2);
  this.addEventListener("click", fun1);
}

let arrImg = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
  "25.jpg",
  "26.jpg",
  "27.jpg",
  "28.jpg",
  "29.jpg",
  "30.jpg",
];

let startImgBox = document.querySelector(".puzzle__start-img--box");
let finishImgBox = document.querySelector(".puzzle__finish-img--box");

for (let elem of arrImg) {
  let img = document.createElement("img");
  img.src = `images/puzzle/${elem}`;
  img.alt = `${elem}`;
  img.style.opacity = "0.1";

  img.classList.add("puzzle__img");
  img.classList.add("puzzle__finish-img");
  finishImgBox.append(img);
}

for (let elem of arrImg.sort(() => Math.random() - 0.5)) {
  let img = document.createElement("img");
  img.src = `images/puzzle/${elem}`;
  img.alt = `${elem}`;
  img.classList.add("puzzle__img");
  img.draggable = true;
  startImgBox.append(img);
}

let startImg = document.querySelectorAll(".puzzle__img");
let finishImg = document.querySelectorAll(".puzzle__img");

startImg.forEach(function (elem, index) {
  elem.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", index);
  });
});

let numI = 0;

for (let i = 0; i < finishImg.length; i++) {
  finishImg[i].addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  finishImg[i].addEventListener("drop", function (event) {
    if (
      finishImg[i].alt ==
      startImg[event.dataTransfer.getData("text", index)].alt
    ) {
      finishImg[i].style.opacity = "1";
      this.appendChild(startImg[event.dataTransfer.getData("text", index)]);

      numI++;

      if (numI === 30) {
        let puzzle = document.querySelector(".puzzle");
        puzzle.classList.add("puzzle__new-box");

        let puzzleWin = document.querySelector(".puzzle__win");
        puzzleWin.style.display = "block";
      }
    }
  });
}
