import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js A/B Testing</title>
        <meta name="description" content="Next.js A/B Testing Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js A/B Testing Demo
        </h1>

        <div className={styles.grid}>
          <Link href="/marketing" passHref>
            <div className={styles.card}>
              <h2>Using Next.js Middleware</h2>
              <p>Using middleware to route to different SSG endpoints</p>
            </div>
          </Link>

          <Link href="/marketing-optimize" passHref>
            <div className={styles.card}>
              <h2>Using Google Optimize</h2>
              <p>Same content where A/B tests deployed via client-side optimize.js library</p>
            </div>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
