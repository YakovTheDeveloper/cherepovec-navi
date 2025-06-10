export type Size = string | number

export const toPx = (val?: Size): string | undefined => {
  // If no value provided, return undefined
  if (val === undefined) {
    return undefined
  }

  // If value is number, add px
  if (typeof val === 'number') {
    return `${val}px`
  }

  // If value is string, check if it contains '%'
  if (typeof val === 'string') {
    if (val.includes('%')) {
      return val
    }
    // If value is string number (e.g. "60"), add px
    if (!isNaN(Number(val))) {
      return `${val}px`
    }
  }

  // Return original string value (e.g. "auto", "100%")
  return val
}
