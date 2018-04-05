const asyncCompose = methods => async (value = {}) => {

  for (method of methods) {

    value = await method(value)

  }

  return value

}

module.exports = asyncCompose
