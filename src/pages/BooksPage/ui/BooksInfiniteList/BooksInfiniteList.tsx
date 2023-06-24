import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getBooks } from '../../model/slices/booksPageSlice';
import { getBooksPageError } from '../../model/selectors/getBooksPageError/getBooksPageError';
import { getBooksPageView } from '../../model/selectors/getBooksPageView/getBooksPageView';
import { getBooksPageIsLoading } from '../../model/selectors/getBooksPageIsLoading/getBooksPageIsLoading';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { BooksList } from '@/entities/Book';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { getBooksPageTotalItems } from '../../model/selectors/getBooksPageTotalItems/getBooksPageTotalItems';
import { VStack } from '@/shared/ui/Stack';
import cls from './BooksInfiniteList.module.scss';

interface BooksInfiniteListProps {
  className?: string,
}

export const BooksInfiniteList = memo((props: BooksInfiniteListProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('book');
  const data = useSelector((state: StateSchema) => getBooks.selectAll(state));
  const totalItems = useSelector(getBooksPageTotalItems);
  const error = useSelector(getBooksPageError);
  const view = useSelector(getBooksPageView);
  const isLoading = useSelector(getBooksPageIsLoading);

  return (
    <VStack align="start" className={classNames(cls.BooksInfiniteList, {}, [className])}>
      <Text title={`${t('Results count')}: ${totalItems}`} theme={TextTheme.INVERTED} className={cls.results} />
      <BooksList
        books={data}
        view={view}
        isLoading={isLoading}
        target="_self"
      />
    </VStack>
  );
});
