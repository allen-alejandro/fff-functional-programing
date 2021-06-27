
// function sendRequest() {
//   let requestId = '123'
//   $.ajax({
//     url: '/myUrl', 
//     success: function(response) {
//       alert('Request' + requestID + ' returned')
//     }
//   });
// }


// console.log(sendRequest());




const outerFunction = (outerVariable) => {
  return function innerFunction(innerVariable) {
    console.log(outerVariable);
    console.log(innerVariable);
  }
}


const newFunction = outerFunction('outside')

newFunction('inside')


// more common use

const outerFunction = url => {
  fetch(url).then(() => {
    console.log(url);
  })
}