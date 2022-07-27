// the var keyword enforces either global or function scope
// when declared outside a function, a var variable is global scoped
// so it can be referenced anywhere in our code

// because var variables are hoisted, we can reference them before their declarations
// so we don't get an error from the following statement, but it logs undefined
// because we haven't reached the line that assigns a value to a
console.log(a);
var a = 'HELLO WORLD';
console.log(a);

function firstFunction() {
    // when declared inside a function, a var variable is function scoped
    // so it can't be referenced outside of the function
    var b = 'subzero';

    // variables declared with let and const are block scoped, so they can be
    // referenced in the code block that declares them and inner code blocks
    let c = 'goodbye world';
    if(true) {
        c = 'so long world';
    }

    // const variables can't be assigned a new value after their initial assignment
    // so the second line throws an error
    const d = 'D';
    d = 'E';
}
