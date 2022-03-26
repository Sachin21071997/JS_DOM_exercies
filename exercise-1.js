const button = document.querySelector("#counter-1");
let count = 0;
button.addEventListener('click', (event) => {
    count++;
    event.target.value = count;
})
