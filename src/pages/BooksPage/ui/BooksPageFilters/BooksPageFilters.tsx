import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BooksPageFilters.module.scss';
import { Input } from '@/shared/ui/Input/Input';
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

  const onSearchChange = (value: string) => {
    dispatch(booksPageActions.setSearch(value));
  };

  const onFilterChange = (value: Filter) => {
    dispatch(booksPageActions.setFilter(value));
  };

  const onSortChange = (value: BooksSortField) => {
    dispatch(booksPageActions.setSort(value));
  };

  const onViewChange = (value: BookView) => {
    dispatch(booksPageActions.setView(value));
  };

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
      <Input
        placeholder={t('Book name, text, author')}
        onChange={onSearchChange}
        value={search}
        height={45}
        width="100%"
      />
    </VStack>
  );
});
