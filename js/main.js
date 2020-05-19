window.alert("This calculator just do math operations with two numbers!! Welcome and make a good use!!");

var display = document.querySelector(".display");

var i = 0, equalClicked = 0, opCalc = null;

var numberForOp = ""; arrayNumbers = [], arrayOperation = [];

var displayChildren = display.querySelectorAll(".display-element"), lastChild = displayChildren[displayChildren.length - 1];

// shows in display the number button value
function showNumber(numValue) {

    let storeValue = numValue.value;

    numberForOp += storeValue;

    display.insertAdjacentHTML("beforeend", "<div class='display-element display-number'>" + storeValue + "</div>");

}


// shows in display the operation button value the realocation of the display divs
function showOp(opValue) {

    if (arrayOperation[0] == undefined && numberForOp != "") {

        if (numberForOp != undefined) {

            displayChildren = display.querySelectorAll(".display-number");

            for (i = displayChildren.length - 1; i >= 0; i--) {

                display.removeChild(displayChildren[i]);

            }

            arrayNumbers.push(Number(numberForOp));

            display.insertAdjacentHTML("beforeend", "<div class='display-element display-number'>" + numberForOp + "</div>");

        }

        numberForOp = "";

        let storeValue = String(opValue.value);

        arrayOperation.push(storeValue);

        display.insertAdjacentHTML("beforeend", "<div class='display-element display-element-margin display-op'>" + storeValue + "</div>");

    } else { }

}

// do the calculation of the operation selected and the realocation of the display divs
function doOperation(equal) {

    let equalValue = String(equal.value);

    if (numberForOp != undefined) {

        displayChildren = display.querySelectorAll(".display-number");

        for (i = displayChildren.length - 1; i > 0; i--) {

            display.removeChild(displayChildren[i]);

        }

        arrayNumbers.push(Number(numberForOp));

        display.insertAdjacentHTML("beforeend", "<div class='display-element display-number'>" + numberForOp + "</div>");

        numberForOp = "";

    }

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

        display.insertAdjacentHTML("beforeend", "<div class='display-element display-element-margin display-equal'>" + equalValue + "</div>");

        display.insertAdjacentHTML("beforeend", "<div class='display-element display-result'>" + opCalc + "</div>");

        equalClicked += 1;

    } else { }

}

// checks if an operation has been done before start a new operation
function checkDisplay() {

    if (equalClicked > 0) {

        // reseting

        numberForOp = "";
        arrayNumbers = [];
        arrayOperation = [];
        opCalc = null;

        // removing display children

        displayChildren = display.querySelectorAll(".display-element");

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

    numberForOp = "";
    arrayNumbers = [];
    arrayOperation = [];
    opCalc = null;

    // removing display children

    displayChildren = display.querySelectorAll(".display-element");

    for (i = 0; i < displayChildren.length; i++) {

        display.removeChild(displayChildren[i]);

    }

    // reseting

    equalClicked = 0;

}

// removes of the display the last number or operation clicked
function cleanLastChild() {

    displayChildren = display.querySelectorAll(".display-element");

    lastChild = displayChildren[(displayChildren.length) - 1];

    if (opCalc == null && lastChild != undefined) {

        if (numberForOp != undefined && arrayNumbers[0] == undefined && arrayOperation[0] == undefined) {

            numberForOp = numberForOp.substr(0, (numberForOp.length - 1));

            display.removeChild(lastChild);

        } else if (numberForOp == "" && arrayNumbers[0] != undefined && arrayOperation[0] != undefined) {

            arrayOperation = [];

            display.removeChild(lastChild);

        } else if (numberForOp == "" && arrayNumbers[0] != undefined && arrayOperation[0] == undefined) {

            arrayNumbers = [];

            display.removeChild(lastChild);

        }

    } else {

        cleanDisplay();

    }

}

// tests