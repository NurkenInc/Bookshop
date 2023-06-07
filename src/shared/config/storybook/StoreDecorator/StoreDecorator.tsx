import { DeepPartial } from '@reduxjs/toolkit';
import { DecoratorFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (initialState: DeepPartial<StateSchema>): DecoratorFn => (StoryComponent) => (
  <StoreProvider initialState={initialState}>
    <StoryComponent />
  </StoreProvider>
);
