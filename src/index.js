import './style.css'
import postScore from './submit'
import displayScores from './displayScore';
const submitBnt = document.querySelector('.submit-btn');

displayScores()

submitBnt.addEventListener('click', () => {
  postScore()
})
  