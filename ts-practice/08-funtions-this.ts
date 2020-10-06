/* ::: this parameters ::: */

interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  say: (word: string) => string; // say(word: string): string;
  createCardPicker(this: Deck): () => Card; // 注意这里方法的参数以及返回的函数的参数
}

let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  say: n => n,
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let sayWord = deck.say('1');
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);


/* ::: this parameters in callbacks ::: */
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
  info: string;
  onClickBad = (e: Event) => {
    this.info = e.type;
  };
}

let h = new Handler();
let uiElement = {} as UIElement;
uiElement.addClickListener(h.onClickBad);
