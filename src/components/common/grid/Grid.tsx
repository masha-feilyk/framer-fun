import React, {
  FC,
  HTMLAttributes,
  ReactHTML,
  ReactNode
} from 'react'
import cx from 'classnames'

import styles from './Grid.module.scss'

export type GridProps = HTMLAttributes<HTMLElement> & {
  as?: keyof ReactHTML
  className?: string | object
  children?: ReactNode
}

export const Grid: FC<GridProps> = ({
  as: Wrapper = 'div',
  className,
  children,
  ...props
}) => {
  return (
    <Wrapper {...props} className={cx(styles.grid, className)}>
      {children}
    </Wrapper>
  )
}
