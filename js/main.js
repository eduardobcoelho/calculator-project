// alert

window.alert("This calculator just do math operations with two numbers!! Welcome and make a good use!!");

// Global variables

var i = 0; // index

var equalClicked = 0;

var display = document.querySelector(".display"); // display div HTML element

var numbersClicked = []; // array used to store the number clicked; it will be used to concatenate numbers latelly

var arrayNumbers = []; // array used to store the concatenation result of the function transformNumber

var arrayOperation = []; // array used to store the last operation button clicked; it will be used in the doOperation() function

var opCalc = null; // variable used to store the math operation value

function showNumber(numValue) { // function used to show on display the last number button value clicked

    let storeValue = numValue.value; // stores in a variable the value of the last button clicked

    numbersClicked.push(storeValue); // stores in the array next position the value of the last button clicked

    display.insertAdjacentHTML("beforeend", "<li class='display-element display-number'>" + numbersClicked[(numbersClicked.length) - 1] + "</li>"); // insert at the end of the display div the last button clicked

}

function transformNumber() { // function used to take the array numbersClicked numbers and transform in one number and store into arrayNumbers 

    if (numbersClicked[0] != undefined) { // check if has numbers in the numbersClicked to transform

        let transformedNumber = ""; // variable used to concatenate the numbers

        for (i = 0; i < numbersClicked.length; i++) { // "for" used to take all the elements of numbersClicked array 
            transformedNumber = transformedNumber + numbersClicked[i]; // concatenating the elements of numbersClicked array
        }

        arrayNumbers.push(Number(transformedNumber)); // pushing inside of the arrayNumbers the concatenated element(transformedNumber) in number form
        numbersClicked = [] // reseting numbersClicked array

    } else { }
}

function showOp(opValue) { // function used to show on display the last operation button value clicked

    if (arrayOperation[0] == undefined) { // check if has an operation in queue

        let storeValue = String(opValue.value); // stores in a variable the value of the last button clicked

        arrayOperation.push(storeValue); // stores in an array the value of the last operation button value clicked

        display.insertAdjacentHTML("beforeend", "<li class='display-element display-element-margin display-op'>" + storeValue + "</li>"); // insert in the end of the display div the last operation button value clicked

    } else { }

}

function doOperation(equal) { // function used to do the math operations

    let equalValue = String(equal.value);

    if (arrayOperation.length > 0 && arrayNumbers[1] != undefined && opCalc == null) { // check if exist an operation to do and if has any operation in queue

        switch (arrayOperation[0]) {
            case "+":
                opCalc = Number(arrayNumbers[0] + arrayNumbers[1]);
                break;
            case "x":
                opCalc = Number(arrayNumbers[0] * arrayNumbers[1]);
                break;
            case "-":
                opCalc = Number(arrayNumbers[0] - arrayNumbers[1]);
                break;
            case "/":
                opCalc = Number(arrayNumbers[0] / arrayNumbers[1]);
                break;
            default:
                break;
        }

        display.insertAdjacentHTML("beforeend", "<li class='display-element display-element-margin display-equal'>" + equalValue + "</li>");

        display.insertAdjacentHTML("beforeend", "<li class='display-element display-result'>" + opCalc + "</li>"); // insert in the end of the display div the math operation value

        equalClicked += 1; // add 1 in equalClicked to do the verifications in checkDisplay()

    } else { }

}

function checkDisplay() { // check if an operation between two numbers has been done

    if (equalClicked > 0) {

        // reseting

        numbersClicked = [];
        arrayNumbers = [];
        arrayOperation = [];
        opCalc = null;

        // removing display children

        let displayChildren = display.querySelectorAll("li");
        for (i = 0; i < displayChildren.length; i++) {
            display.removeChild(displayChildren[i]);
        }

        // reseting
        equalClicked = 0;

    } else { }

}

function cleanDisplay() { // clean the display information;

    // reseting

    numbersClicked - [];
    arrayNumbers = [];
    arrayOperation = [];
    opCalc = null;

    // removing display children

    let displayChildren = display.querySelectorAll("li");
    for (i = 0; i < displayChildren.length; i++) {
        display.removeChild(displayChildren[i]);
    }

    // reseting

    equalClicked = 0;

}

function cleanLastChild() { // removes the last display element

    let displayChildren = display.querySelectorAll("li");

    let lastChild = displayChildren[(displayChildren.length) - 1];

    if (opCalc == null && displayChildren[0] != undefined) {

        if (arrayOperation[0] != undefined && numbersClicked[0] == undefined) {

            arrayOperation.pop();

            display.removeChild(lastChild);

        } else if (arrayOperation[0] == undefined && numbersClicked[0] == undefined && arrayNumbers[0] != undefined) {

            for (i = 0; i < displayChildren.length; i++) {

                display.removeChild(displayChildren[i]);

            }

            arrayNumbers = [];

        } else {

            numbersClicked.pop();

            display.removeChild(lastChild);

        }

    } else {

        cleanDisplay();

    }

}

// tests