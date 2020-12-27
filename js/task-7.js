const inputRangeRef = document.querySelector('input#font-size-control');
const changeTextRef = document.querySelector('span#text');

function handlerFontSize(event) {
    changeTextRef.setAttribute('style', `font-size:${inputRangeRef.value}px`)
};

inputRangeRef.addEventListener('input', handlerFontSize);