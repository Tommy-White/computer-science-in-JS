import { Node, BinarySearchTree } from '../../data-structure/binaryTree';
// const BST = require('../../data-structure/binaryTree')

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(56);
binarySearchTree.insert(81);
binarySearchTree.insert(22);
binarySearchTree.insert(77);
binarySearchTree.insert(30);
binarySearchTree.insert(10);
binarySearchTree.insert(92);

function Wrapper(BST_Order) {
  let collect = [];
  BST_Order(binarySearchTree.root, node => {
    collect.push(node.data);
  });
  return collect;
}

test('BST insert', () => {
  expect(binarySearchTree.print()).toEqual('56 | 22 81 | 10 30 77 92');
});

test('BST inOrder', () => {
  expect(Wrapper(binarySearchTree.inOrder)).toEqual([
    10,
    22,
    30,
    56,
    77,
    81,
    92,
  ]);
});

test('BST preOrder', () => {
  expect(Wrapper(binarySearchTree.preOrder)).toEqual([
    56,
    22,
    10,
    30,
    81,
    77,
    92,
  ]);
});

test('BST postOrder', () => {
  expect(Wrapper(binarySearchTree.postOrder)).toEqual([
    10,
    30,
    22,
    77,
    92,
    81,
    56,
  ]);
});
