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