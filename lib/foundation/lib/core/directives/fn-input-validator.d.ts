import { Validator, AbstractControl } from '@angular/forms';
import { FnInputModel } from '../model/fn-input.model';
import { FnI18nService } from '../i18n/fn-i18.service';
export declare class FnInputValidator implements Validator {
    private i18nSvcs;
    fieldConfig: FnInputModel;
    constructor(i18nSvcs: FnI18nService);
    validate(control: AbstractControl): {
        [key: string]: any;
    };
    executeValidation(control: AbstractControl, value: any): {
        [key: string]: any;
    };
}
