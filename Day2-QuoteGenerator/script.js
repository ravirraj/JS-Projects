const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuote = document.getElementById('new-quote');

const url = `https://api.freeapi.app/api/v1/public/quotes/quote/random`

async function getQuote() {
    const responce = await fetch(url)
    const data = await responce.json();

    quote.innerText = `"${data.data.content}`
    author.innerText = `-${data.data.author}`
    
}


newQuote.addEventListener('click',getQuote);
getQuote()


