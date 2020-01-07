/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FnCurrencyDirective } from './directives/fn-currency.directive';
import { FnNumberDirective } from './directives/fn-number.directive';
import { FnI18nService } from './i18n/fn-i18.service';
import { FnTranslatePipe } from './i18n/fn-translate.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FnInputValidator } from './directives/fn-input-validator';
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
            providers: [FnI18nService]
        };
    }
}
FnCoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FnNumberDirective, FnCurrencyDirective, FnTranslatePipe, FnInputValidator],
                imports: [FormsModule, CommonModule],
                exports: [FnNumberDirective, FnCurrencyDirective, FnTranslatePipe, FnInputValidator],
                providers: [FnI18nService]
            },] }
];
/** @nocollapse */
FnCoreModule.ctorParameters = () => [
    { type: FnCoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLHNHQUFjLGdDQUFnQyxDQUFDO0FBQy9DLDZCQUFjLDhCQUE4QixDQUFDO0FBQzdDLHFDQUFjLHVDQUF1QyxDQUFDO0FBQ3RELHlHQUFjLDRCQUE0QixDQUFDO0FBVTNDLE1BQU0sT0FBTyxZQUFZOzs7O0lBQ3JCLFlBQW9DLFlBQTBCO1FBQzFELElBQUksWUFBWSxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FDWCwrRUFBK0UsQ0FBQyxDQUFDO1NBQ3hGO0lBQ0wsQ0FBQzs7OztJQUVELE1BQU0sQ0FBQyxPQUFPO1FBQ1YsT0FBTztZQUNILFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUM3QixDQUFDO0lBQ04sQ0FBQzs7O1lBcEJKLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3pGLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDcEYsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBRTdCOzs7O1lBRXFELFlBQVksdUJBQWpELFFBQVEsWUFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGbkN1cnJlbmN5RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZuLWN1cnJlbmN5LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZuTnVtYmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZuLW51bWJlci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGbkkxOG5TZXJ2aWNlIH0gZnJvbSAnLi9pMThuL2ZuLWkxOC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm5UcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi9pMThuL2ZuLXRyYW5zbGF0ZS5waXBlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZuSW5wdXRWYWxpZGF0b3IgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm4taW5wdXQtdmFsaWRhdG9yJztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4uL2NvcmUvbW9kZWwvZm4tZm9ybS5jb25zdGFudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4uL2NvcmUvbW9kZWwvZm4taW5wdXQubW9kZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuLi9jb3JlL21vZGVsL2ZuLWlucHV0LnZhbHVlLmFjY2Vzc29yJztcclxuZXhwb3J0ICogZnJvbSAnLi4vY29yZS9tb2RlbC9mbi12YWxpZGF0b3InO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtGbk51bWJlckRpcmVjdGl2ZSwgRm5DdXJyZW5jeURpcmVjdGl2ZSwgRm5UcmFuc2xhdGVQaXBlLCBGbklucHV0VmFsaWRhdG9yXSxcclxuICAgIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlXSxcclxuICAgIGV4cG9ydHM6IFtGbk51bWJlckRpcmVjdGl2ZSwgRm5DdXJyZW5jeURpcmVjdGl2ZSwgRm5UcmFuc2xhdGVQaXBlLCBGbklucHV0VmFsaWRhdG9yXSxcclxuICAgIHByb3ZpZGVyczogW0ZuSTE4blNlcnZpY2VdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5Db3JlTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogRm5Db3JlTW9kdWxlKSB7XHJcbiAgICAgICAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAnRm5Db3JlTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlICBBcHBNb2R1bGUoUm9vdCBNb2R1bGUpIG9ubHknKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IEZuQ29yZU1vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbRm5JMThuU2VydmljZV1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl19