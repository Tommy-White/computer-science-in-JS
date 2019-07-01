export default function binarySearch(sortedArr, data) {
  let start = 0;
  let end = sortedArr.length - 1;

  while (start <= end) {
    const mid = ((start + end) / 2) | 0;
    if (sortedArr[mid] < data) {
      start = mid + 1;
    } else if (sortedArr[mid] > data) {
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}
