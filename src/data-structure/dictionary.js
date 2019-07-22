export default class Dictionary {
  // We use Object.create to get a pure dict
  // Because use {} will still have __proto__ and other accessible stuff.
  constructor() {
    this.dict = Object.create(null);
  }

  add = (key, value) => {
    this.dict[key] = value;
  };

  find = key => this.dict[key];

  remove = key => {
    delete this.dict[key];
  };

  getLength = () => {
    let count = 0;
    // tips:
    // aviod to use Array.length - The type of the key in the array is the string lead the length attribute does not work.
    // es6 for...in can use object & array loop (will read the Expando props).
    // es6 for...of can avoid Expando props in an array, unlike forEach is also support breack,continue,return.
    Object.keys(this.dict).forEach(() => ++count);
    return count;
  };

  clear = () => {
    Object.keys(this.dict).forEach(key => delete this.dict[key]);
  };

  showAll() {
    Object.keys(this.dict).map(key =>
      console.log(` ${key} -> ${this.dict[key]} `)
    );
  }
}
