import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ErrorPage.module.scss';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface ErrorPageProps {
  className?: string,
}

export const ErrorPage = memo((props: ErrorPageProps) => {
  const { className } = props;
  const { t } = useTranslation('error');

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      <Text
        title={t('Something went wrong')}
        text={t('Please try reload page')}
        theme={TextTheme.INVERTED}
        align={TextAlign.CENTER}
      />
      <Button onClick={reloadPage} theme={ButtonTheme.BACKGROUND_INVERTED}>
        {t('Reload Page')}
      </Button>
    </div>
  );
});
