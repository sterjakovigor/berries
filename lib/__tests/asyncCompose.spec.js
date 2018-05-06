const asyncCompose = require('../asyncCompose')

describe('Async compose', () => {

  fit('return new object', async () => {

    const methods = [
      async (memo) => ({ ...memo, one: 1 }),
      async (memo) => ({ ...memo, two: 2 }),
    ]

    expect(
      await asyncCompose(...methods)()
    ).toEqual({
      one: 1,
      two: 2
    })

  })

})
