const SYM_EMITTER_ONCE = Symbol('once');

export default class EventEmitter {
  // Experimental: simulate extends through new operate
  // Do not simulate prototype relationships currently.
  constructor(ext = {}) {
    Object.keys(ext).forEach(k => {
      this[k] = ext[k];
    });
  }

  listeners = [];

  on = cb => {
    this._onable(cb);

    this.listeners.push(cb);

    return () => this.off(cb);
  };

  off = cb => {
    const index = this.listeners.indexOf(cb);
    if (index !== -1) {
      this.listeners.splice(index, 1);
    }
  };

  once = cb => {
    this._onable(cb);

    cb[SYM_EMITTER_ONCE] = true;

    this.listeners.push(cb);
  };

  emit = data => {
    this.listeners.forEach(l => {
      l(data);
      l[SYM_EMITTER_ONCE] && this.off(l);
    });
  };
}

EventEmitter.prototype._onable = cb => {
  if (typeof cb !== 'function') {
    throw new Error(
      `on expects to receive a function but instead: ${typeof cb}`
    );
  }
};
