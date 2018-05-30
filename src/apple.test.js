import { pick, startsWith, favorite } from './apple'

describe('pick', () => {
  it('selects an apple by type and returns an object', () => {
    const type = 'gala'
    const apple = pick(type)
    expect(apple.type.toLowerCase()).toBe(type)
    expect(apple.description).toBeDefined()
  })
})

describe('startsWith', () => {
  it('Selects an apple that starts with the provided string', () => {
    const apples = startsWith('j')
    expect(apples.length).toBeGreaterThan(0)
  })
})

describe('favorite', () => {
  it('Returns a selected apple with `favorite` set to true', () => {
    const apple = favorite('gala')
    expect(apple.favorite).toBe(true)
  })
})
