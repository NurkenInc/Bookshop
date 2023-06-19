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
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

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

  // if (view === BookView.DETAILED) {
  //   <div>

  //   </div>
  // }
  
  return (
    <Card className={classNames(cls.BooksListItem, {}, [className])}>
      <HStack className={cls.content}>
        <Image
          src={book?.volumeInfo?.imageLinks?.thumbnail || Thumbnail}
          rounded
          maxH
        />
        <VStack max className={cls.info}>
          <Text
            align={TextAlign.CENTER}
            title={book?.volumeInfo.title}
            text={`${book?.volumeInfo.description.slice(0, 90)}...`}
            theme={TextTheme.INVERTED}
          />
          <Button theme={ButtonTheme.BACKGROUND_INVERTED}>
            <AppLink to={`/books/${book?.volumeInfo?.industryIdentifiers[0]?.identifier}`}>
              <Text text={t('More Info')} theme={TextTheme.BACKGROUND} />
            </AppLink>
          </Button>
        </VStack>
      </HStack>
    </Card>
  );
});
