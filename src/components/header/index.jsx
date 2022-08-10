import Button from "components/button";
import Navigation from "components/navigation";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <h1>LOREM</h1>
          <p>IPSUM SIT AMET</p>
        </div>
        <nav className={styles.nav}>
          <Navigation />
          <Button href='https://github.com/LughWalle' target='_blank' variant='#002050' className={styles.navBtn} />
        </nav>

      </div>
    </header>
  );
}
