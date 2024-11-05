import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import styles from "./collage.module.scss";
import "./collage.css";

export default function Index() {
  return (
    <>
      <div className={styles.description}>
        <span className={styles.textDeco}>Enggagement Day</span>
        <span>07 September 2024</span>
      </div>

      <div className={styles.collageRow}>
        <Image
          src="/images/collage/pic1.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/pic25.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/pic3.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
      </div>

      {/* <div className={styles.collageRow}>
        <Image
          src="/images/collage/pic9.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/me.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/pic8-1.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
      </div> */}

      <div className={styles.collageRow}>
        <Image
          src="/images/collage/pic4.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/pic11.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/pic7.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
      </div>

      <div className={styles.collageRow}>
        <Image
          src="/images/collage/pic14.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/pic12.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/pic17.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
      </div>

      <div className={styles.collageRow}>
        <Image
          src="/images/collage/pic15.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/pic13.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/pic16.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.collageRow}>
        <Image
          src="/images/collage/pic18.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/pic20.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/pic19.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
      </div>

      <div className={styles.collageRow}>
        <Image
          src="/images/collage/pic21.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/pic22.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/pic24.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
      </div>
    </>
  );
}
