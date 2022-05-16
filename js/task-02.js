// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.
const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const refs = {
    list: document.querySelector('#ingredients'),
}
const liArr = [];
ingredients.forEach((elem) => {
    const li = document.createElement("li");
    li.classList.add("item");
    li.textContent = elem;
    liArr.push(li);
})

refs.list.append(...liArr);