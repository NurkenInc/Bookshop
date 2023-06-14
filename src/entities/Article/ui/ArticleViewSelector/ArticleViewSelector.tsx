import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import TilesIcon from 'shared/assets/icons/bar.svg';
import ListIcon from 'shared/assets/icons/detailed.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ButtonTheme, Button } from 'shared/ui/Button/Button';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/consts/articleConsts';

interface ArticleViewSelectorProps {
  className?: string,
  view: ArticleView,
  onViewClick?: (view: ArticleView) => void,
}

const viewTypes = [
  {
    view: ArticleView.BAR,
    icon: TilesIcon,
  },
  {
    view: ArticleView.DETAILED,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;
  const { t } = useTranslation();

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
          key={viewType.view}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', { [cls.selected]: viewType.view === view }, [])}
          />
        </Button>
      ))}
    </div>
  );
});
