/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FnCurrencyDirective } from './directives/fn-currency.directive';
import { FnNumberDirective } from './directives/fn-number.directive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FnInputValidator } from './directives/fn-input-validator';
import { FnTranslateModule } from '../i18n/index';
export { EMAIL_REGEX, FLOAT_NUM_REGEX, FLOAT_NUM_WITH_NEG_REGEX, VALIDATOR_MAP, FN_INPUT_TYPES } from '../core/model/fn-form.constant';
export { FnInputModel } from '../core/model/fn-input.model';
export { FnInputValueAccessor } from '../core/model/fn-input.value.accessor';
export { FnPatternValidator, FnEmailValidator, FnRequireValidator, FnMinValidator, FnMaxValidator } from '../core/model/fn-validator';
export class FnCoreModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('FnCoreModule is already loaded. Import it in the  AppModule(Root Module) only');
        }
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FnCoreModule,
            providers: []
        };
    }
}
FnCoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FnNumberDirective, FnCurrencyDirective, FnInputValidator],
                imports: [FormsModule, CommonModule, FnTranslateModule],
                exports: [FnNumberDirective, FnCurrencyDirective, FnInputValidator],
                providers: []
            },] }
];
/** @nocollapse */
FnCoreModule.ctorParameters = () => [
    { type: FnCoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsc0dBQWMsZ0NBQWdDLENBQUM7QUFDL0MsNkJBQWMsOEJBQThCLENBQUM7QUFDN0MscUNBQWMsdUNBQXVDLENBQUM7QUFDdEQseUdBQWMsNEJBQTRCLENBQUM7QUFVM0MsTUFBTSxPQUFPLFlBQVk7Ozs7SUFDckIsWUFBb0MsWUFBMEI7UUFDMUQsSUFBSSxZQUFZLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUNYLCtFQUErRSxDQUFDLENBQUM7U0FDeEY7SUFDTCxDQUFDOzs7O0lBRUQsTUFBTSxDQUFDLE9BQU87UUFDVixPQUFPO1lBQ0gsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQztJQUNOLENBQUM7OztZQXBCSixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3hFLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLENBQUM7Z0JBQ3ZELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDO2dCQUNuRSxTQUFTLEVBQUUsRUFBRTthQUVoQjs7OztZQUVxRCxZQUFZLHVCQUFqRCxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm5DdXJyZW5jeURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mbi1jdXJyZW5jeS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGbk51bWJlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mbi1udW1iZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZuSW5wdXRWYWxpZGF0b3IgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm4taW5wdXQtdmFsaWRhdG9yJztcclxuaW1wb3J0IHsgRm5UcmFuc2xhdGVNb2R1bGUgfSBmcm9tICcuLi9pMThuL2luZGV4JztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4uL2NvcmUvbW9kZWwvZm4tZm9ybS5jb25zdGFudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4uL2NvcmUvbW9kZWwvZm4taW5wdXQubW9kZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuLi9jb3JlL21vZGVsL2ZuLWlucHV0LnZhbHVlLmFjY2Vzc29yJztcclxuZXhwb3J0ICogZnJvbSAnLi4vY29yZS9tb2RlbC9mbi12YWxpZGF0b3InO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtGbk51bWJlckRpcmVjdGl2ZSwgRm5DdXJyZW5jeURpcmVjdGl2ZSwgRm5JbnB1dFZhbGlkYXRvcl0sXHJcbiAgICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZSwgRm5UcmFuc2xhdGVNb2R1bGVdLFxyXG4gICAgZXhwb3J0czogW0ZuTnVtYmVyRGlyZWN0aXZlLCBGbkN1cnJlbmN5RGlyZWN0aXZlLCBGbklucHV0VmFsaWRhdG9yXSxcclxuICAgIHByb3ZpZGVyczogW11cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbkNvcmVNb2R1bGUge1xyXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBGbkNvcmVNb2R1bGUpIHtcclxuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgICdGbkNvcmVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgIEFwcE1vZHVsZShSb290IE1vZHVsZSkgb25seScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogRm5Db3JlTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==