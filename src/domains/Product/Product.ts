export class Product {
  id: string;
  title: string;
  url: string;
  image: string;
  description: string;
  releasedAt: string;
  constructor({ id, title, url, image, description, releasedAt }: Product) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.image = image;
    this.description = description;
    this.releasedAt = releasedAt;
  }
}
