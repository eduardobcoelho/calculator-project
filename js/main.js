var i = 0; // index
 
var display = document.querySelector(".display"); // display div HTML element

var numbersClicked = []; // array used to store the number clicked; it will be used to concatenate numbers latelly

var arrayNumbers = []; // array used to store the concatenation result of the function transformNumber
 
function showNumber(numValue){ // function used to show in display the last number button value clicked

    let storeValue = numValue.value; // stores in a variable the value of the last button clicked

    numbersClicked.push(storeValue); // stores in the array next position the value of the last button clicked

    display.insertAdjacentHTML("beforeend", numbersClicked[(numbersClicked.length)-1]); // insert at the end of the display div the last button clicked

}

function showOp(opValue){ // function used to show in display the last operation button value clicked

    let storeValue = String(opValue.value); // stores in a variable the value of the last button clicked

    display.append(" "); // add a space before the storeValue
    display.insertAdjacentHTML("beforeend", storeValue); // insert at the end of the display div the last operation button value clicked
    display.append(" "); // add a space after the storeValue

}

function transformNumber(){ // function used to take the array numbersClicked numbers and transform in one number and store into arrayNumbers 

    let transformedNumber = ""; // variable used to concatenate the numbers

    for (i = 0; i<numbersClicked.length; i++){ // "for" used to take all the elements of numbersClicked array 
        transformedNumber = transformedNumber + numbersClicked[i]; // concatenating the elements of numbersClicked array
    }

    arrayNumbers.push(Number.parseInt(transformedNumber)); // pushing into the arrayNumbers the concatenated element(transformedNumber) in number form
    numbersClicked = [] // reseting numbersClicked array
}

// test area