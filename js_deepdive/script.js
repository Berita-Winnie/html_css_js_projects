document.addEventListener('DOMContentLoaded', function () {
  //Form selection
  const form = document.getElementById('registration-form')

  //feedback division selection
  const feedback = document.getElementById('form-feedback')

  //form submission and Event Prevention
  form.addEventListener('submit', function (event) {
    event.preventDefault()
  })
  //Input retrieval and Trimming..

  const username = document.getElementById('username').value.trim()
  const email = document.getElementById('email').value.trim()
  const password = document.getElementById('password').value.trim()

  //validation Logic
  let isValid = true // track overall validation status
  const messages = []

  //username validation
  if (username.length < 3) {
    isValid = false
    messages.push('username must contain atleast 3 characters!')
  } else if (!email.includes('@') || !email.includes('.')) {
    isValid = false
    messages.push(' invalid email! Email should contain @ and .!')
  }
  //Password validation
  if (password.length < 8) {
    isValid = false
    messages.push('password must be at least 8 characters long!')
  }

  //Display Feedback
  feedback.style.display = 'block' //make it visible
  if (isValid) {
    feedback.textContent = 'Regisration successful!'
    feedback.style.color = '#28a745'
  } else {
    feedback.innerHTML = messages.join('<br>') //error messages
    feedback.style.color = '#dc3545'
  }
})
