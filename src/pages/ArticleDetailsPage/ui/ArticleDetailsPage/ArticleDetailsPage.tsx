import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/AddCommentForm';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  getArticleRecommendations,
} from '../../model/slice/articleDetailsPageRecommendationsSlice';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
  className?: string,
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const commentIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  const dispatch = useAppDispatch();

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Article not found')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <Text
            className={cls.commentTitle}
            title={t('Recommended')}
            size={TextSize.L}
          />
          <ArticleList
            articles={recommendations}
            isLoading={recommendationsIsLoading}
            className={cls.recommendations}
            target="_blank"
          />
          <Text
            className={cls.commentTitle}
            title={t('comments')}
            size={TextSize.L}
          />
          <AddCommentForm onSendComment={onSendComment} />
          <CommentList
            isLoading={isLoading}
            comments={comments}
          />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
