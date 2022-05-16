// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const categoriesEl = document.querySelectorAll("#categories>li");
console.log(`Number of categories: ${categoriesEl.length}`);

const categoryList = () => {
    categoriesEl.forEach(elem => {
        console.log('Category:', elem.firstElementChild.textContent)
        console.log("Elements:", elem.lastElementChild.children.length)
    });
}
categoryList();