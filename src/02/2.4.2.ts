/*

  Esercizio: Definire una custom type guard che raffina un valore qualsiasi in un `Array<number>`

*/

const isArrayOfNumbers = (x: any): any => {
  return false
}

// tests

import * as assert from 'assert'

assert.strictEqual(isArrayOfNumbers(1), false)
assert.strictEqual(isArrayOfNumbers([]), true)
assert.strictEqual(isArrayOfNumbers(['a', 'b']), false)
assert.strictEqual(isArrayOfNumbers(['a', 1]), false)
assert.strictEqual(isArrayOfNumbers([1, 2]), true)
