import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.EURO, content: Currency.EURO },
  { value: Currency.KZT, content: Currency.KZT },
  { value: Currency.RUB, content: Currency.RUB },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;

  const { t } = useTranslation();

  const onChangeHandler = useCallback((val: string) => {
    onChange?.(val as Currency);
  }, [onChange]);

  return (
    <ListBox
      value={value}
      items={options}
      onChange={onChangeHandler}
      defaultValue={t('Pick currency')}
      label={t('Pick currency')}
      className={classNames('', {}, [className])}
      readonly={readonly}
      direction="top"
    />
  );
});
