import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BookSortSelector.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { ListBox } from '@/shared/ui/Popups';
import { BooksSortField, Filter } from '../../model/consts/bookConsts';
import { ListBoxItem, ListBoxSize } from '@/shared/ui/Popups/ui/ListBox/ListBox';

interface BookSortSelectorProps {
  className?: string,
  onChangeFilter?: (newFilter: Filter) => void,
  filter: Filter,
  onChangeSort?: (newSort: BooksSortField) => void,
  sort: BooksSortField,
}

export const BookSortSelector = memo((props: BookSortSelectorProps) => {
  const {
    className,
    onChangeFilter,
    filter,
    onChangeSort,
    sort,
  } = props;
  const { t } = useTranslation('book');

  const filterItems = useMemo<ListBoxItem<Filter>[]>(() => [
    {
      value: Filter.ALL,
      content: t('All'),
    },
    {
      value: Filter.EBOOKS,
      content: t('ebooks'),
    },
    {
      value: Filter.FREE,
      content: t('free-ebooks'),
    },
    {
      value: Filter.FULL,
      content: t('full'),
    },
    {
      value: Filter.PAID,
      content: t('paid-ebooks'),
    },
    {
      value: Filter.PARTIAL,
      content: t('partial'),
    },
  ], [t]);

  const sortItems = useMemo<ListBoxItem<BooksSortField>[]>(() => [
    {
      value: BooksSortField.NEWEST,
      content: t('newest'),
    },
    {
      value: BooksSortField.RELEVANCE,
      content: t('relevance'),
    },
  ], [t]);

  return (
    <HStack gap="8" className={classNames(cls.BookSortSelector, {}, [className])}>
      <ListBox
        items={filterItems}
        onChange={onChangeFilter}
        value={t(filter === Filter.ALL ? 'All' : filter)}
        defaultValue={t('All')}
        direction="bottom right"
        size={ListBoxSize.L}
      />
      <ListBox
        items={sortItems}
        onChange={onChangeSort}
        value={t(sort)}
        defaultValue={t(BooksSortField.NEWEST)}
        direction="bottom right"
        size={ListBoxSize.L}
      />
    </HStack>
  );
});
