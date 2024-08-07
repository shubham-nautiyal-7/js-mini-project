let userScore=0;
let compScore=0;
const choices =document.querySelectorAll(".choice"); 
const msg =document.querySelector("#msg");

const userScorePara =document.querySelector("#user_score" );
const compScorePara =document.querySelector("#computer_score");

const genCompChoice=()=>{
    const options =["rock","paper","scissors"];
    const randIdx =Math.floor(Math.random()*3);
    return options[randIdx];
};
const drowGame =()=>{
    msg.innerHTML="Game was Drow.Play again";
    msg.style.backgroundColor="#081b31";
};
const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerHTML=userScore;
        msg.innerHTML=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else{
        compScore++;
        compScorePara.innerHTML=compScore;
        msg.innerHTML=` You Lose!.${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame =(userChoice)=>{
    const compChoice =genCompChoice();
    if(userChoice===compChoice){
        drowGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin =compChoice==="paper" ? false:true;
        } else if(userChoice==="paper"){
            userWin =compChoice==="scissors" ? false:true;

        } else{
            userWin=compChoice==="rock" ? false:true;
        }
        showWinner(userWin,userChoice, compChoice);
    }
    };
 
    choices.forEach((choices)=>{
        choices.addEventListener("click",()=>{
            const userChoice=choices.getAttribute("id");
            playGame(userChoice);
        });
    });