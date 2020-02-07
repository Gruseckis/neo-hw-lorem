import { createComponent } from '../utils';
import Dialog from '../dialog';

export class Table {
  constructor(initialData, columnNames){
    this.data = initialData;
    this.columnNames = columnNames;
    this.dialog = new Dialog();
    this.createTable();
  }

  createTable() {
    this.table = document.createElement('table');
    this.table.classList = 'table-users';
    this.table.appendChild(tableHeader(this.columnNames));
    this.table.appendChild(tableBody(this.data, this.dialog));
  }
}

const tableHeader = (headerNames) => {
  const header = document.createElement('thead');
  header.classList = 'table-header';
  const headerRow = document.createElement('tr');
  headerRow.classList = 'table-header-row';
  headerNames.forEach(name => {
    headerRow.appendChild(createComponent('th', name, `table-header-${name}`));
  });
  header.appendChild(headerRow);
  return header;
}

const tableBody = (data, dialogRef) => {
  const body = document.createElement('tbody');
  body.classList = 'table-body';
  data.forEach(row => {
    const bodyRow = document.createElement('tr');
    bodyRow.classList = 'table-body-row';
    bodyRow.id = row.id;
    Object.keys(row).forEach(key => {
      if(key === 'id') {
        bodyRow.addEventListener('click', () => {
          window.history.pushState({id: row[key]}, `${row.firstName} ${row.lastName}`, `?id=${row.id}`);
          dialogRef.open(row[key]);
        })
      } else {
        bodyRow.appendChild(createComponent('td', row[key], `${key}`))
      }
    });
    body.appendChild(bodyRow);
  });
  return body;
}
