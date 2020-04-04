// Chalange 1: Your Age in Days

function ageInDays() {
    var birthYear = prompt("What Year were you born... my friend?");
    var ageInDayss = (2020-birthYear) * 365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You are " + ageInDayss + " days old");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
    // console.log(ageInDayss);
}

function reset() {
    document.getElementById("ageInDays").remove();
}

// Challenge 2: Generate Cats
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen'); // get access to "flex-box-container-2" in index.html
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

function resetImage() {
    document.getElementById("flex-cat-gen").remove();
}

// Challenge 3: Rock, Paper, Scissors
function rpsGame (yourChoice) {
    console.log(yourChoice);
    // console.log(yourChoice.src);
    var humanChoice, botChoice;
    // humanChoice = yourChoice.id 
    // botChoice = numberToChoice(randToRpsInt()); // Comp. Choice
    // result = decideWinner(humanChoice, botChoice); // [1, 0] or .. [0, 1]
    // message = finalMessage(results); // 'message': "You won!", 'color': 'green')
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) { // here I give a choce 0 through 2 (3 choices)
    return ['rock', 'paper', 'scissors'][number] // and here it will give a name assigned to a number in Array
}


