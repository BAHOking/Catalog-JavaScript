let interval;
let p = document.querySelector(".p__i");
let start = document.querySelector(".btn__start");
let stop = document.querySelector(".btn__stop");
let reset = document.querySelector(".btn__reset");

start.addEventListener("click", function funStart() {
  interval = setInterval(taymer, 1000);
  this.innerHTML = "";
  this.disabled = true;

  stop.innerHTML = "Stop";
  stop.disabled = false;

  reset.innerHTML = "";
  reset.disabled = true;
});

stop.addEventListener("click", function funStop() {
  clearInterval(interval);
  this.innerHTML = "";
  this.disabled = true;

  start.innerHTML = "Go!";
  start.disabled = false;

  reset.innerHTML = "reset";
  reset.disabled = false;
});

reset.addEventListener("click", function funReset() {
  p.innerHTML = 0;
});

function taymer() {
  p.innerHTML = +p.innerHTML + 1;
}
