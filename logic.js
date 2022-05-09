const screenSelect = document.querySelector('.screen');
const number1 = document.querySelector('.one');
const number2 = document.querySelector('.two');
const number3 = document.querySelector('.three');
const number4 = document.querySelector('.four');
const number5 = document.querySelector('.five');
const number6 = document.querySelector('.six');
const number7 = document.querySelector('.seven');
const number8 = document.querySelector('.eight');
const number9 = document.querySelector('.nine');
const number0 = document.querySelector('.zero');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const division = document.querySelector('.divide');
const times = document.querySelector('.multiply');
const ac = document.querySelector('.AC');



let screenContent = screenSelect;

let numInput1 = number1.addEventListener('click', () =>  screenSelect.textContent += '1');
let numInput2 = number2.addEventListener('click', () =>  screenSelect.textContent += '2');
let numInput3 = number3.addEventListener('click', () =>  screenSelect.textContent += '3');
let numInput4 = number4.addEventListener('click', () =>  screenSelect.textContent += '4');
let numInput5 = number5.addEventListener('click', () =>  screenSelect.textContent += '5');
let numInput6 = number6.addEventListener('click', () =>  screenSelect.textContent += '6');
let numInput7 = number7.addEventListener('click', () =>  screenSelect.textContent += '7');
let numInput8 = number8.addEventListener('click', () =>  screenSelect.textContent += '8');
let numInput9 = number9.addEventListener('click', () =>  screenSelect.textContent += '9');
let numInput0 = number0.addEventListener('click', () =>  screenSelect.textContent += '0');
let numInput10 = plus.addEventListener('click', () =>  screenSelect.textContent += '+');
let numInput11 = minus.addEventListener('click', () =>  screenSelect.textContent += '-');
let numInput12 = division.addEventListener('click', () =>  screenSelect.textContent += '/');
let numInput13 = times.addEventListener('click', () =>  screenSelect.textContent += '*' );

storage = 0
let plusLogic = plus.addEventListener('click', () => {
    const Select = document.querySelector('.screen').innerHTML;
    return storage += parseInt(Select)
});

let resetScreen =  ac.addEventListener('click', () => screenSelect.innerHTML = '');


const add = (num1, num2) => { return num1 + num2  };
const subtract = (num1, num2) => { return num1 - num2 };
const multiply = (num1, num2) => { return num1 * num2 };
const divide = (num1, num2) => { return num1 / num2 };



const computer = function operator(input1,opInput,input2){
 if (opInput === '+') {
  return add(input1, input2); }

  else if (opInput === '-') {
  return subtract(input1, input2); }

  else if (opInput === '*') {
    return multiply(input1, input2); }

  else if  (opInput === '/') {
    return divide(input1, input2); }
};
/* the function needs to take the first input from numinput and add that as a variable 
to input1 or input2*, this needs a new click event that fires simultaneously to the 
.text content numInput (as this is just to show the user) */



