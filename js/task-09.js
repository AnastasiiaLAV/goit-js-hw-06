// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    body: document.querySelector("body"),
    wrap: document.querySelector(".widget"),
    color: document.querySelector(".color"),
    btn: document.querySelector(".change-color")
}

refs.btn.addEventListener("click", changeColor);

function changeColor() {
    refs.body.style.background = getRandomHexColor();
    refs.color.textContent = `${refs.body.style.background}`
}