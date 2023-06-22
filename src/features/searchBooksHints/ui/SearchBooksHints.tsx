import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SearchBooksHints.module.scss';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { getBooks, booksPageActions } from '@/pages/BooksPage/model/slices/booksPageSlice';
import { ListBoxInput } from '@/widgets/ListBoxInput';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchBooksList } from '@/pages/BooksPage/model/services/fetchBooksList/fetchBooksList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';

interface SearchBooksHintsProps {
  className?: string,
  onSearchChange?: (value: string) => void,
  search?: string,
}

export const SearchBooksHints = memo((props: SearchBooksHintsProps) => {
  const {
    className,
    onSearchChange,
    search,
  } = props;
  const { t } = useTranslation('book');
  const data = useSelector((state: StateSchema) => getBooks.selectAll(state));
  const dispatch = useAppDispatch();

  const searchItems = useMemo(() => {
    return data.map((book) => (
      book.volumeInfo.title
    ))
      .filter((value, index, array) => array.indexOf(value) === index)
      .slice(0, 5);
  }, [data]);

  return (
    <ListBoxInput
      width="100%"
      height={45}
      placeholder={t('Book name, text, author')}
      items={searchItems}
      onChange={onSearchChange}
      value={search}
    />
  );
});
