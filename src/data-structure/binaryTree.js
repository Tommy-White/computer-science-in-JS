/**
 * binary tree not only include the data but also include the right and left node.
 * @param  {} data
 * @param  { Node } left
 * @param  { Node } right
 */
export function Node(data, left, right) {
  this.data = data;
  this.left = left || null;
  this.right = right || null;
  this.show = show;
}

function show() {
  return this.data;
}

/**
 * BinarySearchTree(BST): make sure that the left is less than the right.
 */
export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert = (data, left, right) => {
    let current;
    const node = new Node(data, left, right);
    this.root = this.root || node;
    if (this.root === node) return;
    current = this.root;
    while (current) {
      let { data } = node;
      // priority: equal is put to the left.
      if (current.data < data) {
        // to the right
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      } else {
        // to the left
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      }
    }
  };

  /**
   * preOrder: First access the parent node and then access the left node and finally access the right node
   * @param  {node} node
   * @param  {Function} fn
   */
  preOrder = (node, fn) => {
    if (node) {
      fn && fn(node);
      node.show();
      this.preOrder(node.left, fn);
      this.preOrder(node.right, fn);
    }
  };

  /**
   * inOrder: First access the left node and then access then parent node and finally access the right node.
   * @param  {Node} node
   * @param  {Function} fn
   */
  inOrder = (node, fn) => {
    if (node) {
      this.inOrder(node.left, fn);
      fn && fn(node);
      this.inOrder(node.right, fn);
    }
  };

  /**
   * postOrder: For priority access from the left node to the right node and finally access the parent node.
   * @param  {Node} node
   * @param  {Function} fn
   */
  postOrder = (node, fn) => {
    if (node) {
      this.postOrder(node.left, fn);
      this.postOrder(node.right, fn);
      fn & fn(node);
    }
  };

  getMin = node => {
    if (!node) {
      // root maybe assin as null-like(null / undefined)
      node = this.root || {};
    }
    while (node.left) {
      node = node.left;
    }
    return node;
  };

  getMax = node => {
    if (!node) {
      node = this.root || {};
    }
    while (node.right) {
      node = node.right;
    }
    return node;
  };

  /**
   * @param  { any } data
   * @param  { Node } node
   */
  find = (data, node) => {
    if (!node) {
      node = this.root;
    }
    while (node != null) {
      if (node.data === data) {
        return node;
      } else if (node.data > data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return null;
  };

  /**
   * @param  {any} data
   * @param  {Node} node
   */
  contains = (data, node) => {
    return !!this.find(data, node);
  };

  _extractData = (node, predicate) => {
    return predicate ? node.data : node;
  };

  /**
   * @param  {objec} option {min: bool, max: bool, extractData: bool, node: Node}
   */
  get = option => {
    const { min, max, extractData = true, node = this.root } = option;
    if (min && max) {
      return [
        this._extractData(this.getMin(node), extractData),
        this._extractData(this.getMax(node), extractData),
      ];
    } else if (min || max) {
      return min
        ? this._extractData(this.getMin(node), extractData)
        : this._extractData(this.getMax(node), extractData);
    }
    return this._extractData(node, extractData);
  };

  // to do: check
  /**
   * @param  {any} data
   */
  // remove =(data) => {
  //   const that = this;
  //   const removeNode = (node, data) => {
  //     if(!node) {
  //       return null;
  //     }
  //     if(data === node.data) {
  //       if(!node.left && !node.right) {
  //         return null;
  //       }
  //       if(!node.left) {
  //         return node.right;
  //       }
  //       if(!node.right) {
  //         return node.left;
  //       }
  //       // 2 children
  //       const temp = that.getMin(node.right);
  //       node.data = temp;
  //       node.right = removeNode(node.right, temp);
  //       return node;
  //     } else if(data < node.data) {
  //       node.left = removeNode(node.left, data);
  //       return node;
  //     } else {
  //       node.right = removeNode(node.right, data);
  //       return node;
  //     }
  //   };
  //   this.root = removeNode(this.root, data);
  //   return this;
  // }

  // util
  print() {
    if (!this.root) {
      return console.log('No root node found');
    }
    const newline = new Node('|');
    const queue = [this.root, newline];
    let string = '';
    while (queue.length) {
      const node = queue.shift();
      string += `${node.data ? node.data.toString() : '-'} `;
      if (node === newline && queue.length) {
        queue.push(newline);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return string.slice(0, -2).trim();
  }
}
