/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FnApplicationHelper } from './fn-application.helper';
import { FnExceptionService } from '../exception/fn-exception.service';
var FnApplication = /** @class */ (function () {
    function FnApplication(fnAppHelper, fnExp) {
        this.fnAppHelper = fnAppHelper;
        this.fnExp = fnExp;
        this.fnAppHelper.setApplication(this);
        this.fnExp.setFnApplicationHelper(this.fnAppHelper);
    }
    /**
     * @param {?} exception
     * @return {?}
     */
    FnApplication.prototype.sendExceptionToServer = /**
     * @param {?} exception
     * @return {?}
     */
    function (exception) { };
    FnApplication.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FnApplication.ctorParameters = function () { return [
        { type: FnApplicationHelper },
        { type: FnExceptionService }
    ]; };
    return FnApplication;
}());
export { FnApplication };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnApplication.prototype.fnAppHelper;
    /**
     * @type {?}
     * @private
     */
    FnApplication.prototype.fnExp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ZuLWFwcGxpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBSXZFO0lBR0UsdUJBQW9CLFdBQWdDLEVBQVUsS0FBeUI7UUFBbkUsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDckYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFDRCw2Q0FBcUI7Ozs7SUFBckIsVUFBc0IsU0FBMEIsSUFBSSxDQUFDOztnQkFQdEQsVUFBVTs7OztnQkFMRixtQkFBbUI7Z0JBQ25CLGtCQUFrQjs7SUFZM0Isb0JBQUM7Q0FBQSxBQVJELElBUUM7U0FQWSxhQUFhOzs7Ozs7SUFFWixvQ0FBd0M7Ozs7O0lBQUUsOEJBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm5BcHBsaWNhdGlvbkhlbHBlciB9IGZyb20gJy4vZm4tYXBwbGljYXRpb24uaGVscGVyJztcbmltcG9ydCB7IEZuRXhjZXB0aW9uU2VydmljZSB9IGZyb20gJy4uL2V4Y2VwdGlvbi9mbi1leGNlcHRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBGTkV4Y2VwdGlvbkpzb24gfSBmcm9tICcuLi9leGNlcHRpb24vZm4tZXhjZXB0aW9uLWpzb24nO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGbkFwcGxpY2F0aW9uIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZuQXBwSGVscGVyOiBGbkFwcGxpY2F0aW9uSGVscGVyLCBwcml2YXRlIGZuRXhwOiBGbkV4Y2VwdGlvblNlcnZpY2UpIHtcbiAgICB0aGlzLmZuQXBwSGVscGVyLnNldEFwcGxpY2F0aW9uKHRoaXMpO1xuICAgIHRoaXMuZm5FeHAuc2V0Rm5BcHBsaWNhdGlvbkhlbHBlcih0aGlzLmZuQXBwSGVscGVyKTtcbiAgfVxuICBzZW5kRXhjZXB0aW9uVG9TZXJ2ZXIoZXhjZXB0aW9uOiBGTkV4Y2VwdGlvbkpzb24pIHsgfVxufVxuIl19