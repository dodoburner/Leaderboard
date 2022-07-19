import './style.css';
import submitScore from './submitScore';
import displayScores from './displayScores';

const submitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh-btn');

submitBtn.addEventListener('click', () => {
  submitScore();
});

refreshBtn.addEventListener('click', () => {
  displayScores();
});
