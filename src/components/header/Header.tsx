import { useEffect, useState } from 'react'
import cx from 'classnames'
import jump from 'jump.js'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { NAV } from '../../constants/nav'
import { Col } from '../common/grid/Col'
import { Grid } from '../common/grid/Grid'
import { Logo, Menu } from '../common/icons'
import { HeaderMobileNav } from './HeaderMobileNav'

import styles from './Header.module.scss'

export const Header = () => {
  const router = useRouter()
  const [isRouterReady, setIsRouterReady] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollTo = (id: any) => {
    jump(id, {
      duration: 1000
    })
  }

  useEffect(() => setIsRouterReady(true), [])

  return (
    <>
      <Grid className={styles.header} as="header">
        <Col xs={3} lg={2} className={styles.logo}>
          <Link href="/">
            <Logo color="#ffffff" />
          </Link>
        </Col>
        <Col xs={{ span: 1, start: 8 }} lg={{ span: 10, start: 3 }}>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(true)}
            className={styles.menuBtn}
          >
            <Menu color="#ffffff" />
          </button>
          <nav className={styles.navigation}>
            {NAV.map(({ title, url }, index) => (
              <Link
                href={url}
                key={index}
                onClick={() => scrollTo(url)}
                className={cx(
                  styles.navigationBtn,
                  isRouterReady && router.asPath === '/' + url
                    ? styles.isActive
                    : ''
                )}
              >
                {title}
              </Link>
            ))}
          </nav>
        </Col>
      </Grid>
      <HeaderMobileNav
        nav={NAV}
        isShown={isMenuOpen}
        setIsShown={() => setIsMenuOpen(false)}
      />
    </>
  )
}
