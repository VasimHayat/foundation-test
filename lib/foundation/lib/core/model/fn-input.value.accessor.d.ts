import { ControlValueAccessor } from '@angular/forms';
export declare abstract class FnInputValueAccessor<T> implements ControlValueAccessor {
    private innerValue;
    isDisabled: boolean;
    propagateChange: any;
    propagateTouched: any;
    value: T;
    writeValue(value: T): void;
    registerOnChange(fn: (value: T) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
}
