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

function displayResult(argComputerMove, argPlayerMove) {

	if(argPlayerMove == 'kamień' && argComputerMove == 'nozyce' || argPlayerMove == 'papier' && argComputerMove == 'kamień' || argPlayerMove == 'nozyce' && argComputerMove == 'papier' ){
		printMessage('Ty wygrywasz!');
	} else if(argPlayerMove == argComputerMove){
		printMessage('Remis');
	} else {
		printMessage('Ty przegrywasz!');
	}
}

function playGame(playerInput) {
    clearMessages()
    let randomNumber = Math.floor(Math.random() * 3 + 1);


    let computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    
    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);


    displayResult(computerMove, playerMove);

}