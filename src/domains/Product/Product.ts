export class Product {
  id: string;
  title: string;
  url: string;
  image: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  constructor({ id, title, url, image, description, createdAt, updatedAt }: Product) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.image = image;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
