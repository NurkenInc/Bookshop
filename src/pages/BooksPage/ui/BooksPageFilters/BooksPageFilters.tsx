import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BooksPageFilters.module.scss';
import { VStack, HStack } from '@/shared/ui/Stack';
import { getBooksPageSearch } from '../../model/selectors/getBooksPageSearch/getBooksPageSearch';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { booksPageActions } from '../../model/slices/booksPageSlice';
import { BookSortSelector } from '@/entities/Book/ui/BookSortSelector/BookSortSelector';
import { getBooksPageFilter } from '../../model/selectors/getBooksPageFilter/getBooksPageFilter';
import { BookView, BooksSortField, Filter } from '@/entities/Book';
import { getBooksPageSort } from '../../model/selectors/getBooksPageSort/getBooksPageSort';
import { getBooksPageView } from '../../model/selectors/getBooksPageView/getBooksPageView';
import { BookViewSelector } from '@/entities/Book/ui/BookViewSelector/BookViewSelector';
import { fetchBooksList } from '../../model/services/fetchBooksList/fetchBooksList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SearchBooksHints } from '@/features/searchBooksHints';

interface BooksPageFiltersProps {
  className?: string,
}

export const BooksPageFilters = memo((props: BooksPageFiltersProps) => {
  const { className } = props;
  const { t } = useTranslation('book');
  const search = useSelector(getBooksPageSearch);
  const view = useSelector(getBooksPageView);
  const filter = useSelector(getBooksPageFilter);
  const sort = useSelector(getBooksPageSort);
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

  const onFilterChange = useCallback((value: Filter) => {
    dispatch(booksPageActions.setFilter(value));
    dispatch(booksPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onSortChange = useCallback((value: BooksSortField) => {
    dispatch(booksPageActions.setSort(value));
    dispatch(booksPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onViewChange = useCallback((value: BookView) => {
    dispatch(booksPageActions.setView(value));
    dispatch(booksPageActions.setPage(1));
  }, [dispatch]);

  return (
    <VStack gap="8" className={classNames(cls.BooksPageFilters, {}, [className])}>
      <HStack max justify="between">
        <BookViewSelector
          view={view}
          onViewChange={onViewChange}
        />
        <BookSortSelector
          filter={filter}
          onChangeFilter={onFilterChange}
          sort={sort}
          onChangeSort={onSortChange}
        />
      </HStack>
      <SearchBooksHints onSearchChange={onSearchChange} search={search} />
    </VStack>
  );
});
