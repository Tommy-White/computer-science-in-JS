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

const eBST = new BinarySearchTree();

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

test('BST get min', () => {
  expect(binarySearchTree.getMin().data).toEqual(10);
});

test('BST get min data', () => {
  expect(binarySearchTree.get({ min: true })).toEqual(10);
});

test('BST get max', () => {
  expect(binarySearchTree.getMax().data).toEqual(92);
});

test('BST get max (empty BST)', () => {
  expect(eBST.getMax().data).toEqual(undefined);
});

test('find not exist node 100', () => {
  expect(binarySearchTree.find(100)).toBeNull;
});

test('find exist node 77', () => {
  expect(binarySearchTree.find(77).data).toEqual(77);
});

test('contain exist node 77', () => {
  expect(binarySearchTree.contains(77)).toBeTruthy();
});

test('remove 81', () => {
  expect(binarySearchTree.remove(56).print()).toEqual('77 | 22 81 | 10 30 92');
});
