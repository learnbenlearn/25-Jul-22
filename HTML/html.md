# HTML

- HyperText Markup Language
- markup language for creating webpages and applications
- browsers parse HTML to render the content of a webpage when we visit it
- Elements in HTML define the structure of the document and are indicated by tags
    - the element consists of everything between the start of the opening tag and the end of the closing tag (i.e. any attributes, nested tags and elements, etc.)
    - the tags for elements are surrounded by angle brackets
    - the closing tag for an element starts with an angle bracket followed by a forward slash

```html
<div></div>
```

- Attributes are defined within the opening tag of an element
    - are key/value pairs that define the characteristics of the element by giving metadata that's important for the browser to know (e.g. element-specific styling, classes/ids, the URL for a hyperlink, etc.)
    - the key is the name of the attribute being set and the value is enclosed in quotations
    - some HTML elements have their own unique attributes, but there are also global attributes that all elements can use such as `class` and `id`

## The class Attribute

- classes are used to group elements that should have a common appearance
- we assign the same class to multiple elements if they should have the same styling
- elements can have multiple classes, they'll just be separated by spaces in the value of the attribute

## The id Attribute

- we use the `id` when there is styling that should be unique to a given element or if we want to provide functionality unique for that element
- when assigning an `id` value, we should use a value that's unique across our entire HTML document (i.e. we shouldn't repeat ids)

## Starting HTML Documents

- each HTML document begins with a special tag known as the DOCTYPE declaration, which lets browsers know which top of document they're working with and the version of the markup language being used
- for HTML5, the DOCTYPE declaration is:

```html
<!DOCTYPE html>
```

- following the DOCTYPE declaration, we have the `<html>` tag that acts as the root of our document
    - everything within our HTML page will be nested inside of this element
- within the `<html>` element, we have the `<head>` and `<body>` elements

### The `<head>` element

- contains metadata associated with the page, including information for the browser such as the title, character encoding, and references to external stylesheets
- elements within `<head>`
    - `<title>`, which holds a title for our page and is required for all valid HTML pages
    - `<meta>`, which can hold the name, author, description, and keywords for our page
    - `<link>`, which holds the relative path to any external CSS documents we're using for styling
    - `<script>`, which contains either internal JavaScript or a relative path to external JavaScript to provide client-side functionality for our page
    - `<base>`, which allows us to set a base url for all hyperlinks in our document

### The `<body>` Element

- we include the visible elements of our HTML page in the `<body>` element of our page
- visible elements can be either inline or block-level elements
- block elements have implicit newlines before and after, so they take the entire width of the page
    - e.g., `<div>` and `<p>`
- inline elements render within the line and only take the space they need
    - e.g., `<span>`

### Common HTML Elements

[HTML Elements (w3Schools)](https://www.w3schools.com/tags/default.asp)

- `<a>`
    - renders a clickable hyperlink in our page
    - `href` attribute holds the URL that the user is redirected to when they click the link
    - `target` attribute specifies how to open the link (e.g. in a new tab, current tab, etc.)
- `<img>`
    - renders an image within our page
    - `src` attribute that holds the relative path or URL to the image we want to display
    - `alt` attribute holds alternative text that will display in the case that the image can't be shown (e.g. if it's been removed from the URL) and to assist screen readers for users with sight problems
- `<table>`
    - renders a table in our page
    - `<thead>` element that defines the table header
    - `<tbody>` element that defines the table body
    - `<tr>` elements that define table rows
    - `<th>` elements to define a cell in the header row
    - `<td>` elements to define a cell in a body row
- `<ol>`
    - renders an ordered list in our page
    - numbered by default, but we can change the delimiter by setting the `type` attribute
- `<ul>`
    - renders an unordered list in our page
- `<li>`
    - renders list items within an ordered or unordered list
- `<div>`
    - block-level element that defines a division of our page
- `<p>`
    - block-level element that defines a paragraph
- `<span>`
    - inline element used for grouping text or elements
- `<b>`
    - bolds text
- `<i>`
    - italicizes text
- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`
    - header tags that are block-level elements
    - `h1` is the largest header to `h6` as the smallest header
- `<br/>`
    - self-closing tag for line breaks
- `<!-- -->`
    - holds comments

## Semantic Markup

- some HTML tags have semantic meaning, which means that the element gives some information about the type of content it contains
- `<h1>` is a semantic element, the browser interprets this element as the most important header on our webpage
- semantic markup is used for search engine optimization because we can indicate the most important parts of our page and for screen readers because semantic elements better indicate the content that they contain
- other semantic elements include `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`

## Forms

- forms are sections of our HTML documents that contain controls that solicit information a user that we normally submit to the server
- we use the `<form>` element to create forms in our page
- within the form element, we'll use `<input>` elements for each piece of information we want to collect from the user
    - to indicate the kind of information we're collecting, we'll use the `type` attribute of the `<input>` element
    - `type` can be one of many values, including text, password, radio, checkbox, file, submit, or reset
        - text gives a single-line textbox input
        - password gives a textbox input that masks the entered characters using asterisks or periods so that the user can't see the raw value that was entered
        - radio renders a set of radio buttons that a user can select one of
        - checkbox renders a checkbox that the user can select
        - file givews a fileselect box that users can upload a file to, to have it sent to the server
    - whenever we include an `<input>` element in our form, we'll have a `<label>` element before it to give a label to the input
        - the `for` attribute of the `<label>` element indicates the `id` of the `<input>` element that it's associated with
- we can also include `<textarea>` element in our form, which will render multiline textbox that can contain newlines
    - we can specify the size of the textarea through the `rows` and `cols` attributes, which determine the number of rows and the number of columns for the textarea, respectively
- we can create dropdowns through the `<select>` element
    - inside the select element, we'll define the different options with `<option>` elements, specifying the `value` attribute for each option
- to add reset and submit buttons to our form, we'll create input elements with `reset` and `submit` for the type, respectively
- the `submit` button allows us to send form data to the server
- the `reset` button will clear the form data
- to specify where the form data will be sent once the user clicks the `submit` button, we'll set the `action` attribute on the `<form>` element
    - typically, the value that we'll pass to this attribute will be the URL of the server that will receive the form sumission
- we can also set the `target` attribute on the form element to specify how the result of the submission will be displayed to the user
    - this attribute will specify if the result of the submission opens in a new tab, in the same tab, etc.
- we specify the `name` for the different input elements within our form
    - oftentimes this will match the `for` attribute of the corresponding `<label>`
    - but it does not have to
    - we'll use the name if we're retrieving our elements, e.g. in JavaScript
- the `value` attribute can be given to an `<input>` element to specify a default value for the input field
    - if we're working with a `submit` or `reset` `<input>` element, `value` will hold the label of the button
- the `placeholder` attribute can be given to an `<input>` element to give information about what we're expecting in the input
    - we can use placeholders for text, password, and other input types
- the `required` attribute which requires a user to provide a value for an input field before submitting the form
    - the `required` attribute is a Boolean attribute (meaning that it can have a true or false value)
    - for Boolean HTML attributes, we can explicitly specify a true or false value
    - or we can simply include the attribute without a value (meaning true) or exclude the attribute (meaning false)
- the `min` and `max` attributes which hold a minimum and maximum value, respectively for the input
    - these attributes can be used for number, range, date, datetime-local, month, time, and week inputs

## HTML Form Validation

- whenever a user submits a form, the data will be sent to the location specified by the `action` attribute on the `<form>` element
- however, the form will be validated before it's sent
- this client-side validation comes in two forms - validation based on HTML5 rules and JavaScript validation using JavaScript that we've written
- validation based on HTML5 rules
    - any `required` `<input>` elements must have a value
    - any constraints imposed by `minlength` and `maxlength` attributes (which determine the minimum length and maximum length of an input value, respectively) must be observed
    - any constraints imposed by `min` and `max` attributes must be observed
    - the value provided must match the `type` that we've specified for all `<input>` elements
    - if we've defined a regular expression that the input value must match through the `pattern` attribute on an `<input>` element, that must be matched as well
- if the form input provided by the user satisfies the validation, it will be submitted
- if the form input is invalid, it won't be submitted until the user corrects the input and submits again