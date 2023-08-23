document.addEventListener('DOMContentLoaded', () => {
	const rotator = document.querySelectorAll('.rotator__case');
	const defaultSpeed = 1000;
	let index = 0;

	const rotate = () => {
		const prevIndex = index;
		index= (index + 1) % rotator.length;

		rotator[prevIndex].classList.remove('rotator__case_active');
		rotator[index].classList.add('rotator__case_active');

		const speed = parseInt(rotator[index].dataset.speed) || defaultSpeed;
		const color = rotator[index].dataset.color || 'black';
		rotator[index].style.color = color;

		setTimeout(rotate, speed);
	}

	rotate();
});