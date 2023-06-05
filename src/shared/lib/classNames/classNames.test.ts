import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional classes', () => {
    const expected = 'someClass red green';
    expect(classNames('someClass', {}, ['red', 'green'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass red green scrollable hovered';
    expect(classNames(
      'someClass',
      { scrollable: true, hovered: true },
      ['red', 'green'],
    )).toBe(expected);
  });

  test('with false mod', () => {
    const expected = 'someClass red green scrollable';
    expect(classNames(
      'someClass',
      { scrollable: true, hovered: false },
      ['red', 'green'],
    )).toBe(expected);
  });

  test('with undefined mod', () => {
    const expected = 'someClass red green hovered';
    expect(classNames(
      'someClass',
      { scrollable: undefined, hovered: true },
      ['red', 'green'],
    )).toBe(expected);
  });
});
