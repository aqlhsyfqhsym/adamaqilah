import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
 import styles from './about.module.scss';

// const phrases = ["Our path crossed in 2022 in Cyberjaya", "After two years of friendship,", "we decided it was time", "to tie the knot.", "Here our sharing lovely moment"]

export default function Index() {

  return (
    <div className={styles.description} >
            <AnimatedText> <span className={styles.textDeco}>Hey! </span> this is our love journey,  </AnimatedText>
            <AnimatedText>   <span style={{ marginLeft: "50px" }}>
              our paths crossed in 2022 at {" "}
                <span className={styles.textDeco}>Cyberjaya </span>
              </span> </AnimatedText>
            <AnimatedText>And now you’re here to </AnimatedText>
            <AnimatedText>  <span style={{ marginLeft: "50px" }}>
                {" "}
                witness us <span className={styles.textDeco}>tying the knot ♡</span>{" "}
              </span> </AnimatedText>
        
    </div>
  )
}

function AnimatedText({children}) {
    const text = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=400px bottom",
            },
            opacity: 0,
            left: "-200px",
            ease: "power3.Out"
        })
    }, [])

    return <p ref={text}>{children}</p>
}