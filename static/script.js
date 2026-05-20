const container = document.getElementById("quotes-container");
const generateButton = document.getElementById("generate-btn");

async function loadRandomQuote() {
  try {
    const response = await fetch("/get_pair");
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const { Quote: quote, Author: author } = await response.json();

    container.innerHTML = "";

    const quoteText = document.createElement("p");
    quoteText.className = "quote-text";
    quoteText.textContent = quote;

    const authorText = document.createElement("p");
    authorText.className = "quote-author";
    authorText.textContent = `— ${author}`;

    container.appendChild(quoteText);
    container.appendChild(authorText);
  } catch (err) {
    container.textContent = `Failed to load quote: ${err.message}`;
  }
}
generateButton.addEventListener("click", loadRandomQuote);
