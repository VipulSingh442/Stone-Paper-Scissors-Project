let userscore = 0;
let compscore = 0;
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

const drawGame = (()=>{
       
       msg.innerText="Game Draw! Play again";
       msg.style.backgroundColor="#081b31";
       
        
});

const showWinner = ((userWin , userchoice , compChoice) => {
    if(userWin)
    {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText=`You Win! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText=`You lost! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }

});

const getCompChoice = (()=>{
    const options = ["rock","paper","scissors"];
    const randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
});

const playGame = ((userchoice) =>{
    console.log("user choice is",userchoice);
    const compChoice = getCompChoice();
    console.log("comp shoice is ",compChoice);
    let userWin = true;

    if(userchoice === compChoice)
    {
        drawGame();
    }
    else{
        if(userchoice === "rock")
        {
            userWin = (compChoice === "paper")? false : true;
        }
        else if(userchoice === "paper")
        {
            userWin = (compChoice === "scissors"? false : true);
        }
        else if(userchoice === "scissors")
        {
            userWin = (compChoice === "rock")? false : true;
        }
        showWinner(userWin , userchoice , compChoice);
    }
    
    
});

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});