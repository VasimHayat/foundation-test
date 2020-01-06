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
                    declarations: [FnNumberDirective, FnCurrencyDirective, FnTranslatePipe],
                    imports: [FormsModule, CommonModule],
                    exports: [FnNumberDirective, FnCurrencyDirective, FnTranslatePipe],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLHNHQUFjLGdDQUFnQyxDQUFDO0FBQy9DLDZCQUFjLDhCQUE4QixDQUFDO0FBQzdDLHFDQUFjLHVDQUF1QyxDQUFDO0FBQ3RELHlHQUFjLDRCQUE0QixDQUFDO0FBRzNDO0lBUUksc0JBQW9DLFlBQTBCO1FBQzFELElBQUksWUFBWSxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FDWCwrRUFBK0UsQ0FBQyxDQUFDO1NBQ3hGO0lBQ0wsQ0FBQzs7OztJQUVNLG9CQUFPOzs7SUFBZDtRQUNJLE9BQU87WUFDSCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7U0FDN0IsQ0FBQztJQUNOLENBQUM7O2dCQXBCSixRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxDQUFDO29CQUN2RSxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLENBQUM7b0JBQ2xFLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFFN0I7Ozs7Z0JBRXFELFlBQVksdUJBQWpELFFBQVEsWUFBSSxRQUFROztJQWNyQyxtQkFBQztDQUFBLEFBdEJELElBc0JDO1NBZlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm5DdXJyZW5jeURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mbi1jdXJyZW5jeS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGbk51bWJlckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9mbi1udW1iZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRm5JMThuU2VydmljZSB9IGZyb20gJy4vaTE4bi9mbi1pMTguc2VydmljZSc7XHJcbmltcG9ydCB7IEZuVHJhbnNsYXRlUGlwZSB9IGZyb20gJy4vaTE4bi9mbi10cmFuc2xhdGUucGlwZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi4vY29yZS9tb2RlbC9mbi1mb3JtLmNvbnN0YW50JztcclxuZXhwb3J0ICogZnJvbSAnLi4vY29yZS9tb2RlbC9mbi1pbnB1dC5tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4uL2NvcmUvbW9kZWwvZm4taW5wdXQudmFsdWUuYWNjZXNzb3InO1xyXG5leHBvcnQgKiBmcm9tICcuLi9jb3JlL21vZGVsL2ZuLXZhbGlkYXRvcic7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW0ZuTnVtYmVyRGlyZWN0aXZlLCBGbkN1cnJlbmN5RGlyZWN0aXZlLCBGblRyYW5zbGF0ZVBpcGVdLFxyXG4gICAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGVdLFxyXG4gICAgZXhwb3J0czogW0ZuTnVtYmVyRGlyZWN0aXZlLCBGbkN1cnJlbmN5RGlyZWN0aXZlLCBGblRyYW5zbGF0ZVBpcGVdLFxyXG4gICAgcHJvdmlkZXJzOiBbRm5JMThuU2VydmljZV1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbkNvcmVNb2R1bGUge1xyXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBGbkNvcmVNb2R1bGUpIHtcclxuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgICdGbkNvcmVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgIEFwcE1vZHVsZShSb290IE1vZHVsZSkgb25seScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogRm5Db3JlTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtGbkkxOG5TZXJ2aWNlXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXX0=