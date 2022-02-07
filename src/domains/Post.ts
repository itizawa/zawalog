export class Post {
  _id: string;
  path: string;
  createdAt: string;
  updatedAt: string;
  constructor({ _id, path, createdAt, updatedAt }: Post) {
    this._id = _id;
    this.path = path;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
