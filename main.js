window.addEventListener("load", function () {
    const secondsHand = this.document.querySelector('.second-hand');
    const minutesHand = this.document.querySelector('.min-hand');
    const hourHand = this.document.querySelector('.hour-hand');
    setInterval(()=>setTime(secondsHand,minutesHand,hourHand), 1000);
    console.log(hourHand);
}, false);

const setTime = (secondsHand,minutesHand,hourHand) => {
    const now = new Date();
    const secondsDegrees =  ((now.getSeconds() / 60 ) * 360 ) +90;
    const minutesDegrees = ((now.getMinutes() / 60 ) * 360 ) +90;
    const hourDegrees = ((now.getHours() / 12 ) * 360 ) +90;
    console.log(hourDegrees);
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}