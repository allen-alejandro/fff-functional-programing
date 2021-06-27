/*
when function does not take all arguments up front

function accepts argument returns function that takes another argurment returns funtion takes another argument and returns output

*/


let dragon = 
  name => 
    size => 
      element => 
        name + ' is a ' +
        size + ' dragon that breates ' +
        element + '!'


let output = dragon('Karo')('large')('ice')

console.log(output);

