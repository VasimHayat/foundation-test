import { ChangeDetectorRef, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class FnSwitchComponent implements ControlValueAccessor {
    private cdr;
    constructor(cdr: ChangeDetectorRef);
    checked: boolean;
    fnSize: string;
    isDisabled: boolean;
    checkedTemplate: TemplateRef<void>;
    unCheckedTemplate: TemplateRef<void>;
    onTouched: () => void;
    onChange: (value: boolean) => void;
    clickEvent(e: MouseEvent): void;
    updateValue(value: boolean): void;
    onKeyDown(e: KeyboardEvent): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: boolean) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
}
