/*

  Esercizio: Definire una custom type guard che raffina un valore qualsiasi in un `Array<number>`

*/

function isArrayOf<A extends unknown> (x: Array<unknown>): x is Array<A> {
  if (x.length == 0) {
    return true;
  }

  return x.every(e => typeof e == 'number');
}

export const isArrayOfNumbers = (x: unknown): x is Array<number> => {
  if (typeof x != 'object') {
    return false;
  }

  if (! Array.isArray(x)) {
    return false;
  }

  return isArrayOf<number>(x);
}

// tests

import * as assert from 'assert'

assert.strictEqual(isArrayOfNumbers(1), false)
assert.strictEqual(isArrayOfNumbers([]), true)
assert.strictEqual(isArrayOfNumbers(['a', 'b']), false)
assert.strictEqual(isArrayOfNumbers(['a', 1]), false)
assert.strictEqual(isArrayOfNumbers([1, 2]), true)
