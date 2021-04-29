let inputs = document.querySelectorAll('input[type=text]');

let regexps = {
  firstname: /^[A-Z][a-z]+ ?([A-Z][a-z]+)?$/,
  zipcode: /\d{5}(\-\d{4})?/,
  ssn: /\d{3}\-?\d{2}\-?\d{4}/,
};

for (let x = 0; x < inputs.length; x++) {
  let field = inputs[x];
  field.addEventListener('blur', function (event) {
    let msg = '';
    if (regexps[event.target.id].test(event.target.value)) {
      msg = 'Data successfully validated for ' + event.target.id;
    } else {
      msg =
        'Input data for the ' +
        event.target.id +
        ' field did not pass validation.';
    }

    console.log(msg);
  });
}
