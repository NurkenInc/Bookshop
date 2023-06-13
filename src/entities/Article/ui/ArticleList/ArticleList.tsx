import { WindowScroller, List, ListRowProps } from 'react-virtualized';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { PAGE_ID } from 'widgets/Page/Page';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string,
  articles: Article[],
  isLoading?: boolean,
  view?: ArticleView,
  target?: HTMLAttributeAnchorTarget,
  virtualization?: boolean,
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.BAR ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
  ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.BAR,
    target,
    virtualization = true,
  } = props;
  const { t } = useTranslation();

  const isDetailed = view === ArticleView.DETAILED;
  const itemsPerRow = isDetailed ? 1 : 3;

  const rowCount = isDetailed ? articles.length : Math.ceil(articles.length / itemsPerRow);

  const rowRenderer = ({ index, key, style }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          article={articles[i]}
          view={view}
          className={cls.card}
          target={target}
          key={articles[i].id}
        />,
      );
    }

    return (
      <div
        key={key}
        style={style}
        className={cls.row}
      >
        {items}
      </div>
    );
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Article are not found')} />
      </div>
    );
  }

  return (
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        height, width, registerChild, onChildScroll, isScrolling, scrollTop,
      }) => (
        <div
          ref={registerChild}
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
          {virtualization
            ? (
              <List
                height={height ?? 700}
                rowCount={rowCount}
                rowHeight={isDetailed ? 700 : 330}
                rowRenderer={rowRenderer}
                width={width ? width - 80 : 700}
                autoHeight
                onScroll={onChildScroll}
                scrollTop={scrollTop}
              />
            )
            : (
              articles.map((item) => (
                <ArticleListItem
                  article={item}
                  view={view}
                  key={item.id}
                  target={target}
                  className={cls.card}
                />
              ))
            )}

          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  );
});
