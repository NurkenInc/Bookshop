import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.incremented());
  };

  const decrement = () => {
    dispatch(counterActions.decremented());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button
        onClick={increment}
        data-testid="increment-btn"
      >
        {t('increment')}
      </Button>
      <Button
        onClick={decrement}
        data-testid="decrement-btn"
      >
        {t('decrement')}
      </Button>
    </div>
  );
};
