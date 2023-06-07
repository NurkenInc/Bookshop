import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string,
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [username, password, dispatch]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Login')} />
      {error && (
        <Text
          text={error}
          theme={TextTheme.ERROR}
        />
      )}
      <Input
        autoFocus
        type="text"
        className={cls.input}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={cls.input}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        onClick={onLoginClick}
        className={cls.loginBtn}
        disabled={isLoading}
      >
        {t('Login')}
      </Button>
    </div>
  );
});
