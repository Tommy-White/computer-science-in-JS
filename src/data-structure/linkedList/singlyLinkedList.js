/**
 * One-way linked list
 */

function Node(element) {
  this.element = element;
  this.next = null;
}

export default class SinglyLinkedList {
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
          node.next = afterNode.next;
          afterNode.next = node;
        } else {
          this.tail.next = node;
          this.tail = node;
        }
        this.lens++;
      }
    }
  };

  remove = element => {
    /**
     * This metch will find the prev node of the provide element.
     * Be careful if the element is not exit, it will return the tail.
     */
    const findPrevious = element => {
      let current = this.head;

      while (current && current.next && current.next.element !== element) {
        current = current.next;
      }

      return current;
    };

    const prev = findPrevious(element);

    // why check prev.next?
    // if prev.next exist means that is not tail, in other words the remove element is in this linked list
    if (prev.next) {
      prev.next = prev.next.next;
      this.lens--;
    }
  };

  traverse = fn => {
    let current = this.head;
    while (current) {
      if (fn) {
        fn(current);
      }
      current = current.next;
    }
  };

  length = () => this.lens;

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
