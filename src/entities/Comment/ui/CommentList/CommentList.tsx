import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { isKeyObject } from 'util/types';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string,
  comments?: Comment[],
  isLoading?: boolean,
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    <div className={classNames(cls.CommentList, {}, [className])}>
      <CommentCard isLoading />
      <CommentCard isLoading />
      <CommentCard isLoading />
    </div>;
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? comments.map((comment) => (
        <CommentCard
          key={comment.id}
          isLoading={isLoading}
          className={cls.comment}
          comment={comment}
        />
      )) : (
        <Text
          title={t('No comments')}
        />
      )}
    </div>
  );
});
