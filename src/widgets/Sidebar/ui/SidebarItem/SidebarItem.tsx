import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/types';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

interface SidebarItemProps {
  className?: string,
  item: SidebarItemType,
  collapsed?: boolean,
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const {
    className,
    item,
    collapsed,
  } = props;

  const { t } = useTranslation();

  return (
    <AppLink
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed }, [className])}
    >
      <Text text={t(item.text)} className={cls.link} theme={TextTheme.INVERTED} />
    </AppLink>
  );
});
