function minimal() {
  return undefined;
}

// undefined
let x = minimal();

function add(x, y) {
  return x + y;
}

let result = add(1, 2, 3, 4, 5, 6, 7);
result = add(1);

function betterAdd(x = 0, y = 0) {
  return x + y;
}

// Will work, though not perhaps the expected result
betterAdd('always x', 'always y');

function addAll(x = 0, y = 0, ...z) {
  let total = x + y;
  if (z.length > 0) {
    for (let pos = 0; pos < z.length; pos++) {
      total = total + z[pos];
    }
  }
  return total;
}

// Function declaration
function declaration() {}
declaration();

// Function expression
let expression = function () {};
expression();

function customGreeter(name) {
  return function () {
    return 'Hello, ' + name;
  };
}

let greetMe = customGreeter('John');
greetMe();

function calculate(x, y, operator) {
  return operator(x, y);
}

function exponent(a, b) {
  return Math.pow(a, b);
}

result = calculate(2, 5, exponent);

result = calculate(10, 5, function (a, b) {
  return a - b;
});

result = calculate(10, 5, (a, b) => a - b);

// Arrow function
let subtract = (x, y) => {
  return x - y;
};

let shortSubtract = (x, y) => x - y;

let subtractMany = (a, b, c, d) => a - b - c - d;

let subtractIfPositive = (x, y) => (x > 0 && y > 0 ? x - y : 0);
