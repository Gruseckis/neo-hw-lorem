import { createComponent } from './utils/createComponent';
import { table, Table } from './table/index';
import Dialog from './dialog';

const tableColumnNames = [
  'Avatar',
  'Name',
  'Surname',
  'Email',
  'Balance'
]
let mockData = [
  {"id":"d2a93a06-fc07-4a88-b84b-33c37dd6e985","avatar":"https://robohash.org/nequeprovidentiusto.jpg?size=50x50&set=set1","firstName":"Marybelle","lastName":"Adlard","email":"madlard0@uol.com.br","balance":28553.25},
  {"id":"dfe8710d-30fa-4f07-992b-51ed7a9abebb","avatar":"https://robohash.org/quassedet.bmp?size=50x50&set=set1","firstName":"Gustie","lastName":"Beagen","email":"gbeagen1@youku.com","balance":82130.71},
  {"id":"e6216694-9638-40ae-b0ab-667af9271e8a","avatar":"https://robohash.org/aliasutdolores.bmp?size=50x50&set=set1","firstName":"Theressa","lastName":"Greatham","email":"tgreatham2@marketwatch.com","balance":30737.55},
  {"id":"8b8e99b8-a4ff-49ea-bcdc-c2ff9f4e9632","avatar":"https://robohash.org/distinctioadipiscisit.jpg?size=50x50&set=set1","firstName":"Clerissa","lastName":"Dulake","email":"cdulake3@toplist.cz","balance":98761.75},
  {"id":"72f0a47e-3fd5-4abb-a7aa-10a6649e58e0","avatar":"https://robohash.org/liberoconsequuntursaepe.bmp?size=50x50&set=set1","firstName":"Gavan","lastName":"Laurence","email":"glaurence4@altervista.org","balance":95349.32},
]

const userTable = new Table(mockData, tableColumnNames);

document.body.appendChild(userTable.table);

let button = createComponent('button', 'open', 'button');
const dialog = new Dialog();

document.body.appendChild(button);
button.addEventListener('click', () => {
  !dialog.opened ? dialog.open() : dialog.close();
});
