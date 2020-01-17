/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FNExceptionJson } from './fn-exception-json';
/* mainly designed to handle try-catch exception(may be manual) and
* for auto genrate error there is FNErrorHandler sevice that implement ErrorHandler(Angular)
*/
export class FnExceptionService {
    constructor() {
    }
    /**
     * @param {?} fnAplicationHelper
     * @return {?}
     */
    setFnApplicationHelper(fnAplicationHelper) {
        this.fnAppHelper = fnAplicationHelper;
    }
    /**
     * @return {?}
     */
    getFnApplicationHelper() {
        return this.fnAppHelper;
    }
    /**
     * @param {?} exception
     * @param {?=} logToConsole
     * @return {?}
     */
    logException(exception, logToConsole) {
        if (logToConsole) {
            console.error(exception);
        }
        if (this.fnAppHelper.getApplication()) {
            /** @type {?} */
            const fnExpJson = new FNExceptionJson(exception);
            this.fnAppHelper.getApplication().sendExceptionToServer(fnExpJson);
        }
    }
}
FnExceptionService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FnExceptionService.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FnExceptionService.prototype.fnAppHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tZXhjZXB0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3VuZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2V4Y2VwdGlvbi9mbi1leGNlcHRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFRcEQsTUFBTSxPQUFPLGtCQUFrQjtJQUU3QjtJQUNBLENBQUM7Ozs7O0lBSU0sc0JBQXNCLENBQUMsa0JBQXVDO1FBQ25FLElBQUksQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVNLHNCQUFzQjtRQUMzQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBRU0sWUFBWSxDQUFDLFNBQWMsRUFBRSxZQUFzQjtRQUN4RCxJQUFJLFlBQVksRUFBRTtZQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFCO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxFQUFFOztrQkFDL0IsU0FBUyxHQUFvQixJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUM7WUFDakUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwRTtJQUVILENBQUM7OztZQTNCRixVQUFVOzs7Ozs7Ozs7SUFPVCx5Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0ZuQXBwbGljYXRpb25IZWxwZXJ9IGZyb20gJy4uL3NlcnZpY2VzL2ZuLWFwcGxpY2F0aW9uLmhlbHBlcic7XHJcbmltcG9ydCB7Rk5FeGNlcHRpb25Kc29ufSBmcm9tICcuL2ZuLWV4Y2VwdGlvbi1qc29uJztcclxuXHJcbi8qIG1haW5seSBkZXNpZ25lZCB0byBoYW5kbGUgdHJ5LWNhdGNoIGV4Y2VwdGlvbihtYXkgYmUgbWFudWFsKSBhbmRcclxuKiBmb3IgYXV0byBnZW5yYXRlIGVycm9yIHRoZXJlIGlzIEZORXJyb3JIYW5kbGVyIHNldmljZSB0aGF0IGltcGxlbWVudCBFcnJvckhhbmRsZXIoQW5ndWxhcilcclxuKi9cclxuXHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBGbkV4Y2VwdGlvblNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm5BcHBIZWxwZXI6IEZuQXBwbGljYXRpb25IZWxwZXI7XHJcblxyXG4gIHB1YmxpYyBzZXRGbkFwcGxpY2F0aW9uSGVscGVyKGZuQXBsaWNhdGlvbkhlbHBlcjogRm5BcHBsaWNhdGlvbkhlbHBlcikge1xyXG4gICAgdGhpcy5mbkFwcEhlbHBlciA9IGZuQXBsaWNhdGlvbkhlbHBlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRGbkFwcGxpY2F0aW9uSGVscGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm5BcHBIZWxwZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9nRXhjZXB0aW9uKGV4Y2VwdGlvbjogYW55LCBsb2dUb0NvbnNvbGU/OiBib29sZWFuKSB7XHJcbiAgICBpZiAobG9nVG9Db25zb2xlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXhjZXB0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5mbkFwcEhlbHBlci5nZXRBcHBsaWNhdGlvbigpKSB7XHJcbiAgICAgIGNvbnN0IGZuRXhwSnNvbjogRk5FeGNlcHRpb25Kc29uID0gbmV3IEZORXhjZXB0aW9uSnNvbihleGNlcHRpb24pO1xyXG4gICAgICB0aGlzLmZuQXBwSGVscGVyLmdldEFwcGxpY2F0aW9uKCkuc2VuZEV4Y2VwdGlvblRvU2VydmVyKGZuRXhwSnNvbik7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==