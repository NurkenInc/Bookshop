import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { PrintType } from '@/entities/Book';

export const getBooksPagePrintType = (state: StateSchema) => state.booksPage?.printType || PrintType.ALL;
