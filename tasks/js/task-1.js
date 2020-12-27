//Задание 1
const findListItems = document.querySelectorAll('ul#categories li.item');
console.log(`В списке ${findListItems.length} категории.`);

const findCategoryName = document.querySelectorAll('ul#categories li.item h2');

for (let i = 0; i < findCategoryName.length; i += 1){
    console.log(`Категория: ${ findCategoryName[i].textContent}`)
    const findCategoryChildren = document.querySelectorAll('ul#categories ul');
    console.log(`Количество элементов: ${findCategoryChildren[i].children.length}`);
}
    
