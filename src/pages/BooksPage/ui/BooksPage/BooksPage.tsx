import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BooksPage.module.scss';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { booksPageReducer } from '../../model/slices/booksPageSlice';
import { BooksPageFilters } from '../BooksPageFilters/BooksPageFilters';
import { BooksInfiniteList } from '../BooksInfiniteList/BooksInfiniteList';
import { Page } from '@/widgets/Page/ui/Page';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchNextBooksList } from '../../model/services/fetchNextBooksList/fetchNextBooksList';

interface BooksPageProps {
  className?: string,
}

const reducers: ReducersList = {
  booksPage: booksPageReducer,
};

const BooksPage = (props: BooksPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextBooksList());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.BooksPage, {}, [className])}>
        <BooksPageFilters />
        <BooksInfiniteList className={cls.list} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(BooksPage);
