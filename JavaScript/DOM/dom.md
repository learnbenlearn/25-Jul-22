# Document Object Model

- the Document Object Model (DOM) is the W3C standard for accessing documents from JavaScript code
- in the HTML DOM, the Document is the html page, the Objects are the elements in that page, and the Model is the way in which we access, interact with, change, add, and delete elements
- the root of the DOM tree for a particular page is the document (i.e. `<html>` element)
- the window object represents the browser and contains the entire document

<p align="center"><img src="./dom_diagram.png"></p>

## Accessor Methods

- `getElementById()`
    - takes the `id` of an element that we want to retrieve and returns the first element with the matching `id`
- `getElementsByClassName()`
    - takes the name of a `class` and returns a list of elements with that class
- `getElementsByTagName()`
    - takes the name of a tag and returns a list of elements that have that tag
- `querySelector()`
    - takes CSS selector syntax and returns the first element that matches the selector
- `querySelectorAll()`
    - takes CSS selector syntax and returns an array of elements that match the selector
- we call these methods on the objects in the DOM tree (i.e. the elements in our page)

## Manipulating DOM Elements

- we can add elements as children of an existing DOM element through calls to the `appendChild()` method
    - this method takes the element that we want to add to our HTML and adds it as a child of the element that we call the method on
- we can delete children elements of an existing DOM element through calls to the `removeChild()` method
    - this method takes the element that we want to delete (this element must be a descendant of the element we're calling `removeChild()` on)
- once we've retrieved an HTML element we can manipulate its contents by assigning to the `innerHTML` property
    - this property allows us to set text and nested elements inside of the element that we're working with the `innerHTML` of
- the `setAttribute()` method takes an attribute specification and applies it to the corresponding element
    - `setAttribute()` takes two parameters - the name of the attribute and the value we want to assign to it
- the `getAttribute()` method takes the name of an attribute and returns the value of that attribute for the element that we call it on

## Events

[DOM Events (w3Schools)](https://www.w3schools.com/jsref/dom_obj_event.asp)

- an event is an action that happens in the browser
    - this includes user interaction (e.g. the click of a button) and browser-related actions (e.g. a page finishing loading)
- to respond to events, we make use of event listeners
    - event listeners are functions that we add to HTML elements
    - the event listener waits for the specified event to occur and then handles the event when it does
- we can add event listeners on HTML elements in our markup by assigning the event listener to the corresponding event attribute
    - an event attribute has the name of the event prefixed with `on`
    - e.g. to attach an event listener for the `click` event

    ```html
    <div onclick="eventListenerFunction"></div>
    ```
- we can also add event listeners to our elements through JavaScript with calls to the `addEventListener()` method
    - this method takes three parameters, which are the name of the event to handle, the function to invoke when the event occurs, and the phase to handle the event in

### Event Propagation

- event propagation determines the order in which DOM elements can handle the events that occur in our HTML
- when an event occurs, it goes through three phases
    - capture phase
        - the event travels from the root of the DOM tree (i.e. `window` object) to the source element (i.e. the element where the event occurred)
    - target phase
        - a bridge between the capture phase and the bubble phase during which the event is at the source element
    - bubble phase
        - the event travels from the sourced element back to the root of the DOM tree
- we can handle events in either the bubbling or capturing phases
- by default, when we add an event listener to an element, it will be invoked in the bubbling phase
- when adding an event listener in JavaScript, we can pass `true` as the third parameter for the `addEventListener()` function
    - this third parameter indicates if we want to invoke our listener in the capture phase
    - so by passing a true value, we're specifying that we want our listener to fire during capturing

## The Event Object

- all events in JavaScript inherit from the Event object, so they inherit common properties and methods from it
- `stopPropagation()` and `stopImmediatePropagation()`
    - these methods stop an event from continuing to traverse the DOM
    - if there are any event listeners on elements that haven't fired yet, they won't be invoked because these methods will stop the traversal of the event
    - if there are any listeners on the element whose event listener called `stopPropagation()` that haven't fired and act in the same phase, they'll still be invoked
    - `stopImmediatePropagation()` prevents any further event listeners from firing, even if they're on the same element whose listener called it
- `cancelBubble`
    - Boolean property that determines if the bubbling phase occurs for an event