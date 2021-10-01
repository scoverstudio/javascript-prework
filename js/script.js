let randomNumber = Math.floor(Math.random() * 3 + 1);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

function getMoveName(arg) {
    if(arg == 1) {
        return 'kamień'
    } else if(arg == 2) {
        return 'papier'
    } else if(arg == 3) {
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

// if(playerMove == 'nieznany ruch') {
//     printMessage('Musisz podać liczbę od 1 do 3!');
// }


// if(computerMove == 'kamień' && playerMove == 'papier') {
//     printMessage('Ty wygrywasz!');
// } else if(computerMove == 'kamień' && playerMove == 'nozyce') {
//     printMessage('Ty przegrywasz!');
// } else if(computerMove == 'kamień' && playerMove == 'kamień') {
//     printMessage('Remis');
// }

// if(computerMove == 'papier' && playerMove == 'nozyce') {
//     printMessage('Ty wygrywasz!');
// } else if(computerMove == 'papier' && playerMove == 'kamień') {
//     printMessage('Ty przegrywasz!');
// } else if(computerMove == 'papier' && playerMove == 'papier') {
//     printMessage('Remis');
// }

// if(computerMove == 'nozyce' && playerMove == 'kamień') {
//     printMessage('Ty wygrywasz!');
// } else if(computerMove == 'nozyce' && playerMove == 'papier') {
//     printMessage('Ty przegrywasz!');
// } else if(computerMove == 'nozyce' && playerMove == 'nozyce') {
//     printMessage('Remis');
// }
