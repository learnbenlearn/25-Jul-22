// we declare objects in javascript through object literals
// the object is delimited by curly braces
// a key and its corresponding value are separated by colons
// if we have multiple key-value pairs, we separate them by commas
let myObject = {
    keyOne: 1,
    keyTwo: 2
}

// we can retrieve the value of a key through dot notation
console.log(myObject.keyOne);

// or through square bracket notatation
console.log(myObject["keyTwo"]);

// we can retrieve an array of all keys for an object through the Object.keys() method
console.log(Object.keys(myObject));

// we can retrieve an array of all values for an object through the Object.values() method
console.log(Object.values(myObject));

// we can retrieve an array of arrays (where each inner array is a key-value pair from
// the object) through the Object.entries() method
console.log(Object.entries(myObject));