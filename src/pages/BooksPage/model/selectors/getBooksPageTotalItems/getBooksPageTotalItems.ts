import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getBooksPageTotalItems = (state: StateSchema) => state.booksPage?.totalItems || 0;
