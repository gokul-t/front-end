import { Sort } from '../products/page';

export type Sort = { empty: Boolean, sorted: Boolean, unsorted: Boolean }

export interface IPagedList<Type> {
    content: [Type];
    number: Number;
    size: Number;
    totalElements: Number;
    pageable: {
        pageNumber: Number;
        pageSize: Number;
        sort: Sort;
        offset: Number;
        unpaged: Boolean;
        paged: Boolean;
    };
    last: Boolean;
    totalPages: Number;
    sort: Sort;
    first: Boolean;
    numberOfElements: Number;
    empty: Boolean;
}
