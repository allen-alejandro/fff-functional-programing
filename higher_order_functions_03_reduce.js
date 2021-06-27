let orders = [
  { amount: 250}, 
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
]


let sumTotal = orders.reduce((accum, value) => {
  return accum + value.amount
}, 0)

console.log(sumTotal);