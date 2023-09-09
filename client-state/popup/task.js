const modal = document.getElementById('subscribe-modal');
const closeButton = modal.querySelector('.modal__close');

const ModalClosed = getCookie('modal_closed');

if (!ModalClosed) {
	modal.classList.add('modal_active');
}

function setCookie(name, value) {
	document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
}

function getCookie(name) {
	const nameCookie = name + "=";
	const decodedCookie = decodeURIComponent(document.cookie);
	const cookieArray = decodedCookie.split('; ');
	for (const cookie of cookieArray) {
		if (cookie.startsWith(nameCookie)) {
			return cookie.substring(nameCookie.length);
		}
	}

	return null;
}

closeButton.addEventListener('click', () => {
	modal.classList.remove('modal_active');
	setCookie('modal_closed', 'true', 100);

	console.log('Modal closed, cookie set');
});