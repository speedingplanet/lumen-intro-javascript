/* eslint-disable */
import { x } from './exports.js';
x; // 10

import { b as bee } from './exports.js';
bee; // 2

import { x as q, y } from './exports.js';
console.log(q + y);

import * as foo from './exports.js';
foo.x; // 10

import './exports.js'; // Runs exports.js, does not import any values

import {} from './exports.js';

console.log('foo is ', foo);

// Practically, you're using these most of the time:
import { a, b, c } from './exports.js';
