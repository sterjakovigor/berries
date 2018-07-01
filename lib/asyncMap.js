module.exports = (items, mapper, callback) => {

  return new Promise((resolve, reject) => {

    if (items.length == 0) resolve([])

    let counter = 0

    let results = []

    items.forEach((item, index) => {

      new Promise((_resolve, _reject) => {

        mapper(item, index, (error, result) => {

          if (error) {

            _reject(error)

          } else {

            _resolve(result)

          }

        })

      }).then((result) => {

        results[index] = result

        if (items.length == ++counter)
          resolve(results)

      }).catch((error) => {

        reject(error)

      })

    })


  })

}
