
async function getRandomQuote() {
    const quoteContainer = document.getElementById('quoteContainer');
  
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
  
      const quoteText = data.content;
      const quoteAuthor = data.author;
  
      quoteContainer.textContent = `"${quoteText}" - ${quoteAuthor}`;
    } 
    
    catch (error) {
      console.error('Error fetching quote data:', error);
      quoteContainer.textContent = 'Error fetching quote data';
    }
  }
