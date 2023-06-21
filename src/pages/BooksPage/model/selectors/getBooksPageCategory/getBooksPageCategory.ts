import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getBooksPageCategory = (state: StateSchema) => state.booksPage?.category || '';
