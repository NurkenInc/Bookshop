import { CounterSchema } from './model/types/counterShema';
import { Counter } from './ui/Counter';
import { counterReducer } from './model/slice/counterSlice';

export {
  counterReducer,
  CounterSchema,
  Counter,
};
