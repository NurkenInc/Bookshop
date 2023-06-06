import { DecoratorFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme):DecoratorFn => (StoryComponent) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);
