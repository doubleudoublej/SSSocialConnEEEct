import React, { useState, useEffect } from "react";
import "../CountdownTimer.css"; // Updated CSS file

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!timeLeft) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]); // Depend only on `targetDate`

  if (!timeLeft) {
    return (
      <div className="text-center text-red-600 font-bold text-4xl">
        Time's up!
      </div>
    );
  }

  return (
    <div className="countdown-timer">
      {Object.entries(timeLeft).map(([interval, value]) => (
        <div key={interval} className="timer-card">
          <div className="timer-value">{String(value).padStart(2, "0")}</div>
          <div className="timer-label">{interval}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
