import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { CounterComponent } from '../CounterComponent/CounterComponent';
import { counterPageReducer } from '../../model/slices/counterSlice';

interface CounterPageProps {
  className?: string,
}

const reducers: ReducersList = {
  counter: counterPageReducer,
};

export const CounterPage = memo((props: CounterPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames('', {}, [className])}>
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <CounterComponent />
      </DynamicModuleLoader>
    </div>
  );
});
