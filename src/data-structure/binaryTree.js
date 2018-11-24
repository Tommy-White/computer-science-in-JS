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

  insert(data, left, right) {
    let current;
    const node = new Node(data, left, right);
    this.root = this.root || node;
    if (this.root === node) return;
    current = this.root;
    while (current) {
      let { data } = node;
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
  }

  /**
   * preOrder: First access the parent node and then access the left node and finally access the right node
   * @param  {node} node
   * @param  {Function} fn
   */
  preOrder(node, fn) {
    if (node) {
      fn && fn(node);
      node.show();
      this.preOrder(node.left, fn);
      this.preOrder(node.right, fn);
    }
  }

  /**
   * inOrder: First access the left node and then access then parent node and finally access the right node.
   * @param  {Node} node
   * @param  {Function} fn
   */
  inOrder(node, fn) {
    if (node) {
      this.inOrder(node.left, fn);
      fn && fn(node);
      this.inOrder(node.right, fn);
    }
  }

  /**
   * postOrder: For priority access from the right node to the left node and finally access the parent node.
   * @param  {Node} node
   * @param  {Function} fn
   */
  postOrder(node, fn) {
    if (node) {
      this.postOrder(node.left, fn);
      this.postOrder(node.right, fn);
      fn & fn(node);
    }
  }
}
