// given a non-negative integer x, return the square root of x rounded down to the nearest integer. the returned integer should be non-negative as well. you must not use any inbuilt exponent function or operator.
// example 1: x=4, output=2
// example 2: x=8,output=2
// constraints: 0<=x<=231-1

function sqrt(x) {
  if (x === 0) {
    return 0;
  }

  let left = 1;
  let right = Math.floor(x / 2) + 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

console.log(sqrt(4));
console.log(sqrt(8));
