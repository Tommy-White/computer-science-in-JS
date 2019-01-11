export default class EventEmitter {
  listeners = [];

  on(cb) {
    if (typeof cb !== 'function') {
      throw new Error(
        `on expects to receive a function but instead: ${typeof cb}`
      );
    }

    this.listeners.push(cb);

    return () => {
      const index = this.listeners.indexOf(cb);
      if (index !== -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  emit(data) {
    this.listeners.forEach(l => l(data));
  }
}
