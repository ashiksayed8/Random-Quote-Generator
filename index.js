const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");


async function getQuote(){
    try {
        btnEl.innerText = "Loading------"
        btnEl.disabled = true;
        quoteEl.innerText = `Update-----------`;
        authorEl.innerText = `Author Update----`;
        const result = await fetch("https://api.quotable.io/random")
                    .then(data => data.json());
        quoteEl.innerText =  result.content;
        authorEl.innerText = `~${result.author}`;
        btnEl.disabled = false;
        btnEl.innerText = `Get a quote`
    } catch (error) {
        quoteEl.innerText =  `An error ,try again later`;
        authorEl.innerText = `An Error`;
    }
}


btnEl.addEventListener("click", getQuote());