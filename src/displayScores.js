import appendScore from './appendScore';

const board = document.querySelector('.leaderboard');

async function displayScores() {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jXwsUKYAzNn8VCQ6q31T/scores');
  const data = await response.json();
  let dataArray = data.result;
  dataArray = dataArray.sort((a, b) => b.score - a.score);
  board.innerHTML = '';
  dataArray.forEach((element) => {
    appendScore(element.user, element.score);
  });
}

export default displayScores;
