import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { counterPageActions, counterPageReducer } from '../../model/slices/counterSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface CounterComponentProps {
  className?: string,
}

export const CounterComponent = memo((props: CounterComponentProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const value = useSelector((state: StateSchema) => state.counter?.value);
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(counterPageActions.increment());
  };

  return (
    <div className={classNames('', {}, [className])}>
      {t('Value')}
      {' '}
      {value}
      <button type="button" onClick={increment}>
        {t('Increment')}
      </button>
    </div>
  );
});
