import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { SidebarSwitcher } from '@/widgets/Sidebar/ui/SidebarSwitcher/SidebarSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher/ui/ThemeSwitcher';
import { LoginButton } from '@/widgets/LoginButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { LangSwitcher } from '@/widgets/LangSwitcher/ui/LangSwitcher';
import { SearchBooksHints } from '@/features/searchBooksHints';

interface NavbarProps {
  className?: string,
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { isAuthenticated } = useAuth0();

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.sidebarSwitcher}>
        <SidebarSwitcher />
      </div>
      <HStack max gap="16" justify="between">
        <HStack className={cls.search}>
          <SearchBooksHints />
        </HStack>
        <HStack justify="end">
          <HStack gap="8">
            <ThemeSwitcher />
            <LangSwitcher />
          </HStack>
          {isAuthenticated ? (
            <AvatarDropdown />
          ) : (
            <LoginButton />
          )}
        </HStack>
      </HStack>
    </header>
  );
});
