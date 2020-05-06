/*

  Esercizio: definire una laternativa a `Object.keys` che non resituisca `Array<string>`.
  Cosa possiamo dire di questa alternativa dal punto di vista della type safety?

*/

type KeyFilter<O> = (k: string) => k is keyof O & string

export function keys<O>(o: O, is: KeyFilter<O>): Array<keyof O> {
  return Object.keys(o).filter(is);
}

// tests

import * as assert from 'assert'

interface Person {
  name: string
  age: number
}

const p: Person = {
  name: 'name',
  age: 0,
  additional: true
} as any

function isKeyOfPerson (k: any): k is keyof Person {
  return k == 'name' || k == 'age';
}

assert.deepEqual(keys(p, isKeyOfPerson).sort(), ['age', 'name'])
