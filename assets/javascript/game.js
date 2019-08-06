
// variables


var RandomNumbers = [];
var CrystalNumbers = [];


for (int x=10; x<=50; x++)
{
RandomNumbers.push(x)
}

for (int x=1; x<=10; x++)
{
CrystalNumbers.push(x)
}


let randomnumberdiv = document.getElementById("RandomNumber")
let winsdiv = document.getElementById("wins")
let lossesdiv = document.getElementById("losses")

let crystal1div = document.getElementById("crystalimage1")
let crystal2div = document.getElementById("crystalimage2")
let crystal3div = document.getElementById("crystalimage3")
let crystal4div = document.getElementById("crystalimage4")

let RandomChoice = RandomNumbers[Math.floor(Math.random()*RandomNumbers.length -1)]; 
console.log(RandomChoice);

randomnumberdiv.textContent = "Random Number: " + RandomNumbers[RandomChoice];

let cry1 = crystalNumbers[Math.floor](Math.random()*crystalNumbers.length);
let cry2 = crystalNumbers[Math.floor](Math.random()*crystalNumbers.length);
let cry3 = crystalNumbers[Math.floor](Math.random()*crystalNumbers.length);
let cry4 = crystalNumbers[Math.floor](Math.random()*crystalNumbers.length);

crystal1div.textContent = CrystalNumbers[cry1];
