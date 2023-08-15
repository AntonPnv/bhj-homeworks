const dropdowns = Array.from(document.querySelectorAll('.dropdown'));

dropdowns.forEach(dropdown => {
	const valueElement = dropdown.querySelector('.dropdown__value');
	const listElement = dropdown.querySelector('.dropdown__list');

	valueElement.addEventListener('click', () => {
		listElement.classList.toggle('dropdown__list_active');
	});

	listElement.addEventListener('click', event => {
		event.preventDefault();
		const dropdownItem = event.target.closest('.dropdown__item');
		if (dropdownItem) {
			const newValue = dropdownItem.textContent.trim();
			valueElement.textContent = newValue;
			listElement.classList.remove('dropdown__list_active');
		}
	});
});