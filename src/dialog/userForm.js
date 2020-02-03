export class UserForm {
  constructor() {
    this.container = document.createElement('div');
    this.container.classList = 'input-container';
    this.title = this._createInput('title','title');
    this.firstName = this._createInput('first-name', 'firstName');
    this.lastName = this._createInput('last-name', 'lastName');
    this.email = this._createInput('email', 'email');
    this.balance = this._createInput('balance', 'balance');
  }

  setInitialValues(data) {
    Object.keys(data).forEach(key => {
      if(this[key]){
        this[key].input.value = data[key];
      }
    })
  }

  getInputContainer() {
    this._getInputNodes().forEach(input => {
      this.container.appendChild(input.wrapper);
    })
    return this.container;
  }

  getInputValues() {
    return this._getInputNodes().reduce((accumulator, currentValue) => {
      accumulator[currentValue.input.name] = currentValue.input.value;
      return accumulator;
    },{})
  }

  _getInputNodes() {
    return [this.title , this.firstName, this.lastName, this.email, this.balance];
  }

  _createInput(className, inputName, type) {
    const wrapper = document.createElement('div');
    wrapper.classList = 'input-wrapper';
    const label = document.createElement('label');
    label.textContent = `${this._createLabelFromClassName(className)}:`;
    label.setAttribute('for', inputName);
    const input = document.createElement('input');
    input.id = `${inputName}`;
    input.classList = `input-${className}`;
    input.name = inputName;
    input.type = type ? type : 'text';
    wrapper.appendChild(label);
    wrapper.appendChild(input);
    const fieldInput = {
      wrapper,
      input,
      label
    }
    return fieldInput;
  }

  _createLabelFromClassName(className) {
    const name = className.split('-').map(item => 
      item.replace(/^\w/gi, letter => letter.toUpperCase())
    ).join(' ');
    return name
  }
}