const btnCreateRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');
const inputQntityRef = document.querySelector('div#controls input');
const bigBox = document.querySelector('div#boxes');

let startWidth = 20;
let startHeight = 20;


function createBoxes(amount) {
    let num = inputQntityRef.value;
    for (let i = 0; i < num; i += 1) {
        const addDiv = document.createElement("div");
        startWidth += 10;
        startHeight += 10;
        addDiv.style = 'background-color: ' + '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase() + ';' + `width: ${startWidth}px; height: ${startHeight}px;`;
        bigBox.appendChild(addDiv);
        console.log(bigBox.children);
    }
}
    //div.style = 'background-color: ' + '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    
function destroyBoxes(event) { 
        bigBox.innerHTML = '';
        startWidth = 20;
        startHeight = 20;
};

btnCreateRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);
//