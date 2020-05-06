/*

  Esercizio: ricavare il tipo delle chiavi del campo `bar` dalla seguente definizione

*/

export interface Foo {
  foo: {
    bar: {
      baz: number
      quux: string
    }
  }
}

type DefinitionFooBar = Foo['foo']['bar']
type TypeOfKeysOfBar = keyof DefinitionFooBar

// tests

import { AssertEquals } from '../equals'

type S1 = AssertEquals<TypeOfKeysOfBar, 'baz' | 'quux', 'T'>
