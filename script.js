console.log("Hello Javascript!")

function getComputerChoice(choices){
//let choices = ["Pierre","Papier", "Ciseaux"];
let randomChoices = choices[Math.floor(Math.random() * choices.length)];
return randomChoices
}
let choiceComputer = getComputerChoice(["Pierre","Papier", "Ciseaux"])
console.log("Votre adversaire joue " + choiceComputer);

