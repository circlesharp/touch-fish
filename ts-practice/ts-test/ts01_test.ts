function identity<T> (arg: T): T {
  return arg;
}

let my: {<T>(arg: T): T} = identity;
