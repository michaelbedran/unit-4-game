
// variables


const RandomNumbers = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
const crystalNumbers = [1,2,3,4,5,6,7,8,9,10]


let randomnumberdiv = document.getElementById("RandomNumber")
let winsdiv = document.getElementById("wins")
let lossesdiv = document.getElementById("losses")

let crystal1div = document.getElementById("crystalimage1")
let crystal2div = document.getElementById("crystalimage2")
let crystal3div = document.getElementById("crystalimage3")
let crystal4div = document.getElementById("crystalimage4")

let RandomChoice = RandomNumbers[Math.floor(Math.random()*RandomNumbers.length)]; 
console.log(RandomChoice);

randomnumberdiv.textContent = "Random Number: " + RandomChoice;

let cry1 = crystalNumbers[Math.floor](Math.random()*crystalNumbers.length);
let cry2 = crystalNumbers[Math.floor](Math.random()*crystalNumbers.length);
let cry3 = crystalNumbers[Math.floor](Math.random()*crystalNumbers.length);
let cry4 = crystalNumbers[Math.floor](Math.random()*crystalNumbers.length);

crystal1div.textContent = cry1
