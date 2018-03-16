let url = "https://deckofcardsapi.com/api/deck/"
//url = url + "new/shuffle"
var deckId = '';
let spades = 'spades'
let hearts = 'hearts'
let diamonds = 'diamonds'
let clubs = 'clubs'
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
   for (let i = 0; i < cards.length; i++) {
      let imageElement = document.createElement('img');
      imageElement.setAttribute("src", cards[i].image);
      document.getElementById('cardBox').appendChild(imageElement);
      console.log(imageElement);
   }

}
let suit = "";
document.getElementById("drop").addEventListener("click", function() {
         document.getElementById("drop").innerHTML = "";
         for (let i = 0; i < drop.length; i++)
            suit = drop[i]
         if
      }
