function Deck(){
  let suits = ["Spades", "Clubs", "Diamonds", "Hearts"];
  let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

  this.cards = function(){
    let deck = [];

    suits.forEach( suit => {
      values.forEach( value => {
        deck.push(new Card(suit, value));
      });
    });
    return deck;
  }();
}

Deck.prototype.deal = function(){
  if (this.cards.length > 0){
    return this.cards.pop();
  }
}

Deck.prototype.shuffle = function() {
    let len = this.cards.length, i;
    while (len > 1) {
        i = Math.floor(Math.random() * len--);
        [this.cards[i], this.cards[len]] = [this.cards[len], this.cards[i]];
    }
    return this;
}

Deck.prototype.reset = function() {
    this.shuffle();
    return this;
}

function Card(suit, value){
  this.suit = suit;
  this.value = value;
}

function Player(name){
  this.name;
  this.hand = [];
}

Player.prototype.takeCard = function(){
  this.hand.push(deck.deal());
  return this;
}

Player.prototype.discard = function(idx){
  if (this.hand.length > idx){
    this.hand.splice(idx, 1);
  }
  return this;
}
