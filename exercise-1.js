const button = document.querySelector("#counter-1");
/*
const button_increment = document.querySelector("#counter2-increment");
const button_decrement = document.querySelector("#counter2-decrement");
const button_display = document.querySelector("#counter2_value");
const button_encode = document.querySelector("#encoder_button");
const button_decode = document.querySelector('#decoder_button');
const url_input = document.querySelector('#url_input');
const result_url =document.querySelector('#output_url');
const character_counter = document.querySelector('#character_counter');
*/
let count = 0;
button.addEventListener('click', (event) => {
    count++;
    event.target.value = count;
})
/*
let count2 = 0;
button_increment.addEventListener('click',(event) => {
    count2++;
    button_display.value = count2;
})
button_decrement.addEventListener('click', (event)=>{
    count2--;
    button_display.value = count2;
})
button_encode.addEventListener('click', (event)=>{
    result_url.value = encodeURIComponent(url_input.value);
})
button_decode.addEventListener('click', (event)=>{
    result_url.value = decodeURIComponent(url_input.value);
})
character_counter.addEventListener('input',(event)=>{
    const lng = event.value.length;
    character_counter.innerHTML = 'The above text has '+ lng +' characters';
});
*/