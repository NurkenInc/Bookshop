import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BookViewSelector.module.scss';
import { BookView } from '../../model/consts/bookConsts';
import GridIcon from '@/shared/assets/icons/grid.svg';
import ListIcon from '@/shared/assets/icons/list.svg';
import { HStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Button } from '@/shared/ui/Button/Button';

interface BookViewSelectorProps {
  className?: string,
  view?: BookView,
  onViewChange?: (value: BookView) => void,
}

const viewTypeItems = [
  {
    icon: GridIcon,
    value: BookView.BAR,
  },
  {
    icon: ListIcon,
    value: BookView.DETAILED,
  },
];

export const BookViewSelector = memo((props: BookViewSelectorProps) => {
  const {
    className,
    view,
    onViewChange,
  } = props;

  const viewChangeHandler = (value: BookView) => () => {
    onViewChange?.(value);
  };

  return (
    <HStack className={classNames(cls.BookViewSelector, {}, [className])}>
      {viewTypeItems.map((item) => (
        <Button key={item.value} onClick={viewChangeHandler(item.value)}>
          <Icon
            className={classNames(cls.icon, { [cls.active]: item.value === view }, [])}
            Svg={item.icon}
            height={30}
            width={30}
            inverted
          />
        </Button>
      ))}
    </HStack>
  );
});
