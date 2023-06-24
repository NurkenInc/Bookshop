import {
  memo, useState, useCallback, useRef, MutableRefObject, useEffect, ReactNode,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ListBoxInput.module.scss';
import { Input, InputProps } from '@/shared/ui/Input/Input';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import { Button, ButtonAlign, ButtonTheme } from '@/shared/ui/Button/Button';

interface ListBoxInputProps extends InputProps {
  className?: string,
  items?: string[],
  onChange?: (value: string) => void,
  value?: string,
  icon?: ReactNode,
}

export const ListBoxInput = memo((props: ListBoxInputProps) => {
  const {
    className,
    items,
    onChange,
    value,
    icon,
    ...otherProps
  } = props;
  const hintsRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [isHintsOpen, setIsHintsOpen] = useState(false);

  const onFocus = useCallback(() => {
    setIsHintsOpen(true);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (hintsRef.current && !hintsRef.current.contains(event.target as Node)) {
      setIsHintsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleClick = useCallback((newSearch: string) => () => {
    onChange?.(newSearch);
    setIsHintsOpen(false);
  }, [onChange]);

  return (
    <div className={classNames(cls.ListBoxInput, {}, [className])}>
      <Input
        id="searchBar"
        onChange={onChange}
        onFocus={onFocus}
        value={value}
        icon={icon}
        autoComplete="off"
        {...otherProps}
      />
      {isHintsOpen && (
        <div ref={hintsRef}>
          <VStack maxW className={cls.hintsWrapper}>
            {items?.map((item) => (
              <Button
                onClick={handleClick(item)}
                theme={ButtonTheme.CLEAR}
                align={ButtonAlign.LEFT}
                className={cls.item}
                key={item}
                max
              >
                <Text title={item} className={cls.content} align={TextAlign.LEFT} />
              </Button>
            ))}
          </VStack>
        </div>
      )}
    </div>
  );
});
