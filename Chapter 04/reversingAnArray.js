function reverseArray(array) {
  let reverse = [];
  console.log(array.length);
  for (let i = array.length - 1; i >= 0; i -= 1) {
    reverse.push(array[i]);
  }
  return reverse;
}

console.log(reverseArray(["A", "B", "C"]));
