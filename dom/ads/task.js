document.addEventListener('DOMContentLoaded', () => {
	const rotator = document.querySelectorAll('.rotator__case');
	const defaultSpeed = 1000;

	rotator.forEach((element) => {
		const speed = parseInt(element.dataset.speed) || defaultSpeed;
		const color = element.dataset.color || 'black';
		let index = 0;

		const rotate = () => {
			rotator[index].classList.remove('rotator__case_active');
			index = (index + 1) % rotator.length;
			rotator[index].classList.add('rotator__case_active');
			rotator[index].style.color = color;
			setTimeout(rotate, speed);
		}

		setTimeout(rotate, speed);
	});
});