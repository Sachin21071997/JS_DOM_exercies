const button_increment = document.querySelector("#counter2-increment");
const button_decrement = document.querySelector("#counter2-decrement");
const button_display = document.querySelector("#counter2_value");

let count2 = 0;
button_increment.addEventListener('click',(event) => {
    count2++;
    button_display.value = count2;
})
button_decrement.addEventListener('click', (event)=>{
    count2--;
    button_display.value = count2;
})