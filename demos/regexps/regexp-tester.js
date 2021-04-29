function search() {
  // Expecting to run string.search(regexp)
  // Expected return value: position of the first match
  console.log('search() called');

  let re, str;
  // Get the values
  let values = getValues();
  re = values[0];
  str = values[1];
  let pos = str.search(re);

  let updateMsg;
  if (pos > -1) {
    updateMsg = 'String.search() found a match at position ' + pos + '.';
  } else {
    updateMsg = 'String.search() could not find a match for ' + re + '.';
  }

  makeUpdate(updateMsg);
  updateBackrefs();
}

function match() {
  console.log('match() called');

  let re, str;
  // Get the values
  let values = getValues();
  re = values[0];
  str = values[1];

  let matches = str.match(re);
  let updateMsg = '';

  if (matches) {
    updateMsg += 'Matches found: ' + matches;
  } else {
    updateMsg += 'No matches found!';
  }

  makeUpdate(updateMsg);
  updateBackrefs();
}

function test() {
  console.log('test() called');

  let re, str;
  // Get the values
  let values = getValues();
  re = values[0];
  str = values[1];

  let found = re.test(str);
  let updateMsg = '';
  if (found) {
    updateMsg += 'Match found!';
  } else {
    updateMsg += 'Match NOT found!';
  }

  makeUpdate(updateMsg);
  updateBackrefs();
}

function exec() {
  console.log('exec() called');

  let re, str;
  // Get the values
  let values = getValues();
  re = values[0];
  str = values[1];

  let matches = re.exec(str);
  let updateMsg = '';

  if (matches) {
    updateMsg += 'Matches found: ' + matches;
  } else {
    updateMsg += 'No matches found!';
  }

  makeUpdate(updateMsg);
  updateBackrefs();
}

function getValues() {
  let searchStr = document.forms['tester'].testStr.value;
  let opts = '',
    isCI = false,
    isGlobal = false;
  isCI = document.forms['tester'].i.checked;
  isGlobal = document.forms['tester'].g.checked;

  if (isCI) {
    opts += 'i';
  }

  if (isGlobal) {
    opts += 'g';
  }

  let re = new RegExp(document.forms['tester'].reValue.value, opts);

  return new Array(re, searchStr);
}

function makeUpdate(msg) {
  let prev = document.forms['tester'].results.value;
  document.forms['tester'].results.value = msg + '\n' + prev;
}

function updateBackrefs() {
  let x, br, field;
  for (x = 1; x < 10; x++) {
    br = '$' + x;
    field = 'br' + x;
    document.forms['tester'][field].value = RegExp[br];
  }
}
