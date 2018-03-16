document.getElementById("btn").addEventListener("click", function() {

      }


      var deckId = '';

      fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(function(response) {
         return response.json();
      })
      .then(function(deck) {
         console.log(deck);
         deckId = deck.deck_id;
         console.log(deckId);
      });
