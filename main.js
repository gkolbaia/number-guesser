

let min = 1,
    max = 10;
    winningNum =getRandomNum(min,max);
    guessesLeft = 3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
      
      function getRandomNum(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    } 
    function setMessage(msg,color){
        message.textContent=msg;
        message.style.color=color;
        guessInput.style.borderColor=color;
    }
    function gameOver(){
        guessInput.disabled =true;
        guessBtn.value = 'Play again';
        guessBtn.className += 'play-again';
    }
    game.addEventListener('mouseup',function(e){
        if(e.target.className === 'play-again'){
            window.location.reload();
        }
    })
    

    
    guessBtn.addEventListener('click', function(){
       
    if(String(guessInput.value).length==0||guessInput.value<min||guessInput.value>max){
        setMessage(`Enter number between ${min} and ${max}`,'red');

    }else{
        
        if(parseInt(guessInput.value)==winningNum){
            setMessage(`${guessInput.value} is correct, YOU WON`, 'green')
            gameOver();
        }else{
            guessesLeft-=1;
            setMessage(`${guessInput.value} is incorrect, ${guessesLeft} guesses left`,'red')
            if(guessesLeft==0){
                setMessage(`GAME OVER, Correct number was ${winningNum}`);
                gameOver();
            }
        }
    }

    })