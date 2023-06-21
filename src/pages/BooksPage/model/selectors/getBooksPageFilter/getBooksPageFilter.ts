import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { Filter } from '@/entities/Book';

export const getBooksPageFilter = (state: StateSchema) => state.booksPage?.filter || Filter.ALL;
