   let score = JSON.parse(localStorage.getItem('score')) || {
          wins: 0,
          loses: 0,
          ties: 0
        };
        
        updateScoreElement()
       
    function playGame(playerMove){
      console.log('playGame called with', playerMove);

      const computerMove = pickComputerMove();
      console.log('computerMove generated', computerMove);

      let result = '';

      if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
          result = 'Player loses.';
        } else if (computerMove === 'Paper') {
          result = 'Player wins.';
        } else {
          result = 'The match is a tie.';
        }
      } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
          result = 'Player wins.';
        } else if (computerMove === 'Paper') {
          result = 'The match is a tie.';
        } else {
          result = 'Player loses.';
        }
      } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
          result = 'The match is a tie.';
        } else if (computerMove === 'Paper') {
          result = 'Player loses.';
        } else {
          result = 'Player wins.';
        }
      } else {
        result = 'Invalid move.';
      }

      if(result === 'Player wins.'){
        score.wins += 1;
      }
      else if (result === 'Player loses.')
      {
        score.loses += 1;
      }
      else if(result === 'The match is a tie.')
      {
        score.ties += 1;

      }

      localStorage.setItem('score', JSON.stringify
      (score));

      updateScoreElement();

      document.querySelector('.js-result').
      innerHTML = result;

      document.querySelector('.js-moves')
      .innerHTML = `Player
      <img src= "images/${playerMove}-emoji.png"
      class="move">
      <img src = "images/${computerMove}-emoji.png"
      class="move"> Computer`;

    }

    function updateScoreElement(){
      document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}` ;

    }

   
    function pickComputerMove() {
      const randomNumber3 = Math.random();
      let computerMove = '';

      if (randomNumber3 >= 0 && randomNumber3 < 1/3) {
        computerMove = 'Rock';
      } else if (randomNumber3 >= 1/3 && randomNumber3 < 2/3) {
        computerMove = 'Paper';
      } else {
        computerMove = 'Scissors';
      }
      return computerMove;
    }

