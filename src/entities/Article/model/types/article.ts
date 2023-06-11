import { User } from 'entities/User';

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
}

export enum ArticleBlogType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

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

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

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

export enum ArticleView {
  BAR = 'BAR',
  DETAILED = 'DETAILED',
}
