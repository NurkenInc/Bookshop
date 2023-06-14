import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
  className?: string,
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props;
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <VStack
        max
        gap="16"
        className={classNames(cls.NotificationList, {}, [className])}
      >
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VStack>
    );
  }

  return (
    <VStack
      max
      gap="16"
      className={classNames(cls.NotificationList, {}, [className])}
    >
      {data?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  );
});
