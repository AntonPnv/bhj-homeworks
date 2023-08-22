const fontSwitch = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

fontSwitch.forEach(link => {
	link.addEventListener('click', (event) => {
		event.preventDefault();

		fontSwitch.forEach(link => link.classList.remove('font-size_active'));
		link.classList.add('font-size_active');

		const size = link.getAttribute('data-size');
		book.classList.remove('font-size_small');
		book.classList.remove('font-size_big');

		if (size === 'small') {
			book.classList.add('font-size_small');
		} else if (size === 'big') {
			book.classList.add('font-size_big');
		}
	});
});