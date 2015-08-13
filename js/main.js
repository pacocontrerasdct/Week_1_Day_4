// Triggering Event after click on button calculate at Basic Calc
var clickButton = document.getElementById("basic-calc");
clickButton.addEventListener("click", function()
{
  // Getting First and Second Value and selected Basic Operation
  var basicNum1 = (document.getElementById("basic-num-1")).value;
  var basicOperation = (document.getElementById("basic-operation")).value;
  var basicNum2 = (document.getElementById("basic-num-2")).value;

  // Getting a Result of the Operation
  var result;
  switch (basicOperation){
    case '+':
        result = parseFloat(basicNum1) + parseFloat(basicNum2);
    break
    case '-':
        result = parseFloat(basicNum1) - parseFloat(basicNum2);
    break
    case '*':
        result = parseFloat(basicNum1) * parseFloat(basicNum2);
    break
    case '/':
        result = parseFloat(basicNum1) / parseFloat(basicNum2);
    break
  }  
  // Showing Result Box
  var basicAnswer = document.getElementById("basic-answer");
  basicAnswer.className = "show"

  // Placing result inside Result Box
  var resultBox = document.getElementById("basic-answer-alert");
  resultBox.innerHTML = 'Result: ' + result;
});

// Triggering Event after click on button calculate at Trip Calc
var clickButton = document.getElementById("trip-calc");
clickButton.addEventListener("click", function()
{
  // Hiding Result Box at Basic Calc
  var basicAnswer = document.getElementById("basic-answer");
  basicAnswer.className = "hide"

   // Getting 1st, 2nd, 3rd and 4th Values
  var tripNum1 = (document.getElementById("trip-distance")).value;
  var tripNum2 = (document.getElementById("trip-mpg")).value;
  var tripNum3 = (document.getElementById("trip-cost")).value;
  var tripNum4 = (document.getElementById("trip-speed")).value;

  // Getting a result from Trip Calc
  var time;
  var money;
  // If Speed is over 60 MPH, For every 1 MPH over 60 MPH, reduce the MPG by 2 MPG
  if(parseFloat(tripNum4) > 60){
    var newFuelEffic = parseFloat(tripNum4) - 60;
    newMPG = parseFloat(tripNum2) - (newFuelEffic * 2);
    
    time = (parseFloat(tripNum1) / parseFloat(tripNum4)) / 60;
    money = parseFloat(newMPG) * parseFloat(tripNum1) * parseFloat(tripNum3);
  }
  // If Speed is 60 MPH or less
  else{
    time = (parseFloat(tripNum1) / parseFloat(tripNum4)) / 60;
    money = (parseFloat(tripNum2)) / 100 * parseFloat(tripNum1) * parseFloat(tripNum3);
  }

  // Showing Result Box
  var basicAnswer = document.getElementById("trip-answer");
  basicAnswer.className = "show"

  // Placing result inside Result Box
  var resultBox = document.getElementById("trip-answer-alert");
  resultBox.innerHTML = 'Your trip will take ' + time + ' hours and cost $' + money;


});



