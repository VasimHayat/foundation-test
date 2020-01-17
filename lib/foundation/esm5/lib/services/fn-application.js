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
    function (exception) {
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ZuLWFwcGxpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBSXJFO0lBR0UsdUJBQW9CLFdBQWdDLEVBQVUsS0FBeUI7UUFBbkUsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDckYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFRCw2Q0FBcUI7Ozs7SUFBckIsVUFBc0IsU0FBMEI7SUFDaEQsQ0FBQzs7Z0JBVEYsVUFBVTs7OztnQkFMSCxtQkFBbUI7Z0JBQ25CLGtCQUFrQjs7SUFjMUIsb0JBQUM7Q0FBQSxBQVZELElBVUM7U0FUWSxhQUFhOzs7Ozs7SUFFWixvQ0FBd0M7Ozs7O0lBQUUsOEJBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm5BcHBsaWNhdGlvbkhlbHBlcn0gZnJvbSAnLi9mbi1hcHBsaWNhdGlvbi5oZWxwZXInO1xuaW1wb3J0IHtGbkV4Y2VwdGlvblNlcnZpY2V9IGZyb20gJy4uL2V4Y2VwdGlvbi9mbi1leGNlcHRpb24uc2VydmljZSc7XG5pbXBvcnQge0ZORXhjZXB0aW9uSnNvbn0gZnJvbSAnLi4vZXhjZXB0aW9uL2ZuLWV4Y2VwdGlvbi1qc29uJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm5BcHBsaWNhdGlvbiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmbkFwcEhlbHBlcjogRm5BcHBsaWNhdGlvbkhlbHBlciwgcHJpdmF0ZSBmbkV4cDogRm5FeGNlcHRpb25TZXJ2aWNlKSB7XG4gICAgdGhpcy5mbkFwcEhlbHBlci5zZXRBcHBsaWNhdGlvbih0aGlzKTtcbiAgICB0aGlzLmZuRXhwLnNldEZuQXBwbGljYXRpb25IZWxwZXIodGhpcy5mbkFwcEhlbHBlcik7XG4gIH1cblxuICBzZW5kRXhjZXB0aW9uVG9TZXJ2ZXIoZXhjZXB0aW9uOiBGTkV4Y2VwdGlvbkpzb24pIHtcbiAgfVxufVxuIl19