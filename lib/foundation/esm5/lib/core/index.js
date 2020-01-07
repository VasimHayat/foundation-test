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
var FnCoreModule = /** @class */ (function () {
    function FnCoreModule(parentModule) {
        if (parentModule) {
            throw new Error('FnCoreModule is already loaded. Import it in the  AppModule(Root Module) only');
        }
    }
    /**
     * @return {?}
     */
    FnCoreModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FnCoreModule,
            providers: [FnI18nService]
        };
    };
    FnCoreModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FnNumberDirective, FnCurrencyDirective, FnTranslatePipe, FnInputValidator],
                    imports: [FormsModule, CommonModule],
                    exports: [FnNumberDirective, FnCurrencyDirective, FnTranslatePipe, FnInputValidator],
                    providers: [FnI18nService]
                },] }
    ];
    /** @nocollapse */
    FnCoreModule.ctorParameters = function () { return [
        { type: FnCoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return FnCoreModule;
}());
export { FnCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLHNHQUFjLGdDQUFnQyxDQUFDO0FBQy9DLDZCQUFjLDhCQUE4QixDQUFDO0FBQzdDLHFDQUFjLHVDQUF1QyxDQUFDO0FBQ3RELHlHQUFjLDRCQUE0QixDQUFDO0FBRzNDO0lBUUksc0JBQW9DLFlBQTBCO1FBQzFELElBQUksWUFBWSxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FDWCwrRUFBK0UsQ0FBQyxDQUFDO1NBQ3hGO0lBQ0wsQ0FBQzs7OztJQUVNLG9CQUFPOzs7SUFBZDtRQUNJLE9BQU87WUFDSCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7U0FDN0IsQ0FBQztJQUNOLENBQUM7O2dCQXBCSixRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixDQUFDO29CQUN6RixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ3BGLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFFN0I7Ozs7Z0JBRXFELFlBQVksdUJBQWpELFFBQVEsWUFBSSxRQUFROztJQWNyQyxtQkFBQztDQUFBLEFBdEJELElBc0JDO1NBZlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm5DdXJyZW5jeURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mbi1jdXJyZW5jeS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGbk51bWJlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mbi1udW1iZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRm5JMThuU2VydmljZSB9IGZyb20gJy4vaTE4bi9mbi1pMTguc2VydmljZSc7XHJcbmltcG9ydCB7IEZuVHJhbnNsYXRlUGlwZSB9IGZyb20gJy4vaTE4bi9mbi10cmFuc2xhdGUucGlwZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGbklucHV0VmFsaWRhdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZuLWlucHV0LXZhbGlkYXRvcic7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuLi9jb3JlL21vZGVsL2ZuLWZvcm0uY29uc3RhbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuLi9jb3JlL21vZGVsL2ZuLWlucHV0Lm1vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi4vY29yZS9tb2RlbC9mbi1pbnB1dC52YWx1ZS5hY2Nlc3Nvcic7XHJcbmV4cG9ydCAqIGZyb20gJy4uL2NvcmUvbW9kZWwvZm4tdmFsaWRhdG9yJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbRm5OdW1iZXJEaXJlY3RpdmUsIEZuQ3VycmVuY3lEaXJlY3RpdmUsIEZuVHJhbnNsYXRlUGlwZSwgRm5JbnB1dFZhbGlkYXRvcl0sXHJcbiAgICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZV0sXHJcbiAgICBleHBvcnRzOiBbRm5OdW1iZXJEaXJlY3RpdmUsIEZuQ3VycmVuY3lEaXJlY3RpdmUsIEZuVHJhbnNsYXRlUGlwZSwgRm5JbnB1dFZhbGlkYXRvcl0sXHJcbiAgICBwcm92aWRlcnM6IFtGbkkxOG5TZXJ2aWNlXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEZuQ29yZU1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEZuQ29yZU1vZHVsZSkge1xyXG4gICAgICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgJ0ZuQ29yZU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSAgQXBwTW9kdWxlKFJvb3QgTW9kdWxlKSBvbmx5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBGbkNvcmVNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW0ZuSTE4blNlcnZpY2VdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==