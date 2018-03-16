let url = "https://deckofcardsapi.com/api/deck/"
//url = url + "new/shuffle"
var deckId = '';
let spades = 'spades'
let hearts = 'hearts'
let diamonds = 'diamonds'
let clubs = 'clubs';
let suits = ["spades", "hearts", "diamonds", "clubs"];
let user_choice = null;
var counter = 9;
let tallies = {
   spades: 0,
   hearts: 0,
   diamonds: 0,
   clubs: 0
};


document.getElementById("go").addEventListener("click", function() {
   loadDeckUrl = url + 'new/shuffle/?deck_count=1';

   fetch(loadDeckUrl)
      .then(function(response) {
         return response.json();
      })
      .then(function(newDeck) {
         console.log(newDeck);
         deckId = newDeck.deck_id;
         console.log(deckId);
         deal()
      });
});

function deal() {
   dealUrl = url + deckId + '/draw/?count=8'

   fetch(dealUrl)
      .then(function(response) {
         return response.json();
      })
      .then(function(draw) {
         console.log(draw);
         let cardsArray = draw.cards;
         displayCards(cardsArray);
      });
}

function displayCards(cards) {
   document.getElementById('cardBox').innerHTML = "";
   //reset all of our tallies.
   for (var i = 0; i < suits.length; i++) {
      tallies[suits[i]] = 0;
   }

   for (let i = 0; i < cards.length; i++) {
      current_suit = cards[i].suit.toLowerCase();
      tallies[current_suit]++;

      let imageElement = document.createElement('img');
      imageElement.setAttribute("src", cards[i].image);
      document.getElementById('cardBox').appendChild(imageElement);
      console.log(imageElement);
   }

   counter--;
   document.getElementById("counter").innerHTML = counter;

   var sel = document.getElementById("drop");
   var text = sel.options[sel.selectedIndex].text;

   if (counter < 1) {
      setTimeout(function() {
         alert("YOU LOSE !!!")
      }, 50);
   } else if (tallies[text] > 3) {
      setTimeout(function() {
         alert("you win !!!")
      }, 50);
   }

}

let suit = "";
document.getElementById("drop").addEventListener("click", function() {


})
