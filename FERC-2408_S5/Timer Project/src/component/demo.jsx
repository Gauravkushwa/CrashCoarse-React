import React, { useState, useEffect } from 'react';
import './Demo.css';

function Demo() {
  const [timeLeft, setTimeLeft] = useState(30); // Set initial time to 30 seconds
  const totalTime = 30;

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      // Cleanup interval on component unmount
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  // Calculate the percentage remaining for the progress bar
  const percentageRemaining = (timeLeft / totalTime) * 100;

  return (
    <div className="timer-container">
      <h1
        className={timeLeft < 10 ? 'red' : 'green'}
      >
        {timeLeft > 0 ? timeLeft : "Time's up!"}
      </h1>
      <div className="progress-bar-container">
        <div
          id="progress-bar"
          className={timeLeft < 10 ? 'red-bg' : 'green-bg'}
          style={{ width: `${percentageRemaining}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Demo;
