const MINUTES = 25;
const SECONDS_INIT = 0;
const TOTAL_SECONDS = 59;

let timer;
let isRunning = false;
let [minutes, seconds] = [MINUTES, SECONDS_INIT];

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

const updateDisplay = () => {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
};

const toggleResetButton = () => {
  // Disable the reset button when the timer is in its initial state
  resetButton.disabled = !(
    isRunning ||
    minutes < MINUTES ||
    (minutes === MINUTES && seconds > SECONDS_INIT)
  );
};

const startTimer = () => {
  if (isRunning) return;

  isRunning = true;
  startButton.textContent = "Pause";
  toggleResetButton();

  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        stopTimer();
        notifyUser();
        resetTimer();
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateDisplay();
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timer);
  isRunning = false;
  startButton.textContent = "Start";
  toggleResetButton();
};

const resetTimer = () => {
  [minutes, seconds] = [MINUTES, SECONDS_INIT];
  stopTimer();
  updateDisplay();
  toggleResetButton();
};

const notifyUser = () => {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icon.png",
    title: "Pomodoro Timer",
    message: "Time’s up! Take a break!",
    priority: 2,
  });
};

startButton.addEventListener("click", () =>
  isRunning ? stopTimer() : startTimer()
);
resetButton.addEventListener("click", resetTimer);

updateDisplay();
toggleResetButton(); // Initially disable the reset button
