import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  test('with one param', () => {
    const params = getQueryParams({
      test: 'value',
    });

    expect(params).toBe('?test=value');
  });

  test('with multiple params', () => {
    const params = getQueryParams({
      test: 'value',
      test2: 'value1',
    });

    expect(params).toBe('?test=value&test2=value1');
  });

  test('with undefined', () => {
    const params = getQueryParams({
      test: 'value',
      test2: 'value1',
      third: undefined,
    });

    expect(params).toBe('?test=value&test2=value1');
  });
});
