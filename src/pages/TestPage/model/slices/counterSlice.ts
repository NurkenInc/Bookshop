import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { CounterSchema } from '../types/CounterSchema';

// const booksAdapter = createEntityAdapter<Book>({
//   selectId: (book) => book.id,
//   // sortComparer: (a, b) => {
//   //   const ratingA = a.volumeInfo.ratingsCount || 0;
//   //   const ratingB = b.volumeInfo.ratingsCount || 0;

//   //   return ratingA - ratingB;
//   // },
// });

// export const getBooks = booksAdapter.getSelectors<StateSchema>(
//   (state) => state.booksPage || booksAdapter.getInitialState(),
// );

const counterSlice = createSlice({
  name: 'booksPageSlice',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {},
});

export const { actions: counterPageActions } = counterSlice;

export const { reducer: counterPageReducer } = counterSlice;
