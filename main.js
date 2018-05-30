// var express = require('express');
// var app = express();
//
// app.get('/', function (req, res) {
//   res.send('Hello World!')
// });
//
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// });

var earthYrInSecs = 31557600

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
  var select = document.querySelector("select");
  var pTag = document.querySelector("#age-result");
  console.log(select);
  pTag.innerText = "On " + select.value + " you're the incredible old age of " + input.value;
}

var button = document.querySelector("button");
  button.addEventListener("click", handleButtonClick)
