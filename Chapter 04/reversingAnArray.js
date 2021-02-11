function reverseArray(array) {
  let reverse = [];
  for (let i = array.length - 1; i >= 0; i -= 1) {
    reverse.push(array[i]);
  }
  return reverse;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let copy = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = copy;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
