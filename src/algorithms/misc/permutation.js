export default function permutation(input) {
  const result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        debugger;
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr, m.concat(next));
      }
    }
  };

  permute(input);
  return result;
}
