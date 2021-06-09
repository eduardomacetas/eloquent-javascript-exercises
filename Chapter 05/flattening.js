// Use "reduce" and "concat"
// let arrays = [[1, 2, 3], [4, 5], [6]];
// → [1, 2, 3, 4, 5, 6]

function flattening(arrays) {
  return arrays.reduce((flatten, current) => flatten.concat(current));
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flattening(arrays));
