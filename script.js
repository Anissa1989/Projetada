console.log("Hello Javascript!")
=======
console.log("Hello Javascript");
>>>>>>> Stashed changes

function getComputerChoice(choices){
//let choices = ["Pierre","Papier", "Ciseaux"];
let randomChoices = choices[Math.floor(Math.random() * choices.length)];
return randomChoices
}
let choiceComputer = getComputerChoice(["Pierre","Papier", "Ciseaux"])
console.log("Votre adversaire joue " + choiceComputer);

let choice = prompt ("Quel est votre choix?")
function getHumanChoice(choice) {
    alerte ("Vous avez joué: " + choice)}
console.log ("Vous avez joué: " + choice)
