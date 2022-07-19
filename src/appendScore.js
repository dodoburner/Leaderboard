const board = document.querySelector('.leaderboard')

const appendScore = (name, number) => {
  let score = document.createElement('li')
  score.innerHTML = `
    ${name}: ${number}
  `
  board.appendChild(score)
  let index =[...document.querySelectorAll('li')].length
  if (index % 2 === 0) {
    score.classList.add('aqua')
  } else {
    score.classList.remove('aqua')
  }
}

export default appendScore