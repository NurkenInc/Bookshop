import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getBooksPageError = (state: StateSchema) => state.booksPage?.error || undefined;
