/************************************************************/
/************************ BASIC *****************************/
/************************************************************/
// Triggering Event after click on button calculate at Basic Calc
var clickButton = document.getElementById("basic-calc");
clickButton.addEventListener("click", function()
{
  // Hiding Other Boxes
  var basicAnswer = document.getElementById("trip-answer");
  basicAnswer.className = "hide";

  var basicAnswer = document.getElementById("bmi-answer");
  basicAnswer.className = "hide";

  var basicAnswer = document.getElementById("mortgage-answer");
  basicAnswer.className = "hide";

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
  basicAnswer.className = "show";

  // Placing result inside Result Box
  var resultBox = document.getElementById("basic-answer-alert");
  resultBox.innerHTML = 'Result: ' + result;
});
/***********************************************************/
/************************ TRIP *****************************/
/***********************************************************/
// Triggering Event after click on button calculate at Trip Calc
var clickButton = document.getElementById("trip-calc");
clickButton.addEventListener("click", function()
{
  // Hiding Other Boxes
  var basicAnswer = document.getElementById("basic-answer");
  basicAnswer.className = "hide";

  var basicAnswer = document.getElementById("bmi-answer");
  basicAnswer.className = "hide";

    var basicAnswer = document.getElementById("mortgage-answer");
  basicAnswer.className = "hide";

   // Getting 1st, 2nd, 3rd and 4th Values
  var tripNum1 = (document.getElementById("trip-distance")).value;
  var tripNum2 = (document.getElementById("trip-mpg")).value;
  var tripNum3 = (document.getElementById("trip-cost")).value;
  var tripNum4 = (document.getElementById("trip-speed")).value;

  // Declare Variables
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
  basicAnswer.className = "show";

  // Placing result inside Result Box
  var resultBox = document.getElementById("trip-answer-alert");
  resultBox.innerHTML = 'Your trip will take ' + time + ' hours and cost $' + money;
});
/************************************************************/
/************************ BMI *******************************/
/************************************************************/
// Triggering Event after click on button calculate at BMI Calc
var clickButton = document.getElementById("bmi-calc");
clickButton.addEventListener("click", function()
{
  // Hiding Other Boxes
  var basicAnswer = document.getElementById("basic-answer");
  basicAnswer.className = "hide";

  var basicAnswer = document.getElementById("trip-answer");
  basicAnswer.className = "hide";

  var basicAnswer = document.getElementById("mortgage-answer");
  basicAnswer.className = "hide";

  // Getting Option Unit Value
  var BMIUnit = (document.getElementById("bmi-units")).value;
  // Getting Mass and Height
  var BMIMass = (document.getElementById("bmi-height")).value;
  var BMIHeight = (document.getElementById("bmi-mass")).value;

  // Declare Variables
  var BMIimperial;
  var BMImetric;
  var result;
  // If select Imperial
  if(BMIUnit == 'imperial'){
    result = "Your Body Mass Index is " + (parseFloat(BMIMass) / Math.pow(parseFloat(BMIHeight), 2)) * 703 + " libras by square inch."; 
  }
  // If select Metric
  else if(BMIUnit == 'metric'){
    result = "Your Body Mass Index is " + parseFloat(BMIMass) / Math.pow(parseFloat(BMIHeight), 2) + " kilos by square metre.";   
  }
  else{}

  // Showing Result Box
  var basicAnswer = document.getElementById("bmi-answer");
  basicAnswer.className = "show"

  // Placing result inside Result Box
  var resultBox = document.getElementById("bmi-answer-alert");
  resultBox.innerHTML = result;
});
/************************************************************/
/************************ MORGAGE *******************************/
/************************************************************/
// Triggering Event after click on button calculate at Mortgage Calc
var clickButton = document.getElementById("mortgage-calc");
clickButton.addEventListener("click", function()
{
  // Hiding Other Boxes
  var basicAnswer = document.getElementById("basic-answer");
  basicAnswer.className = "hide";

  var basicAnswer = document.getElementById("trip-answer");
  basicAnswer.className = "hide";

  var basicAnswer = document.getElementById("bmi-answer");
  basicAnswer.className = "hide";

  // Getting Values from input
  var mortgageLoan = (document.getElementById("mortgage-loan")).value;
  var mortgageApr = (document.getElementById("mortgage-apr")).value;
  var mortgageTerm = (document.getElementById("mortgage-term")).value;

  // Declare Variables
  var Loan = parseFloat(mortgageLoan);
  var Apr = (parseFloat(mortgageApr) / 100) /12;
  var Term = parseFloat(mortgageTerm);
  var brackets;
  var result;

  // Getting a Result
  brackets = Math.pow((1 + Apr), Term);
  result = 'Your Monthly Payment would be ' + (Loan * (Apr * brackets)) / (brackets - 1) + ' pounds.';

  // Showing Result Box
  var basicAnswer = document.getElementById("mortgage-answer");
  basicAnswer.className = "show";

  // Placing result inside Result Box
  var resultBox = document.getElementById("mortgage-answer-alert");
  resultBox.innerHTML = result;
});


