/**
 * Created by mvasim on 12/9/17.
 */
import { EventEmitter, OnInit } from '@angular/core';
export declare class FnPaginationComponent implements OnInit {
    currentPage: number;
    totalPage: number;
    pageSize: number;
    pageClass: string;
    changePage: EventEmitter<any>;
    ngOnInit(): void;
    firstPage(): void;
    prevPage(): void;
    nextPage(): void;
    lastPage(): void;
}
