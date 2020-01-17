/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe, ChangeDetectorRef } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
// tslint:disable-next-line: use-pipe-transform-interface
export class FnTranslatePipe extends TranslatePipe {
    /**
     * @param {?} translateService
     * @param {?} changeDetectRef
     */
    constructor(translateService, changeDetectRef) {
        super(translateService, changeDetectRef);
        this.translateService = translateService;
        this.changeDetectRef = changeDetectRef;
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    transform(value, ...args) {
        return super.transform(value, args);
    }
}
FnTranslatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'fnTranslate',
                pure: false
            },] }
];
/** @nocollapse */
FnTranslatePipe.ctorParameters = () => [
    { type: TranslateService },
    { type: ChangeDetectorRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnTranslatePipe.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    FnTranslatePipe.prototype.changeDetectRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2kxOG4vZm4tdHJhbnNsYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFPdEUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsYUFBYTs7Ozs7SUFDaEQsWUFBb0IsZ0JBQWtDLEVBQVUsZUFBa0M7UUFDaEcsS0FBSyxDQUFDLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRHZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7SUFFbEcsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWEsRUFBRSxHQUFHLElBQVc7UUFDckMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUFYRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLElBQUksRUFBRSxLQUFLO2FBQ1o7Ozs7WUFOdUIsZ0JBQWdCO1lBREMsaUJBQWlCOzs7Ozs7O0lBUzVDLDJDQUEwQzs7Ozs7SUFBRSwwQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBSZW5kZXJlcjIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUsIFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdXNlLXBpcGUtdHJhbnNmb3JtLWludGVyZmFjZVxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2ZuVHJhbnNsYXRlJyxcclxuICBwdXJlOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm5UcmFuc2xhdGVQaXBlIGV4dGVuZHMgVHJhbnNsYXRlUGlwZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwcml2YXRlIGNoYW5nZURldGVjdFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHN1cGVyKHRyYW5zbGF0ZVNlcnZpY2UsIGNoYW5nZURldGVjdFJlZik7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcclxuICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUsIGFyZ3MpO1xyXG4gIH1cclxufVxyXG4iXX0=