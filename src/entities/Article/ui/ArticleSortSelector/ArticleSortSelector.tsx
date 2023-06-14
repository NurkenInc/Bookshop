import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from '../../model/consts/articleConsts';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string,
  sort: ArticleSortField,
  order: SortOrder,
  onChangeOrder: (newOrder: SortOrder) => void,
  onChangeSort: (newSort: ArticleSortField) => void,
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
  } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('Ascending'),
    },
    {
      value: 'desc',
      content: t('Descending'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('Creation Date'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('Title'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('Views'),
    },
  ], [t]);

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        options={sortFieldOptions}
        label={t('Sort By')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        className={cls.order}
        options={orderOptions}
        label={t('By')}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
