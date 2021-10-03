const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');
const btnRestart = document.querySelector('.restart');

const playerGame = document.querySelector('.result p:nth-child(1) span')
const computerGame = document.querySelector('.result p:nth-child(2) span')
const drawGames = document.querySelector('.result p:nth-child(3) span')
const resultGame = document.querySelector('.result p:nth-child(4) span')

btnRock.addEventListener('click', function(){
    playGame(1)
})
btnPaper.addEventListener('click', function(){
    playGame(2)
})
btnScissors.addEventListener('click', function(){
    playGame(3)
})
btnRestart.addEventListener('click', function(){
    restartGame()
})
