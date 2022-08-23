setInterval(function () {
  let now = new Date();
  let time = document.querySelector(".time__p");
  time.innerHTML = `${getZero(now.getHours())}:${getZero(
    now.getMinutes()
  )}:${getZero(now.getSeconds())}`;

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }
  getZero(now);
}, 0);
