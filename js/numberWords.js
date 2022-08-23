let inputW = document.querySelector(".numberWords__input");
let btn = document.querySelector(".numberWords__btn");

let rez = document.querySelector(".numberWords__rez");

btn.addEventListener("click", function () {
  let arr = inputW.value.split(" ");
  let i = 0;

  for (let elem of arr) {
    i++;
  }

  rez.innerHTML = `${i} word(s)`;
});
