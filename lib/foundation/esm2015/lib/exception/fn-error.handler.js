/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FNErrorLogSvcs } from './fn-error.log.svcs';
// export interface LoggingErrorHandlerOptions {
//   rethrowError: boolean;
//   unwrapError: boolean;
// }
// // tslint:disable-next-line: variable-name
// export let LOGGING_ERROR_HANDLER_OPTIONS: LoggingErrorHandlerOptions = {rethrowError: false, unwrapError: false};
export class FNErrorHandler {
    // private options: LoggingErrorHandlerOptions;
    /**
     * @param {?} errorLogService
     */
    constructor(errorLogService) {
        this.errorLogService = errorLogService;
    }
    // I handle the given error.
    /**
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        // Log to the console. or Send to the error-logging service.
        try {
            this.errorLogService.logError(error);
        }
        catch (handlingError) {
            console.group('ErrorHandler');
            console.warn('Error when trying to output error.');
            console.error(handlingError);
            console.groupEnd();
        }
    }
}
FNErrorHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FNErrorHandler.ctorParameters = () => [
    { type: FNErrorLogSvcs }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FNErrorHandler.prototype.errorLogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tZXJyb3IuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvZXhjZXB0aW9uL2ZuLWVycm9yLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0FBWXJELE1BQU0sT0FBTyxjQUFjOzs7OztJQU16QixZQUFZLGVBQStCO1FBQ3pDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUdNLFdBQVcsQ0FBQyxLQUFVO1FBQzNCLDREQUE0RDtRQUM1RCxJQUFJO1lBQ0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FFdEM7UUFBQyxPQUFPLGFBQWEsRUFBRTtZQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0NBQW9DLENBQUMsQ0FBQztZQUNuRCxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUVwQjtJQUVILENBQUM7OztZQXpCRixVQUFVOzs7O1lBWEYsY0FBYzs7Ozs7OztJQWNyQix5Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvckhhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGTkVycm9yTG9nU3ZjcyB9IGZyb20gJy4vZm4tZXJyb3IubG9nLnN2Y3MnO1xyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBMb2dnaW5nRXJyb3JIYW5kbGVyT3B0aW9ucyB7XHJcbi8vICAgcmV0aHJvd0Vycm9yOiBib29sZWFuO1xyXG4vLyAgIHVud3JhcEVycm9yOiBib29sZWFuO1xyXG4vLyB9XHJcblxyXG4vLyAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuLy8gZXhwb3J0IGxldCBMT0dHSU5HX0VSUk9SX0hBTkRMRVJfT1BUSU9OUzogTG9nZ2luZ0Vycm9ySGFuZGxlck9wdGlvbnMgPSB7cmV0aHJvd0Vycm9yOiBmYWxzZSwgdW53cmFwRXJyb3I6IGZhbHNlfTtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGTkVycm9ySGFuZGxlciBpbXBsZW1lbnRzIEVycm9ySGFuZGxlciB7XHJcblxyXG4gIHByb3RlY3RlZCBlcnJvckxvZ1NlcnZpY2U6IEZORXJyb3JMb2dTdmNzO1xyXG5cclxuICAvLyBwcml2YXRlIG9wdGlvbnM6IExvZ2dpbmdFcnJvckhhbmRsZXJPcHRpb25zO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlcnJvckxvZ1NlcnZpY2U6IEZORXJyb3JMb2dTdmNzKSB7XHJcbiAgICB0aGlzLmVycm9yTG9nU2VydmljZSA9IGVycm9yTG9nU2VydmljZTtcclxuICB9XHJcblxyXG4gIC8vIEkgaGFuZGxlIHRoZSBnaXZlbiBlcnJvci5cclxuICBwdWJsaWMgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gTG9nIHRvIHRoZSBjb25zb2xlLiBvciBTZW5kIHRvIHRoZSBlcnJvci1sb2dnaW5nIHNlcnZpY2UuXHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLmVycm9yTG9nU2VydmljZS5sb2dFcnJvcihlcnJvcik7XHJcblxyXG4gICAgfSBjYXRjaCAoaGFuZGxpbmdFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmdyb3VwKCdFcnJvckhhbmRsZXInKTtcclxuICAgICAgY29uc29sZS53YXJuKCdFcnJvciB3aGVuIHRyeWluZyB0byBvdXRwdXQgZXJyb3IuJyk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoaGFuZGxpbmdFcnJvcik7XHJcbiAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4vLyBJIGFtIHRoZSBjb2xsZWN0aW9uIG9mIHByb3ZpZGVycyB1c2VkIGZvciB0aGlzIHNlcnZpY2UgYXQgdGhlIG1vZHVsZSBsZXZlbC5cclxuLy8gTm90aWNlIHRoYXQgd2UgYXJlIG92ZXJyaWRpbmcgdGhlIENPUkUgRXJyb3JIYW5kbGVyIHdpdGggb3VyIG93biBjbGFzcyBkZWZpbml0aW9uLlxyXG4vLyAtLVxyXG4vLyBDQVVUSU9OOiBUaGVzZSBhcmUgYXQgdGhlIEJPVFRPTSBvZiB0aGUgZmlsZSBzbyB0aGF0IHdlIGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXRcclxuLy8gY3JlYXRpbmcgZnV0dXJlUmVmKCkgYW5kIGhvaXN0aW5nIGJlaGF2aW9yLlxyXG4vLyBleHBvcnQgbGV0IExPR0dJTkdfRVJST1JfSEFORExFUl9QUk9WSURFUlMgPSBbXHJcbi8vIFx0Ly8ge1xyXG4vLyBcdC8vIFx0cHJvdmlkZTogTE9HR0lOR19FUlJPUl9IQU5ETEVSX09QVElPTlMsXHJcbi8vIFx0Ly8gXHR1c2VWYWx1ZTogTE9HR0lOR19FUlJPUl9IQU5ETEVSX09QVElPTlNcclxuLy8gXHQvLyB9LFxyXG4vLyBcdHtcclxuLy8gXHRcdHByb3ZpZGU6IEVycm9ySGFuZGxlcixcclxuLy8gXHRcdHVzZUNsYXNzOiBGTkVycm9ySGFuZGxlclxyXG4vLyBcdH1cclxuLy8gXTtcclxuXHJcbiJdfQ==