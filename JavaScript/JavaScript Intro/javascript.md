# JavaScript

- JavaScript is an interpreted language that our web browsers can parse and execute
- JavaScript is the main scripting language of the web
    - it was originally developed to add client-side functionality to webpages
    - there have since been frameworks made such as Node.js that allow execution of JavaScript outside of the browser
- JavaScript is a single-threaded language, meaning that the JavaScript engines that interpret and run our code can only execute one process at a time
- JavaScript is a multi-paradigm language, it can be functional, object-oriented, or procedural
- it's loosely-typed and dynamically-typed language
    - we don't declare the types of our variables when declaring our variables
    - the type of a JavaScript variable isn't determined until runtime and the variable's can change throughout the execution of our code

## JavaScript Primitive Data Types

- a primitive data type is a value that isn't an object
- Number
- String
- Boolean
- Undefined
    - the value that's assigned to a variable if it's not given a value when it's declared
- Symbol
- Null
    - a value that's explicitly assigned to a variable to indicate that the variable doesn't have a value
- BigInt
    - can hold integers of arbitrary length (number is a 64-bit data type)


## JavaScript Variable Declarations

- we don't declare data types our variable declarations, but we do declare variables using one of three-scope enforcing keywords
    - `var`
        - enforces either global or function scope, depending on where we've declared the variable
        - if we declare a `var` variable outside of a function, it will have global scope and be able to be referenced from anywhere in our code
        - if we declare a `var` variable inside a function, it will have function scope and can be referenced anywhere inside that function
    - `let`
        - enforces block scope, so a variable declared with `let` can be referenced in the block of code that declares it and any inner blocks
    - `const`
        - enforces block scope and issued for constant values
        - a `const` variable cannot have its value changed after the initial assignment
- `var` is an older way to declare variables and we should avoid it and use `const` or `let` instead
    - variables declared `var` can be redeclared later with `var`
    - variables declared with `var` are hoisted to the top of their scope
    - when the browser loads our JavaScript, it will scan through our code and process any global-scoped `var` variables and declare them
        - so we can reference `var` variables before their declaration without getting an error
        - if reference a `var` variable before its assignment, it will have an undefined value
    - when a function containing a `var` variable starts execution, the browser parses all `var` variables and they can be referenced throughout the function, even before the line of code that declares them
    - variables declared with `let` and `const` are not hoisted, so we'll get a `ReferenceError` if we try to use them before their declaration in our code

## Type Coercion

- type coercion is the implicit conversion of a variable from one data type to another
    - the JavaScript engine that's running our code converts the value itself without us explicitly telling it to
