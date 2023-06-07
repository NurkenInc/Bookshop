// export interface CounterState {
//   value: number;
// }

import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}
