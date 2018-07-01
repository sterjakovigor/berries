const asyncMap = require('../asyncMap')

describe('Async map', () => {

  it('return promise with indexes', (done) => {

    const mapper = (item, index, callback) => {

      setTimeout(() => {

        callback(null, index)

      }, (3 - index) * 10)

    }

    asyncMap([null, null, null], mapper).then((items) => {

      expect(items).toEqual([0,1,2])

      done()

    })

  })

  it('return promise with undefined variable error', (done) => {

    const mapper = (item, index, callback) => {
      undefinedVariable
    }

    asyncMap([1, 2, 3], mapper).catch((error) => {

      expect(error.message).toBe('undefinedVariable is not defined')

      done()

    })

  })

  it('return promise with increaased by one items', (done) => {

    const mapper = (item, index, callback) => {

      setTimeout(() => {

        callback(null, item * 2)

      }, 10)

    }

    asyncMap([1, 2, 3], mapper).then((items) => {

      expect(items).toEqual([2,4,6])

      done()

    })

  })

  it('return promise with empty array items', (done) => {

    const mapper = () => {}

    asyncMap([], mapper).then((items) => {

      expect(items).toEqual([])

      done()

    })

  })

})
