import {
  memo, useState, useCallback, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarItemsList.module.scss';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/Icon/Icon';
import FilterIcon from '@/shared/assets/icons/filter.svg';
import ArrowDown from '@/shared/assets/icons/arrowDown.svg';
import { CheckboxGroup } from '@/shared/ui/CheckboxGroup/CheckboxGroup';
import { BooksSortField, Filter, PrintType } from '@/entities/Book';
import { getBooksPagePrintType } from '@/pages/BooksPage/model/selectors/getBooksPagePrintType/getBooksPagePrintType';
import { getBooksPageSort } from '@/pages/BooksPage/model/selectors/getBooksPageSort/getBooksPageSort';
import { getBooksPageFilter } from '@/pages/BooksPage/model/selectors/getBooksPageFilter/getBooksPageFilter';
import { getBooksPageCategory } from '@/pages/BooksPage/model/selectors/getBooksPageCategory/getBooksPageCategory';
import { fetchBooksList } from '@/pages/BooksPage/model/services/fetchBooksList/fetchBooksList';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { booksPageActions } from '@/pages/BooksPage';

interface SidebarItemsListProps {
  className?: string,
}

export const SidebarItemsList = memo((props: SidebarItemsListProps) => {
  const { className } = props;
  const { t } = useTranslation('book');
  const [filterCollapsed, setFilterCollapsed] = useState(false);
  const printType = useSelector(getBooksPagePrintType);
  const sort = useSelector(getBooksPageSort);
  const filter = useSelector(getBooksPageFilter);
  const category = useSelector(getBooksPageCategory);
  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    dispatch(fetchBooksList({ replace: true }));
  }, [dispatch]);

  const onFilterChange = useCallback((value: string) => {
    if (value as Filter === filter) return;
    dispatch(booksPageActions.setFilter(value as Filter));
    dispatch(booksPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData, filter]);

  const onSortChange = useCallback((value: string) => {
    if (value as BooksSortField === sort) return;
    dispatch(booksPageActions.setSort(value as BooksSortField));
    dispatch(booksPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData, sort]);

  const onPrintTypeChange = useCallback((value: string) => {
    if (value as PrintType === printType) return;
    dispatch(booksPageActions.setPrintType(value as PrintType));
    dispatch(booksPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData, printType]);

  const onCategoryChange = useCallback((value: string) => {
    if (value === category) return;
    dispatch(booksPageActions.setCategory(value));
    dispatch(booksPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData, category]);

  const onFilterClick = useCallback(() => {
    setFilterCollapsed((prev) => !prev);
  }, []);

  const categoryItems = useMemo(() => ([
    {
      value: '',
      label: t('All'),
    },
    {
      value: 'Adventure',
      label: t('Adventure'),
    },
    {
      value: 'Fantasy',
      label: t('Fantasy'),
    },
    {
      value: 'Science Fiction',
      label: t('Science Fiction'),
    },
    {
      value: 'Romance',
      label: t('Romance'),
    },
  ]), [t]);

  const typeItems = useMemo(() => ([
    {
      value: Filter.ALL,
      label: t('All'),
    },
    {
      value: Filter.EBOOKS,
      label: t('ebooks'),
    },
    {
      value: Filter.FREE,
      label: t('free-ebooks'),
    },
    {
      value: Filter.FULL,
      label: t('full'),
    },
    {
      value: Filter.PAID,
      label: t('paid-ebooks'),
    },
    {
      value: Filter.PARTIAL,
      label: t('partial'),
    },
  ]), [t]);

  const sortByItems = useMemo(() => ([
    {
      value: BooksSortField.NEWEST,
      label: t('newest'),
    },
    {
      value: BooksSortField.RELEVANCE,
      label: t('relevance'),
    },
  ]), [t]);

  const printTypeItems = useMemo(() => ([
    {
      value: PrintType.ALL,
      label: t('All'),
    },
    {
      value: PrintType.BOOKS,
      label: t('Books'),
    },
    {
      value: PrintType.MAGAZINES,
      label: t('Magazines'),
    },
  ]), [t]);

  return (
    <div className={classNames(cls.SidebarItemsList, {}, [className])}>
      <HStack className={cls.header}>
        <Text title="BookStore " size={TextSize.SM} />
        <pre>{' > '}</pre>
        <Text title={t('Categories')} size={TextSize.SM} />
      </HStack>
      <VStack className={classNames(cls.filter, {}, [])}>
        <HStack max gap="8" align="center" onClick={onFilterClick} className={cls.filterHeader}>
          <Icon Svg={FilterIcon} height={20} width={20} />
          <Text title={t('Filter')} align={TextAlign.LEFT} size={TextSize.M} />
          <Icon
            className={classNames(cls.arrow, { [cls.arrowCollapsed]: filterCollapsed }, [])}
            Svg={ArrowDown}
            height={10}
            width={10}
          />
        </HStack>
        <VStack max align="start" gap="8" className={classNames(cls.filters, { [cls.collapsed]: filterCollapsed }, [])}>
          <Text title={t('Category')} align={TextAlign.LEFT} size={TextSize.SM} />
          <CheckboxGroup
            items={categoryItems}
            onChange={onCategoryChange}
            defaultValue={category}
          />
          <Text title={t('Type')} align={TextAlign.LEFT} size={TextSize.SM} />
          <CheckboxGroup
            items={typeItems}
            onChange={onFilterChange}
            defaultValue={filter}
          />
          <Text title={t('Sort by')} align={TextAlign.LEFT} size={TextSize.SM} />
          <CheckboxGroup
            items={sortByItems}
            onChange={onSortChange}
            defaultValue={sort}
          />
          <Text title={t('Print type')} align={TextAlign.LEFT} size={TextSize.SM} />
          <CheckboxGroup
            items={printTypeItems}
            onChange={onPrintTypeChange}
            defaultValue={printType}
          />
        </VStack>
      </VStack>
    </div>
  );
});
