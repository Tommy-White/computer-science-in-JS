export default class Stack {
  constructor() {
    this.stack = [];
  }

  push = value => {
    this.stack.push(value);
  };

  // use Array.prototype.pop
  pop = () => this.stack.pop();

  // Different with pop only get the top element of the stack does not pop up
  peek = () => this.stack[this.stack.length - 1];

  length = () => this.stack.length;

  clear = () => {
    if (this.stack.length > 0) {
      this.stack = [];
    }
    return this.stack.length;
  };

  print = (split = ' ') => {
    console.log(this.stack.join(split));
  };
}

/**
 *
 * @param {number} base Base systems like binary(2) and hexadecimal(16)
 * @param {number} num Convert number
 * @return {string} String of converted value
 */
export function numConverter(base, num) {
  const stack = new Stack();

  let converted = '';

  while (num > 0) {
    const b = num % base;
    stack.push(b);
    num = (num / base) | 0;
  }

  while (stack.length()) {
    converted += stack.pop();
  }

  return converted;
}

/**
 *
 * Check if the string is a palindrome
 * @param {string} word
 * @return {boolean}
 *
 */
export function isPalindrome(word) {
  const stack = new Stack();
  let reversed = '';

  for (const w of word) {
    stack.push(w);
  }

  while (stack.length()) {
    reversed += stack.pop();
  }

  return word === reversed;
}
