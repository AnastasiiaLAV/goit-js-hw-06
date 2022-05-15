// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// // Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const refs = {
    input: document.querySelector("#validation-input"),
}

refs.input.addEventListener("blur", eventBlur)

function eventBlur(event) {
    if (Number(refs.input.dataset.length) === event.target.value.length) {
        refs.input.classList.remove("invalid")
        return refs.input.classList.add("valid")
    }
    refs.input.classList.remove("valid")
    refs.input.classList.add("invalid")
}