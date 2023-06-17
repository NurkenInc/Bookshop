import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginButton.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';

interface LoginButtonProps {
  className?: string,
}

export const LoginButton = memo((props: LoginButtonProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { loginWithRedirect } = useAuth0();

  const onLogin = () => {
    loginWithRedirect();
  };

  return (
    <Button
      theme={ButtonTheme.BACKGROUND_INVERTED}
      size={ButtonSize.XL}
      className={classNames(cls.login, {}, [className])}
      onClick={onLogin}
    >
      <Text title={t('Login')} size={TextSize.SM} theme={TextTheme.BACKGROUND} />
    </Button>
  );
});
