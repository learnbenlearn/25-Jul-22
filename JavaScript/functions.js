// because functions are first class citizens in JavaScript, we can treat them
// like any other value and assign them to variables
// when we assign a function to a variable we use a function expression

// the declaration for a function expression doesn't include a name for the function
// i.e. it's an anonymous function
let doubleFunc = function(a) {
    return a * 2;
}

let doubleArrayElements = function(a) {
    for(let i = 0; i < a.length; i++) {
        a[i] *= 2;
    }
}

// we can also declare function expressions through arrow functions, which take 
// the form (parameters) => {function body}
// if an arrow function only has one parameter, we can omit the parentheses around
// the function
// if the arrow function only has one line, we can omit the curly braces, and 
// the result of that line of code will be the value returned from the function 
let halfFunc = a => a/2;

// primitive variables are passed by value to functions, so the value of numOne
// remains the same (2) after the call to doubleFunc()
let numOne = 2;
console.log(doubleFunc(numOne));
console.log(numOne);

// objects are passed by reference to functions
// i.e. rather than passing a copy of the object, a reference to the memory location
// where the object is stored is passed
// so if we make a change to the properties of an object (like changing the 
// elements in an array), the changes are made to the original object
let myArr = [1, 2];
console.log(doubleArrayElements(myArr));
console.log(myArr);