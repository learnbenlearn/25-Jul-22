let myArr = [2, 4, '3'];

// the forEach function runs a function on each element
// of the array
myArr.forEach(x => console.log(x * 2));

// the map function runs a function on each element of the array and
// returns an array of the results
console.log(myArr.map(x => x * 2));

// the filter function runs a function on each element of the array and 
// returns an array of elements that match the filter
// the filter function should have a comparison
// console.log(myArr.filter(x => x%2 == 0));

// the reduce function takes two parameters
// the previous or initial value and the value of the
// current element in the array
// it runs once per element in the array and returns
// the result
// x = 1 (initial value we specified after the comma
//  in our function), y = 2 (first element of the array)
//  => 2
// x = 2 (the result of the reduce function), y = 4
//  (the second element of the array)
//  => 8
// x = 8 (the result of the reduce function), y = 3
//  => 24
console.log(myArr.reduce((x, y) => x * y, 1));
console.log(myArr);