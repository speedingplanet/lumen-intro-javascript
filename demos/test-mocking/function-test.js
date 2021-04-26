function callMe() {
  return 'call me';
}

// Doesn't work without this
global.callMe = callMe;

let caller = new Function('return callMe()');

console.log('caller(): ', caller());
