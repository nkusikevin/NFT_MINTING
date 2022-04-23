import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT</title>
        <meta name="description" content="NFT Minting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
