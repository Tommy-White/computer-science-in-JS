import SinglyLinkedList from '../../src/data-structure/linkedList/singlyLinkedList';

test('singly linked list test', () => {
  const singlyLinkedList = new SinglyLinkedList();

  singlyLinkedList.insert(1);
  singlyLinkedList.insert(2);
  singlyLinkedList.insert(3);

  singlyLinkedList.remove(5);
  singlyLinkedList.remove(3);
  singlyLinkedList.insert(4, 2);
  singlyLinkedList.insert(3, 2);

  expect(singlyLinkedList._get()).toEqual('1 2 3 4');
  expect(singlyLinkedList.length()).toEqual(4);
  expect(singlyLinkedList.find(2).element).toEqual(2);
  expect(singlyLinkedList.find(5)).toEqual(null);
});
