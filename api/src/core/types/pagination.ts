export interface PaginationProps<T> {
  pageIndex: number
  filters?: T
}

export interface PaginationResponse<T> {
  data: T[]
  pageIndex: number
  totalCount: number
  totalPages: number
}
