import { createComponent } from '../utils';

class Dialog {
  constructor() {
    this._createDialog();
  }

  _createDialog() {
    this.overlay = createComponent('div', 'overlay', 'dialog-overlay');
    this.dialogWindow = createComponent('div', 'inner content', 'dialog-popup');
    this.overlay.appendChild(this.dialogWindow);
    this.overlay.addEventListener('click', () => {
      this.close();
    });
    this.dialogWindow.addEventListener('click', event => {
      event.stopPropagation();
    });
  }

  open() {
    this.opened = true;
    document.body.appendChild(this.overlay);
  }
  close() {
    this.opened = false;
    document.body.removeChild(this.overlay);
  }
}

export default Dialog;
