import appendScore from './appendScore'
const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');

const submitScore = () => {
  let nameValue = nameInput.value
  let scoreValue = scoreInput.value
  if (nameValue !== '' && scoreValue !== '') {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jXwsUKYAzNn8VCQ6q31T/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: nameValue,
        score: scoreValue
      })
    })
  }
}

export default submitScore
