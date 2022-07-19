import './style.css'
import postScore from './submit'
import displayScores from './displayScores';
const submitBnt = document.querySelector('.submit-btn');

displayScores()

submitBnt.addEventListener('click', () => {
  postScore()
})
  