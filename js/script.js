const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');


btnRock.addEventListener('click', function(){
    playGame(1)
})
btnPaper.addEventListener('click', function(){
    playGame(2)
})
btnScissors.addEventListener('click', function(){
    playGame(3)
})