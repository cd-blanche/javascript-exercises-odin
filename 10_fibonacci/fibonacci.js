const fibonacci = function(num) {


  


  // compute fibonacci sequence up until num
  // what i need
  // the starting value 0 and 1
  // the two previous values
  // the sum of the previous two values
  // let previousValue = 0;
  // let sum = carrySum || 1;
  // let sequence = [previousValue, sum]
  // sum is equal to sum plus the previous value
  // carrySum = sum + previousValue;
  const fibonacci = [1, 1];

  if (num < 0) return 'OOPS';

  for (let i = 1; i < +num; i++) {
    fibonacci[i+1] = fibonacci[i] + fibonacci[i-1];
  }
  // return num member of the series
  return fibonacci[num -1];
};

// Do not edit below this line
module.exports = fibonacci;
