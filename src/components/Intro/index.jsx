"use client";
import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Index() {
  const background = useRef(null);
  const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=500px",
      },
    });

    timeline
      .from(background.current, { clipPath: `inset(15%)` })
      .to(introImage.current, { height: "200px" }, 0);
  }, []);

  return (
    <div className={styles.homeHeader}>
      <div className={styles.backgroundImage} ref={background}>
          <Image 
                    src={'/images/background.jpg'}
                    fill={true}
                    alt="background image"
                    priority={true}
                />
        {/* <video autoPlay muted loop>
          <source src="/videos/background-video.mp4" type="video/mp4" />
        </video> */}
         <Image 
                    src={'/images/background-us.jpg'}
                    fill={true}
                    alt="background image"
                    priority={true}
                />
      </div>
      <div className={styles.intro}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className={styles.introImage}
        >
          <Image
            src={"/images/us-1.jpg"}
            alt="intro image"
            fill={true}
            priority={true}
          />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">
          about us.
        </h1>
      </div>
    </div>
  );
}
