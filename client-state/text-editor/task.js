const editor = document.getElementById('editor');
const savedText = localStorage.getItem('editorText');

editor.value = savedText;

editor.addEventListener('input', () => {
	localStorage.setItem('editorText', editor.value);
});