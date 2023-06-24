import { memo, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { getBooks, booksPageActions } from '@/pages/BooksPage/model/slices/booksPageSlice';
import { ListBoxInput } from '@/widgets/ListBoxInput';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon } from '@/shared/ui/Icon/Icon';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { fetchBooksList } from '@/pages/BooksPage/model/services/fetchBooksList/fetchBooksList';
import { getBooksPageSearch } from '@/pages/BooksPage/model/selectors/getBooksPageSearch/getBooksPageSearch';

interface SearchBooksHintsProps {
  className?: string,
}

export const SearchBooksHints = memo((props: SearchBooksHintsProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('book');
  const data = useSelector((state: StateSchema) => getBooks.selectAll(state));
  const search = useSelector(getBooksPageSearch);
  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    dispatch(fetchBooksList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onSearchChange = useCallback((value: string) => {
    dispatch(booksPageActions.setSearch(value));
    dispatch(booksPageActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);

  const searchItems = useMemo(() => {
    return data.map((book) => (
      book.volumeInfo.title
    ))
      .filter((value, index, array) => array.indexOf(value) === index)
      .slice(0, 5);
  }, [data]);

  return (
    <ListBoxInput
      width="100%"
      height={45}
      placeholder={t('Book name, text, author')}
      items={searchItems}
      onChange={onSearchChange}
      value={search}
      icon={<Icon Svg={SearchIcon} width={20} height={20} />}
    />
  );
});
