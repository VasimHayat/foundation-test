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
                declarations: [FnNumberDirective, FnCurrencyDirective, FnTranslatePipe],
                imports: [FormsModule, CommonModule],
                exports: [FnNumberDirective, FnCurrencyDirective, FnTranslatePipe],
                providers: [FnI18nService]
            },] }
];
/** @nocollapse */
FnCoreModule.ctorParameters = () => [
    { type: FnCoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLHNHQUFjLGdDQUFnQyxDQUFDO0FBQy9DLDZCQUFjLDhCQUE4QixDQUFDO0FBQzdDLHFDQUFjLHVDQUF1QyxDQUFDO0FBQ3RELHlHQUFjLDRCQUE0QixDQUFDO0FBVTNDLE1BQU0sT0FBTyxZQUFZOzs7O0lBQ3JCLFlBQW9DLFlBQTBCO1FBQzFELElBQUksWUFBWSxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FDWCwrRUFBK0UsQ0FBQyxDQUFDO1NBQ3hGO0lBQ0wsQ0FBQzs7OztJQUVELE1BQU0sQ0FBQyxPQUFPO1FBQ1YsT0FBTztZQUNILFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUM3QixDQUFDO0lBQ04sQ0FBQzs7O1lBcEJKLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLENBQUM7Z0JBQ3ZFLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGVBQWUsQ0FBQztnQkFDbEUsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBRTdCOzs7O1lBRXFELFlBQVksdUJBQWpELFFBQVEsWUFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGbkN1cnJlbmN5RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZuLWN1cnJlbmN5LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZuTnVtYmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZuLW51bWJlci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGbkkxOG5TZXJ2aWNlIH0gZnJvbSAnLi9pMThuL2ZuLWkxOC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm5UcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi9pMThuL2ZuLXRyYW5zbGF0ZS5waXBlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuLi9jb3JlL21vZGVsL2ZuLWZvcm0uY29uc3RhbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuLi9jb3JlL21vZGVsL2ZuLWlucHV0Lm1vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi4vY29yZS9tb2RlbC9mbi1pbnB1dC52YWx1ZS5hY2Nlc3Nvcic7XHJcbmV4cG9ydCAqIGZyb20gJy4uL2NvcmUvbW9kZWwvZm4tdmFsaWRhdG9yJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbRm5OdW1iZXJEaXJlY3RpdmUsIEZuQ3VycmVuY3lEaXJlY3RpdmUsIEZuVHJhbnNsYXRlUGlwZV0sXHJcbiAgICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZV0sXHJcbiAgICBleHBvcnRzOiBbRm5OdW1iZXJEaXJlY3RpdmUsIEZuQ3VycmVuY3lEaXJlY3RpdmUsIEZuVHJhbnNsYXRlUGlwZV0sXHJcbiAgICBwcm92aWRlcnM6IFtGbkkxOG5TZXJ2aWNlXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEZuQ29yZU1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEZuQ29yZU1vZHVsZSkge1xyXG4gICAgICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgJ0ZuQ29yZU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSAgQXBwTW9kdWxlKFJvb3QgTW9kdWxlKSBvbmx5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBGbkNvcmVNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW0ZuSTE4blNlcnZpY2VdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==