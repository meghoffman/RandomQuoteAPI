const api_url = 'https://type.fit/api/quotes';
let quote = document.getElementById("quote")

async function getPic(){
  const response = await fetch(api_url);
  const data = await response.json();
  
  const randomQuote = data[Math.floor(Math.random()*data.length)]
  console.log(randomQuote.text)
  quote.innerHTML = randomQuote.text + "<br>" + "-" + randomQuote.author
}

getPic()

let backgroundColor = document.getElementById("body")
let colors = ["blue", "green", "yellow", "white"]
let randomColors = colors[Math.floor(Math.random()*colors.length)]
console.log(randomColors)

function newStyle(){
  backgroundColor.style.background = randomColors
}

newStyle()