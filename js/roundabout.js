let startStop;

let btnLeft = document.querySelector(".roundabout__btn-left");
let btnRight = document.querySelector(".roundabout__btn-right");
let btnStop = document.querySelector(".roundabout__btn-stop");

let img_1 = document.querySelector(".roundabout__img-01");
let img_2 = document.querySelector(".roundabout__img-02");
let img_3 = document.querySelector(".roundabout__img-03");
let img_4 = document.querySelector(".roundabout__img-04");
let img_5 = document.querySelector(".roundabout__img-05");
let img_6 = document.querySelector(".roundabout__img-06");
let img_7 = document.querySelector(".roundabout__img-07");
let img_8 = document.querySelector(".roundabout__img-08");
let img_9 = document.querySelector(".roundabout__img-09");
let img_10 = document.querySelector(".roundabout__img-10");

btnLeft.addEventListener("click", function () {
  startStop = setInterval(function () {
    let tmp = img_1.src;
    img_1.src = img_2.src;
    img_2.src = img_3.src;
    img_3.src = img_4.src;
    img_4.src = img_5.src;
    img_5.src = img_6.src;
    img_6.src = img_7.src;
    img_7.src = img_8.src;
    img_8.src = img_9.src;
    img_9.src = img_10.src;
    img_10.src = tmp;
  }, 200);

  btnLeft.disabled = true;
  btnRight.disabled = true;
});

btnRight.addEventListener("click", function () {
  startStop = setInterval(function () {
    let tmp = img_10.src;
    img_10.src = img_9.src;
    img_9.src = img_8.src;
    img_8.src = img_7.src;
    img_7.src = img_6.src;
    img_6.src = img_5.src;
    img_5.src = img_4.src;
    img_4.src = img_3.src;
    img_3.src = img_2.src;
    img_2.src = img_1.src;
    img_1.src = tmp;
  }, 200);

  btnLeft.disabled = true;
  btnRight.disabled = true;
});

btnStop.addEventListener("click", function () {
  clearInterval(startStop);

  btnLeft.disabled = false;
  btnRight.disabled = false;
});
