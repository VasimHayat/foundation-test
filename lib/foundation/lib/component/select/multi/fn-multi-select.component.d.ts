import { EventEmitter, OnInit } from '@angular/core';
import { FnInputValueAccessor } from '../../../core';
export declare class FnMultiSelectComponent extends FnInputValueAccessor<string> implements OnInit {
    constructor();
    name: string;
    id: string;
    isDisabled: boolean;
    isErrorBox: boolean;
    optionList: Array<any>;
    labelKey: string;
    placeholder: string;
    isRequired: boolean;
    parentForm: any;
    tabIndex: number;
    groupBy: string;
    maxSelectedItems: number;
    changeEvent: EventEmitter<any>;
    closeEvent: EventEmitter<any>;
    ngOnInit(): void;
    setOption(): void;
}
