import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getBooksPageInited = (state: StateSchema) => state.booksPage?._inited;
