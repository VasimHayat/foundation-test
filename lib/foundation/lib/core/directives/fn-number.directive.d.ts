import { NgModel } from '@angular/forms';
import { ElementRef } from '@angular/core';
export declare class FnNumberDirective {
    protected model: NgModel;
    private elementRef;
    private decimalCounter;
    private navigationKeys;
    isNegative: boolean;
    isDecimal: boolean;
    private nativeElement;
    private selectedVal;
    constructor(model: NgModel, elementRef: ElementRef);
    removeSelectedVal(): void;
    onKeyDown(e: KeyboardEvent): void;
    onKeyUp(e: any): void;
    onPaste(event: ClipboardEvent): void;
    onDrop(event: DragEvent): void;
    isDigit(eventKey: string, isNotAddingDotBeforMinus: any): any;
    isAllTextSelected(): boolean;
    isValidKey(event: any, isNotAddingDotBeforMinus: any): any;
    isValidPastString(inputVal: string, event: any): boolean;
    isValidNumber(inputVal: string, startCursorposition: any): boolean;
    isValidDecimal(inputVal: string, startCursorposition: any): boolean;
    replaceBetween(start: number, end: number, inputVal: string): string;
    isAllowPastingOrDroping(val: any): boolean;
}
