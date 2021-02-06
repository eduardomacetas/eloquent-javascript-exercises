function range(start, end, step) {
  let numbers = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      numbers.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      numbers.push(i);
    }
  }
  return numbers;
}

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return sum;
}

console.log(range(1, 10, 1));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10, 1)));
