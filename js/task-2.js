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
    const newElement = document.createElement('li');
    newElement.textContent = ingredients[i];
    const refParrentEl = document.querySelector('ul#ingredients');
    refParrentEl.appendChild(newElement);
    console.log(newElement);
};