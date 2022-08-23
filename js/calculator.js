let calInpyt = document.querySelector(".calculator__inpyt");
let btnС = document.querySelector(".calculator__btn-c");
let btnRez = document.querySelector(".btn__rez");

let btnsNum = document.querySelectorAll(".btn__num");
let btnsSign = document.querySelectorAll(".btn__sign");

for (let i = 0; i < btnsNum.length; i++) {
  btnsNum[i].addEventListener("click", function () {
    calInpyt.innerHTML += this.innerHTML;
  });
}

for (let i = 0; i < btnsSign.length; i++) {
  btnsSign[i].addEventListener("click", function () {
    if (
      calInpyt.innerHTML.endsWith("*") ||
      calInpyt.innerHTML.endsWith("/") ||
      calInpyt.innerHTML.endsWith("+") ||
      calInpyt.innerHTML.endsWith("-") ||
      calInpyt.innerHTML.endsWith(".")
    ) {
      calInpyt.innerHTML = calInpyt.innerHTML.slice(0, -1);
      calInpyt.innerHTML += this.innerHTML;
    } else {
      calInpyt.innerHTML += this.innerHTML;
    }
  });
}

btnС.addEventListener("click", function () {
  calInpyt.innerHTML = "";
});

btnRez.addEventListener("click", function () {
  calInpyt.innerHTML = eval(calInpyt.innerHTML);
});
