let editorArea = document.getElementById('editor');

// @ Функция для записи/чтения текущего содержимого в local storage
// если в хранилище что-то есть то добавляем это в поле ввода
if (localStorage.getItem('text_in_editor') !== null) {
    editorArea.innerHTML = localStorage.getItem('text_in_editor')
}

// по нажатию клавиш записывем содержимое в local storage 
document.addEventListener('keyup', (e)=> {
    localStorage.setItem('text_in_editor', editorArea.innerHTML)
});

// @ кнопки правой панели (#right_panel)

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

// обработчик кнопки "шапка программы"
btn1.addEventListener('click', ()=> {
    editorArea.innerHTML += `<div>O0001 (your new program)</div> `;
    localStorage.setItem('text_in_editor', editorArea.innerHTML);
})

// обработчик кнопки "строка безопасности"
btn2.addEventListener('click', ()=> {
    editorArea.innerHTML += `<div>G99G80G40G18</div> `;
})
