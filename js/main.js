var display = document.querySelector(".display");

function showAtDisplay(numValue){

    let value = numValue.value;

    display.insertAdjacentHTML("afterbegin", value);

}