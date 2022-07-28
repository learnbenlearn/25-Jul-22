function add(...c) {
    sum = 0;
    for(let i of c) {
        sum += i;
    }
    return sum;
}

//let myArr = [3, 5, 6];

// the spread syntax expands the array into a list
// of arguments (each argument is an element from the array)
// equivalent to add(3, 5, 6);
//console.log(add(...myArr));
//console.log(add(3, 5, 6));

// without spread syntax, the array will be passed to the function
// as is
// equivalent to add([3, 5, 6]);
//console.log(add(myArr));
//console.log(add([3, 5, 6]));

/*
let myArr = [3, 4];

let myArrTwo = [...myArr, 5, 6];

console.log(myArrTwo);

let dogs = {
    breed: 'golden retriever'
};

let pets = {
    ...dogs,
    catBreed: 'shorthair cat'
}

console.log(pets);

*/
/*
let myArr = [1, 2, 3, 5];

// will assign 1 to a, 2 to b, and 3 to c
let [a, b, ...restArray] = myArr;

let myObject = {
    myKey: 'my value',
    myOtherKey: 'my other value'
};

// will assign 'my value' to myKey and 'my other value' to myOtherKey
let {myKey: myOneKey, myOtherKey} = myObject;
*/

/*
let Animal = {
    eat: function() {
        console.log('eat');
    }
}

let dog = {};
dog.__proto__ = Animal;
console.log(dog.eat());
*/

class Animal {
    animalType;
    constructor(animalType) {
        this.animalType = animalType;
    }

    static eat() {
        console.log('eat');
    }
}

class Dog extends Animal {
    favoriteFood;
    constructor(favoriteFood) {
        //super('dog');
        this.favoriteFood = favoriteFood;
    }
}

let dog = new Dog('chicken');
dog.__proto__ = Animal;

let secondDog = new Dog('beef');
secondDog.eat();
//dog.eat();
//console.log(Animal.eat());