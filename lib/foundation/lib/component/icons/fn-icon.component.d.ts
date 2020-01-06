import { AfterViewInit, ChangeDetectorRef, ElementRef, TemplateRef } from '@angular/core';
export declare class FnIconComponent implements AfterViewInit {
    private change;
    icon: string;
    lib: string;
    style: string;
    size: string;
    animation: string;
    color: string;
    align: string;
    content: ElementRef<any>;
    template: TemplateRef<any>;
    constructor(change: ChangeDetectorRef);
    ngAfterViewInit(): void;
    contentIconCode(): void;
    isFullCode(): boolean;
    getStyle(): void;
    setStyle(start: number, length: number): void;
    setIcon(start: number): void;
}
