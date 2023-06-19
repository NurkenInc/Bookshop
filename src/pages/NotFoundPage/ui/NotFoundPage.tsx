import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

interface NotFoundPageProps {
  className?: string,
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
  const { className } = props;
  const { t } = useTranslation('notFound');

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      <Text
        title={t('Page Not Found')}
        text={t('Page isn\'t availaible')}
        theme={TextTheme.INVERTED}
        align={TextAlign.CENTER}
      />
      <Button
        theme={ButtonTheme.BACKGROUND_INVERTED}
      >
        <AppLink to="/">
          <Text text={t('Return to home')} theme={TextTheme.BACKGROUND} />
        </AppLink>
      </Button>
    </div>
  );
});
