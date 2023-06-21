import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getBooksPageLimit = (state: StateSchema) => state.booksPage?.limit || 10;
