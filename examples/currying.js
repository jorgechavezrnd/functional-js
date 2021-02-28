const buildSum = a => b => a + b
const tag = t => content => `<${t}>${content}</${t}>`

// Sin Currying
function sumThreeNumbers(a, b, c) {
  return a + b + c
}

console.log(sumThreeNumbers(1, 2, 3)) // 6

// Con Currying
function sumThreeNumber(a) {
  return function(b) {
    return function(c) {
      return a + b + c
    }
  }
}

console.log(sumThreeNumbers(1)(2)(3)) // 6
