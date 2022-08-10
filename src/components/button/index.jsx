import Link from "next/link";
import Ripples from "react-ripples";
import styles from "./styles.module.scss";

export default function Button({ href, className, type }) {
  return (
    <div className={`${styles.button} ${className}`}>
        <Ripples className={styles.ripples} color="#fff">
            <button href={href} target="_blank" className={styles.text} >
                Lorem ipsum
            </button>
        </Ripples>
    </div>
    
  );
}
