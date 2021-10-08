{
function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

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

let computerWins = 0;
let playerWins = 0;
let gamesDraws = 0;
let gamesPlayed = 0;

function displayResult(argComputerMove, argPlayerMove) {

	if(argPlayerMove == 'kamień' && argComputerMove == 'nozyce' || argPlayerMove == 'papier' && argComputerMove == 'kamień' || argPlayerMove == 'nozyce' && argComputerMove == 'papier' ){
		printMessage('Ty wygrywasz!');
		playerWins++
		gamesPlayed++
	} else if(argPlayerMove == argComputerMove){
		printMessage('Remis');
		gamesPlayed++
		gamesDraws++
	} else {
		printMessage('Ty przegrywasz!');
		computerWins++
		gamesPlayed++
	}
}


function playGame(playerInput) {
    clearMessages()
    let randomNumber = Math.floor(Math.random() * 3 + 1);


    let computerMove = getMoveName(randomNumber);
    printMessage('Ruch komputera: ' + computerMove);

    
    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);


    displayResult(computerMove, playerMove);


	playerGame.textContent = playerWins;
	computerGame.textContent = computerWins;
	drawGames.textContent = gamesDraws;
	resultGame.textContent = gamesPlayed;
	
}
function restartGame() {
	computerWins = 0;
	playerWins = 0;
	gamesDraws = 0;
	gamesPlayed = 0;

	playerGame.textContent = playerWins;
	computerGame.textContent = computerWins;
	drawGames.textContent = gamesDraws;
	resultGame.textContent = gamesPlayed;
}

}