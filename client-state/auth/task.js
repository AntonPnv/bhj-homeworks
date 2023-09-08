document.addEventListener('DOMContentLoaded', () => {
	// Проверяем, есть ли в лок. хранилище данные о пользователе
	const userId = localStorage.getItem('user_id');
	// Получаем элементы из DOM
	const welcome = document.getElementById('welcome');
	const signinBtn = document.getElementById('signin__btn');

	// Если userId существует, отобразим блок приветствия с указанием пользователя
	if (userId) {
		welcome.classList.add('welcome_active');
		document.getElementById('user_id').textContent = userId;
	} else {
		// Если userId отсутствует (пользователь не выполнил вход), отобразим форму авторизации
		document.querySelector('.signin').classList.add('signin_active');
	}

	// Устанавливаем обработчик события для кнопки входа
	signinBtn.addEventListener('click', (event) => {
		event.preventDefault(); // Отменяем стандартное действие кнопки (отправку формы)

		// Получаем данные из формы
		const login = document.querySelector('input[name="login"]').value;
		const password = document.querySelector('input[name="password"]').value;

		// Создаем объект FormData для удобства отправки данных
		const formData = new FormData();
		formData.append('login', login); // Добавляем логин
		formData.append('password', password); // Добавляем пароль

		// Отправляем AJAX-запрос к серверу
		const xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);

		// Устанавливаем обработчик событий который срабатывает когда запрос завершен
		xhr.onload = () => {
			if (xhr.status === 201) { // Поменял на 201 потому что если ставить 200 то выдает ошибку и в Network тоже 201 показывает
				const response = JSON.parse(xhr.responseText);

				if (response.success) {
					// Если авторизация прошла успешна, сохраняем userId в локальное хранилище
					localStorage.setItem('user_id', response.user_id);

					// Отобразим блок приветствия с пользователем
					welcome.classList.add('welcome_active');
					document.getElementById('user_id').textContent = response.user_id;

					// Скрывает форму авторизации
					document.querySelector('.signin').classList.remove('signin_active');
				} else {
					// Выводим сообщение об ошибке авторизации
					alert('Неверный логин/пароль');
				}
			} else {
				// Обработка ошибок при запросе
				alert('Произошла ошибка при авторизации');
			}
		};

		// Отправляем данные формы на сервер
		xhr.send(formData);
	});
});