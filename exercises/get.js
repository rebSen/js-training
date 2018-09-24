'use strict'

/*
 * Create a `get` function that takes a key and return the corresponding value
 * in the sourceObject
 *
 * @notions Functions, Data-Structures, Get
 */

// Provided code :
const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}

// Your code :
function get(elem) {
  return sourceObject[elem];
}















// function get(elem) {
//   if (typeof(sourceObject.num === 'number')) {
//     return sourceObject.num;

//  } else if (typeof(sourceObject.num === 'number') { 
//   return sourceObject.bool

//  } else if (typeof(sourceObject.num === 'number') {
//   return sourceObject.str
 
// } else if (typeof(sourceObject.num === 'number')) {
//   return sourceObject.str
//   //console.log(elem)
// }

// }

//function that takes a key and return the corresponding value
//* in the sourceObject
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof get, 'function')
assert.strictEqual(get('num'), 42)
assert.strictEqual(get('bool'), true)
assert.strictEqual(get('str'), 'some text')
assert.strictEqual(get('log'), console.log)
assert.strictEqual(get('noexist'), undefined)
// End of tests 
