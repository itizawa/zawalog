export class Tag {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  constructor({ id, name, createdAt, updatedAt, publishedAt }: Tag) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.publishedAt = publishedAt;
  }
}
