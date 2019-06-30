import DoublyLinkedList from '../../src/data-structure/linkedList/doublyLinkedList';

test('doubly linked list test', () => {
  const doublyLinkedList = new DoublyLinkedList();

  doublyLinkedList.insert(1);
  doublyLinkedList.insert(2);
  doublyLinkedList.insert(3);

  doublyLinkedList.remove(5);
  doublyLinkedList.remove(3);
  doublyLinkedList.insert(4, 2);
  doublyLinkedList.insert(3, 2);

  expect(doublyLinkedList._get()).toEqual('1 2 3 4');
  expect(doublyLinkedList.length()).toEqual(4);
  expect(doublyLinkedList.find(2).element).toEqual(2);
  expect(doublyLinkedList.find(5)).toEqual(null);
});

test('doubly linked list test', () => {
  const doublyLinkedList = new DoublyLinkedList();
  const inOrder = [];
  const orderReverse = [];

  doublyLinkedList.insert(1);
  doublyLinkedList.insert(2);
  doublyLinkedList.insert(3);

  doublyLinkedList.traverse(e => {
    inOrder.push(e.element);
  });
  doublyLinkedList.traverse(e => {
    orderReverse.push(e.element);
  }, false);

  expect(inOrder).toEqual([1, 2, 3]);
  expect(orderReverse).toEqual([3, 2, 1]);
});
