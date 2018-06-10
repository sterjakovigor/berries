const unique = require('../unique')

describe('Utils unique', () => {

  it('return array without duplicates', () => {

    expect(
      unique([1,2,3,4,5,5,5,6,7,5,8,9])
    ).toEqual(
      [1,2,3,4,5,6,7,8,9]
    )

  })

})
