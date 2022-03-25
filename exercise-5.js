const color_input = document.querySelector('#color_input');
const color_output = document.querySelector('#color_output');

color_input.addEventListener("input",()=>{
   color_output.style.backgroundColor= color_input.value;
});

