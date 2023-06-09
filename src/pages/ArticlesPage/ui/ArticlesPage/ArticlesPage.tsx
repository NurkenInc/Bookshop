import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string,
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      ARTICLES PAGE
    </div>
  );
};

export default memo(ArticlesPage);
