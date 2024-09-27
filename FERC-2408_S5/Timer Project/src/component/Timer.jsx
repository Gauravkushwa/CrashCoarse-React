import './Timer.css';
import { useEffect, useRef, useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [initialTime, setInitialTime] = useState(0); 
  const [isActive, setActive] = useState(false);
  const [isPause, setPause] = useState(false);
  const intervalRef = useRef(null);

  const handleInput = (e) => {
    const minutes = parseInt(e.target.value);
    if (!isNaN(minutes) && minutes > 0) {
      setInitialTime(minutes * 60); 
      setTime(minutes * 60); 
    }
  };

  const formatTime = () => {
    const min = String(Math.floor(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');
    return `${min} : ${sec}`;
  };

  const handleStart = () => {
    if (time > 0) {
      setActive(true);
      setPause(false);
    }
  };

  useEffect(() => {
    if (isActive && !isPause && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(intervalRef.current);
      setActive(false);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, isPause, time]);

  const handlePause = () => {
    setPause(!isPause);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setActive(false);
    setPause(false);
    setTime(0);
    setInitialTime(0); // Reset initial time on reset
  };

  // Calculate percentage remaining for the progress bar
  const percentageRemaining = initialTime > 0 ? (time / initialTime) * 100 : 0;

  return (
    <>
      <div className="inputBox">
        <div
          id="display"
          className={time < 10 ? 'red' : 'green'}
        >
          {formatTime()}
        </div>
        <input
          type="number"
          placeholder="Enter Time in minutes"
          onChange={handleInput}
        />
      </div>
      <div className="buttons">
        <button onClick={handleStart} disabled={isActive && !isPause || time <= 0}>
          Start
        </button>
        <button onClick={handlePause} disabled={!isActive}>
          {isPause ? 'Resume' : 'Pause'}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="progress-bar-container">
        <div
          id="progress-bar"
          style={{
            width: `${percentageRemaining}%`,
            backgroundColor: time < 10 ? 'red' : 'green',
          }}
        ></div>
      </div>
    </>
  );
};

export default Timer;
