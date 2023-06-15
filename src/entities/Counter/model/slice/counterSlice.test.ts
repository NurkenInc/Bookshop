import { StateSchema } from '@/app/providers/StoreProvider';
import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../types/counterShema';

describe('counterSlice', () => {
  test('Test increment', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.incremented())).toEqual({ value: 11 });
  });

  test('Test decrement', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.decremented())).toEqual({ value: 9 });
  });

  test('Test empty state', () => {
    expect(counterReducer(undefined, counterActions.incremented())).toEqual({ value: 1 });
  });
});
