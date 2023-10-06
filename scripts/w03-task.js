/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2)
{
    return number1 + number2;
}
function addNumbers()
{
    let addNumber1 = Number(document.querySelector("#add1").value);

    let addNumber2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(addNumber1, addNumber2);
    
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (largeNumber, smallNumber)
{
    return largeNumber - smallNumber;
}
const subtractNumbers = function ()
{
    let subtract1 = Number(document.querySelector("#subtract1").value);

    let subtract2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subtract(subtract1, subtract2);

}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1*number2;

const multiplyNumbers = () =>     
{
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers)

function divide (number1, number2){
    if (number2 != 0)
    {
        return number1/number2;
    } else {
        let number2 = prompt("Enter non-zero number");
        return number1/number2;
    }
}

function divideNumbers()
{
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Open Function Use - Divide Numbers */


/* Decision Structure */
const currentYear = new Date().getFullYear();
let yearElement = document.querySelector("#year");
yearElement.textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = numbersArray

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number%2 === 1);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number%2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((accumulator,currentValue) => accumulator + currentValue);

/* Output Multiplied by 2 Array */
const mappedArray = numbersArray.map(number => number *2);

document.querySelector("#multiplied").innerHTML = mappedArray;

/* Output Sum of Multiplied by 2 Array */
let reducedArray = mappedArray.reduce((accumulator,currentValue) => accumulator + currentValue);
document.querySelector("#sumOfMultiplied").innerHTML = reducedArray;