import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { useAuth0 } from '@auth0/auth0-react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { SidebarSwitcher } from '@/widgets/Sidebar/ui/SidebarSwitcher/SidebarSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher/ui/ThemeSwitcher';
import { LoginButton } from '@/widgets/LoginButton';
import { AvatarDropdown } from '@/features/avatarDropdown';

interface NavbarProps {
  className?: string,
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { isAuthenticated } = useAuth0();

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <SidebarSwitcher />
      <div className={classNames(cls.title)}>
        <Text
          title={t('BookStore')}
          theme={TextTheme.INVERTED}
        />
      </div>
      <HStack max justify="end">
        <ThemeSwitcher />
        {isAuthenticated ? (
          <AvatarDropdown />
        ) : (
          <LoginButton />
        )}
      </HStack>
    </header>
  );
});
