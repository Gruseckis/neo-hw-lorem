import { createComponent } from '../utils';
import { UserForm } from './userForm';
import { baseUrl } from '../index';
import axios from 'axios';
import uuid from 'uuid';

class Dialog {
  constructor() {
    this._createDialog();
  }

  _createDialog() {
    this.overlay = createComponent('div', '', 'dialog-overlay');
    this.dialogWindow = createComponent('div', '', 'dialog-popup');
    this.dialogWindow.appendChild(this.closeButton());
    this.userForm = new UserForm();
    this.dialogWindow.appendChild(this.userForm.getInputContainer());
    this.dialogWindow.appendChild(this.dialogControls());
    this.overlay.appendChild(this.dialogWindow);
    this.overlay.addEventListener('click', () => {
      this.close();
    });
    this.dialogWindow.addEventListener('click', event => {
      event.stopPropagation();
    });
  }

  async open(recordGuid) {
    console.log(this.table);
    this.opened = true;
    this.userGuid = recordGuid;
    this.dialogButtons = this.dialogControls();
    document.body.appendChild(this.overlay);
    const button = document.getElementsByClassName('dialog-delete-button')[0];
    if(recordGuid){
      const result  = await axios.get(`${baseUrl}/${recordGuid}`);
      this.userForm.setInitialValues(result.data);
      button.style.display = 'inline';
    } else {
      button.style.display = 'none';
    }
  }
  close() {
    this.opened = false;
    document.body.removeChild(this.overlay);
  }

  inputContainer(data) {
    const inputContainer = document.createElement('div');
    inputContainer.classList = 'input-container';
    const firstName = document.createElement('input');
    firstName.value = data.firstName;
    inputContainer.appendChild(firstName);
    return inputContainer;
  }

  closeButton() {
    const container = document.createElement('div');
    container.classList = 'dialog-close-cross';
    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.addEventListener('click', () => {
      this.close();
    })
    container.appendChild(closeButton);
    return container;
  }

  dialogControls() {
    const container = document.createElement('div');
    container.classList = 'dialog-controls';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList = 'dialog-delete-button'; 
    deleteButton.addEventListener('click', () => {
      this._deleteUser();
    });
    container.appendChild(deleteButton);

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.classList = 'dialog-save-button';
    saveButton.addEventListener('click', () => {
      this._createUpdateUser();
    })
    container.appendChild(saveButton);

    return container;
  }

  async _deleteUser() {
    await axios.delete(`${baseUrl}/${this.userGuid}`);
    document.getElementById(this.userGuid).remove();
    this.close();
  }

  async _createUpdateUser() {
    console.log(this.userForm.getInputValues())
    const inputValues = this.userForm.getInputValues()
    if(this.userGuid){
      await axios.put(`${baseUrl}/${this.userGuid}`, inputValues);
      this._updateDom()
    } else {
      inputValues.id = uuid.v4();
      await axios.post(`${baseUrl}`, inputValues);
      this._addRecordToTable(inputValues);
    }
    this.close();
  }

  async _updateDom() {
    const inputRow = Array.from(document.getElementById(this.userGuid).children);
    const inputValues = this.userForm.getInputValues();
    inputRow.forEach(item => {
      const key = item.className;
      item.textContent = inputValues[key];
    })
  }

  _addRecordToTable(rowData) {
    const table = document.querySelector('.table-users .table-body');
    const bodyRow = document.createElement('tr');
    bodyRow.classList = 'table-body-row';
    bodyRow.id = rowData.id;
    Object.keys(rowData).forEach(key => {
      if(key === 'id') {
        bodyRow.addEventListener('click', () => {
          this.open(rowData[key]);
        })
      } else {
        bodyRow.appendChild(createComponent('td', rowData[key], `${key}`))
      }
    });
    table.appendChild(bodyRow);
  }
}

export default Dialog;
