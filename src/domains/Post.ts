import { Tag } from './Tags';

export class Post {
  id: string;
  title: string;
  body: string;
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  constructor({ id, title, body, tags, createdAt, updatedAt, publishedAt }: Post) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.tags = tags;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.publishedAt = publishedAt;
  }
}
