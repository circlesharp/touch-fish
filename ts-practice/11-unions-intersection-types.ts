/*
::: Union Types :::

A union type describes a value that can be one of several types.
vertical bar (|) to separate each type.
*/

function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  if (typeof padding === 'string') {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

/*
If we have a value that is a union type,
we can only access members that are common to all types in the union.
*/
interface Bird {
  fly(): void;
  layEggs(): void;
}
interface Fish {
  swim(): void;
  layEggs(): void;
}
declare function getSmallPet(): Fish | Bird;
let pet = getSmallPet();
pet.layEggs();
// pet.fly(); // fuck!


/* ::: Discriminating Unions ::: */

type NetworkLoadingState = {
  state: 'loading';
};
type NetworkFailedState = {
  state: 'failed';
  code: number;
};
type NetworkSuccessState = {
  state: 'success';
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};


/* ::: Union Exhaustiveness checking ::: */
type NetworkFromCachedState = {
  state: 'from_cache';
  id: string;
  response: NetworkSuccessState['response'];
};
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState
  | NetworkFromCachedState;

/* 1st way: --strictNullChecks */
/*
function logger(s: NetworkState): string {
  switch (s.state) {
    case "loading":
      return "loading request";
    case "failed":
      return `failed with code ${s.code}`;
    case "success":
      return "got response"
  }
}*/

/* 2nd way: never */
function assertNever(x: never): never {
  throw new Error(`Unexpected object: ${x}`);
}
function logger(s: NetworkState): string {
  switch (s.state) {
    case 'loading':
      return 'loading request';
    case 'failed':
      return `failed with code ${s.code}`;
    case 'success':
      return 'got response';
    default:
      return assertNever(s); // if you forget a case, then s will have a real type.
  }
}


/*
::: Intersection Types :::

An intersection type combines multiple types into one.

This allow you to add together existing types
to get a single type that has all the features you need.

&
*/

interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}
interface ArtworksData {
  artworks: { title: string }[];
}
interface ArtistsData {
  artists: { name: string }[];
}
type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }
  console.log(response.artists);
};
