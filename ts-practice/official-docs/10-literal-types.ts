/*
::: Literal Types :::

A literal is a more concrete sub-type of a collective type.

There are three sets of literal types available in TypeScript today:
strings, numbers, and booleans.
*/

/*
::: String Literal Types :::

union types, type guards, type aliases
*/

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    // ...
  }
}

let button = new UIElement();
button.animate(0, 0, 'ease-in');

/* overloads / string literal types */
function createElement(tagName: 'img'): void;
function createElement(tagName: 'input'): void;
function createElement(tagName: string): void {};


/* ::: Numeric Literal Types ::: */

type Dice = 1 | 2 | 3 | 4 | 5 | 6;
function rollDice(): Dice {
  return (Math.floor(Math.random() * 6) + 1) as Dice;
}


/* ::: Boolean Literal Types ::: */

interface ValidationSuccess {
  isValid: true;
  reason: null;
}
interface ValidationFailure {
  isValid: false;
  reason: string;
}
type ValidationResult = ValidationSuccess | ValidationFailure;

