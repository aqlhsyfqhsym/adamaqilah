import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import styles from "./collage.module.scss";

export default function Index() {
  return (
    <>
      <div className={styles.description}>
        <span className={styles.textDeco}>One step Closer </span>
        <span>07 September 2024</span>
      </div>

      <div className={styles.collage}>
        <div className={styles.paragraphCollage}>
          <span className={styles.paragraph}>
            From the day we met and fell in love to the touching proposal, every
            moment of our engagement has been so special. We&rsquo;re excited to
            celebrate and begin our lives together at the ceremony!
          </span>

          <span className={styles.paragraph}>
            Our engagement ceremony was a beautiful highlight of our journey,
            complete with elegant makeup and a stunning hijab style. My lovely
            bridesmaid, who&rsquo;s also my best friend, was amazing in helping me get
            ready and made the day even more special as we celebrated our love
            and commitment
          </span>
        </div>

        {/* Image on the right */}
        <Image
          src="/images/collage/pic2.jpg"
          alt="Intro image"
          fill={true}
          priority={true}
          className={styles.image}
        />
      </div>

      <div className={styles.collage1}>
        <Image
          src="/images/collage/pic4.jpg"
          alt="Intro image"
          fill={true}
          priority={true}
          className={styles.image}
        />
        <span className={styles.paragraph}>
          Seeing my mom and Adam&rsquo;s mom finally meet at the engagement ceremony
          was truly heartwarming. Their smiles, warm hugs, and heartfelt
          conversation created a beautiful moment, symbolizing the start of a
          wonderful connection between our families as we celebrated this
          special occasion together.
        </span>
      </div>

      <div className={styles.collage2}>
        <Image
          src="/images/collage/pic3.jpg"
          alt="Intro image"
          fill={true}
          priority={true}
          className={styles.image}
        />
        <div className={styles.paragraphCollage}>
          <span className={styles.paragraph}>
            Watching my beautiful bridesmaids descend the stairs, each carrying
            a delicately adorned dulang hantaran, was an enchanting sight. Their
            graceful steps and the elegance they brought to the moment added a
            magical touch, making our special day even more unforgettable and
            filled with charm.
          </span>
        </div>
      </div>
      <div className={styles.collage3}>
        <div className={styles.paragraphCollage}>
          <span className={styles.paragraph}>
            As I began my descent down the stairs toward the mini aisle, all our
            guests waited with bright smiles and warm anticipation, their
            heartfelt excitement filling the air and making the moment even more
            magical.{" "}
          </span>
          <span className={styles.paragraph}>
            As the guests mingled and chatted, their laughter and lively
            conversations created a warm, welcoming atmosphere, where everyone
            joyfully connected and got to know each other, making the
            celebration even more delightful.
          </span>
        </div>
        <Image
          src="/images/collage/pic6.jpg"
          alt="Intro image"
          fill={true}
          priority={true}
          className={styles.image}
        />
      </div>
      <div className={styles.collage1}>
        <Image
          src="/images/collage/pic7.jpg"
          alt="Intro image"
          fill={true}
          priority={true}
          className={styles.image}
        />
        <span className={styles.paragraph}>
          As I nervously descended the stairs towards the mini pelamin, my heart
          fluttered with shyness under the gaze of so many loved ones and guests
          who had gathered to witness our engagement ceremony, their presence
          making the moment both heartwarming and unforgettable
        </span>
      </div>

      <div className={styles.collage1}>
      <span className={styles.tbc}>to be continued..</span>
      </div>


    </>
  );
}
