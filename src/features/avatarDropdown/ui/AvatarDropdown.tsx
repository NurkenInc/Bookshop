import { memo } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { Text } from '@/shared/ui/Text/Text';

interface AvatarDropdownProps {
  className?: string,
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { user, isLoading, logout } = useAuth0();
  const { t } = useTranslation();

  if (isLoading) {
    return <Loader />;
  }

  const onLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const trigger = (
    <Button className={classNames(cls.ProfileButton, {}, [className])} theme={ButtonTheme.CLEAR}>
      <Avatar src={user?.picture} alt={user?.name} size={34} />
    </Button>
  );

  return (
    <Dropdown
      className={classNames(cls.AvatarDropdown, {}, [className])}
      trigger={trigger}
      direction="bottom left"
      size="L"
      items={[
        {
          content: <Text text={t('Logout')} className={cls.text} />,
          onClick: onLogout,
        },
      ]}
    />
  );
});
