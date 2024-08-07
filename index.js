// cards are made of suits and faces 

class Card {
    constructor(face, suit) {
      this.face = face; // Faces are key to this all
      this.suit = suit; //suits are just fluff
    }
  }
  
  class Deck {
    constructor() {
      this.cards = []; //A deck is made of cards
      const suits = ['hearts', 'diamonds', 'clubs', 'spades']; // This defines suits for later
      const faces = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']; // I couldn't get the game to output the correct face names but the game actually works
   for (let suit of suits) {
     for (let face in faces) {
       this.cards.push(new Card(face, suit)); // this creates an array of cards for the deck with suit and face  
     
      }
    }
   this.shuffle(); 
    }
    shuffle(){
      for (let i = this.cards.length - 1; i > 0; i--) { // this iterates thru the cards
        let j = Math.floor(Math.random() * (i + 1)); //this uses a random math function to choose a random card then iterate to choose the next card
        let temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
      }
    }
  
  halveanddeal(){
    let half = Math.ceil(this.cards.length / 2); // I orginally had a much more complicated set up here but searching around I found this and It makes me feel like a genius. This simply divides the deck in half
    let deck1 = this.cards.splice(0, half); // This makes the first of two decks its just the first half of the deck after it gets shuffled in the function above
    let deck2 = this.cards.splice(-half);// This is just the second half of the deck
    return [deck1, deck2];
  }
  }
  
  class Player { // This was the part I really struggled with. I don't think the Number parameter is used at all but im not spending the time to debug it I was on vacation all week
    constructor(name, number ) {
      this.name = name;
      this.number = number;
      this.points = 0; // points is what determines the winner and is always set to start at zero for every player
      this.hand = []; //this defines the hand as an array which will be filled later by deck 1 and 2
    }
    draw(deck) {
      this.hand.push(deck.cards.shift());
    }
  }
  
  class thegame{
    play() {
      const deck = new Deck(); 
      const player1 = new Player("Player 1", 1);  // this defines the name and number of player number of the players
      const player2 = new Player("Player 2", 2);
  
      
      const [deck1, deck2] = deck.halveanddeal(); 
      player1.hand = deck1;
      player2.hand = deck2;
      
      // Play rounds until all cards are gone
      while (player1.hand.length > 0 && player2.hand.length > 0) {
        let card1 = player1.hand.shift();
        let card2 = player2.hand.shift();
  
        if (card1.face > card2.face) {   // ALL of this is just the console log
          player1.points++;
          console.log(`Player 1 wins the round with ${card1.face} of ${card1.suit} over ${card2.face} of ${card2.suit}`);
        } else if (card1.face < card2.face) {
          player2.points++;
          console.log(`Player 2 wins the round with ${card2.face} of ${card2.suit} over ${card1.face} of ${card1.suit}`);
        } else {
          console.log(`Round is a tie with ${card1.face} of ${card1.suit} and ${card2.face} of ${card2.suit}`);
        }
  
        // Discard cards after play
        card1 = null;
        card2 = null;
      }
  
      // BASIC if statement that just compares points
      let winner; 
      if (player1.points > player2.points) {
        winner = player1;
      } else if (player1.points < player2.points) {
        winner = player2;
      } else {
        winner = null; // this is the Special case in case of a draw
      }
  
      console.log(`The winner is ${winner ? winner.name : "It's a DRAW"}`);
      return winner;
    }
  }
  
  
  const game = new thegame(); // I FORGOT TO PUT THIS AND WAS DYING 
  game.play(); // THIS RUNS EVERYTHING
  ``
  
  