import Calculator from '../components/Calculator.js';

const numberBtns = document.querySelectorAll('.calc__grid-btn');
const settingBtns= document.querySelectorAll('.calc__span-two');

const operations = document.querySelectorAll('[data-operation]');
const numbers = document.querySelectorAll('[data-number]');
const previousOperand = document.querySelector('[data-prev-op]');
const currentOperand = document.querySelector('[data-curr-op');
const clear = document.querySelector('[data-clear]');
const equals = document.querySelector('[data-equals]');

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        console.log(number);
    });
});

const theCalculator = new Calculator(); 
