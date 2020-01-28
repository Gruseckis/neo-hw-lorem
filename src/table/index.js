import { createComponent } from '../utils';

export class Table {
  constructor(initialData, columnNames){
    this.data = initialData;
    this.columnNames = columnNames;
    this.createTable();
  }

  createTable() {
    this.table = document.createElement('table');
    this.table.classList = 'table-users';
    this.table.appendChild(tableHeader(this.columnNames));
    this.table.appendChild(tableBody(this.data));
  }
}

export const table = (data, columnNames) => {
  const table = document.createElement('table');
  table.appendChild(tableHeader(columnNames));
  table.appendChild(tableBody(data));
  return table
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

const tableBody = (data) => {
  const body = document.createElement('tbody');
  body.classList = 'table-body';
  data.forEach(row => {
    const bodyRow = document.createElement('tr');
    bodyRow.classList = 'table-body-row';
    bodyRow.id = row.id;
    Object.keys(row).forEach(key => {
      switch (key) {
        case 'id':
          // Placeholder for logic
          break;
        case 'avatar':
          const avatar = document.createElement('img');
          avatar.setAttribute('src', row[key]);
          const avatarCell = createComponent('td', '', `table-column-${key}`);
          avatarCell.appendChild(avatar);
          bodyRow.appendChild(avatarCell);
          break;
        default:
          bodyRow.appendChild(createComponent('td', row[key], `table-column-${key}`))
          break;
      }
      // if(key !== 'id'){
      //   bodyRow.appendChild(createComponent('td', row[key], `table-column-${key}`))
      // } else {
      //   // logic for binding click on row goes here;
      // }
    });
    body.appendChild(bodyRow);
  });
  return body;
}