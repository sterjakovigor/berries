const move = (items, from, to) => {

  const itemsWithoutFrom = [
    ...items.slice(0, from),
    ...items.slice(from + 1),
  ]

  return [
    ...itemsWithoutFrom.slice(0, to),
    items[from],
    ...itemsWithoutFrom.slice(to),
  ]

}

module.exports = move
