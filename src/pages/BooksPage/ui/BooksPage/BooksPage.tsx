import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BooksPage.module.scss';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { booksPageReducer } from '../../model/slices/booksPageSlice';
import { BooksInfiniteList } from '../BooksInfiniteList/BooksInfiniteList';
import { Page } from '@/widgets/Page/ui/Page';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchNextBooksList } from '../../model/services/fetchNextBooksList/fetchNextBooksList';
import { BooksPageHero } from '../BooksPageHero/BooksPageHero';
import { initBooksList } from '../../model/services/initBooksList/initBooksList';

interface BooksPageProps {
  className?: string,
}

const reducers: ReducersList = {
  booksPage: booksPageReducer,
};

const BooksPage = (props: BooksPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextBooksList());
  }, [dispatch]);

  const afterLoaded = () => {
    dispatch(initBooksList(searchParams));
  };

  return (
    <DynamicModuleLoader afterLoaded={afterLoaded} reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.BooksPage, {}, [className])}>
        <BooksPageHero />
        <BooksInfiniteList className={cls.list} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(BooksPage);
