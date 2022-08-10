import { useRouter } from "next/router";
import styles from "./styles.module.scss";

export default function Button({ href, className, type = 'button', target, variant }) {
  const router = useRouter();
  const newAba = () => {
    if (href) {
      if(target) {
        window.open(href, target)
      }
    }
  }
  return (
    <div className={`${styles.button} ${className}`}>
            <button onClick={newAba} type={type} style={{backgroundColor: variant}} className={styles.btn} >
                Lorem ipsum
            </button>
    </div>
    
  );
}
