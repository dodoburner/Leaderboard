import './style.css'

let scores = document.querySelectorAll('li')

scores.forEach((score, index) => {
  if (index % 2 === 0) {
    score.classList.add('aqua')
  } else {
    score.classList.remove('aqua')
  }
})