import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.GERMANY, content: Country.GERMANY },
  { value: Country.USA, content: Country.USA },
  { value: Country.ITALY, content: Country.ITALY },
  { value: Country.FRANCE, content: Country.FRANCE },
  { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
  { value: Country.KYRGYZSTAN, content: Country.KYRGYZSTAN },
  { value: Country.CHINA, content: Country.CHINA },
  { value: Country.FINLAND, content: Country.FINLAND },
  { value: Country.POLAND, content: Country.POLAND },
  { value: Country.UKRAINE, content: Country.UKRAINE },
  { value: Country.TURKEY, content: Country.TURKEY },
  { value: Country.RUSSIA, content: Country.RUSSIA },
  { value: Country.UZBEKISTAN, content: Country.UZBEKISTAN },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;

  const { t } = useTranslation();

  const onChangeHandler = useCallback((val: string) => {
    onChange?.(val as Country);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Pick country')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
