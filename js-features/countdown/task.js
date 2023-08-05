const status = document.getElementById("status");
const timer = document.getElementById("timer");

let startValue = parseInt(timer.textContent);

function startTimer() {
  startValue--;

  timer.textContent = startValue;

  if (startValue <= 0) {
    alert('Вы победили в конкурсе!');
    clearInterval(timerInterval);
  }
}

const timerInterval = setInterval(startTimer, 1000);