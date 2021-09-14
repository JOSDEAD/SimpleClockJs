window.addEventListener("load", function () {
    const secondsHand = this.document.querySelector('.second-hand');
    const minutesHand = this.document.querySelector('.min-hand');
    const hourHand = this.document.querySelector('.hour-hand');   
    const hours = this.document.querySelector('.hours');
        const minutes = this.document.querySelector('.minutes');

        const seconds = this.document.querySelector('.seconds');

     setInterval(()=>setTime(secondsHand,minutesHand,hourHand,hours,minutes,seconds), 1000);
    console.log(hours);
}, false);

const setTime = (secondsHand,minutesHand,hourHand,hours,minutes,seconds) => {
    const now = new Date();
    const secondsDegrees =  ((now.getSeconds() / 60 ) * 360 ) +90;
    const minutesDegrees = ((now.getMinutes() / 60 ) * 360 ) +90;
    const hourDegrees = ((now.getHours() / 12 ) * 360 ) +90;
    console.log(hourDegrees);
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    hours.textContent = `${now.getHours()}:`;    
    minutes.textContent = `${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}:`;
    seconds.textContent = `${now.getSeconds() < 10 ? '0' : ''}${now.getSeconds()}`;

}