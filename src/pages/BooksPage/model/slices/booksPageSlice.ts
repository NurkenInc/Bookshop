import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { BooksPageSchema } from '../types/BooksPageSchema';
import {
  Book, BookView, BooksSortField, Filter, PrintType,
} from '@/entities/Book';
import { SortOrder } from '@/shared/types';
import { BOOKS_VIEW_LOCALSTORAGE_KEY } from '@/shared/consts/localstorage';
import { fetchBooksList } from '../services/fetchBooksList/fetchBooksList';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

const booksAdapter = createEntityAdapter<Book>({
  selectId: (book) => book.id,
  // sortComparer: (a, b) => {
  //   const ratingA = a.volumeInfo.ratingsCount || 0;
  //   const ratingB = b.volumeInfo.ratingsCount || 0;

  //   return ratingA - ratingB;
  // },
});

export const getBooks = booksAdapter.getSelectors<StateSchema>(
  (state) => state.booksPage || booksAdapter.getInitialState(),
);

const booksPageSlice = createSlice({
  name: 'booksPageSlice',
  initialState: booksAdapter.getInitialState<BooksPageSchema>({
    page: 1,
    limit: 10,
    hasMore: true,
    isLoading: false,
    error: undefined,
    totalItems: undefined,
    view: BookView.BAR,
    ids: [],
    entities: {},
    search: '',
    order: 'DESC',
    filter: Filter.ALL,
    printType: PrintType.ALL,
    sort: BooksSortField.RELEVANCE,
    category: '',
    _inited: false,
  }),
  reducers: {
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setView: (state, action: PayloadAction<BookView>) => {
      state.view = action.payload;
      localStorage.setItem(BOOKS_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSort: (state, action: PayloadAction<BooksSortField>) => {
      state.sort = action.payload;
    },
    setPrintType: (state, action: PayloadAction<PrintType>) => {
      state.printType = action.payload;
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(BOOKS_VIEW_LOCALSTORAGE_KEY) as BookView;
      state.view = view;
      state.limit = view === BookView.DETAILED ? 5 : 10;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          booksAdapter.removeAll(state);
        }
      })
      .addCase(fetchBooksList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.items && action.payload.items?.length >= state.limit;
        state.totalItems = action.payload.totalItems;

        if (!action.payload.items) return;
        if (action.meta.arg.replace) {
          booksAdapter.setAll(state, action.payload.items);
        } else {
          booksAdapter.addMany(state, action.payload.items);
        }
      })
      .addCase(fetchBooksList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: booksPageActions } = booksPageSlice;

export const { reducer: booksPageReducer } = booksPageSlice;
