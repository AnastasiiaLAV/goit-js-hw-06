// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


const refs = {
  list: document.querySelector('#ingredients'),
}

const createLi = (text) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = text;
  refs.list.append(li);
}

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach((elem) => createLi(elem));

