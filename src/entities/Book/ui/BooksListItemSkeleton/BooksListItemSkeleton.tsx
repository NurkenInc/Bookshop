import { memo } from 'react';
import { BookView } from '../../model/consts/bookConsts';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
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

  return (
    <div>
      <HStack>
        <Skeleton width={80} height={180} />
        <VStack max>
          <Skeleton width={200} height={30} />
          <Skeleton width={200} height={110} />
          <Skeleton width={200} height={40} />
        </VStack>
      </HStack>
    </div>
  );
});
