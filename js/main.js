window.alert("This calculator just do math operations with two numbers!! Welcome and make a good use!!");

var display = document.querySelector(".display");

var i = 0;
var equalClicked = 0;
var opCalc = null;

var numberForOp = "";
var arrayNumbers = [];
var arrayOperation = [];
var opPreferenceIndex = [];

var displayChildren = display.querySelectorAll(".display-element");
var lastChild = displayChildren[displayChildren.length - 1];

// shows in display the number button value
function showNumber(numValue) {

    let storeValue = numValue.value;

    numberForOp += storeValue;

    display.insertAdjacentHTML("beforeend", "<div class='display-element display-number'>" + storeValue + "</div>");

}

function removeAndAdd() {

    if (numberForOp != "") {

        for (i = 0; i < numberForOp.length; i++) {

            displayChildren = display.querySelectorAll(".display-element");

            lastChild = displayChildren[displayChildren.length - 1];

            display.removeChild(lastChild);

        }

        arrayNumbers.push(Number(numberForOp));

        display.insertAdjacentHTML("beforeend", "<div class='display-element display-number'>" + arrayNumbers[arrayNumbers.length - 1] + "</div>");

        numberForOp = "";


    } else { }

}

// shows in display the operation button value the realocation of the display divs
function showOp(opValue) {

    if (arrayNumbers.length > arrayOperation.length) {

        let storeValue = String(opValue.value);

        arrayOperation.push(storeValue);

        if (storeValue == "/" || storeValue == "x") {

            opPreferenceIndex.push(arrayOperation.length - 1);

        }

        display.insertAdjacentHTML("beforeend", "<div class='display-element display-element-margin display-op'>" + storeValue + "</div>");

    } else { }

}

// do the calculation of the operation selected and the realocation of the display divs
function doOperation(equal) {

    let equalValue = String(equal.value);

    if (arrayNumbers[0] != undefined && opCalc == null) {

        for (i = 0; i < opPreferenceIndex.length; i++) {

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
        opPreferenceIndex = [];
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
    opPreferenceIndex = [];
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

    if (opCalc == null) {

        console.log("it isn't work, galado");

    } else {

        cleanDisplay();

    }

}

// tests