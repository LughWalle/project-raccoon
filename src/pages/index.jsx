import Head from 'next/head';
import Header from 'components/header';
// import Image from 'next/image'
import styles from './styles.module.scss';
import Main from 'components/main';
import ModalLogin from 'components/modal';
import Layout from 'layout';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lorem ipsum</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <Main />
      <ModalLogin />
      </Layout>
      
    </div>
  )
}
