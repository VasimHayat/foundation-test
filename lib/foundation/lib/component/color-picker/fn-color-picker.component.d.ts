import { OnInit, EventEmitter } from '@angular/core';
import { FnInputValueAccessor } from '../../core/model/fn-input.value.accessor';
export declare class FnColorPickerComponent extends FnInputValueAccessor<any> implements OnInit {
    isDisable: boolean;
    isDisableInput: boolean;
    showOkBtn: boolean;
    showCancelBtn: boolean;
    okButtonClass: string;
    cancelButtonClass: string;
    isSaveClkOutside: boolean;
    outputFormat: string;
    onChangeColor: EventEmitter<string>;
    ngOnInit(): void;
    changeColor(colorCode: string): void;
}
