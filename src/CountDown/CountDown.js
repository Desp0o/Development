import { useEffect, useState } from "react";
import './CountDown.css'

function CountDown() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2022-12-28T20:00:08+04:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

   

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  if(timeLeft.days<10){
    timeLeft.days='0'+timeLeft.days
  }

  if(timeLeft.seconds<10){
    timeLeft.seconds='0'+timeLeft.seconds
  }

  if(timeLeft.minutes<10){
    timeLeft.minutes='0'+timeLeft.minutes
  }

  if(timeLeft.hours <10){
    timeLeft.hours = '0'+timeLeft.hours
  }


  return (
    <div className="countdonw">
      {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <p>
          <span>{timeLeft.days}</span>
          <span>:</span>
          <span>{timeLeft.hours}</span>
          <span>:</span>
          <span>{timeLeft.minutes}</span>
          <span>:</span>
          <span>{timeLeft.seconds}</span>
        </p>
      ) : (
        <p>Time is up 🔥</p>
      )}
    </div>
  );
}

export default CountDown;