- numeric type coercion
    - occurs whenever we perform any mathematical operation (that doesn't use the `+` operator) with at least one non-number value

| Value | Becomes... |
| ----- | ---------- |
| `undefined` | `NaN` |
| `null` | 0 |
| `true` | 1 |
| `false` | 0 |
| String | Whitespaces from the start and end of the string are removed. If the remaining string is empty, the converted value is 0. If the string can be converted to a number (i.e. meaning it only has numeric digits and at most one decimal), it will be converted to an umber. If the string can't be converted to a number, it'll be converted `NaN`. |

- string type coercion
    - if any of the values in an expression using the `+` operator are strings, the other will be converted to a string as well and the two values will be concatenated
- equality comparisons
    - when we use the equality operator (`==`) to compare values of different data types, JavaScript will attempt to convert the values to numbers and then compare them
    - we can use the strict equality operator (`===`) to check the equality of the two values without any type coercion

## JavaScript Operators

- common JavaScript operators, listed in order from highest to lowest precedence
    - `()`
        - used for grouping
    - `++`, `--`, `-`, `+`
        - `++` and `--` are the postfix increment and decrement operators, respectively
            - add/subtract one from a value, respectively
            - by postfixed, we mean that the operator follows the value it's operating on (e.g. `a++`)
        - `-`, `+` are the unary negation and addition operators, respectively
            - Unary negation will multiplies a value by -1
    - `**`
        - expontential operator
        - takes the value to the specified power (e.g. `2**2` gives a value of `4`)
    - `*`, `/`, `%`
        - `*` and `/` are the multiplication and division operators, respectively
        - `%` is the modulus oeprator, the result is the remainder of a division operation (e.g. `4 % 3` is `1`)
    - `+`, `-`
        - the addition and subtraction operators
    - `<`, `<=`, `>`, `>=`, `in`
        - the `in` operator returns `true` if a key is in an object and `false` otherwise
    - `==`, `===`, `!=`, `!==`
        - `!==` is the strict inequality operator, it checks if two values are unequal without converting them
    - `&&`
        - returns `true` if the values on both sides of the operator are `true` and `false` otherwise
    - `||`
        - returns `true` if at least one of the values on either side of the operator is `true` and `false` otherwise
    - `=`, `+=`, `-=`, `**=`, `*=`, `/=`, `%=`, `&&=`, `||=`
        - assignment operators
        - e.g.

```js
let a = true;
a &&= 1 > 5; // a is false
```

## JavaScript Control Flow

- control flow allows us to change our execution path and repeat or skip lines of code (while only executing certain lines)
- conditionals
    ```js
    if(conditionalExpression) {

    } else if(conditionalExpression) {

    } else {

    }
    ```
    - each conditional block must have one `if` statement, but can have zero or more `else if` statements and zero or one `else` statements
    - conditional expressions will be evaluated in order, the first conditional expression that returns `true` will have its associated code block executed and the remainder of the statements will be skipped
    - if none of the conditional expressions return `true`, the code block associated with the `else` statement (if present) will be executed
    - we can also use a ternary operator for a shorthand conditional

    ```js
    conditionalExpression ? valueToReturnIfTrue : valueToReturnIfFalse
    ```

    - if the condition is true, the value following the `?` operator will be returned
    - if the condition is false, the value following the `:` operator will be returned
- switch statements

    ```js
    switch(expressionToEvaluate) {
        case valueOne:
            
            break;
        case valueTwo, valueThree:

            break;
        default:

    }
    ```

    - switch statements are good to use in place of conditionals whenever we're comparing the same expression to multiple different values
    - if we don't include the `break` statement at the end of a `case`, execution will fallthrough (meaning that it will continue and execute the following code blocks for the following `case` statements until it reaches a `break`)
    - the `default` `case` will be executed if none of the values from the previous `case` statements are equal to the expression
- while
    ```js
    while(conditionalExpression) {

    }
    ```
    
    - the loop will continue to execute so long as the conditionalExpression is true
- do-while
    ```js
    do {

    } while(conditionalExpression);
    ```
    - the do-while loop will always execute once before checking the condition and then continue to execute so long as the condition is true
- for
    ```js
    for(iterableVariableAssignment; exitCondition; incrementOrDecrementOperation) {

    }
    ```
    - the for loop will execute until the exit condition returns false

## Arrays

- zero-indexed collections of elements that have comma-separated values
- the values within an array can have different data types
- we initialize arrays with square brackets
- to retrieve a value from the array, we use square brackets and pass the index of the element
    - because arrays are zero-indexed, the first element has the index `0`, the second has index `1`, and so on
- arrays in JavaScript are dynamically-sized, so the initial size of the array isn't fixed (we can add or remove elements later)
- to retrieve the size of our array, we can use the `length` property
- common Array methods

| Method | Explanation |
| ------ | ----------- |
| shift() | Removes the first element of the array and returns it. |
| unshift() | Adds the given value to the beginning of the array. |
| push() | Adds the given value to the end of the array. |
| forEach() | Runs a function on each element of an array. |
| filter() | Returns an array of all elements that match the filter.
| map() | Runs a function on each element of an array and returns an array of the results. |
| reduce() | Runs a function on each element of an array, performing the calculation across all array elements. |

## Objects

- objects in JavaScript are collections of key-value pairs, where the key and value are separated by a colon
- we declare objects through an object literal, with curly braces surrounded the key-value pairs

```js
let myObject = {
    keyOne: 1,
    keyTwo: 2
}
```

- we can access the value associated with an object's keys through dot notation or square brackets
- common object methods

| Method | Explanation |
| ------ | ----------- |
| Object.keys() | Returns an array of all keys from the object passed as a parameter. |
| Object.values() | Returns an array of all values from the object passed as a parameter. |
| Object.entries() | Returns an array of key-value pairs from the object passed as a parameter. |

## Truthy/Falsy Values

- falsy values are those that evaluate to false in a conditional expression or convert to false when used in a Boolean expression
- we falsy values in JavaScript
    - 0
    - undefined
    - null
    - false
    - NaN
    - empty string (`''` or `""`)
- every other value is truthy, so it will evaluate to true in a conditional expression or convert to true in a Boolean expression
- we can use truthy/falsy values if we want to ensure that we're working with an object that has been initialized before we refer to a property of that object, we can perform a null check as follows
    - if the object hasn't been initialized, it will have an undefined value, the condition will evaluate to false, and the code block won't run

```js
if(myObject) {

}
```

- we can also perform this check through the null chaining operator (`?.`) when we're referring to an object's key
    - e.g. myObject?.keyOne
    - if the value before the question mark is null or undefined, then the returned value will be null
    - if the value before the question mark is not null or undefined, the operation will proceed as normal

## JavaScript Functions

- a function is a block of code that executes when its invoked
- when declaring a function we use the following syntax

    ```js
    function nameOfFunction(parameterOne, parameterTwo) {
    }
    ```

    - when declaring parameters for our functions, we only declare the name of the parameter, not its type
    - because JavaScript variables are loosely-typed

- functions in JavaScript are a first-class citizen, means we can work with functions by assigning them as values to variables or the values for keys in an object
- when we're declaring a function in this way, we'll use a function expression (i.e. anonymous function)
    - e.g.

    ```js
    let myFunction = function(parameterOne, parameterTwo) {
    };
    ```

    - arrow functions are a shorthand syntax for anonymous functions
    - e.g.

    ```js
    let myFunction = (parameterOne, parameterTwo) => {
    };
    ```

    - if our arrow function only has one parameter, we can omit the parentheses surrounding the parameters
    - if our arrow function is only one line long, we can omit the curly braces

### Function Parameters

- if we pass a primitive variable to a function as a parameter, that variable will be passed by value
    - so any changes that happen to that parameter in the function won't affect the original variable
    - the changes will only be made to the function's local copy of that variable
- if we pass a non-primitive variable (i.e. an object) to a function as a parameter, that variable will be passed by reference
    - so rather than working with a local copy of the variable, the function will be operating on the actual variable
    - if we make changes to the properties of the object, those will be made to the properties of the original variable

### Immmediately Invoked Functions

- when writing an immediately invoked function, we don't declare a function to call later or assign a function to a variable to reference
- rather, the function executes as soon as the engine reaches the code line that defines it
- to declare an immediately function, we surround the function expression with parentheses, and then follow the function declaration with another set of parentheses to invoke it

```js
(function() {
    console.log('this is an immediately invoked function');
})();
```

## Closures

- a closure is a function that can reference the variables declared outside of it whenever it's executed
- whenever we declare a function in JavaScript, it holds reference to all of the local variables (i.e. all variables declared within the function) and its outer lexical environment (e.g. the variables declared outside of the function definition)
- all functions in JavaScript are closures

```js
function outerFunction() {
    let a = 'my string';
    return function() {
        console.log(a);
    }
}
```

## this Keyword

- the `this` keyword refers to the enclosing object
- we can use the `this` keyword in any function, even if it's not a method of an object
- if we use `this` in a function that isn't a method of an object, `this` will refer to the global object (in browsers, the global object is the `window`)
- if we use `this` in a function inside of an object, `this` will refer to the object 'before the dot'

## Exercise: fizzbuzz

Write a JavaScript function that takes in a single parameter. If the parameter is divisible by 3, return 'fizz'. If the parameter is divisible by 5, return 'buzz'. If the parameter value is divisible by both 3 and 5, return 'fizzbuzz'.