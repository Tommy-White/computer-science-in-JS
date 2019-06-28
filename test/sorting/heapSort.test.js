import heapSort from '../../src/algorithms/sorting/heapSort';

test('quickSort sorted test', () => {
  const list1 = [1, 5, 4, 44, 33, 200, 67];
  const list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const list3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  const list4 = [7, 10, 20, 3, 4, 49, 50];

  expect(heapSort(list1)).toEqual([1, 4, 5, 33, 44, 67, 200]);
  expect(heapSort(list2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(heapSort(list3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(heapSort(list4)).toEqual([3, 4, 7, 10, 20, 49, 50]);
});
