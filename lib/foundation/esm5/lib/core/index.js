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
            providers: []
        };
    };
    FnCoreModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FnNumberDirective, FnCurrencyDirective, FnInputValidator],
                    imports: [FormsModule, CommonModule, FnTranslateModule],
                    exports: [FnNumberDirective, FnCurrencyDirective, FnInputValidator],
                    providers: []
                },] }
    ];
    /** @nocollapse */
    FnCoreModule.ctorParameters = function () { return [
        { type: FnCoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return FnCoreModule;
}());
export { FnCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsc0dBQWMsZ0NBQWdDLENBQUM7QUFDL0MsNkJBQWMsOEJBQThCLENBQUM7QUFDN0MscUNBQWMsdUNBQXVDLENBQUM7QUFDdEQseUdBQWMsNEJBQTRCLENBQUM7QUFHM0M7SUFRSSxzQkFBb0MsWUFBMEI7UUFDMUQsSUFBSSxZQUFZLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUNYLCtFQUErRSxDQUFDLENBQUM7U0FDeEY7SUFDTCxDQUFDOzs7O0lBRU0sb0JBQU87OztJQUFkO1FBQ0ksT0FBTztZQUNILFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUM7SUFDTixDQUFDOztnQkFwQkosUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDO29CQUN4RSxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixDQUFDO29CQUN2RCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsQ0FBQztvQkFDbkUsU0FBUyxFQUFFLEVBQUU7aUJBRWhCOzs7O2dCQUVxRCxZQUFZLHVCQUFqRCxRQUFRLFlBQUksUUFBUTs7SUFjckMsbUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWZZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZuQ3VycmVuY3lEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm4tY3VycmVuY3kuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRm5OdW1iZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZm4tbnVtYmVyLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGbklucHV0VmFsaWRhdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZuLWlucHV0LXZhbGlkYXRvcic7XHJcbmltcG9ydCB7IEZuVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9pbmRleCc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuLi9jb3JlL21vZGVsL2ZuLWZvcm0uY29uc3RhbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuLi9jb3JlL21vZGVsL2ZuLWlucHV0Lm1vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi4vY29yZS9tb2RlbC9mbi1pbnB1dC52YWx1ZS5hY2Nlc3Nvcic7XHJcbmV4cG9ydCAqIGZyb20gJy4uL2NvcmUvbW9kZWwvZm4tdmFsaWRhdG9yJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbRm5OdW1iZXJEaXJlY3RpdmUsIEZuQ3VycmVuY3lEaXJlY3RpdmUsIEZuSW5wdXRWYWxpZGF0b3JdLFxyXG4gICAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGUsIEZuVHJhbnNsYXRlTW9kdWxlXSxcclxuICAgIGV4cG9ydHM6IFtGbk51bWJlckRpcmVjdGl2ZSwgRm5DdXJyZW5jeURpcmVjdGl2ZSwgRm5JbnB1dFZhbGlkYXRvcl0sXHJcbiAgICBwcm92aWRlcnM6IFtdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5Db3JlTW9kdWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogRm5Db3JlTW9kdWxlKSB7XHJcbiAgICAgICAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAnRm5Db3JlTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlICBBcHBNb2R1bGUoUm9vdCBNb2R1bGUpIG9ubHknKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IEZuQ29yZU1vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXX0=