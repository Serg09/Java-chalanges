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

let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'K':10, 'J':10, 'Q':10, 'A':[1,11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnOver': false,
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

// when id=blackjack-hit-button cliked (html) then eventListener listen for 'click'
// event and run blackjackHit function
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {
    if (blackjackGame['isStand'] === false) { // this function is run only if Stand Button is not activated
        let card = randomCard();
        // console.log(card);
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);

        // showResult(computeWinner());
        // console.log(YOU['score']);
    }
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <=21) { // If statement showing card until score is less then 21
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`; // ${card} makes 'card' variable. use backslash quotes
        document.querySelector(activePlayer['div']).appendChild(cardImage); // place img to the right box Yopu
        hitSound.play();
    }
}

function blackjackDeal() {
    if (blackjackGame['turnOver'] === true) {

        blackjackGame['isStand'] = false;
        
        // let winner = computeWinner(); // line 1: Line 1 & 2 same as line 3
        // showResult(winner); // line 2:
        // showResult(computeWinner()); // !!! this should be here if you want to play with real person. Otherwise it shopuld not be here
        
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        // console.log(yourImages);
        // yourImages[0].remove(); // to remove all images use for loop (below)

        for (i=0; i < yourImages.length; i++) { // reseting all your images
            yourImages[i].remove();
        }

        for (i=0; i < dealerImages.length; i++) { // reseting dealer images
            dealerImages[i].remove();
        }

        YOU['score'] = 0; // with removing images it's also reset the score, Set it to 0
        DEALER['score'] = 0; // it is important it reset score internaly so we can still can count total score

        document.querySelector('#your-blackjack-result').textContent = 0; // reset to 0 when 'Deal' clicked
        document.querySelector('#dealer-blackjack-result').textContent = 0; //reset to 0 when 'Deal' clicked

        document.querySelector('#your-blackjack-result').style.color = '#ffffff'; // reset color back to white
        document.querySelector('#dealer-blackjack-result').style.color = '#ffffff'; // reset color back to white

        document.querySelector('#blackjack-result').textContent = "Let's play";
        document.querySelector('#blackjack-result').style.color = 'black';

        blackjackGame['turnOver'] = true;
    }
}


function updateScore(card, activePlayer) {
    if (card === 'A') { // check id card is 'A'
    // if card is "A' adding 1 or 11. Adding 11 keeps me below 21, add 11. Otherwise, add 1
    if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <=21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }

    } else { // this staitment syas that card was not 'A', just increment the score
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) { // count your score (You: 0...)
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function dealerLogic() {
    blackjackGame['isStand'] = true; // this chages statement isStand to true
    let card = randomCard(); // shoose random cars
    showCard(card, DEALER); // show me a card on DEALER side
    updateScore(card, DEALER); // update score on DEALER side
    showScore(DEALER);

    if (DEALER['score'] > 15) {
        blackjackGame['turnOver'] = true;
        let winner = computeWinner();
        showResult(winner);
        console.log(blackjackGame['turnOver']);
    }
}

// compute winner and return who just won
// update the wins, draws, and losses
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        // condition: higher score than deaker busts but you're 21 or under
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            // console.log('You won!)');
            blackjackGame['wins']++;
            winner = YOU;

        } else if (YOU['score'] < DEALER['score']) {
            // console.log('You lost!');
            blackjackGame['losses']++;
            winner = DEALER;

        } else if (YOU['score'] === DEALER['score']) {
            blackjackGame['draws']++;
            // console.log('You drew!');
        }

    // condition when user busts but dealer doesn't    
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        // console.log('You lost');
        blackjackGame['losses']++;
        winner = DEALER;

    // condition when AND the dealer busts    
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackjackGame['draws']++;
        // console.log('You drew');
    }
    console.log(blackjackGame);
    console.log('Winner is', winner);
    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (blackjackGame['turnOver'] === true) {

        if (winner === YOU) {
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You won!';
            messageColor = 'green';
            winSound.play();

        } else if (winner === DEALER) {
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You lost!';
            messageColor = 'red';
            lossSound.play();

        } else {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You drew!';
            messageColor = 'black';
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}