import { OnInit, EventEmitter } from '@angular/core';
import { FnInputValueAccessor } from '../../../core/model/fn-input.value.accessor';
export declare class FnBaseInputComponent extends FnInputValueAccessor<any> implements OnInit {
    inputTypeMap: {
        TEXT: string;
        PASSWORD: string;
        STRING: string;
        PHONENUMBER: string;
        NUMBER: string;
        CURRENCY: string;
        FLOAT: string;
        DOUBLE: string;
        EMAIL: string;
        BOOL: string;
        TEXTAREA: string;
        LOOKUP: string;
        MULTILOOKUP: string;
        COLOR: string;
    };
    name: string;
    id: string;
    placeholder: string;
    isDisabled: boolean;
    textAlign: 'left' | 'right' | 'center' | 'justify';
    isErrorBox: boolean;
    minLength: number;
    isRequired: boolean;
    maxLength: number;
    type: string;
    parentForm: any;
    readonly: boolean;
    autocomplete: string;
    tabindex: number;
    pattern?: any;
    focusEvent: EventEmitter<any>;
    blueEvent: EventEmitter<any>;
    ngOnInit(): void;
    setOption(): void;
}
