import { Footer } from '../src/components/footer/Footer'
import { Header } from '../src/components/header/Header'
import { Hero } from '../src/components/hero/Hero'
import { Section } from '../src/components/section/Section'

import styles from '../styles/App.module.scss'

export default function HomePage() {
  return (
    <div id="content" className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Hero />
        <Section />
      </div>
      <Footer />
    </div>
  )
}
