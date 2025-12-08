console.log('JavaScript is linked correctly!')

// Quotes array with simple sample dta
const quotes = [
  {
    text: 'The only way to do great work is to love what you do.',
    category: 'Motivation',
  },
  {
    text: 'In the middle of every difficulty lies opportunity.',
    category: 'Inspiration',
  },
  {
    text: 'Do what you can, with what you have, where you are.',
    category: 'Wisdom',
  },
]

// Where quotes will be dissplayed
const quoteDisplay = document.getElementById('quoteDisplay')
const quoteForm = document.getElementById('quoteForm')
const newQuote = document.getElementById('newQuote')
// Show a random quote
function showRandoQuote() {
  if (quotes.length === 0) {
    quoteDisplay.textContent = 'No quotes available'
    return
  }

  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]
  quoteDisplay.textContent = `"${randomQuote.text}" - ${randomQuote.category}`
}

//Create a form to add new quotes

const form = document.createElement('form')

//create input for quote text
const quoteInput = document.createElement('input')
quoteInput.type = 'text'
quoteInput.placeholder = 'Enter quote text'
quoteInput.required = true

//Create input for category
const categoryInput = document.createElement('input')
categoryInput.type = 'text'
categoryInput.placeholder = 'enter quote category'
categoryInput.required = true

// create button
const addButton = document.createElement('button')
addButton.type = 'submit'
addButton.textContent = 'Add Quote'

//Placing everything in the form
form.appendChild(quoteInput)
form.appendChild(categoryInput)
form.appendChild(addButton)

//Add form to the page..
quoteForm.appendChild(form)

//event Listener for submission
form.addEventListener('submit', (e) => {
  e.preventDefault() //Stop page reload
  const newQuote = {
    text: quoteInput.value,
    category: categoryInput.value,
  }
  quotes.push(newQuote)
  showRandoQuote()
  form.reset()
})
