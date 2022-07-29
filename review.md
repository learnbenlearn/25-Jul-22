# Review

## HTML

- HyperText Markup Language
- the markup language that we use to create webpages by defining their structure through elements in our page
- elements in HTML are indicated by tags and consist of everything between the start of the opening tag and the end of the closing tag
- attributes are defined in the opening tag for an element and key/value pairs that define the characteristics of an element
- many elements have unique attributes, but there are also global attributes such as `class` and `id` that all elements can use
    - when assigning a `class` to an element, we can assign multiple classes to an element by separating them with spaces in the attribute value
    - when assigning an `id` to an element, we should keep the `id` unique across the entire document

### Structure of HTML Pages

```html
<!DOCTYPE html>
<html>
    <head></head>
    <body></body>
</html>
```

- HTML pages begin with a DOCTYPE declaration to declare the type of document to the browser
- following the DOCTYPE declaration, we have the `<html>` element, which represents our document
    - this elements nests the `<head>` and `<body>`
    - the `<head>` contains metadata (i.e. information describing the page to pass to the browser, such as any external stylesheets or JavaScript files that our page is making use of)
    - the `<body>` contains the visible elements of our page (the elements that will be displayed to the user)

### Common HTML Elements

- `<a>` (renders a clickable hyperlink)
- `<img>` (renders a picture)
- `<ol>` (ordered list)
- `<ul>` (unordered list)
- `<li>` (item within an ordered or unordered list)
- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` (headers)

### Forms

- we use the `<form>` element to render a form in our page for the user to input information to
- within the form element, we use `<input>` elements for each piece of information we want to collect from the user
    - we determine the type of value the `<input>` accepts with the `type` attribute (can be text, password, radio, checkbox, file, submit, reset, etc.)
- we also include a `<label>` for each `<input>`, matching the values of the `for` attribute of the `<label>` and the `id` of the `<input>` to associate the elements with each other
- the `submit` button allows us to send form data to the url specified by the `action` attribute of the `<form>` element
- the `reset` button will clear the form data

## CSS

- CSS stands for Cascading Style Sheets
- it's what we use to style our HTML pages
- rulesets/rules are collections of selectors and declarations that specify the elements to style and the styling to apply
- declarations are property-value pairs that specify the styling in the curly braces following the selector
- selectors determine which elements to apply the styling to
- properties determine the kind of styling that we're applying (e.g. background color, element width, etc.)

```css
p {
    background-color: green;
}
```

### CSS Selectors

- when writing a selector, we can select by tag, class, id, and/or by other attributes
- to select by tag, we use the name of the tag

```css
p {

}
```

- to select by `class`, we'll prefix the name of the class with a period (.)

```css
.nameOfClass {

}
```

- to select by `id`, we'll prefix the `id` with a hashtag (#)

```css
#idValue {

}
```

- we can combine multiple selectors by writing them without a space in between

```css
p.nameOfClass {

}
```

### Places to Include CSS

- we can include CSS inline, internally in our HTML document, or externally in a separate stylesheet
- we write inline CSS by using the `style` attribute on the element we want to apply styling to
- we write internal CSS by including it between `<style>` tags in our page's `<head>`
- we write external CSS by creating a separate CSS file and referencing it in a `<link>` element in our page's `<head>`

### CSS Specificity

- a single element in our HTML document can be matched by multiple different rulesets
- in the case of conflicting property definitions from multiple rulesets (e.g. two different rulesets both assign a value for the `color` property), the ruleset with the most specific selector will take precedence
- any inline styling takes precedence over internal and external styling
- when internal and external rulesets conflict, we determine specificity by
    - if one ruleset selects by `id`, while the other(s) don't, then the ruleset selecting by `id` will take precedence
    - if there's a tie in `id` selectors (none of the rulesets select by `id` or multiple of them do), then we'll compare the number of classes and attribute selectors in each ruleset
        - the ruleset that has the most class/attribute selectors will take precedence
    - if there's a tie in class/attribute selectors, then we'll compare the tag selectors in the rulesets
    - if multiple rulesets tie in `id`, class/attribute, and tag selectors, then the ruleset that's declared last will take precedence

### The Box Model

- the box model is a container that wraps around each HTML elements in our page
- the box model has four layers, which are (from outermost to innermost) margin, border, padding, and content
- we can apply styling at each layer of the box model
- we'll work with margin, border, and padding properties to style those respective layers

### Sizing in CSS Styles

- we can specify sizes in CSS in two ways - absolute and relative sizing
- relative sizing adapts to the size of the window being used to view it
    - we specify relative sizes through percentages or the `em` unit
- absolute sizing takes the same space, regardless of the size of the window being used to view it
    - available units include px, cm, and in

### Responsive Web Design

- to make a webpage responsive, we implement styling so that the size of the elements adapts to the size of the screen/window being used to view the page
    - one of the ways we can implement responsive web design is by using relative sizing in CSS declarations

## JavaScript

- a loosely-typed and dynamically-typed language
    - we don't declare the types of variables when declaring the variables
    - the type of a JavaScript variable isn't determined until runtime and the variable's type can change throughout the execution of our code
- JavaScript has seven primitive data types
    - string
    - BigInt
    - number
    - boolean
    - null
    - undefined
    - symbol
- we declare variables with one of three scope-enforcing keywords
    - `var`
        - enforces either global (if we declare the variable outside of any function) or function scope (if we declare the variable within a function)
    - `let`
        - enforces block scope
    - `const`
        - enforces block scope
        - immutable - once we assign a value to a `const` variable, we can't change the value of that variable
    - a globally-scoped variable can be referenced from anywhere in our code
    - a function-scoped variable can be referenced from anywhere in the function that declares it
    - a block scoped variable can be referenced in the code block that declares it and any inner code blocks (e.g. any nested control flow statements or functions)
    - with variable hoisting, we can reference `var` variables before their declarations without raising an exception
        - but the `var` variable will be undefined until execution reaches the code line that assigns a value to it

### Type Coercion

- type coercion is the implicit conversion of a value from one data type to another
- numeric type coercion occurs when we perform a mathematical operation (that doesn't use the `+` operator) with at least one non-number value
    - the non-number values will be converted to numbers
- string type coercion occurs when we use the `+` operator and any of the values in the expression are strings
    - the other value will be converted to a string and the two strings will be concatenated
- equality comparisons
    - the equality operator (`==`) performs type coercion
        - before making the comparison, it will convert both the values on either side of the operator to numbers
    - the strict equality operator (`===`) doesn't perform type coercion, it compares the values on either side of the operator without converting them
    - e.g.

    ```js
    let a = 3;
    let b = '3';

    console.log(a == b); // true
    console.log(a === b); // false
    ```

### Control Flow Statements

- conditional statements (`if`-`else if`-`else`)
    - we can also use the ternary operator for a shorthand `if`-`else` statement

    ```js
    let a;
    if(condition) {
        a = 'condition is true';
    } else {
        a = 'condition is false';
    }

    // equivalent to
    a = condition ? 'condition is true' : 'condition is false';
    ```

- switch statements
- while loops
- do-while loops
- for loops
- for-of loop
    - introduced in ES6
    - allows us to iterate through the values of an iterable object (e.g. an array)

    ```js
    for(let iterableVariable of iterableObject) {

    }
    ```

- for-in loop
    - available prior to ES6
    - allows to iterate through the keys of an object
    
    ```js
    for(let iterableVariable in object) {

    }
    ```

### Arrays

- zero-indexed collections of elements
- we initialize arrays and refer to elements within them through the use of square brackets

```js
let myArr = [1, 2, 3];
myArr[0] = 4;
```

- dynamically sized (so the initial size of the array isn't fixed)
- we can retrieve the size of an array through its `length` property

### Objects

- collections of key-value pairs
- we initialize objects through an object literal

```js
let myObject = {
    firstKey: 'first value',
    secondKey: 'second value'
}
```

- to refer to the value associated with a key in an object, we can use either dot notation (e.g. `objectName.keyName`) or square brackets (e.g. `objectName["keyName"]`)

### Truthy/Falsy Values

- JavaScript has six falsy values
    - null
    - undefined
    - 0
    - empty string (`''` or `""`)
    - NaN
    - false
- falsy values evaluate to false in a conditional expression in control flow or converts to true in a Boolean expression
- any value that is not one of the six falsy values is truthy (so it evaluates to true in a conditional expression or converts to true in a Boolan expression)

### Functions

- functions in JavaScript are first-class citizens, so we can declare functions and later invoke them through standard function syntax

```js
function nameOfFunction() {

}
```

    - we can also assign functions as values to variables or the value for a key in an object

    ```js
    let a = function() {

    }

    let b = () => {

    }

    a();
    b();
    ```

- we can write immediately invoked functions - functions that are executed as soon as the line of code that declares them is reached

```js
(function() {

})();

