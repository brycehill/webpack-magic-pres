import all from './data/apples.js'

export const pick = type =>
  all.find(apple => apple.type.toLowerCase() == type.toLowerCase())

export const startsWith = char =>
  all.filter(apple => new RegExp(`^${char}`, 'i').test(apple.type))

export const favorite = type => {
  const apple = pick(type)
  return apple ? { ...pick(type), favorite: true } : null
}
