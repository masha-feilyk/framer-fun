import { FC, HTMLAttributes, ReactNode } from 'react'
import cx from 'classnames'

import { uiPrefix } from './Grid.utils'
import { GridBreakPoint } from './types'

import styles from './Col.module.scss'

export type BreakPointObject =
  | {
      span?: number
      start?: number
      order?: number
    }
  | number

export type Props = HTMLAttributes<HTMLDivElement> & {
  className?: string | object
  children?: ReactNode
  row?: number
  xs?: BreakPointObject
  sm?: BreakPointObject
  md?: BreakPointObject
  lg?: BreakPointObject
}

export const Col: FC<Props> = ({ className, children, ...props }) => {
  const {
    // No need to pass column config to the DOM
    xs: _0,
    sm: _1,
    md: _2,
    lg: _3,
    style,
    row,
    ...additionalProps
  } = props

  const getColVariables = () => {
    const styles: {
      [key: string]: string | number
    } = {}

    ;['xs', 'sm', 'md', 'lg'].forEach((bp) => {
      const index = bp as GridBreakPoint
      const options: BreakPointObject = props[
        index
      ] as BreakPointObject

      if (!options) return

      const variable: string = uiPrefix`${bp}`
      if (typeof options == 'number') {
        styles[variable] = options
      } else {
        if (options.span) {
          styles[variable] = options.span
        }
        if (options.start) {
          const offsetVariable: string = uiPrefix`start-${bp}`
          styles[offsetVariable] = options.start
        }
        if (options.order) {
          const offsetVariable: string = uiPrefix`order-${bp}`
          styles[offsetVariable] = options.order
        }
      }
    })

    return styles
  }

  const colVariables = getColVariables()

  return (
    <div
      {...additionalProps}
      style={{ ...style, gridRow: row, ...colVariables }}
      className={cx(styles.column, className)}
    >
      {children}
    </div>
  )
}
