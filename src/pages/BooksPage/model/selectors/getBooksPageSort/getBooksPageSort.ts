import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { BooksSortField } from '@/entities/Book';

export const getBooksPageSort = (state: StateSchema) => state.booksPage?.sort || BooksSortField.RELEVANCE;
