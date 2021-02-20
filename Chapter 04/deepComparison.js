function deepEqual(value1, value2) {
  // values should be compared directly
  if (value1 === value2) return true;

  // typeof x == "object" && x != null
  if (
    value1 == null ||
    value1 != "object" ||
    value2 == null ||
    value2 != "object"
  )
    return false;

  // same number of properties
  // (the lengths of the property lists are the same)
  let objectKey1 = Object.keys(value1);
  let objectKey2 = Object.keys(value2);
  if (objectKey1.length != objectKey2.length) return false;

  // all properties in one also exist in the other
  for (let key of objectKey1) {
    if (!objectKey2.includes(key) || !deepEqual(value1[key], value2[key]))
      return false;
  }

  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
