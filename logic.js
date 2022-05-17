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
const del = document.querySelector('.del');



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
let booleanButton = false;


let firstInput = 0;
let secondInput = 0;
let operator = '';

let mainLogic = {'+=': (secondInput) => firstInput += secondInput, 
                 '*=': (secondInput) => firstInput *= secondInput,
                 '/=': (secondInput) => firstInput /= secondInput,
                 '-=': (secondInput) => firstInput -= secondInput}


let equalsLogic = equal.addEventListener('click', () => {
    const screenSelector = document.querySelector('.screen').innerHTML;
    if (firstInput > 0)
    return secondInput += parseFloat(screenSelector), screenSelect.innerHTML = '', 
    console.log(screenSelect.textContent += mainLogic[operator](secondInput)), firstInput = 0, secondInput = 0, operator = ''
});

let plusLogic = plus.addEventListener('click', () => {
    const select = document.querySelector('.screen').innerHTML; 
    if (firstInput > 0) {
    return secondInput += parseFloat(select),
    screenSelect.innerHTML = '',
    operator = '+=',
    console.log(screenSelect.textContent += mainLogic[operator](secondInput)), operator = '', operator = '+=',
    secondInput = 0,
    booleanButton = true,
    console.log(booleanSwitch(),console.log(firstInput))
}
    else {
    return firstInput += parseFloat(select), 
    screenSelect.innerHTML = '',
    operator += '+=' 
}
});
let multiplyLogic = times.addEventListener('click', () => {
    const select = document.querySelector('.screen').innerHTML; 
    if (firstInput > 0) {
    return secondInput += parseFloat(select),
    screenSelect.innerHTML = '',

    console.log(screenSelect.textContent += mainLogic[operator](secondInput)),
    secondInput = 0,
    booleanButton = true,
    console.log(booleanSwitch(),console.log(firstInput)), operator = '', operator = '*='
}
    else {
    return firstInput += parseFloat(select), 
    screenSelect.innerHTML = '',
    operator += '*='
}
});
let subtractLogic = minus.addEventListener('click', () => {
    const select = document.querySelector('.screen').innerHTML; 
    if (firstInput > 0) {
    return secondInput += parseFloat(select),
    screenSelect.innerHTML = '',
    console.log(screenSelect.textContent += mainLogic[operator](secondInput)), operator = '', operator = '-=',
    secondInput = 0,
    booleanButton = true,
    console.log(booleanSwitch(),console.log(firstInput))
}
    else {
    return firstInput += parseFloat(select), 
    screenSelect.innerHTML = '',
    operator += '-=' 
}
});
let divideLogic = division.addEventListener('click', () => {
    const select = document.querySelector('.screen').innerHTML; 
    if (firstInput > 0) {
    return secondInput += parseFloat(select),
    screenSelect.innerHTML = '',
    console.log(screenSelect.textContent += mainLogic[operator](secondInput)), operator = '', operator = '/=',
    secondInput = 0,
    booleanButton = true,
    console.log(booleanSwitch(),console.log(firstInput))
}
    else {
    return firstInput += parseFloat(select), 
    screenSelect.innerHTML = '',
    operator += '/=' 
}
});
function booleanSwitch() {
    console.log(booleanButton);
    if (booleanButton = true);
    return number1.addEventListener('click', () =>  screenSelect.textContent = '1'),
    number2.addEventListener('click', () =>  screenSelect.textContent = '2'),
    number3.addEventListener('click', () =>  screenSelect.textContent = '3'),
    number4.addEventListener('click', () =>  screenSelect.textContent = '4'),
    number5.addEventListener('click', () =>  screenSelect.textContent = '5'),
    number6.addEventListener('click', () =>  screenSelect.textContent = '6'),
    number7.addEventListener('click', () =>  screenSelect.textContent = '7'),
    number8.addEventListener('click', () =>  screenSelect.textContent = '8'),
    number9.addEventListener('click', () =>  screenSelect.textContent = '9'),
    number0.addEventListener('click', () =>  screenSelect.textContent = '0');
}
let resetScreen =  ac.addEventListener('click', () =>   screenSelect.innerHTML = '', firstInput = 0, secondInput = 0);
let deleteScreen =  del.addEventListener('click', () =>   screenSelect.innerHTML = '', firstInput = 0, secondInput = 0);
