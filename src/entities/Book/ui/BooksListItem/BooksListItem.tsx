import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BooksListItem.module.scss';
import { Book } from '../../model/types/book';
import { BookView } from '../../model/consts/bookConsts';
import { Card } from '@/shared/ui/Card/Card';
import { Image } from '@/shared/ui/Image/Image';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import {
  Text, TextAlign, TextSize, TextTheme,
} from '@/shared/ui/Text/Text';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface BooksListItemProps {
  className?: string,
  book?: Book,
  view?: BookView,
  target?: HTMLAttributeAnchorTarget
}

export const BooksListItem = memo((props: BooksListItemProps) => {
  const {
    className,
    book,
    view,
    target,
  } = props;
  const { t } = useTranslation('book');

  if (view === BookView.DETAILED) {
    return (
      <Card className={classNames(cls.BooksListItem, {}, [className, cls.detailed])}>
        <HStack max align="center" justify="between" gap="4" className={cls.headerInfo}>
          <HStack gap="4">
            <Text text={`${t('Language')}:`} theme={TextTheme.INVERTED} />
            <Text text={t(book?.volumeInfo.language?.toUpperCase() || 'EN')} theme={TextTheme.INVERTED} />
          </HStack>
          <HStack gap="4">
            <Text text={`${t('Date')}:`} theme={TextTheme.INVERTED} />
            <Text text={book?.volumeInfo.publishedDate?.toUpperCase()} theme={TextTheme.INVERTED} />
          </HStack>
        </HStack>
        <HStack max align="center" gap="4" className={cls.headerInfo} />
        <HStack max className={cls.content}>
          {book?.volumeInfo?.imageLinks?.thumbnail ? (
            <Image
              src={book?.volumeInfo?.imageLinks?.thumbnail}
              className={cls.thumbnail}
              rounded
              maxH
            />
          ) : (
            <Skeleton height={220} border="5px" width={258} className={cls.thumbnail} />
          )}
          <VStack max className={cls.info}>
            <Text
              align={TextAlign.CENTER}
              title={book?.volumeInfo.title}
              text={`${book?.volumeInfo.description?.slice(0, 150) || 'No description'}...`}
              theme={TextTheme.INVERTED}
              size={TextSize.M}
            />
            {book?.volumeInfo?.industryIdentifiers && (
              <Button theme={ButtonTheme.BACKGROUND_INVERTED}>
                <AppLink to={`/books/${book?.volumeInfo?.industryIdentifiers[0]?.identifier}`}>
                  <Text text={t('More Info')} theme={TextTheme.BACKGROUND} />
                </AppLink>
              </Button>
            )}
          </VStack>
        </HStack>
      </Card>
    );
  }

  return (
    <Card className={classNames(cls.BooksListItem, {}, [className])}>
      <HStack className={cls.content}>
        {book?.volumeInfo?.imageLinks?.thumbnail ? (
          <Image
            src={book?.volumeInfo?.imageLinks?.thumbnail}
            className={cls.thumbnail}
            rounded
            maxH
          />
        ) : (
          <Skeleton height={220} border="5px" width={208} className={cls.thumbnail} />
        )}
        <VStack max className={cls.info}>
          <Text
            align={TextAlign.CENTER}
            title={book?.volumeInfo.title}
            text={`${book?.volumeInfo.description?.slice(0, 90) || 'No description'}...`}
            theme={TextTheme.INVERTED}
            size={TextSize.M}
          />
          {book?.volumeInfo?.industryIdentifiers && (
            <Button theme={ButtonTheme.BACKGROUND_INVERTED}>
              <AppLink to={`/books/${book?.volumeInfo?.industryIdentifiers[0]?.identifier}`} target={target}>
                <Text text={t('More Info')} theme={TextTheme.BACKGROUND} />
              </AppLink>
            </Button>
          )}
        </VStack>
      </HStack>
    </Card>
  );
});
