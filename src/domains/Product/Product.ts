export class Product {
  id: string;
  title: string;
  url: string;
  image: string;
  description: string;
  releasedAt: string;
  constructor(init: Product) {
    this.id = init.id;
    this.title = init.title;
    this.url = init.url;
    this.image = init.image;
    this.description = init.description;
    this.releasedAt = init.releasedAt;
  }
}
