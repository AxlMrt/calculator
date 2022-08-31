const numbers = document.querySelectorAll(".num");
const operators= document.querySelectorAll(".op");
const clearBtn = document.querySelector(".clear");

const displayMemory = document.querySelector(".memoryValue");
const displayValue = document.querySelector(".displayValue");

let firstNum = "";
let secondNum = "";
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

//

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
    /* if(op === "+"){
        return add(a, b);
    }else if (op === "-"){
        return substract(a, b);
    }else if (op === "*"){
        return multiply(a, b);
    }else if (op === "/"){
        return divide(a, b);
    }; */
}

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (operator === ""){
            firstNum += number.id;
            displayValue.textContent = "";
            displayValue.append(firstNum);
            /* console.log(firstNum); */
        }else {
            displayMemory.textContent = firstNum +" "+ operator;
            secondNum += number.id;
            displayValue.textContent = "";
            displayValue.append(secondNum);
            /* console.log(secondNum); */
        }
    });
});


operators.forEach(op => {
    op.addEventListener("click", ()=> {
        if (operator.id !== "="){
            operator = op.textContent;
            console.log(firstNum);
            console.log(operator);
            console.log(secondNum);
        }else{
            
            operate(operator, firstNum, secondNum)
        }
    })
})

clearBtn.addEventListener("click", () => {
    displayValue.innerHTML = "0";
});