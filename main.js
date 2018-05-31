
var earthYrInSecs = 31557600
var earthYrInDays = 365.25

var orbitalPeriods = {
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.7913,
  pluto: 248.00
}

var handleButtonClick = function() {
  var input = document.querySelector("input");
  var parsedInputDate = Date.parse(input.value);
  // console.log(parsedInputDate);
  var dateNow = new Date();
  var parsedDateNow = Date.parse(dateNow.toISOString().substring(0,10));
  // console.log(parsedDateNow);
  var timeDiff = Math.abs(parsedDateNow - parsedInputDate);
  // console.log(timeDiff);
  var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  // console.log(daysDiff);

  var select = document.getElementById("planet-select");
  var pTag = document.querySelector("#age-result");
  var earthAgeCalculation = Math.floor(daysDiff / earthYrInDays);
  if (select.value === "Earth") {
    return pTag.innerText = "On " + select.value + " you're the grand old age of " + earthAgeCalculation + " !";
  } else if (select.value === "Pick a planet") {
    return pTag.innerText = "What a space cadet! You need to pick a planet first... sigh...";
  } else {
    var lowerCasePlanet = select.value.toLowerCase();
    var planetAge = Math.floor(earthAgeCalculation * orbitalPeriods[lowerCasePlanet]);
    return pTag.innerText = "On " + select.value + " you're the grand old age of " + planetAge + " !";
  }
}

var button = document.querySelector("button");
  button.addEventListener("click", handleButtonClick)
