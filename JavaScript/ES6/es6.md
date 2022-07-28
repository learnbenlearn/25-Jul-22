# ES6+ Features in JavaScript

- ECMAScript is a specification for a scripting language
- JavaScript is (the most prominent by far) example of a scripting language that adheres to ECMAScript standards
- whenever a new ECMAScript release is made, JavaScript engines (e.g. those in browsers) will adopt the new features
- there was a period of six years between major ECMAScript releases
    - ES5 was released in 2009 originally, the next major release of ECMAScript was ES6 in 2015
    - since ES6, ECMAScript releases have been made annually
    - the naming convention for ECMAScript releases has been modified to denote the year of the release
    - e.g. ES6 is also referred as ES2015
- some of the major JavaScript features implemented with ES6, include
    - the `let` and `const` keywords
    - the arrow functions
    - `for-of` loop that allows us to iterate through an iterable object
    - classes
    - promises
    - default parameters for functions
    - rest and spread syntax
    - modules
    - template literals
    - object and array destructuring

## Template Literals

- string variables in JavaScript can be delimited with single quotes, double quotes, or backticks
- when we use backticks to delimit a string, we can make use of template literals, which give a cleaner syntax for including variables within our strings and allow us to create multi-line strings
- to embed an expression (such as a variable) in a template literal, we wrap the expression in `${}`
    - e.g.

    ```js
    let a = 'my string';
    console.log(`the value of a is ${a}`);
    ```

## Default Parameters for Functions

- with ES6, we can use default parameters by assigning a value to a parameter in the function declaration
- if the function is called without a value for a particular parameter, the default value will be used instead

    ```js
    function myFunction(a, b, c = 'default parameter value') {

    }

    // because we haven't provided a value for the third parameter, the default value will be used
    myFunction('value for a', 'value for b');
    ```

## Spread Syntax and Rest Parameters

- spread syntax indicated by ellipses in the arguments passed to a function
    - expands an iterable object (e.g. an array) into a list of arguments
    - allows us to pass an array to functions that normally require a list of arguments

    ```js
    function add(a, b) {
        return a + b;
    }

    let myArr = [3, 4];

    add(...myArr);
    ```

    - we can also use spread syntax in array and object literals to add the contents of another array/object to the literal, respectively

    ```js
    let myArr = [3, 4];

    let myArrTwo = [...myArr, 5, 6];

    console.log(myArrTwo);
    ```

- rest parameters (rest syntax) is used when we precede the name of a parameter in a function with ellipses (...) 
    - when we declare a function with rest parameters, any arguments passed to the function beyond the number of declared arguments will be stored as an array in the rest parameter

    ```js
    function add(a, b, ...c) {
        sum = a + b;
        for(let i = 0; i < c.length; i++) {
            sum += c[i];
        }
        return sum;
    }
    ```

    - with rest parameters, we can declare functions that take more than the stated number of arguments

## Object and Array Destructuring

- a syntax that allows the expansion of values from objects and arrays into different parameters
- array destructuring

    ```js
    let myArr = [1, 2, 3];

    // will assign 1 to a, 2 to b, and 3 to c
    let [a, b, c] = myArr;
    ```

- object destructuring

    ```js
    let myObject = {
        myKey: 'my value',
        myOtherKey: 'my other value'
    };

    // will assign 'my value' to myKey and 'my other value' to myOtherKey
    let {myKey, myOtherKey} = myObject;
    ```

    - when destructuring an object, the names of the variables that we're declaring must match the names of the keys in the object
        - to declare variables with different names than the keys of the object, we follow the format `keyName: variableName` in our destructuring syntax, e.g.

    ```js
    let myObject = {
        myKey: 'my value',
        myOtherKey: 'my other value'
    };

    // will assign 'my value' to myKey and 'my other value' to myOtherKey
    let {myKey: myOneKey, myOtherKey} = myObject;
    ```
    
- we can also assign default values to the variables that we declare through an assignment statement within the array/object literal on the lefthand side of the assignment operator
    - the variable(s) will be given the default values in the case that the array/object has less elements/properties than the number of variables we're declaring
- we can also use rest syntax with object and array destructuring
    - if the object/array that we're destructuring has more properties/elements than the number of variables that we're declaring, the remaining values will be assigned to the rest property as an object/array, respectively

## For-Of Loop

- when we introduced control flow statements in JavaScript, we discussed the regular for loop
    - e.g.

    ```js
    for(let i = 0; i < 5; i++) {

    }
    ```

- we have other for loops available as well
- the `for-in` loop, which was available before ES6
    - this allows us to iterate through all of the keys in an object

    ```js
    for(let key in objectToIterateThrough) {

    }
    ```
- ES6 introduced the `for-of` loop, which allows us to iterate through all the values of an iterable object (e.g. an array)

    ```js
    for(let iterableValue of iterableObject) {

    }
    ```

## JavaScript Inheritance and Classes

- all objects in JavaScript inherit from the `Object` class
- we can establish inheritance between objects through the use of the prototype property
- with prototypal inheritance, an object references another object through its hidden Prototype property
    - if a nonexistent property is read from the original object or a nonexistent method is called, the object's prototype will be checked to see if the property/method exists there
- we can explicitly set the prototype for an object through the `__proto__` property
- prior to ES6, prototypal inheritance was the main form of implementing inheritance within JavaScript
- but ES6 introduced classes in JavaScript, which allow for a more traditional form object-oriented programming

### Class Declarations

- to declare a class in JavaScript, we use the `class` keyword, followed by the name of the class, and the body of the class in curly braces

```js
class NameOfClass{

}
```

- once we've declared a class, we can instantiate it and assign to a variable through a constructor call with the `new` keyword

```js
let a = new NameOfClass();
```

- we can create our own constructors for our classes by creating a method in the class named `constructor`
    - constructors can take zero or more parameters, e.g.

    ```js
    class NameOfClass {
        constructor() {
            // perform initialization operations
        }
    }
    ```
    - we can't overload constructors in JavaScript classes
- we can declare class member variables
    - class variables are implicitly scoped to the class, so we don't declare them with one of the scope-enforcing keywords
- when we declare a class variable, it's available to outside entities through objects of the class by default
    - but we can create private variables by preceding the variable name with a `#`
    - private variables can't be accessed outside of the class that declares them
- we can aloso create static properties and methods for our classes by declaring them with the `static` keyword
    - the `static` keyword indicates that a property or method is associated with the class itself, rather than with an instance of the class
    - so we can access the property or invoke the method without first instantiating the class

### Extending Classes

- one class in JavaScript can inherit another by using the `extends` keyword followed by the name of the parent class in the class declaration

```js
class ChildClass extends ParentClass {}
```

- inheriting from a class allows us to use the parent class methods and properties
- we can inherit from at most one class using the `extends` keyword
- the constructor in the child classes must call the constructor of the parent class through the `super` keyword
    - this parent constructor call must occur before we can use the `this` keyword in the child class constructor