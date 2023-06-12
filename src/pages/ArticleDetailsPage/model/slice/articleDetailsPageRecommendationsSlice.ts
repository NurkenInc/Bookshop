import {
  createEntityAdapter, createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdpater = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdpater.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdpater.getInitialState(),
);

const articleDetailsPageRecommentdationsSlice = createSlice({
  name: 'articleDetailsPageRecommentdationsSlice',
  initialState: recommendationsAdpater.getInitialState<ArticleDetailsRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticleRecommendations.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          recommendationsAdpater.setAll(state, action.payload);
        },
      )
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsPageRecommentdationsSlice;

export const { actions: articleDetailsRecommendationsActions } = articleDetailsPageRecommentdationsSlice;
