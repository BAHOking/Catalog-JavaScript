let boxs = document.querySelectorAll(".box");
let arr = ["red", "green", "blue", "yellow", "purple", "pink", "#fff"];
let index = 0;

for (let i = 0; i < boxs.length; i++) {
  setInterval(function () {
    boxs[i].style.boxShadow = `0 0 5px 5px ${arr[index]}`;
    index++;
    if (index >= arr.length) {
      index = 0;
    }
  }, 1000);
}
