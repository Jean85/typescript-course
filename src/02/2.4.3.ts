/*

  Esercizio: generalizzare la soluzione precedente (2.4.2)

*/

function isNumber(x: unknown): x is number {
  return typeof x == 'number';
}

function isArrayOf<A extends unknown> (x: unknown, f: (y: unknown) => y is A): x is Array<A> {
  if (! Array.isArray(x)) {
    return false;
  }

  if (x.length == 0) {
    return true;
  }

  return x.every(e => f(e));
}

export const isArrayOfNumbers = (x: unknown): x is Array<number> => isArrayOf(x, isNumber)

// tests

import * as assert from 'assert'

assert.strictEqual(isArrayOfNumbers(1), false)
assert.strictEqual(isArrayOfNumbers([]), true)
assert.strictEqual(isArrayOfNumbers(['a', 'b']), false)
assert.strictEqual(isArrayOfNumbers(['a', 1]), false)
assert.strictEqual(isArrayOfNumbers([1, 2]), true)
