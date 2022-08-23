let midnightHours = document.querySelector(".midnight__clockHours");
let midnightMinutes = document.querySelector(".midnight__clockMinutes");
let midnightSeconds = document.querySelector(".midnight__clockSeconds");

setInterval(function () {
  let now_time = new Date();
  let target_time = new Date(
    now_time.getFullYear(),
    now_time.getMonth(),
    now_time.getDate() + 1,
    0,
    0,
    0
  );

  let diff_time = Math.ceil((target_time - now_time) / 1000);
  let hours = Math.floor(diff_time / (60 * 60));
  let diff_time_hours = diff_time % (60 * 60);

  let minutes = Math.floor(diff_time_hours / 60);
  let diff_time_minutes = diff_time_hours % 60;

  let seconds = diff_time_minutes;

  midnightHours.innerHTML = getZero(hours);
  midnightMinutes.innerHTML = getZero(minutes);
  midnightSeconds.innerHTML = getZero(seconds);
}, 0);

function getZero(num) {
  if (num >= 0 && num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}
