const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');

let calculation = [];
let accumalative;

function calculate(button) {
    const value = button.textContent;
    
    if (value === "CLEAR") 
    {
        calculation = [];
        screenDisplay.textContent = '0';
    } else if (value === "=")
    {
        screenDisplay.textContent = eval(accumalative);
    } else 
    {
        calculation.push(value);
        accumalative = calculation.join('');
        screenDisplay.textContent = accumalative;
    }
}

buttons.forEach(button =>  button.addEventListener('click', () => calculate(button)));