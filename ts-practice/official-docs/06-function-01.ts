/* ::: function ::: */
/* Only the parameters and the return type make up the function type. */
/* Captured variables are part of the 'hidden state' of any function. */

const myAdd: (baseValue: number, increment: number) => number = function(
  x: number,
  y: number,
): number {
  return x + y;
}

/* interface function type */
interface myAddConfig {
  (baseValue: number, increment: number): number;
}
const myAdd2: myAddConfig = (x: number, y: number) => x + y;


/*
:::Inferring the types:::
It is called 'contextual typing', a form of type inference.
*/
let a = function(x: number, y: number): number {return x + y;}
let b: (x: number, y: number) => number = (x, y) => x + y;


/* :::Optional and Default Parameters::: */
/* The number of arguments given to a function has to match the number of parameters the function expects. */

function buildNameOptional(firstName: string, lastName?: string) {
  if (lastName) return `${firstName} ${lastName}`;
  return firstName;
}
function buildNameDefault(firstName: string, lastName = 'Smith') {
  return `${firstName} ${lastName}`;
}


/* :::Rest Parameters::: */
/* Rest parameters are treated as a boundless number of optional parameters. */
function buildNameRest(firstName: string, ...restOfName: string[]) {
  return `${firstName} ${restOfName.join(' ')}`;
}
