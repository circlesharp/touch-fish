/* :::this::: */
/* https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/ */

/* this parameters */
interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker(this: Deck) {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52);
      const pickedSuit = Math.floor(pickedCard / 13);
      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13,
      };
    };
  },
};


/* ::: this parameters in callbacks ::: */
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}
