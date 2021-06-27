// function calls itself 


let countDownFrom = num => {
  console.log(num);
  if (num === 0) {
    return 0; 
  } else {
    return countDownFrom(num - 1) + num
  }
}


countDownFrom(10)