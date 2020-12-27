const textInputRef = document.querySelector('input#name-input');
const textDisplayElementRef = document.querySelector('span#name-output');

textInputRef.addEventListener('input', textHandler);

function textHandler(event) {
    textDisplayElementRef.textContent = event.target.value; 
};