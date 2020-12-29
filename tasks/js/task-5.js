const textInputRef = document.querySelector('input#name-input');
const textDisplayElementRef = document.querySelector('span#name-output');

textInputRef.addEventListener('input', textHandler);

function textHandler(event) {
    if (event.target.value.length > 0) {
        textDisplayElementRef.textContent = event.target.value;
    } else {
        textDisplayElementRef.textContent = 'незнакомец';
    };
};