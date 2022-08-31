const intBtn = document.querySelectorAll(".btn");

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
        console.log(button.id);
    })
} )