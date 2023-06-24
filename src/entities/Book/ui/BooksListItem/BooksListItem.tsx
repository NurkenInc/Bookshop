import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BooksListItem.module.scss';
import { Book } from '../../model/types/book';
import { BookView } from '../../model/consts/bookConsts';
import { Image } from '@/shared/ui/Image/Image';
import { HStack, VStack } from '@/shared/ui/Stack';
import {
  Text, TextAlign, TextSize, TextTheme,
} from '@/shared/ui/Text/Text';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import CheckBadge from '@/shared/assets/icons/check-badge.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import Star from '@/shared/assets/icons/star.svg';

interface BooksListItemProps {
  className?: string,
  book?: Book,
  imgMax?: boolean,
  view?: BookView,
  target?: HTMLAttributeAnchorTarget
}

export const BooksListItem = memo((props: BooksListItemProps) => {
  const {
    className,
    book,
    imgMax,
    view,
    target,
  } = props;
  const { t } = useTranslation('book');

  const bookId = book?.volumeInfo.industryIdentifiers ? `/books/${book?.volumeInfo.industryIdentifiers[0].identifier}` : '/';

  const bookThumbnail = `https://books.google.com/books/content?id=${book?.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`;

  return (
    <VStack maxW className={classNames(cls.BooksListItem, {}, [className])}>
      <VStack maxW className={cls.content}>
        <AppLink to={bookId}>
          <VStack className={cls.thumbnailWrapper}>
            {book?.volumeInfo?.imageLinks?.thumbnail ? (
              <Image
                src={bookThumbnail}
                className={classNames(cls.thumbnail, { [cls.imgMax]: imgMax }, [])}
                rounded
              />
            ) : (
              <Skeleton height={220} border="5px" width={208} className={cls.thumbnail} />
            )}
            {
              book?.volumeInfo.averageRating && (
                <HStack className={cls.rating} gap="8">
                  <Icon Svg={Star} width={12} height={12} className={cls.star} />
                  <Text text={book.volumeInfo.averageRating} theme={TextTheme.BACKGROUND} />
                </HStack>
              )
            }
            <HStack className={cls.saleInfo} gap="8">
              <Text text={t('Flash Sale')} theme={TextTheme.BACKGROUND} />
            </HStack>
          </VStack>
        </AppLink>
        <VStack maxW className={cls.info}>
          <HStack maxW justify="start">
            <Text
              align={TextAlign.LEFT}
              title={book?.volumeInfo.title}
              theme={TextTheme.INVERTED}
              size={TextSize.SM}
            />
          </HStack>
          <HStack maxW justify="start">
            {book?.volumeInfo.authors && (
              <>
                <Text
                  align={TextAlign.LEFT}
                  text={book?.volumeInfo.authors[0]}
                  theme={TextTheme.INVERTED}
                  size={TextSize.S}
                />
                <Icon Svg={CheckBadge} width={20} height={20} className={cls.badge} />
              </>
            )}
          </HStack>
          <HStack maxW justify="start">
            {book?.saleInfo.listPrice && (
              <Text
                align={TextAlign.LEFT}
                title={`${book?.saleInfo.listPrice.currencyCode} ${book.saleInfo.listPrice.amount}`}
                theme={TextTheme.INVERTED}
                size={TextSize.M}
              />
            )}
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
});
