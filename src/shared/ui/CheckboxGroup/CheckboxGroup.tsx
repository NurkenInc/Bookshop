import { memo, useState, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Checkbox } from '../Checkbox/Checkbox';
import { VStack } from '../Stack';

interface CheckboxGroupItem {
  label: string,
  value: string,
}

interface CheckboxGroupProps {
  className?: string,
  items?: CheckboxGroupItem[]
  defaultValue?: string,
  onChange?: (value: string) => void,
}

export const CheckboxGroup = memo((props: CheckboxGroupProps) => {
  const {
    className,
    items,
    defaultValue,
    onChange,
  } = props;
  const [selected, setSelected] = useState(defaultValue);

  const handleValueChange = useCallback((value: string) => () => {
    setSelected(value);
    onChange?.(value);
  }, [onChange]);

  return (
    <VStack align="start" className={classNames('', {}, [className])}>
      {items?.map(({ label, value }) => (
        <Checkbox
          key={value}
          checked={selected === value}
          label={label}
          onChange={handleValueChange(value)}
        />
      ))}
    </VStack>
  );
});
