let timerP = document.querySelector(".timer__p-i");
let input = document.querySelector(".timer__input");
let btnStart = document.querySelector(".timer__btn-start");

btnStart.addEventListener("click", function funStart() {
  this.disabled = true;
  this.innerHTML = "";

  setInterval(function () {
    if (input.value >= 0) {
      timerP.innerHTML =`${input.value--} s` ;
    }

    if (input.value < 0) {
      timerP.innerHTML = "Countdown completed";
      timerP.style.color = "yellowgreen";
    }
  }, 1000);

  input.style.display = "none";
});



