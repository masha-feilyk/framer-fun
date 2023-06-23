import { FC, SVGProps } from 'react'

import Close from '../../../assets/icons/close.svg?svgr'
import Logo from '../../../assets/icons/logo.svg?svgr'
import Menu from '../../../assets/icons/menu.svg?svgr'

export { Close, Logo, Menu }

export type IconProps = SVGProps<SVGSVGElement> & {
  rotate?: number
  color?: string
}

export type SvgrComponent = FC<IconProps>
