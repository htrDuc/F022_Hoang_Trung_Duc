export type ObjectAsEnum<T> = T[keyof T]

export const roundNumber = (num: number, digit = 1000000) => {
  return Math.round((num + Number.EPSILON) * digit) / digit
}
