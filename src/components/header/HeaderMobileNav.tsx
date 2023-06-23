import { FC, useEffect, useState } from 'react'
import Modal from 'react-modal'
import cx from 'classnames'
import jump from 'jump.js'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Close, Logo } from '../common/icons'

import styles from './HeaderMobileNav.module.scss'

export type Props = {
  nav: { url: string; title: string }[]
  isShown: boolean
  setIsShown: () => void
}

export const HeaderMobileNav: FC<Props> = ({
  nav,
  isShown,
  setIsShown
}) => {
  const router = useRouter()
  const [isRouterReady, setIsRouterReady] = useState(false)
  const scrollTo = (id: any) => {
    jump(id, {
      duration: 1000
    })
  }

  useEffect(() => setIsRouterReady(true), [])

  return (
    <Modal
      closeTimeoutMS={800}
      isOpen={isShown}
      onRequestClose={setIsShown}
      bodyOpenClassName="isOverflowHidden"
      overlayClassName={styles.overlay}
      className={styles.wrapper}
      parentSelector={() => document.getElementById('main')!}
    >
      <div className={styles.content}>
        <Logo color="#ffffff" />
        <button
          type="button"
          onClick={setIsShown}
          className={styles.btn}
        >
          <Close color="#ffffff" />
        </button>
        <nav className={styles.navigation}>
          {nav.map(({ title, url }, index) => (
            <Link
              href={url}
              key={index}
              onClick={() => {
                setIsShown()
                scrollTo(url)
              }}
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
      </div>
    </Modal>
  )
}
