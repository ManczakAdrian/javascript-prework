

let randomFraction = Math.random();
let calculation = randomFraction * 3 + 1;
let roundNumber = Math.floor(calculation);//math.floor zaokrągla wylosowaną liczbę w dół
//let randomNumber = Math.floor(Math.random() * 3 + 1); //losowanie przypadkowej liczby
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

//let computerMove = getMoveName(2,3);

//function getMoveName (){
//	return (papier,nożyce);
//}

if(roundNumber == 1){
	computerMove = 'kamień';
  } else if (roundNumber == 2){
	computerMove ='papier'
  }else if (roundNumber == 3){
	computerMove ='nożyce'
  }

 
  
  
	function displayResult(computerMove, playerMove){
		printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
	  
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
		}
		displayResult(computerMove, playerMove);

//   if( computerMove == 'kamień' && playerMove == 'papier'){
// 	printMessage('Ty wygrywasz!');
//   }else if (computerMove == 'kamień' && playerMove == 'nożyce'){
// 	printMessage('Komputer wygrywa!');
//   }
//   else if (computerMove == 'kamień' && playerMove == 'kamień'){
// 	printMessage('remis');
//   }
//   else if (computerMove == 'papier' && playerMove == 'nożyce'){
// 	printMessage('Ty wygrywasz!');
//   }
//   else if (computerMove == 'papier' && playerMove == 'kamień'){
// 	printMessage('Komputer wygrywa!');
//   }
//   else if (computerMove == 'papier' && playerMove == 'papier'){
// 	printMessage('remis');
//   }

//   else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
// 	printMessage('remis');
//   }
//   else if (computerMove == 'nożyce' && playerMove == 'papier'){
// 	printMessage('Komputer wygrywa!');
//   }
//   else if (computerMove == 'nożyce' && playerMove == 'kamień'){
// 	printMessage('Ty wygrywasz!');
//   }
  


printMessage('Mój ruch to: ' + computerMove);
console.log('Gracz wpisał: ' + playerInput);

if(playerInput == '1'){
	playerMove = 'kamień';
  }
  
  printMessage('Twój ruch to: ' + playerInput);

  let change1 = calculateChange(13, 20);
printMessage('Do zapłaty 13zł, zapłacono 20zł, reszta: ' + change1);

let change2 = calculateChange(77, 100);
printMessage('Do zapłaty 77zł, zapłacono 100zł, reszta: ' + change2);

function calculateChange(argPrice, argPaidAmount) {
	console.log('wywołano calculateChange')
	console.log('argumenty: ' + argPrice + ', ' + argPaidAmount);
	return (argPaidAmount - argPrice);
  }

  function buttonClicked(){
	printMessage('Guzik został kliknięty');
  }
  
  let Kamien = document.getElementById('play-rock');
  let papier = document.getElementById('play-paper');
  let nożyce = document.getElementById('play-scissors');

  Kamien.addEventListener('click', buttonClicked);
  papier.addEventListener('click', buttonClicked);
  nożyce.addEventListener('click', buttonClicked);

document.getElementById('play-rock').addEventListener('click', function(){
	printMessage('Guzik został kliknięty');
	displayResult(computerMove, "kamień")
  });

document.getElementById('play-paper').addEventListener('click', function(){
	printMessage('Guzik został kliknięty');
	displayResult(computerMove, "papier")
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
	printMessage('Guzik został kliknięty');
	displayResult(computerMove, "nożyce")
  });
 
 
 
  



// let firstNumber = 1;
// let secondNumber = 2;
// let thirdNumber = 3;

  function sumThreeNumbers(firstNumber, secondNumber, thirdNumber){
	const sum = firstNumber + secondNumber + thirdNumber;
	return sum;
  }

  const sum=sumThreeNumbers(1,2,3);
  console.log(sum);
  printMessage(sum);
