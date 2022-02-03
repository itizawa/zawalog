import Author from './Author';

export class Post {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  constructor({
    slug,
    title,
    date,
    coverImage,
    author,
    excerpt,
    ogImage,
    content,
  }: {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
    author: Author;
    excerpt: string;
    ogImage: {
      url: string;
    };
    content: string;
  }) {
    this.slug = slug;
    this.title = title;
    this.date = date;
    this.coverImage = coverImage;
    this.author = author;
    this.excerpt = excerpt;
    this.ogImage = ogImage;
    this.content = content;
  }
}
