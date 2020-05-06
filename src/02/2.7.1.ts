/*

  Esercizio: rendere type safe la seguente funzione `translate`

*/

const translations = {
  when: 'Quando',
  where: 'Dove'
}

type T = typeof translations
type TranslationMap = keyof T

export declare function translate(key: TranslationMap): string

// tests

import { AssertEquals } from '../equals'

const s1 = translate('when')
type S1 = AssertEquals<typeof s1, string, 'T'>
// $ExpectError .
translate('foo')
