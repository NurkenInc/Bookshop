import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getBooksPageOrder = (state: StateSchema) => state.booksPage?.order || 'ASC';
