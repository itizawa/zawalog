export interface PaginationResult<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
