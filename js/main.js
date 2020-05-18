window.alert("This calculator just do math operations with two numbers!! Welcome and make a good use!!");

var display = document.querySelector(".display");

var i = 0, equalClicked = 0, opCalc = null;

var numbersClicked = [], arrayNumbers = [], arrayOperation = [];

// shows in display the number button value
function showNumber(numValue) {

    let storeValue = numValue.value;

    numbersClicked.push(storeValue);

    display.insertAdjacentHTML("beforeend", "<li class='display-element display-number'>" + numbersClicked[(numbersClicked.length) - 1] + "</li>");

}

// transform the numbersClicked in just one number 
function transformNumber() {

    if (numbersClicked[0] != undefined) {

        let transformedNumber = "";

        for (i = 0; i < numbersClicked.length; i++) {

            transformedNumber = transformedNumber + numbersClicked[i];

        }

        arrayNumbers.push(Number(transformedNumber));

    } else { }
}

// remove all the individual number list items and add the transformedNumber
function removeAndAdd() {

    if (numbersClicked[0] != undefined) {

        for (i = 0; i < numbersClicked.length; i++) {

            let displayChildren = display.querySelectorAll("li");

            let lastChild = displayChildren[displayChildren.length - 1];

            display.removeChild(lastChild);

        }

        numbersClicked = [];

        display.insertAdjacentHTML("beforeend", "<li class='display-element display-number'>" + arrayNumbers[arrayNumbers.length - 1] + "<li>");

    }

}

// shows in display the operation button value
function showOp(opValue) {

    if (arrayOperation[0] == undefined) {

        let storeValue = String(opValue.value);

        arrayOperation.push(storeValue);

        display.insertAdjacentHTML("beforeend", "<li class='display-element display-element-margin display-op'>" + storeValue + "</li>");

    } else { }

}

// do the calculation of the operation selected
function doOperation(equal) {

    let equalValue = String(equal.value);

    if (arrayOperation.length > 0 && arrayNumbers[1] != undefined && opCalc == null) {

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

        display.insertAdjacentHTML("beforeend", "<li class='display-element display-result'>" + opCalc + "</li>");

        equalClicked += 1;

    } else { }

}

// checks if an operation has been done before start a new operation
function checkDisplay() {

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

// clean all the display
function cleanDisplay() {

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

// removes of the display the last number or operation clicked
function cleanLastChild() {

    let displayChildren = display.querySelectorAll("li");

    let lastChild = displayChildren[(displayChildren.length) - 1];

    if (opCalc == null && displayChildren[0] != undefined) {

        if (arrayOperation[0] != undefined && numbersClicked[0] == undefined) {

            arrayOperation.pop();

            display.removeChild(lastChild);

        } else if (arrayOperation[0] == undefined && numbersClicked[0] == undefined && arrayNumbers[0] != undefined) {

            for (i = 0; i < displayChildren.length; i++) {

                let displayChildren = display.querySelectorAll("li");

                let lastChild = displayChildren[(displayChildren.length) - 1];

                display.removeChild(lastChild);

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