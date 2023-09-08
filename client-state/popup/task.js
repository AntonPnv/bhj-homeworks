// Получение элемента всплывающего окна
const modal = document.getElementById('subscribe-modal');
// Получение элемента кнопки закрытия окна
const closeButton = modal.querySelector('.modal__close');
// Проверка наличия cookie для окна
const ModalClosed = getCookie('modal_closed');
// Если cookie не указывает на закрытие окна, и окно не было закрыто ранее
if (!ModalClosed) {
	modal.classList.add('modal_active'); // Показывает окно
}
// Функция для установки cookie
function setCookie(name, value) {
	document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
}

// Функция для получения cookie
function getCookie(name) {
	// Создаем строку, которая будет использоваться для поиска имени cookie в строке cookie
	const nameCookie = name + "=";
	// Кодируем значение всех cookie в текущем документе
	const decodedCookie = decodeURIComponent(document.cookie);
	// Разделяем строку cookie на отдельные cookie и помещаем их в массив
	const cookieArray = decodedCookie.split('; ');
	// Итерируем по массиву cookie для поиска нужного cookie
	for (const cookie of cookieArray) {
		// Проверяем, начинается ли текущее значение cookie с имени, которое мы ищем
		if (cookie.startsWith(nameCookie)) {
			// Если нашли cookie с нужным именем, возвращаем его значение (без имени)
			return cookie.substring(nameCookie.length);
		}
	}

	return null; // Если cookie с указанным именем не было найдено, возвращаем null
}

// Обработчик события для закрытия окна
closeButton.addEventListener('click', () => {
	// Закрыть окно, добавив класс modal_active
	modal.classList.remove('modal_active');
	// Установить cookie, указывающую на закрытие окна на 100 дней
	setCookie('modal_closed', 'true', 100);

	console.log('Modal closed, cookie set'); // Покажет "Modal closed, cookie set" после закрытия модельного окна
});