printMessage('Zagrałem kamieńx! Jeśli Twój ruch to papier, to wygrywasz!');
let computerMove = `nieznany ruch`;
let playerMove=3;
let randomFraction = Math.random();
let calculation = randomFraction * 3 + 1;
let roundNumber = Math.floor(calculation);//math.floor zaokrągla wylosowaną liczbę w dół
//let randomNumber = Math.floor(Math.random() * 3 + 1); //losowanie przypadkowej liczby

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Wylosowany ułamek to: ' + randomFraction);
printMessage('Ułamek pomnożony przez 3 i powiększony o 1: ' + calculation);
printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);
//printMessage(randomNumber);



let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
if (playerInput == 1) {
	printMessage('kamień')
	playerMove = 'kamień'
	} else if (playerInput == 2) {
		printMessage('papier')
		playerMove = 'papier'
	}else if(playerInput ==3 ){
		printMessage('nożyce')
		playerMove ='nożyce'
	}else {
		printMessage ('nieautoryzowany wybór')
	  }

// if(1 > 2){
// 	printMessage('Niesamowite! Jeden jest większe niż dwa!!!');
// } else if (1 == 2) {
// 	printMessage('Dziwne – jeden jest równe dwa?!');
// } else {
// 	printMessage('Wszystko po staremu, jeden jest mniejsze niż dwa.');
// };
//console.log('Wylosowana liczba to: ' + randomNumber);

if(roundNumber == 1){
	computerMove = 'kamień';
  } else if (roundNumber == 2){
	computerMove ='papier'
  }else if (roundNumber == 3){
	computerMove ='nożyce'
  }

  if( computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
  }else if (computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('Komputer wygrywa!');
  }
  else if (computerMove == 'kamień' && playerMove == 'kamień'){
	printMessage('remis');
  }
  else if (computerMove == 'papier' && playerMove == 'nożyce'){
	printMessage('Ty wygrywasz!');
  }
  else if (computerMove == 'papier' && playerMove == 'kamień'){
	printMessage('Komputer wygrywa!');
  }
  else if (computerMove == 'papier' && playerMove == 'papier'){
	printMessage('remis');
  }

  else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
	printMessage('remis');
  }
  else if (computerMove == 'nożyce' && playerMove == 'papier'){
	printMessage('Komputer wygrywa!');
  }
  else if (computerMove == 'nożyce' && playerMove == 'kamień'){
	printMessage('Ty wygrywasz!');
  }
  


printMessage('Mój ruch to: ' + computerMove);
console.log('Gracz wpisał: ' + playerInput);

if(playerInput == '1'){
	playerMove = 'kamień';
  }
  
  printMessage('Twój ruch to: ' + playerInput);