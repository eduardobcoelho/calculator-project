// alert

window.alert("This calculator just do math operations with two numbers!! Welcome and make a good use!!");

// Global variables

var i = 0; // index

var resultClicked = 0;
 
var display = document.querySelector(".display"); // display div HTML element

var numbersClicked = []; // array used to store the number clicked; it will be used to concatenate numbers latelly

var arrayNumbers = []; // array used to store the concatenation result of the function transformNumber

var arrayOperation = []; // array used to store the last operation button clicked; it will be used in the doOperation() function

var opCalc = null; // variable used to store the math operation value
 
function showNumber(numValue){ // function used to show on display the last number button value clicked

    let storeValue = numValue.value; // stores in a variable the value of the last button clicked

    numbersClicked.push(storeValue); // stores in the array next position the value of the last button clicked

    display.insertAdjacentHTML("beforeend", "<li class='display-element'>" + numbersClicked[(numbersClicked.length)-1] + "</li>"); // insert at the end of the display div the last button clicked

}

function transformNumber(){ // function used to take the array numbersClicked numbers and transform in one number and store into arrayNumbers 

    if(numbersClicked[0] != undefined){ // check if has numbers in the numbersClicked to transform
        
        let transformedNumber = ""; // variable used to concatenate the numbers

        for (i = 0; i<numbersClicked.length; i++){ // "for" used to take all the elements of numbersClicked array 
            transformedNumber = transformedNumber + numbersClicked[i]; // concatenating the elements of numbersClicked array
        }

        arrayNumbers.push(Number(transformedNumber)); // pushing inside of the arrayNumbers the concatenated element(transformedNumber) in number form
        numbersClicked = [] // reseting numbersClicked array

    } else {}
}

function showOp(opValue){ // function used to show on display the last operation button value clicked

    if(arrayOperation[0] == undefined){ // check if has an operation in queue

        let storeValue = String(opValue.value); // stores in a variable the value of the last button clicked

        arrayOperation.push(storeValue); // stores in an array the value of the last operation button value clicked
    
        display.insertAdjacentHTML("beforeend", "<li class='display-element display-element-margin'>" + storeValue + "</li>"); // insert in the end of the display div the last operation button value clicked
    
    } else {}

}

function doOperation(result){ // function used to do the math operations

    let resultValue = String(result.value);

    if(arrayOperation.length > 0 && arrayNumbers[1] != undefined && opCalc == null){ // check if exist an operation to do and if has any operation in queue

        switch(arrayOperation[0]){
            case "+":
                opCalc = Number(arrayNumbers[0]+arrayNumbers[1]);
                break;
            case "x":
                opCalc = Number(arrayNumbers[0]*arrayNumbers[1]);
                break;
            case "-":
                opCalc = Number(arrayNumbers[0]-arrayNumbers[1]);
                break;
            case "/":
                opCalc = Number(arrayNumbers[0]/arrayNumbers[1]);
                break;
            default:
                break;
        }

        display.append(" ");
        display.insertAdjacentHTML("beforeend", "<li class='display-element display-element-margin'>" + resultValue + "</li>");
        display.append(" ");
    
        display.insertAdjacentHTML("beforeend", "<li class='display-element'>" + opCalc + "</li>"); // insert in the end of the display div the math operation value
    
        resultClicked += 1; // add 1 in resultClicked to do the verifications in checkDisplay()

    } else {}

}

function checkDisplay(){ // check if an operation between two numbers has been done

    if(resultClicked>0){

        // reseting

        numbersClicked = [];
        arrayNumbers = [];
        arrayOperation = [];
        opCalc = null;

        // removing display children

        let displayChildren = display.querySelectorAll("li");
        for(i = 0; i<displayChildren.length; i++){
            display.removeChild(displayChildren[i]);
        }

        // reseting
        resultClicked = 0;

    } else {}

}

/* function cleanLastChild(){

    let displayChildren = display.querySelectorAll("li");

    display.removeChild(displayChildren[(displayChildren.length) - 1])

} */ 

function cleanDisplay(){ // clean the display information;

    // reseting

    numbersClicked - [];
    arrayNumbers = [];
    arrayOperation = [];
    opCalc = null;

    // removing display children

    let displayChildren = display.querySelectorAll("li");
    for(i = 0; i<displayChildren.length; i++){
        display.removeChild(displayChildren[i]);
    }

    // reseting

    resultClicked = 0;

}

// tests