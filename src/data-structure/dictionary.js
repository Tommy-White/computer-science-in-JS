import { eachDay } from 'date-fns';

export default class Dictionary {
  constructor() {
    this.datastore = new Array();
  }

  add = (key, value) => {
    this.datastore[key] = value;
  };

  find = key => this.datastore[key];

  remove = key => {
    delete this.datastore[key];
  };

  count = () => {
    let count = 0;
    // aviod to use Array.length - (Expando props) The type of the key in the array is the string lead the length attribute does not work.
    // es6 for...in can use object & array loop (will read the Expando props).
    // es6 for...of can avoid Expando props in an array, unlike forEach is also support breack,continue,return.
    Object.keys(this.datastore).forEach(key => ++count);
    return count;
  };

  clear = () => {
    Object.keys(this.datastore).forEach(key => delete this.datastore[key]);
  };

  showAll() {
    Object.keys(this.datastore).map(key =>
      console.log(`${key} -> ${this.datastore[key]}`)
    );
  }
}
