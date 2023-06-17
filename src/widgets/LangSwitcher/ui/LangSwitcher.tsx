import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';

interface LangSwitcherProps {
  className?: string,
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const onToggle = () => {
    const newLanguage = i18next.language === 'en' ? 'ru' : 'en';
    i18next.changeLanguage(newLanguage);
  };

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ButtonTheme.BACKGROUND_INVERTED}
      onClick={onToggle}
    >
      <Text title={t('Language')} size={TextSize.SM} theme={TextTheme.BACKGROUND} />
    </Button>
  );
});
