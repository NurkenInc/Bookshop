import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { SidebarSwitcher } from '@/widgets/Sidebar/ui/SidebarSwitcher/SidebarSwitcher';

interface NavbarProps {
  className?: string,
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <SidebarSwitcher />
      <div className={classNames(cls.title)}>
        <Text
          title={t('BookStore')}
          theme={TextTheme.BACKGROUND}
        />
      </div>
      <HStack max justify="end">
        <Button theme={ButtonTheme.BACKGROUND} size={ButtonSize.XL} className={classNames(cls.login)}>
          <Text title={t('Login')} size={TextSize.SM} />
        </Button>
        <Button>
          <Text title={t('Register')} size={TextSize.SM} />
        </Button>
      </HStack>
    </div>
  );
});
