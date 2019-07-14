


var cards = [
 {
 rank: "queen",	
 suit: "hearts",	
 cardImage:"images/queen-of-hearts.png"
},

{

 rank: "queen",	
 suit: "diamonds",	
 cardImage:"images/queen-of-diamonds.png"

},

{

 rank: "king",	
 suit: "hearts",
 cardImage:"images/king-of-hearts.png"

},

{

 rank: "king",	
 suit: "diamonds",
 cardImage:"images/king-of-diamonds.png"

}


];

var cardsInPlay = [];

//create function reset game
//1 eliminar los e los elementos del game board
//llamar la funcion createboard
//For an extra challenge, consider how you could keep track of and display the user's score.


function createBoard (){
	for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");//user will see the back of the card.
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
}
}





function checkForMatch (){
	if(cardsInPlay.length === 1) return;
console.log(cardsInPlay);
	if ((cardsInPlay.length  === 2 ) && (cardsInPlay[0] === cardsInPlay[1])) {
     
		alert("You found a match!");
		resetgame();
	}

	else{
		alert("sorry try again!");
		resetgame();
}


}		


function flipCard () {

var cardId = this.getAttribute('data-id');
this.setAttribute('src', cards[cardId].cardImage);
 
    console.log( "User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	setTimeout(checkForMatch, 500);
}


function resetgame () {
    cardsInPlay = [];
   
var list = document.getElementById("game-board");

while (list.hasChildNodes()) {   
  list.removeChild(list.firstChild);
}

createBoard();
}








createBoard();//giving me an error