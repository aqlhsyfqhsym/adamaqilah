import styles from "./about.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.spacer3}>
        <div
          className={styles.contentTwo}
          style={{ alignItems: "center", justifyContent: "flex-end" }}
        >
          <div className={styles.aboutMe2}>
            <p>
              <span className={styles.textDeco}>Hey! </span> I'm Aqilah, <br />
              <span style={{ marginLeft: "50px" }}>
                a twenty-six years
                <span className={styles.textDeco}>old </span>
              </span>
              <br />
              front-end developer. Currently <br />
              <span style={{ marginLeft: "50px" }}>
                based in <span className={styles.textDeco}>Shah Alam</span>
              </span>
            </p>
          </div>
          <div className={styles.imageWrap}>
            <img src="img/me1.png" alt="" style={{ width: "95%" }} />
          </div>
        </div>
      </div>
    </main>
  );
}
