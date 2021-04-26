// How do I access elements?
document.getElementById(/* some id in the document */); // Element;

// Can also be used from an Element
document.querySelector(/* CSS selector */); // Element
document.querySelectorAll(/* CSS selector */); // NodeList

let foo = document.getElementById('foo');
foo.querySelectorAll('li');
document.querySelectorAll('li', foo);

// Creating elements
let div = document.createElement('div'); // No repaint yet
foo.append(div); // Repaint here

// Good example
let list = document.createElement('ul');

for (let x = 0; x < 1000; x++) {
  let li = document.createElement('li');
  li.textContent = x;
  list.append();
}

foo.append(list);
