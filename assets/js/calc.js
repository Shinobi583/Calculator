let display = document.querySelector("#display");
let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");
let equalButton = document.querySelector("#equals");
let clearButton = document.querySelector("#clear");
let deleteButton = document.querySelector("#delete");
let dotButton = document.querySelector("#dot");
let percentButton = document.querySelector("#percent");
let plusMinusButton = document.querySelector("#plus-minus");
let numbers = [];
let operator;
let operatorCounter = 0;
let numCounter = 0;



for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function () {
        if (operatorCounter >= 2 && numCounter === 0) {
            display.textContent = this.textContent;
            numCounter += 1;
        }
        else if (operatorCounter >= 2 && numCounter > 0) {
            display.textContent += this.textContent;
            numCounter += 1;
        }
        else if (display.textContent === '0') {
            display.textContent = this.textContent;
        }
        else {
            display.textContent += this.textContent;
        }
    });
}

//can refactor both this event listener and the equals one. Create a function for the checking of the operators. Then add numCounter for this one under the func.
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", function () {
        let num = Number(display.textContent);
        numbers.push(num);
        if (operator === '+') {
            let result = add(numbers);
            display.textContent = result;
            numbers.splice(0, numbers.length, result);
            numCounter = 0;
        }
        else if (operator === '-') {
            let result = subtract(numbers);
            display.textContent = result;
            numbers.splice(0, numbers.length, result);
            numCounter = 0;
        }
        else if (operator === '*') {
            let result = multiply(numbers);
            display.textContent = result;
            numbers.splice(0, numbers.length, result);
            numCounter = 0;
        }
        else if (operator === '/') {
            let result = divide(numbers);
            display.textContent = result;
            numbers.splice(0, numbers.length, result);
            numCounter = 0;
        }
        else {
            operator = this.textContent;
            display.textContent = 0;
        }
        operator = this.textContent;
        operatorCounter += 1;
    });
}

equalButton.addEventListener("click", function () {
    let num = Number(display.textContent);
    numbers.push(num);
    if (operator === '+') {
        let result = add(numbers);
        display.textContent = result;
        numbers.splice(0, numbers.length, result);
    }
    else if (operator === '-') {
        let result = subtract(numbers);
        display.textContent = result;
        numbers.splice(0, numbers.length, result);
    }
    else if (operator === '*') {
        let result = multiply(numbers);
        display.textContent = result;
        numbers.splice(0, numbers.length, result);
    }
    else if (operator === '/') {
        let result = divide(numbers);
        display.textContent = result;
        numbers.splice(0, numbers.length, result);
    }
    operator = '';
    operatorCounter = 0;
    numCounter = 0;
});

clearButton.addEventListener("click", function () {
    numbers.splice(0, numbers.length);
    operator = '';
    operatorCounter = 0;
    numCounter = 0;
    display.textContent = 0;
});

deleteButton.addEventListener("click", function () {
    display.textContent = display.textContent.slice(0, -1);
});

dotButton.addEventListener("click", function () {
    display.textContent += this.textContent;
});

percentButton.addEventListener("click", function () {
    if (display.textContent !== '0') {
        let num = Number(display.textContent);
        display.textContent = num / 100;
    }
});

plusMinusButton.addEventListener("click", function () {
    if (display.textContent !== '0') {
        let opp = Number(display.textContent);
        opp = opp * -1;
        display.textContent = opp;
    }
});

function add(arr) {
    return arr.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
}

function subtract(arr) {
    let result = arr[0] - Number(display.textContent);
    return result;
}

function multiply(arr) {
    let result = arr[0] * Number(display.textContent);
    return result;
}

function divide(arr) {
    let result = arr[0] / Number(display.textContent);
    return result;
}