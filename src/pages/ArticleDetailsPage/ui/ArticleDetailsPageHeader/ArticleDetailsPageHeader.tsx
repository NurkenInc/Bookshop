import { useNavigate } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { HStack } from 'shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
  className?: string,
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}edit`);
  }, [navigate, article?.id]);

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onBackToList}
      >
        {t('Back to articles list')}
      </Button>
      {canEdit && (
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onEditArticle}
        >
          {t('Edit')}
        </Button>
      )}
    </HStack>
  );
});
