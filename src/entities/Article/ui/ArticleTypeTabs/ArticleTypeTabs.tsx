import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { Tabs, TabItem } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/consts/articleConsts';

interface ArticleTypeTabsProps {
  className?: string,
  value: ArticleType,
  onChangeType: (type: TabItem<ArticleType>) => void,
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('All'),
    },
    {
      value: ArticleType.IT,
      content: t('IT'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Science'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Economics'),
    },
  ], [t]);

  return (
    <Tabs
      tabs={typeTabs}
      onTabClick={onChangeType}
      value={value}
      className={classNames('', {}, [className])}
    />
  );
});
