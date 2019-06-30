/**
 * Two-way linked list
 */

function Node(element) {
  this.element = element;
  this.previous = null;
  this.next = null;
}

export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lens = 0;
  }

  find = element => {
    let current = this.head;
    while (current && current.element !== element) {
      current = current.next;
    }
    return current;
  };

  insert = (element, after) => {
    const node = new Node(element);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.lens++;
    } else {
      const afterNode = after ? this.find(after) : this.tail;
      if (afterNode) {
        if (afterNode !== this.tail) {
          node.previous = afterNode;
          node.next = afterNode.next;
          afterNode.next = node;
        } else {
          node.previous = afterNode;
          afterNode.next = node;
          this.tail = node;
        }
        this.lens++;
      }
    }
  };

  remove = element => {
    const current = this.find(element);
    if (current) {
      const previous = current.previous;
      const next = current.next;

      // remove element is head.
      if (this.lens === 1) {
        this.head = null;
        this.tail = null;
      } else if (previous && next) {
        previous.next = next;
        next.previous = previous;
      } else if (!previous) {
        next.previous = null;
      } else if (!next) {
        previous.next = null;
      }

      this.lens--;
    }
  };

  length = () => this.lens;

  traverse = (fn, inOrder = true) => {
    let current = inOrder ? this.head : this.tail;
    const traverse = inOrder ? 'next' : 'previous';
    while (current) {
      if (fn) {
        fn(current);
      }
      current = current[traverse];
    }
  };

  _get() {
    let string = '';
    let current = this.head;
    while (current) {
      string += `${current.element} `;
      current = current.next;
    }
    return string.trim();
  }
}
