import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Dummy from '@/components/dummy'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // console.log(styles, "styles")
  return (
    <div className={styles.container}>
      {/* <Dummy /> */}
      <style jsx>
        {`
        .myspan{
          color:red;
        }
        h2{
          font-size:38px;
        }
        h3{
          font-size:28px;
        }
        `}
      </style>
      <Head>
        <title>Welcome to the Next JS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="next ,hunting coder, huntingcoder blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src="/sc.js" strategy="lazyOnload"></Script>
       */}
      <nav className={styles.mainnav}>
        <ul>
          <Link href='/'><li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/blog'><li>Blog</li></Link>
          <Link href='/contact'><li>Contact</li></Link>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className="myspan dummy">Hunting Coder</span>
        </h1>

        <div className={styles.imgWrapper}>
          <Image src='/home.avif' alt="Home Image"
            height={158}
            width={237}
            className={styles.myImg} />
        </div>

        <p className={styles.description}>
          A hunting coder by hunting coder
        </p>

        <h2>Popular Blogs</h2>
        <div className="blogs">
          <div className="blogItem">
            <h3>How to learn Javascript in 2023?</h3>
            <p>Javascript is the language used to design logic for web.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn Javascript in 2023?</h3>
            <p>Javascript is the language used to design logic for web.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn Javascript in 2023?</h3>
            <p>Javascript is the language used to design logic for web.</p>
          </div>
          <div className="blogItem">
            <h3>How to learn Javascript in 2023?</h3>
            <p>Javascript is the language used to design logic for web.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
