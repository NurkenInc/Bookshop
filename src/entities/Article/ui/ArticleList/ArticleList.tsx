import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string,
  articles: Article[],
  isLoading?: boolean,
  view?: ArticleView,
  target?: HTMLAttributeAnchorTarget,
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.BAR ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
  ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.BAR,
    target,
  } = props;
  const { t } = useTranslation();

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Article are not found')} />
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.ArticleList, {}, [className, cls[view]])}
    >
      {articles.map((item) => (
        <ArticleListItem
          article={item}
          view={view}
          key={item.id}
          target={target}
          className={cls.card}
        />
      ))}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
