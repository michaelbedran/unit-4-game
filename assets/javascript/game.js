
// variables


const randnumber = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
const cryst1 = [1,2,3,4,5,6,7,8,9,10]
const cryst2 = [1,2,3,4,5,6,7,8,9,10]
const cryst3 = [1,2,3,4,5,6,7,8,9,10]
const cryst4 = [1,2,3,4,5,6,7,8,9,10]


// need to set up a start and clear scenario for when the game is won or lost

// started random number generator with for loop 

for (let i = 0; i < randnumber.length; i++) {

    const randnumbersbtn = document.createElement("rndbtn");

}

// started on-click event for crystals

document.querySelectorAll(".crystalImages").forEach(function(node){
    node.addEventListener("click", function() {

        alert("You clicked a crystal!");

    });
})

// need to set up random number generated for each crystal that resets after the game is over

// need if else statments to compare the randomnumber with the summation of chosen crystals to determine win or lose



