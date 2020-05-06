/*

  Esercizio: derivare un record di predicati dalla seguente interfaccia

*/

interface X {
  a: string
  b: number
  c: boolean
}

type AsPredicates<O> = {[K in keyof O]: (x: O[K]) => boolean}

// tests

import { AssertEquals } from '../equals'

type S1 = AssertEquals<
  AsPredicates<X>,
  {
    a: (x: string) => boolean
    b: (x: number) => boolean
    c: (x: boolean) => boolean
  },
  'T'
>
