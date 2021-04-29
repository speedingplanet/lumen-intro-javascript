class CustomForm {
  constructor(renderTo = Element) {
    this.form = document.createElement('form');
    this.form.innerHTML = `<button type="button">Click me</button>`;

    // this.handleButtonClick = this.handleButtonClick.bind(this);
    this.form
      .querySelector('button')
      .addEventListener('click', this.handleButtonClick);
    renderTo.replaceChildren(this.form);
  }

  someProp = 'someValue';

  // handleButtonClick() {
  handleButtonClick = () => {
    // console.log('handleButtonClick: You clicked on the button.');
    this.printMessage();
  };

  printMessage() {
    console.log('printMessage: You clicked on the button.');
  }
}

let myForm = new CustomForm(document.getElementById('target'));
