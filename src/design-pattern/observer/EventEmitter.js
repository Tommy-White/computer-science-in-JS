export default class EventEmitter {
  listeners = [];

  on = cb => {
    this._onable(cb);

    this.listeners.push(cb);

    return () => {
      const index = this.listeners.indexOf(cb);
      if (index !== -1) {
        this.listeners.splice(index, 1);
      }
    };
  };

  // once = cb => {
  //   this._onable(cb);
  //   // TODO
  // }

  emit(data) {
    this.listeners.forEach(l => l(data));
  }
}

EventEmitter.prototype._onable = cb => {
  if (typeof cb !== 'function') {
    throw new Error(
      `on expects to receive a function but instead: ${typeof cb}`
    );
  }
};
