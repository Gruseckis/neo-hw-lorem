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
  const result = await axios.get(baseUrl);
  const userTable = new Table(result.data, tableColumnNames);
  const newUserButton = createComponent('button', 'Add new user', 'add-new-button')
  const dialog = new Dialog(userTable);
  newUserButton.addEventListener('click', () => {
    dialog.open();
  })
  document.body.appendChild(newUserButton)
  document.body.appendChild(userTable.table);
}

 main();