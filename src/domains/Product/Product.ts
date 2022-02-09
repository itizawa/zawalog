export class Product {
  id: string;
  title: string;
  url: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  constructor({ id, title, url, description, createdAt, updatedAt }: Product) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
