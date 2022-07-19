import appendScore from './appendScore'
import addScoreStyle from './addScoreStyle'
 
async function displayScores() {
  let response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jXwsUKYAzNn8VCQ6q31T/scores')
  let data = await response.json()
  data.result.forEach((element) => {
    appendScore(element.user, element.score)
  });
}

export default displayScores
