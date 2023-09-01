document.addEventListener('DOMContentLoaded', () => {
	// Создаем асинхронный запрос с помощью XMLHttpRequest
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);

	// Устанавливаем событие для отслеживания изменения состояния запроса
	xhr.addEventListener('readystatechange', () => {
		// Проверяем, что состояние запроса стало 4 (завершено) и статус HTTP-ответа 200
		if (xhr.readyState === 4 && xhr.status === 200) {
			const pollData = JSON.parse(xhr.responseText); // Распарсиваем полученные JSON-данные в объект
			const pollTitle = document.getElementById('poll__title');
			const pollAnswers = document.getElementById('poll__answers');

			pollTitle.textContent = pollData.data.title; // Отображаем вопрос

			// Отображаем список ответов в виде кнопок
			pollData.data.answers.forEach((answer) => {
				const answerButton = document.createElement('button');
				answerButton.className = 'poll__answer';
				answerButton.textContent = answer;
				pollAnswers.appendChild(answerButton); // Добавляем кнопку для ответов

				// Добавляем обработчик события для кнопки ответа
				answerButton.addEventListener('click', () => {
					alert('Спасибо, ваш голос засчитан!'); // При нажатии на кнопку выводится сообщение

					window.location.reload(); // От себя добавил, после выбора ответа обновляется страница

				});
			});
		}
	});

	xhr.send(); // Отправляем GET-запрос на указанный URL
});