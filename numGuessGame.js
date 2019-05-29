function guessNum() {

    let number = null, guessNum;
  
    number = Math.floor((Math.random() * 10) + 1);
    console.log('random number' + number);
    while(number != guessNum) {
      guessNum = prompt('Guess a number between 1 and 10');
      if(guessNum == null)
        return;
      if(parseInt(guessNum) == NaN)
        alert('Not a number, guess again');
      else if(number != guessNum)
        alert('Incorrect, guess again');
    }
    if(number == guessNum)
      alert('Correct!');
  }