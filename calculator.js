let btn = document.getElementById("cal-btn");
let result = document.getElementById("result");
let finalresult;
let numOneError = document.getElementById("numOneError")
let numTwoError = document.getElementById("numTwoError")
let operatorError = document.getElementById("opeError")

let numOneStatus, numTwoStatus, operatorStatus = false;
numOneError.style.display = 'none'
numTwoError.style.display = 'none'
operatorError.style.display = 'none'

function checkValidation(num1, num2, operator){
    if (num1.value == "" || num1.value == null || num1.value == undefined) {
    numOneError.style.display = "block";
    numOneStatus = true;
    } else {
    numOneError.style.display = "none";
    numOneStatus = false;
    }
    if (num2.value == "" || num2.value == null || num2.value == undefined) {
    numTwoError.style.display = "block";
    numTwoStatus = true;
    } else {
    numTwoError.style.display = "none";
    numTwoStatus = false;
    }
    if (operator.value == "empty") {
    operatorError.style.display = "block";
    operatorStatus = true;
    } else {
    operatorError.style.display = "none";
    operatorStatus = false
    }
}

btn.addEventListener("click", function(){

    let num1 = document.getElementById("firstNumber");
    let num2 = document.getElementById("secNumber");
    let operator = document.getElementById("operation");

    checkValidation(num1, num2, operator)

    if (!numOneStatus && !numTwoStatus && !operatorStatus){
        num1 = parseInt(num1.value);
        num2 = parseInt(num2.value);

        switch (operator.value) {
          case "add":
            finalresult = num1 + num2;
            break;
          case "minus":
            finalresult = num1 - num2;
            break;
          case "multiply":
            finalresult = num1 * num2;
            break;
          case "divide":
            finalresult = num1 / num2;
            break;
          case "default":
            console.log("Operation Error");
            break;
        }
        result.innerHTML = finalresult;
    }
})