import { createComponent } from './utils/createComponent';
import Dialog from './dialog';

let button = createComponent('button', 'open', 'button');
const dialog = new Dialog();

document.body.appendChild(button);
button.addEventListener('click', () => {
  !dialog.opened ? dialog.open() : dialog.close();
});
