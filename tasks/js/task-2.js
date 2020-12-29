//Задание 2
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

for (let i = 0; i < ingredients.length; i += 1) {
  //const newElement = document.createElement('li');
  const newElement = '';
    //newElement.textContent = ingredients[i];
  newElement += `<li>${ingredients[i]}</li>`;
};
const refParrentEl = document.querySelector('ul#ingredients');
    refParrentEl.innerHTML = newElement;
    console.log(newElement);
