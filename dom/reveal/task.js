const reveal = document.querySelectorAll('.reveal');

const scroll = () => {
	reveal.forEach(revealItem => {
		const windowHeight = window.innerHeight;
		const elementTop = revealItem.getBoundingClientRect().top;

		if (elementTop < windowHeight) {
			revealItem.classList.add('reveal_active');
		}
	});
}

window.addEventListener('load', scroll);
window.addEventListener('scroll', scroll);