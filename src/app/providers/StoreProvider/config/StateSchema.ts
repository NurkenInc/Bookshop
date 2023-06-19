// import { EnhancedStore } from '@reduxjs/toolkit';

import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

// export type StateSchemaKey = keyof StateSchema;

// export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
//   reducerManager: ReducerManagr;
// }

// export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;
// export interface ReducerManager {

// }
