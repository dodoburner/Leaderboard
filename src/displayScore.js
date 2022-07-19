const board = document.querySelector('.leaderboard')
  
async function displayScores() {
  let response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jXwsUKYAzNn8VCQ6q31T/scores')
  let data = await response.json()
  console.log(data.result)
  data.result.forEach((element) => {
    let score = document.createElement('li')
    score.innerHTML = `
      ${element.user}: ${element.score}
    `
    board.appendChild(score)
  });
}

export default displayScores