export interface IndustryIdentifier {
  type: string,
  identifier: string,
}

export interface Price {
  amount: number,
  currencyCode: string,
}

export interface Thumbnail {
  smallThumbnail: string,
  thumbnail: string,
}

export interface Sale {
  country: string,
  saleability: string,
  listPrice: Price,
  buyLink?: string,
}

export interface Access {
  country: string,
  viewablitity: string
  webReaderLink: string,
}

export interface Volume {
  title: string,
  authors: string[],
  publisher: string,
  publishedDate: string,
  description: string,
  pageCount: number,
  categories: string[],
  imageLinks: Thumbnail,
  previewLink: string,
  infoLink: string,
  averageRating?: number,
  ratingsCount?: number,
  maturityRating?: string,
  language?: string,
  industryIdentifiers: IndustryIdentifier[],
}

export interface Book {
  id: string,
  selfLink: string,
  volumeInfo: Volume,
  saleInfo: Sale,
  accessInfo: Access,
}

export interface BooksItems {
  items: Book[],
  king: string,
  totalItems: number,
}
