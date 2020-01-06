import { NgModel } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { FnNumberDirective } from './fn-number.directive';
export declare class FnCurrencyDirective extends FnNumberDirective {
    format: string;
    private whiteSpace;
    handleKeyboardEvent(event: any): void;
    onBlur(value: any): void;
    onFocus(value: any): void;
    constructor(model: NgModel, elementRef: ElementRef);
}
