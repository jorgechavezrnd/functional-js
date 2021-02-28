// Ciclo for (sin HOF(High Order Functions))
const array1 = [1, 2, 3]
const array2 = []

for(let i = 0; i < array1.length; i++) {
  array2.push(array1[i] * 2)
}

console.log(array2) // [2, 4, 6]

// Utilizando la función .map (HOF)

const array1 = [1, 2, 3]

const array2 = array1.map(function(item) {
  return item * 2
})

// Ambas formas devuelven el mismo resultado,
// sin embargo, utilizando HOFs podemos escribir
// código mucho más legible y fácil de entender
console.log(array2) // [2, 4, 6]

// Utilizando .map con arrow function

const array2 = array1.map(item => item * 2)
