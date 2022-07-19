import './style.css'
import postScore from './submit'
import displayScores from './displayScore';

const submitBnt = document.querySelector('.submit-btn');
let scores = document.querySelectorAll('li')

scores.forEach((score, index) => {
  if (index % 2 === 0) {
    score.classList.add('aqua')
  } else {
    score.classList.remove('aqua')
  }
})


displayScores()

submitBnt.addEventListener('click', () => {
  postScore()
})
  