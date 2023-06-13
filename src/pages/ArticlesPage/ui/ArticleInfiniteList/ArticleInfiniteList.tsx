import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo } from 'react';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSearchParams } from 'react-router-dom';
import { Text, TextTheme, TextAlign } from 'shared/ui/Text/Text';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { getArticles } from '../../model/slice/articlesPageSlice';
import { getArticlesPageIsLoading, getArticlesPageView, getArticlesPageError } from '../../model/selectors/articlesPageSelector';

interface ArticleInfiniteListProps {
  className?: string,
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const [searchParams] = useSearchParams();
  const error = useSelector(getArticlesPageError);

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  if (error) {
    <Text
      title={t('Something went wrong')}
      text={t('Please refresh page')}
      theme={TextTheme.ERROR}
      align={TextAlign.CENTER}
    />;
  }

  return (
    <ArticleList
      articles={articles}
      isLoading={isLoading}
      view={view}
      className={className}
    />
  );
});
