let deadCount = 0;
let lostCount = 0;
let maxDeadCount = 10;
let maxLostCount = 5;

getHole = index => document.getElementById(`hole${index}`);


function onHoleClick(event) {
	const hole = event.target;
	if (hole.classList.contains('hole_has-mole')) {
		deadCount++;
		document.getElementById('dead').textContent = deadCount;

		if (deadCount === maxDeadCount) {
			alert('Победа!');
			resetGame();
		}
	} else {
		lostCount++;
		document.getElementById('lost').textContent = lostCount;

		if (lostCount === maxLostCount) {
			alert('Вы проиграли!');
			resetGame();
		}
	}
}

function resetGame() {
	deadCount = 0;
	lostCount = 0;
	document.getElementById('dead').textContent = deadCount;
	document.getElementById('lost').textContent = lostCount;
}

for (let i = 1; i <= 9; i++) {
	const hole = getHole(i);
	hole.onclick = onHoleClick;
}