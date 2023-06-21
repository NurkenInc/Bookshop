import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BooksListItem.module.scss';
import { Book } from '../../model/types/book';
import { BookView } from '../../model/consts/bookConsts';
import { Card } from '@/shared/ui/Card/Card';
import { Image } from '@/shared/ui/Image/Image';
import Thumbnail from '@/shared/assets/images/default-thumbnail.png';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import {
  Text, TextAlign, TextSize, TextTheme,
} from '@/shared/ui/Text/Text';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import LanguageIcon from '@/shared/assets/icons/language.svg';
import { Icon } from '@/shared/ui/Icon/Icon';

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
            <Icon Svg={LanguageIcon} height={30} width={30} inverted />
            <Text title={book?.volumeInfo.language?.toUpperCase()} theme={TextTheme.INVERTED} />
          </HStack>
          <HStack gap="4">
            <Icon Svg={LanguageIcon} height={30} width={30} inverted />
            <Text title={book?.volumeInfo.publishedDate?.toUpperCase()} theme={TextTheme.INVERTED} />
          </HStack>
        </HStack>
        <HStack max align="center" gap="4" className={cls.headerInfo} />
        <HStack max className={cls.content}>
          <Image
            src={book?.volumeInfo?.imageLinks?.thumbnail || Thumbnail}
            className={cls.thumbnail}
            rounded
            maxH
          />
          <VStack max className={cls.info}>
            <Text
              align={TextAlign.CENTER}
              title={book?.volumeInfo.title}
              text={`${book?.volumeInfo.description?.slice(0, 150) || 'No description'}...`}
              theme={TextTheme.INVERTED}
              size={TextSize.M}
            />
            <Button theme={ButtonTheme.BACKGROUND_INVERTED}>
              {book?.volumeInfo?.industryIdentifiers && (
                <AppLink to={`/books/${book?.volumeInfo?.industryIdentifiers[0]?.identifier}`}>
                  <Text text={t('More Info')} theme={TextTheme.BACKGROUND} />
                </AppLink>
              )}
            </Button>
          </VStack>
        </HStack>
      </Card>
    );
  }

  return (
    <Card className={classNames(cls.BooksListItem, {}, [className])}>
      <HStack className={cls.content}>
        <Image
          src={book?.volumeInfo?.imageLinks?.thumbnail || Thumbnail}
          className={cls.thumbnail}
          rounded
          maxH
        />
        <VStack max className={cls.info}>
          <Text
            align={TextAlign.CENTER}
            title={book?.volumeInfo.title}
            text={`${book?.volumeInfo.description?.slice(0, 90) || 'No description'}...`}
            theme={TextTheme.INVERTED}
            size={TextSize.M}
          />
          <Button theme={ButtonTheme.BACKGROUND_INVERTED}>
            {book?.volumeInfo?.industryIdentifiers && (
              <AppLink to={`/books/${book?.volumeInfo?.industryIdentifiers[0]?.identifier}`} target={target}>
                <Text text={t('More Info')} theme={TextTheme.BACKGROUND} />
              </AppLink>
            )}
          </Button>
        </VStack>
      </HStack>
    </Card>
  );
});
