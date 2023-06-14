import { User } from 'entities/User';
import { ArticleBlogType, ArticleType } from '../consts/articleConsts';

export interface ArticleBlockBase {
  id: string,
  type: ArticleBlogType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlogType.CODE,
  code: string,
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlogType.IMAGE,
  src: string,
  title: string,
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlogType.TEXT,
  paragraphs: string[],
  title?: string,
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export interface Article {
  id: string,
  title: string,
  subtitle: string,
  img: string,
  user: User,
  views: number,
  createdAt: string,
  type: ArticleType[],
  blocks: ArticleBlock[],
}
