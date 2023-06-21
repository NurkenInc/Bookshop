import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { BookView } from '@/entities/Book';

export const getBooksPageView = (state: StateSchema) => state.booksPage?.view || BookView.BAR;
