function sum(a, b) {
  return a + b;
}

function printHelloWorld() {
  return "Hello World";
}

test('adds 1 + 2 to equal 3', () => {




      expect(sum(1, 2)).toBe(3);

});

test('fn printHelloWorld', () => {
  expect(printHelloWorld()).toEqual("Hello World");
});
