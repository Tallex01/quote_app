async function loadRandomQuote() {
  const container = document.getElementById("quotes-container");

  try {
    const response = await fetch("/get_pair");
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const { Quote: quote, Author: author } = await response.json();

    container.innerHTML = "";

    const card = document.createElement("div");
    card.className = "quote-card";

    const quoteText = document.createElement("p");
    quoteText.className = "quote-text";
    quoteText.textContent = quote;

    const authorText = document.createElement("p");
    authorText.className = "quote-author";
    authorText.textContent = `— ${author}`;

    card.appendChild(quoteText);
    card.appendChild(authorText);
    container.appendChild(card);
  } catch (err) {
    container.textContent = `Failed to load quote: ${err.message}`;
  }
}

const generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", loadRandomQuote);
