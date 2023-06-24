import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './BookDetails.module.scss';
import { Book } from '../../model/types/book';
import { Flex, HStack, VStack } from '@/shared/ui/Stack';
import { Image } from '@/shared/ui/Image/Image';
import {
  Text, TextAlign, TextSize, TextTheme,
} from '@/shared/ui/Text/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { AppLink, AppLinkSize } from '@/shared/ui/AppLink/AppLink';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Dropdown } from '@/shared/ui/Popups';
import ArrowLeft from '@/shared/assets/icons/arrow-left.svg';
import More from '@/shared/assets/icons/two-dots.svg';

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

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(window.location.href.toString());
  }, []);

  if (isLoading) {
    return (
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

  const authors = book.volumeInfo?.authors?.map((author) => (
    <Text key={author} text={author} theme={TextTheme.INVERTED} className={cls.author} />
  ));

  const moreTrigger = (
    <Button className={cls.moreBtn} theme={ButtonTheme.CLEAR} square>
      <Icon Svg={More} width={20} height={20} inverted />
    </Button>
  );

  const bookThumbnail = `https://books.google.com/books/content?id=${book?.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`;

  return (
    <VStack className={cls.BookDetails}>
      <VStack justify="start" maxW className={cls.bookDetailHeader}>
        <HStack justify="between" align="center" maxW className={cls.header}>
          <Button className={cls.returnBtn} theme={ButtonTheme.CLEAR} square>
            <AppLink to="/" size={AppLinkSize.S}>
              <Icon Svg={ArrowLeft} width={20} height={20} inverted />
            </AppLink>
          </Button>
          <Text theme={TextTheme.INVERTED} text={t('Detail Book')} />
          <Dropdown
            trigger={moreTrigger}
            direction="bottom left"
            size="L"
            items={[
              {
                content: <Text text={t('Copy Link')} className={cls.text} theme={TextTheme.INVERTED} />,
                onClick: onCopy,
              },
            ]}
          />
        </HStack>
        <VStack className={cls.bookInfo}>
          {book?.volumeInfo?.imageLinks?.thumbnail ? (
            <Image
              src={bookThumbnail}
              alt={book?.volumeInfo.title}
              className={cls.thumbnail}
            />
          ) : (
            <Skeleton height={220} border="5px" width={208} className={cls.thumbnail} />
          )}
          <Text
            title={book?.volumeInfo.title}
            className={cls.bookTitle}
            theme={TextTheme.INVERTED}
            size={TextSize.M}
          />
          {authors}
        </VStack>
        <HStack justify="between" gap="16" align="start" maxW className={cls.statistics}>
          <VStack className={cls.infoBlock}>
            <Text align={TextAlign.CENTER} title={book?.volumeInfo?.averageRating || t('N/A')} theme={TextTheme.BACKGROUND} />
            <Text align={TextAlign.CENTER} text={t('Rating')} size={TextSize.S} theme={TextTheme.BACKGROUND} />
          </VStack>
          <div className={cls.border} />
          <VStack className={cls.infoBlock}>
            <Text align={TextAlign.CENTER} title={book?.volumeInfo?.pageCount || t('N/A')} theme={TextTheme.BACKGROUND} />
            <Text align={TextAlign.CENTER} text={t('Number of Pages')} size={TextSize.S} theme={TextTheme.BACKGROUND} />
          </VStack>
          <div className={cls.border} />
          <VStack className={cls.infoBlock}>
            <Text align={TextAlign.CENTER} title={t(book?.volumeInfo?.language || 'N/A')} theme={TextTheme.BACKGROUND} />
            <Text align={TextAlign.CENTER} text={t('Language')} size={TextSize.S} theme={TextTheme.BACKGROUND} />
          </VStack>
        </HStack>
      </VStack>
      <VStack align="start" justify="start" className={cls.footer}>
        <VStack align="end" className={cls.description}>
          <Text title={t('Description')} theme={TextTheme.BACKGROUND} className={cls.descriptionContent} />
          <Text
            className={cls.descriptionContent}
            text={book?.volumeInfo?.description || t('N/A')}
            theme={TextTheme.BACKGROUND}
            size={TextSize.SM}
          />
        </VStack>
        <Button max theme={ButtonTheme.BACKGROUND} square>
          <AppLink max to={book?.accessInfo?.webReaderLink || '/'} target="_blank" size={AppLinkSize.S}>
            <Text align={TextAlign.CENTER} text={t('Start Reading')} theme={TextTheme.INVERTED} />
          </AppLink>
        </Button>
      </VStack>
    </VStack>
  );
});
