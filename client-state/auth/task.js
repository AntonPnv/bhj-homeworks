document.addEventListener('DOMContentLoaded', () => {
	const userId = localStorage.getItem('user_id');
	const welcome = document.getElementById('welcome');
	const signinBtn = document.getElementById('signin__btn');
	const loginForm = document.querySelector('.signin form');

	if (userId) {
		welcome.classList.add('welcome_active');
		document.getElementById('user_id').textContent = userId;
	} else {
		document.querySelector('.signin').classList.add('signin_active');
	}

	signinBtn.addEventListener('click', (event) => {
		event.preventDefault();

		const formData = new FormData(loginForm);

		const xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);
		xhr.responseType = 'json';

		xhr.onload = () => {
			const response = xhr.response;

			if (response.success) {
				localStorage.setItem('user_id', response.user_id);
				welcome.classList.add('welcome_active');
				document.getElementById('user_id').textContent = response.user_id;
				document.querySelector('.signin').classList.remove('signin_active');
			} else {
				alert('Неверный логин/пароль');
				}
		};

		xhr.send(formData);
	});
});