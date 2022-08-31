const numbers = document.querySelectorAll(".num");
const operators= document.querySelectorAll(".op");
const clearBtn = document.querySelector(".clear");

const displayMemory = document.querySelector(".memoryValue");
const displayValue = document.querySelector(".displayValue");

let firstNum = "";
let secondNum = "";
let result = ""
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
            return divide(a, b);
      }
}

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (operator === ""){
            firstNum += number.id;
            displayValue.textContent = "";
            displayMemory.innerHTML = "";
            displayValue.append(firstNum);
        }else {
            secondNum += number.id;
            displayValue.textContent = "";
            displayMemory.textContent = `${firstNum} ${operator} ${secondNum}`
        }
    });
});

operators.forEach(op => {
    op.addEventListener("click", ()=> {
        if (op.id !== "="){
            operator = op.id;
        }else{
            result = operate(operator, parseInt(firstNum), parseInt(secondNum));
            firstNum = ""
            secondNum = ""
            operator = ""
            displayValue.innerHTML = "";
            displayValue.textContent = result;

        }
    })
})

clearBtn.addEventListener("click", () => {
    firstNum = ""
    secondNum = ""
    displayValue.innerHTML = "0";
    displayMemory.innerHTML = "";
});