let seconds = 10;
let correctAnswer = 0;
let incorrectAnswer = 0;


function getElement(id) {
  return document.getElementById(id);
}


function getRandomImgs() {
  var randomItem = Math.floor(Math.random(imgs.length - 1) * 10)
  return imgs[randomItem];
}


function flags() {
  coun = getRandomImgs();
  if (coun == undefined) {
    coun = getRandomImgs();
  }
  getElement("nkar").src = coun.nkar;
}


function timer() {
  getElement("time").innerHTML = seconds;
  let countdown = setInterval(function () {
    flags()
    seconds--;
    getElement("time").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
    if (seconds === 5) getElement("time").style.color = "#ff0000";
  }, 1000);
}


function check() {
  let input;
  try {
    input = document.querySelector('input[name = "option"]:checked').value;
  } catch {
    return;
  }
  correctAnswer++;
  getElement("score").innerHTML = correctAnswer;
  clearInterval(checkInterval);
}


function finish() {
  clearInterval(checkInterval);
  let percentage = 100;
  getElement("alertaccuracy").innerHTML = `der ardyunqn e ${percentage}%`;
}

let checkInterval = setInterval(check, 50);
timer();