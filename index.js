const intBtn = document.querySelectorAll(".btn");
const clearBtn = document.querySelector(".clear")
const display = document.querySelector(".integer");

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
    if(op === "+"){
        return add(a, b);
    }else if (op === "-"){
        return substract(a, b);
    }else if (op === "*"){
        return multiply(a, b);
    }else if (op === "/"){
        return divide(a, b);
    };
}

intBtn.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.id;
    })
} )

clearBtn.addEventListener("click", () => {
    display.innerHTML = "";
})