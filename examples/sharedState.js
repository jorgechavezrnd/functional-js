// Intento #1
const a = {
  value: 2
}

const addOne = () => a.value += 1

const timesTwo = () => a.value *= 2

addOne()
timesTwo()

console.log(a.value) // 6

// Sin embargo, si ejecutamos las mismas funciones en orden invertido
// obtenemos resultados diferentes

timesTwo()
addOne()

console.log(a.value) // 5 !??

/////////////

const b = {
  value: 2
}

const addOne = b => Object.assign({}, b, {value: b.value + 1})

const timesTwo = b => Object.assign({}, b, {value: b.value * 2})

addOne(b)
timesTwo(b)

// El resultado siempre es el mismo a pesar de
// ejecutar las funciones en orden diferente

timesTwo(b)
addOne(b)

console.log(b.value) // 2
