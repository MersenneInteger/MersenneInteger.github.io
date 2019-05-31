document.querySelector('.guessNumBtn').addEventListener('click', function () {

  let number = null, guessNum;

  number = Math.floor((Math.random() * 10) + 1);
  console.log('random number: ' + number);
  
  while(number != guessNum) {

    guessNum = prompt('Guess a number between 1 and 10');
    if(guessNum == number || guessNum == null)
      break;
    else if(number != guessNum)
      alert('Incorrect, guess again');
  }
  if(number == guessNum)
    alert('Correct!');
});
