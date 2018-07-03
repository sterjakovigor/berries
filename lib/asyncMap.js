module.exports = (items, mapper) => {

  return new Promise((resolve, reject) => {

    if (items.length == 0) resolve([])

    let counter = 0

    let results = []

    items.forEach((item, index) => {

      mapper(item, index, (error, result) => {

        if (error) {

          reject(error)

        } else {

          results[index] = result

          if (items.length == ++counter) {

            resolve(results)

          }

        }

      })

    })

  })

}
