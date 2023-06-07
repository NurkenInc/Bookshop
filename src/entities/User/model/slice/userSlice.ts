import { createSlice, configureStore } from '@reduxjs/toolkit';
import { UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {};

const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
