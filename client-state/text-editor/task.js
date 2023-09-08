// Получаем ссылку на элемент из HTML
const editor = document.getElementById('editor');
// Получаем сохраненный текст из лок. хранилища
const savedText = localStorage.getItem('editorText');
// Если текст был сохранен в локальном хранилище, устанавливаем его в текстовое поле
if (savedText) {
	editor.value = savedText;
}
// Добавляем событие "input" к текстовому полю
editor.addEventListener('input', () => {
	localStorage.setItem('editorText', editor.value); // Когда вводим текст, он сохраняется в лок. хранилище
});