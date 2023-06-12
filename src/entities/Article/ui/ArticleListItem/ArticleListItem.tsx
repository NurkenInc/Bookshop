import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './ArticleListItem.module.scss';
import {
  Article, ArticleBlogType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
  className?: string,
  article: Article,
  view: ArticleView,
  isLoading?: boolean,
  target?: HTMLAttributeAnchorTarget,
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    isLoading,
    view,
    target,
  } = props;
  const { t } = useTranslation('article');

  const types = <Text text={article?.createdAt} className={cls.date} />;
  const views = (
    <>
      <Text text={String(article?.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

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
            <AppLink target={target} to={RoutePath.article_details + article.id}>
              <Button theme={ButtonTheme.OUTLINE}>
                {t('Read more')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={RoutePath.article_details + article.id}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
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
    </AppLink>
  );
});
