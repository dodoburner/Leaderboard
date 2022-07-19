let scores = document.querySelectorAll('li')

const addScoreStyle = () => {
  scores.forEach((score, index) => {
    if (index % 2 === 0) {
      score.classList.add('aqua')
    } else {
      score.classList.remove('aqua')
    }
  })
}

export default addScoreStyle
