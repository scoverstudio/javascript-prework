
{
    const btnRock = document.getElementById('rock');
    const btnPaper = document.getElementById('paper');
    const btnScissors = document.getElementById('scissors');
    const btnRestart = document.querySelector('.restart');

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
}
