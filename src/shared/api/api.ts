import axios from 'axios';

const googleBooksBaseUrl = import.meta.env.VITE_GOOGLE_BOOKS_API_BASE_URL;

export const $api = axios.create({
  baseURL: googleBooksBaseUrl,
});
