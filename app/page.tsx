import styles from "../public/page.module.css";
import {Viewport} from "next";

export const viewport: Viewport = {
    colorScheme: "light"
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
