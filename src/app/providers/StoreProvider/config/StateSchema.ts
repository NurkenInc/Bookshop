import {
  CombinedState, EnhancedStore, Reducer, ReducersMapObject, AnyAction,
  Dispatch,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { UISchema } from '@/features/UI';
import { rtkApi } from '@/shared/api/rtkApi';
import { BooksPageSchema } from '@/pages/BooksPage';
import { CounterSchema } from '@/pages/TestPage/model/types/CounterSchema';

export interface StateSchema {
  // ui: UISchema;
  // [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Async reducers
  counter?: CounterSchema;
  booksPage?: BooksPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  dispatch?: Dispatch;
  state: StateSchema;
}
