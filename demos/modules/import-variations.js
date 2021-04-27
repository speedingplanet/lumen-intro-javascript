import { a, a1 } from './import-variations.js';
import { a as apple, b1 } from './import-variations.js';
import * as foo from './import-variations.js';
// Can access foo.a, foo.person1, etc.

// Runs import-variations.js, brings in nothing
import './import-variations.js';

import whateverTheDefaultIs from './exports-default.js';
