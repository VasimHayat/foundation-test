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
var FNErrorHandler = /** @class */ (function () {
    // private options: LoggingErrorHandlerOptions;
    function FNErrorHandler(errorLogService) {
        this.errorLogService = errorLogService;
    }
    // I handle the given error.
    // I handle the given error.
    /**
     * @param {?} error
     * @return {?}
     */
    FNErrorHandler.prototype.handleError = 
    // I handle the given error.
    /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
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
    };
    FNErrorHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FNErrorHandler.ctorParameters = function () { return [
        { type: FNErrorLogSvcs }
    ]; };
    return FNErrorHandler;
}());
export { FNErrorHandler };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FNErrorHandler.prototype.errorLogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tZXJyb3IuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvZXhjZXB0aW9uL2ZuLWVycm9yLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0FBV25EO0lBS0UsK0NBQStDO0lBRS9DLHdCQUFZLGVBQStCO1FBQ3pDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQ3pDLENBQUM7SUFFRCw0QkFBNEI7Ozs7OztJQUNyQixvQ0FBVzs7Ozs7O0lBQWxCLFVBQW1CLEtBQVU7UUFDM0IsNERBQTREO1FBQzVELElBQUk7WUFDRixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUV0QztRQUFDLE9BQU8sYUFBYSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0IsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBRXBCO0lBRUgsQ0FBQzs7Z0JBekJGLFVBQVU7Ozs7Z0JBWEgsY0FBYzs7SUFzQ3RCLHFCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0ExQlksY0FBYzs7Ozs7O0lBRXpCLHlDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXJyb3JIYW5kbGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGTkVycm9yTG9nU3Zjc30gZnJvbSAnLi9mbi1lcnJvci5sb2cuc3Zjcyc7XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIExvZ2dpbmdFcnJvckhhbmRsZXJPcHRpb25zIHtcclxuLy8gICByZXRocm93RXJyb3I6IGJvb2xlYW47XHJcbi8vICAgdW53cmFwRXJyb3I6IGJvb2xlYW47XHJcbi8vIH1cclxuXHJcbi8vIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4vLyBleHBvcnQgbGV0IExPR0dJTkdfRVJST1JfSEFORExFUl9PUFRJT05TOiBMb2dnaW5nRXJyb3JIYW5kbGVyT3B0aW9ucyA9IHtyZXRocm93RXJyb3I6IGZhbHNlLCB1bndyYXBFcnJvcjogZmFsc2V9O1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZORXJyb3JIYW5kbGVyIGltcGxlbWVudHMgRXJyb3JIYW5kbGVyIHtcclxuXHJcbiAgcHJvdGVjdGVkIGVycm9yTG9nU2VydmljZTogRk5FcnJvckxvZ1N2Y3M7XHJcblxyXG4gIC8vIHByaXZhdGUgb3B0aW9uczogTG9nZ2luZ0Vycm9ySGFuZGxlck9wdGlvbnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVycm9yTG9nU2VydmljZTogRk5FcnJvckxvZ1N2Y3MpIHtcclxuICAgIHRoaXMuZXJyb3JMb2dTZXJ2aWNlID0gZXJyb3JMb2dTZXJ2aWNlO1xyXG4gIH1cclxuXHJcbiAgLy8gSSBoYW5kbGUgdGhlIGdpdmVuIGVycm9yLlxyXG4gIHB1YmxpYyBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogdm9pZCB7XHJcbiAgICAvLyBMb2cgdG8gdGhlIGNvbnNvbGUuIG9yIFNlbmQgdG8gdGhlIGVycm9yLWxvZ2dpbmcgc2VydmljZS5cclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuZXJyb3JMb2dTZXJ2aWNlLmxvZ0Vycm9yKGVycm9yKTtcclxuXHJcbiAgICB9IGNhdGNoIChoYW5kbGluZ0Vycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZ3JvdXAoJ0Vycm9ySGFuZGxlcicpO1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0Vycm9yIHdoZW4gdHJ5aW5nIHRvIG91dHB1dCBlcnJvci4nKTtcclxuICAgICAgY29uc29sZS5lcnJvcihoYW5kbGluZ0Vycm9yKTtcclxuICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8vIEkgYW0gdGhlIGNvbGxlY3Rpb24gb2YgcHJvdmlkZXJzIHVzZWQgZm9yIHRoaXMgc2VydmljZSBhdCB0aGUgbW9kdWxlIGxldmVsLlxyXG4vLyBOb3RpY2UgdGhhdCB3ZSBhcmUgb3ZlcnJpZGluZyB0aGUgQ09SRSBFcnJvckhhbmRsZXIgd2l0aCBvdXIgb3duIGNsYXNzIGRlZmluaXRpb24uXHJcbi8vIC0tXHJcbi8vIENBVVRJT046IFRoZXNlIGFyZSBhdCB0aGUgQk9UVE9NIG9mIHRoZSBmaWxlIHNvIHRoYXQgd2UgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dFxyXG4vLyBjcmVhdGluZyBmdXR1cmVSZWYoKSBhbmQgaG9pc3RpbmcgYmVoYXZpb3IuXHJcbi8vIGV4cG9ydCBsZXQgTE9HR0lOR19FUlJPUl9IQU5ETEVSX1BST1ZJREVSUyA9IFtcclxuLy8gXHQvLyB7XHJcbi8vIFx0Ly8gXHRwcm92aWRlOiBMT0dHSU5HX0VSUk9SX0hBTkRMRVJfT1BUSU9OUyxcclxuLy8gXHQvLyBcdHVzZVZhbHVlOiBMT0dHSU5HX0VSUk9SX0hBTkRMRVJfT1BUSU9OU1xyXG4vLyBcdC8vIH0sXHJcbi8vIFx0e1xyXG4vLyBcdFx0cHJvdmlkZTogRXJyb3JIYW5kbGVyLFxyXG4vLyBcdFx0dXNlQ2xhc3M6IEZORXJyb3JIYW5kbGVyXHJcbi8vIFx0fVxyXG4vLyBdO1xyXG5cclxuIl19