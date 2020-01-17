/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Theme Service
 * Service to manage theme globally
 */
import { Injectable } from '@angular/core';
var FnThemeService = /** @class */ (function () {
    function FnThemeService() {
    }
    /**
     * Apply Provided Theme Pallete
     * @param themePallete theme variables to be replaced.
     */
    /**
     * Apply Provided Theme Pallete
     * @param {?} themePallete theme variables to be replaced.
     * @return {?}
     */
    FnThemeService.prototype.setTheme = /**
     * Apply Provided Theme Pallete
     * @param {?} themePallete theme variables to be replaced.
     * @return {?}
     */
    function (themePallete) {
        Object.keys(themePallete).forEach((/**
         * @param {?} k
         * @return {?}
         */
        function (k) {
            return document.documentElement.style.setProperty("--" + k, themePallete[k]);
        }));
    };
    FnThemeService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FnThemeService.ctorParameters = function () { return []; };
    return FnThemeService;
}());
export { FnThemeService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tdGhlbWUtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kYXRpb24vIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZm4tdGhlbWUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekM7SUFFRTtJQUNBLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLGlDQUFROzs7OztJQUFmLFVBQWdCLFlBQW9CO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsQ0FBQztZQUNqQyxPQUFBLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFLLENBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBckUsQ0FBcUUsRUFDdEUsQ0FBQztJQUNKLENBQUM7O2dCQWJGLFVBQVU7Ozs7SUFjWCxxQkFBQztDQUFBLEFBZEQsSUFjQztTQWJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZW1lIFNlcnZpY2VcbiAqIFNlcnZpY2UgdG8gbWFuYWdlIHRoZW1lIGdsb2JhbGx5XG4gKi9cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGblRoZW1lU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IFByb3ZpZGVkIFRoZW1lIFBhbGxldGVcbiAgICogQHBhcmFtIHRoZW1lUGFsbGV0ZSB0aGVtZSB2YXJpYWJsZXMgdG8gYmUgcmVwbGFjZWQuXG4gICAqL1xuICBwdWJsaWMgc2V0VGhlbWUodGhlbWVQYWxsZXRlOiBvYmplY3QpIHtcbiAgICBPYmplY3Qua2V5cyh0aGVtZVBhbGxldGUpLmZvckVhY2goayA9PlxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7a31gLCB0aGVtZVBhbGxldGVba10pXG4gICAgKTtcbiAgfVxufVxuIl19