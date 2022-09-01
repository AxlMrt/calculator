const numbers = document.querySelectorAll(".num");
const operators= document.querySelectorAll(".op");
const clearBtn = document.querySelector(".clear");

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
    operator = op;
    previousNum = currentNum;
    currentNum = "";
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

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}

/* numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (operator === ""){
            firstNum += number.id;
            displayValue.textContent = "";
            displayMemory.innerHTML = "";
            displayValue.append(firstNum);
        }else {
            secondNum += number.id;
            displayValue.textContent = "";
            displayMemory.textContent = `${firstNum} ${operator} ${secondNum}`;
        };
    });
});

operators.forEach(op => {
    op.addEventListener("click", ()=> {
        if (op.id !== "="){
            operator = op.id;
        }else {
            displayValue.textContent = operate(operator, parseInt(firstNum), parseInt(secondNum));
            firstNum = "";
            secondNum = ""
            operator = ""
            displayValue.innerHTML = "";
        }
    })
}) */

clearBtn.addEventListener("click", () => {
    currentNum = ""
    previousNum = ""
    operator = ""
    displayValue.innerHTML = "0";
    displayMemory.innerHTML = "";
});