import { EventEmitter, OnInit } from '@angular/core';
import { FnInputValueAccessor } from '../../../core';
export declare class FnSelectComponent extends FnInputValueAccessor<string> implements OnInit {
    constructor();
    name: string;
    id: string;
    isDisabled: boolean;
    isErrorBox: boolean;
    optionList: Array<any>;
    labelKey: string;
    inputKey: string;
    placeholder: string;
    isRequired: boolean;
    parentForm: any;
    tabIndex: number;
    groupBy: string;
    changeEvent: EventEmitter<any>;
    closeEvent: EventEmitter<any>;
    ngOnInit(): void;
    setOption(): void;
}
