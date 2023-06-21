import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getBooksPageHasMore = (state: StateSchema) => state.booksPage?.hasMore || false;
