console.log("Hello Javascript!")

function getComputerChoice(choices){
//let choices = ["pierre","papier", "ciseaux"];
let randomChoices = choices[Math.floor(Math.random() * choices.length)];
return randomChoices
}
let choiceComputer = getComputerChoice(["pierre","papier", "ciseaux"])
console.log("Votre adversaire joue " + choiceComputer);


// SALOME EXO 3
let choice = prompt ("Quel est votre choix?")
function getHumanChoice(choice){
    let choices = ["pierre", "papier", "ciseaux"];
    if (choices.includes(choice)) {
        return choice;
    } else {
        alert("Choix invalide, veuillez choisir entre pierre, papier ou ciseaux.");
        return null;
    }
}
appelerfunction =  getHumanChoice(choice)
console.log ("Vous avez joué: " + choice)

// étape 4
let humanScore = 0;
let computerScore = 0;

// étape 5
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if(humanChoice === computerChoice) 
        return "Égalité !"
    else if ((humanChoice === "pierre" && computerChoice === "ciseaux") ||
             (humanChoice === "papier" && computerChoice === "pierre") ||
             (humanChoice === "ciseaux" && computerChoice === "papier")) {
        humanScore++;
        return "Vous avez gagné !";
    } else if ((computerChoice === "pierre" && humanChoice === "ciseaux") ||
               (computerChoice === "papier" && humanChoice === "pierre") ||
               (computerChoice === "ciseaux" && humanChoice === "papier")) {
        computerScore++;
        return "L'ordinateur a gagné !";
    } else {
        return "Choix invalide, veuillez choisir entre pierre, papier ou ciseaux.";
    }  
}
appelerfunction = playRound("ciseaux", "papier", "pierre")
console.log(appelerfunction)








