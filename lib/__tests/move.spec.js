const move = require('../move')

describe('move()', () => {

  it('move array item at new position', () => {

    const items = [0,1,2,3,4,5]

    expect(
      move(items, 1, 4)
    ).toEqual([
      0,2,3,1,4,5
    ])

  })

})
