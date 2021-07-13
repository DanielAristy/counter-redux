import { reducerCounter } from './reducers/reducerCounter';

test('increment', () => {
  let state;
  state = reducerCounter(2, { type: 'INCREMENTED' });
  expect(state).toEqual(3);
});

test('decrement', () => {
  let state;
  state = reducerCounter(2, { type: 'DECREMENTED' });
  expect(state).toEqual(1);
});

test('reset', () => {
  let state;
  state = reducerCounter(5, { type: 'RESET' });
  expect(state).toEqual(0);
});
