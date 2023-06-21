import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getBooksPageSearch = (state: StateSchema) => state.booksPage?.search || '';
