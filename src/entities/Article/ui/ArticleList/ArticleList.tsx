import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string,
  articles: Article[],
  isLoading?: boolean,
  view?: ArticleView,
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
  } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem
      isLoading={isLoading}
      article={article}
      view={view}
      className={cls.card}
      key={article?.id}
    />
  );

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
