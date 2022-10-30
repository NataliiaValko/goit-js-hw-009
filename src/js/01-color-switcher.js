const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let intervalId = null;
const SWITCH_INTERVAL = 1000;

const onStartSwitchInterval = () => {
  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, SWITCH_INTERVAL);
};

const onStopSwitchColor = () => {
  clearInterval(intervalId);
  startBtnRef.disabled = false;
  stopBtnRef.disabled = true;
};

stopBtnRef.disabled = true;
startBtnRef.addEventListener('click', onStartSwitchInterval);
stopBtnRef.addEventListener('click', onStopSwitchColor);
