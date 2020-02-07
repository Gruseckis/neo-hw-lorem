'use strict'
import { Table } from './table/index';
import axios from 'axios';
import { createComponent } from './utils';
import Dialog from './dialog';

export const baseUrl = 'http://localhost:3002/users'

const tableColumnNames = [
  'Title',
  'Name',
  'Surname',
  'Email',
  'Balance'
]

const main = async() => {
  const openDialogWithUrl = () => {
    let urlId = window.location.search.slice(4);
    if(urlId){
      urlId === 'new' ? dialog.open('new') : dialog.open(urlId);
    } else if (dialog.opened) {
      dialog.close(true);
    }
  }
  const result = await axios.get(baseUrl);
  const userTable = new Table(result.data, tableColumnNames);
  const buttonContainer = createComponent('div', '', 'add-new-container');
  const newUserButton = createComponent('button', 'Add new user', 'add-new-button button-primary button');
  const dialog = new Dialog(userTable);
  newUserButton.addEventListener('click', () => {
    window.history.pushState({id: 'new'}, `Create new user`, `?id=new`);
    dialog.open('new');
  })
  buttonContainer.appendChild(newUserButton);
  document.body.appendChild(buttonContainer)
  document.body.appendChild(userTable.table);
  openDialogWithUrl()
  window.onpopstate = function (event) {
    openDialogWithUrl()
  }
}

 main();