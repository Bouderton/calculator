import Calculator from '../components/Calculator.js';

const numberBtns = document.querySelectorAll('.calc__grid-btn');
const settingBtns= document.querySelectorAll('.calc__span-two');
const deleteBtn = document.querySelector('[data-delete]');

const operations = document.querySelectorAll('[data-operation]');
const numbers = document.querySelectorAll('[data-number]');
const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');
const clear = document.querySelector('[data-clear]');
const equals = document.querySelector('[data-equals]');

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        calculator.appendNumber(number.innerText)
        calculator.updateDisplay();
    });
});

operations.forEach((op) => {
    op.addEventListener('click', () => {
        console.log(op);
    })
})

equals.addEventListener('click', () => {
    console.log(equals);
});

clear.addEventListener('click', () => {
    console.log(clear);
});

deleteBtn.addEventListener('click', () => {
    console.log(deleteBtn)
;})

const calculator = new Calculator(previousOperand, currentOperand); 

