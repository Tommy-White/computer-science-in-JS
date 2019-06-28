/**
 *
 * Time complexity: [ avg: O(nlog(n)) | min: O(nlog(n)) | max: O(n^2) ]
 * Stability: no
 *
 */
export default function quickSort(list) {
  const lens = list.length;
  if (lens < 2) {
    return list;
  }

  const random = (Math.random() * Math.floor(lens)) | 0; // [0, lens)
  const pivot = list[random];

  let left = []; // smaller
  let equal = [];
  let right = []; // bigger

  for (let i of list) {
    if (i > pivot) right.push(i);
    else if (i < pivot) left.push(i);
    else equal.push(i);
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}
