import Observer from './observer';

export default class Observable {
  // observer object list
  listeners = [];

  // data to send
  data = undefined;

  // option for observer pattern
  _option = {};

  // controll when to broadcast when option.isChange is true
  _isChanged = false;

  constructor(options = {}) {
    this._option = options;
  }

  registerObserver = o => {
    if (
      o instanceof Observer &&
      !this.listeners.includes(o) /* no IE Compatibility? */
    ) {
      this.listeners.push(o);
    }
  };

  removeObserver = o => {
    let i = this.listeners.indexOf(o);
    if (i !== -1) {
      this.listeners = [
        ...this.listeners.slice(0, i),
        ...this.listeners.slice(++i),
      ];
    }
  };

  broadcastObserver = () => {
    const { isChange } = this._option;

    if (!isChange || (isChange && this.isChanged)) {
      this.listeners.forEach(l => {
        l.update(this, this.data);
      });
    }
    if (isChange) this.isChanged = false;
  };

  setChanged = () => {
    this.isChanged = true;
  };
}
