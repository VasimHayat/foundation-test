/**
 * Created by mvasim on 12/9/17.
 */
import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FnTableMetaData } from './fn-table.meta.data';
import { TableAction, FnTableConfig } from './fn-table.config';
import { List } from 'immutable';
import { Subject } from 'rxjs';
import { FnUtilService } from '../../services/fn-util.service';
export declare class FnTableComponent implements OnInit, OnDestroy {
    private fnUtil;
    constructor(fnUtil: FnUtilService);
    private static DEFAULT_SORT_CLS;
    tblSearchConfig: {
        actionClear: Subject<unknown>;
    };
    private selectedCol;
    searchTerm: string;
    private uniquKeyExits;
    filterArray: List<object>;
    config?: FnTableConfig;
    rowMetaArray: Array<FnTableMetaData>;
    dataArray: List<object>;
    currentPage?: number;
    pageSize?: number;
    updateRow: EventEmitter<any>;
    deleteRow: EventEmitter<any>;
    totalPage: number;
    showSearchBox: boolean;
    dataCloneArray: List<object>;
    ngOnDestroy(): void;
    initPageConfig(): void;
    tableAction(tableAction: TableAction): void;
    ngOnInit(): void;
    applySortIcon(sortKey: string): void;
    changeSort(column: FnTableMetaData, skipSortIcon?: boolean): void;
    paginzationEvent(eventObj: any): void;
    searchOnRows(_searchTerm?: string): void;
    private addRowAction;
    filterAction(rowArray: List<object>): void;
    private updateDataArray;
    cellClick(rowObj: object, columnName: string): void;
    updateAction(rowObj: object): void;
    deleteAction(rowObj: object): void;
    private deleteRowAction;
    toggleSearch(): void;
}
