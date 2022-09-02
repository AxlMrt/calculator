const numbers = document.querySelectorAll(".num");
const operators= document.querySelectorAll(".op");

const clearBtn = document.querySelector(".clear");
const decimalBtn = document.querySelector(".dot");
const delBtn = document.querySelector(".del");

const displayMemory = document.querySelector(".memoryValue");
const displayValue = document.querySelector(".displayValue");

let currentNum = "";
let previousNum = "";
let operator = "";

function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

//make the calcul
function operate(op, a, b){
    switch (op){
        case "+":
            return add(a, b);

        case "-":
            return substract(a, b);

        case "*":
            return multiply(a, b);

        case "/":
            return roundNumber(divide(a, b));
      }
}
//Store the value in currentNum
function handleNumber(num){
    if (currentNum.length <= 8){
        currentNum += num;
    }
}

function handleOperator(op){
    // Store the current value in previousNum when an operator is clicked
    if (operator === ""){
        operator = op;
        previousNum = currentNum;
        currentNum = "";
    // If there is already an operator, do a consecutive calculation
    }else {
        currentNum = operate(operator, Number(previousNum), Number(currentNum));
        previousNum = currentNum;
        currentNum = ""
        operator = op;
    }
    
    
}
//Make the decimal to 3 digits
function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}
// Add the possibility of a decimal with " . "
function addDecimal(){
    if(!currentNum.includes(".")){
        currentNum += ".";
    }
}
// Delete last digit
function deleteNum(){
    currentNum = currentNum.toString().slice(0, -1);
    displayValue.textContent = currentNum;
}
// Clear everything
function clearDisplay(){
    currentNum = ""
    previousNum = ""
    operator = ""
    displayValue.innerHTML = "0";
    displayMemory.innerHTML = "";
}
//Store button id in handleNumber and display the value
numbers.forEach(number => {
    number.addEventListener("click", () => {
        handleNumber(number.id);
        displayValue.textContent = currentNum;
    })
})

operators.forEach(op => {
    op.addEventListener("click", () => { 
        if(op.id !== "="){
            //If the operator id is not "=", store it and display previousNum and the actual operator
            handleOperator(op.id);
            displayMemory.textContent = `${previousNum} ${operator}`;
            displayValue.textContent = currentNum;
        }else{
            //If the operator is "=", make function operate, display it and reset the previousNum display
            currentNum = operate(operator, Number(previousNum), Number(currentNum));
            displayMemory.textContent = "";
            if (displayMemory.length <= 8){
                displayValue.textContent = "Too long";
            }else{
                displayValue.textContent = currentNum;
            }    
        }    
    })
})

decimalBtn.addEventListener("click", () => addDecimal());
delBtn.addEventListener("click", () => deleteNum());
clearBtn.addEventListener("click", () => clearDisplay());