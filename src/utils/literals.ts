export const mergeLiteralArgs = (
  [start, ...strings]: TemplateStringsArray,
  args: any[]
): string => {
  return start + args.map((arg, i) => arg + strings[i]).join('')
}
