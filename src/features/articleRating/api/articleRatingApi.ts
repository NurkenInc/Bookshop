import { argv } from 'process';
import { Article } from '@/entities/Article';
import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleRatingArg {
  articleId: string,
  userId: string,
}

interface RateArticleArg {
  articleId: string,
  userId: string,
  feedback?: string,
  rate: number,
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetArticleRatingArg>({
      query: ({ articleId, userId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleArg>({
      query: (arg) => ({
        url: '/article-ratings',
        method: 'POST',
        body: arg,
      }),
    }),
  }),
});

export const useArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
