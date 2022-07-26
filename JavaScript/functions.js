let doubleFunc = function(a) {
    return a * 2;
}

let doubleArrayElements = function(a) {
    return a.map(x => x * 2);
}

let halfFunc = a => a/2;

let numOne = 2;
console.log(doubleFunc(numOne));
console.log(numOne);

let myArr = [1, 2];
console.log(doubleArrayElements(myArr));
console.log(myArr);