import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BooksListItemSkeleton.module.scss';
import { BookView } from '../../model/consts/bookConsts';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';

interface BooksListItemSkeletonProps {
  className?: string,
  view: BookView,
}

export const BooksListItemSkeleton = memo((props: BooksListItemSkeletonProps) => {
  const {
    className,
    view,
  } = props;

  if (view === BookView.DETAILED) {
    <Skeleton width="100%" height={300} />;
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <HStack className={cls.content}>
          <Skeleton width={80} height={180} />
          <VStack max className={cls.info}>
            <Skeleton width={200} height={30} />
            <Skeleton width={200} height={110} />
            <Skeleton width={200} height={40} />
          </VStack>
        </HStack>
      </Card>
    </div>
  );
});
