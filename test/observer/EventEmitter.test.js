import EventEmitter from '../../src/design-pattern/observer/eventEmitter';

test('emit test', () => {
  const collect = [];
  const emitter = new EventEmitter();

  emitter.on(d => collect.push(d));
  emitter.on(d => collect.push(d));
  emitter.on(d => collect.push(d));

  emitter.emit(1);

  expect(collect).toEqual([1, 1, 1]);
});

test('listering none of function', () => {
  const emitter = new EventEmitter();

  expect(() => emitter.on(1)).toThrowError(/number$/);
  expect(() => emitter.on('')).toThrowError(/string$/);
  expect(() => emitter.on({})).toThrowError(/object$/);

  // Is there needs complete type assert?
  expect(() => emitter.on([])).toThrowError(/object$/);
});

test('unlistering test', () => {
  const emitter = new EventEmitter();

  const collect = [];

  const on1 = d => {
    collect.push(d);
  };
  const on2 = d => {
    collect.push(++d);
  };
  const on3 = d => {
    collect.push(d + 2);
  };
  emitter.on(on1);
  emitter.on(on2);
  const un = emitter.on(on3);
  un();

  emitter.emit(1);

  // Is there needs complete type assert?
  expect(collect).toEqual([1, 2]);
});

test('extends form EventEmitter', () => {
  const collect = [];

  class Sub extends EventEmitter {}
  const subEmitter = new Sub();

  const extEmitter = new EventEmitter({
    pushToCollect: d => collect.push(d),
  });

  subEmitter.on(d => collect.push(d));
  subEmitter.emit(1);

  extEmitter.on(d => collect.push(d));
  extEmitter.emit(1);
  extEmitter.pushToCollect(1);

  expect(collect).toEqual([1, 1, 1]);
});

test('EventEmitter use once', () => {
  const collect = [];

  const emitter = new EventEmitter();

  emitter.once(d => collect.push(d));

  for (let i = 0; i < 10; i++) {
    emitter.emit(1);
  }

  expect(collect).toEqual([1]);
});
