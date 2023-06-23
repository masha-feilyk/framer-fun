import { mergeLiteralArgs } from '../../../utils/literals'

export const VARIABLE_PREFIX = 'ui-'

export const uiPrefix = (
  strings: TemplateStringsArray,
  ...args: any[]
): string => {
  return '--' + VARIABLE_PREFIX + mergeLiteralArgs(strings, args)
}
