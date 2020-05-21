// PROJECT STATUS: FINISHED //

var display = document.querySelector(".display");

var i = 0;
var equalClicked = 0;
var opCalc = 0;

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

// remove of the display the last elements with the class "display-number" transform in just one element and append to the display
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

            opPreferenceIndex.unshift(arrayOperation.length - 1);

        }

        display.insertAdjacentHTML("beforeend", "<div class='display-element display-element-margin display-op'>" + storeValue + "</div>");

    } else { }

}

// do the calculation of the operation selected and the realocation of the display divs
function doOperation(equal) {

    let equalValue = String(equal.value);

    let numberToSave = 0;

    if (arrayNumbers[0] != undefined && opCalc == 0 && arrayNumbers.length > arrayOperation.length) {

        while (arrayOperation[0] != undefined) {

            if (opPreferenceIndex[0] != undefined) {

                switch (arrayOperation[opPreferenceIndex[0]]) {

                    case "x":

                        numberToSave = arrayNumbers[opPreferenceIndex[0]] * arrayNumbers[opPreferenceIndex[0] + 1];

                        arrayNumbers.splice(opPreferenceIndex[0], 2, numberToSave);

                        arrayOperation.splice(opPreferenceIndex[0], 1);

                        opPreferenceIndex.shift()

                        break;

                    case "/":

                        numberToSave = arrayNumbers[opPreferenceIndex[0]] / arrayNumbers[opPreferenceIndex[0] + 1];

                        arrayNumbers.splice(opPreferenceIndex[0], 2, numberToSave);

                        arrayOperation.splice(opPreferenceIndex[0], 1);

                        opPreferenceIndex.shift()

                        break;

                }

            } else {

                switch (arrayOperation[0]) {

                    case "+":

                        numberToSave = arrayNumbers[0] + arrayNumbers[1];

                        arrayNumbers.splice(0, 2, numberToSave);

                        arrayOperation.shift();

                        break;

                    case "-":

                        numberToSave = arrayNumbers[0] - arrayNumbers[1];

                        arrayNumbers.splice(0, 2, numberToSave);

                        arrayOperation.shift();

                        break;

                }

            }

        }

        opCalc = arrayNumbers[0];

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
        opCalc = 0;

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
    opCalc = 0;

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

    lastChildClasses = lastChild.classList;

    if (opCalc == 0) {

        switch (lastChildClasses[lastChildClasses.length - 1]) {

            case "display-op":

                if (arrayOperation[arrayOperation.length - 1] == "x" || arrayOperation[arrayOperation.length - 1] == "/") {

                    arrayOperation.pop();

                    opPreferenceIndex.shift();

                    display.removeChild(lastChild);

                } else {

                    arrayOperation.pop();

                    display.removeChild(lastChild);

                }

                break;

            case "display-number":

                if (numberForOp != "") {
                    ;

                    display.removeChild(lastChild);

                    numberForOp = numberForOp.slice(0, -1);

                } else {

                    arrayNumbers.pop();

                    display.removeChild(lastChild);

                }

                break;

        }

    } else {

        cleanDisplay();

    }

}