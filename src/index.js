import './style.css'
import postScore from './submit'

const submitBnt = document.querySelector('.submit-btn');
let scores = document.querySelectorAll('li')

scores.forEach((score, index) => {
  if (index % 2 === 0) {
    score.classList.add('aqua')
  } else {
    score.classList.remove('aqua')
  }
})

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jXwsUKYAzNn8VCQ6q31T/scores')
  .then((response) => response.json())
  .then((json) => console.log(json));


submitBnt.addEventListener('click', () => {
  postScore()
})
  