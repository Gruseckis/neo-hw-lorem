import validator from 'validator';

export class UserForm {
  constructor() {
    this.container = document.createElement('div');
    this.container.classList = 'input-container';
    this.errors = {}
    this.title = this._createInput('title','title',);
    this.firstName = this._createInput('first-name', 'firstName');
    this.lastName = this._createInput('last-name', 'lastName');
    this.email = this._createInput('email', 'email', 'Please enter valid email');
    this.balance = this._createInput('balance', 'balance', 'Please enter valid ballance');
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

  checkFormForErrors(inputValues) {
    let formErrors = []
    const validators = {
      title: (value) =>  value ? validator.isAlpha(value) : false,
      firstName: (value) => value ? validator.isAlpha(value) : false,
      lastName: (value) => value ? validator.isAlpha(value) : false,
      email: (value) =>  value ? validator.isEmail(value) : false,
      balance: (value) => value ? validator.isNumeric(value) : false,
    }
    Object.keys(inputValues).forEach(key => {
      if(!validators[key](inputValues[key])) {
        formErrors.push(key);
      }
    })
    return formErrors;
  }

  showErrors(errorList) {
    Object.keys(this.errors).forEach(key => {
      const match = errorList.find(item => item === key);
      if(match) {
        this.errors[key].style.display = 'block';
      }else {
        this.errors[key].style.display = 'none';
      }
    })
  }

  _getInputNodes() {
    return [this.title , this.firstName, this.lastName, this.email, this.balance];
  }

  _createInput(className, inputName, errorMessage, type) {
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
    const error = document.createElement('p');
    error.classList = `error-${className}`;
    error.textContent = errorMessage ? errorMessage : 'This field is required';
    error.style.display = 'none';
    this.errors[inputName] = error;
    wrapper.appendChild(label);
    wrapper.appendChild(input);
    wrapper.appendChild(error);
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