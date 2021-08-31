/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/


/** 
  This is an array of objects for storing the quote, source, citation and year values.
**/
const quotes = [
  {
    quote: `The people who are crazy enough to think they can change the world are the ones who do.`,
    source: "Steve Jobs",
    year: 2013
  },
  {
    quote: `Don't kill what you hate, save what you love.`,
    source: "Elon Musk",
    citation: "Twitter"
  },
  {
    quote: `Be the best, not the first.`,
    source: "Tim Cook"
  },
  {
    quote:`I am not in competition with anyone but myself. My goal is to improve myself continuously.`,
    source: "Bill Gates"
  },
  {
    quote: `The biggest risk is not taking any risk.`,
    source: "Mark Zuckerberg"
  }
];



/**
  Returns a random object from the 'quotes' array.
**/
function getRandomQuote() {
  
  const random = Math.floor(Math.random() * quotes.length);
 
  const quote = quotes[random]

  return quote;
}



/**
 Calls the getRandomQuote function and updates index.html with the values of the random quote.
**/
function printQuote() {
  
  const randomQuote = getRandomQuote();
  
  let quoteHtml = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`
  if (randomQuote.citation) {
    quoteHtml += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    quoteHtml += `<span class="year">${randomQuote.year}</span>`;
  }
  `</p>`;
  
  document.getElementById('quote-box').innerHTML = quoteHtml;
}


/**
  Click event listener for the print quote button.
**/
document.getElementById('load-quote').addEventListener("click", printQuote, false);