function calculator (varOne, varTwo, operator) {
    if (operator == "+") {
        return add(varOne, varTwo);
    } else if (operator == "-") {
        return subtract(varOne, varTwo);
    } else if (operator == "/") {
        return divide(varOne, varTwo);
    } else if (operator == "*") {
        return multiply(varOne, varTwo);
    } else {
        return "Exception! Use a specified operator.".toString();
    }
}

function add (varOne, varTwo) {
    let result = varOne + varTwo;
    return result;
}

function subtract (varOne, varTwo) {
    let result = varOne - varTwo;
    return result;
}

function divide (varOne, varTwo) {
    let result = varOne / varTwo;
    return result;
}

function multiply (varOne, varTwo) {
    let result = varOne * varTwo;
    return result;
}





module.exports = calculator;