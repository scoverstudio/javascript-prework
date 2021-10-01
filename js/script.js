const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');


function playGame(playerInput) {
    clearMessages()
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    function getMoveName(arg) {
        if(arg == '1') {
            return 'kamień'
        } else if(arg == '2') {
            return 'papier'
        } else if(arg == '3') {
            return 'nozyce'
        } else {
            return 'nieznany ruch'
        }
    }

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);


    printMessage('Mój ruch to: ' + computerMove);



    console.log('Gracz wpisał: ' + playerInput);


    let playerMove = getMoveName(playerInput);


    printMessage('Twój ruch to: ' + playerMove);


    function displayResult(argComputerMove, argPlayerMove) {
        if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'nozyce') {
            printMessage('Ty przegrywasz!');
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Remis');
        }

        if(argComputerMove == 'papier' && argPlayerMove == 'nozyce') {
            printMessage('Ty wygrywasz!');
        } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Ty przegrywasz!');
        } else if(argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Remis');
        }

        if(argComputerMove == 'nozyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        } else if(argComputerMove == 'nozyce' && argPlayerMove == 'papier') {
            printMessage('Ty przegrywasz!');
        } else if(argComputerMove == 'nozyce' && argPlayerMove == 'nozyce') {
            printMessage('Remis');
        }

        if(argPlayerMove == 'nieznany ruch') {
            printMessage('Musisz podać liczbę od 1 do 3!');
        }
    }

    displayResult(computerMove, playerMove);

}
btnRock.addEventListener('click', function(){
    playGame(1)
})
btnPaper.addEventListener('click', function(){
    playGame(2)
})
btnScissors.addEventListener('click', function(){
    playGame(3)
})