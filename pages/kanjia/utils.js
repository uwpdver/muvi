export const makeArrayWithId = (model, len) => {
  let result = []
  for (let index = 0; index < len; index++) {
    result.push({ ...model, id: index })
  }
  return result
}

export const wait = time => new Promise(resolve => setTimeout(resolve, time))