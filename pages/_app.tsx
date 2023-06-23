import Modal from 'react-modal'
import cx from 'classnames'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import Head from 'next/head'

import '../styles/globals.scss'
import styles from '../styles/App.module.scss'

Modal.setAppElement('#main')

const aventa = localFont({
  src: [
    {
      path: '../src/fonts/Aventa/Aventa-Medium.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../src/fonts/Aventa/Aventa-SemiBold.woff2',
      weight: '500',
      style: 'normal'
    }
  ],
  display: 'swap'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cx(styles.main, aventa.className)} id="main">
      <Head>
        <title>Landing boilerplate</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Component {...pageProps} />
    </main>
  )
}
