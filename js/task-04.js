// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
    actionEl: document.querySelectorAll("#counter button"),
    minusBtn: document.querySelector("[data-action='decrement']"),
    plusBtn: document.querySelector("[data-action='increment']"),
    value: document.querySelector("#value"),

}

let counterValue = 0;
const step = 1;

refs.minusBtn.addEventListener("click", () => {
    counterValue -= step;
    refs.value.textContent = counterValue;
})

refs.plusBtn.addEventListener("click", () => {
    counterValue += step;
    refs.value.textContent = counterValue;
})