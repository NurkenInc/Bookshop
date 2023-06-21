import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BookDetails.module.scss';
import { Book } from '../../model/types/book';
import { Flex, HStack, VStack } from '@/shared/ui/Stack';
import { Image } from '@/shared/ui/Image/Image';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Card } from '@/shared/ui/Card/Card';
import Thumbnail from '@/shared/assets/images/default-thumbnail.png';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface BookDetailsProps {
  className?: string,
  isLoading?: boolean,
  book?: Book | null,
}

export const BookDetails = memo((props: BookDetailsProps) => {
  const {
    className,
    isLoading,
    book,
  } = props;
  const { t } = useTranslation('bookDetails');

  if (isLoading) {
    return (
      // todo: make skeleton
      <Flex justify="center" align="center" maxW maxH>
        <PageLoader />
      </Flex>
    );
  }

  if (!book) {
    return (
      <Flex justify="center" align="center" maxW maxH>
        <Text title={t('Book info is not available')} />
      </Flex>
    );
  }

  const authors = book.volumeInfo.authors.map((author) => (
    <Text key={author} title={author} theme={TextTheme.INVERTED} />
  ));

  const categories = book.volumeInfo.categories.map((category) => (
    <Text key={category} title={category} theme={TextTheme.INVERTED} />
  ));

  const saleability = book.saleInfo.saleability === 'NOT_FOR_SALE' ? 'Not for sale' : 'For sale';
  const maturity = book.volumeInfo.maturityRating === 'NOT_MATURE' ? 'Not mature' : 'Mature';

  return (
    <HStack maxH maxW className={classNames(cls.BookDetails, {}, [className])}>
      <VStack maxH gap="8">
        <Image
          src={book?.volumeInfo.imageLinks.thumbnail || Thumbnail}
          alt={book?.volumeInfo.title}
          border="15px"
          height="300px"
        />
        <Button max theme={ButtonTheme.BACKGROUND_INVERTED}>
          <AppLink to={book?.accessInfo.webReaderLink || '/'} target="_blank">
            <Text title={t('Read')} theme={TextTheme.BACKGROUND} />
          </AppLink>
        </Button>
        <Button max theme={ButtonTheme.BACKGROUND_INVERTED}>
          <AppLink to={book?.saleInfo?.buyLink || '/'} target="_blank">
            <Text title={t('Buy')} theme={TextTheme.BACKGROUND} />
          </AppLink>
        </Button>
        <HStack max gap="4" align="start">
          <Text title={`${t('Page count')}:`} theme={TextTheme.INVERTED} />
          <Text title={book.volumeInfo.pageCount} theme={TextTheme.INVERTED} />
        </HStack>
        <HStack max gap="4" align="start">
          <Text title={`${t('Category')}:`} theme={TextTheme.INVERTED} />
          <Text title={t(maturity)} theme={TextTheme.INVERTED} className={cls.info} />
        </HStack>
        {book.volumeInfo.ratingsCount && (
          <HStack max gap="4" align="start">
            <Text title={`${t('Ratings count')}:`} theme={TextTheme.INVERTED} />
            <Text title={book.volumeInfo.ratingsCount} theme={TextTheme.INVERTED} />
          </HStack>
        )}
        {book.volumeInfo.averageRating && (
          <HStack max gap="4" align="start">
            <Text title={`${t('Average rating')}:`} theme={TextTheme.INVERTED} />
            <Text title={`${book.volumeInfo.averageRating} / 5`} theme={TextTheme.INVERTED} className={cls.info} />
          </HStack>
        )}
      </VStack>
      <VStack maxH maxW gap="8" justify="start" align="start" className={cls.bookInfo}>
        <HStack max gap="16">
          <Text title={`${t('Book title')}:`} theme={TextTheme.INVERTED} />
          <Text title={book.volumeInfo.title} theme={TextTheme.INVERTED} />
        </HStack>
        <HStack max gap="16" align="start">
          <Text title={`${t('Book authors')}:`} theme={TextTheme.INVERTED} />
          <VStack>
            {authors}
          </VStack>
        </HStack>
        <HStack max gap="16">
          <Text title={`${t('Categories')}:`} theme={TextTheme.INVERTED} />
          <VStack>
            {categories}
          </VStack>
        </HStack>
        <HStack max gap="16">
          <Text title={`${t('Language')}:`} theme={TextTheme.INVERTED} />
          <Text title={t(book.volumeInfo.language?.toUpperCase() || 'EN')} theme={TextTheme.INVERTED} />
        </HStack>
        <HStack max gap="16">
          <Text title={`${t('Saleability')}:`} theme={TextTheme.INVERTED} />
          <Text title={t(saleability)} theme={TextTheme.INVERTED} />
        </HStack>
        {saleability === 'For sale' && (
          <HStack max gap="16">
            <Text title={`${t('Price')}:`} theme={TextTheme.INVERTED} />
            <Text title={`${book.saleInfo.listPrice.amount}${book.saleInfo.listPrice.currencyCode}`} theme={TextTheme.INVERTED} />
          </HStack>
        )}
        <HStack max gap="16" align="start">
          <Text title={`${t('Short description')}:`} theme={TextTheme.INVERTED} />
          <Text text={book.volumeInfo.description} theme={TextTheme.INVERTED} />
        </HStack>
      </VStack>
    </HStack>
  );
});
