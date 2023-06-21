import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BooksPage.module.scss';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page/ui/Page';
import { booksPageReducer } from '../../model/slices/booksPageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { BooksInfiniteList } from '../BooksInfiniteList/BooksInfiniteList';
import { fetchNextBooksList } from '../../model/services/fetchNextBooksList/fetchNextBooksList';
import { BooksPageFilters } from '../BooksPageFilters/BooksPageFilters';

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
// to-do
// add slider to main page with random books
// infinite scroll for category all that will be below of all categories
// categories like top 100, top sci-fi, top-drama, top-action like in website that i sended to telegram
// overflow-x scroll for each category
// and title of each category on it
// pagination for each category like firstly just < > and then like 1,2,3,4
// filters above all categories will make disappear all that was in page and show only books with that category or query with infinite scroll
// view change
// recommendation on page of each book with that category
// rating on each book page
// comments section on each book page with rate if user rated book and date of comment like 1 minutes ago
// subcomments like in youtube
// modal when filtering by date with date pickers
// rate user profile, leave comment on user profile
// on click on user avatar from comments section show user info in popup
// notifications about new comments that user left or if user react to your comment
// thumbs up and down on user comment, comment with most thumbs on top
// filters on comments date, popular
// drawer when leaving comment, react drag
// favorites cart
// comments infinite scroll virtualization
// views of each book
// rating of book
// profile page with all comments ratings thumb ups how many comments leaved how comments with thumb ups status online, offline, recent activity
// settings of profile page
// recent comments
// active users
// communities
// make posts about book
// posts
// tests, storybook, jest, unit tests
