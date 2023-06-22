import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BookDetailsPage.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import ArrowLeft from '@/shared/assets/icons/arrow-left.svg';
import { AppLink, AppLinkSize } from '@/shared/ui/AppLink/AppLink';
import { useBookDetails } from '../../api/bookDetailsApi';
import { BookDetails } from '@/entities/Book/ui/BookDetails/BookDetails';

interface BookDetailsPageProps {
  className?: string,
}

const BookDetailsPage = memo((props: BookDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams();
  const { data: book, error, isLoading } = useBookDetails(id || '');

  return (
    <div className={classNames(cls.BookDetailsPage, {}, [className])}>
      <Button className={cls.returnBtn} theme={ButtonTheme.BACKGROUND_INVERTED} square>
        <AppLink to="/" size={AppLinkSize.S}>
          <Icon Svg={ArrowLeft} width={20} height={20} />
        </AppLink>
      </Button>
      <BookDetails
        book={book}
        isLoading={isLoading}
      />
    </div>
  );
});

export default BookDetailsPage;
