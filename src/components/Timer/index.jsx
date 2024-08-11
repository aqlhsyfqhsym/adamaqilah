import React, { useEffect, useState } from "react";
import styles from "./timer.module.scss";
 
export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
 
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function getTimeLeft(targetDate) {
    const now = new Date().getTime();
    const countDownDate = new Date(targetDate).getTime();
    const distance = countDownDate - now;

    if (distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className={styles.timerContainer}>
    
      <h1> {days} days</h1>
      <h1> {hours} hours </h1>
      <h1> {minutes} minutes </h1>
      <h1> {seconds} seconds </h1>
    </div>
  );
}
