window.addEventListener(
  "load",
  function () {
    const secondsHand = this.document.querySelector(".second-hand");
    const minutesHand = this.document.querySelector(".min-hand");
    const hourHand = this.document.querySelector(".hour-hand");
    const hours = this.document.querySelector(".hours");
    const minutes = this.document.querySelector(".minutes");

    const seconds = this.document.querySelector(".seconds");

    setInterval(
      () =>
        setTime(secondsHand, minutesHand, hourHand, hours, minutes, seconds),
      1000
    );
  },
  false
);
const getDegres = (current,timeTotal) => (current / timeTotal) * 360 + 90;
const addZero = (currentTime) => `${currentTime < 10 ? "0" : ""}${currentTime}`
const setTime = (
  secondsHand,
  minutesHand,
  hourHand,
  hours,
  minutes,
  seconds
) => {
  const now = new Date();
  const currentSeconds = now.getSeconds();
  const currentMinutes = now.getMinutes(); 
  const currentHours = now.getHours();
  secondsHand.style.transform = `rotate(${getDegres(currentSeconds,60)}deg)`;
  minutesHand.style.transform = `rotate(${getDegres(currentMinutes,60)}deg)`;
  hourHand.style.transform = `rotate(${getDegres(currentHours,12)}deg)`;
  hours.textContent = `${currentHours}:`;
  minutes.textContent = `${addZero(currentMinutes)}:`;
  seconds.textContent = `${addZero(currentSeconds)}`;
};
