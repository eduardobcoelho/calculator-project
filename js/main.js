var display = document.querySelector(".display"); // display

var arrayNumber = []; // array used for concatenate numbers

function showNumber(numValue) {
    let storeValue = Number(numValue.value); // storing the value of the .btn-number in a variable
    arrayNumber.push(storeValue); // adding the value in the next position of array
    display.insertAdjacentHTML("beforeend", arrayNumber[(arrayNumber.length)-1]); // inserting at the display element the stored value
}

function showOp(opValue) {

    arrayNumber = [] // reseting the array

    let storeValue = String(opValue.value); // storing the string that represents the operation

    display.append(" ")
    display.insertAdjacentHTML("beforeend", storeValue); // inserting the op string at the display
    display.append(" ")

}