import React, { useContext } from "react";
import Button from "components/button";
import styles from "./styles.module.scss";
import ProjectContext from "context/ProjetoContext";

function Main() {
  const {

  } = useContext(ProjectContext);
  return (
    <main className={styles.main} id='main'>
      <div className={styles.bg}>
      <div className={styles.text}>
        <h1 className={styles.title}>Lorem ipsum</h1>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <Button href="https://github.com/LughWalle" target='_blank' variant='#00A4EF' className={styles.mainBtn} />
      </div>
      </div>
    </main>
  );
}

export default Main;
