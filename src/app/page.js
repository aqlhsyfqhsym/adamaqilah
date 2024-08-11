'use client';
import { useEffect } from 'react';
import styles from './page.module.css'
import Intro from '../components/Intro';
import Description from '../components/Description';
import Projects from '../components/Projects';
import CountdownTimer from '../components/Timer';

export default function Home() {
  const targetDate = "Feb 22, 2025 09:00:00";

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
      <main className={styles.main}>
        <Intro />
        <div className={styles.spacer}> 
        <Description />
        </div>
        <CountdownTimer targetDate={targetDate} />
 
      </main>
  )
}
