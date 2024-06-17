const score=JSON.parse(localStorage.getItem('score')) ||
{
    Wins: 0,
    losses:0,
    tie:0 
}    


UpdatedScore();

let isAutoPlaying=false;
let intervalId;

function autoPlay(){
    if(!isAutoPlaying){
        intervalId=
    setInterval(function (){
        const playerMove=pickComputerMove();
playGame(playerMove);
    },2000);
    isAutoPlaying=true;
}else{
    clearInterval(intervalId);
    isAutoPlaying=false;
}
}

/*document.querySelector('.js_rock_button').addEventListener('click ',()=>{
    playGame('rock');
});*/

/*let computerMove = '';*/

document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r'){
playGame('rock');et
    } 
    else if(event.key==='p'){
        playGame('paper');
            } 
else if(event.key==='s'){
    playGame('scissor');
        } });

        function playGame(playerMove) {
            computerMove = pickComputerMove();

    let result = '';
    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        }
        else if (computerMove === 'Paper') {
            result = 'you lose';
        }
        else if (computerMove === 'Scissor') {
            result = 'you won';
        }
    }

    else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'you won';
        }
        else if (computerMove === 'Paper') {
            result = 'Tie';
        }
        else if (computerMove === 'Scissor') {
            result = 'you lose';
        }
    }


    else if (playerMove === 'Scissor') {
        if (computerMove === 'Rock') {
            result = 'you lose';
        }
        else if (computerMove === 'Paper') {
            result = 'you won';
        }
        else if (computerMove === 'Scissor') {
            result = 'Tie';
        }

    }
    if(result==='you won'){
    score.Wins+=1;
    }
    else if(result==='you lose'){
    score.losses+=1;
    }
    else if(result==='Tie'){
    score.tie+=1;
    }


    localStorage.setItem('score',JSON.stringify(score));

   

           document.querySelector('.js_result').innerHTML=result;
   
   
           document.querySelector('.js_move').innerHTML=`  You
            <img src="images/${playerMove}-emoji.png" alt="" class="move_icon">
            <img src="images/${computerMove}-emoji.png" alt="" class="move_icon">
            Computer`;
   UpdatedScore();
        }

function UpdatedScore(){ document.querySelector('.js_score')
.innerHTML=  `wins:${score.Wins}, losses:${score.losses}, tie:${score.tie}`;
}



function pickComputerMove() {
    const randomNumber = Math.random();
    console.log(randomNumber)
    if (randomNumber > 0 && randomNumber <= 1 / 3) {
        computerMove = 'Rock';
       

    } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
        computerMove = 'Paper';
        
    }

    else if (randomNumber > 2 / 3 && randomNumber <= 1) {
        computerMove = 'Scissor';
    }
    return computerMove
}
