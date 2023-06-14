import { Suspense } from 'react';
import { DecoratorFn, Story } from '@storybook/react';

export const SuspenseDecorator: DecoratorFn = (StoryComponent: Story) => (
  <Suspense>
    <StoryComponent />
  </Suspense>
);
