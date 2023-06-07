import { Suspense } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { DecoratorFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';

export const TranslationDecorator: DecoratorFn = (StoryComponent) => (
  <I18nextProvider i18n={i18n}>
    <Suspense fallback="">
      <StoryComponent />
    </Suspense>
  </I18nextProvider>
);
