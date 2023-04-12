printMessage('Zagrałem kamieńx! Jeśli Twój ruch to papier, to wygrywasz!');
let computerMove = `nieznany ruch`;
let playerMove=3;
let randomFraction = Math.random();
let calculation = randomFraction * 3 + 1;
let roundNumber = Math.floor(calculation);//math.floor zaokrągla wylosowaną liczbę w dół
let randomNumber = Math.floor(Math.random() * 3 + 1); //losowanie przypadkowej liczby
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Wylosowany ułamek to: ' + randomFraction);
printMessage('Ułamek pomnożony przez 3 i powiększony o 1: ' + calculation);
printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);
printMessage(randomNumber);


if (playerMove=1){
printMessage('Kamień')
} else if (playerMove=2){
	printMessage('papier')
}else if(playerMove=3 ){
	printMessage('nożyce')
}

// if(1 > 2){
// 	printMessage('Niesamowite! Jeden jest większe niż dwa!!!');
// } else if (1 == 2) {
// 	printMessage('Dziwne – jeden jest równe dwa?!');
// } else {
// 	printMessage('Wszystko po staremu, jeden jest mniejsze niż dwa.');
// };
console.log('Wylosowana liczba to: ' + randomNumber);

// if(randomNumber == 1){
// 	computerMove = 'kamień';
//   }
// printMessage('Mój ruch to: ' + computerMove);
// console.log('Gracz wpisał: ' + playerInput);

// if(playerInput == '1'){
// 	playerMove = 'kamień';
//   }
  
  printMessage('Twój ruch to: ' + playerMove);