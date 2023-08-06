let clickCount = 0;
let isCookieSize= false;

const cookieImg = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

cookieImg.onclick = start;

function start() {
  if (!isCookieSize) {
    isCookieSize = true;
    cookieImg.width = 220;
  } else {
    isCookieSize = false;
    cookieImg.width = 200;
  }

  counter.textContent = clickCount++;
}