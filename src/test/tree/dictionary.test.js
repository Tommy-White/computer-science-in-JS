import Dictionary from '../../data-structure/dictionary';

const dict = new Dictionary();

dict.add('name', 'Tommy');
dict.add('sex', 'male');
dict.add('age', 18);

test('dictionary find sex', () => {
  expect(dict.find('sex')).toEqual('male');
});

test('distionary original count', () => {
  expect(dict.count()).toEqual(3);
});

test('distionary count after remove 1 K-V', () => {
  expect(
    (() => {
      dict.remove('age');
      return dict.count();
    })()
  ).toEqual(2);
});
