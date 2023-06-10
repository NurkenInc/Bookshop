import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleListItem.module.scss';
import {
  Article, ArticleBlogType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton';

interface ArticleListItemProps {
  className?: string,
  article?: Article,
  view: ArticleView,
  isLoading?: boolean,
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.BAR ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
  ));

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    isLoading,
    view,
  } = props;
  const { t } = useTranslation('article');
  const navigate = useNavigate();

  const types = <Text text={article?.createdAt} className={cls.date} />;
  const views = (
    <>
      <Text text={String(article?.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + (article?.id || ''));
  }, [navigate, article?.id]);

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  if (view === ArticleView.DETAILED) {
    const textBlock = article?.blocks.find((block) => block.type === ArticleBlogType.TEXT) as ArticleTextBlock;
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article?.user.avatar} />
            <Text text={article?.user.username} className={cls.user} />
            <Text text={article?.createdAt} className={cls.date} />
          </div>
          <Text title={article?.title} className={cls.title} />
          {types}
          <img src={article?.img} alt={article?.title} className={cls.img} />
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
          )}
          <div className={cls.footer}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>
              {t('Read more')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card} onClick={onOpenArticle}>
        <div className={cls.imageWrapper}>
          <img src={article?.img} alt={article?.title} className={cls.img} />
          <Text text={article?.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article?.title} className={cls.title} />
      </Card>
    </div>
  );
});
