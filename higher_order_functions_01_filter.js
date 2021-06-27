
// filter is a higher order function returns a filtered version of the array 


let animals = [
  { name: 'Fluffykins', species: 'rabbit'}, 
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
]


let dogs = animals.filter(animal => {
  return animal.species === 'dog'
})

console.log(dogs);