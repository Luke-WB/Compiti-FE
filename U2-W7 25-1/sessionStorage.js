let counterValue = sessionStorage.getItem("lastCounterValue") || 0;
const paragraphReference = document.querySelector(".timer");

const increaseCounter = function () {
  counterValue++;
  paragraphReference.innerHTML = counterValue;
  sessionStorage.setItem("lastCounterValue", counterValue);
};

setInterval(increaseCounter, 1000);
