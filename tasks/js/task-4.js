


const btnIncrementRef = document.querySelector('button[data-action="increment"]');
const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const displayCounterValueRef = document.querySelector('#value');

btnIncrementRef.addEventListener("click", increment);
btnDecrementRef.addEventListener('click', decrement);

let counterValue = 0;

function increment (event) {
    console.log(counterValue);
    counterValue += 1;
    displayCounterValueRef.textContent = counterValue;
};
function decrement (event) {
    counterValue -= 1;
    displayCounterValueRef.textContent = counterValue;
};

