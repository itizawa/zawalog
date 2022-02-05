export class Post {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  content: string;
  constructor({
    slug,
    title,
    date,
    coverImage,
    content,
  }: {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
    content: string;
  }) {
    this.slug = slug;
    this.title = title;
    this.date = date;
    this.coverImage = coverImage;
    this.content = content;
  }
}
