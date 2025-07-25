console.log("Hello Javascript!")

function getComputerChoice(choices){
//let choices = ["Pierre","Papier", "Ciseaux"];
let randomChoices = choices[Math.floor(Math.random() * choices.length)];
return randomChoices
}
let choiceComputer = getComputerChoice(["Pierre","Papier", "Ciseaux"])
console.log("Votre adversaire joue " + choiceComputer);


// SALOME EXO 3
let choice = prompt ("Quel est votre choix?")
function getHumanChoice(choice){
    let choices = ["Pierre", "Papier", "Ciseaux"];
    if (choices.includes(choice)) {
        return choice;
    } else {
        alert("Choix invalide, veuillez choisir entre Pierre, Papier ou Ciseaux.");
        return null;
    }
}
appelerfunction =  getHumanChoice(choice)
console.log ("Vous avez joué: " + choice)







