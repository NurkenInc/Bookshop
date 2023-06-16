import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {

  };

  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
