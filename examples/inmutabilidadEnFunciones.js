// Con mutaciones
const addToList = (list, item, quantity) => {
  list.push( // modificamos el argumento `list`
    {
      item,
      quantity
    }
  )

  return list
}

////

// Sin mutaciones (inmutabilidad)
const addToList = (list, item, quantity) => {
  const newList = JSON.parse(JSON.stringify(list))

  newList.push({ // modificamos la copia del argumento
      item,
      quantity
  })

  return newList
}
