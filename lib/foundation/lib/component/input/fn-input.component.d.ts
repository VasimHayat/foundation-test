import { OnInit } from '@angular/core';
import { FnUiFieldMetaDataService } from './service/fn-ui-field-metadata.service';
import { FnInputValueAccessor } from '../../core/model/fn-input.value.accessor';
import { FnInputModel } from '../../core/model/fn-input.model';
export declare class FnInputComponent extends FnInputValueAccessor<any> implements OnInit {
    private fieldMetaDataSvcs;
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
    type: string;
    config: FnInputModel;
    pattern?: any;
    constructor(fieldMetaDataSvcs: FnUiFieldMetaDataService);
    name: string;
    isDisabled: boolean;
    autocomplete: string;
    tabindex: number;
    textAlign: 'left' | 'right' | 'center' | 'justify';
    placeholder: string;
    parentForm: any;
    dataKey: string;
    ngOnInit(): void;
}
