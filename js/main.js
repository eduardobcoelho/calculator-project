// alert

window.alert("This calculator just do math operations with two numbers!! Welcome and make a good use!!");

// Global variables

var i = 0; // index

var resultClicked = 0;
 
var display = document.querySelector(".display"); // display div HTML element

var numbersClicked = []; // array used to store the number clicked; it will be used to concatenate numbers latelly

var arrayNumbers = []; // array used to store the concatenation result of the function transformNumber

var arrayOperation = []; // array used to store the last operation button clicked; it will be used in the doOperation() function
 
function showNumber(numValue){ // function used to show on display the last number button value clicked

    let storeValue = numValue.value; // stores in a variable the value of the last button clicked

    numbersClicked.push(storeValue); // stores in the array next position the value of the last button clicked

    display.insertAdjacentHTML("beforeend", numbersClicked[(numbersClicked.length)-1]); // insert at the end of the display div the last button clicked

}

function transformNumber(){ // function used to take the array numbersClicked numbers and transform in one number and store into arrayNumbers 

    let transformedNumber = ""; // variable used to concatenate the numbers

    for (i = 0; i<numbersClicked.length; i++){ // "for" used to take all the elements of numbersClicked array 
        transformedNumber = transformedNumber + numbersClicked[i]; // concatenating the elements of numbersClicked array
    }

    arrayNumbers.push(Number(transformedNumber)); // pushing inside of the arrayNumbers the concatenated element(transformedNumber) in number form
    numbersClicked = [] // reseting numbersClicked array
}

function showOp(opValue){ // function used to show on display the last operation button value clicked

    let storeValue = String(opValue.value); // stores in a variable the value of the last button clicked

    arrayOperation.push(storeValue); // stores in an array the value of the last operation button value clicked

    display.append(" ");
    display.insertAdjacentHTML("beforeend", storeValue); // insert in the end of the display div the last operation button value clicked
    display.append(" ");

}

function doOperation(result){ // function used to do the math operations

    let resultValue = String(result.value);

    let opCalc; // stores the math operation value

    if(arrayOperation.length > 0){ // check if exist an operation to do

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
        display.insertAdjacentHTML("beforeend", resultValue);
        display.append(" ");
    
        display.insertAdjacentHTML("beforeend", opCalc); // insert in the end of the display div the math operation value
    
        resultClicked += 1; // add 1 in resultClicked to do the verifications in checkDisplay()

    } else {}

}

function checkDisplay(){ // check if an operation between two numbers has been done

    if(resultClicked>0){

        // reseting arrays

        numbersClicked = [];
        arrayNumbers = [];
        arrayOperation = [];

        // a way to remove the children if they are li

        /* let displayChildren = display.querySelectorAll("li");
        for(i = 0; i<displayChildren.length; i++){
            display.removeChild(displayChildren[i]);
        } */

        // removing display children

        display.innerHTML = "";

        // reseting
        resultClicked = 0;

    } else {}

}

function cleanDisplay(){ // clean the display information;

    // reseting arrays

    numbersClicked - [];
    arrayNumbers = [];
    arrayOperation = [];

    // removing display children

    display.innerHTML = "";

    // reseting
    resultClicked = 0;

}