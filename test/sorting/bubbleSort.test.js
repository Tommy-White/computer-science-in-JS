import bubbleSort from '../../src/algorithms/sorting/bubbleSort';

test('bubbleSort sorted test', () => {
  const list1 = [1, 5, 4, 44, 33, 200, 67];
  const list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const list3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

  expect(bubbleSort(list1)).toEqual([1, 4, 5, 33, 44, 67, 200]);
  expect(bubbleSort(list2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(bubbleSort(list3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('bubbleSort sorted stability test', () => {
  var left = new Number(50);
  var right = new Number(50);
  const list = [20, 1, 100, 66, 14, left, 77, 23, right, 94];

  expect(bubbleSort(list)[4]).toBe(left);
  expect(bubbleSort(list)[5]).toBe(right);
});
