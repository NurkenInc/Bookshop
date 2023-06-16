import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
  className?: string,
  articleId: string,
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useArticleRating({
    articleId,
    userId: userData?.id || '',
  });
  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        userId: userData?.id || '',
        articleId,
        rate: starsCount,
        feedback,
      });
    } catch (e) {
      console.log(e);
    }
  }, [articleId, rateArticleMutation, userData?.id]);

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount);
  }, [handleRateArticle]);

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback);
  }, [handleRateArticle]);

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onCancel={onCancel}
      onAccept={onAccept}
      rate={rating?.rate}
      title={t('Rate this article')}
      feedbackTitle={t('Please leave feedback about this article, this will help to improve quality of articles')}
      className={className}
      hasFeedback
    />
  );
});

export default ArticleRating;
