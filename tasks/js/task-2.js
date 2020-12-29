const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const refParrentEl = document.querySelector('ul#ingredients');
let liElementsArray = ingredients.map(currentValue => {
  const newElementRef = document.createElement('li');
  newElementRef.textContent = currentValue;
  return newElementRef;
});
  
  refParrentEl.append(...liElementsArray);