import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReducersList, DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchNextArticlesList } from '../../model/services/fetchNextArticlesList/fetchNextArticlesList';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string,
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesList());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticlesPageFilters />
        <ArticleInfiniteList className={cls.list} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
