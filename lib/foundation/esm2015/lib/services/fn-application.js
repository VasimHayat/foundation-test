/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FnApplicationHelper } from './fn-application.helper';
import { FnExceptionService } from '../exception/fn-exception.service';
export class FnApplication {
    /**
     * @param {?} fnAppHelper
     * @param {?} fnExp
     */
    constructor(fnAppHelper, fnExp) {
        this.fnAppHelper = fnAppHelper;
        this.fnExp = fnExp;
        this.fnAppHelper.setApplication(this);
        this.fnExp.setFnApplicationHelper(this.fnAppHelper);
    }
    /**
     * @param {?} exception
     * @return {?}
     */
    sendExceptionToServer(exception) { }
}
FnApplication.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FnApplication.ctorParameters = () => [
    { type: FnApplicationHelper },
    { type: FnExceptionService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ZuLWFwcGxpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBS3ZFLE1BQU0sT0FBTyxhQUFhOzs7OztJQUV4QixZQUFvQixXQUFnQyxFQUFVLEtBQXlCO1FBQW5FLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQ3JGLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBQ0QscUJBQXFCLENBQUMsU0FBMEIsSUFBSSxDQUFDOzs7WUFQdEQsVUFBVTs7OztZQUxGLG1CQUFtQjtZQUNuQixrQkFBa0I7Ozs7Ozs7SUFPYixvQ0FBd0M7Ozs7O0lBQUUsOEJBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm5BcHBsaWNhdGlvbkhlbHBlciB9IGZyb20gJy4vZm4tYXBwbGljYXRpb24uaGVscGVyJztcbmltcG9ydCB7IEZuRXhjZXB0aW9uU2VydmljZSB9IGZyb20gJy4uL2V4Y2VwdGlvbi9mbi1leGNlcHRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBGTkV4Y2VwdGlvbkpzb24gfSBmcm9tICcuLi9leGNlcHRpb24vZm4tZXhjZXB0aW9uLWpzb24nO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGbkFwcGxpY2F0aW9uIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZuQXBwSGVscGVyOiBGbkFwcGxpY2F0aW9uSGVscGVyLCBwcml2YXRlIGZuRXhwOiBGbkV4Y2VwdGlvblNlcnZpY2UpIHtcbiAgICB0aGlzLmZuQXBwSGVscGVyLnNldEFwcGxpY2F0aW9uKHRoaXMpO1xuICAgIHRoaXMuZm5FeHAuc2V0Rm5BcHBsaWNhdGlvbkhlbHBlcih0aGlzLmZuQXBwSGVscGVyKTtcbiAgfVxuICBzZW5kRXhjZXB0aW9uVG9TZXJ2ZXIoZXhjZXB0aW9uOiBGTkV4Y2VwdGlvbkpzb24pIHsgfVxufVxuIl19