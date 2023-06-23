import { Col } from '../common/grid/Col'
import { Grid } from '../common/grid/Grid'

import styles from './Section.module.scss'

export const Section = () => {
  return (
    <section className={styles.section} id="section">
      <Grid>
        <Col xs={8} lg={12}>
          <p className={styles.title}>Hello Bonjour</p>
        </Col>
      </Grid>
    </section>
  )
}
