function firstLetter(inputString) {
    if (inputString === undefined) {
        return undefined;
    }
    else{
        return inputString[0];
    }
}

function lastLetter(inputString) {
    if ((inputString === undefined)&&(inputString.length <= 0)) {
        return undefined;
    }
    else {
        return inputString[inputString.length - 1];
    }
}

function letterAtPosition(inputString, position) {
    if ((inputString === undefined) || (position < 0) || (position >= inputString.length)) {
        return undefined;
    }
    else {
        return inputString[position];
    }
}

function addTwoNumbers(num1, num2) {
    if (isNaN(num1) && isNaN(num2)){
        return undefined;
    }
    else {
        return num1 + num2;
    }
}

function multiplyTwoNumbers(num1, num2) {
    if (isNaN(num1) && isNaN(num2)){
        return undefined;
    }
    else {
        return num1 * num2;
    }
}

function calculator(operation, num1, num2) {
    if (isNaN(num1) && isNaN(num2)){
        return undefined;
    }
    else {
        switch (operation) {
            case "add":
                return num1 + num2;
            case "sub":
                return num1 - num2;
            case "mult":
                return num1 * num2;
            case "div":
                return num1 / num2;
            default:
                return undefined;
        }
    }
}

function repeatString(inputString, numRepetitions) {
    if ((inputString === undefined) || (isFinite(numRepetitions)) === false) {
        return undefined;
    }
    else {
        var resultString = "";
        for (var i = 0; i<numRepetitions; i++) {
            resultString = resultString + inputString;
        }
        return resultString;
    }
}

function reverseString(inputString) {
    if (inputString === undefined) {
        return undefined;
    }
    else{
        var resultString = "";
        for (var i = inputString.length-1; i >= 0; i--) {
            resultString = resultString + inputString[i];
        }
        return resultString;
    }
}

function longestWord(inputString) {
    if (inputString === undefined) {
        return undefined;
    }
    else{
        var stringArray = inputString.split(" ");
        var resultString = stringArray[0];
        for (var i = 0; i < stringArray.length; i++) {
            if (resultString.length < stringArray[i].length) {
                resultString = stringArray[i];
            }
        }
        return resultString;
    }
}

function capitalize(inputString) {
    if (inputString === undefined) {
        return undefined;
    }
    else{
        var resultString = "";
        for (var i=0; i<inputString.length; i++) {
            if ((i === 0) || (inputString[i-1] === " ")) {
                resultString = resultString + inputString[i].toUpperCase();
            }
            else {
                resultString = resultString + inputString[i].toLowerCase();
            }
        }
        return resultString;
    }
}

function sumOfNumbers(arrayOfNumbers) {

}

function uniqueElements(array1, array2) {

}

function isPalindrome(inputString) {

}

function wrapCharacter(inputString) {

}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};