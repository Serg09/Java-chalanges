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
    humanChoice = yourChoice.id;
    
    botChoice = numberToChoice(randToRpsInt()); // Comp. Choice
    console.log('computerChoice', botChoice); // on my click bot do a choice
    // console.log(botChoice); // on my click bot do a choice
    
    results = decideWinner(humanChoice, botChoice); // [1, 0] or .. [0, 1]
    console.log(results);
    
    message = finalMessage(results); // 'message': "You won!", 'color': 'green')
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message); //will show front end after My Choice and Bot Choice. Result
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) { // here I give a choce 0 through 2 (3 choices)
    return ['rock', 'paper', 'scissors'][number] // and here it will give a name assigned to a number in Array
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scisors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice]; // this how your choice determent
    var computerScore = rpsDatabase[computerChoice][yourChoice]; // computer choice

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': "You lost!", 'color': 'red'};
    } else if (yourScore === 0.5) {
        return{'message': "You tied!", 'color': 'yellow'};
    } else {
        return {'message': "You Won!", 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src, // push 'rock' .id - html.   .src will include link to the image
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // let's remove all images
    document.getElementById('rock').remove(); // remove all images
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div'); // show result each in own Div
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>" // raw way of pushing image directly into HTML. Next line will show were to push
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv) // showing which flex-box and what exactly to push in there (appendChild)
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)
    document.getElementById('flex-box-rps-div').appendChild(botDiv)

}

// Challenge 4: Change the color of All Buttons
var all_buttons = document.getElementsByTagName ('button');
console.log(all_buttons);

var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++) { // this do loop through all 7 buttons
    copyAllButtons.push(all_buttons[i].classList[1]); // this one push (dublicate) all the buttons to the Array (var copyAllButtons = []; (first line))
}
console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
    // console.log(buttonThingy.value);
    if (buttonThingy.value === 'red') {
        buttonsRed();
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value === 'yellow') {
        buttonsYellow();
    } else if (buttonThingy.value === 'reset') {
        buttonColorReset();
    } else if (buttonThingy.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsYellow() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}

function buttonColorReset() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    var choices = ['btn-primary', 'btn-danger', 'btn-succes', 'btn-warning']

    for (let i=0; i < all_buttons.length; i++) {
        var randomNumber = Math.floor(Math.random() * 4); // must llop inside the Loop so it has different colors
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

// Challenge 5: BlackJack