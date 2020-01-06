import { Subject } from 'rxjs';
export interface TableAction {
    action: string;
    data: any;
}
export declare class FnTableConfig {
    static defalutSortClass: string;
    static defaultSortValue: number;
    static defaultIsColSort: boolean;
    uniqueKey?: any;
    tableClass?: string;
    pagination?: boolean;
    filterOn?: boolean;
    hideAction?: boolean;
    hideEdit?: boolean;
    hideDelete?: boolean;
    defaultSortKey?: string;
    hidePagination?: boolean;
    isSelectable?: boolean;
    tableAction: Subject<TableAction>;
}
