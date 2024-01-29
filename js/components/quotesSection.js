//IMPORTS

import { quotesPageURL } from "../utility-scripts/constants.js";

// CREATING THE QUOTES SECTION

// FETCHING AND DISPLAYING QUOTES
async function fetchAndDisplayRandomQuote() {
  try {
    const response = await fetch(quotesPageURL);
    const quoteJSON = await response.json();

    // Extracting quotes from the ACF object
    const quotes = extractQuotes(quoteJSON.acf);

    // Get a random quote
    const randomQuote = getRandomQuote(quotes);

    // Display the quote in the specified container
    displayQuote(randomQuote);
  } catch (error) {
    console.error("Error during fetchAndDisplayRandomQuote:", error);
  }
}

// FUNCTION TO EXTRACT QUOTES FROM THE ACF OBJECT
function extractQuotes(acf) {
  const quotes = [];

  for (let i = 1; i <= 6; i++) {
    const quoteKey = `quote_${i}`;
    if (acf.hasOwnProperty(quoteKey)) {
      quotes.push(acf[quoteKey]);
    }
  }

  return quotes;
}

// FUNCTION TO GET A RANDOM QUOTE FROM THE ARRAY
function getRandomQuote(quotes) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// FUNCTION TO DISPLAY QUOTE IN THE CONTAINER
function displayQuote(quote) {
  const quoteContainer = document.querySelector(".quote-section");

  // Check if the container exists
  if (quoteContainer) {
    // Create a paragraph element
    const paragraph = document.createElement("p");
    paragraph.textContent = quote;
    paragraph.classList.add("quote-txt");

    // Append the paragraph to the container
    quoteContainer.innerHTML = "";
    quoteContainer.appendChild(paragraph);
  } else {
    quoteContainer.innerHTML = `
      <p class="quote-txt">“Coffee, the favorite drink of the civilized world” - Thomas Jefferson</p>
    `;
  }
}

export { fetchAndDisplayRandomQuote };
