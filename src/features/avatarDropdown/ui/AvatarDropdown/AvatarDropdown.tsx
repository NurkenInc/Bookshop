import { classNames } from 'shared/lib/classNames/classNames';
import { Dropdown } from 'shared/ui/Popups';
import { memo, useCallback } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useDispatch, useSelector } from 'react-redux';
import {
  userActions, isUserAdmin, isUserManager, getUserAuthData,
} from 'entities/User';
import cls from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
  className?: string,
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames(cls.AvatarDropdown, {}, [className])}
      direction="bottom left"
      items={[
        ...(isAdminPanelAvailable ? [{
          content: t('Admin Panel'),
          href: RoutePath.admin_panel,
        }] : []),
        {
          content: t('Profile'),
          href: RoutePath.profile + authData.id,
        },
        {
          content: t('logout'),
          onClick: onLogout,
        },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  );
});
