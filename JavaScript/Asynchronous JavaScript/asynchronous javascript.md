# Asynchronous JavaScript

- normally our code runs synchronously - one line must finish executing before the JavaScript engine will execute the following line
    - so if a line of code calls a function, that function must finish execution and return before the following line will start execution, even if the function doesn't have a returned value
- if we're executing a very resource intensive method or if we're making a callout to a webservice, synchronous exeuction isn't ideal because we don't want our code to be in a holding pattern until these operations return
    - so in these cases, we'd rather execute asynchronously
- in asyncrhonous execution, we invoke a method or process but continue execution in the code that called it

## Microtask Queue

- an internal queue used by JavaScript engines (the engines running our code in the browser or whatever environment we're executing in)
- the queue is FIFO (first in, first out) - so a job that's queued will need to have all jobs queued before it finish before the job will be taken off the queue and executed
- the engine only takes a task from the microtask queue when the previous task has finished execution

## Event Loop

- the event loop is where tasks that are pulled from the microtask queue are executed
- immediately after a task has finished execution, the JavaScript engine will grab the next task from the microtask queue
- only when the microtask queue is empty, will the engine turn to other tasks such as rerendering the page for the user with any updates

## Callback Functions

- a callback function is a function that's passed as an argument to another function and is executed when the first function returns
- callback functions are used with asyncrhonous execution in JavaScript to tell the engine what to do when the asynchronous action has finished and returned

## setTimeout()

- takes two parameters
    - a callback function to execute after the specified time has elapsed
    - the time that must elapse before the callback function is executed (in milliseconds)
- will invoke the callback function after the specified amount of time has elapsed
    - it won't invoke the callback function immediately after the specified amount of time has elapsed, rather the callback function is added to the microtask queue whenever the specified time has elapsed

## setInterval()

- takes two parameters
    - a callback function to execute at regular intervals after the specified time has elapsed
    - the time that must elapse before the callback function is executed again (in milliseconds)
- will invoke the callback function passed as the first argument every interval period
    - it won't invoke callback function immediately after interval elapses, rather the callback function is added to the microtask queue whenever the interval has elapsed

## Promises

- a promise is a proxy for a value that isn't currently available, but will eventually become available
- when a promise is called, it starts in a `pending` state and the calling function continues execution
- the promise will eventually move to either a `resolved` state (if it executed successfully) or a `rejected` state (if there was an error in execution)
- we can create our own promises by calling the promise constructor
    - e.g.

    ```js
    let myPromise = new Promise((resolve, reject) => {

    });
    ```

    - the promise constructor takes a function as its parameter
        - this function is referred to as the executor function - the operation that the promise is serving as a proxy for
        - the executor function takes two parameters - `resolve` and `reject` callbacks
    - if the promise moves to a `resolved` state, the callback method that we pass to the `resolve` parameter is invoked
    - if the promise moves to a `rejected` state, the callback that we pass to the `reject` parameter is invoked
    - when we instantiate a new promise, the executor function runs automatically
    - the promise constructor returns an object with `state` and `result` properties
        - `state` is `pending` initially and becomes `fulfilled` if the promise is resolved and `rejected` if the promise is rejeted
        - `result` is `undefined` and becomes the return from the promise when the `resolve` is invoked or the error that occurred when the `reject` callback is invoked

### Consuming Promises

- consuming functions for promises can be registered using the `then`, `catch`, and `finally` methods, whcih are called on the value returned from the promise constructor
- `then()`
    - has two parameters
        - the first is a function to invoke when the promise is resolved
            - this inner function takes a single parameter, which is result of the promise (commonly named `result`)
        - the second is a function to invoke when the promise is rejected
            - this inner function takes a single parameter, which is the error that occurred (commonly named `error`)
        - the second parameter is optoinal and is oftentimes omitted in favor of using `catch` methods to more clearly denote the error handlers for a promise
- `catch()`
    - has a single parameter, which is a function to invoke when the promise is rejected
        - this inner function takes a single parameter (the error that occurred, oftentimes named `error`)
- `finally()`
    - has a single parameter, which is a function that executes when the promise is settled, whether it's been resolved or rejected
        - this inner function doesn't take any arguments
- as a best practice, any asynchronous action in JavaScript should return a promise
    - oftentimes, we won't construct the promise ourselves
    - rather, we'll be writing the code that consumes the promise
    - e.g. a callout to a server or other external API will return a promise, which we'll then handle in our code with `then()`, `catch()`, and `finally()`

## The Fetch API

- the fetch API is a JavaScript API available in browsers to easily make callouts to external services
- we make a callout by calling the `fetch()` method
- `fetch()` takes two parameters
    - the first parameter is the url to send the request to
    - the second parameter is an object that can include the HTTP method we want our call to use and the headers and body for our request
    - the second parameter is optional - if we exclude it `fetch()` will make a GET request (which retrieves data from the specified url)to the provided url
    - `fetch()` returns a promise
- when the promise returned by the `fetch()` method resolves, it'll return an object of the Response class, which includes the following property

| Response Property | Holds |
| ----------------- | ----- |
| status | HTTP status code associated with the response to our request.
| ok | true if the status code is successful (i.e. the status code is in the 200s) |

- we can use the methods of the Response class to retrieve the actual response

| Response Methods | Purpose |
| ---------------- | ------- |
| text() | Reads the response and returns it as text through a promise. |
| json() | Parses the response as JSON and returns it through a promise. |
| formData() | Returns the response as a FromData object through a promise. |
| blob() | Returns the response Blob through a promise. |
| arrayBuffer() | Returns the response as an ArrayBuffer through a promise. |

## Async/Await Keywords

- the `async` and `await` keywords are another way to handle promises in JavaScript
    - they're an abstraction that makes for a more readable way to work with promises
- we can declare functions with the `async` keyword (which is placed before the `function` keyword in the function declaration)
    - a function declared with `async` always returns a promise
    - any return statements in an `async` function that don't explicitly return a promise will have their values wrapped in a resolved promise
- the `await` keyword can be used in an `async` function to suspend funtion execution at the code line that contains it until a promise settles and returns a result
    - when JavaScript engine suspends function execution, it doesn't wait for the promise to resolve synchronously
    - rather, it places the `async` function in the microtask queue and continue executing other tasks
    - when the promise is settled, the engine will grab the suspended function from the microtask queue and finish execution
- e.g.

```js
async function executeAsyncOperation() {
    let asyncOperationResult = await asyncOperation();
}
```

- to implement error handling, we can wrap the `await` statement inside of a `try` `catch` block

### Try-Catch Blocks

- we can wrap code that may throw an exception in the `try` block
- following the `try` block, we can use a `catch` block to handle the exception
- we can optionally include a `finally` block that will run regardless of whether an exception was thrown
- e.g.

```js
try {
    // code that might throw an exception
} catch(err) {
    // handle exception
} finally {
}
```

- we don't declare multiple `catch` blocks for a single `try` block because all exceptions are caught by the first `catch` block since we don't specify types for our parameters
- the code in the `finally` block will execute if an exception is thrown so long as the thrown exception is handled in a previous `catch` block or somewhere in the calling code

## JSON

- JavaScript Object Notation
- used both in and outside of JavaScript
- a data format that's commonly used to pass information between different web applications or services
- the values for keys in JSON cannot be functions, symbols, or undefined values
- `JSON.stringify()`
    - takes an object as an argument and converts to a JSON string (i.e. a JSON-encoded object/serialized object)
- `JSON.parse()`
    - takes a JSON string as an argument and converting it to a JavaScript object