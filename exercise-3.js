const button_encode = document.querySelector("#encoder_button");
const button_decode = document.querySelector('#decoder_button');
const url_input = document.querySelector('#url_input');
const result_url =document.querySelector('#output_url');
button_encode.addEventListener('click', (event)=>{
    result_url.value = encodeURIComponent(url_input.value);
})
button_decode.addEventListener('click', (event)=>{
    result_url.value = decodeURIComponent(url_input.value);
})