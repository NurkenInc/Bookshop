const apiKey = process.env.VITE_GOOGLE_BOOKS_API_KEY;

export interface GenerateApiUrlProps {
  search: string,
  params: OptionalRecord<string, string | number>,
}

export function generateApiUrl({ search, params }: GenerateApiUrlProps) {
  let result: string;
  if (search === '') {
    result = '/volumes?q=';
  } else {
    result = `/volumes?q=${search}&`;
  }
  Object.entries(params).forEach(([name, value]) => {
    if (value !== '') {
      result += `${name}=${value}&`;
    }
  });
  result += apiKey;
  return result;
}
