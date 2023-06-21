import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getBooksPageIsLoading = (state: StateSchema) => state.booksPage?.isLoading || false;