(() => {

})();
```

### DOM

- Document Object Model
- HTML DOM defines the ways in which we interact with, change, add, and delete elements (i.e. objects) from our HTML
- DOM selector methods
    - `getElementById()`
        - takes the `id` of an element and returns the first element with a matching `id`
    - `getElementsByTagName()`
        - takes the name of a tag and returns all elements that match the tag as a collection (even if there's only one matching element)
    - `getElementsByClassName()`
        - takes the name of a class and returns all elements that match the class as a collection (even if there's only one matching element)
    - `querySelector()`
        - takes CSS selector syntax and returns the first element that matches the selector
    - `querySelectorAll()`
        - takes CSS selector syntax and returns all elements that match the selector as a collection

### Events

- an event is an action that happens in the browser
- to respond to events, we use event listeners
- to attach an event listener to an element from JavaScript, we use `addEventListener(event, handler, useCapture)`
    - `event` is the event to listen for
    - `handler` is the handler function to invoke when the event occurs
    - `useCapture` determines if the handler fires in the bubbling or capturing phases
- to remove an event listener from an element from JavaScript, we use `removeEventListener(event, handler, useCapture)`

### Event Propagation

- during capturing, the event travels from the root element (i.e. the `window` object) to the source element (i.e. the element where the event occurred) and it can be handled by any element along the way
- during bubbling, the event travels from the source element to the root element and it can be handled by any element along the way