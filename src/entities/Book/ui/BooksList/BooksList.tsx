import { memo, HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BooksList.module.scss';
import { Book } from '../../model/types/book';
import { BookView } from '../../model/consts/bookConsts';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text/Text';
import { BooksListItem } from '../BooksListItem/BooksListItem';
import { BooksListItemSkeleton } from '../BooksListItemSkeleton/BooksListItemSkeleton';

interface BooksListProps {
  className?: string,
  books?: Book[],
  isLoading?: boolean,
  view?: BookView,
  target?: HTMLAttributeAnchorTarget,
}

const getSkeletons = (view: BookView) => new Array(view === BookView.BAR ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <div key={index} className={cls.card}>
      <BooksListItemSkeleton view={view} />
    </div>
  ));

export const BooksList = memo((props: BooksListProps) => {
  const {
    className,
    books,
    isLoading,
    view = BookView.BAR,
    target,
  } = props;
  const { t } = useTranslation('book');

  if (!isLoading && !books?.length) {
    return (
      <div className={classNames(cls.BooksList, {}, [className])}>
        <Text text={t('Books not found')} size={TextSize.XL} align={TextAlign.CENTER} />
      </div>
    );
  }
  console.log(books);
  return (
    <div className={classNames(cls.BooksList, {}, [className])}>
      {books?.map((book) => (
        <BooksListItem
          book={book}
          view={view}
          target={target}
          key={book.id}
          className={cls.card}
        />
      ))}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
