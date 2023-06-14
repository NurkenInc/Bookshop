import { Story, DecoratorFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import 'app/styles/index.scss';

export const RouterDecorator: DecoratorFn = (StoryComponent: Story) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
);
