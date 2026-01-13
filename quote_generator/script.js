const api_url = 'https://quoteslate.vercel.app/api/quotes/random'
const quote = document.getElementById('quote')
const author = document.getElementById('author')
const newquotebtn = document.getElementById('newquote')
const tweetbtn = document.getElementById('tweet')

async function getquote(url) {
  const response = await fetch(url)
  const data = await response.json()
  quote.innerHTML = data.quote
  author.innerHTML = data.author
}
getquote(api_url)

function tweet() {
  window.open(
    (href =
      'https://twitter.com/intent/tweet?text=' +
      quote.innerHTML +
      '---- by' +
      author.innerHTML),
    'Tweet Window',
    'width=600, height=300'
  )
}

newquotebtn.addEventListener('click', () => getquote(api_url))
tweetbtn.addEventListener('click', () => tweet())
