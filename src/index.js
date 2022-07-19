import './style.css'
import submitScore from './submitScore'
import displayScores from './displayScores';
const submitBnt = document.querySelector('.submit-btn');

displayScores()

submitBnt.addEventListener('click', () => {
  submitScore()
})
  