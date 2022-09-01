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

function handleNumber(num){
    if (currentNum.length <= 8){
        currentNum += num;
    }
}

function handleOperator(op){
    if (operator === ""){
        operator = op;
        previousNum = currentNum;
        currentNum = "";
    }else {
        currentNum = operate(operator, Number(previousNum), Number(currentNum));
        previousNum = currentNum;
        currentNum = ""
        operator = op;
    }
    
    
}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}

function addDecimal(){
    if(!currentNum.includes(".")){
        currentNum += ".";
    }
}

function deleteNum(){
    currentNum = currentNum.toString().slice(0, -1);
    displayValue.textContent = currentNum;
}

function clearDisplay(){
    currentNum = ""
    previousNum = ""
    operator = ""
    displayValue.innerHTML = "0";
    displayMemory.innerHTML = "";
}

numbers.forEach(number => {
    number.addEventListener("click", () => {
        handleNumber(number.id);
        displayValue.textContent = currentNum;
    })
})

operators.forEach(op => {
    op.addEventListener("click", () => {
        if(op.id !== "="){
            handleOperator(op.id);
            displayMemory.textContent = `${previousNum} ${operator}`;
            displayValue.textContent = currentNum;
        }else{
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