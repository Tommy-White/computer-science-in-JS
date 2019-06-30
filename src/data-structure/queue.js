export default class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue = value => this.queue.push(value);

  // use Array.prototype.shift
  dequeue = () => this.queue.shift();

  // Different with dequeue only get the top element of the stack does not pop up
  peek = () => this.queue[0];

  length = () => this.queue.length;

  clear = () => {
    if (this.queue.length > 0) {
      this.queue = [];
    }
    return this.queue.length;
  };

  print = (split = ' ') => {
    console.log(this.queue.join(split));
  };
}
