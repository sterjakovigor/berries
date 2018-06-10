module.exports = (items) => {

  return items.filter((item, index) => {

    return items.indexOf(item) == index

  })

}
