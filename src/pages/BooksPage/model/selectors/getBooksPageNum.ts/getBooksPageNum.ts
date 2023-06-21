import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getBooksPageNum = (state: StateSchema) => state.booksPage?.page || 1;
