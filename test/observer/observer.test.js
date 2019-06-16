import {
  Observable,
  Observer,
} from '../../src/design-pattern/observer/observer';

class Subject extends Observable {
  data = '';

  setDataChange = data => {
    this.data = data;
    this.broadcastObserver();
  };
}

class Listener extends Observer {
  constructor() {
    super();
    this.log = '';
  }
  update = (observable, data) => {
    this.log = data;
  };
}

class SubjectWithChange extends Observable {
  data = '';

  setDataChange = data => {
    this.data = data;
    this.setChanged();
    this.broadcastObserver();
  };
}

test('Observe with no change', () => {
  const sub = new Subject();
  const listener = new Listener();

  sub.registerObserver(listener);
  sub.setDataChange(1);
  expect(listener.log).toEqual(1);

  sub.removeObserver(listener);
  sub.setDataChange(2);
  expect(listener.log).not.toEqual(2);
  expect(listener.log).toEqual(1);
});

test('Observe with change', () => {
  const sub = new SubjectWithChange({ isChange: true });
  const listener = new Listener();

  sub.registerObserver(listener);
  sub.setDataChange(1);
  expect(listener.log).toEqual(1);

  sub.removeObserver(listener);
  sub.setDataChange(2);
  expect(listener.log).not.toEqual(2);
  expect(listener.log).toEqual(1);
});
