import { EventEmitter, ElementRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
export declare class FnTableSearchComponent implements OnInit {
    private el;
    debouncer: Subject<string>;
    search: EventEmitter<string>;
    config: {
        actionClear: Subject<any>;
    };
    constructor(el: ElementRef);
    ngOnInit(): void;
    debounce(value: any): void;
}
