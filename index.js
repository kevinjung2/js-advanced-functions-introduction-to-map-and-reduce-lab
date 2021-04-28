// Your code here
function mapToNegativize(sourceArray) {
  let negative = []
  for (let number in sourceArray) {
    negative.push(sourceArray[number] * -1)
  }
  return negative
}

function mapToNoChange(sourceArray) {
  return sourceArray.slice(0)
}

function mapToDouble(sourceArray) {
  let double = []
  for (let number in sourceArray) {
    double.push(sourceArray[number] * 2)
  }
  return double
}

function mapToSquare(sourceArray) {
  let square = []
  for (let number in sourceArray) {
    square.push(sourceArray[number] ** 2)
  }
  return square
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = startingPoint
  for (let number in sourceArray) {
    total += sourceArray[number]
  }
  return total
}

function reduceToAllTrue(sourceArray) {
  for (let item in sourceArray) {
    if (!sourceArray[item]) {
      return false
    }
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
  for (let item in sourceArray) {
    if (!!sourceArray[item]) {
      return true
    }
  }
  return false
}
