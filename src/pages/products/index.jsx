import ProjectContext from "context/ProjetoContext";
import Layout from "layout";
import React, { useContext } from "react";
import styles from "./styles.module.scss";
import Alvo from "assets/alvo.svg";
import { useRouter } from "next/router";

const Products = () => {
  const { prods } = useContext(ProjectContext);
  const router = useRouter();
  return (
    <Layout>
      <div
        className={`${styles.btnX} ${styles.btn}`}
        onClick={() => router.back()}
      ></div>
      <ul className={styles.list}>
        {prods.map(({ title, description, brand }) => {
          let color = "";
          switch (brand) {
            case "Apple":
              color = "#0072C6";
              break;

            case "Samsung":
              color = "#00AFF0";
              break;

            case "OPPO":
              color = "#207245";
              break;

            case "Huawei":
              color = "#CB4A32";
              break;

            case "APPle":
              color = "#0072f7";
              break;
            default:
              color = "#733781";
              break;
          }
          return (
            <li key={title}>
              <div className={styles.content} style={{ background: color }}>
                <Alvo className={styles.icon} />
                <div className={styles.text}>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.description}>{description}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Products;
