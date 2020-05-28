import { expect } from '../setup'
import { fibonacci } from '../../src/fibonacci'

describe('fibonacci test', () => {
  it('returns the first element of the fibonacci sequence', () => {
    expect(fibonacci(1)).to.equal(1)
  })

  it('returns the second element of the fibonacci sequence', () => {
    expect(fibonacci(2)).to.equal(1)
  })

  it('returns the third element of the fibonacci sequence', () => {
    expect(fibonacci(3)).to.equal(2)
  })

  it('returns the fourth element of the fibonacci sequence', () => {
    expect(fibonacci(4)).to.equal(3)
  })

  it('returns the fifth element of the fibonacci sequence', () => {
    expect(fibonacci(5)).to.equal(5)
  })
})
