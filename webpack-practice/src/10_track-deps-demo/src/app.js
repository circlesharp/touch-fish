import { a1, a2 } from './module-a.js';

import './module-b.js';

// import { c1 } from './module-c';

import('./module-c.js').then(({ c1 }) => console.log(c1, globalThis.c2));

export const APP_CONST = [a1, a2];
