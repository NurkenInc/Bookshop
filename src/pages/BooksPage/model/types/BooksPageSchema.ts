import { EntityState } from '@reduxjs/toolkit';
import {
  Book, BookView, BooksSortField, Filter, PrintType,
} from '@/entities/Book';
import { SortOrder } from '@/shared/types';

export interface BooksPageSchema extends EntityState<Book> {
  isLoading?: boolean,
  error?: string,
  totalItems?: number,

  // pagination
  page: number,
  limit: number,
  hasMore: boolean,

  // filters
  view: BookView,
  search: string,
  category: string,
  order: SortOrder,
  sort: BooksSortField,
  filter: Filter,
  printType: PrintType,

  _inited: boolean,
}
