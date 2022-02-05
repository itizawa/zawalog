export class Post {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
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
    excerpt,
    ogImage,
    content,
  }: {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
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
    this.excerpt = excerpt;
    this.ogImage = ogImage;
    this.content = content;
  }
}
