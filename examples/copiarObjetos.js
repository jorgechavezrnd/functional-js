let a = 1
let b = a

console.log(a, b) // 1 1

b += 1

console.log(a, b) // 1 2

////

let car = {
  color: 'red',
  year: 2019,
  km: 0,
}

let newCar = car // ambas variables apuntan a la misma dirección de memoria
newCar.color = 'blue';

console.log(car, newCar) // Ambos objetos tienen color azul, no solo `newCar`

////

let car2 = {
  color: 'red',
  year: 2019,
  km: 0,
}

let newCar2 = Object.assign({}, car2) // Se hace una copia del objeto car, PERO SOLO DEL PRIMER NIVEL, SI SE TIENE UN SUBOBJETO COMO OTRO ATRIBUTO, `car2` y `newCar2` apuntarian al mismo subobjeto
newCar2.color = 'blue'

console.log(car2, newCar2) // `car2` es de color rojo y `newCar2` de color azul

////

let car3 = {
  color: 'red',
  year: 2019,
  km: 0,
  owner: {
    name: 'David',
    age: 25
  }
}

let newCar3 = JSON.parse(JSON.stringify(car3)) // Se hace una copia de todo el objeto, SIN IMPORTAR CUANTOS NIVELES DE SUBOBJETOS SE TENGA
newCar3.owner.age += 1

console.log(car3, newCar3) // el dueño de `newCar3` es un año mayor al dueño de `car3`
