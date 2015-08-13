

var clickButton = document.getElementById("basic-calc");
clickButton.addEventListener("click", function()

{
  // Getting First and Second Value and selected Basic Operation
  var basicNum1 = (document.getElementById("basic-num-1")).value;
  var basicOperation = (document.getElementById("basic-operation")).value;
  var basicNum2 = (document.getElementById("basic-num-2")).value;
  // Getting a Result of the Operation
  var result = parseFloat(basicNum1) + basicOperation + parseFloat(basicNum2);

  // Showing or Hiding Result Box
  var basicAnswer = document.getElementById("basic-answer");
  basicAnswer.className = "show"

  // Placing result inside Result Box
  var resultBox = document.getElementById("basic-answer-alert");
  resultBox.innerHTML = result;

});



