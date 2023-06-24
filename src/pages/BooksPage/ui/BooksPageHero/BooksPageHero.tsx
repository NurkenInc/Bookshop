import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BooksPageHero.module.scss';
import { Image } from '@/shared/ui/Image/Image';
import { HStack, VStack } from '@/shared/ui/Stack';
import HeroImage from '@/shared/assets/images/books-hero.jpg';
import {
  Text, TextAlign, TextSize, TextTheme,
} from '@/shared/ui/Text/Text';
import { Button } from '@/shared/ui/Button/Button';
import { getBooks, booksPageActions } from '../../model/slices/booksPageSlice';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { getBooksPageError } from '../../model/selectors/getBooksPageError/getBooksPageError';
import { getBooksPageIsLoading } from '../../model/selectors/getBooksPageIsLoading/getBooksPageIsLoading';
import { BooksListItem } from '@/entities/Book/ui/BooksListItem/BooksListItem';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchBooksList } from '../../model/services/fetchBooksList/fetchBooksList';
import { BooksSortField, Filter } from '@/entities/Book';

interface BooksPageHeroProps {
  className?: string,
}

export const BooksPageHero = memo((props: BooksPageHeroProps) => {
  const { className } = props;
  const { t } = useTranslation('book');
  const data = useSelector((state: StateSchema) => getBooks.selectAll(state));
  const error = useSelector(getBooksPageError);
  const isLoading = useSelector(getBooksPageIsLoading);
  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    dispatch(fetchBooksList({ replace: true }));
  }, [dispatch]);

  const onFilterChange = useCallback(() => {
    dispatch(booksPageActions.setFilter(Filter.FREE));
    dispatch(booksPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onSortChange = useCallback(() => {
    dispatch(booksPageActions.setSort(BooksSortField.NEWEST));
    dispatch(booksPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  return (
    <div className={classNames(cls.BooksPageHero, {}, [className])}>
      <HStack className={cls.heroWrapper}>
        <Image
          className={cls.heroThumbnail}
          src={HeroImage}
          width="100%"
        />
        <VStack maxH maxW gap="8" justify="center" align="start" className={cls.heroText}>
          <Text
            theme={TextTheme.BACKGROUND}
            align={TextAlign.LEFT}
            size={TextSize.L}
            className={cls.quote}
            title={t('A book is a gift you can')}
          />
          <Text
            theme={TextTheme.BACKGROUND}
            align={TextAlign.LEFT}
            size={TextSize.L}
            className={cls.quote}
            title={t('open again and again')}
          />
          <Text
            theme={TextTheme.BACKGROUND}
            align={TextAlign.LEFT}
            className={cls.author}
            text={`- ${t('Garrison Keillor')}`}
          />
          <HStack maxW gap="16">
            <Button onClick={onFilterChange} className={cls.heroBtn}>
              {t('Newest Books')}
            </Button>
            <Button onClick={onSortChange} className={cls.heroBtn}>
              {t('Free Books')}
            </Button>
          </HStack>
        </VStack>
      </HStack>
      <HStack maxH justify="center" align="center" className={cls.bookHero}>
        <BooksListItem book={data[0]} />
      </HStack>
    </div>
  );
});
