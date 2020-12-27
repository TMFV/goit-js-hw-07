const inputRef = document.querySelector('input#validation-input');
const stringLength = inputRef.getAttribute('data-length');

function inputValidation(event) { 
    let inputString = inputRef.getAttribute('value');
    if (inputRef.value.length == stringLength) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
};

inputRef.addEventListener('change', inputValidation);