let seconds = 10;

function getElement(id) {
  return document.getElementById(id);
}

function timer() {
  getElement("time").innerHTML = seconds;
  let countdown = setInterval(function () {
    seconds--;
    getElement("time").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
    if (seconds === 5) getElement("time").style.color = "#ff0000";
  }, 1000);
}


timer();