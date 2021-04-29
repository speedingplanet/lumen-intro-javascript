let searchTarget = 'The quick brown fox jumped over the lazy dog';

let x = 'bar';

let regexp1 = /foo/;
let regexp2 = new RegExp('foo');
let regexp3 = new RegExp(`foo[${x}]`);

// Found / not-found
searchTarget.search(/[A-z]{5,}/);
/[A-z]{5,}/.test(searchTarget); // true or false
let regexp = new RegExp('[A-z]{5,}');
regexp.test(searchTarget);

// Matching information
searchTarget.match(/[A-z]{5,}/);
/[A-z]{5,}/.exec(searchTarget);
regexp.exec(searchTarget);
