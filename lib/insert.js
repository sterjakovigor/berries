const insert = (items, index, ...newItems) => {

  return [
    ...items.slice(0, index),
    ...newItems,
    ...items.slice(index)
  ]

}

module.exports = insert
