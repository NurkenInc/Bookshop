// export interface CounterState {
//   value: number;
// }

import { CounterSchema } from 'entities/Counter';

export interface StateSchema {
  counter: CounterSchema;
}
