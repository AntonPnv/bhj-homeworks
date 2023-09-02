document.addEventListener('DOMContentLoaded', () => {
	// Получаем элементы из DOM
	const form = document.getElementById('form');
	const fileInput = document.getElementById('file');
	const progress = document.getElementById('progress');

	// Устанавливаем обработчик события для отправки форм
	form.addEventListener('submit', (e) => {
		e.preventDefault(); // Предотвращаем стандартное поведение отправки форм

		// Создаем объект XMLHttpRequest() для отправки данных через AJAX
		const xhr = new XMLHttpRequest();
		// Устанавливаем обработчик события для изменения состояния запроса
		xhr.addEventListener('readystatechange', () => {
			if (xhr.readyState === 4) {
				if (xhr.status === 201) { // Поменял на 201 потому что если ставить 200 то выдает ошибку и в Network тоже 201 показывает
					console.log('Файл успешно загружен'); // В случае успешной загрузки
				} else {
					console.error('Ошибка загрузки файла'); // В случае ошибки при загрузке
				}
			}
		});

		// Создаем объект FormData для отправки данных
		const formData = new FormData(form);

		// Устанавливаем обработчик события для загрузки
		xhr.upload.addEventListener('progress', (event) => {
			if (event.lengthComputable) {
				const percent = (event.loaded / event.total); // Вычисляем процент загрузки
				progress.value = percent; // Обновляем значения progress
			}
		});

		// Отправляем запрос на сервер
		xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
		xhr.send(formData);
	});
});