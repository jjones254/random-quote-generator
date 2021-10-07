# Web Development Techdegree - Project 04 #

## Random Quote Generator ##

### Project Instructions ###

* [X] Create an array of objects to store the data for your quotes
  * A data structure is necessary to store and organize the quotes in your app. A basic array of objects is a lightweight way to store information.
  * In your `js/script.js` file:
    * Create a variable named `quotes` and set it equal to an empty array.
    * Add a minimum of five empty objects to your `quotes` array.

* [X] Add data to your quote objects
  * The objects in the `quotes` array store the individual properties of the quotes.
  * Add the following properties to each quote object:
    * `quote` - string - the actual quote
    * `source` - string - the person or character who said it
  * Add a `citation` property to at least one quote object. The value should be a string holding a reference to the source of the quote, like the book, movie or song where the quote originates.
  * Add a `year` property to at least one quote object. The value should be a string or number representing the year the quote originated.

* [X] Create the `getRandomQuote` function
  * The `getRandomQuote` function should create a random number, and use that random number to return a random quote object from the `quotes` array.
    * In the function body, create a variable to store a random number ranging from zero to the index of the last item in the `quotes` array.
    * Lastly, the function should return a random quote object using the random number variable above and bracket notation on the `quotes` array.

* [X] Create the `printQuote` function
  * The app should display a new quote each time the user clicks the "Show another quote" button using a `printQuote` function.
    * You will program the `printQuote` function to perform three tasks: call the `getRandomQuote` function, use the returned quote object to build a string of HTML and quote     properties, then use that string to display a random quote in the browser.
    * In the body of the `printQuote` function, create a variable to store a random quote object from the `getRandomQuote()` function.
    * Create another variable to store the HTML string. Set it equal to a string containing two `<p>` elements. 
  
  * Use this code snippet as a guide for what the HTML string should look like at this point:
    ```html
    <p class="quote"> A random quote </p>
    <p class="source"> quote source </p>
    ```
  * The first `<p>` element should have a class equal to “quote”, and the random quote object’s `.quote` property nested between the opening and closing `<p>` tags.
  * The second `<p>` element should have a class equal to “source”, and the random quote object’s `.source` property nested between the tags.
  
* [X] Create two separate `if` statements below the variables. You will need to add decision making to this function:
  * If the random quote object has a `citation` property, concatenate a `<span>` element with the class "citation" to the HTML string.
  * If the random quote object has a `year` property, concatenate a `<span>` element with the class "year" to the HTML string.

Use the following code snippet as a guide for what the HTML string should look like with the added "citation" and "year" `<span>` elements (like earlier, omit the second closing `</p>` tag for now):
    
  ```html
  <p class="quote"> A random quote </p>
  <p class="source"> quote source
    <span class="citation"> quote citation </span>
    <span class="year"> quote year </span>
  </p>
  ```

* [X] Below the `if` statements, complete the string by concatenating a closing `</p>` tag to the HTML string. This is the closing tag for the second paragraph with the class `source`.

* [X] Lastly, set the `printQuote` function to return the full HTML string displaying a random quote.

  Use the following code snippet, along with the variable storing the string you’ve assembled, to update your project’s HTML with a random quote:

  ```javascript
  document.getElementById('quote-box').innerHTML = yourStringHere;
  ```
