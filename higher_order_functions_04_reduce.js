var fs = require('fs');

var data = fs.readFileSync('data.txt', 'utf8').trim().split('\n').map(line => line.split('  '))
.reduce((customers, dataLine) => {
  customers[dataLine[0]] = customers[dataLine[0]] || [];
  customers[dataLine[0]].push({
    name: dataLine[1],
    price: dataLine[2],
    quantity: dataLine[3]
  })
  return customers
}, {})


console.log(data);

