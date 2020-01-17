import { ValidatorFn } from '@angular/forms';
import { FnInputModel } from './fn-input.model';
import { FnI18nService } from '../../i18n/fn-i18.service';
export declare function FnPatternValidator(i18nSvcs: FnI18nService, config: FnInputModel): ValidatorFn;
export declare function FnEmailValidator(i18nSvcs: FnI18nService, config: FnInputModel): ValidatorFn;
export declare function FnRequireValidator(i18nSvcs: FnI18nService, config: FnInputModel): ValidatorFn;
export declare function FnMinValidator(i18nSvcs: FnI18nService, config: FnInputModel): ValidatorFn;
export declare function FnMaxValidator(i18nSvcs: FnI18nService, config: FnInputModel): ValidatorFn;
