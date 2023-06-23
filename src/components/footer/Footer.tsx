import { Col } from '../common/grid/Col'
import { Grid } from '../common/grid/Grid'

import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Grid>
        <Col xs={8} lg={12}>
          This is footer
        </Col>
      </Grid>
    </footer>
  )
}
