/**
 *
 * Time complexity: [ avg: O(n^2) | min: O(n) | max: O(n^2) ]
 * Stability: yes
 *
 */
export default function insertionSort(arr) {
  const list = [...arr];

  const lens = list.length;
  let value, sorted, unsorted;

  for (unsorted = 0; unsorted < lens; unsorted++) {
    value = list[unsorted];

    for (sorted = unsorted - 1; sorted >= 0 && list[sorted] > value; sorted--) {
      list[sorted + 1] = list[sorted];
    }

    list[sorted + 1] = value;
  }

  return list;
}
