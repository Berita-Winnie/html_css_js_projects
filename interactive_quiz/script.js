//Function Declaration
function checkAnswer() {
  //Identify correct answer..
  const feedback = document.getElementById('feedback')
  const submitButton = document.getElementById('submit-answer')
  const correctAnswer = '4'

  //retrieve users answer..
  const userAnswer = document.querySelector('quiz').value

  //compare users answer with the correct answer..
  if (userAnswer === correctAnswer) {
    feedback.textContent = 'Correc! well done.'
  } else if (!userAnswer === correctAnswer) {
    feedback.textContent = "That's incorrect. Try again!."
  }
}
