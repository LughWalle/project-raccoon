import ProjectContext from 'context/ProjetoContext';
import Layout from 'layout'
import React, { useContext } from 'react'
import styles from './styles.module.scss'
import Alvo from 'assets/alvo.svg';

const Products = () => {
  const { prods } = useContext(ProjectContext);
  return (
    <Layout>
      <ul className={styles.list}>
      {prods.map(({ title, description, brand }) => {
        let color = ''
        switch (brand) {
          case 'Apple':
            color = '#0072C6'
            break;
        
            case 'Samsung':
            color = '#00AFF0'
            break;
        
            case 'OPPO':
            color = '#207245'
            break;
        
            case 'Huawei':
            color = '#CB4A32'
            break;
        
          default:
            color = '#733781'
            break;
        }
        return (
        <li key={title}>
          <div className={styles.content} style={{background: color}}>
            <Alvo />
            <div className={styles.text}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            </div>
          </div>
        </li>
      )
      })}
      </ul>
    </Layout>
  )
}

export default Products