
var x;
var startstop = 0;
function startStop() {
  startstop = startstop + 1;
  if (startstop === 1) {
    start();
    document.getElementById("start").innerHTML = "Stop";
  } 
  else if (startstop === 2) {
    document.getElementById("start").innerHTML = "Start";
    startstop = 0;
    stop();
  }
}

//Start
function start() {
  x = setInterval(timer, 10);
}
//Stop
function stop() {
  clearInterval(x);
}

var milisec = 0;
var sec = 0;
var min = 0;
var hour = 0;


//Luu gia tri CheckTime
var miliSecOut = 0;
var secOut = 0;
var minOut = 0;
var hourOut = 0;

function timer() {
  miliSecOut = checkTime(milisec);
  secOut = checkTime(sec);
  minOut = checkTime(min);
  hourOut = checkTime(hour);

  milisec = ++ milisec;

  if (milisec === 100) {
    milisec = 0;
    sec = ++sec;
  }

  if (sec == 60) {
    min = ++min;
    sec = 0;
  }

  if (min == 60) {
    min = 0;
    hour = ++hour;
  }
  document.getElementById("miliseconds").innerHTML = miliSecOut;
  document.getElementById("seconds").innerHTML = secOut;
  document.getElementById("minutes").innerHTML = minOut;
  document.getElementById("hours").innerHTML = hourOut;

}

//Them 0 khi i < 10
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//Reset Button
function reset() {
  milisec = 0;
  sec = 0;
  min = 0
  hour = 0;

  document.getElementById("miliseconds").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("hours").innerHTML = "00";
}