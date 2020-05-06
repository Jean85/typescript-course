/*

  Esercizio: tipizzare la funzione `set`

*/

export declare function set<C>(
  k: keyof C,
  v: C[keyof C],
  o: C
): C

// tests

import { AssertEquals } from '../equals'

declare const x: { a: string; b: number; c: boolean }

// $ExpectError .
const e1 = set('d', 1, x)
const s1 = set('b', 1, x)
type S1 = AssertEquals<typeof s1, typeof x, 'T'>
