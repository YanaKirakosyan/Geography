let seconds = 10;
let correct;
let correctAnswer = 0;
let incorrectAnswer = 0;


function getElement(id) {
  return document.getElementById(id)
  
}


function getRandomImgs() {
  var randomItem = Math.floor(Math.random(imgs.length - 1) * imgs.length)
  return imgs[randomItem];
}

function main(){
  let options =[]
  let tipe;
  const maxOptions =4;

  while (options.length < maxOptions){
    let coun = getRandomImgs();
    if(options.length  == 0){
       tipe= coun.tipe
    }
  
    if (options.indexOf(coun) === -1 && tipe==coun.tipe ){
      options.push(coun);
    }
  }

  for (let i=0; i< options.length; i++){
    getElement(`option${i+1}input`).addEventListener('click',check);
  }
  for (let i=0; i< options.length; i++){
    getElement(`option${i+1}input`).innerHTML = options[i].name;
    getElement(`option${i+1}input`).value = options[i].name
  }
  correct = options[Math.round(Math.random() * (options.length -1))]
  getElement("nkar").src = correct.nkar
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


function check(event) {

  let input;
  try {
    input = event.target.value;
  } catch {
    return;
  }
  if ( input=== correct.name){
     correctAnswer++;
     getElement("score").innerHTML = correctAnswer;
  }
  else{
    incorrectAnswer++
  }
 
 main()
}



function finish() {
  clearInterval(checkInterval);
  let percentage = 100;
  getElement("alertaccuracy").innerHTML = `der ardyunqn e ${percentage}%`;
}

// let checkInterval = setInterval(check, 50);
main();
timer();





function flags() {
  coun = getRandomImgs();
  if (coun == undefined) {
    coun = getRandomImgs();
  }
  getElement("nkar").src = coun.nkar;
}