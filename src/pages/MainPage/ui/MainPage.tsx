import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';

function MainPage() {
  const { t } = useTranslation('main');

  return (
    <div>
      <BugButton />
      {t('Main page')}
    </div>
  );
}

export default MainPage;
