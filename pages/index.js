import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MakesApiCall } from '../components/MakesApiCall/MakesApiCall'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Site</title>
        <meta name="description" content="Why are you even here?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h3>Unclean rot is unclean</h3>
        <MakesApiCall />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
