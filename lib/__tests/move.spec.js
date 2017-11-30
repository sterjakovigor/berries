const move = require('../move')

describe('move()', () => {

  it('move [0,1,2,3,4,5] 1 to 4', () => {

    const items = [0,1,2,3,4,5]

    expect(
      move(items, 1, 4)
    ).toEqual([0,2,3,4,1,5])

  })

  it('move [0,1,2,3,4,5] 0 to 1', () => {

    const items = [0,1,2,3,4,5]

    expect(
      move(items, 0, 1)
    ).toEqual([1,0,2,3,4,5])

  })

})
