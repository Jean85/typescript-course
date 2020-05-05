/*

  Esercizio: tipizzare la funzione `compose`

*/

declare function compose<A, B>(
  g: (x: A) => A,
  f: (x: B) => A,
): (x: B) => A
declare function compose<A, B, C, D>(
  d: (x: C) => D,
  f: (x: B) => C,
  g: (x: A) => B
): (x: A) => D
declare function compose(...f: Array<Function>): Function

// tests

import { AssertEquals } from '../equals'

declare function len(s: string): number
declare function double(n: number): number
declare function gt2(n: number): boolean

const s1 = compose(
  double,
  len
)
type S1 = AssertEquals<typeof s1, (s: string) => number, 'T'>
const s2 = compose(
  gt2,
  double,
  len
)
type S2 = AssertEquals<typeof s2, (s: string) => boolean, 'T'>
