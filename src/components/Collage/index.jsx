import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import styles from "./collage.module.scss";
import "./collage.css";

export default function Index() {
  return (
    <>
      <div className={styles.description}>
        <span className={styles.textDeco}>Engagement Day</span>
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
          src="/images/collage/pic35-1.jpg"
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
          src="/images/collage/pic36.jpg"
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
          src="/images/collage/pic26.jpg"
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

      <div className={styles.collageRow}>
        <Image
          src="/images/collage/pic27.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/pic31.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/pic28.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.collageRow}>
        <Image
          src="/images/collage/pic30.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/pic29-1.jpg"
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
          src="/images/collage/pic32.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/pic34.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
        <Image
          src="/images/collage/pic33.jpg"
          alt="Intro image"
          width={400}
          height={300}
          className={styles.image}
        />
      </div>
    </>
  );
}
