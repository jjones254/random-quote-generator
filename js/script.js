/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: `"The people who are crazy enough to think they can change the world are the ones who do."`,
    source: "Steve Jobs",
    year: 2013
  },
  {
    quote: `"Don't kill what you hate, save what you love."`,
    source: "Elon Musk",
    citation: "Twitter"
  },
  {
    quote: `"Be the best, not the first."`,
    source: "Tim Cook"
  },
  {
    quote:`"I am not in competition with anyone but myself. My goal is to improve myself continuously."`,
    source: "Bill Gates"
  },
  {
    quote: `"The biggest risk is not taking any risk."`,
    source: "Mark Zuckerberg"
  }
];

console.log(quotes);


/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);