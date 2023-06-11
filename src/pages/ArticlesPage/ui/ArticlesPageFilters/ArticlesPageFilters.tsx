import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  ArticleSortField, ArticleView, ArticleViewSelector, ArticleType,
  ArticleTypeTabs,
} from 'entities/Article';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { SortOrder } from 'shared/types';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import cls from './ArticlesPageFilters.module.scss';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import {
  getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView,
} from '../../model/selectors/articlesPageSelector';

interface ArticlesPageFiltersProps {
  className?: string,
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback((newView: ArticleView) => {
    dispatch(articlesPageActions.setView(newView));
    dispatch(articlesPageActions.setPage(1));
  }, [dispatch]);

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSearch = useCallback((newSearch: string) => {
    dispatch(articlesPageActions.setSearch(newSearch));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);

  const onChangeType = useCallback((tab: TabItem<ArticleType>) => {
    dispatch(articlesPageActions.setType(tab.value));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input value={search} onChange={onChangeSearch} placeholder={t('Search')} />
      </Card>
      <ArticleTypeTabs
        value={type}
        onChangeType={onChangeType}
        className={cls.tabs}
      />
    </div>
  );
});
