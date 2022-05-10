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
const equal = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');

const numInput1 = number1.addEventListener('click', () =>  screenSelect.textContent += '1');
const numInput2 = number2.addEventListener('click', () =>  screenSelect.textContent += '2');
const numInput3 = number3.addEventListener('click', () =>  screenSelect.textContent += '3');
const numInput4 = number4.addEventListener('click', () =>  screenSelect.textContent += '4');
const numInput5 = number5.addEventListener('click', () =>  screenSelect.textContent += '5');
const numInput6 = number6.addEventListener('click', () =>  screenSelect.textContent += '6');
const numInput7 = number7.addEventListener('click', () =>  screenSelect.textContent += '7');
const numInput8 = number8.addEventListener('click', () =>  screenSelect.textContent += '8');
const numInput9 = number9.addEventListener('click', () =>  screenSelect.textContent += '9');
const numInput0 = number0.addEventListener('click', () =>  screenSelect.textContent += '0');
const numInput10 = plus.addEventListener('click', () =>  screenSelect.textContent += '+');
const numInput11 = minus.addEventListener('click', () =>  screenSelect.textContent += '-');
const numInput12 = division.addEventListener('click', () =>  screenSelect.textContent += '/');
const numInput13 = times.addEventListener('click', () =>  screenSelect.textContent += '*' );
const numInput14 = decimal.addEventListener('click', () =>  screenSelect.textContent += '.' );
const screenContent = screenSelect;

let resetScreen =  ac.addEventListener('click', () =>  screenSelect.innerHTML = '');


let firstInput = 0;
let secondInput = 0;
let operator = '';

let plusLogic = plus.addEventListener('click', () => {
    const select = document.querySelector('.screen').innerHTML;
    return firstInput += parseFloat(select), screenSelect.innerHTML = '', operator += '+'
}); //this takes the first input and stores it in the firstInput variable once + has been selected
let subtractLogic = division.addEventListener('click', () => {
    const select = document.querySelector('.screen').innerHTML;
    return firstInput += parseFloat(select), screenSelect.innerHTML = '', operator += '/'
}); 
let divideLogic = minus.addEventListener('click', () => {
    const select = document.querySelector('.screen').innerHTML;
    return firstInput += parseFloat(select), screenSelect.innerHTML = '', operator += '-'
}); 
let multiplyLogic = times.addEventListener('click', () => {
    const select = document.querySelector('.screen').innerHTML;
    return firstInput += parseFloat(select), screenSelect.innerHTML = '', operator += '*'
}); 
let secondInputReturn = equal.addEventListener('click', () => {
    const screenSelector = document.querySelector('.screen').innerHTML;
    return secondInput += parseFloat(screenSelector), screenSelect.innerHTML = ''
}); // this takes the second input and assigns it to the secondInput variable when equals is pressed.

let displayOutput = equal.addEventListener('click', () => {
    finalFiquire = 0;
    if (operator === '+') {
    return scoreAdd = finalFiquire += (firstInput + secondInput),
    screenSelect.textContent += scoreAdd, firstInput = 0, secondInput = 0, operator = '';}
    { if   
    (operator === '-')
    return  scoreSubtract = finalFiquire += (firstInput - secondInput),
    screenSelect.textContent += scoreSubtract, firstInput = 0, secondInput = 0, operator = '';}
    { if   
    (operator === '/')
    return  scoreDivide = finalFiquire += (firstInput / secondInput),
    screenSelect.textContent += scoreDivide, firstInput = 0, secondInput = 0, operator = '';}
    { if   
    (operator === '*')
    return  scoreDivide = finalFiquire += (firstInput * secondInput),
    screenSelect.textContent += scoreDivide, firstInput = 0, secondInput = 0, operator = '';}
});




