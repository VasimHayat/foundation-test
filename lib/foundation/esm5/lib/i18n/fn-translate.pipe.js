/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe, ChangeDetectorRef } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
// tslint:disable-next-line: use-pipe-transform-interface
var FnTranslatePipe = /** @class */ (function (_super) {
    tslib_1.__extends(FnTranslatePipe, _super);
    function FnTranslatePipe(translateService, changeDetectRef) {
        var _this = _super.call(this, translateService, changeDetectRef) || this;
        _this.translateService = translateService;
        _this.changeDetectRef = changeDetectRef;
        return _this;
    }
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    FnTranslatePipe.prototype.transform = /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return _super.prototype.transform.call(this, value, args);
    };
    FnTranslatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'fnTranslate',
                    pure: false
                },] }
    ];
    /** @nocollapse */
    FnTranslatePipe.ctorParameters = function () { return [
        { type: TranslateService },
        { type: ChangeDetectorRef }
    ]; };
    return FnTranslatePipe;
}(TranslatePipe));
export { FnTranslatePipe };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2kxOG4vZm4tdHJhbnNsYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUE0QixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBR3RFO0lBSXFDLDJDQUFhO0lBQ2hELHlCQUFvQixnQkFBa0MsRUFBVSxlQUFrQztRQUFsRyxZQUNFLGtCQUFNLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxTQUN6QztRQUZtQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUscUJBQWUsR0FBZixlQUFlLENBQW1COztJQUVsRyxDQUFDOzs7Ozs7SUFFRCxtQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQWE7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOztRQUNyQyxPQUFPLGlCQUFNLFNBQVMsWUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBWEYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxhQUFhO29CQUNuQixJQUFJLEVBQUUsS0FBSztpQkFDWjs7OztnQkFOdUIsZ0JBQWdCO2dCQURDLGlCQUFpQjs7SUFnQjFELHNCQUFDO0NBQUEsQUFaRCxDQUlxQyxhQUFhLEdBUWpEO1NBUlksZUFBZTs7Ozs7O0lBQ2QsMkNBQTBDOzs7OztJQUFFLDBDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSwgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1c2UtcGlwZS10cmFuc2Zvcm0taW50ZXJmYWNlXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZm5UcmFuc2xhdGUnLFxyXG4gIHB1cmU6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGblRyYW5zbGF0ZVBpcGUgZXh0ZW5kcyBUcmFuc2xhdGVQaXBlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsIHByaXZhdGUgY2hhbmdlRGV0ZWN0UmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIodHJhbnNsYXRlU2VydmljZSwgY2hhbmdlRGV0ZWN0UmVmKTtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgYXJncyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==