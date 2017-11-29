const divideItems = (items, from, to) => {

  return {
    left: items.slice(0, from),
    right: items.slice(to),
  }

}

const move = (items, from, to) => {

  const item = items[from]

  const dividedItemsWithoutFrom = divideItems(items, from, from + 1)

  const itemsWithoutFrom = [
    ...dividedItemsWithoutFrom.left,
    ...dividedItemsWithoutFrom.right
  ]

  const dividedItemsWithoutTo = divideItems(itemsWithoutFrom, to - 1, to - 1)

  return [
    ...dividedItemsWithoutTo.left,
    item,
    ...dividedItemsWithoutTo.right,
  ]

}

module.exports = move
