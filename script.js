const minutesEl = document.querySelector("#min");
const secondsEl = document.querySelector("#sec");
const msecondsEl = document.querySelector("#msec");
const worktimeEl = document.querySelector("#worktime");
const breaktimeEl = document.querySelector("#breaktime");
const workBtn = document.querySelector("#work");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const breakBtn = document.querySelector("#break");

let seconds = 00;
let minutes = 25;

function timer() {
  seconds--;
  if (seconds < 0) {
    minutes--;
    seconds = 59;
    minutesEl.innerHTML = minutes;
  } 
  if (seconds < 10) {
    secondsEl.innerHTML = `0${seconds}`;
  } 
  if (seconds >= 10 && seconds <= 59) {
    secondsEl.innerHTML = seconds;
  } 
  if (minutes >= 10 && minutes <= 59) {
        minutesEl.innerHTML = minutes;
  }

  if (minutes < 10) {
    minutesEl.innerHTML = `0${minutes}`;
  } 
  if (minutes === 0 && seconds === 0) {
      clearInterval(interval)
  }
}

workBtn.addEventListener("click", () => {
    minutesEl.innerHTML = worktimeEl.value;
    minutes = minutesEl.innerHTML;
    seconds = "00"
    secondsEl.innerHTML = seconds;
    clearInterval(interval);
});

startBtn.addEventListener("click", () => {
  interval = setInterval(timer, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

breakBtn.addEventListener("click", () => {
  seconds = "00"
  minutesEl.innerHTML = breaktimeEl.value;
  minutes = minutesEl.innerHTML;
  secondsEl.innerHTML = seconds;
  clearInterval(interval);
});
