import quickSort from '../../src/algorithms/sorting/quickSort';

test('quickSort sorted test', () => {
  const list1 = [1, 5, 4, 44, 33, 200, 67];
  const list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const list3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

  expect(quickSort(list1)).toEqual([1, 4, 5, 33, 44, 67, 200]);
  expect(quickSort(list2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(quickSort(list3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
