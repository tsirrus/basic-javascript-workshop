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
    var resultSum = undefined;
    if (arrayOfNumbers.length === 0) {
        return 0;
    }
    else {
        for (var i = 0; i < arrayOfNumbers.length; i++) {
            //if (isNaN(arrayOfNumbers[i]) === false) {
            if (isFinite(arrayOfNumbers[i])) {
                if (resultSum === undefined) {
                    resultSum = arrayOfNumbers[i];
                }
                else
                {
                    resultSum = resultSum + arrayOfNumbers[i];
                }
            }
        }
        return resultSum;
    }
}

function uniqueElements(array1, array2) {
    if ( (Array.isArray(array1))&&(Array.isArray(array2)) ) {
        var resultArray = [];
        var notMatch = false;
        
        for (var i=0; i<array1.length; i++) {
            notMatch = true;
            for (var j=0; j<array2.length; j++) {
                if (array1[i] === array2[j]) {
                    notMatch = false;
                }
            }
            if (notMatch) {
                resultArray.push(array1[i]);
            }
        }
        
        for (var x=0; x<array2.length; x++) {
            notMatch = true;
            for (var y=0; y<array1.length; y++) {
                if (array2[x] === array1[y]) {
                    notMatch = false;
                }
            }
            if (notMatch) {
                resultArray.push(array2[x]);
            }
        }
        
        return resultArray;
    }
    else {
        return undefined;
    }
}

function isPalindrome(inputString) {
    return inputString.replace( /\W+/g,"").toUpperCase() === reverseString(inputString.replace( /\W+/g, "").toUpperCase());
}

function wrapCharacter(inputString) {
    var resultString = "";
    var counter = 0;
    for (var i=0; i<inputString.length; i++) {
        if (counter === 40) {
            resultString = resultString + "\n" + inputString[i].replace(" ","");
            counter = 0 + inputString[i].replace(" ","").length;
        }
        else {
            resultString = resultString + inputString[i];
            counter++;
        }
    }
    return resultString;
}

function wrapWord(inputString) {
    var stringArray = inputString.split(" ");
    var resultString = "";
    var counter = 0;
    
    for (var i=0; i<stringArray.length; i++) {
        if (counter + 1 + stringArray[i].length > 40) {
            resultString += "\n" + stringArray[i];

            if (stringArray.length > 40) {
                resultString += "\n";
                counter = 0;
            }
            else {
                counter = stringArray[i].length;
            }
        }
        else {
            if (counter > 0) {
                resultString += " ";
                counter ++;
            }
            resultString += stringArray[i];
            counter += stringArray[i].length;
        }
    }
    return resultString;
}

function bubbleSort(arrayOfNumbers) {
    var reloop = false;
    if (arrayOfNumbers.length > 0) {
        reloop = true;
    }
    while (reloop)
    {
        var reloop = false;
        for (var i = 0; i < arrayOfNumbers.length - 1; i++) {
            if (arrayOfNumbers[i] > arrayOfNumbers[i+1]) {
                var buffer = arrayOfNumbers[i];
                arrayOfNumbers[i] = arrayOfNumbers[i+1];
                arrayOfNumbers[i+1] = buffer;
                reloop = true;
            }
        }
    }
    return arrayOfNumbers;
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