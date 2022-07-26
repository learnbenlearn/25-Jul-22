# CSS

- CSS stands for Cascading Style Sheets
- it's what we use to style our HTML pages
- whenever the browser displays an HTML page, it first loads and parses the HTML to create the Document Object Model (DOM) tree, which represents the page
    - then the browser will load and parse the CSS to style the appropriate nodes of the DOM tree (i.e. the elements in our HTML)
    - once this is completed, the browser will display the content of the page to the user
- rulesets (or rules) are a collection of selectors and properties that specify which element(s) to style and the styling to apply
- declarations follow the curly braces in a ruleset and are the property/value pairs
- selectors indicate which element(s) to apply the styling to
- properties determine the kind of styling that we're applying
- values is given to the property to specify the applied style

```css
div {
    align-content: center
}
```

## CSS Selectors

- when writing a selector, we can select by tag, class, id, and/or by other attributes
- for tag selectors, we'll just use the name of the corresponding tag to select all elements with the specified tag, e.g.

```css
div {

}
```

- for class selectors, we'll prefix the class name with a period to select all elements with the provided class

```css
.input {

}
```

- for id selectors, we'll prefix the id name with a hashtag to select the element with the specified id

```css
#checkbox {

}
```

- to select by additional attributes, we can specify the attribute name-value pair in square brackets
    - e.g. to select all paragraph elements that are centered,

```css
p[align="center"] {

}
```

- we can combine multiple selectors by specifying them without a space in between
    - e.g. to select only the paragraph elements with the `description` class

```css
p.description {

}
```

- we can specify requirements for ancestor elements by including a space between selectors
    - e.g. to select only the paragraph elements within a `<div>` element

```css
div p {

}
```

- to select multiple different elements with different attributes/classes, we can separate selectors by commas
    - e.g., to select all paragraph elements and all elements that have the `description` class

```css
p,.description {

}
```

## CSS Locations

- we can include CSS inline, internally in our HTML page, or externally in a separate stylesheet
- we specify inline CSS by setting the `style` attribute of our HTML page
    - when using inline CSS, we don't include any selectors or curly braces
    - rather we just include property-value pairs

```css
<div style="background-color:blue">This div tag will have a blue background</div>
```

- we specify internal CSS by including a `<style>` element within our page's `<head>`
    - this will have the same appearance as external CSS (i.e. we'll have rulesets with selectors followed by curly braces containing declarations)
- we specify external CSS by creating a `.css` file and providing a relative path to that file in the `<link>` element of our page's `<head>`
    - within the CSS file, we'll have rulesets with selectors followed by curly braces containing declarations

## CSS Specificity

- oftentimes, a single element in our HTML will be matched by multiple different rulesets
- so we need a way to determine which ruleset will take precedence and have its declarations applied to the element
- any element that contains inline styling will have those declarations applied to it - inline styling takes precedence over internal and external styling in all cases
- to determine precedence between internal and external rulesets, we calculate the specifity as follows through a three-column calculation
    - the first column is the number of `id` values in the selector that the element matches
    - the second column is the number of classes and attribute selectors in the selector that the element matches
    - the third column is the number of tag selectors that the element matches
- once the specificity score is calculated, it's evaluated from left to right
    - so the ruleset with the highest value for the first column will take precedence
    - if there's a tie in the first column, the ruleset with the highest value in the second column will take precedence
    - if there's a tie in the first two columns, the ruleset with the highest value for the third column will take precedence
    - if multiple rulesets have the same value for all three columns, the ruleset that's declared last will take precedence

## The Box Model

- the box model is a container that wraps around each HTML element in our page
- it consists of four layers: (from outermost to innermost) margin, border, padding, and the content
- the margin is a transparent space outside of an element's border
- the border is an opaque perimeter around the element
- the padding is spacing between the border and the content
- the content is the text/images of our element

<p align="center"><img src="./box_model.jpg"></p>

- we can apply styling at each layer of the box model

### Styling Margins
    
- we can style an element's margins through the `margin`, `margin-bottom`, `margin-left`, `margin-top`, and/or `margin-right` properties
- `margin` is a shorthand property (a shorthand property implicitly determines the values of more specific properties) and lets us specify the width of the margin through either relative or absolute sizes
- if we use a relative size, the margin will adapt based on the size of the window being used to view it
- we specify relative sizes through percentages or the `em` unit (which relates to an element's font)
- if we use an absolute size, we have a variety of units we can use, including pixels (px), cm, and in
- because `margin` is a shorthand property, we can pass a different number of values to it
    - if we pass one value to `margin`, it'll be applied to all four sides of the element
    - if we pass two values to the `margin`, the first will be applied to the top and bottom margin and the second will be applied to the left and right margins
    - if we pass three values to the `margin`, they'll be applied to (in order) the top, left/right, and bottom margins
    - if we pass four values to the `margin`, they'll be applied to (in order) the top, right, bottom, and left margins
- we can specify the margin for a particular side of the element through the `margin-left`, `margin-right`, `margin-top`, or `margin-bottom` properties, which each take a single value that applies to their respective side

### Styling Borders

- border properties include `border`, `border-bottom`, `border-left`, `border-top`, `border-right`, and `border-color`
- the first of these are shorthand properties
- the `border` property takes values for (in order) the border width, border style, and the color of the border
- border width
    - can be `thin`, `medium`, `thick`, a relative size, or an absolute size
    - it can take multiple values in an analogous way to the `margin` property
- border style
    - required
    - determines the line style of the border
    - can take values including `dotted`, `solid`, and `dashed`
- border color
    - can be color names (e.g. `black` or `blue`), hexadecimal values prefixed with a hashtag, or the `rgb()` function
    - the `rgb()` function takes comma separated values between 0 and 255 for red, green, and blue
- `border-bottom`, `border-top`, `border-right`, and `border-left` hold the same values as `border` property (width, style, and color) but only apply to their respective side of the element
- we can specify the border's color separately through the `border-color` property

### Styling Padding

- we specify padding through one or more of the `padding`, `padding-bottom`, `padding-left`, `padding-right`, and/or `padding-top` properties
- each of these properties functions analogously to the corresponding margin property and takes a width value

## Responsive Web Design

- to make a webpage responsive, we implement styling so that the elements on the page adapt to the size of the screen being used to view them
- we can implement responsive web design by
    - setting the `viewport` in our `<head>` element
        - the viewport is a feature from HTML5 that allows us to tell the browser how to control the size and scale of the document based on the device being used to view it
    - using `<picture>` tags for images
        - within `<picture>` tags, we'll include `<source>` tags
        - `<source>` elements have a `media` attribute that we can use to set the minimum width allowed for a particular picture to display
        - if the size of the screen is smaller than the specified width, the image will not render
    - relative styling, such as using percentages/em values for widths rather than absolute values and also using responsive layout systems

## Flexbox

- flexbox is a responsive container for holding our HTML elements
- to use flexbox, we'll set the `display` property for an element to `flex`
- then we can use various flexbox properties within, including
    - `flex-direction`, which determines how our elements are rendered
        - can take values including `row` (which renders the elements in a row), `row-reverse` (which renders the elements in a row in the reverse of the order that they're defined), `column` (which displays the elements in a column), and `column-reverse` (which displays the elements in a columnh in the reverse of the order in which they're defined)
    - `flex-wrap`, which takes a value of `wrap` and will let our elements wrap to the next line when the end of the window is reached
    - `flex-flow`, which is a shorthand property that takes values for both the wrap and direction (in that order) of the flexbox 
