/**
 *
 * Time complexity: [ avg: O(n^2) | min: O(n) | max: O(n^2) ] calc: n(n+1)/2
 * Stability: yes
 *
 */
export default function bubbleSort(sour) {
  let swapped;
  let decrement = 0; // Not obvious on the macro, can remove it.
  const lens = sour.length;
  const list = [...sour];

  do {
    swapped = false;
    // each loop bubble put the largest in the end palce.
    for (let i = 0; i < lens - decrement; i++) {
      // compare left > right => swap
      if (list[i] > list[i + 1]) {
        const temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
        swapped = true;
      }
    }
    decrement++;
  } while (
    // continue swapping until sorted
    swapped
  );

  return list;
}
