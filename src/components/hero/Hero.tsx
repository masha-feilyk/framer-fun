import { motion } from 'framer-motion'
import Image from 'next/image'

import { Col } from '../common/grid/Col'
import { Grid } from '../common/grid/Grid'

import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <Grid as="section" className={styles.hero} id="hero">
      <Col xs={8} sm={4} lg={9}>
        <h1 className={styles.title}>Landing boilerplate</h1>
      </Col>
      <Col
        xs={8}
        sm={{ start: 4, span: 5 }}
        lg={{ start: 7, span: 6 }}
        className={styles.img}
      >
        <Image
          src="/images/chestnut.png"
          alt="Chestnut leaf"
          width={682}
          height={784}
          priority={true}
        />
      </Col>
      <Col xs={8} lg={12}>
        <motion.div
          className={styles.animation}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%']
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </Col>
    </Grid>
  )
}
