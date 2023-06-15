import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('classNames', () => {
  test('Test value title text', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('Test increment', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    const btn = screen.getByTestId('increment-btn');
    fireEvent.click(btn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('Test increment', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    const btn = screen.getByTestId('decrement-btn');
    fireEvent.click(btn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
