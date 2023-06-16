import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string,
}

const MainPage = memo((props: MainPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      MainPage
    </div>
  );
});

export default MainPage;
