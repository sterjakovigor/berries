const insert = require('../insert')

describe('Insert', () => {

  it('create new array with new item', () => {

    const items = [1,4,5]

    const newItems = insert(items, 1, 2, 3)

    expect(newItems).toEqual([
      1,2,3,4,5
    ])

  })

})
