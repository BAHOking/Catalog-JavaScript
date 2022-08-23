function func() {
  let input = document.querySelector(".birthday-date__input");
  let result = document.querySelector(".birthday-date__result");

  let date = new Date(input.value);
  let now = new Date();
  let rezyltat;

  if (input.value == "" || input.dataset.length > input.value.length) {
    input.style.border = "2px solid red";
    result.innerHTML = `You need to enter your date of birth  Потрібно ввести свою дату народження`;
    result.style.color = "red";
  } else {
    if (konstryktorDat(now) < konstryktorDat(date)) {
      rezyltat = Math.floor(
        (Date.parse(konstryktorDat(date)) - Date.parse(konstryktorDat(now))) /
          (1000 * 60 * 60 * 24)
      );
    } else {
      rezyltat = Math.floor(
        (Date.parse(konstryktorDatPlysOdunGod(date)) -
          Date.parse(konstryktorDat(now))) /
          (1000 * 60 * 60 * 24)
      );
    }

    function konstryktorDat(DATE) {
      return `${getZero(now.getFullYear())}-${getZero(
        DATE.getMonth() + 1
      )}-${getZero(DATE.getDate())}`;
    }

    function konstryktorDatPlysOdunGod(DATE) {
      return `${getZero(now.getFullYear() + 1)}-${getZero(
        DATE.getMonth() + 1
      )}-${getZero(DATE.getDate())}`;
    }

    input.style.border = "2px solid yellowgreen";
    result.style.color = "green";
    result.innerHTML = `Result: ${rezyltat} day(s)`;

    if (result.innerHTML == `Result: NaN day(s)`) {
      result.style.color = "red";
      input.style.border = "2px solid red";
      result.innerHTML =
        "You need to enter your date of birth  Потрібно ввести свою дату народження";
    }
  }
}

let now12 = new Date();
function getZero(num) {
  if (num >= 0 && num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}
getZero(now12);
