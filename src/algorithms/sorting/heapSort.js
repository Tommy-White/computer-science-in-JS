function swap(list, i, j) {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}

/**
 *
 * @param {Array} tree Complete Binary Tree
 * @param {number} n length
 * @param {number} i index
 */
function heapify(tree = [], n, i) {
  if (i >= n) {
    return;
  }

  let max = i;
  const c1 = 2 * i + 1;
  const c2 = 2 * i + 2;

  if (c1 < n && tree[c1] > tree[max]) max = c1;
  if (c2 < n && tree[c2] > tree[max]) max = c2;

  if (max !== i) {
    swap(tree, max, i);
    heapify(tree, n, max);
  }
}

function buildMaxHeap(tree, n) {
  const lastNode = n - 1;
  const p = ((lastNode - 1) / 2) | 0;
  for (let i = p; i >= 0; i--) {
    heapify(tree, n, i);
  }
}

/**
 *
 * Time complexity: [ avg: O(nlog(n)) | min: O(nlog(n)) | max: O(nlog(n)) ]
 * Stability: no
 *
 */
export default function heapSort(sour = [], n = sour.length) {
  const list = [...sour];

  buildMaxHeap(list, n);

  for (let i = n - 1; i >= 0; i--) {
    swap(list, i, 0);
    heapify(list, i, 0);
  }

  return list;
}
