import { Book } from '@redux/books/types';
import { Author } from '@redux/authors/types';

export enum TableActions {
  LOAD_DATA = 'LOAD_DATA',
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
  LOAD_DATA_FAILURE = 'LOAD_DATA_FAILURE',
  SEARCH_DATA = 'SEARCH_DATA',
  REMOVE_DATA = 'REMOVE_DATA',
  ADD_DATA = 'ADD_DATA',
  ADD_DATA_FAILURE = 'ADD_DATA_FAILURE',
  EDIT_DATA = 'EDIT_DATA',
  SORT_DATA = 'SORT_DATA',
  SORT_DATA_SUCCESS = 'SORT_DATA_SUCCESS',
  GENRE_SORT = 'GENRE_SORT',
  COST_SORT = 'COST_SORT'
}

// export enum TableReducerNameSubscribers {  
//   BOOKS = '@@books',
//   AUTHORS = '@@authors'
// }

export interface TableStateShape {
  data: DataType;
  pagination: Pagination;
  searchString: string;
  loading: boolean;
  error: string;
  
}

export interface Pagination {
  pageSize: number;
  current: number;
  total?: number;
}

export type DataType = Array<Book> | Array<Author>

export interface LoadDataProps {
  prefix: string;
  url: string;
  searchString: string;
  currentPage: number;
  needDelay: boolean;
  payloadFunc: Function;
}

export interface SortDataProps {
  prefix: string;  
  field: string;
  order: string; 
  genre: string; 
  url: string;
  payloadFunc: Function;
  minValue: number;
  maxValue: number;
}


export interface RemoveDataProps {
  prefix: string;
  _id: string;
  payloadFunc: Function;
}

export interface AddDataProps {
  prefix: string;
  name: string;
  author: string;
  cost: number;
  genre: string;
  payloadFunc: Function;
  error: string;
  surname: string;
  dob: Date;
  dod: Date;
}

export interface EditDataProps {
  prefix: string;
  _id: string;
  name: string;
  author: string;
  cost: number;
  genre: string;
  payloadFunc: Function;

  surname: string;
  dob: Date;
  dod: Date;
}




  