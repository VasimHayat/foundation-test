import { OnChanges, OnInit } from '@angular/core';
export declare class FnFaIconComponent implements OnInit, OnChanges {
    icon: string;
    style: string;
    size: string;
    animation: string;
    color: string;
    align: string;
    format: string;
    PREFIX: string;
    constructor();
    ngOnInit(): void;
    private formatClass;
    ngOnChanges(): void;
}
